import { pick } from "src/libs/tools.js";
import nipplejs from "nipplejs";

// window.nipplejs = nipplejs;

let btnList = {
	a: 1,
	b: 1,
	x: 1,
	y: 1,
	up: 1,
	down: 1,
	left: 1,
	right: 1,
	l: 1,
	zl: 1,
	r: 1,
	zr: 1,
	minus: 1,
	plus: 1,
	capture: 1,
	home: 1,
};

const leftButtons = {
	up: 1,
	down: 1,
	left: 1,
	right: 1,
	l: 1,
	zl: 1,
	minus: 1,
	capture: 1,
};

export class TouchWrapper {
	constructor() {
		this.ongoingTouches = [];

		this.activeTargets = {};

		document.addEventListener("touchstart", this.handleTouchStart, false);
		document.addEventListener("touchend", this.handleTouchEnd, false);
		document.addEventListener("touchcancel", this.handleTouchCancel, false);
		document.addEventListener("touchmove", this.handleTouchMove, false);

		document.addEventListener("mousedown", this.handleTouchStart, false);
		document.addEventListener("mouseup", this.handleTouchEnd, false);
		document.addEventListener("mousemove", this.handleTouchMove, false);

		/* JOYSTICKS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
		this.leftStick = null;
		this.rightStick = null;
		this.leftJoyStick = null;
		this.rightJoyStick = null;

		this.leftActive = false;
		this.rightActive = false;

		this.sticks = {
			lx: 0,
			ly: 0,
			rx: 0,
			ry: 0,
		};
	}

	init = (leftZone, rightZone) => {
		let leftJoyStick = {
			zone: leftZone,
			mode: "static",
			catchDistance: 10,
			color: "#FF3C28",
			position: { left: "50%", top: "50%" },
			size: 60,
			restOpacity: 0,
			fadeTime: 1e99,
		};

		let rightJoyStick = {
			zone: rightZone,
			mode: "static",
			catchDistance: 10,
			color: "#0AB9E6",
			position: { left: "50%", top: "50%" },
			size: 60,
			restOpacity: 0,
			fadeTime: 1e99,
		};

		this.leftStick = nipplejs.create(leftJoyStick);
		this.rightStick = nipplejs.create(rightJoyStick);

		this.bindJoysticks();
	};

	bindJoysticks = () => {
		let stickSize = 60;
		let s1 = stickSize;
		let s2 = stickSize / 2;
		this.leftStick
			.on("start", (evt, data) => {
				let pos = data.frontPosition;
				pos.x = ((pos.x + s2) / s1) * 2 - 1;
				pos.y = -(((pos.y + s2) / s1) * 2 - 1);
				this.sticks.lx = pos.x;
				this.sticks.ly = pos.y;
				this.leftActive = true;
			})
			.on("end", (evt, data) => {
				this.sticks.lx = 0;
				this.sticks.ly = 0;
				this.leftActive = false;
			})
			.on("move", (evt, data) => {
				let pos = data.instance.frontPosition;
				pos.x = ((pos.x + s2) / s1) * 2 - 1;
				pos.y = -(((pos.y + s2) / s1) * 2 - 1);
				this.sticks.lx = pos.x;
				this.sticks.ly = pos.y;
			});

		this.rightStick
			.on("start", (evt, data) => {
				let pos = data.frontPosition;
				pos.x = ((pos.x + s2) / s1) * 2 - 1;
				pos.y = -(((pos.y + s2) / s1) * 2 - 1);
				this.sticks.rx = pos.x;
				this.sticks.ry = pos.y;
				this.rightActive = true;
			})
			.on("end", (evt, data) => {
				this.sticks.rx = 0;
				this.sticks.ry = 0;
				this.rightActive = false;
			})
			.on("move", (evt, data) => {
				let pos = data.instance.frontPosition;
				pos.x = ((pos.x + s2) / s1) * 2 - 1;
				pos.y = -(((pos.y + s2) / s1) * 2 - 1);
				this.sticks.rx = pos.x;
				this.sticks.ry = pos.y;
			});
	};

	getName = (names) => {
		for (let i = 0; i < names.length; i++) {
			if (btnList[names[i]]) {
				let isLeftButton = !!leftButtons[names[i]];

				if ((isLeftButton && this.leftActive) || (!isLeftButton && this.rightActive)) {
					return "other";
				}

				return names[i];
			}
		}
		return "other";
	};

	ongoingTouchIndexById = (idToFind) => {
		for (let i = 0; i < this.ongoingTouches.length; i++) {
			let id = this.ongoingTouches[i].identifier;
			if (id == idToFind) {
				return i;
			}
		}
		return -1; // not found
	};

	handleTouchStart = (event) => {
		let touches = event.changedTouches;

		if (!touches) {
			touches = [{ clientX: event.clientX, clientY: event.clientY, identifier: 0 }];
		}

		for (let i = 0; i < touches.length; i++) {
			this.ongoingTouches.push(pick("identifier", "clientX", "clientY")(touches[i]));
			this.activeTargets[
				this.getName(
					document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList,
				)
			] = true;
		}
	};

	handleTouchEnd = (event) => {
		// event.preventDefault();

		let touches = event.changedTouches;

		if (!touches) {
			touches = [{ clientX: event.clientX, clientY: event.clientY, identifier: 0 }];
		}

		for (let i = 0; i < touches.length; i++) {
			let idx = this.ongoingTouchIndexById(touches[i].identifier);

			if (idx >= 0) {
				this.ongoingTouches.splice(idx, 1); // remove it; we're done
				this.activeTargets[
					this.getName(
						document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList,
					)
				] = false;
			} else {
				// console.log("can't figure out which touch to end");
				alert("can't figure out which touch to end");
			}
		}
	};

	handleTouchCancel = (event) => {
		// console.log("touchcancel.");
		// event.preventDefault();

		let touches = event.changedTouches;

		if (!touches) {
			touches = [{ clientX: event.clientX, clientY: event.clientY, identifier: 0 }];
		}

		for (let i = 0; i < touches.length; i++) {
			let idx = this.ongoingTouchIndexById(touches[i].identifier);
			if (idx < 0) {
				alert("can't figure out which touch to cancel");
			}
			this.ongoingTouches.splice(idx, 1); // remove it; we're done
			this.activeTargets[
				this.getName(
					document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList,
				)
			] = false;
		}
	};

	handleTouchMove = (event) => {
		event.preventDefault();
		let touches = event.changedTouches;

		if (!touches) {
			if (this.ongoingTouches.length === 0) {
				return;
			}
			touches = [{ clientX: event.clientX, clientY: event.clientY, identifier: 0 }];
		}

		for (let i = 0; i < touches.length; i++) {
			let idx = this.ongoingTouchIndexById(touches[i].identifier);
			if (idx >= 0) {
				let oldTarget = this.getName(
					document.elementFromPoint(
						this.ongoingTouches[idx].clientX,
						this.ongoingTouches[idx].clientY,
					).classList,
				);
				let newTarget = this.getName(
					document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList,
				);
				if (oldTarget != newTarget) {
					this.activeTargets[oldTarget] = false;
				}
				this.ongoingTouches.splice(
					idx,
					1,
					pick("identifier", "clientX", "clientY")(touches[i]),
				); // swap in the new touch record
				this.activeTargets[newTarget] = true;
			} else {
				console.log("can't figure out which touch to continue");
			}
		}
	};
}
