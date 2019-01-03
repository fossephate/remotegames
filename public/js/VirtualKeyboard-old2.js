require("./keymaster.js");
const keycode = require("keycode");
import keyboardJS from "keyboardjs";
import { mathZoom } from "./tools.js";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

class VirtualKeyboard {

	constructor() {

		this.state = new VirtualProController();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		// a list of keys to keep track of:
		this.keysToTrack = [];

		// function to call when state updates:
		// this.updateParentState = () => {};

		this.map = {
			LU: "W",
			LD: "S",
			LL: "A",
			LR: "D",
			RU: "I",
			RD: "K",
			RL: "J",
			RR: "L",
			a: "right",
			b: "down",
			x: "up",
			y: "left",
			up: "T",
			down: "G",
			left: "F",
			right: "H",
			lstick: "R",
			rstick: "Y",
			l: "U",
			zl: "Q",
			r: "O",
			zr: "E",
			minus: "-",
			plus: "=",
			capture: "1",
			home: "2",
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

		this.settings = {
			map: {
				buttons: [

				],
				axes: [

				],
			};
		};

		this.wasPressedKeyCodes = [];

		this.settings = {
			analogStickMode: false,
		};

		this.lastPressedKey = null;

		document.addEventListener("keypress", (event) => {
			// console.log(event.key);
			this.lastPressedKey = event.key;
		});

	}

	// get controller state:
	poll() {

		// if (!this.state.keyboardControls) {
		// 	return;
		// }

		let oldControllerState = this.state.getState();

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.map.LU)) {
				this.state.axes[1] = 255;
			} else if (key.wasPressed(this.map.LU, this.wasPressedKeyCodes)) {
				this.state.axes[1] = restPos;
			}
			if (key.isPressed(this.map.LD)) {
				this.state.axes[1] = 0;
			} else if (key.wasPressed(this.map.LD, this.wasPressedKeyCodes)) {
				this.state.axes[1] = restPos;
			}
			if (key.isPressed(this.map.LL)) {
				this.state.axes[0] = 0;
			} else if (key.wasPressed(this.map.LL, this.wasPressedKeyCodes)) {
				this.state.axes[0] = restPos;
			}
			if (key.isPressed(this.map.LR)) {
				this.state.axes[0] = 255;
			} else if (key.wasPressed(this.map.LR, this.wasPressedKeyCodes)) {
				this.state.axes[0] = restPos;
			}

		} else {

			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.map.LU)) {
				this.state.axes[1] = Math.round(parseInt(this.state.axes[1]) + settings.stickAttack);
			}
			if (key.isPressed(this.map.LD)) {
				this.state.axes[1] = Math.round(parseInt(this.state.axes[1]) - settings.stickAttack);
			}
			if (key.isPressed(this.map.LL)) {
				this.state.axes[0] = Math.round(parseInt(this.state.axes[0]) - settings.stickAttack);
			}
			if (key.isPressed(this.map.LR)) {
				this.state.axes[0] = Math.round(parseInt(this.state.axes[0]) + settings.stickAttack);
			}

			upDown = key.isPressed(this.map.LU) || key.isPressed(this.map.LD);
			leftRight = key.isPressed(this.map.LL) || key.isPressed(this.map.LR);

			if (!upDown) {
				this.state.axes[1] = Math.round(mathZoom(parseInt(this.state.axes[1]), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.axes[0] = Math.round(mathZoom(parseInt(this.state.axes[0]), restPos, settings.stickReturn));
			}
		}

		// console.log(this.state.lstick);

		if (key.isPressed(this.map.a)) {
			this.state.buttons.a = 1;
		} else if (key.wasPressed(this.map.a, this.wasPressedKeyCodes)) {
			this.state.buttons.a = 0;
		}
		if (key.isPressed(this.map.b)) {
			this.state.buttons.b = 1;
		} else if (key.wasPressed(this.map.b, this.wasPressedKeyCodes)) {
			this.state.buttons.b = 0;
		}
		if (key.isPressed(this.map.x)) {
			this.state.buttons.x = 1;
		} else if (key.wasPressed(this.map.x, this.wasPressedKeyCodes)) {
			this.state.buttons.x = 0;
		}
		if (key.isPressed(this.map.y)) {
			this.state.buttons.y = 1;
		} else if (key.wasPressed(this.map.y, this.wasPressedKeyCodes)) {
			this.state.buttons.y = 0;
		}

		if (key.isPressed(this.map.up)) {
			this.state.buttons.up = 1;
		} else if (key.wasPressed(this.map.up, this.wasPressedKeyCodes)) {
			this.state.buttons.up = 0;
		}
		if (key.isPressed(this.map.down)) {
			this.state.buttons.down = 1;
		} else if (key.wasPressed(this.map.down, this.wasPressedKeyCodes)) {
			this.state.buttons.down = 0;
		}
		if (key.isPressed(this.map.left)) {
			this.state.buttons.left = 1;
		} else if (key.wasPressed(this.map.left, this.wasPressedKeyCodes)) {
			this.state.buttons.left = 0;
		}
		if (key.isPressed(this.map.right)) {
			this.state.buttons.right = 1;
		} else if (key.wasPressed(this.map.right, this.wasPressedKeyCodes)) {
			this.state.buttons.right = 0;
		}

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.map.RU)) {
				this.state.axes[3] = 255;
			} else if (key.wasPressed(this.map.RU, this.wasPressedKeyCodes)) {
				this.state.axes[3] = restPos;
			}
			if (key.isPressed(this.map.RD)) {
				this.state.axes[3] = 0;
			} else if (key.wasPressed(this.map.RD, this.wasPressedKeyCodes)) {
				this.state.axes[3] = restPos;
			}
			if (key.isPressed(this.map.RL)) {
				this.state.axes[2] = 0;
			} else if (key.wasPressed(this.map.RL, this.wasPressedKeyCodes)) {
				this.state.axes[2] = restPos;
			}
			if (key.isPressed(this.map.RR)) {
				this.state.axes[2] = 255;
			} else if (key.wasPressed(this.map.RR, this.wasPressedKeyCodes)) {
				this.state.axes[2] = restPos;
			}
		} else {
			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.map.RU)) {
				this.state.axes[3] = Math.round(parseInt(this.state.axes[3]) + settings.stickAttack);
			}
			if (key.isPressed(this.map.RD)) {
				this.state.axes[3] = Math.round(parseInt(this.state.axes[3]) - settings.stickAttack);
			}
			if (key.isPressed(this.map.RL)) {
				this.state.axes[2] = Math.round(parseInt(this.state.axes[2]) - settings.stickAttack);
			}
			if (key.isPressed(this.map.RR)) {
				this.state.axes[2] = Math.round(parseInt(this.state.axes[2]) + settings.stickAttack);
			}

			upDown = key.isPressed(this.map.RU) || key.isPressed(this.map.RD);
			leftRight = key.isPressed(this.map.RL) || key.isPressed(this.map.RR);

			if (!upDown) {
				this.state.axes[3] = Math.round(mathZoom(parseInt(this.state.axes[3]), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.axes[2] = Math.round(mathZoom(parseInt(this.state.axes[2]), restPos, settings.stickReturn));
			}
		}

		if (key.isPressed(this.map.minus)) {
			this.state.buttons.minus = 1;
		} else if (key.wasPressed(this.map.minus, this.wasPressedKeyCodes)) {
			this.state.buttons.minus = 0;
		}
		if (key.isPressed(this.map.plus)) {
			this.state.buttons.plus = 1;
		} else if (key.wasPressed(this.map.plus, this.wasPressedKeyCodes)) {
			this.state.buttons.plus = 0;
		}

		if (key.isPressed(this.map.capture)) {
			this.state.buttons.capture = 1;
		} else if (key.wasPressed(this.map.capture, this.wasPressedKeyCodes)) {
			this.state.buttons.capture = 0;
		}
		if (key.isPressed(this.map.home)) {
			this.state.buttons.home = 1;
		} else if (key.wasPressed(this.map.home, this.wasPressedKeyCodes)) {
			this.state.buttons.home = 0;
		}

		if (key.isPressed(this.map.l)) {
			this.state.buttons.l = 1;
		} else if (key.wasPressed(this.map.l, this.wasPressedKeyCodes)) {
			this.state.buttons.l = 0;
		}
		if (key.isPressed(this.map.r)) {
			this.state.buttons.r = 1;
		} else if (key.wasPressed(this.map.r, this.wasPressedKeyCodes)) {
			this.state.buttons.r = 0;
		}

		if (key.isPressed(this.map.zl)) {
			this.state.buttons.zl = 1;
			this.state.axes[4] = 1;
		} else if (key.wasPressed(this.map.zl, this.wasPressedKeyCodes)) {
			this.state.buttons.zl = 0;
			this.state.axes[4] = 0;
		}
		if (key.isPressed(this.map.zr)) {
			this.state.buttons.zr = 1;
			this.state.axes[5] = 1;
		} else if (key.wasPressed(this.map.zr, this.wasPressedKeyCodes)) {
			this.state.buttons.zr = 0;
			this.state.axes[5] = 0;
		}

		if (key.isPressed(this.map.lstick)) {
			this.state.buttons.lstick = 1;
		} else if (key.wasPressed(this.map.lstick, this.wasPressedKeyCodes)) {
			this.state.buttons.lstick = 0;
		}
		if (key.isPressed(this.map.rstick)) {
			this.state.buttons.rstick = 1;
		} else if (key.wasPressed(this.map.rstick, this.wasPressedKeyCodes)) {
			this.state.buttons.rstick = 0;
		}

		this.wasPressedKeyCodes = key.getPressedKeyCodes();

		let newControllerState = this.state.getState();

		// reset if nothing changed:
		if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
			this.state.setState(oldControllerState);
		}
	}
}

module.exports = VirtualKeyboard;
