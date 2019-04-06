require("libs/keymaster.js");
import keycode from "keycode";
import { mathZoom } from "libs/tools.js";

import VirtualProController from "./VirtualProController.js";

export default class VirtualKeyboard {
	constructor() {
		this.state = new VirtualProController();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		this.changed = false;

		// a list of keys to keep track of:
		this.keysToTrack = [];

		// function to call when state updates:
		// this.updateParentState = () => {};

		this.map1 = {
			LU: 0,
			LD: 1,
			LL: 2,
			LR: 3,
			RU: 4,
			RD: 5,
			RL: 6,
			RR: 7,
			a: 8,
			b: 9,
			x: 10,
			y: 11,
			up: 12,
			down: 13,
			left: 14,
			right: 15,
			lstick: 16,
			rstick: 17,
			l: 18,
			zl: 19,
			r: 20,
			zr: 21,
			minus: 22,
			plus: 23,
			capture: 24,
			home: 25,
		};

		this.map2 = [
			"W",
			"S",
			"A",
			"D",
			"I",
			"K",
			"J",
			"L",
			"right",
			"down",
			"up",
			"left",
			"T",
			"G",
			"F",
			"H",
			"R",
			"Y",
			"U",
			"Q",
			"O",
			"E",
			"-",
			"=",
			"1",
			"2",
		];

		// this.settings = {
		// 	map: {
		// 		buttons: [
		//
		// 		],
		// 		axes: [
		//
		// 		],
		// 	},
		// };

		this.wasPressedKeyCodes = [];

		this.settings = {
			analogStickMode: false,
			stickAttack: 0.4,
			stickReturn: 0.3,
		};

		this.lastPressedKey = null;

		// document.addEventListener("keypress", (event) => {
		// 	console.log(event.key);
		// 	this.lastPressedKey = event.key;
		// });
		document.addEventListener("keydown", (event) => {
			// console.log(event.key);
			let key = event.key;
			if (key.indexOf("Arrow") > -1) {
				key = key.substring(5).toLowerCase();
			}
			this.lastPressedKey = key;
		});
	}

