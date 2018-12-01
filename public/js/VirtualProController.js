import { clamp } from "../js/tools.js";
let restPos = 128;

class VirtualProController {

	constructor() {

		this.buttons = {
			up: 0,
			down: 0,
			left: 0,
			right: 0,
			l: 0,
			zl: 0,
			lstick: 0,
			minus: 0,
			capture: 0,

			a: 0,
			b: 0,
			x: 0,
			y: 0,
			r: 0,
			zr: 0,
			rstick: 0,
			plus: 0,
			home: 0,
		};

		this.btns = 0;
		// let btns = parseInt("000011111", 2);
		// let n = 5;
		// (btns & (2 << n)) >> (n + 1);

		this.sticks = [
			[restPos, restPos],
			[restPos, restPos],
		];

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

		this.setState2 = this.setState2.bind(this);
	}

	reset() {
		for (let prop in this.btns) {
			this.btns[prop] = 0;
		}

		this.sticks[0][0] = restPos;
		this.sticks[0][1] = restPos;
		this.sticks[1][0] = restPos;
		this.sticks[1][1] = restPos;
	}

	isPressed(btns, n) {
		return ((btns & (1 << n)) != 0);
	}

	getState() {

		this.sticks[0][0] = clamp(this.sticks[0][0], 0, 255);
		this.sticks[0][1] = clamp(this.sticks[0][1], 0, 255);
		this.sticks[1][0] = clamp(this.sticks[1][0], 0, 255);
		this.sticks[1][1] = clamp(this.sticks[1][1], 0, 255);

		let state = "";

		state += this.buttons.up;
		state += this.buttons.down;
		state += this.buttons.left;
		state += this.buttons.right;
		state += this.buttons.l;
		state += this.buttons.zl;
		state += this.buttons.lstick;
		state += this.buttons.minus;
		state += this.buttons.capture;

		state += this.buttons.a;
		state += this.buttons.b;
		state += this.buttons.x;
		state += this.buttons.y;
		state += this.buttons.r;
		state += this.buttons.zr;
		state += this.buttons.rstick;
		state += this.buttons.plus;
		state += this.buttons.home;


		let LX = this.sticks[0][0];
		let LY = this.sticks[0][1];
		let RX = this.sticks[1][0];
		let RY = this.sticks[1][1];

		state += " " + LX + " " + LY + " " + RX + " " + RY;

		return state;
	}

	getState2() {

		this.sticks[0][0] = clamp(this.sticks[0][0], 0, 255);
		this.sticks[0][1] = clamp(this.sticks[0][1], 0, 255);
		this.sticks[1][0] = clamp(this.sticks[1][0], 0, 255);
		this.sticks[1][1] = clamp(this.sticks[1][1], 0, 255);

		let state = {
			btns: 0,
			sticks: [
				[0, 0],
				[0, 0],
			],
			gyro: { ...this.gyro },
			accel: { ...this.accel },
		};

		state.btns |= (this.buttons.up << 0);
		state.btns |= (this.buttons.down << 1);
		state.btns |= (this.buttons.left << 2);
		state.btns |= (this.buttons.right << 3);


		state.btns |= (this.buttons.l << 4);
		state.btns |= (this.buttons.zl << 5);
		state.btns |= (this.buttons.lstick << 6);
		state.btns |= (this.buttons.minus << 7);
		state.btns |= (this.buttons.capture << 8);

		state.btns |= (this.buttons.a << 9);
		state.btns |= (this.buttons.b << 10);
		state.btns |= (this.buttons.x << 11);
		state.btns |= (this.buttons.y << 12);


		state.btns |= (this.buttons.r << 13);
		state.btns |= (this.buttons.zr << 14);
		state.btns |= (this.buttons.rstick << 15);
		state.btns |= (this.buttons.plus << 16);
		state.btns |= (this.buttons.home << 17);

		state.sticks = this.sticks;

		return state;
	}

	setState(state) {

		let entireState = state.split(" ");

		let btns = entireState[0];

		this.buttons.up = parseInt(btns[0]);
		this.buttons.down = parseInt(btns[1]);
		this.buttons.left = parseInt(btns[2]);
		this.buttons.right = parseInt(btns[3]);
		this.buttons.l = parseInt(btns[4]);
		this.buttons.zl = parseInt(btns[5]);
		this.buttons.lstick = parseInt(btns[6]);
		this.buttons.minus = parseInt(btns[7]);
		this.buttons.capture = parseInt(btns[8]);

		this.buttons.a = parseInt(btns[9]);
		this.buttons.b = parseInt(btns[10]);
		this.buttons.x = parseInt(btns[11]);
		this.buttons.y = parseInt(btns[12]);
		this.buttons.r = parseInt(btns[13]);
		this.buttons.zr = parseInt(btns[14]);
		this.buttons.rstick = parseInt(btns[15]);
		this.buttons.plus = parseInt(btns[16]);
		this.buttons.home = parseInt(btns[17]);

		this.sticks[0][0] = entireState[1];
		this.sticks[0][1] = entireState[2];
		this.sticks[1][0] = entireState[3];
		this.sticks[1][1] = entireState[4];
	}

	setState2(state) {

		this.btns = state.btns;
		this.sticks = state.sticks;

		this.buttons.up = this.isPressed(state.btns, 0);
		this.buttons.down = this.isPressed(state.btns, 1);
		this.buttons.left = this.isPressed(state.btns, 2);
		this.buttons.right = this.isPressed(state.btns, 3);
		this.buttons.l = this.isPressed(state.btns, 4);
		this.buttons.zl = this.isPressed(state.btns, 5);
		this.buttons.lstick = this.isPressed(state.btns, 6);
		this.buttons.minus = this.isPressed(state.btns, 7);
		this.buttons.capture = this.isPressed(state.btns, 8);

		this.buttons.a = this.isPressed(state.btns, 9);
		this.buttons.b = this.isPressed(state.btns, 10);
		this.buttons.x = this.isPressed(state.btns, 11);
		this.buttons.y = this.isPressed(state.btns, 12);
		this.buttons.r = this.isPressed(state.btns, 13);
		this.buttons.zr = this.isPressed(state.btns, 14);
		this.buttons.rstick = this.isPressed(state.btns, 15);
		this.buttons.plus = this.isPressed(state.btns, 16);
		this.buttons.home = this.isPressed(state.btns, 17);

	}
}

module.exports = VirtualProController;
