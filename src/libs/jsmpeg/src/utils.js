export function Now() {
	return window.performance ? window.performance.now() / 1000 : Date.now() / 1000;
}

export function CreateVideoElements() {
	var elements = document.querySelectorAll(".jsmpeg");
	for (var i = 0; i < elements.length; i++) {
		new this.VideoElement(elements[i]);
	}
}

export function Fill(array, value) {
	if (array.fill) {
		array.fill(value);
	} else {
		for (var i = 0; i < array.length; i++) {
			array[i] = value;
		}
	}
}

export function Base64ToArrayBuffer(base64) {
	var binary = window.atob(base64);
	var length = binary.length;
	var bytes = new Uint8Array(length);
	for (var i = 0; i < length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes.buffer;
}
