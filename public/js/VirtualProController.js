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

	this.LStick = {
		x: restPos,
		y: restPos,
	};

	this.RStick = {
		x: restPos,
		y: restPos,
	};

	this.reset = function () {
		for (let prop in this.btns) {
			this.btns[prop] = 0;
		}
		this.LStick.x = restPos;
		this.LStick.y = restPos;
		this.RStick.x = restPos;
		this.RStick.y = restPos;
	}

	this.getState = function () {

		this.LStick.x = clamp(this.LStick.x, 0, 255);
		this.LStick.y = clamp(this.LStick.y, 0, 255);
		this.RStick.x = clamp(this.RStick.x, 0, 255);
		this.RStick.y = clamp(this.RStick.y, 0, 255);

		if (isNaN(this.LStick.x)) {
			this.LStick.x = restPos;
		}
		if (isNaN(this.LStick.y)) {
			this.LStick.y = restPos;
		}
		if (isNaN(this.RStick.x)) {
			this.RStick.x = restPos;
		}
		if (isNaN(this.RStick.y)) {
			this.RStick.y = restPos;
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


		let LX = this.LStick.x;
		let LY = this.LStick.y;
		let RX = this.RStick.x;
		let RY = this.RStick.y;

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

		this.LStick.x = entireState[1];
		this.LStick.y = entireState[2];

		this.RStick.x = entireState[3];
		this.RStick.y = entireState[4];
	}
	return this;
}

module.exports = VirtualProController;