	// get controller state:
	poll() {
		// if (!this.state.keyboardControls) {
		// 	return;
		// }

		let oldControllerState = this.state.getState();

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.map2[this.map1["LU"]])) {
				this.state.axes[1] = 1;
			} else if (key.wasPressed(this.map2[this.map1["LU"]], this.wasPressedKeyCodes)) {
				this.state.axes[1] = 0;
			}
			if (key.isPressed(this.map2[this.map1["LD"]])) {
				this.state.axes[1] = -1;
			} else if (key.wasPressed(this.map2[this.map1["LD"]], this.wasPressedKeyCodes)) {
				this.state.axes[1] = 0;
			}
			if (key.isPressed(this.map2[this.map1["LL"]])) {
				this.state.axes[0] = -1;
			} else if (key.wasPressed(this.map2[this.map1["LL"]], this.wasPressedKeyCodes)) {
				this.state.axes[0] = 0;
			}
			if (key.isPressed(this.map2[this.map1["LR"]])) {
				this.state.axes[0] = 1;
			} else if (key.wasPressed(this.map2[this.map1["LR"]], this.wasPressedKeyCodes)) {
				this.state.axes[0] = 0;
			}
		} else {
			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.map2[this.map1["LU"]])) {
				this.state.axes[1] = this.state.axes[1] + this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["LD"]])) {
				this.state.axes[1] = this.state.axes[1] - this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["LL"]])) {
				this.state.axes[0] = this.state.axes[0] - this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["LR"]])) {
				this.state.axes[0] = this.state.axes[0] + this.settings.stickAttack;
			}

			upDown =
				key.isPressed(this.map2[this.map1["LU"]]) ||
				key.isPressed(this.map2[this.map1["LD"]]);
			leftRight =
				key.isPressed(this.map2[this.map1["LL"]]) ||
				key.isPressed(this.map2[this.map1["LR"]]);

			if (!upDown) {
				this.state.axes[1] = mathZoom(this.state.axes[1], 0, this.settings.stickReturn);
			}

			if (!leftRight) {
				this.state.axes[0] = mathZoom(this.state.axes[0], 0, this.settings.stickReturn);
			}
		}

		if (key.isPressed(this.map2[this.map1["a"]])) {
			this.state.buttons.a = 1;
		} else if (key.wasPressed(this.map2[this.map1["a"]], this.wasPressedKeyCodes)) {
			this.state.buttons.a = 0;
		}
		if (key.isPressed(this.map2[this.map1["b"]])) {
			this.state.buttons.b = 1;
		} else if (key.wasPressed(this.map2[this.map1["b"]], this.wasPressedKeyCodes)) {
			this.state.buttons.b = 0;
		}
		if (key.isPressed(this.map2[this.map1["x"]])) {
			this.state.buttons.x = 1;
		} else if (key.wasPressed(this.map2[this.map1["x"]], this.wasPressedKeyCodes)) {
			this.state.buttons.x = 0;
		}
		if (key.isPressed(this.map2[this.map1["y"]])) {
			this.state.buttons.y = 1;
		} else if (key.wasPressed(this.map2[this.map1["y"]], this.wasPressedKeyCodes)) {
			this.state.buttons.y = 0;
		}

		if (key.isPressed(this.map2[this.map1["up"]])) {
			this.state.buttons.up = 1;
		} else if (key.wasPressed(this.map2[this.map1["up"]], this.wasPressedKeyCodes)) {
			this.state.buttons.up = 0;
		}
		if (key.isPressed(this.map2[this.map1["down"]])) {
			this.state.buttons.down = 1;
		} else if (key.wasPressed(this.map2[this.map1["down"]], this.wasPressedKeyCodes)) {
			this.state.buttons.down = 0;
		}
		if (key.isPressed(this.map2[this.map1["left"]])) {
			this.state.buttons.left = 1;
		} else if (key.wasPressed(this.map2[this.map1["left"]], this.wasPressedKeyCodes)) {
			this.state.buttons.left = 0;
		}
		if (key.isPressed(this.map2[this.map1["right"]])) {
			this.state.buttons.right = 1;
		} else if (key.wasPressed(this.map2[this.map1["right"]], this.wasPressedKeyCodes)) {
			this.state.buttons.right = 0;
		}

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.map2[this.map1["RU"]])) {
				this.state.axes[3] = 1;
			} else if (key.wasPressed(this.map2[this.map1["RU"]], this.wasPressedKeyCodes)) {
				this.state.axes[3] = 0;
			}
			if (key.isPressed(this.map2[this.map1["RD"]])) {
				this.state.axes[3] = -1;
			} else if (key.wasPressed(this.map2[this.map1["RD"]], this.wasPressedKeyCodes)) {
				this.state.axes[3] = 0;
			}
			if (key.isPressed(this.map2[this.map1["RL"]])) {
				this.state.axes[2] = -1;
			} else if (key.wasPressed(this.map2[this.map1["RL"]], this.wasPressedKeyCodes)) {
				this.state.axes[2] = 0;
			}
			if (key.isPressed(this.map2[this.map1["RR"]])) {
				this.state.axes[2] = 1;
			} else if (key.wasPressed(this.map2[this.map1["RR"]], this.wasPressedKeyCodes)) {
				this.state.axes[2] = 0;
			}
		} else {
			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.map2[this.map1["RU"]])) {
				this.state.axes[3] = this.state.axes[3] + this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["RD"]])) {
				this.state.axes[3] = this.state.axes[3] - this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["RL"]])) {
				this.state.axes[2] = this.state.axes[2] - this.settings.stickAttack;
			}
			if (key.isPressed(this.map2[this.map1["RR"]])) {
				this.state.axes[2] = this.state.axes[2] + this.settings.stickAttack;
			}

			upDown =
				key.isPressed(this.map2[this.map1["RU"]]) ||
				key.isPressed(this.map2[this.map1["RD"]]);
			leftRight =
				key.isPressed(this.map2[this.map1["RL"]]) ||
				key.isPressed(this.map2[this.map1["RR"]]);

			if (!upDown) {
				this.state.axes[3] = mathZoom(this.state.axes[3], 0, this.settings.stickReturn);
			}

			if (!leftRight) {
				this.state.axes[2] = mathZoom(this.state.axes[2], 0, this.settings.stickReturn);
			}
		}

		if (key.isPressed(this.map2[this.map1["minus"]])) {
			this.state.buttons.minus = 1;
		} else if (key.wasPressed(this.map2[this.map1["minus"]], this.wasPressedKeyCodes)) {
			this.state.buttons.minus = 0;
		}
		if (key.isPressed(this.map2[this.map1["plus"]])) {
			this.state.buttons.plus = 1;
		} else if (key.wasPressed(this.map2[this.map1["plus"]], this.wasPressedKeyCodes)) {
			this.state.buttons.plus = 0;
		}

		if (key.isPressed(this.map2[this.map1["capture"]])) {
			this.state.buttons.capture = 1;
		} else if (key.wasPressed(this.map2[this.map1["capture"]], this.wasPressedKeyCodes)) {
			this.state.buttons.capture = 0;
		}
		if (key.isPressed(this.map2[this.map1["home"]])) {
			this.state.buttons.home = 1;
		} else if (key.wasPressed(this.map2[this.map1["home"]], this.wasPressedKeyCodes)) {
			this.state.buttons.home = 0;
		}

		if (key.isPressed(this.map2[this.map1["l"]])) {
			this.state.buttons.l = 1;
		} else if (key.wasPressed(this.map2[this.map1["l"]], this.wasPressedKeyCodes)) {
			this.state.buttons.l = 0;
		}
		if (key.isPressed(this.map2[this.map1["r"]])) {
			this.state.buttons.r = 1;
		} else if (key.wasPressed(this.map2[this.map1["r"]], this.wasPressedKeyCodes)) {
			this.state.buttons.r = 0;
		}

		if (key.isPressed(this.map2[this.map1["zl"]])) {
			this.state.buttons.zl = 1;
			this.state.axes[4] = 1;
		} else if (key.wasPressed(this.map2[this.map1["zl"]], this.wasPressedKeyCodes)) {
			this.state.buttons.zl = 0;
			this.state.axes[4] = 0;
		}
		if (key.isPressed(this.map2[this.map1["zr"]])) {
			this.state.buttons.zr = 1;
			this.state.axes[5] = 1;
		} else if (key.wasPressed(this.map2[this.map1["zr"]], this.wasPressedKeyCodes)) {
			this.state.buttons.zr = 0;
			this.state.axes[5] = 0;
		}

		if (key.isPressed(this.map2[this.map1["lstick"]])) {
			this.state.buttons.lstick = 1;
		} else if (key.wasPressed(this.map2[this.map1["lstick"]], this.wasPressedKeyCodes)) {
			this.state.buttons.lstick = 0;
		}
		if (key.isPressed(this.map2[this.map1["rstick"]])) {
			this.state.buttons.rstick = 1;
		} else if (key.wasPressed(this.map2[this.map1["rstick"]], this.wasPressedKeyCodes)) {
			this.state.buttons.rstick = 0;
		}

		this.wasPressedKeyCodes = key.getPressedKeyCodes();

		let newControllerState = this.state.getState();

		// reset if nothing changed:
		if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
			this.state.setState(oldControllerState);
		} else {
			this.changed = true;
		}
	}
}
