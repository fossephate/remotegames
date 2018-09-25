
let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io",
	transports: ["websocket"],
});
setInterval(function() {
	socket.emit("join", "audio4");
}, 5000);

// let soundcardSampleRate = null; //Sample rate from the soundcard (is set at mic access)
let soundcardSampleRate = 48000; //Sample rate from the soundcard (is set at mic access)
let mySampleRate = 16000; //Samplerate outgoing audio (common: 8000, 12000, 16000, 24000, 32000, 48000)
let myBitRate = 16; //8,16,32 - outgoing bitrate
let myMinGain = 3 / 100; //min Audiolvl
let chunkSize = 1024*2;// 1024
let node = null;

let urlParams = new URLSearchParams(window.location.search);
let clientOrHost = urlParams.get("host");
let isHost = clientOrHost == "true" ? true : false;

let downSampleWorker;
let upSampleWorker;
if (isHost) {
	downSampleWorker = new Worker("./js/voipWorkerHost.js");
	upSampleWorker = new Worker("./js/voipWorkerHost.js");
} else {
	downSampleWorker = new Worker("./js/voipWorkerClient.js");
	upSampleWorker = new Worker("./js/voipWorkerClient.js");
}

let socketConnected = false; //is true if client is connected
let steamBuffer = {}; //Buffers incomeing audio

let oscillator;

