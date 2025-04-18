import urequests as requests

response = requests.get('https://jsonplaceholder.typicode.com/albums/1')
print(response.text)
