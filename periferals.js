/**********************************************
	periferals
**********************************************/
var HW = HW || (function HW(j5) {
	return { 

		joystick: function joystick(id, connection, pins) {
			var j = Object.create({
				up: 	new j5.Button({pin: pins.up})
							.on("down", function() { connection.send(JSON.stringify({command: "up", type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: "up", type: "up"})); }),
				bottom: new j5.Button({pin: pins.bottom})
							.on("down", function() { connection.send(JSON.stringify({command: "bottom", type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: "bottom", type: "up"})); }),
				left: 	new j5.Button({pin: pins.left})
							.on("down", function() { connection.send(JSON.stringify({command: "left", type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: "left", type: "up"})); }),  
				right: 	new j5.Button({pin: pins.right})
							.on("down", function() { connection.send(JSON.stringify({command: "right", type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: "right", type: "up"})); }),
				fire: 	new j5.Button({pin: pins.fire})
							.on("down", function() { connection.send(JSON.stringify({command: "fire", type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: "fire", type: "up"})); })
			}, {
				id: { value: id }
			});
			return j;
		}

	};
}(require("./J5").J5));


module.exports.periferals = {

	init: function init(connection) {
		var config = require('./config');
		var joystick_1 = HW.joystick(1, connection, config.pins);
	}

};