function hasGetUserMedia() {
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

socket.on("connect", function() {
	console.log("socket connected!");
	socketConnected = true;

	socket.on("d", function(data) {
		
		
// 		if (micAccessAllowed) {
			let audioData = onUserCompressedAudio(data["a"], data["sid"], data["s"], data["b"]);
			upSampleWorker.postMessage({
				"inc": true,
				"inDataArrayBuffer": audioData, //Audio data
				"outSampleRate": soundcardSampleRate,
				"outChunkSize": chunkSize,
				"socketId": data["sid"],
				"inSampleRate": data["s"],
				"inBitRate": data["b"],
				"p": data["p"]
			});
// 		}
	});

	socket.on("clients", function(cnt) {
		$("#clients").text(cnt);
	});
});

socket.on("disconnect", function() {
	console.log("socket disconnected!");
	socketConnected = false;
});

downSampleWorker.addEventListener("message", function(e) {
	if (socketConnected) {
		let data = e.data;
		let audioData = onMicCompressedAudio(data[0].buffer, mySampleRate, myBitRate);
// 		let audioData = onMicCompressedAudio([], mySampleRate, myBitRate);
// 		console.log(data[0].buffer);
		socket.emit("d", {
			"a": audioData, //Audio data
			"s": mySampleRate,
			"b": myBitRate,
			"p": data[1]
		});
	}
}, false);

// audio from the server:
upSampleWorker.addEventListener("message", function(e) {
	let data = e.data;
	let clientId = data[0];
// 	let voiceData = data[1];
	let voiceData = onUserDecompressedAudio(data[1], clientId, soundcardSampleRate);
// 	if (typeof(steamBuffer[clientId]) === "undefined") {
// 		steamBuffer[clientId] = [];
// 	}
	if (typeof(steamBuffer["server"]) === "undefined") {
		steamBuffer["server"] = [];
	}
	if (steamBuffer["server"].length > 5) {
		steamBuffer["server"].splice(0, 1); //If to much audio is inc for some reason... remove
	}
	
// 	if (!isHost) {
// 		steamBuffer[clientId].push(voiceData);
// 	}
	steamBuffer["server"].push(voiceData);
}, false);

// Create AudioContext
let context = new window.AudioContext || new window.webkitAudioContext;

if (isHost) {
	
	soundcardSampleRate = context.sampleRate;
	navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
	
	navigator.getUserMedia({
		audio: true
	}, function(stream) {
		
		let liveSource = context.createMediaStreamSource(stream);

		oscillator = context.createOscillator();
		oscillator.type = "sine";
		oscillator.frequency.value = 440; // value in hertz

		// create a ScriptProcessorNode
		if (!context.createScriptProcessor) {
			node = context.createJavaScriptNode(chunkSize, 1, 1);
		} else {
			node = context.createScriptProcessor(chunkSize, 1, 1);
		}

		node.onaudioprocess = function(e) {
			let inData = e.inputBuffer.getChannelData(0);
			let outData = e.outputBuffer.getChannelData(0);

			inData = onMicRawAudio(inData, soundcardSampleRate); //API Function to change audio data 

			downSampleWorker.postMessage({ //Downsample client mic data
				"inc": false, //its audio from the client so false
				"inDataArrayBuffer": inData,
				"inSampleRate": soundcardSampleRate,
				"outSampleRate": mySampleRate,
				"outBitRate": myBitRate,
				"minGain": myMinGain,
				"outChunkSize": chunkSize
			});

			let allSilence = true;
			for (let c in steamBuffer) {
				if (steamBuffer[c].length !== 0) {
					allSilence = false;
					break;
				}
			}
			if (allSilence) {
				for (let i in inData) {
					outData[i] = 0;
				}
			} else {
// 				let div = false; //true if its not the first audio stream
// 				for (let c in steamBuffer) {
// 					if (steamBuffer[c].length != 0) {
// 						for (let i in steamBuffer[c][0]) {
// 							if (div)
// 								outData[i] = (outData[i] + steamBuffer[c][0][i]) / 2; //need to muxing audio
// 							else
// 								outData[i] = steamBuffer[c][0][i];
// 						}
// 						steamBuffer[c].splice(0, 1); //remove the audio after putting it in buffer
// 						div = true;
// 					}
// 				}
				for (let c in steamBuffer) {
// 					if (steamBuffer[c].length != 0) {
						for (let i in steamBuffer[c][0]) {
							outData[i] = steamBuffer[c][0][i];
// 							outData[i] = 0;
						}
						steamBuffer[c].splice(0, 1); //remove the audio after putting it in buffer
// 					}
				}
			}
		}

		//Lowpass
		biquadFilter = context.createBiquadFilter();
		biquadFilter.type = "lowpass";
		biquadFilter.frequency.value = 3000;

		oscillator.connect(biquadFilter);
		//oscillator.start();

		liveSource.connect(biquadFilter);

		//Dynamic Compression
		dynCompressor = context.createDynamicsCompressor();
		dynCompressor.threshold.value = -25;
		dynCompressor.knee.value = 9;
		dynCompressor.ratio.value = 8;
		dynCompressor.reduction.value = -20;
		dynCompressor.attack.value = 0.0;
		dynCompressor.release.value = 0.25;

		biquadFilter.connect(dynCompressor); //biquadFilter infront
		dynCompressor.connect(node);
		
// 		biquadFilter.connect(node);

		node.connect(context.destination);
	}, function(err) {
		console.log(err);
	});
} else {
	
	soundcardSampleRate = context.sampleRate;
		
	let liveSource = context.createBufferSource();

	oscillator = context.createOscillator();
	oscillator.type = "sine";
	oscillator.frequency.value = 440; // value in hertz

	// create a ScriptProcessorNode
	if (!context.createScriptProcessor) {
		node = context.createJavaScriptNode(chunkSize, 1, 1);
	} else {
		node = context.createScriptProcessor(chunkSize, 1, 1);
	}

	node.onaudioprocess = function(e) {
		let inData = e.inputBuffer.getChannelData(0);
		let outData = e.outputBuffer.getChannelData(0);

		inData = onMicRawAudio(inData, soundcardSampleRate); //API Function to change audio data 

// 			let newInData = new Float32Array(1000);

		downSampleWorker.postMessage({ //Downsample client mic data
			"inc": false, //its audio from the client so false
			"inDataArrayBuffer": inData,
			"inSampleRate": soundcardSampleRate,
			"outSampleRate": mySampleRate,
			"outBitRate": myBitRate,
			"minGain": myMinGain,
			"outChunkSize": chunkSize
		});

		let allSilence = true;
		for (let c in steamBuffer) {
			if (steamBuffer[c].length !== 0) {
				allSilence = false;
				break;
			}
		}
		if (allSilence) {
			for (let i in inData) {
				outData[i] = 0;
			}
		} else {
			for (let c in steamBuffer) {
				if (steamBuffer[c].length !== 0) {
					for (let i in steamBuffer[c][0]) {
// 							outData[i] = (outData[i] + steamBuffer[c][0][i]) / 2; //need to muxing audio
						outData[i] = steamBuffer[c][0][i];
					}
					steamBuffer[c].splice(0, 1); //remove the audio after putting it in buffer
				}
			}
		}
	}

	//Lowpass
	biquadFilter = context.createBiquadFilter();
	biquadFilter.type = "lowpass";
	biquadFilter.frequency.value = 3000;

	oscillator.connect(biquadFilter);
	//oscillator.start();

	liveSource.connect(biquadFilter);

	//Dynamic Compression
	dynCompressor = context.createDynamicsCompressor();
	dynCompressor.threshold.value = -25;
	dynCompressor.knee.value = 9;
	dynCompressor.ratio.value = 8;
	dynCompressor.reduction.value = -20;
	dynCompressor.attack.value = 0.0;
	dynCompressor.release.value = 0.25;

	biquadFilter.connect(dynCompressor); //biquadFilter infront
	dynCompressor.connect(node);

// 		biquadFilter.connect(node);

	node.connect(context.destination);
}

/* API FUNCTIONS */

let onMicRawAudio = function(audioData, soundcardSampleRate) { //Data right after mic input
	return audioData;
}

let onMicCompressedAudio = function(audioData, sampleRate, bitRate) { //Mic data after changeing bit / samplerate
	return audioData;
}

let onUserCompressedAudio = function(audioData, userId, sampleRate, bitRate) { //Called when user audiodata coming from the client
	return audioData;
}

let onUserDecompressedAudio = function(audioData, userId, sampleRate) { //Called when user audiodata coming from the client
	return audioData;
}