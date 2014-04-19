/**********************************************
    controller
**********************************************/
var config = require('./config'),
	j5 = require("./J5").J5,
    WebSocketClient = require('websocket').client,
    HW = require('./hardware').HW;    


new j5.Board()
	.on("ready", function() {
		new WebSocketClient()
			.on('connect', function(connection) {
			    // init periferals
			    var joystick_1 = HW.joystick(1, connection, config.pins);
			})
			.on('connectFailed', function(error) {
			    console.log('wsClient connection error: ' + error.toString());
			})
			.connect(config.wsAddress);
	})
	.on("error", function(e) {
		console.log("Board not ready - exit");
		process.exit();
	});
