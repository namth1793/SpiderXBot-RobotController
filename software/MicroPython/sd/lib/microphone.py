from machine import I2S, Pin, SoftI2C, freq

# Declare global variables
wav = None
audio_in = None

# ======= I2S CONFIGURATION =======
SCK_PIN = 9
WS_PIN = 45
SD_PIN = 10
I2S_ID = 0
BUFFER_LENGTH_IN_BYTES = 8192

# ======= AUDIO CONFIGURATION =======
WAV_FILE = "question.wav"
RECORD_TIME_IN_SECONDS = 5
WAV_SAMPLE_SIZE_IN_BITS = 16
SAMPLE_RATE_IN_HZ = 16000

NUM_CHANNELS = 2
WAV_SAMPLE_SIZE_IN_BYTES = WAV_SAMPLE_SIZE_IN_BITS // 8
RECORDING_SIZE_IN_BYTES = (
    RECORD_TIME_IN_SECONDS * SAMPLE_RATE_IN_HZ * WAV_SAMPLE_SIZE_IN_BYTES * NUM_CHANNELS
)

# I2C Configuration
I2C_SCL_PIN = 18  # Replace with your SCL pin
I2C_SDA_PIN = 17  # Replace with your SDA pin
ES7210_I2C_ADDRESS = 0x40  # Default I2C address for ES7210

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
        # Reset ES7210
        es7210_write_register(0x00, 0xFF)
        print(f"Register 0x00: {es7210_read_register(0x00):02X}")
        es7210_write_register(0x00, 0x32)
        print(f"Register 0x00: {es7210_read_register(0x00):02X}")

        # set the initialization time when the device power up
        es7210_write_register(0x09, 0x30)
        print(f"Register 0x09: {es7210_read_register(0x09):02X}")
        es7210_write_register(0x0A, 0x30)
        print(f"Register 0x0A: {es7210_read_register(0x0A):02X}")
        # configure HPF for ADC 1-4
        es7210_write_register(0x23, 0x2A)
        es7210_write_register(0x22, 0x0A)
        es7210_write_register(0x21, 0x2A)
        es7210_write_register(0x20, 0x0A)
        # Set bits per sample to 16, data protocal to I2S, enable 1xFS TDM
        es7210_write_register(0x11, 0x00 | 0x60)
        print(f"Register 0x11: {es7210_read_register(0x11):02X}")
        es7210_write_register(0x12, 0x02)
        print(f"Register 0x12: {es7210_read_register(0x12):02X}")
        # Configure analog power and VMID voltage
        es7210_write_register(0x40, 0xC3)
        # Set MIC14 bias to 2.87V
        es7210_write_register(0x41, 0x70)
        es7210_write_register(0x42, 0x70)
        # Set MIC1-4 gain to 30dB
        es7210_write_register(0x43, 10 | 0x10)
        print(f"Register 0x43: {es7210_read_register(0x43):02X}")
        es7210_write_register(0x44, 10 | 0x10)
        print(f"Register 0x44: {es7210_read_register(0x44):02X}")
        es7210_write_register(0x45, 10 | 0x10)
        print(f"Register 0x45: {es7210_read_register(0x45):02X}")
        es7210_write_register(0x46, 10 | 0x10)
        print(f"Register 0x46: {es7210_read_register(0x46):02X}")
        # Power on MIC1-4
        es7210_write_register(0x47, 0x08)
        print(f"Register 0x47: {es7210_read_register(0x47):02X}")
        es7210_write_register(0x48, 0x08)
        print(f"Register 0x48: {es7210_read_register(0x48):02X}")
        es7210_write_register(0x49, 0x08)
        print(f"Register 0x49: {es7210_read_register(0x49):02X}")
        es7210_write_register(0x4A, 0x08)
        print(f"Register 0x4A: {es7210_read_register(0x4A):02X}")
        # Set ADC sample rate to 16kHz
        es7210_write_register(0x07, 0x20)
        es7210_write_register(0x02, 0x03 | (0x01 << 6) | (0x01 << 7))
        es7210_write_register(0x04, 0x03)
        es7210_write_register(0x05, 0x00)
        # Power down DLL
        es7210_write_register(0x06, 0x04)
        # Power on MIC1-4 bias & ADC1-4 & PGA1-4 Power
        es7210_write_register(0x4B, 0x0F)
        es7210_write_register(0x4C, 0x0F)
        # Enable Device
        es7210_write_register(0x00, 0x71)
        es7210_write_register(0x00, 0x41)
        # Set volume
        es7210_write_register(0x1B, 191)
        es7210_write_register(0x1C, 191)
        es7210_write_register(0x1D, 191)
        es7210_write_register(0x1E, 191)
        
        print("ES7210 initialized successfully.")
    except Exception as e:
        print(f"Failed to initialize ES7210: {e}")
        return
        
