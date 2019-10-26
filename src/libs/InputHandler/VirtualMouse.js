import ControllerState from "./ControllerState.js";
import { AxisSettings } from "./VirtualController.js";
const restPos = 0;

import { clamp } from "libs/tools.js";

export default class VirtualMouse {
	constructor() {
		this.canvas = null;
		this.toggle = this.toggle.bind(this);
		this.getMouseInput1 = this.getMouseInput1.bind(this);
		this.getMouseInput2 = this.getMouseInput2.bind(this);
		this.onPointerLockChange = this.onPointerLockChange.bind(this);
		this.getControllerState = this.getControllerState.bind(this);
		this.getMouseState = this.getMouseState.bind(this);

		this.cstate = new ControllerState();
		this.mstate = {
			mouse: {
				dx: 0,
				dy: 0,
				btns: {
					left: 0,
					right: 0,
					middle: 0,
				},
			},
		};
		this.btnMap = {
			0: "left",
			1: "middle",
			2: "right",
		};

		this.mouseMoveTimer = null;
		this.changed = false;

		this.settings = {
			enabled: false,

			axes: [
				// new AxisSettings(0.08, 0, 0), // 15
				// new AxisSettings(0.08, 0, 0),
				new AxisSettings(0.06, 0, 0),
				new AxisSettings(0.06, 0, 0),
			],

			map: {
				buttons: ["zr", "x", "zl"],
			},
		};
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
			this.changed = true;
			this.cstate.axes[2] = restPos;
			this.cstate.axes[3] = restPos;
		}, 80);

		let x = restPos + event.movementX * this.settings.axes[0].sensitivity;
		let y = restPos - event.movementY * this.settings.axes[1].sensitivity;

		this.changed = true;

		this.mstate.dx = clamp(x, -1, 1);
		this.mstate.dy = clamp(y, -1, 1);
		this.cstate.axes[2] = this.mstate.dx;
		this.cstate.axes[3] = this.mstate.dy;
	}

	getMouseInput2(event) {
		let pressed = event.type == "mousedown" ? 1 : 0;
		this.changed = true;
		this.cstate.buttons[this.settings.map.buttons[event.which - 1]] = pressed;
		let which = this.btnMap[event.which - 1];
		this.mstate.btns[which] = pressed;
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
			clearTimeout(this.mouseMoveTimer);
			this.cstate.axes[2] = restPos;
			this.cstate.axes[3] = restPos;
			setTimeout(() => {
				this.settings.enabled = false;
			}, 1000);
		}
	}

	getControllerState() {
		return this.cstate.getState();
	}

	getMouseState() {
		return this.mstate;
	}
}
