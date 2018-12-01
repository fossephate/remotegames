// import Gamepad from "js/gamepad.js";

import GamepadWrapper from "js/gamepad2.js";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

class controllerMapping {
	constructor(type, rest, activated, released, which) {
		this.type = type;

		if (type == "button") {
			this.rest = rest;
		} else if (type == "axis") {
			this.rest = rest;
			this.activated = active;
			this.released = released;
			this.index = which;
		}
	}
}

class axisSettings {
	constructor(sensitivity, offset, deadzone) {
		this.sensitivity = sensitivity;
		this.offset = offset;
		this.deadzone = deadzone;
	}
}

class VirtualController {

	constructor() {

		this.state = new VirtualProController();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		this.settings = {

			sticks: [
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

			axes: [
				new axisSettings(1, 0, 50),
				new axisSettings(1, 0, 50),
				new axisSettings(1, 0, 50),
				new axisSettings(1, 0, 50),
				new axisSettings(1, 0, 50),
				new axisSettings(1, 0, 50),
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
					[2, 2],
					[3, 3],
					[4, 4],
					[5, 5],
					[6, 6],
					[7, 7],
				],
			},

		}

	}

	init() {

		window.gamepadWrapper = new GamepadWrapper();



	}

}

module.exports = VirtualController;
