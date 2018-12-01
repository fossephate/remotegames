import Gamepad from "js/gamepad.js";

import GamepadWrapper from "js/gamepad2.js";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

// let controllerMapping = function (type, rest, active, released, which) {
// 	this.type = type;
//
// 	if (type == "button") {
// 		this.rest = rest;
// 	} else if (type == "axis") {
// 		this.rest = rest;
// 		this.active = active;
// 		this.released = released;
// 		this.index = which;
// 	}
// };

class VirtualController {

	constructor() {

		this.state = new VirtualProController();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		this.settings = {
			sticks: {
				L: {
					X: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
				},
				R: {
					X: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
				},
			},

			sticks2: [
				[
					{
						sensitivity: 1,
						offset: 0,
						deadzone: 50
					},
					{
						sensitivity: 1,
						offset: 0,
						deadzone: 50
					},
				],
				[
					{
						sensitivity: 1,
						offset: 0,
						deadzone: 50
					},
					{
						sensitivity: 1,
						offset: 0,
						deadzone: 50
					},
				],
			],

			map: {
				// up: new controllerMapping("button", ),
				up: "up",
				down: "down",
				left: "left",
				right: "right",
				l: "l",
				zl: "zl",
				lstick: "lstick",
				minus: "minus",
				capture: "capture",

				a: "a",
				b: "b",
				x: "x",
				y: "y",
				r: "r",
				zr: "zr",
				rstick: "rstick",
				plus: "plus",
				home: "home",

				axes: [
					[0, 0],
					[1, 1],
				],
			},

		}

	}

