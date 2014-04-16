(function(exports) {	

	exports.address = "127.0.0.1";
	// online demo
	//exports.address = "arduino-html5testserver.rhcloud.com";
	exports.port = "8000";
	exports.wsAddress = "ws://" + exports.address + ":" + exports.port;
	// battleDuino | spaceInvaders
	exports.defaultRom = "battleDuino";

}(typeof exports === 'undefined' ? this.config = {} : exports));