def create_wav_header(sampleRate, bitsPerSample, num_channels, num_samples):
    datasize = num_samples * num_channels * bitsPerSample // 8
    o = bytes("RIFF", "ascii")  # (4byte) Marks file as RIFF
    o += (datasize + 36).to_bytes(
        4, "little"
    )  # (4byte) File size in bytes excluding this and RIFF marker
    o += bytes("WAVE", "ascii")  # (4byte) File type
    o += bytes("fmt ", "ascii")  # (4byte) Format Chunk Marker
    o += (16).to_bytes(4, "little")  # (4byte) Length of above format data
    o += (1).to_bytes(2, "little")  # (2byte) Format type (1 - PCM)
    o += (num_channels).to_bytes(2, "little")  # (2byte) Number of channels
    o += (sampleRate).to_bytes(4, "little")  # (4byte) Sample rate
    o += (sampleRate * num_channels * bitsPerSample // 8).to_bytes(4, "little")  # (4byte) Byte rate
    o += (num_channels * bitsPerSample // 8).to_bytes(2, "little")  # (2byte) Block align
    o += (bitsPerSample).to_bytes(2, "little")  # (2byte) Bits per sample
    o += bytes("data", "ascii")  # (4byte) Data Chunk Marker
    o += (datasize).to_bytes(4, "little")  # (4byte) Data size in bytes
    return o

def recording_audio():
    global wav, audio_in  # Declare as global to modify them
    print("I2C devices found:", i2c.scan())
    es7210_config()  # Initialize the ES7210 ADC
    # Open WAV file
    wav = open("/sdcard/lib/data/" + WAV_FILE, "wb")

    # Create WAV header and write to SD card
    wav_header = create_wav_header(
        SAMPLE_RATE_IN_HZ,
        WAV_SAMPLE_SIZE_IN_BITS,
        NUM_CHANNELS,
        SAMPLE_RATE_IN_HZ * RECORD_TIME_IN_SECONDS,
    )
    
    num_bytes_written = wav.write(wav_header)

    # Initialize I2S
    try:
        audio_in = I2S(
            I2S_ID,
            sck=Pin(SCK_PIN),
            ws=Pin(WS_PIN),
            sd=Pin(SD_PIN),
            mode=I2S.RX,
            bits=WAV_SAMPLE_SIZE_IN_BITS,
            format=I2S.STEREO,
            rate=SAMPLE_RATE_IN_HZ,
            ibuf=BUFFER_LENGTH_IN_BYTES,
        )
        print("I2S initialized successfully.")
    except Exception as e:
        print(f"Failed to initialize I2S: {e}")
        return

    # Allocate sample arrays
    mic_samples = bytearray(10000)
    mic_samples_mv = memoryview(mic_samples)

    num_sample_bytes_written_to_wav = 0
        
    print("Recording size: {} bytes".format(RECORDING_SIZE_IN_BYTES))
    print("==========  START RECORDING ==========")
    try:
        while num_sample_bytes_written_to_wav < RECORDING_SIZE_IN_BYTES:
            # read a block of samples from the I2S microphone
            num_bytes_read_from_mic = audio_in.readinto(mic_samples_mv)
            if num_bytes_read_from_mic > 0:
                num_bytes_to_write = min(
                    num_bytes_read_from_mic, RECORDING_SIZE_IN_BYTES - num_sample_bytes_written_to_wav
                )
                # write samples to WAV file
                num_bytes_written = wav.write(mic_samples_mv[:num_bytes_to_write])
                num_sample_bytes_written_to_wav += num_bytes_written
        print("==========  DONE RECORDING ==========")
        print(f"Data read from I2S: {list(mic_samples_mv[:10])}")
    except (KeyboardInterrupt, Exception) as e:
        print("caught exception {} {}".format(type(e).__name__, e))
    finally:
        clean_audio()

def play_audio(audio_file = "response.wav"):
    print("Playing audio file")
        
def clean_audio():
    global wav, audio_in  # Declare as global to access them
    print("Cleaning up")
    try:
        if audio_in:
            audio_in.deinit()
        if wav:
            wav.close()
        print("Cleanup completed.")
    except Exception as e:
        print(f"Error during cleanup: {e}")