	init() {

		window.gamepad = new Gamepad();

		gamepad.on("connect", (e) => {
			console.log(`controller ${e.index} connected!`);
		});
		gamepad.on("disconnect", (e) => {
			console.log(`controller ${e.index} disconnected!`);
		});
		gamepad.on("press", "button_1", (e) => {
			this.state.btns[this.settings.map.b] = 1;
		});
		gamepad.on("release", "button_1", (e) => {
			this.state.btns[this.settings.map.b] = 0;
		});
		gamepad.on("press", "button_2", (e) => {
			this.state.btns[this.settings.map.a] = 1;
		});
		gamepad.on("release", "button_2", (e) => {
			this.state.btns[this.settings.map.a] = 0;
		});
		gamepad.on("press", "button_3", (e) => {
			this.state.btns[this.settings.map.y] = 1;
		});
		gamepad.on("release", "button_3", (e) => {
			this.state.btns[this.settings.map.y] = 0;
		});
		gamepad.on("press", "button_4", (e) => {
			this.state.btns[this.settings.map.x] = 1;
		});
		gamepad.on("release", "button_4", (e) => {
			this.state.btns[this.settings.map.x] = 0;
		});
		gamepad.on("press", "shoulder_top_left", (e) => {
			this.state.btns[this.settings.map.l] = 1;
		});
		gamepad.on("release", "shoulder_top_left", (e) => {
			this.state.btns[this.settings.map.l] = 0;
		});
		gamepad.on("press", "shoulder_top_right", (e) => {
			this.state.btns[this.settings.map.r] = 1;
		});
		gamepad.on("release", "shoulder_top_right", (e) => {
			this.state.btns[this.settings.map.r] = 0;
		});
		gamepad.on("press", "shoulder_bottom_left", (e) => {
			this.state.btns[this.settings.map.zl] = 1;
		});
		gamepad.on("release", "shoulder_bottom_left", (e) => {
			this.state.btns[this.settings.map.zl] = 0;
		});
		gamepad.on("press", "shoulder_bottom_right", (e) => {
			this.state.btns[this.settings.map.zr] = 1;
		});
		gamepad.on("release", "shoulder_bottom_right", (e) => {
			this.state.btns[this.settings.map.zr] = 0;
		});
		gamepad.on("press", "select", (e) => {
			this.state.btns[this.settings.map.minus] = 1;
		});
		gamepad.on("release", "select", (e) => {
			this.state.btns[this.settings.map.minus] = 0;
		});
		gamepad.on("press", "start", (e) => {
			this.state.btns[this.settings.map.plus] = 1;
		});
		gamepad.on("release", "start", (e) => {
			this.state.btns[this.settings.map.plus] = 0;
		});
		gamepad.on("press", "d_pad_up", (e) => {
			this.state.btns[this.settings.map.up] = 1;
		});
		gamepad.on("release", "d_pad_up", (e) => {
			this.state.btns[this.settings.map.up] = 0;
		});
		gamepad.on("press", "d_pad_down", (e) => {
			this.state.btns[this.settings.map.down] = 1;
		});
		gamepad.on("release", "d_pad_down", (e) => {
			this.state.btns[this.settings.map.down] = 0;
		});
		gamepad.on("press", "d_pad_left", (e) => {
			this.state.btns[this.settings.map.left] = 1;
		});
		gamepad.on("release", "d_pad_left", (e) => {
			this.state.btns[this.settings.map.left] = 0;
		});
		gamepad.on("press", "d_pad_right", (e) => {
			this.state.btns[this.settings.map.right] = 1;
		});
		gamepad.on("release", "d_pad_right", (e) => {
			this.state.btns[this.settings.map.right] = 0;
		});
		gamepad.on("press", "stick_button_left", (e) => {
			this.state.btns[this.settings.map.lstick] = 1;
		});
		gamepad.on("release", "stick_button_left", (e) => {
			this.state.btns[this.settings.map.lstick] = 0;
		});
		gamepad.on("press", "stick_button_right", (e) => {
			this.state.btns[this.settings.map.right] = 1;
		});
		gamepad.on("release", "stick_button_right", (e) => {
			this.state.btns[this.settings.map.right] = 0;
		});

		gamepad.on("hold", "stick_axis_left", (e) => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[0][0] = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.sticks[0][1] = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.sticks[0][0]) < this.settings.sticks.L.X.deadzone) {
				this.state.sticks[0][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[0][1]) < this.settings.sticks.L.Y.deadzone) {
				this.state.sticks[0][1] = restPos;
			}
		});
		gamepad.on("press", "stick_axis_left", (e) => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[0][0] = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.sticks[0][1] = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.sticks[0][0]) < this.settings.sticks.L.X.deadzone) {
				this.state.sticks[0][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[0][1]) < this.settings.sticks.L.Y.deadzone) {
				this.state.sticks[0][1] = restPos;
			}
		});
		gamepad.on("release", "stick_axis_left", (e) => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[0][0] = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.sticks[0][1] = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.sticks[0][0]) < this.settings.sticks.L.X.deadzone) {
				this.state.sticks[0][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[0][1]) < this.settings.sticks.L.Y.deadzone) {
				this.state.sticks[0][1] = restPos;
			}
		});
		gamepad.on("hold", "stick_axis_right", (e) => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[1][0] = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.sticks[1][1] = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.sticks[1][0]) < this.settings.sticks.R.X.deadzone) {
				this.state.sticks[1][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[1][1]) < this.settings.sticks.R.Y.deadzone) {
				this.state.sticks[1][1] = restPos;
			}
		});
		gamepad.on("press", "stick_axis_right", (e) => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[1][0] = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.sticks[1][1] = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.sticks[1][0]) < this.settings.sticks.R.X.deadzone) {
				this.state.sticks[1][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[1][1]) < this.settings.sticks.R.Y.deadzone) {
				this.state.sticks[1][1] = restPos;
			}
		});
		gamepad.on("release", "stick_axis_right", (e) => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.sticks[1][0] = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.sticks[1][1] = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.sticks[1][0]) < this.settings.sticks.R.X.deadzone) {
				this.state.sticks[1][0] = restPos;
			}
			if (Math.abs(restPos - this.state.sticks[1][1]) < this.settings.sticks.R.Y.deadzone) {
				this.state.sticks[1][1] = restPos;
			}
		});
	}

}

module.exports = VirtualController;
