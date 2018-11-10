// libs:

const Gamepad = require("js/gamepad.js").default;

const keycode = require("keycode");
require("./keymaster.js");

// input types:
// each should handle each type of device:
const VirtualController = require("./VirtualController.js");
const VirtualKeyboard = require("./VirtualKeyboard.js");
const VirtualMouse = require("./VirtualMouse.js"); // todo

const VirtualProController = require("./VirtualProController.js");


// map several inputs to a single virtual controller:
function InputMaster(isMobile) {

	this.isMobile = isMobile;

	// current device being used:
	this.currentInputMode = "keyboard";

	// represents any controller's current state:
	this.controller = new VirtualController();
	// the current state of the keyboard:
	this.keyboard = new VirtualKeyboard();
	// the current state of the mouse:
	this.mouse = new VirtualMouse(); // todo
	// the touch controls state:
	// this.touch = new ???(); // todo

	// output device to be read:
	this.outputController = new VirtualProController();
	// previous state:
	this.oldControllerState = "000000000000000000 128 128 128 128";

	// init:
	this.controller.init();

	this.pollDevices = function () {

		let newControllerState;
		let updatedState = this.oldControllerState;


		if (!this.isMobile) {

			// controller:
			newControllerState = this.controller.state.getState();
			if (newControllerState != this.oldControllerState) {
				this.currentInputMode = "controller";
				updatedState = newControllerState;
				console.log(newControllerState);
			}

			// keyboard:
			this.keyboard.poll();
			newControllerState = this.keyboard.state.getState();
			if (newControllerState != this.oldControllerState) {
				this.currentInputMode = "keyboard";
				updatedState = newControllerState;
			}
		}


		if (updatedState != this.oldControllerState) {

			this.controller.state.setState(updatedState);
			this.keyboard.state.setState(updatedState);

			this.outputController.setState(updatedState);

			this.oldControllerState = updatedState;
		}
	}

}


module.exports = InputMaster;