export class WebGLRenderer {
	constructor(options) {
		this.canvas = options.canvas || document.createElement("canvas");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.enabled = true;

		this.hasTextureData = {};

		this.contextCreateOptions = {
			preserveDrawingBuffer: !!options.preserveDrawingBuffer,
			alpha: false,
			depth: false,
			stencil: false,
			antialias: false,
			premultipliedAlpha: false,
		};

		this.gl =
			this.canvas.getContext("webgl", this.contextCreateOptions) ||
			this.canvas.getContext("experimental-webgl", this.contextCreateOptions);

		if (!this.gl) {
			throw new Error("Failed to get WebGL Context");
		}

		if (this.gl.isContextLost()) {
			throw new Error("WebGL Context is lost!");
		}

		this.SHADER = {
			FRAGMENT_YCRCB_TO_RGBA: [
				"precision mediump float;",
				"uniform sampler2D textureY;",
				"uniform sampler2D textureCb;",
				"uniform sampler2D textureCr;",
				"varying vec2 texCoord;",

				"mat4 rec601 = mat4(",
				"1.16438,  0.00000,  1.59603, -0.87079,",
				"1.16438, -0.39176, -0.81297,  0.52959,",
				"1.16438,  2.01723,  0.00000, -1.08139,",
				"0, 0, 0, 1",
				");",

				"void main() {",
				"float y = texture2D(textureY, texCoord).r;",
				"float cb = texture2D(textureCb, texCoord).r;",
				"float cr = texture2D(textureCr, texCoord).r;",

				"gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;",
				"}",
			].join("\n"),

			FRAGMENT_LOADING: [
				"precision mediump float;",
				"uniform float progress;",
				"varying vec2 texCoord;",

				"void main() {",
				"float c = ceil(progress-(1.0-texCoord.y));",
				"gl_FragColor = vec4(c,c,c,1);",
				"}",
			].join("\n"),

			VERTEX_IDENTITY: [
				"attribute vec2 vertex;",
				"varying vec2 texCoord;",

				"void main() {",
				"texCoord = vertex;",
				"gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);",
				"}",
			].join("\n"),
		};

		let gl = this.gl;
		let vertexAttr = null;

		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

		// Init buffers
		this.vertexBuffer = gl.createBuffer();
		let vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, vertexCoords, gl.STATIC_DRAW);

