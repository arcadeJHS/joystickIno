module.exports.roms = {


	// Battle Duino rom
	battleDuino: function() {
		var bd = Object.create({
			up: function(type) {
				(type == "down") && (this.data.y = (this.data.y <= 0) ? 0 : this.data.y - this.speed);
			},
			bottom: function(type) {
				(type == "down") && (this.data.y = (this.data.y + this.squareH >= this.canvasH) ? this.canvasH - this.squareH : this.data.y + this.speed);
			},
			left: function(type) {
				(type == "down") && (this.data.x = (this.data.x <= 0) ? 0 : this.data.x - this.speed);
			},
			right: function(type) {
				(type == "down") && (this.data.x = (this.data.x + this.squareW >= this.canvasW) ? this.canvasW - this.squareW : this.data.x + this.speed);
			},
			fire: function(type) {
				(type == "down") && (this.data.fire = true);
				(type == "up") && (this.data.fire = false);
			}
		});

		bd.data = {x: 180, y: 400, fire: false};
		bd.speed = 20;
		bd.squareW = 40;
		bd.squareH = 40;
		bd.canvasW = 400;
		bd.canvasH = 500;

		return bd;
	},

	// Space Invaders rom
	// Check: https://github.com/arcadeJHS/AdvertiseInvaders
	spaceInvaders: function() {
		var si = Object.create({
			up: function(type) {

			},
			bottom: function(type) {
				
			},
			left: function(type) {
				this.data = {code: 37, type: "key"+type};
			},
			right: function(type) {
				this.data = {code: 39, type: "key"+type};
			},
			fire: function(type) {
				this.data = {code: 32, type: "key"+type};
			}
		});

		si.data = {code: 0, type: "keydown"};

		return si;
	}
	

};