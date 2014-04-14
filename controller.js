/**********************************************
    websocket - client (node to node)
**********************************************/
var j5 = require("johnny-five"),
    board = new j5.Board(),
    WebSocketClient = require('websocket').client,
    config = require('./config');


board.on("ready", function() {

	var wsClient = new WebSocketClient();

	wsClient.on('connect', function(connection) {
	    var periferals = require('./periferals').periferals;
	    periferals.joystick_1(j5, connection);
	});

	wsClient.on('connectFailed', function(error) {
	    console.log('Connect Error: ' + error.toString());
	});

	wsClient.connect(config.wsAddress);

});