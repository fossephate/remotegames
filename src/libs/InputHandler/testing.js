var ongoingTouches = [];

function printPoints() {
	for (let i = 0; i < ongoingTouches.length; i++) {
		let touch = ongoingTouches[i];
		console.log(`X: ${touch.pageX} Y: ${touch.pageY}`);
	}
}

function log(msg) {
	let p = document.getElementById("log");
	p.innerHTML = msg + "\n" + p.innerHTML;
}

function copyTouch({ identifier, pageX, pageY }) {
	return { identifier, pageX, pageY };
}

let pick = (...props) => (o) => props.reduce((a, e) => ({ ...a, [e]: o[e] }), {});

function ongoingTouchIndexById(idToFind) {
	for (let i = 0; i < ongoingTouches.length; i++) {
		let id = ongoingTouches[i].identifier;
		if (id == idToFind) {
			return i;
		}
	}
	return -1; // not found
}

function handleTouchStart(event) {
	console.log("touchstart");
	let touches = event.changedTouches;

	for (let i = 0; i < touches.length; i++) {
		ongoingTouches.push(pick("identifier", "pageX", "pageY")(touches[i]));
	}
}

function handleTouchEnd(event) {
	event.preventDefault();

	let touches = event.changedTouches;

	for (let i = 0; i < touches.length; i++) {
		let idx = ongoingTouchIndexById(touches[i].identifier);

		if (idx >= 0) {
			ongoingTouches.splice(idx, 1); // remove it; we're done
		} else {
			console.log("can't figure out which touch to end");
		}
	}
}

function handleTouchCancel(event) {
	console.log("touchcancel.");
	event.preventDefault();

	let touches = event.changedTouches;

	for (let i = 0; i < touches.length; i++) {
		let idx = ongoingTouchIndexById(touches[i].identifier);
		ongoingTouches.splice(idx, 1); // remove it; we're done
	}
}

function handleTouchMove(event) {
	event.preventDefault();
	let touches = event.changedTouches;

	for (let i = 0; i < touches.length; i++) {
		let idx = ongoingTouchIndexById(touches[i].identifier);

		if (idx >= 0) {
			// console.log("continuing touch " + idx);
			console.log(`X: ${ongoingTouches[idx].pageX} Y: ${ongoingTouches[idx].pageY}`);
			ongoingTouches.splice(idx, 1, pick("identifier", "pageX", "pageY")(touches[i])); // swap in the new touch record
		} else {
			console.log("can't figure out which touch to continue");
		}
	}
}

document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchend", handleTouchEnd);
document.addEventListener("touchcancel", handleTouchCancel);
document.addEventListener("touchmove", handleTouchMove);
