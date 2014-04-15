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
	        connection.sendUTF("UP");
	        console.log("UP");
	    });
	    bottom.on("down", function() {   
	        connection.sendUTF("BOTTOM");
	        console.log("BOTTOM");
	    });
	    left.on("down", function() {
	        connection.sendUTF("LEFT");
	        console.log("LEFT");
	    });
	    right.on("down", function() {
	        connection.sendUTF("RIGHT");
	        console.log("RIGHT");
	    });
	    fire.on("down", function() {
	        connection.sendUTF("FIRE");
	        console.log("FIRE");
	    });

	    console.log("Joystick_1 is ready");
	}

};