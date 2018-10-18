const Gamepad = require("js/gamepad.js");

const keycode = require("keycode");
require("./keymaster.js");


let currentInputMode = "keyboard";


// input types:
// each should handle each type of device:
const VirtualController = require("./VirtualController.js");
const VirtualKeyboard = require("./VirtualKeyboard.js");
const VirtualMouse = require("./VirtualMouse.js"); // todo

const VirtualProController = require("./VirtualProController.js");



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

	// snex:
	this.snexController = new VirtualController();

	// output device to be read:
	this.outputController = new VirtualProController();
	// previous state:
	this.oldControllerState = "";

	// // init:
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
			}

			// snex:
			newControllerState = this.snexController.state.getState();
			if (newControllerState != this.oldControllerState) {
				this.currentInputMode = "controller";
				updatedState = newControllerState;
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
			this.snexController.state.setState(updatedState);
			this.outputController.setState(updatedState);

			this.oldControllerState = updatedState;
		}
	}

}


module.exports = InputMaster;