		// Setup the main YCrCbToRGBA shader
		this.program = this.createProgram(
			this.SHADER.VERTEX_IDENTITY,
			this.SHADER.FRAGMENT_YCRCB_TO_RGBA,
		);
		vertexAttr = gl.getAttribLocation(this.program, "vertex");
		gl.enableVertexAttribArray(vertexAttr);
		gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);

		this.textureY = this.createTexture(0, "textureY");
		this.textureCb = this.createTexture(1, "textureCb");
		this.textureCr = this.createTexture(2, "textureCr");

		// Setup the loading animation shader
		this.loadingProgram = this.createProgram(
			this.SHADER.VERTEX_IDENTITY,
			this.SHADER.FRAGMENT_LOADING,
		);
		vertexAttr = gl.getAttribLocation(this.loadingProgram, "vertex");
		gl.enableVertexAttribArray(vertexAttr);
		gl.vertexAttribPointer(vertexAttr, 2, gl.FLOAT, false, 0, 0);

		this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
	}

	destroy = () => {
		let gl = this.gl;

		this.deleteTexture(gl.TEXTURE0, this.textureY);
		this.deleteTexture(gl.TEXTURE1, this.textureCb);
		this.deleteTexture(gl.TEXTURE2, this.textureCr);

		gl.useProgram(null);
		gl.deleteProgram(this.program);
		gl.deleteProgram(this.loadingProgram);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
		gl.deleteBuffer(this.vertexBuffer);

		// breaks:
		// gl.getExtension("WEBGL_lose_context").loseContext();
		// window.lose_context = gl.getExtension("WEBGL_lose_context");
		// window.lose_context.loseContext();

		// console.log(lose_context.restoreContext);

		// lose_context.restoreContext();

		// this.canvas.remove(); // don't do this because I need it // fosse

		// let newEl = document.createElement("canvas");
		// newEl.id = this.canvas.id;
		// newEl.classList = this.canvas.classList;
		// newEl.width = this.canvas.width;
		// newEl.height = this.canvas.height;
		// newEl.style = this.canvas.style;
		// this.canvas.parentNode.replaceChild(newEl, this.canvas);
		// // window.newEl = newEl;
		// this.canvas.remove();
	};

	resize = (width, height) => {
		this.width = width | 0;
		this.height = height | 0;

		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.gl.useProgram(this.program);
		let codedWidth = ((this.width + 15) >> 4) << 4;
		this.gl.viewport(0, 0, codedWidth, this.height);
	};

	createTexture = (index, name) => {
		let gl = this.gl;
		let texture = gl.createTexture();

		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.uniform1i(gl.getUniformLocation(this.program, name), index);

		return texture;
	};

	createProgram = (vsh, fsh) => {
		let gl = this.gl;
		let program = gl.createProgram();

		gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
		gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
		gl.linkProgram(program);
		gl.useProgram(program);

		return program;
	};

	compileShader = (type, source) => {
		let gl = this.gl;
		let shader = gl.createShader(type);

		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new Error(gl.getShaderInfoLog(shader));
		}

		return shader;
	};

	allowsClampedTextureData = () => {
		let gl = this.gl;
		let texture = gl.createTexture();

		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(
			gl.TEXTURE_2D,
			0,
			gl.LUMINANCE,
			1,
			1,
			0,
			gl.LUMINANCE,
			gl.UNSIGNED_BYTE,
			new Uint8ClampedArray([0]),
		);
		return gl.getError() === 0;
	};

	renderProgress = (progress) => {
		let gl = this.gl;

		gl.useProgram(this.loadingProgram);

		let loc = gl.getUniformLocation(this.loadingProgram, "progress");
		gl.uniform1f(loc, progress);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	};

	render = (y, cb, cr, isClampedArray) => {
		if (!this.enabled) {
			return;
		}

		let gl = this.gl;
		let w = ((this.width + 15) >> 4) << 4,
			h = this.height,
			w2 = w >> 1,
			h2 = h >> 1;

		// In some browsers WebGL doesn't like Uint8ClampedArrays (this is a bug
		// and should be fixed soon-ish), so we have to create a Uint8Array view
		// for each plane.
		if (isClampedArray && this.shouldCreateUnclampedViews) {
			(y = new Uint8Array(y.buffer)),
				(cb = new Uint8Array(cb.buffer)),
				(cr = new Uint8Array(cr.buffer));
		}

		gl.useProgram(this.program);

		this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
		this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
		this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	};

	updateTexture = (unit, texture, w, h, data) => {
		let gl = this.gl;
		gl.activeTexture(unit);
		gl.bindTexture(gl.TEXTURE_2D, texture);

		if (this.hasTextureData[unit]) {
			gl.texSubImage2D(
				gl.TEXTURE_2D,
				0,
				0,
				0,
				w,
				h,
				gl.LUMINANCE,
				gl.UNSIGNED_BYTE,
				data,
			);
		} else {
			this.hasTextureData[unit] = true;
			gl.texImage2D(
				gl.TEXTURE_2D,
				0,
				gl.LUMINANCE,
				w,
				h,
				0,
				gl.LUMINANCE,
				gl.UNSIGNED_BYTE,
				data,
			);
		}
	};

	deleteTexture = (unit, texture) => {
		let gl = this.gl;
		gl.activeTexture(unit);
		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.deleteTexture(texture);
	};

	static IsSupported = () => {
		try {
			if (!window.WebGLRenderingContext) {
				return false;
			}

			let canvas = document.createElement("canvas");
			return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
		} catch (err) {
			return false;
		}
	};
}
