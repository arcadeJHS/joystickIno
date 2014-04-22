JoystickIno
=====================
A **javascript joystick**, made with arduino, node.js and websockets.

The basic idea is to have a websocket working as a middleware between the hardware and the browser. 

Inputs triggered by the hardware are received by a websocket client implemented on the server (joystick-ino.js), which in turn propagates the update to the socket server (socket.js). Eventually the server broadcasts the message to all the listening clients. 


Usage
----
1. Connect the hardware, and run the joystick controller on a node.js server:
```
node joystick-ino.js
``` 
The server runs by default at **ws://localhost:8000**, but could also be hosted online. Just edit the **config.js** file, and change address and port.

Keys pressed on the hardware emit a **button object**, which will be used by the client connected to update game logic (see the following section).

2. On the client side, you need to include in your page the script **joystick-ino-client.js** which you can find in the **demo** directory. Then configure and init the joystick by calling:
```
JYI.config({
	wsAddress: "ws://localhost:8000",
    inputHandler: buttonHandler    
});
```
where parameters are:

- **wsAddress**: the address at which you are hosting your hardware (see the configuration section below).

- **inputHandler**: a reference to a function defined in your code, which is responsible for updating your game logic. As a parameter, it takes a "button" object.
```
// example of button object
button = {
	command: "fire",
	type: "down"
}
```
```
// example of inputHandler function (check **/demo/rom.battleDuino.js**)
function buttonHandler(button) {
    var command = button.command,
        type = button.type;

    switch (true) {
        case command == "up" && type == "down":
            y = (y <= 0) ? 0 : y - speed;
            break;
        case command == "bottom" && type == "down":
            y = (y + squareW >= canvas.height) ? canvas.height - squareW : y + speed;
            break;
        case command == "left" && type == "down":
            x = (x <= 0) ? 0 : x - speed;
            break;
        case command == "right" && type == "down":
            x = (x + squareW >= canvas.width) ? canvas.width - squareW : x + speed;
            break;
        case command == "fire" && type == "down":
            bX = x; bY = y;
            break;
    };
}
```

See **/demo/rom.battleDuino.js** for an usage example.


Configuration
----
You can configure few options in the **config.js** file:
```
// server address
address = "127.0.0.1";

// server port	
port = "8000";

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
```  

- Run:
```
node joystick-ino.js
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