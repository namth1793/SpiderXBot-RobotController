from lib.Codec import *  # type: ignore
from machine import I2S, PWM, Pin  # type: ignore

# Declare global variables
wav = None
audio_in = None
mPlayer = None

# ======= I2S CONFIGURATION =======
SCK_PIN = 9
MCK_PIN = 16
WS_PIN = 45
SDO_PIN = 10
SDI_PIN = 8
I2S_ID = 0
BUFFER_LENGTH_IN_BYTES = 40000

# ======= AUDIO CONFIGURATION =======
WAV_FILE = "question.wav"
RECORD_TIME_IN_SECONDS = 5
WAV_SAMPLE_SIZE_IN_BITS = 32
SAMPLE_RATE_IN_HZ = 44100

NUM_CHANNELS = 2
WAV_SAMPLE_SIZE_IN_BYTES = WAV_SAMPLE_SIZE_IN_BITS // 8
RECORDING_SIZE_IN_BYTES = (
    RECORD_TIME_IN_SECONDS * SAMPLE_RATE_IN_HZ * WAV_SAMPLE_SIZE_IN_BYTES * NUM_CHANNELS
)

mclk = PWM(Pin(MCK_PIN), freq=12000000, duty_u16=32768)  # 50% duty cycle

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
    # Allocate sample arrays
    mic_samples = bytearray(10000)
    mic_samples_mv = memoryview(mic_samples)
    num_bytes_written = wav.write(wav_header)

    # Initialize I2S
    try:
        audio_in = I2S(
            I2S_ID,
            sck=Pin(SCK_PIN),
            ws=Pin(WS_PIN),
            sd=Pin(SDO_PIN),
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

    num_sample_bytes_written_to_wav = 0
        
    print("Recording size: {} bytes".format(RECORDING_SIZE_IN_BYTES))
    print("==========  START RECORDING ==========")
    try:
        while num_sample_bytes_written_to_wav < RECORDING_SIZE_IN_BYTES:
            # read a block of samples from the I2S microphone
            num_bytes_read_from_mic = audio_in.readinto(mic_samples_mv)
            print(f"Data read from I2S: {list(mic_samples_mv[:10])}")
            if num_bytes_read_from_mic > 0:
                num_bytes_to_write = min(
                    num_bytes_read_from_mic, RECORDING_SIZE_IN_BYTES - num_sample_bytes_written_to_wav
                )
                # write samples to WAV file
                num_bytes_written = wav.write(mic_samples_mv[:num_bytes_to_write])
                num_sample_bytes_written_to_wav += num_bytes_written
        print("==========  DONE RECORDING ==========")
    except (KeyboardInterrupt, Exception) as e:
        print("caught exception {} {}".format(type(e).__name__, e))
    finally:
        clean_audio(wav, audio_in)

def play_audio(wav2_file):
    wav2 = open("/sdcard/lib/data/" + wav2_file, "rb")
    es8311_config()  # Initialize the ES8311 DAC
    _ = wav2.seek(44)

    print("Initializing I2S...")
    try:
        audio_out = I2S(
            I2S_ID,
            sck=Pin(SCK_PIN),
            ws=Pin(WS_PIN),
            sd=Pin(SDI_PIN),
            mode=I2S.TX,
            bits=WAV_SAMPLE_SIZE_IN_BITS,
            format=I2S.STEREO,
            rate=SAMPLE_RATE_IN_HZ,
            ibuf=BUFFER_LENGTH_IN_BYTES,
        )
        print("I2S initialized successfully.")
    except Exception as e:
        print(f"Failed to initialize I2S: {e}")
        return
    
    print("Starting playback loop...")
    # allocate sample array
    # memoryview used to reduce heap allocation
    wav_samples2 = bytearray(10000)
    wav_samples_mv2 = memoryview(wav_samples2)
    # continuously read audio samples from the WAV file
    # and write them to an I2S DAC
    print("==========  START PLAYBACK ==========")
    try:
        while True:
            num_read = wav2.readinto(wav_samples_mv2)
            if num_read == 0:
                _ = wav2.seek(44)  # Restart playback
            else:
                _ = audio_out.write(wav_samples_mv2[:num_read])
    except (KeyboardInterrupt, Exception) as e:
        print("caught exception {} {}".format(type(e).__name__, e))
    finally:
        clean_audio(wav2, audio_out)
        
def clean_audio(wav_file, audio):
    print("Cleaning up")
    try:
        if audio:
            audio.deinit()
        if wav:
            wav_file.close()
        print("Cleanup completed.")
    except Exception as e:
        print(f"Error during cleanup: {e}")
