const Gamepad = require("js/gamepad.js");

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

let VirtualController = function () {

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
	}

	this.init = function () {

		const gamepad = new Gamepad();

		gamepad.on("connect", e => {
			console.log(`controller ${e.index} connected!`);
		});
		gamepad.on("disconnect", e => {
			console.log(`controller ${e.index} disconnected!`);
		});
		gamepad.on("press", "button_1", e => {
			this.state.btns.b = 1;
		});
		gamepad.on("release", "button_1", e => {
			this.state.btns.b = 0;
		});
		gamepad.on("press", "button_2", e => {
			this.state.btns.a = 1;
		});
		gamepad.on("release", "button_2", e => {
			this.state.btns.a = 0;
		});
		gamepad.on("press", "button_3", e => {
			this.state.btns.y = 1;
		});
		gamepad.on("release", "button_3", e => {
			this.state.btns.y = 0;
		});
		gamepad.on("press", "button_4", e => {
			this.state.btns.x = 1;
		});
		gamepad.on("release", "button_4", e => {
			this.state.btns.x = 0;
		});
		gamepad.on("press", "shoulder_top_left", e => {
			this.state.btns.l = 1;
		});
		gamepad.on("release", "shoulder_top_left", e => {
			this.state.btns.l = 0;
		});
		gamepad.on("press", "shoulder_top_right", e => {
			this.state.btns.r = 1;
		});
		gamepad.on("release", "shoulder_top_right", e => {
			this.state.btns.r = 0;
		});
		gamepad.on("press", "shoulder_bottom_left", e => {
			this.state.btns.zl = 1;
		});
		gamepad.on("release", "shoulder_bottom_left", e => {
			this.state.btns.zl = 0;
		});
		gamepad.on("press", "shoulder_bottom_right", e => {
			this.state.btns.zr = 1;
		});
		gamepad.on("release", "shoulder_bottom_right", e => {
			this.state.btns.zr = 0;
		});
		gamepad.on("press", "select", e => {
			this.state.btns.minus = 1;
		});
		gamepad.on("release", "select", e => {
			this.state.btns.minus = 0;
		});
		gamepad.on("press", "start", e => {
			this.state.btns.plus = 1;
		});
		gamepad.on("release", "start", e => {
			this.state.btns.plus = 0;
		});
		gamepad.on("press", "d_pad_up", e => {
			this.state.btns.left = 1;
		});
		gamepad.on("release", "d_pad_up", e => {
			this.state.btns.left = 0;
		});
		gamepad.on("press", "d_pad_down", e => {
			this.state.btns.right = 1;
		});
		gamepad.on("release", "d_pad_down", e => {
			this.state.btns.right = 0;
		});
		gamepad.on("press", "d_pad_left", e => {
			this.state.btns.left = 1;
		});
		gamepad.on("release", "d_pad_left", e => {
			this.state.btns.left = 0;
		});
		gamepad.on("press", "d_pad_right", e => {
			this.state.btns.right = 1;
		});
		gamepad.on("release", "d_pad_right", e => {
			this.state.btns.right = 0;
		});
		gamepad.on("press", "stick_button_left", e => {
			this.state.btns.lstick = 1;
		});
		gamepad.on("release", "stick_button_left", e => {
			this.state.btns.lstick = 0;
		});
		gamepad.on("press", "stick_button_right", e => {
			this.state.btns.rstick = 1;
		});
		gamepad.on("release", "stick_button_right", e => {
			this.state.btns.rstick = 0;
		});

		gamepad.on("hold", "stick_axis_left", e => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.LStick.x = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.LStick.y = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.LStick.x) < this.settings.sticks.L.X.deadzone) {
				this.state.LStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.LStick.y) < this.settings.sticks.L.Y.deadzone) {
				this.state.LStick.y = restPos;
			}
		});
		gamepad.on("press", "stick_axis_left", e => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.LStick.x = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.LStick.y = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.LStick.x) < this.settings.sticks.L.X.deadzone) {
				this.state.LStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.LStick.y) < this.settings.sticks.L.Y.deadzone) {
				this.state.LStick.y = restPos;
			}
		});
		gamepad.on("release", "stick_axis_left", e => {
			let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.LStick.x = parseInt(x) + this.settings.sticks.L.X.offset;
			this.state.LStick.y = parseInt(y) + this.settings.sticks.L.Y.offset;
			if (Math.abs(restPos - this.state.LStick.x) < this.settings.sticks.L.X.deadzone) {
				this.state.LStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.LStick.y) < this.settings.sticks.L.Y.deadzone) {
				this.state.LStick.y = restPos;
			}
		});
		gamepad.on("hold", "stick_axis_right", e => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.RStick.x = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.RStick.y = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.RStick.x) < this.settings.sticks.R.X.deadzone) {
				this.state.RStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.RStick.y) < this.settings.sticks.R.Y.deadzone) {
				this.state.RStick.y = restPos;
			}
		});
		gamepad.on("press", "stick_axis_right", e => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.RStick.x = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.RStick.y = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.RStick.x) < this.settings.sticks.R.X.deadzone) {
				this.state.RStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.RStick.y) < this.settings.sticks.R.Y.deadzone) {
				this.state.RStick.y = restPos;
			}
		});
		gamepad.on("release", "stick_axis_right", e => {
			let x = (e.value[0] * this.settings.sticks.R.X.sensitivity);
			let y = (e.value[1] * this.settings.sticks.R.Y.sensitivity);
			x = (x / 2) + 0.5;
			y = (-y / 2) + 0.5;
			x *= 255;
			y *= 255;
			this.state.RStick.x = parseInt(x) + this.settings.sticks.R.X.offset;
			this.state.RStick.y = parseInt(y) + this.settings.sticks.R.Y.offset;
			if (Math.abs(restPos - this.state.RStick.x) < this.settings.sticks.R.X.deadzone) {
				this.state.RStick.x = restPos;
			}
			if (Math.abs(restPos - this.state.RStick.y) < this.settings.sticks.R.Y.deadzone) {
				this.state.RStick.y = restPos;
			}
		});
	}

}



module.exports = VirtualController;