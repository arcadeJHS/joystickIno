JoystickIno
=====================
A **javascript joystick**, made with arduino, node.js and websockets.

The basic idea is to have a websocket working as a middleware between the hardware and the browser. 

Inputs triggered by the hardware are received by a websocket client implemented on the server (controller.js), which in turn propagates the update to the websocket server (server.js). Eventually the server broadcasts the message to all the listening browsers. 


Usage
----
You need to run two independent node programs.

1. Run the web application server:
```
node socket.js
``` 
The server runs by default at **ws://localhost:8000**, but could also be hosted online. Just edit the **config.js** file, and change address and port.

2. Then connect the hardware, and run the joystick controller:
```
node controller.js
```


Configuration
----
You can configure few options in the **config.js** file:
```
// server address
address = "127.0.0.1";
// server port	
port = "8000";
// websocket server address
wsAddress = "ws://" + exports.address + ":" + exports.port;
// loaded rom	
defaultRom = "battleDuino";	// battleDuino | spaceInvaders
// arduino pins
pins = {
	up: 10,
	bottom: 9,
	left: 11,
	right: 8,
	fire: 12
};
```


Online demo
----
You can test the joystick online by playing my HTML5 porting of Space Invaders at **http://matteopiazza.org/stuff/code/AdvertiseInvaders/**.

To succesfully run it, you have to:

- Assemble the hardware.

- Edit **config.js** the following way:
```
exports.address = "arduino-html5testserver.rhcloud.com";
exports.port = "8000";
exports.defaultRom = "spaceInvaders";
```  

- Run:
```
node controller.js
```

- Open in your browser **http://matteopiazza.org/stuff/code/AdvertiseInvaders/**


Requirements
----
- Arduino board with Firmata library
- node.js
- johnny-five module
- breadboard
- switches (5)
- 10k ohm resistors (5)


Schema
----
![schema][1]


What it looks like
----
![picture][2]


References and Credits
----
- [WebSocket-Node: a WebSocket Implementation for Node.JS][3]
- [johnny-five: firmata based Arduino Framework][4]
- [Arduino board][5]

[1]: https://github.com/arcadeJHS/joystickIno/blob/master/schema/joystickIno.png?raw=true
[2]: https://github.com/arcadeJHS/joystickIno/blob/master/schema/img.jpg?raw=true
[3]: https://github.com/Worlize/WebSocket-Node
[4]: https://github.com/rwaldron/johnny-five
[5]: http://arduino.cc/