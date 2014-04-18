/**********************************************
    controller
**********************************************/
var config = require('./config'),
	j5 = require("./J5").J5,
    WebSocketClient = require('websocket').client;    


new j5.Board()
	.on("ready", function() {
		new WebSocketClient()
			.on('connect', function(connection) {
			    require('./periferals').periferals.init(connection);
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
