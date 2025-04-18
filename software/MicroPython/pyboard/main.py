import json
import time
import urequests as requests

import machine  # type: ignore
import network  # type: ignore
import webrepl  # type: ignore
from audio import player  # type: ignore
from lib.chatbot import *
from lib.display import *
from lib.kinematics import Crawler
from lib.microphone import *
from lib.myBLE import BLEPeripheral
from lib.network.microWebSrv import MicroWebSrv
from lib.ultrasonic import HCSR04
from lib.wireless import *

###############################################################
ble = BLEPeripheral()
myUltra = HCSR04(trigger_pin=39, echo_pin=40)
robot = Crawler()
ring = LEDRing()
matrix = Matrix()
# myBot = ChatBot()

ring.reset()
matrix.reset()

text = ""
wifi = None
ap = None
last_wifi_ap_list = None
last_wifi_ap_scan_time = None
mPlayer = None

###############################################################
def startup():
    global mPlayer
    mPlayer = player(None)
    mPlayer.set_vol(100)
    try:
        print("Attempting to play audio file...")
        mPlayer.play('file://sdcard/lib/data/hello.wav')
        print("Audio playback started")
        
    except Exception as e:
        print("Startup error:", e)
    
    for i in range(12):
        ring.set_manual(i, (0, 100, 0))
        time.sleep(0.05)
    ring.reset()

    while mPlayer.get_state()['status'] == player.STATUS_RUNNING:
        time.sleep(1)

###############################################################
def test_connect_wifi():
    global wifi
    global mPlayer

    wifi = WiFi()

    try:
        with open("/sdcard/config/robot-config.json") as file:
            content = json.loads(file.read())
        if content["wifi"]["ssid"] != "":
            print("Connecting to WiFi:", content["wifi"]["ssid"], content["wifi"]["password"])
            wifi.connect(content["wifi"]["ssid"], content["wifi"]["password"], verbose=True)
    except Exception as e:
        print("WiFi check and connect error:", e)
        pass

    if wifi.wlan.isconnected():
        if mPlayer is None:
            from audio import player
            mPlayer = player(None)
            mPlayer.set_vol(100)
        mPlayer.play('file://sdcard/lib/data/ketnoi-wifi.wav')
        time.sleep(2)

###############################################################
def check_and_connect_wifi():
    global wifi
    global mPlayer

    wifi = WiFi()

    try:
        with open("/sdcard/config/robot-config.json") as file:
            content = json.loads(file.read())
        if content["wifi"]["ssid"] != "":
            print("Connecting to WiFi:", content["wifi"]["ssid"], content["wifi"]["password"])
            wifi.connect(content["wifi"]["ssid"], content["wifi"]["password"], verbose=True)
    except Exception as e:
        print("WiFi check and connect error:", e)
        pass

    if wifi.wlan.isconnected():
        with open("/sdcard/config/portal-config.json") as file:
            content = json.loads(file.read())
        content["pythonWebREPL"]["endpoint"] = "ws://{}:8266".format(wifi.wlan.ifconfig()[0])
        content["onboarding"]["hasProvidedWifiCredentials"] = True
        
        with open("/sdcard/config/portal-config.json", "w") as outfile:
            outfile.write(json.dumps(content))
    else:
        with open("/sdcard/config/portal-config.json") as file:
            content = json.loads(file.read())
        content["pythonWebREPL"]["endpoint"] = "ws://192.168.4.1:8266"
        content["onboarding"]["hasProvidedWifiCredentials"] = False
        
        with open("/sdcard/config/portal-config.json", "w") as outfile:
            outfile.write(json.dumps(content))

###############################################################
def init_ap():
    global ap

    ssid = 'SpiderXBot'
    ap = network.WLAN(network.AP_IF)
    ap.active(True)

    while ap.active() == False:
        time.sleep(0.01)

    ap.config(essid=ssid, pm=network.WLAN.PM_PERFORMANCE, txpower=20, channel=6)

    print('Access point created successfully')
    print(ap.config('essid'), ap.ifconfig())

###############################################################
def start_dns():
    global wifi

    if not wifi.wlan.isconnected():
        from lib.network.microDNSSrv import MicroDNSSrv
        if MicroDNSSrv.Create({"portal.cyobot.com": "192.168.4.1"}):
            print("MicroDNSSrv started.")
        else :
            print("Error to starts MicroDNSSrv...")

###############################################################
def getWiFiAPList():
    global wifi
    global ap

    def signal_strength(x):
        if x < -80:
            return 0
        elif x < -60:
            return 1
        elif x < -40:
            return 2
        else:
            return 3
    
    try:
        ap_list = wifi.wlan.scan()
    except:
        try:
            ap_list = ap.scan()
        except:
            pass
    content = [{"ssid": x[0].decode('ascii'), "strength": signal_strength(x[3])} for x in ap_list]
    return content

