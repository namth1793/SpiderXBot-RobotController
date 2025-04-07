import speech_recognition as sr

text = ""
r = sr.Recognizer()
# open the file
with sr.Microphone() as source:
    # read the audio data from the default microphone
    audio_data = r.record(source, duration = 5)
    print("Recognizing...")
    # convert speech to text
    text = r.recognize_google(audio_data, language="vi-VN")
print(text)