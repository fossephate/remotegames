function VirtualProController() {

	let controller = {};

	let restPos = 128;

	let minmax = require("../js/tools.js").minmax;

	controller.btns = {
		up: 0,
		down: 0,
		left: 0,
		right: 0,
		stick_button: 0,
		l: 0,
		zl: 0,
		minus: 0,
		capture: 0,

		a: 0,
		b: 0,
		x: 0,
		y: 0,
		stick_button2: 0,
		r: 0,
		zr: 0,
		plus: 0,
		home: 0,
	};
	controller.LStick = {
		x: restPos,
		y: restPos,
	};
	controller.RStick = {
		x: restPos,
		y: restPos,
	};

	controller.reset = function () {
		for (let prop in controller.btns) {
			controller.btns[prop] = 0;
		}
		controller.LStick.x = restPos;
		controller.LStick.y = restPos;
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}

	controller.getState = function () {

		this.LStick.x = minmax(this.LStick.x, 0, 255);
		this.LStick.y = minmax(this.LStick.y, 0, 255);
		this.RStick.x = minmax(this.RStick.x, 0, 255);
		this.RStick.y = minmax(this.RStick.y, 0, 255);

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

		// if (this.btns.up == 1 && this.btns.left == 1) {
		// 	state += "7";
		// } else if (this.btns.up == 1 && this.btns.right == 1) {
		// 	state += "1";
		// } else if (this.btns.down == 1 && this.btns.left == 1) {
		// 	state += "5";
		// } else if (this.btns.down == 1 && this.btns.right == 1) {
		// 	state += "3";
		// } else if (this.btns.up == 1) {
		// 	state += "0";
		// } else if (this.btns.down == 1) {
		// 	state += "4";
		// } else if (this.btns.left == 1) {
		// 	state += "6";
		// } else if (this.btns.right == 1) {
		// 	state += "2";
		// } else {
		// 	state += "8";
		// }

		state += this.btns.up;
		state += this.btns.down;
		state += this.btns.left;
		state += this.btns.right;
		state += this.btns.stick_button;
		state += this.btns.l;
		state += this.btns.zl;
		state += this.btns.minus;
		state += this.btns.capture;

		state += this.btns.a;
		state += this.btns.b;
		state += this.btns.x;
		state += this.btns.y;
		state += this.btns.stick_button2;
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

	controller.inputState = function (state) {

		let entireState = state.split(" ");

		let btns = entireState[0];

		this.btns.up = parseInt(btns[0]);
		this.btns.down = parseInt(btns[1]);
		this.btns.left = parseInt(btns[2]);
		this.btns.right = parseInt(btns[3]);
		this.btns.stick_button = parseInt(btns[4]);
		this.btns.l = parseInt(btns[5]);
		this.btns.zl = parseInt(btns[6]);
		this.btns.minus = parseInt(btns[7]);
		this.btns.capture = parseInt(btns[8]);

		this.btns.a = parseInt(btns[9]);
		this.btns.b = parseInt(btns[10]);
		this.btns.x = parseInt(btns[11]);
		this.btns.y = parseInt(btns[12]);
		this.btns.stick_button2 = parseInt(btns[13]);
		this.btns.r = parseInt(btns[14]);
		this.btns.zr = parseInt(btns[15]);
		this.btns.plus = parseInt(btns[16]);
		this.btns.home = parseInt(btns[17]);

		this.LStick.x = entireState[1];
		this.LStick.y = entireState[2];

		this.RStick.x = entireState[3];
		this.RStick.y = entireState[4];
	}

	return controller;
}

module.exports = VirtualProController;