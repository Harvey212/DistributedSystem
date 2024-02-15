import socket

s=socket.socket(family=socket.AF_INET,type=socket.SOCK_DGRAM)
s.connect(("127.0.0.1",20213))
msg=b"This is a test from python client"

s.send(msg)

while True:
	message,address=s.recvfrom(1024)
	if message:
		clientMsg=f"{message.decode('utf-8')}"
		print(clientMsg)
		break
s.close()