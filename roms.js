module.exports.roms = {

	// Battle Duino rom
	battleDuino: function() {
		var bd = Object.create({
			up: {
				up: function() {},
				down: function() { bd.data.y = (bd.data.y <= 0) ? 0 : bd.data.y - bd.speed; }
			},
			bottom: {
				up: function() {},
				down: function() { bd.data.y = (bd.data.y + bd.squareH >= bd.canvasH) ? bd.canvasH - bd.squareH : bd.data.y + bd.speed; }
			},
			left: {
				up: function() {},
				down: function() { bd.data.x = (bd.data.x <= 0) ? 0 : bd.data.x - bd.speed; }
			},
			right: {
				up: function() {},
				down: function() { bd.data.x = (bd.data.x + bd.squareW >= bd.canvasW) ? bd.canvasW - bd.squareW : bd.data.x + bd.speed; }
			},
			fire: {
				up: function() { bd.data.fire = false; },
				down: function() { bd.data.fire = true; }				
			}
		}, {
			data: { value: {x: 180, y: 400, fire: false} },
			speed: { value: 20 },
			squareW: { value: 40 },
			squareH: { value: 40 },
			canvasW: { value: 400 },
			canvasH: { value: 500 }
		});
		return bd;
	},

	// Space Invaders rom
	// Check: https://github.com/arcadeJHS/AdvertiseInvaders
	spaceInvaders: function() {
		var si = Object.create({
			up: {
				up: function() {},
				down: function() {},
			},
			bottom: {
				up: function() {},
				down: function() {},
			},
			left: {
				up: function() { si.data.code = 37; si.data.type = "keyup"; },
				down: function() { si.data.code = 37; si.data.type = "keydown"; }			
			},
			right: {
				up: function() { si.data.code = 39; si.data.type = "keyup"; },
				down: function() { si.data.code = 39; si.data.type = "keydown"; }
			},
			fire: {
				up: function() { si.data.code = 32; si.data.type = "keyup"; },
				down: function() { si.data.code = 32; si.data.type = "keydown"; }
			}
		}, {
			data: { value: {code: 0, type: "keydown"} }
		});
		return si;
	}

};