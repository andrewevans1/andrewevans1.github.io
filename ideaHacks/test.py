import base64
import random
import string
import time
import math
import paho.mqtt.client as paho
import json

broker="broker.hivemq.com"

text_channel= 'ideahacks2019_200_text'
image_channel= 'ideahacks2019_200_images'

image = 'image.jpg'
image = 'twitter.png'
packet_size=3000
#define callback
def on_message(client, userdata, message):
    time.sleep(1)
    print("received message =",str(message.payload.decode("utf-8")))

def convertImageToBase64(image):
    with open(image, "rb") as image_file:
        encoded = base64.b64encode(image_file.read())
        print(type(encoded))
        return encoded

def randomword(length):
    return ''.join(random.choice(string.ascii_lowercase) for i in range(length))

def publishEncodedImage(encoded):
	data = encoded.decode('utf-8')
	end = packet_size
	start = 0
	length = len(data)
	picId = 0
	pos = 1
	no_of_packets = math.ceil(length/packet_size)

	while pos <= no_of_packets:
		#data = {"data": encoded[start:end], "pic_id":picId, "pos": pos, "size": no_of_packets}
		dump = {"data": str(data[start:end]), "pic_id":picId, "pos": pos, "size": no_of_packets}
		#print(json.dumps(data))
		client.publish(image_channel, json.dumps(dump))
		#print(encoded[start:end])
		end += packet_size
		start += packet_size
		pos += 1

client= paho.Client("client-001") #create client object client1.on_publish = on_publish #assign function to callback client1.connect(broker,port) #establish connection client1.publish("house/bulb1","on")
######Bind function to callback
client.on_message=on_message
#####
print("connecting to broker ",broker)
client.connect(broker)#connect
client.loop_start() #start loop to process received messages
print("subscribing ")
client.subscribe(text_channel)#subscribe
time.sleep(1)
print("publishing ")
client.publish(text_channel,"yoooo")#publish
time.sleep(1)

base64 = convertImageToBase64(image)
publishEncodedImage(base64)

client.disconnect() #disconnect
client.loop_stop() #stop loop