###############################################################
@MicroWebSrv.route('/api/config')
def _httpHandlerGetConfig(httpClient, httpResponse):
    httpResponse.WriteResponseFile("/sdcard/config/portal-config.json", contentType="application/json", headers={
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })

@MicroWebSrv.route('/api/internet')
def _httpHandlerGetWiFiConnectivity(httpClient, httpResponse):
    if wifi.wlan.isconnected():
        httpResponse.WriteResponseJSONOk(obj=json.loads('{"status": "connected"}'), headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })
    else:
        httpResponse.WriteResponseJSONOk(obj=json.loads('{"status": "disconnected"}'), headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })

@MicroWebSrv.route('/api/wifi')
def _httpHandlerGetWiFi(httpClient, httpResponse):
    global last_wifi_ap_list
    global last_wifi_ap_scan_time
    if time.time() - last_wifi_ap_scan_time > 10:
        last_wifi_ap_list = getWiFiAPList()
        last_wifi_ap_scan_time = time.time()
    httpResponse.WriteResponseJSONOk(obj=last_wifi_ap_list, headers={
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })

@MicroWebSrv.route('/api/wifi', method='OPTIONS')
def _httpHandlerOptionWiFiCredential(httpClient, httpResponse):
    httpResponse.WriteResponseOk(headers={
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
    })

@MicroWebSrv.route('/api/wifi', 'POST')
def _httpHandlerPostWiFiCredential(httpClient, httpResponse):
    # receive credentials from portal
    # attempt to connect
    # if successful, update config.json (pythonwebrepl --> ws://<NEW IP>:8266) AND onboarding.hasProvidedWifiCredentials --> True
    # if not, do not need to update
    # return "success" or "fail" to client
    data = httpClient.ReadRequestContentAsJSON()
    global mPlayer

    # try 4 times (5 seconds/time)
    if mPlayer is None:
        from audio import player  # type: ignore
        mPlayer = player(None)
        mPlayer.set_vol(100)
    mPlayer.play('file://sdcard/lib/data/wifi-connecting.wav')
    for i in range(4):
        wifi.connect(data["ssid"], data["password"], verbose=True)
        if wifi.wlan.isconnected():
            mPlayer.play('file://sdcard/lib/data/wifi-connected.wav')
            time.sleep(2)
            break

    #! TODO: also store this credential in INTERNAL config so that we can connect in the future auto
    if wifi.wlan.isconnected():
        with open("/sdcard/config/portal-config.json") as file:
            content = json.loads(file.read())
        content["pythonWebREPL"]["endpoint"] = "ws://{}:8266".format(wifi.wlan.ifconfig()[0])
        content["onboarding"]["hasProvidedWifiCredentials"] = True
        
        with open("/sdcard/config/portal-config.json", "w") as outfile:
            outfile.write(json.dumps(content))

        with open("/sdcard/config/robot-config.json") as file:
            content = json.loads(file.read())
        content["wifi"]["ssid"] = data["ssid"]
        content["wifi"]["password"] = data["password"]

        with open("/sdcard/config/robot-config.json", "w") as outfile:
            outfile.write(json.dumps(content))

        httpResponse.WriteResponseJSONOk(obj=json.dumps("success"), headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })
        
        time.sleep(2)
        with open("state", "w") as file:
            file.write("2")
        import machine  # type: ignore
        machine.reset()

    else:
        httpResponse.WriteResponseJSONOk(obj=json.dumps("fail"), headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })

@MicroWebSrv.route('/api/config', 'POST')
def _httpHandlerPostConfig(httpClient, httpResponse):
    data = httpClient.ReadRequestContentAsJSON()
    print(data)
    
    try:
        with open("/sdcard/config/portal-config.json") as file:
            content = json.loads(file.read())
        content["pythonWebREPL"]["endpoint"] = data["wsEndpoint"]
        
        with open("/sdcard/config/portal-config.json", "w") as outfile:
            outfile.write(json.dumps(content))
        
        httpResponse.WriteResponseOk(headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })
    except Exception as e:
        print(e)
        httpResponse.WriteReponseError(500, headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })

@MicroWebSrv.route('/api/deploy', 'POST')
def _httpHandlerPostConfig(httpClient, httpResponse):
    data = httpClient.ReadRequestContentAsJSON()
    with open("/sdcard/main.py", "w") as outfile:
        outfile.write(data["code"])
    import machine  # type: ignore
    machine.reset()
    try:
        httpResponse.WriteResponseOk(headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })
    except Exception as e:
        print(e)
        httpResponse.WriteReponseError(500, headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        })

