(function(exports){	

	exports.address = "127.0.0.1";
	exports.port = "8000";
	exports.defaultRom = "battleDuino";
	

	// online example address: "ws://arduino-html5testserver.rhcloud.com:8000"
	exports.wsAddress = "ws://" + exports.address + ":" + exports.port;

}(typeof exports === 'undefined' ? this.config = {} : exports));