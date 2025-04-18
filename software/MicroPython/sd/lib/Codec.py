from machine import Pin, SoftI2C  # type: ignore

# I2C Configuration
I2C_SCL_PIN = 18  # Replace with your SCL pin
I2C_SDA_PIN = 17  # Replace with your SDA pin
ES7210_I2C_ADDRESS = 0x40
ES8311_I2C_ADDRESS = 0x18

# Initialize I2C
i2c = SoftI2C(scl=Pin(I2C_SCL_PIN), sda=Pin(I2C_SDA_PIN), freq=100000)

def es7210_write_register(register, value):
    """
    Write a value to an ES7210 register via I2C.
    """
    i2c.writeto_mem(ES7210_I2C_ADDRESS, register, bytes([value]))

def es7210_read_register(register):
    """
    Read a value from an ES7210 register via I2C.
    """
    return i2c.readfrom_mem(ES7210_I2C_ADDRESS, register, 1)[0]

def es7210_config():
    """
    Initialize the ES7210 ADC.
    """
    print("Initializing ES7210...")
    try:
        # reset module
        es7210_write_register(0x00, 0xFF)
        es7210_write_register(0x00, 0x32)
        # chip initialization
        es7210_write_register(0x09, 0x30)
        es7210_write_register(0x0A, 0x30)
        # 
        es7210_write_register(0x23, 0x26)
        es7210_write_register(0x22, 0x06)
        es7210_write_register(0x21, 0x26)
        es7210_write_register(0x20, 0x06)
        # serial digital audio format -> 16bit, I2S
        es7210_write_register(0x11, 0x60)
        # set ADC data out -> LRCK TDM
        es7210_write_register(0x12, 0x02)
        es7210_write_register(0x40, 0xC3)
        # control MIC bias -> 2.87V
        es7210_write_register(0x41, 0x70)
        es7210_write_register(0x42, 0x70)
        # control MIC gain -> 36dB
        es7210_write_register(0x43, 0x1D)
        es7210_write_register(0x44, 0x1D)
        es7210_write_register(0x45, 0x1D)
        es7210_write_register(0x46, 0x1D)
        # MIC power control
        es7210_write_register(0x47, 0x08)
        es7210_write_register(0x48, 0x08)
        es7210_write_register(0x49, 0x08)
        es7210_write_register(0x4A, 0x08)
        es7210_write_register(0x07, 0x20)
        # main clock control
        es7210_write_register(0x02, 0xC1)
        es7210_write_register(0x06, 0x04)
        # MIC power down
        es7210_write_register(0x4B, 0x0F)
        es7210_write_register(0x4C, 0x0F)
        # reset control
        es7210_write_register(0x00, 0x71)
        es7210_write_register(0x00, 0x41)

        print("ES7210 initialized successfully.")
    except Exception as e:
        print(f"Failed to initialize ES7210: {e}")
        return

def es8311_write_register(register, value):
    """
    Write a value to an ES8311 register via I2C.
    """
    i2c.writeto_mem(ES8311_I2C_ADDRESS, register, bytes([value]))

def es8311_read_register(register):
    """
    Read a value from an ES8311 register via I2C.
    """
    return i2c.readfrom_mem(ES8311_I2C_ADDRESS, register, 1)[0]

def es8311_config():
    """
    Initialize the ES8311 ADC.
    """
    print("Initializing ES8311...")
    try:
        es8311_write_register(0x00, 0x1F)
        es8311_write_register(0x00, 0x00)
        es8311_write_register(0x00, 0x80)
        # clock config
        es7210_write_register(0x01, 0x3F)
        es7210_write_register(0x06, 0x3F)
        # configure clock divider
        es7210_write_register(0x02, 0x00)
        es7210_write_register(0x05, 0x00)
        es7210_write_register(0x16, 0x03)
        es7210_write_register(0x03, 0x11)
        es7210_write_register(0x04, 0x11)
        # setup audio format
        es7210_write_register(0x00, 0xBF)
        es7210_write_register(0x09, 0x0C)
        es7210_write_register(0x0A, 0x0C)

        es8311_write_register(0x0D, 0x01)
        es8311_write_register(0x0E, 0x02)
        es8311_write_register(0x12, 0x00)
        es8311_write_register(0x13, 0x10)
        es8311_write_register(0x1C, 0x6A)
        es8311_write_register(0x37, 0x08)

        print("ES8311 initialized successfully.")
    except Exception as e:
        print(f"Failed to initialize ES8311: {e}")
        return
