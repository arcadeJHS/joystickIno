JoystickIno
=====================
A **javascript joystick**, made with arduino, node.js and websockets.


Usage
----
You need to run two node programs.

Run the web application server:
```
node server.js
``` 
The server runs by default at **ws://localhost:8000**, but could also be hosted online. Just change the address in **config.js** file.

Then connect the hardware, and run the joystick controller:
```
node controller.js
``` 


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


References
----
- [WebSocket-Node][3]
- [johnny-five][4]
- [arduino][5]

[1]: https://github.com/arcadeJHS/joystickIno/blob/master/schema/joystickIno.png?raw=true
[2]: https://github.com/arcadeJHS/joystickIno/blob/master/schema/img.jpg?raw=true
[3]: https://github.com/Worlize/WebSocket-Node
[4]: https://github.com/rwaldron/johnny-five
[5]: http://arduino.cc/