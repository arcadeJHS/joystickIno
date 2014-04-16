/**********************************************
	periferals
**********************************************/
module.exports.periferals = {
	
	// joystick 1
	joystick_1: function(j5, connection) {
	    var up = new j5.Button({ pin: 10 });
	    var bottom = new j5.Button({ pin: 9 });
	    var left = new j5.Button({ pin: 11 });
	    var right = new j5.Button({ pin: 8 });
	    var fire = new j5.Button({ pin: 12 });

	    up.on("down", function() {            
	        connection.send(JSON.stringify({command: "up", type: "down"}));
	    });
	    up.on("up", function() {            
	        connection.send(JSON.stringify({command: "up", type: "up"}));
	    });
	    bottom.on("down", function() {   
	        connection.send(JSON.stringify({command: "bottom", type: "down"}));
	    });
	    bottom.on("up", function() {   
	        connection.send(JSON.stringify({command: "bottom", type: "up"}));
	    });
	    left.on("down", function() {
	        connection.send(JSON.stringify({command: "left", type: "down"}));
	    });
	    left.on("up", function() {
	        connection.send(JSON.stringify({command: "left", type: "up"}));
	    });
	    right.on("down", function() {
	        connection.send(JSON.stringify({command: "right", type: "down"}));
	    });
	    right.on("up", function() {
	        connection.send(JSON.stringify({command: "right", type: "up"}));
	    });
	    fire.on("down", function() {
	        connection.send(JSON.stringify({command: "fire", type: "down"}));
	    });
	    fire.on("up", function() {
	        connection.send(JSON.stringify({command: "fire", type: "up"}));
	    });

	    console.log("Joystick_1 is ready");
	}

};