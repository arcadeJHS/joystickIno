module.exports.roms = {


	// Battle Duino rom
	battleDuino: function() {
		var bd = Object.create({
			up: function() {
				this.data.y = (this.data.y <= 0) ? 0 : this.data.y - this.speed;
			},
			bottom: function() {
				this.data.y = (this.data.y + this.squareH >= this.canvasH) ? this.canvasH - this.squareH : this.data.y + this.speed;
			},
			left: function() {
				this.data.x = (this.data.x <= 0) ? 0 : this.data.x - this.speed;
			},
			right: function() {
				this.data.x = (this.data.x + this.squareW >= this.canvasW) ? this.canvasW - this.squareW : this.data.x + this.speed;
			},
			fire: function() {
				this.data.fire = true;
			}
		});

		bd.data = {x: 180, y: 400, fire: false};
		bd.speed = 20;
		bd.squareW = 40;
		bd.squareH = 40;
		bd.canvasW = 400;
		bd.canvasH = 500;

		return bd;
	}
	

};