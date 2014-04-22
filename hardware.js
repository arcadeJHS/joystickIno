var HW = HW || (function HW(j5) {
	return { 

		// joystick
		joystick: function joystick(id, connection, pins) {

			function Button(command) {
				return new j5.Button({pin: pins[command]})
							.on("down", function() { connection.send(JSON.stringify({command: command, type: "down"})); })
							.on("up", function() { connection.send(JSON.stringify({command: command, type: "up"})); });
			};

			var j = Object.create({
				up: 	Button("up"),
				bottom: Button("bottom"),
				left: 	Button("left"), 	 
				right: 	Button("right"), 	
				fire:  	Button("fire")	
			}, {
				id: { value: id }
			});

			console.log("Joystick " + id + " ready!");

			return j;
		}

	};
}(require("./J5").J5));


module.exports.HW = HW;