srv = MicroWebSrv(webPath='/sdcard/portal/')
srv.Start(threaded=True)

###############################################################
def wait_for_websocket():
    global wifi
    global matrix
    global ring

    if wifi.wlan.isconnected():
        # display IP address on screen
        left = machine.Pin(4, machine.Pin.IN)
        right = machine.Pin(38, machine.Pin.IN)
        ip_address = wifi.wlan.ifconfig()[0]
        character_list = [char for char in ip_address]
        offset_list = [(-7*i) for i in range(len(character_list))]
        
        matrix.reset()
        for i in range(len(character_list)):
            if offset_list[i] <= 6 and offset_list[i] >=-6:
                matrix.set_character(character_list[i], offset = offset_list[i] // 1, multiplex = True, blue = 100)
        matrix.np.write()
        
        redraw = False
        
        while webrepl.client_s is None:
            redraw = False

            if left.value() != 0 and right.value() == 0:
                for i in range(len(offset_list)):
                    offset_list.append(offset_list.pop(0) + 0.1)
                redraw = True
            elif right.value() != 0 and left.value() == 0:
                for i in range(len(offset_list)):
                    offset_list.append(offset_list.pop(0) - 0.1)
                redraw = True
            
            if redraw:
                matrix.reset()
                for i in range(len(character_list)):
                    if offset_list[i] <= 6 and offset_list[i] >=-6:
                        matrix.set_character(character_list[i], offset = offset_list[i] // 1, multiplex = True, blue = 100)
                matrix.np.write()
            else:
                time.sleep(1.0)
    else:
        on=True
        while webrepl.client_s is None:
            if on:
                matrix.reset()
                on = False
            else:
                matrix.set_manual(16, (100, 0, 100))
                on = True
            time.sleep(1.0)

    matrix.reset()

###############################################################

def obstacleAvoid():
    global myUltra
    global robot
    while ble.msg_buffer == "avoid":
        distance = myUltra.distance_cm()
        print(f"distance avoid = {distance}")
        if distance < 20:
            robot.command("backward")
            time.sleep(0.5)
            robot.command("rotate_left")
            time.sleep(0.5)
        else:
            robot.command("forward")
        time.sleep(0.1)

def voiceCommand():
    recording_audio()
    time.sleep(2)
    # myBot.transcribe_audio(audio_file="question.wav")
    play_audio("bluetooth-connected.wav")
    print("==========  DONE PLAYBACK ==========")

def disconnect_wifi():
    global wifi
    print("Disconnecting WiFi...")
    
    if wifi and wifi.wlan:
        if wifi.wlan.isconnected():
            print("Currently connected to WiFi, disconnecting...")
            wifi.wlan.disconnect()
            print("WiFi disconnected")
        
        print("Deactivating WiFi interface...")
        wifi.wlan.active(False)
        print("WiFi interface deactivated")
        
        # Reset WiFi object
        wifi = None
        print("WiFi object reset")
    else:
        print("WiFi not initialized")
        
def ble_control():
    while ble.connected:
        if ble.msg_buffer == "connect wifi":
            machine.reset()
        elif ble.msg_buffer == "reset":
            disconnect_wifi()
        elif ble.msg_buffer == "forward":
            robot.command("forward")
        elif ble.msg_buffer == "backward":
            robot.command("backward")
        elif ble.msg_buffer == "left":
            robot.command("rotate_left")
        elif ble.msg_buffer == "right":
            robot.command("rotate_right")
        elif ble.msg_buffer == "stop":
            robot.command("stop")
        elif ble.msg_buffer == "avoid":
            obstacleAvoid()
            ble.msg_buffer = ""
        elif ble.msg_buffer == "voice":
            voiceCommand()
            ble.msg_buffer = ""
        time.sleep(0.1)
    
def spider_BLE_config():
    global ble, mPlayer
    print("Start BLE...")
    while ble.connected == False:
        time.sleep(0.1)
    print("BLE connected")

##################### Main Program ####################

with open("state") as file:
    state = file.read()

if state == "0":
    with open("state", "w") as file:
        file.write("1")
    startup()
    machine.reset()

elif state == "1":
    with open("state", "w") as file:
        file.write("2")
    spider_BLE_config()
    ble_control()

elif state == "2":
    with open("state", "w") as file:
        file.write("0")
    test_connect_wifi()
    response = requests.get('http://jsonplaceholder.typicode.com/albums/1')
    print(response.text)
    while wifi.wlan.isconnected():
        time.sleep(0.1)
    machine.reset()