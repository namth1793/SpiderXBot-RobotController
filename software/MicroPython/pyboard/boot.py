import webrepl

webrepl.start()

import machine

machine.freq(240000000)

import os  # check to see if there is main.py in SD card, if there is, overwrite the current file and restart
import sys

from machine import SDCard

try:
    sd = SDCard(slot=3, sck=12, mosi=11, miso=13, cs=14)  # match your working pins
    os.mount(sd, '/sdcard')
    sys.path.append('/lib')
    sys.path.append('/sdcard')
    sys.path.append('/sdcard/lib')
    print("SD card mounted successfully.")
except Exception as e:
    print("Failed to mount SD card:", e)
    
try:
    os.stat("/sdcard/main.py")
    print("Found main.py, overwrite the main.py")
    
    # remove current main.py
    os.remove("main.py")
    
    with open('main.py', 'wt') as outfile:
        file = open('/sdcard/main.py', 'rt').read()
        outfile.write(file)
    
    # remove main.py in SD card
    os.remove("/sdcard/main.py")

except:
    print("No new file, continue")

import time

# check to see if user wants to revert back to original main.py
import machine

# check to see if button is pressed down
left = machine.Pin(4, machine.Pin.IN)
right = machine.Pin(38, machine.Pin.IN)

if left.value() == 0:
    from audio import player
    from lib.display import *
    
    ring = LEDRing()
    matrix = Matrix()
    ring.reset()
    matrix.reset()
    prev_left = 1
    prev_right = 1
    progress = 0

    mPlayer = player(None)
    mPlayer.set_vol(100)

    start_ms = time.ticks_ms()   # Mark start time in milliseconds
    duration = 3000             # 3 seconds total
    led_count = 12
    step = duration // led_count  # How many ms each LED represents (250 ms)

    progress = 0  # Keep track of how many LEDs are lit
    ring.set_manual(0, (100, 0, 0))
        
    while True:
        if left.value() != 0:
            machine.reset()
        
        elapsed = time.ticks_diff(time.ticks_ms(), start_ms)
        
        if elapsed >= duration:
            break
        
        new_progress = elapsed // step  
        
        if new_progress != progress and new_progress < led_count:
            ring.set_manual(new_progress, (100, 0, 0))
            progress = new_progress
        
        time.sleep_ms(30)
    
    mPlayer.play('file://sdcard/lib/data/reset-robot.wav')
    matrix.scroll("RESET", blue=100, speed=0.05)

    mPlayer.play('file://sdcard/lib/data/reset-guidance.wav')
    for i in range(4):
        ring.set_manual(9, (0, 0, 100))
        time.sleep_ms(200)
        ring.set_manual(9, (0, 0, 0))
        time.sleep_ms(200)
    ring.set_manual(9, (100, 0, 0))
    time.sleep_ms(600)
    for i in range(4):
        ring.set_manual(3, (0, 0, 100))
        time.sleep_ms(200)
        ring.set_manual(3, (0, 0, 0))
        time.sleep_ms(200)
    ring.set_manual(3, (100, 0, 0))
    
    # run reset_sequence
    mode = 0
    prev_left = left.value()
    mPlayer.play('file://sdcard/lib/data/portal.wav')
    matrix.scroll("PORTAL", green=100, speed=0.05)
    while right.value() == 1:
        if left.value() == 0 and prev_left == 1:
            mPlayer.play('file://sdcard/lib/data/button.wav')
            time.sleep_ms(200)
            mode = (mode + 1) % 2
            if mode == 0:
                mPlayer.play('file://sdcard/lib/data/portal.wav')
                matrix.scroll("PORTAL", green=100, speed=0.05)
            elif mode == 1:
                mPlayer.play('file://sdcard/lib/data/factory.wav')
                matrix.scroll("FACTORY", green=100, speed=0.05)
        
        prev_left = left.value()
        time.sleep(0.001)
    
    mPlayer.play('file://sdcard/lib/data/button.wav')

    if mode == 0:
        with open('/sdcard/main.py', 'wt') as outfile:
            file = open('main-server.py', 'rt').read()
            outfile.write(file)
        machine.reset()
    elif mode == 1:
        import json

        ## fix portal config file
        with open("/sdcard/config/portal-config.json") as file:
            content = json.loads(file.read())
        content["pythonWebREPL"]["endpoint"] = "ws://192.168.4.1:8266"
        content["onboarding"]["hasProvidedWifiCredentials"] = False
        
        with open("/sdcard/config/portal-config.json", "w") as outfile:
            outfile.write(json.dumps(content))
        
        ## fix brain config file
        with open("/sdcard/config/robot-config.json") as file:
            content = json.loads(file.read())
        content["wifi"]["ssid"] = ""
        content["wifi"]["password"] = ""
        with open("/sdcard/config/robot-config.json", "w") as outfile:
            outfile.write(json.dumps(content))
        
        try:
            os.stat("/sdcard/record.wav")
            os.remove("/sdcard/record.wav")

        except:
            print("No old records, continue")
        
        with open('/sdcard/main.py', 'wt') as outfile:
            file = open('main-server.py', 'rt').read()
            outfile.write(file)

        with open("state", "w") as file:
            file.write("0")
        
        machine.reset()