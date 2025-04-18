import time

import ubluetooth  # type: ignore
from bluetooth import BLE  # type: ignore


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
        if event == 1:
            print("Connected")
            self.connected = True
        elif event == 2:
            print("Disconnected")
            self.connected = False
            self.advertiser()
        elif event == 3:
            conn_handle, attr_handle = data
            if attr_handle == self.rx_handle:
                self.msg_buffer = self.ble.gatts_read(self.rx_handle).decode('utf-8')

    def register(self):
        UART_SERVICE_UUID = ubluetooth.UUID("6e400001-b5a3-f393-e0a9-e50e24dcca9e")
        UART_TX = (ubluetooth.UUID("6e400003-b5a3-f393-e0a9-e50e24dcca9e"), ubluetooth.FLAG_NOTIFY)
        UART_RX = (ubluetooth.UUID("6e400002-b5a3-f393-e0a9-e50e24dcca9e"), ubluetooth.FLAG_WRITE)
        UART_SERVICE = (UART_SERVICE_UUID, (UART_TX, UART_RX,))
        SERVICES = (UART_SERVICE,)
        ((self.tx_handle, self.rx_handle,),) = self.ble.gatts_register_services(SERVICES)

    def advertiser(self):
        name_bytes = self.name.encode()
        adv_data = bytearray(b'\x02\x01\x06')  # Flags
        adv_data += bytes([len(name_bytes) + 1]) + b'\x09' + name_bytes  # Complete Local Name
        self.ble.gap_advertise(100, adv_data)  # Advertise for 100 seconds or until connected

