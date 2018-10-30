const clamp = require("../js/tools.js").clamp;
let restPos = 128;

function VirtualProController() {

	this.btns = {
		up: 0,
		down: 0,
		left: 0,
		right: 0,
		lstick: 0,
		l: 0,
		zl: 0,
		minus: 0,
		capture: 0,

		a: 0,
		b: 0,
		x: 0,
		y: 0,
		rstick: 0,
		r: 0,
		zr: 0,
		plus: 0,
		home: 0,
	};

	this.lstick = {
		x: restPos,
		y: restPos,
	};

	this.rstick = {
		x: restPos,
		y: restPos,
	};

	this.gyro = {
		x: 0,
		y: 0,
		z: 0,
	};

	this.accel = {
		x: 0,
		y: 0,
		z: 0,
	};

	this.reset = function () {
		for (let prop in this.btns) {
			this.btns[prop] = 0;
		}
		this.lstick.x = restPos;
		this.lstick.y = restPos;
		this.rstick.x = restPos;
		this.rstick.y = restPos;
	}

	this.getState = function () {

		this.lstick.x = clamp(this.lstick.x, 0, 255);
		this.lstick.y = clamp(this.lstick.y, 0, 255);
		this.rstick.x = clamp(this.rstick.x, 0, 255);
		this.rstick.y = clamp(this.rstick.y, 0, 255);

		if (isNaN(this.lstick.x)) {
			this.lstick.x = restPos;
		}
		if (isNaN(this.lstick.y)) {
			this.lstick.y = restPos;
		}
		if (isNaN(this.rstick.x)) {
			this.rstick.x = restPos;
		}
		if (isNaN(this.rstick.y)) {
			this.rstick.y = restPos;
		}

		let state = "";

		state += this.btns.up;
		state += this.btns.down;
		state += this.btns.left;
		state += this.btns.right;
		state += this.btns.lstick;
		state += this.btns.l;
		state += this.btns.zl;
		state += this.btns.minus;
		state += this.btns.capture;

		state += this.btns.a;
		state += this.btns.b;
		state += this.btns.x;
		state += this.btns.y;
		state += this.btns.rstick;
		state += this.btns.r;
		state += this.btns.zr;
		state += this.btns.plus;
		state += this.btns.home;


		let LX = this.lstick.x;
		let LY = this.lstick.y;
		let RX = this.rstick.x;
		let RY = this.rstick.y;

		state += " " + LX + " " + LY + " " + RX + " " + RY;

		return state;
	}

	this.setState = function (state) {

		let entireState = state.split(" ");

		let btns = entireState[0];

		this.btns.up = parseInt(btns[0]);
		this.btns.down = parseInt(btns[1]);
		this.btns.left = parseInt(btns[2]);
		this.btns.right = parseInt(btns[3]);
		this.btns.lstick = parseInt(btns[4]);
		this.btns.l = parseInt(btns[5]);
		this.btns.zl = parseInt(btns[6]);
		this.btns.minus = parseInt(btns[7]);
		this.btns.capture = parseInt(btns[8]);

		this.btns.a = parseInt(btns[9]);
		this.btns.b = parseInt(btns[10]);
		this.btns.x = parseInt(btns[11]);
		this.btns.y = parseInt(btns[12]);
		this.btns.rstick = parseInt(btns[13]);
		this.btns.r = parseInt(btns[14]);
		this.btns.zr = parseInt(btns[15]);
		this.btns.plus = parseInt(btns[16]);
		this.btns.home = parseInt(btns[17]);

		this.lstick.x = entireState[1];
		this.lstick.y = entireState[2];

		this.rstick.x = entireState[3];
		this.rstick.y = entireState[4];
	}
	return this;
}

module.exports = VirtualProController;