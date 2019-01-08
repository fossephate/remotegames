
import VirtualProController from "./VirtualProController.js";
import { AxisSettings } from "./VirtualController.js";
let restPos = 128;

const tools = require("js/tools.js");

export default class VirtualMouse {

	constructor() {

		this.canvas = null;
		this.toggle = this.toggle.bind(this);
		this.getMouseInput1 = this.getMouseInput1.bind(this);
		this.getMouseInput2 = this.getMouseInput2.bind(this);
		this.onPointerLockChange = this.onPointerLockChange.bind(this);

		this.state = new VirtualProController();

		this.mouseMoveTimer = null;

		this.settings = {

			enabled: false,

			axes: [
				new AxisSettings(15, 0, 0),
				new AxisSettings(15, 0, 0),
			],

			map: {
				buttons: [
					"zl",
					"x",
					"zr",
				],
			},

		}

	}

	onPointerLockChange() {
		if (document.pointerLockElement == null) {
			this.toggle(false);
		}
	}

	getMouseInput1(event) {

		// on mouse stop:
		clearTimeout(this.mouseMoveTimer);
		this.mouseMoveTimer = setTimeout(() => {
			this.state.axes[2] = restPos;
			this.state.axes[3] = restPos;
		}, 200);

		let x = restPos + (event.movementX * this.settings.axes[0].sensitivity);
		let y = restPos - (event.movementY * this.settings.axes[1].sensitivity);

		let min = 50;
		let accel = 1;
		if (Math.abs(x - restPos) < min) {
			x = tools.mathZoom(x, restPos, accel);
		}
		if (Math.abs(y - restPos) < min) {
			y = tools.mathZoom(y, restPos, accel);
		}

		this.state.axes[2] = tools.clamp(x, 0, 255);
		this.state.axes[3] = tools.clamp(y, 0, 255);
	}

	getMouseInput2(event) {
		let pressed = event.type == "mousedown" ? 1 : 0;
		this.state.buttons[this.settings.map.buttons[event.which - 1]] = pressed;
	}

	init(canvas) {
		this.canvas = canvas;
		canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
		document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
	}

	toggle(state) {

		if (!this.canvas) {
			console.log("canvas not set!");
			return;
		}

		this.settings.enabled = state;

		if (state) {
			this.canvas.requestPointerLock();
			document.addEventListener("mousemove", this.getMouseInput1, false);
			document.addEventListener("mousedown", this.getMouseInput2, false);
			document.addEventListener("mouseup", this.getMouseInput2, false);
			document.addEventListener("pointerlockchange", this.onPointerLockChange, false);
		} else {
			document.exitPointerLock();
			document.removeEventListener("mousemove", this.getMouseInput1);
			document.removeEventListener("mousedown", this.getMouseInput2);
			document.removeEventListener("mouseup", this.getMouseInput2);
			document.removeEventListener("pointerlockchange", this.onPointerLockChange);
			this.state.axes[2] = restPos;
			this.state.axes[3] = restPos;
			setTimeout(() => {
				this.settings.enabled = false;
			}, 200);
		}
	}

}
