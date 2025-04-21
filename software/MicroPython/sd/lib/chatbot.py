import ujson  # type: ignore
import urequests as requests  # type: ignore
from lib.microphone import *

openAI_key = ""

class ChatBot:
    def __init__(self):
        self.api_key = openAI_key
        self.api_url = "https://api.openai.com/v1/completions"
        # Simple cache for storing previous questions and answers
        self.qa_cache = {}

    def transcribe_audio(self, audio_file):
        """
        Converts speech from the audio file to text using OpenAI's Whisper API.
        """
        print("Transcribing audio...")
        try:
            audio_path = "/sdcard/lib/data/" + audio_file
            print(f"Reading audio file from: {audio_path}")
            
            # Read the file content
            with open(audio_path, "rb") as file:
                audio_data = file.read()
                
            print(f"Audio file size: {len(audio_data)} bytes")

            # Create a boundary for multipart form
            boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW"
            
            # Create the multipart form data
            form_data = bytearray()
            
            # Add the model field - Use whisper-tiny for faster processing
            form_data.extend(b"--" + boundary.encode() + b"\r\n")
            form_data.extend(b'Content-Disposition: form-data; name="model"\r\n\r\n')
            form_data.extend(b"whisper-1\r\n")
            
            # Add the language field
            form_data.extend(b"--" + boundary.encode() + b"\r\n")
            form_data.extend(b'Content-Disposition: form-data; name="language"\r\n\r\n')
            form_data.extend(b"en\r\n")
            
            # Add the file field
            form_data.extend(b"--" + boundary.encode() + b"\r\n")
            form_data.extend(f'Content-Disposition: form-data; name="file"; filename="{audio_file}"\r\n'.encode())
            form_data.extend(b"Content-Type: audio/wav\r\n\r\n")
            form_data.extend(audio_data)
            form_data.extend(b"\r\n")
            
            # Add the closing boundary
            form_data.extend(b"--" + boundary.encode() + b"--\r\n")
            
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": f"multipart/form-data; boundary={boundary}"
            }
            
            print("Sending request to OpenAI...")
            response = requests.post(
                "https://api.openai.com/v1/audio/transcriptions",
                headers=headers,
                data=form_data
            )
            
            print(f"Response status: {response.status_code}")
            
            if response.status_code == 200:
                transcription = response.json()
                question = transcription["text"]
                print(f"Transcribed Text: {question}")
                return question
            else:
                print(f"Error during transcription: {response.text}")
                return None
        except Exception as e:
            print(f"Error during transcription: {e}")
            import sys
            sys.print_exception(e)  # Print detailed exception
            return None

    def generate_response(self, question):
        """
        Sends the transcribed text to OpenAI's GPT model and gets the response.
        """
        print("Generating response from OpenAI...")
        
        # Check if we already have this question in cache
        if question in self.qa_cache:
            print("Using cached response")
            return self.qa_cache[question]
        
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            data = {
                "model": "gpt-4o",  # Using standard GPT-4o model which is available
                "messages": [
                    {"role": "system", "content": "You are a helpful assistant. Provide very brief, direct answers using simple language. Keep responses under 2 sentences when possible."},
                    {"role": "user", "content": question}
                ],
                "max_tokens": 60,  # Short responses for quick generation
                "temperature": 0.2  # Lower temperature for more predictable responses
            }
            response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, data=ujson.dumps(data))
            if response.status_code == 200:
                result = response.json()
                answer = result["choices"][0]["message"]["content"].strip()
                print(f"ChatBot Response: {answer}")
                # Store in cache for future use
                self.qa_cache[question] = answer
                return answer
            else:
                print(f"Error: {response.status_code}, {response.text}")
                return "I'm sorry, I couldn't process your question."
        except Exception as e:
            print(f"Error with OpenAI API: {e}")
            return "An error occurred while connecting to OpenAI."

    def text_to_speech(self, text, output_file="response.wav"):
        """
        Converts the GPT response text to a .wav file using OpenAI's TTS endpoint.
        """
        print("Converting text to speech...")
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            data = {
                "input": text,
                "model": "tts-1",  # Use standard TTS model that's available
                "voice": "coral",    # Using onyx voice which is deeper and more pronounced
                "response_format": "wav",  # Specify the response format
            }
            response = requests.post(
                "https://api.openai.com/v1/audio/speech",
                headers=headers,
                data=ujson.dumps(data)
            )
            if response.status_code == 200:
                # Save the audio content to a file with full path
                full_path = "/sdcard/lib/data/" + output_file
                print(f"Saving audio to: {full_path}")
                
                try:
                    with open(full_path, "wb") as audio_file:
                        audio_file.write(response.content)
                    print(f"Audio file saved successfully, size: {len(response.content)} bytes")
                    return output_file
                except Exception as e:
                    print(f"Error writing audio file: {e}")
                    import sys
                    sys.print_exception(e)  # Print detailed exception
                    return None
            else:
                print(f"Error during TTS conversion: {response.status_code}, {response.text}")
                return None
        except Exception as e:
            print(f"Error during TTS conversion: {e}")
            import sys
            sys.print_exception(e)  # Print detailed exception
            return None
            
    def run(self):
        """
        Main function to record audio, transcribe it, generate a response, and return a .wav file.
        """
        play_audio("asking.wav", 48000)
        print("Listening for your question...")
        
        # Get audio recording
        recording_audio()  # Record audio and save to a file

        # Step 1: Transcribe audio to text
        question = self.transcribe_audio("question.wav")
        if not question:
            print("Failed to transcribe audio.")
            return

        # Step 2: Generate response from OpenAI
        answer = self.generate_response(question)
        if not answer:
            print("Failed to generate a response.")
            return

        # Step 3: Convert response to speech and save as .wav
        response_file = self.text_to_speech(answer)
        if response_file:
            print(f"Response audio saved as {response_file}")
        
        play_audio("response.wav", 24000)


# Example usage:
# Replace 'your_openai_api_key' with your actual OpenAI API key
# bot = ChatBot(api_key='your_openai_api_key')
# bot.run()
