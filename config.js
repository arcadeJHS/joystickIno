(function(exports) {

	// online demo address
	//exports.address = "arduino-html5testserver.rhcloud.com";	

	exports.address = "127.0.0.1";	
	exports.port = "8000";
	exports.wsAddress = "ws://" + exports.address + ":" + exports.port;	
	exports.defaultRom = "battleDuino";	// battleDuino | spaceInvaders
	exports.pins = {
		up: 10,
		bottom: 9,
		left: 11,
		right: 8,
		fire: 12
	};

}(typeof exports === 'undefined' ? this.config = {} : exports));