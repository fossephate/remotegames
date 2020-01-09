import { clamp } from "libs/tools.js";

export class ControllerState {
	constructor() {
		this.buttons = {
			unset: 0,
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

		this.axes = [0, 0, 0, 0, 0, 0];

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
	}

	reset = () => {
		this.btns = 0;
		for (let prop in this.buttons) {
			this.buttons[prop] = 0;
		}
		this.axes = [0, 0, 0, 0, 0, 0];
	};

	isPressed = (n) => {
		return (this.btns & (1 << n)) != 0;
	};

	getState = () => {
		this.axes[0] = clamp(this.axes[0], -1, 1);
		this.axes[1] = clamp(this.axes[1], -1, 1);
		this.axes[2] = clamp(this.axes[2], -1, 1);
		this.axes[3] = clamp(this.axes[3], -1, 1);
		// this.axes[4] = this.axes[4];
		// this.axes[5] = this.axes[5];

		let state = {
			btns: 0,
			axes: [0, 0, 0, 0, 0, 0],
			gyro: { ...this.gyro },
			accel: { ...this.accel },
		};

		state.btns |= this.buttons.up << 0;
		state.btns |= this.buttons.down << 1;
		state.btns |= this.buttons.left << 2;
		state.btns |= this.buttons.right << 3;

		state.btns |= this.buttons.l << 4;
		state.btns |= this.buttons.zl << 5;
		state.btns |= this.buttons.lstick << 6;
		state.btns |= this.buttons.minus << 7;
		state.btns |= this.buttons.capture << 8;

		state.btns |= this.buttons.a << 9;
		state.btns |= this.buttons.b << 10;
		state.btns |= this.buttons.x << 11;
		state.btns |= this.buttons.y << 12;

		state.btns |= this.buttons.r << 13;
		state.btns |= this.buttons.zr << 14;
		state.btns |= this.buttons.rstick << 15;
		state.btns |= this.buttons.plus << 16;
		state.btns |= this.buttons.home << 17;

		// state.axes = this.axes;
		for (let i = 0; i < this.axes.length; i++) {
			state.axes[i] = this.axes[i];
		}

		return state;
	};

	setState = (state) => {
		if (state.btns == null) {
			console.log(state);
			throw error;
		}
		this.btns = state.btns;
		this.axes = state.axes;

		this.buttons.up = this.isPressed(0);
		this.buttons.down = this.isPressed(1);
		this.buttons.left = this.isPressed(2);
		this.buttons.right = this.isPressed(3);
		this.buttons.l = this.isPressed(4);
		this.buttons.zl = this.isPressed(5);
		this.buttons.lstick = this.isPressed(6);
		this.buttons.minus = this.isPressed(7);
		this.buttons.capture = this.isPressed(8);

		this.buttons.a = this.isPressed(9);
		this.buttons.b = this.isPressed(10);
		this.buttons.x = this.isPressed(11);
		this.buttons.y = this.isPressed(12);
		this.buttons.r = this.isPressed(13);
		this.buttons.zr = this.isPressed(14);
		this.buttons.rstick = this.isPressed(15);
		this.buttons.plus = this.isPressed(16);
		this.buttons.home = this.isPressed(17);
	};
}

export class MouseState {
	constructor() {
		this.x = 0;
		this.y = 0;

		this.dx = 0;
		this.dy = 0;

		this.btns = {
			left: 0,
			right: 0,
			middle: 0,
		};
	}

	getState = () => {
		return this;
	};
}

export class KeyboardState {
	constructor() {
		this.keys = [];
	}

	getState = () => {
		return this;
	};
}

export class TouchState {
	constructor() {
		// this.previousTouches = [];
		this.touches = [];
	}

	getState = () => {
		return this;
	};
}
