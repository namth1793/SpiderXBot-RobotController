import ujson  # type: ignore
import urequests as requests  # type: ignore


class ChatBot:
    def __init__(self, api_key):
        self.api_key = api_key
        self.api_url = "https://api.openai.com/v1/completions"

    def transcribe_audio(self, audio_file="question.wav"):
        """
        Converts speech from the audio file to text using OpenAI's Whisper API.
        """
        print("Transcribing audio...")
        try:
            with open(audio_file, "rb") as audio:
                headers = {
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json"
                }
                response = requests.post(
                    "https://api.openai.com/v1/audio/transcriptions",
                    headers=headers,
                    data={
                        "model": "whisper-1",
                        "file": audio,
                        "language": "vi",  # Specify the language
                    }
                )
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
            return None

    def generate_response(self, question):
        """
        Sends the transcribed text to OpenAI's GPT model and gets the response.
        """
        print("Generating response from OpenAI...")
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            data = {
                "model": "text-davinci-003",
                "prompt": question,
                "max_tokens": 150
            }
            response = requests.post(self.api_url, headers=headers, data=ujson.dumps(data))
            if response.status_code == 200:
                result = response.json()
                answer = result["choices"][0]["text"].strip()
                print(f"ChatBot Response: {answer}")
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
                "model": "gpt-4o-mini-tts",  # Specify the TTS model
                "response_format": "wav"  # Specify the response format
            }
            response = requests.post(
                "https://api.openai.com/v1/audio/speech",
                headers=headers,
                data=ujson.dumps(data)
            )
            if response.status_code == 200:
                # Save the audio content to a file
                with open(output_file, "wb") as audio_file:
                    audio_file.write(response.content)
                print(f"Response audio saved as {output_file}")
                return output_file
            else:
                print(f"Error during TTS conversion: {response.status_code}, {response.text}")
                return None
        except Exception as e:
            print(f"Error during TTS conversion: {e}")
            return None

    def run(self):
        """
        Main function to record audio, transcribe it, generate a response, and return a .wav file.
        """
        print("Listening for your question...")
        audio_file = "question.wav"
        self.microphone.record_audio(output_file=audio_file)  # Record audio and save to a file

        # Step 1: Transcribe audio to text
        question = self.transcribe_audio(audio_file)
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


# Example usage:
# Replace 'your_openai_api_key' with your actual OpenAI API key
# bot = ChatBot(api_key='your_openai_api_key')
# bot.run()