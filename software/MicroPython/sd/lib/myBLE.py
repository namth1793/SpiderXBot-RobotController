import time

import ubluetooth  # type: ignore
from bluetooth import BLE  # type: ignore
from micropython import const  # type: ignore

_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

class BLEPeripheral:
    def __init__(self, name="SpiderXBot"):
        self.ble = BLE()
        self.ble.active(True)
        self.ble.irq(self.ble_irq)
        self.name = name
        self.connected = False
        self.msg_buffer = ""
        self.rx_handle = 0x00
        self.register()
        self.advertiser()
        self.ble.gatts_set_buffer(self.rx_handle, 100, True)  # enable long write support

    def ble_irq(self, event, data):
        if event == _IRQ_CENTRAL_CONNECT:
            print("Connected")
            self.connected = True
        elif event == _IRQ_CENTRAL_DISCONNECT:
            print("Disconnected")
            self.connected = False
            self.advertiser()
        elif event == _IRQ_GATTS_WRITE:
            conn_handle, attr_handle = data
            if attr_handle == self.rx_handle:
                self.msg_buffer = self.ble.gatts_read(self.rx_handle).decode('utf-8')

    def register(self):
        UART_SERVICE_UUID = ubluetooth.UUID("6E400001-B5A3-F393-E0A9-E50E24DCCA9E")
        UART_TX = (ubluetooth.UUID("6E400003-B5A3-F393-E0A9-E50E24DCCA9E"), ubluetooth.FLAG_NOTIFY)
        UART_RX = (ubluetooth.UUID("6E400002-B5A3-F393-E0A9-E50E24DCCA9E"), ubluetooth.FLAG_WRITE)
        UART_SERVICE = (UART_SERVICE_UUID, (UART_TX, UART_RX,))
        SERVICES = (UART_SERVICE,)
        ((self.tx_handle, self.rx_handle,),) = self.ble.gatts_register_services(SERVICES)

    def advertiser(self):
        name_bytes = bytes(self.name, 'utf-8')
        adv_data = bytearray(b'\x02\x01\x06' + bytes([len(name_bytes) + 1]) + b'\x09' + name_bytes)
        self.ble.gap_advertise(100, adv_data)
