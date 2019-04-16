 if (!window.localStorage) {
  Object.defineProperty(window, "localStorage", new (function () {
    var aKeys = [], oStorage = {};
    Object.defineProperty(oStorage, "getItem", {
      value: function (sKey) { return sKey ? this[sKey] : null; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "key", {
      value: function (nKeyId) { return aKeys[nKeyId]; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "setItem", {
      value: function (sKey, sValue) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "length", {
      get: function () { return aKeys.length; },
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "removeItem", {
      value: function (sKey) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    this.get = function () {
      var iThisIndx;
      for (var sKey in oStorage) {
        iThisIndx = aKeys.indexOf(sKey);
        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
        else { aKeys.splice(iThisIndx, 1); }
        delete oStorage[sKey];
      }
      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
        aCouple = aCouples[nIdx].split(/\s*=\s*/);
        if (aCouple.length > 1) {
          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
          aKeys.push(iKey);
        }
      }
      return oStorage;
    };
    this.configurable = false;
    this.enumerable = true;
  })());
}




var lclick = false;
var mclick = false;
var rclick = false;



var space = false;
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;
var keyR = false;
var keyT = false;
var keyO = false;
var keyL = false;
var keyG = false;
var keyU = false;
var keyN = false;
var keyC = false;
var key1 = false;
var key4 = false;
var keySwipe = "";
var keyNum = -1;

var keyleft = false;
var keyright = false;
var keyup = false;
var keydown = false;

var ne = 0;
var keyP = false;
var paused = 0;
var keyPc = 0;
var cg = 1;
var keyGc = 0;

$('#gcanvas').mousedown(function(event) {
    switch (event.which) {
      case 1:
          lclick = true;
          break;
      case 2:
          mclick = true;
          break;
      case 3:
          rclick = true;
          break;
    }
});

$('#gcanvas').mouseup(function(event) {
    switch (event.which) {
      case 1:
          lclick = false;
          break;
      case 2:
          mclick = false;
          break;
      case 3:
          rclick = false;
          break;
    }
});











function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 32: //space
      space = true;
      break;
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
    case 37: //left
      keyleft = true;
      break;
    case 39: //right
      keyright = true;
      break;
    case 38: //up
      keyup = true;
      break;
    case 40: //down
      keydown = true;
      break;
    case 82: //r
      keyR = true;
      break;
    case 84: //t
      keyT = true;
      break;
    case 80: //p
      keyP = true;
      break;
    case 76: //l
      keyL = true;
      break;
    case 79: //o
      keyO = true;
      break;
    case 71: //g
      keyG = true;
      break;
    case 85: //u
      keyU = true;
      break;
    case 78: //n
      keyN = true;
      break;
    case 67: //c
      keyC = true;
      break;
    case 49: //1
      key1 = true;
      break;
    case 52: //4
      key4 = true;
      break;
    /*case (keyCode > 47 && keyCode < 58):
      keyNum = keyCode-48;
      break;*/
  }
  switch (true) {
    case (keyCode > 47 && keyCode < 58):
      keyNum = keyCode-48;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 32: //space
      space = false;
      break;
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
    case 37: //left
      keyleft = false;
      break;
    case 39: //right
      keyright = false;
      break;
    case 38: //up
      keyup = false;
      break;
    case 40: //down
      keydown = false;
      break;
    case 82: //r
      keyR = false;
      break;
    case 84: //t
      keyT = false;
      break;
    case 80: //p
      keyP = false;
      break;
    case 76: //l
      keyL = false;
      break;
    case 79: //o
      keyO = false;
      break;
    case 71: //g
      keyG = false;
      break;
    case 85: //u
      keyU = false;
      break;
    case 78: //n
      keyN = false;
      break;
    case 67: //c
      keyC = false;
      break;
    /*case (keyCode > 47 && keyCode < 58):
      keyNum = -1;
      break;*/
  }
  switch (true) {
    case (keyCode > 47 && keyCode < 58):
      keyNum = keyCode-48;
      break;
  }
}
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

//var animateobj = {};
//animateobj.speed = 1000 / 60;
//var fast = 1000 / 60;
//var slow = 1000 / 15;
//var fast = 16;
//var slow = 66;

var dragpoint = null;

var spd = 1;
var vspd = 0.1;
var aspd = 0.0008;
var psel = 0;
var pselmode = 0;
function checkkeys() {
	if(pselmode > 1) {pselmode = 0;}
	if(pselmode === 0) {
		if (keyD === true) {
			planets[psel].vel.x += vspd;
		}
		if (keyS === true) {
			planets[psel].vel.y += vspd;
		}
		if (keyA === true) {
			planets[psel].vel.x -= vspd;
		}
		if (keyW === true) {
			planets[psel].vel.y-= vspd;
		}
	} else if(pselmode == 1) {
		if (keyD === true) {
			planets[psel].pos.x += spd;
		}
		if (keyS === true) {
			planets[psel].pos.y += spd;
		}
		if (keyA === true) {
			planets[psel].pos.x -= spd;
		}
		if (keyW === true) {
			planets[psel].pos.y -= spd;
		}
	}
	if (keyT === true) {
		if(planets[psel].paused === 0) {
			planets[psel].paused = 1;
			planets[psel].vel.x = 0;
			planets[psel].vel.y = 0;
			planets[psel].acc.x = 0;
			planets[psel].acc.y = 0;
		} else if(planets[psel].paused == 1) {
			planets[psel].paused = 0;
		}
	}
	if (keyR === true) {
		planets[psel].vel.x = 0;
		planets[psel].vel.y = 0;
		planets[psel].acc.x = 0;
		planets[psel].acc.y = 0;
		planets[psel].angular.acc = 0;
		planets[psel].angular.vel = 0;
	}
	if (keyP === true && keyPc === 0) {
	  keyPc = 1;
		if(paused === 1) {
		  paused = 0;
		} else if(paused === 0) {
		  paused = 1;
		}
	} else if(keyP === false && keyPc == 1) {
	  keyPc = 0;
	}
	if(keyO === true && objmode !== 0) {
		objmode = 0;
	}
	if(keyL === true && objmode !== 1) {
		objmode = 1;
	}
	if(keyleft === true) {
	  if(typeof planets[psel].r !== "undefined") {
	    planets[psel].angular.vel = planets[psel].angular.vel + 0.05;
	  } else {
	    planets[psel].angular.vel = planets[psel].angular.vel - 0.005;
	  }
	}
	if(keyright === true) {
	  if(typeof planets[psel].r !== "undefined") {
	    planets[psel].angular.vel = planets[psel].angular.vel - 0.05;
	  } else {
	    planets[psel].angular.vel = planets[psel].angular.vel + 0.005;
	  }
	}
	if (keyG === true && keyGc === 0) {
	  keyGc = 1;
	  if(cg === 1) {
	    cg = 0;
	  } else if(cg === 0) {
	    cg = 1;
	  }
	} else if(keyG === false && keyGc == 1) {
	  keyGc = 0;
	}
  if(key4 === true && pselmode !== "rp") {
    objmode = "rp";
    ne = 4;
  }
  if(keyNum !== -1){
    $("#input").val(keyNum);
    var tne = keyNum;
    if(tne < 3) {
      $("#input").val(3);
    } else if(tne > 9) {
      $("#input").val(9);
    }
    objmode = "rp";
    ne = parseInt($("#input").val());
    $("#gcanvas").focus();
  }
  if(space === true && timerate == 1) {
    timerate = 0.1;
  } else if(space === false && timerate !== 1) {
    //timerate = 1;
  }
}
setInterval(checkkeys, 10);

var canvas = document.getElementById("gcanvas");
var ctx = canvas.getContext("2d");
var background = new Image();
background.src = "http://images2.fanpop.com/images/photos/6900000/Space-Art-Wallpaper-space-6997700-1920-1200.jpg";
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var cs = 0;
var mcx = 0;
var mcy = 0;
var mx = 0;
var my = 0;
var cr = 0;
var paused = 0;
var ew = -1*(window.innerWidth - (window.innerWidth*0.82));
var eh = -20;
var objmode = 1;

var newpol2 = [];

var lsel = -1;
var lseldiv = -1;
var taget = -1;
var tplanets = [];
var cookiedata = [];

var timerate = 1;

var timeframe = 1000 / 60;
var colltype = "circcirc";

var k = 0;
var d = 0;
var theta = 0;
var pax = 0;
var pay = 0;
var pax2 = 0;
var opening = 0;
var originalw = window.innerWidth;
var slidestep = 0;//window.innerWidth*0.000055;
var sfmax = window.innerWidth*0.90;
var sfmin = window.innerWidth*0.82;
var V = SAT.Vector;
var P = SAT.Polygon;
var C = SAT.Circle;
var response = new SAT.Response();

window.planets = [];

P.prototype.polygonp = function(polygon, response){
    return SAT.testPolygonPolygon(this, polygon, response);
};

C.prototype.cctest = function(circle, response){
    return SAT.testCircleCircle(this, circle, response);
};

var pctest = function(polygon, circle, response){
    return SAT.testPolygonCircle(polygon, circle, response);
};

var cptest = function(circle, polygon, response){
    return SAT.testCirclePolygon(circle, polygon, response);
};

P.prototype.draw = function(ctx) {
    var points = this.calcPoints;
    var i = points.length;
    
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    while (i--) ctx.lineTo(points[i].x, points[i].y);
    ctx.closePath();
  	if(this.i !== psel) {
  		ctx.fillStyle = this.color;
  	} else {
  		ctx.fillStyle = "#006666";
  	}
    ctx.fill();
    ctx.restore();
};

C.prototype.draw = function(ctx) {
    var innerRadius = this.radius/10;
    var outerRadius = this.radius+2;
    gradient = ctx.createRadialGradient(this.pos.x, this.pos.y, innerRadius, this.pos.x, this.pos.y, outerRadius);
    gradient.addColorStop(0, 'white');
  	if(this.i!== psel) {
  		gradient.addColorStop(1, this.color);
  	} else {
  		gradient.addColorStop(1, '#006666');
  	}
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
    ctx.fillStyle = gradient;
    ctx.closePath();
    ctx.fill();
    
    var x3 = this.pos.x;
    var y3 = this.pos.y;
    var circleangle = this.angle * Math.PI / 180;
    var x4 = x3 + this.radius * Math.sin(circleangle);
    var y4 = y3 + this.radius * Math.cos(circleangle);
    drawline(x3, y3, x4, y4);
};

P.prototype.drawBounds = function(ctx){
    var points = this.points;
    var x = points[points.length-1].x;
    var y = points[points.length-1].y;
    var min = x > y ? x : y;
    var bounds = {
      x: points[0].x + this.pos.x,
      y: points[0].y + this.pos.y,
      w: points[0].x + min,
      h: points[0].y + min
    };
    
    ctx.strokeStyle = "red";
    ctx.strokeRect(bounds.x, bounds.y, bounds.w, bounds.h);
};




function dragp() {
	var point0 = dragpoint || planets[psel].calcPoints[2];
	if(dragpoint) {
	  point0 = rotateline(planets[psel].pos.x, planets[psel].pos.y, dragpoint.x+planets[psel].pos.x, dragpoint.y+planets[psel].pos.y, planets[psel].angle);
	  drawpoint(point0.x, point0.y);
	  point0.x -= planets[psel].pos.x;
	  point0.y -= planets[psel].pos.y;
	//}
  	var grav = 0; //-0.0025;
  	var frict = 1; //1.5
  	var wfrict = 1; //1.5
  	var wstretch = 0.01*10; //0.1
  	var stretch = 0.0009*1000; //0.009
  	var bandv = new V(mx-planets[psel].pos.x-point0.x, my-planets[psel].pos.y-point0.y);
  	if(Math.sqrt(Math.pow(bandv.x, 2) + Math.pow(bandv.y, 2)) < 200) {
  		//return;
  	}
  	var wbandv = new V(mx-planets[psel].pos.x-point0.x, my-planets[psel].pos.y-point0.y);
  	bandv.x = bandv.x*stretch; bandv.y = bandv.y*stretch;
  	wbandv.x = wbandv.x*wstretch; wbandv.y = wbandv.y*wstretch;
  	//planets[psel].vel.add(bandv);
  	//planets[psel].vel.x = (planets[psel].vel.x + bandv.x - (planets[psel].vel.x*frict)) / /*(Math.sqrt(*/planets[psel].mass/* /10))*/;
  	//planets[psel].vel.y = (planets[psel].vel.y + bandv.y - (planets[psel].vel.y*frict)) / /*(Math.sqrt(*/planets[psel].mass/* /10))*/;
  	//planets[psel].angular.vel = 1;
  	planets[psel].vel.x = planets[psel].vel.x + (bandv.x - (frict*planets[psel].vel.x))/(planets[psel].mass/20);
  	planets[psel].vel.y = planets[psel].vel.y + (bandv.y - (grav*(planets[psel].mass/20)) - (frict*planets[psel].vel.y))/(planets[psel].mass/20);
  	var pmoi = moi(planets[psel].points, planets[psel].mass);
  	planets[psel].temp.angular.vel = planets[psel].angular.vel + (-1*(((point0.x*wbandv.y)-(point0.y*wbandv.x))-(wfrict*planets[psel].angular.vel))/(pmoi*100));
  	//console.log((point0.x*bandv.y)-(point0.y*bandv.x));
  	//console.log(planets[psel].angular.vel);
  	//zig zag
    var szx = planets[psel].pos.x+point0.x;
  	var szy = planets[psel].pos.y+point0.y;
  	var zx = mx;
  	var zy = my;
    var centrePointX = szx;
  	var centrePointY = szy;
  	var angle = Math.atan2(zy-szy, zx-szx);
    var springwidth = 6;
    // draw ten lines
    ctx.lineWidth = 2;
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    ctx.lineTo(szx, szy);
    for (var n = 0; n < 15; n++) {
      var dx = (mx-szx)/15;
      var dy = (my-szy)/15;
      var dx2 = (Math.sin(angle)*springwidth)-(-Math.sin(angle)*springwidth);
      var dy2 = (-Math.cos(angle)*springwidth)-(Math.cos(angle)*springwidth);
      zx = szx+((n+1)*dx);
      zy = szy+((n+1)*dy);
      if (n % 2 === 0) { // if n is even...
        zx = zx+dx2;
        zy = zy+dy2;
      } else { // if n is odd...
        zx = zx-dx2;
        zy = zy-dy2;
      }
      if(n == 14) {zx = mx; zy = my;}
      ctx.lineTo(zx, zy);
    }
    ctx.stroke();
  	ctx.lineWidth = 1;
  	ctx.strokeStyle = "red";
	}
}

function drawpoint(x, y, color) {
  ctx.strokeStyle = color;
  ctx.strokeRect(x-2.5, y-2.5, 5, 5);
}

function drawline(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color || "red";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
/*var r = 5;
var n = 6;
for (i = 0; i < n; i++) {
  console.log("%f %f\n",r * Math.cos(2 * Math.PI * i / n), r * Math.sin(2 * Math.PI * i / n));
}*/


(function draw() {
  if(paused === 0){
  	if(cs == 1 && objmode === 0 || cs == 1 && objmode == "rp") {
  	} else {
  		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  		ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height); //draw image
  	}
  
    ctx.fillStyle = "black";
    if(cg == 1) {
      //calcgrav();
    }
    
    for(var i = 0; i < planets.length; i++) {
      calcvars(i);
      checkcollisions();
      planets[i].draw(ctx);
      if(rclick === true) {
        dragp();
      }
    }
    
  	/*if(space === true && animateobj.speed <= slow) {
  	  $(animateobj).animate({speed: slow}, 1000);
  	} else if(space === false && animateobj.speed == slow) {
  	  $(animateobj).stop(true);
  	  $(animateobj).animate({speed: fast}, 500);
  	}
  	window.setTimeout(function() {
  	  timeframe = animateobj.speed;
  	}, 1000);*/
  }
	setTimeout(draw, timeframe);
}());









//var canvas = document.getElementById("gcanvas");
//var ctx = canvas.getContext("2d");
var background = new Image();
background.src = "http://images2.fanpop.com/images/photos/6900000/Space-Art-Wallpaper-space-6997700-1920-1200.jpg";
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
  ctx.canvas.width = window.innerWidth + ew;
  ctx.canvas.height = window.innerHeight + eh;
}
resizeCanvas();



function getMousePos(evt) {
    var canvas = document.getElementById("gcanvas");
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}
var tpoints = [];
var waitdown = 0;

function lineintersect(p0_x, p0_y, p1_x, p1_y, p2_x, p2_y, p3_x, p3_y) {
    var s1_x, s1_y, s2_x, s2_y;
    s1_x=p1_x-p0_x;
    s1_y=p1_y-p0_y;
    s2_x=p3_x-p2_x;
    s2_y=p3_y-p2_y;
    var s, t;
    s = (-s1_y*(p0_x-p2_x)+s1_x*(p0_y-p2_y))/(-s2_x*s1_y+s1_x*s2_y);
    t = (s2_x*(p0_y-p2_y)-s2_y*(p0_x-p2_x))/(-s2_x*s1_y+s1_x*s2_y);
    if (s >= 0 && s <= 1 && t >= 0 && t <= 1)
    {
        // Collision detected
        return 1;
    }
    return 0; // No collision
}

function drawtpoints() {
	if(objmode == 1 && cs == 1) {
		var i = tpoints.length;
		ctx.save();
		//ctx.translate(this.pos.x, this.pos.y);
		ctx.beginPath();
		ctx.moveTo(tpoints[0].x, tpoints[0].y);
		while (i--) ctx.lineTo(tpoints[i].x, tpoints[i].y);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	}
}
setInterval(drawtpoints, 10);

function select() {
	var closest = 999999;
	var closestplanet = -1;
	for(i = 0; i < planets.length; i++) {
		var d = Math.sqrt((mcx-planets[i].pos.x)*(mcx-planets[i].pos.x) + (mcy-planets[i].pos.y)*(mcy-planets[i].pos.y));
		if(d < closest) {
			closest = d;
			closestplanet = i;
		}
		if(i == planets.length-1) {
			if(psel == closestplanet) {
				pselmode += 1;
			} else {
				pselmode = 0;
				psel = closestplanet;
			}
		}
	}
	//if(planets.length > 0) {
	if(SAT.pointInPolygon(new V(mcx, mcy), planets[psel])) {
		//dragpoint = new V(mcx-planets[psel].pos.x, mcy-planets[psel].pos.y);
		dragpoint = rotateline(0, 0, mcx-planets[psel].pos.x, mcy-planets[psel].pos.y, (-1 * planets[psel].angle));
		//dragpoint.x -= planets[psel].pos.x;
		//dragpoint.y -= planets[psel].pos.y;
	} else {
		//dragpoint = null;
	 }
	//}
  
}

function rotateline(scx, scy, sx, sy, rad) {
  var cos = Math.cos(rad);
  var sin = Math.sin(rad);
  var nx = (cos * (sx - scx)) - (sin * (sy - scy)) + scx;
  var ny = (sin * (sx - scx)) + (cos * (sy - scy)) + scy;
  return new V(nx, ny);
}

$("#gcanvas").mousedown(function(evt) {
	var pos = 0;
	if(objmode === 0) {
		if(cs === 0) {
			cs = 1;
		}
	} else if(objmode == 1) {
	} else if(objmode === "rp") {
	  if(cs === 0) {
			cs = 1;
		}
	}
	pos = getMousePos(evt);
	mcx = pos.x;
	mcy = pos.y;
	mx = pos.x;
	my = pos.y;
	if(rclick === true) {
	  select();
	}
	waitdown = 0;
});

$("#gcanvas").mouseup(function(evt) {
	if(objmode === 0) {
		if(cs == 1) {
			cs = 0;
			createcircle(mcx, mcy, Math.pow(cr, 2), cr);
		}
	} else if(objmode == 1) {
		if(cs === 0 && waitdown === 0) {
			waitdown = 1;
			cs = 1;
			pos = getMousePos(evt);
			mcx = pos.x;
			mcy = pos.y;
			tpoints = [];
			tpoints.push(new V(mcx, mcy));
		} else if(cs == 1 && waitdown === 0) {
			pos = getMousePos(evt);
			mx = pos.x;
			my = pos.y;
			var tlength = tpoints.length;
			if(tlength > 2) {
				var l1x = tpoints[0].x;
				var l1y = tpoints[0].y;
				var l2x = tpoints[1].x;
				var l2y = tpoints[1].y;
				var l3x = tpoints[tlength-1].x;
				var l3y = tpoints[tlength-1].y;
				if(lineintersect(l1x, l1y, l2x, l2y, l3x, l3y, mx, my)) {
					createdrawnpolygon(tpoints);
					tpoints = [];
					cs = 0;
				} else {
					tpoints.push(new V(mx, my));
				}
			} else {
				tpoints.push(new V(mx, my));
			}
		}
	} else if(objmode == "rp") {
	  if(cs == 1) {
	    createdrawnpolygon(newpol2.points, mcx, mcy);
	    cs = 0;
	  }
	}
	// SELECT PLANET
  if(cs == 2) {
		cs = 0;
		//select();
  }
});


$("#gcanvas").mousemove(function(evt) {
	var pos = getMousePos(evt);
	mx = pos.x;
	my = pos.y;
});


$("#gcanvas").on('touchstart', function(e) {
  var evt = e.originalEvent;
  evt.preventDefault();
  if(objmode === 0) {
    if(cs === 0) {
      cs = 1;
    }
  }
  var tx1 = evt.changedTouches[0].clientX;
  var ty1 = evt.changedTouches[0].clientY;
  if(evt.changedTouches.length == 2) {
    /*var tx2 = evt.changedTouches[1].clientX;
    var ty2 = evt.changedTouches[1].clientY;
    mcx = (tx1+tx2)/2;
    mcy = (ty1+ty2)/2;
    mx = (tx1+tx2)/2;
    my = (ty1+ty2)/2;
    rclick = true;*/
  } else {
    mcx = tx1;
    mcy = ty1;
    mx = tx1;
    my = ty1;
    lclick = true;
    rclick = true;
    select();
  }
  waitdown = 0;
});

$("#gcanvas").on('touchend', function(e) {
  var evt = e.originalEvent;
  evt.preventDefault();
	if(objmode === 0) {
		if(cs == 1) {
			cs = 0;
			createcircle(mcx, mcy, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Math.pow(cr, 2), cr);
		}
	} else if(objmode == 1) {
		if(cs === 0 && waitdown === 0) {
			waitdown = 1;
			//cs = 1;
			//pos = getMousePos(/*canvas, */evt);
			mcx = evt.changedTouches[0].clientX;
			mcy = evt.changedTouches[0].clientY;
          
			tpoints = [];
			tpoints.push(new V(mcx, mcy));
		} else if(cs == 1 && waitdown === 0) {
			//pos = getMousePos(/*canvas, */evt);
			mx = evt.changedTouches[0].clientX;
			my = evt.changedTouches[0].clientY;
			var tlength = tpoints.length;
			if(tlength > 2) {
				var l1x = tpoints[0].x;
				var l1y = tpoints[0].y;
				var l2x = tpoints[1].x;
				var l2y = tpoints[1].y;
				var l3x = tpoints[tlength-1].x;
				var l3y = tpoints[tlength-1].y;
				if(lineintersect(l1x, l1y, l2x, l2y, l3x, l3y, mx, my)) {
					createdrawnpolygon(tpoints);
					tpoints = [];
					cs = 0;
				} else {
					tpoints.push(new V(mx, my));
				}
			} else {
				tpoints.push(new V(mx, my));
			}
		}
	}// SELECT PLANET
  if(cs == 2) {
  	cs = 0;
  	//select();
  }
  lclick = false;
  rclick = false;
});



$("#gcanvas").on('touchmove', function(e) {
  var evt = e.originalEvent;
  evt.preventDefault();
  //if(cs == 1) {
    mx = evt.changedTouches[0].clientX;
    my = evt.changedTouches[0].clientY;
  //}
});


$("#gcanvas").on('taphold', function(e) {
	/*var tx2 = evt.changedTouches[1].clientX;
    var ty2 = evt.changedTouches[1].clientY;
    mcx = (tx1+tx2)/2;
    mcy = (ty1+ty2)/2;
    mx = (tx1+tx2)/2;
    my = (ty1+ty2)/2;
    cs = 1;
	lclick = false;
    rclick = true;*/
});


$("#gcanvas").on('contextmenu', function(evt) {
	return false;   // suppress browsers default right click menu
});

/*function getregpol(n, r) {
  var newpol = [];
  for (var i = 0; i < n; i++) {
    var newv = new V(r*Math.cos(2*Math.PI*i/n), r*Math.sin(2*Math.PI*i/n));
    newpol.push(newv);
    //console.log("%f %f\n",r * Math.cos(2 * Math.PI * i / n), r * Math.sin(2 * Math.PI * i / n));
  }
  return newpol;
}*/
//getregpol(10, 10);
  
function updatem() {
  if(objmode === 0) {
    if(lclick === true && cs == 1) {
      cr = Math.sqrt((Math.pow(mx-mcx, 2))+(Math.pow(my-mcy, 2)));
      if(cr < 2) {cr = 2;}
      
      //ctx.clearRect(0, 0, window.innerWidth + ew, window.innerHeight + eh); //clear screen
      //ctx.drawImage(background,0,0, window.innerWidth + ew, window.innerHeight + eh); //draw image
      var innerRadius = cr/10;
      var outerRadius = cr+5;
      gradient = ctx.createRadialGradient(mcx, mcy, innerRadius, mcx, mcy, outerRadius);
      gradient.addColorStop(0, 'white');
      gradient.addColorStop(1, 'blue');
      ctx.beginPath();
      ctx.arc(mcx, mcy, cr, 0, 2*Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
    if(rclick === true && cs == 1) {
      cs = 2;
    }
  } else if(objmode == 1) {
  } else if(objmode == "rp") {
    if(lclick === true && cs == 1) {
      ctx.clearRect(0, 0, window.innerWidth + ew, window.innerHeight + eh); //clear screen
      ctx.drawImage(background,0,0, window.innerWidth + ew, window.innerHeight + eh); //draw image
      cr = Math.sqrt((Math.pow(mx-mcx, 2))+(Math.pow(my-mcy, 2)));
      if(cr < 2) {cr = 2;}
      var newpol = [];
      for (var i = 0; i < ne; i++) {
        newpol.push(new V(cr*Math.cos(2*Math.PI*i/ne), cr*Math.sin(2*Math.PI*i/ne)));
      }
      
      newpol = new P(new V(mcx, mcy), newpol);
      newpol.setAngle(Math.atan2(my-mcy, mx-mcx));
      newpol.color='blue';
      newpol.draw(ctx);
      newpol2 = newpol;
    }
    /*if(rclick === true && cs === 0) {
      cs = 2;
    }*/
  }
  if(rclick === true) {
    cs = 2;
  }
}
setInterval(updatem, 10);

function getpcenter(pts) {
  var twicearea=0,
  x=0, y=0,
  nPts = pts.length,
  p1, p2, f;
  for ( var i=0, j=nPts-1 ; i<nPts ; j=i++) {
    p1 = pts[i]; p2 = pts[j];
    f = p1.x*p2.y - p2.x*p1.y;
    twicearea += f;          
    x += ( p1.x + p2.x ) * f;
    y += ( p1.y + p2.y ) * f;
  }
  f = twicearea * 3;
  return { x:x/f, y:y/f };
}

function polygonarea(points) {
  var numpoints = points.length;
  area = 0;         // Accumulates area in the loop
  j = numpoints-1;  // The last vertex is the 'previous' one to the first
  for (i=0; i<numpoints; i++)
    { area = area +  (points[j].x+points[i].x) * (points[j].y-points[i].y); 
      j = i;  //j is previous vertex to i
    }
  return area/2;
}

function createdrawnpolygon(vertices, cx, cy) {
  tpoints = [];
  cs = 0;
  var pcenter = 0;
  var rotation = 0;
  var i = vertices.length;
  if(typeof cx === "undefined" && typeof cy === "undefined") {
    pcenter = getpcenter(vertices);
    for(i = 0; i < vertices.length; i++) {
  	  vertices[i].x = vertices[i].x - pcenter.x;
  	  vertices[i].y = vertices[i].y - pcenter.y;
    }
  } else {
    pcenter = new V(mcx, mcy);
    rotation = Math.atan2(my-mcy, mx-mcx);
  }
  /*var newpolygon = new P(new V(), []);
  for(i = 0; i < vertices.length; i++) {
    newpolygon.points.push(vertices[i]);
    
  }
  console.log(newpolygon);*/
  
  var evalstring = "var newpolygon = new P(new V(), [";
  for(i = 0; i < vertices.length; i++) {
    var vertx = vertices[i].x;
    var verty = vertices[i].y;
    var end = "]);";
    if(i !== vertices.length-1) {
      evalstring = evalstring.concat("new V(" + (vertx) + "," + (verty) + "),");
    } else {
      evalstring = evalstring.concat("new V(" + (vertx) + "," + (verty) + ")" + end);
    }
  }
  eval(evalstring);
  newpolygon.pos.x = pcenter.x;
  newpolygon.pos.y = pcenter.y;
  newpolygon.vel = new V(0,0);
  newpolygon.acc = new V(0,0);
  newpolygon.angle = rotation;
  newpolygon.angular = {};
  newpolygon.angular.vel = 0;
  newpolygon.angular.acc = 0;
  newpolygon.angular.pos = new V(0, 0);
  
  newpolygon.i = planets.length;
	
  newpolygon.temp = {};
  newpolygon.temp.pos = new V(0, 0);
  newpolygon.temp.vel = new V(0, 0);
  newpolygon.temp.acc = new V(0, 0);
  newpolygon.temp.angular = {};
  newpolygon.temp.angular.vel = 0;
  newpolygon.temp.angular.acc = 0;
  newpolygon.temp.angular.pos = new V(0, 0);
  newpolygon.angular.pos = 0;
  
  newpolygon.mass = Math.abs(polygonarea(newpolygon.points));
  newpolygon.color='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
  planets.push(newpolygon);
}


function createcircle(x, y, mass, radius) {
  var newcircle = new C(new V(x, y), radius);
  newcircle.pos.x = x;
  newcircle.pos.y = y;
  newcircle.vel = new V(0, 0);
  newcircle.acc = new V(0, 0);
  newcircle.angle = 0;
  newcircle.angular = {};
  newcircle.angular.vel = 0;
  newcircle.angular.acc = 0;
	
  newcircle.mass = mass;
  newcircle.radius = radius;
  
  newcircle.i = planets.length;
  
  newcircle.temp = {};
  newcircle.temp.pos = new V(0, 0);
  newcircle.temp.vel = new V(0, 0);
  newcircle.temp.acc = new V(0, 0);
  newcircle.temp.angular = {};
  newcircle.temp.angular.vel = 0;
  newcircle.temp.angular.acc = 0;
  newcircle.angular.pos = 0;
  
  newcircle.color='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
  planets.push(newcircle);
}


function calcgrav() {
  for(var i = 0; i < planets.length; i++) {
    var ii = i;
    var pax2 = 0;
    var pay2 = 0;
    var coll = 0;
    var borderradius = 1;
    for(var j = 0; j < planets.length; j++) {
      if (j == ii || paused == 1) {
        continue;
      }
      
      k = 80/(planets[ii].mass/(planets[j].mass/20));
      
      d = Math.sqrt(Math.pow((planets[ii].pos.x-planets[j].pos.x), 2) + Math.pow( (planets[ii].pos.y-planets[j].pos.y), 2) );
      
      theta = Math.atan(Math.abs(planets[ii].pos.y-planets[j].pos.y ) / Math.abs( planets[ii].pos.x-planets[j].pos.x ) );
      pax = ((-1* Math.cos(theta)) * k) * (Math.abs( planets[ii].pos.x-planets[j].pos.x ) / ((planets[ii].pos.x-planets[j].pos.x) * Math.pow(d, 2)));
      pay = ((-1* Math.sin(theta)) * k) * (Math.abs( planets[ii].pos.y-planets[j].pos.y ) / ((planets[ii].pos.y-planets[j].pos.y) * Math.pow(d, 2)));
      
      pax2 = pax2 + pax;
      pay2 = pay2 + pay;
      
      
      if(j == planets.length-1 || ii == planets.length-1 && j == planets.length-2) {
        planets[ii].temp.acc.x = pax2;
        planets[ii].temp.acc.y = pay2;
      }
      
    }
  }
}

function moi(vertices, mass) {
	var numerator = 0,
		denominator = 0,
		v = vertices,
		cross,
		j2;
	// find the polygon's moment of inertia, using second moment of area
	// http://www.physicsforums.com/showthread.php?t=25293
	for (var n = 0; n < v.length; n++) {
		j2 = (n + 1) % v.length;
		//cross = Math.abs(Vector.cross(v[j2], v[n]));
		cross = Math.abs( (v[j2].x * v[n].y)-(v[j2].y * v[n].x));
		//numerator += cross * (Vector.dot(v[j2], v[j2]) + Vector.dot(v[j2], v[n]) + Vector.dot(v[n], v[n]));
		numerator += cross * ((v[j2].x * v[j2].y)-(v[j2].y * v[j2].x)) + ((v[j2].x * v[n].y)-(v[j2].y * v[n].x)) + ((v[n].x * v[n].y)-(v[n].y * v[n].x));
		denominator += cross;
	}
	return (mass / 6) * (numerator / denominator);
}

/*function collision(ii, j) {
  borderradius = 1;
  var threshold = 5;
  
  var m1 = planets[ii].mass;
  var m2 = planets[j].mass;

  var v1ix = planets[ii].vel.x;
  var v2ix = planets[j].vel.x;
  var v1iy = planets[ii].vel.y;
  var v2iy = planets[j].vel.y;


  var rhoix = (m1*v1ix) + (m2*v2ix);
  var keix = (m1*(v1ix*v1ix)) + (m2*(v2ix*v2ix));

  var rhoiy = (m1*v1iy) + (m2*v2iy);
  var keiy = (m1*(v1iy*v1iy)) + (m2*(v2iy*v2iy));
  
  var xsol = (planets[ii].vel.x * (planets[ii].mass - planets[j].mass) + (2 * planets[j].mass * planets[j].vel.x)) / (planets[ii].mass + planets[j].mass);
  var ysol = (planets[ii].vel.y * (planets[ii].mass - planets[j].mass) + (2 * planets[j].mass * planets[j].vel.y)) / (planets[ii].mass + planets[j].mass);
  
  //planets[ii].temp.pos.x = planets[ii].pos.x;
  //planets[ii].temp.pos.y = planets[ii].pos.y;
  
  */
  /*if(planets[ii].temp.pos.x < planets[j].pos.x && xsol > 0
  || planets[ii].temp.pos.x > planets[j].pos.x && xsol < 0) {
    xsol = xsol*-1;
  }
  
  if(planets[ii].temp.pos.y < planets[j].pos.y && ysol > 0
  || planets[ii].temp.pos.y > planets[j].pos.y && ysol < 0) {
    ysol = ysol*-1;
  }*/
  /*planets[ii].temp.vel.x = xsol*0.9;
  planets[ii].temp.vel.y = ysol*0.9;
  //calcvars();
}*/




var vns = [];
function checkcollisions() {
  for(var i = 0; i < planets.length; i++) {
    for(var j = 0; j < planets.length; j++) {
      if(i == j) {
        continue;
      }
      response.clear();
      var collided = 0;
      // Check if object parent is a Circle or Polygon
      if(typeof planets[i].r == 'undefined') {
        // Object parent is a Polygon
        if(typeof planets[j].r == 'undefined') {
          // Object is a Polygon aswell as parent
          collided = planets[j].polygonp(planets[i], response);
          colltype = "polpol";
        } else {
          // Object is a Circle, parent is a Polygon
          collided = cptest(planets[j], planets[i], response);
          colltype = "polcirc";
        }
      } else {
        // Object Parent is a Circle
        if(typeof planets[j].r == 'undefined') {
          // Object is a Polygon, parent is a Circle
          collided = pctest(planets[j], planets[i], response);
          colltype = "circpol";
        } else {
          // Object is a Circle, aswell as parent
          collided = planets[j].cctest(planets[i], response);
          colltype = "circcirc";
        }
      }
      if(collided) {
        /*if(cg == 1) {
          planets[j].pos.x -= response.overlapV.x;
          planets[j].pos.y -= response.overlapV.y;
          planets[j].temp.pos.x.x -= response.overlapV.x;
          planets[j].temp.pos.y.y -= response.overlapV.y;
          collision(i, j);
        }*/
        if(colltype == "polcirc" || colltype == "circcirc") {
          var p1x = planets[i].pos.x;
          var p1y = planets[i].pos.y;
          var p2x = planets[j].pos.x;
          var p2y = planets[j].pos.y;
          var p3x = p1x - p2x;
          var p3y = p1y - p2y;
          var p3xy = Math.sqrt(Math.pow(p3x, 2) + Math.pow(p3y, 2));
          var res1x = p3x/p3xy;
          var res1y = p3y/p3xy;
          var plen = planets[i].radius+3;
          var res2x = res1x*plen;
          var res2y = res1y*plen;
          var xmul = 0;
          var ymul = 0;
          if(planets[i].pos.x < planets[i].pos.x) {
            xmul = -1;
          } else {
            xmul = -1;
          }
          if(planets[i].pos.y < planets[i].pos.y) {
            ymul = 1;
          } else {
            ymul = -1;
          }
          var res3x = p1x+res2x*xmul;
          var res3y = p1y+res2y*ymul;
          drawpoint(planets[j].pos.x-response.overlapV.x, planets[j].pos.y-response.overlapV.y, "black");
          drawpoint(res3x, res3y, "red");
          drawline(p1x, p1y, p2x, p2y);
        } else if(colltype == "polpol") {
          // both are polygons; find collision point
          var collp, isinpol, itmp, jtmp, colli, collj;
          var cpiv1, cpjv1, k2;
          for(var k = 0; k < planets[i].calcPoints.length; k++){
            collp = planets[i].calcPoints[k].clone();
            collp.add(planets[i].pos);
            isinpol = SAT.pointInPolygon(collp, planets[j]);
            if(isinpol) {
              k2 = k;
              break;
            } else {
              k2 = -1;
            }
          }
          if(k2 == -1) {
            continue;
          }
          drawpoint(collp.x, collp.y, "red");
          drawpoint(planets[j].pos.x, planets[j].pos.y);
          //drawline(planets[j].pos.x, planets[j].pos.y, collp.x, collp.y);
          //drawline(planets[i].pos.x, planets[i].pos.y, collp.x, collp.y);
          colli = planets[i].calcPoints[k2].clone();
          collj = planets[i].calcPoints[k2].clone().add(planets[i].pos).sub(planets[j].pos);
          drawline(planets[j].pos.x, planets[j].pos.y, planets[j].pos.x+collj.x, planets[j].pos.y+collj.y);
          drawline(planets[i].pos.x, planets[i].pos.y, planets[i].pos.x+colli.x, planets[i].pos.y+colli.y);
          // polygon j is being impacted
          itmp = colli.clone();
          //itmp.x = colli.x * planets[i].angular.vel; itmp.y = colli.y * -1*planets[i].angular.vel;
          itmp = new V(-1*planets[i].angular.vel*colli.y, planets[i].angular.vel*colli.x);
          cpiv1 = planets[i].vel.clone().add(itmp);
          
          jtmp = collj.clone();
          //jtmp.x = collj.x * planets[j].angular.vel; jtmp.y = collj.y * -1*planets[j].angular.vel;
          jtmp = new V(-1*planets[j].angular.vel*collj.y, planets[j].angular.vel*collj.x);
          cpjv1 = planets[j].vel.clone().add(jtmp);
          
          var vn = 0;
          for(var tst = 0; tst < planets[j].calcPoints.length; tst++) {
            var tempx = planets[j].pos.x;
            var tempy = planets[j].pos.y;
            var l1x = planets[i].pos.x; var l1y = planets[i].pos.y;
            var l2x = collp.x; var l2y = collp.y;
            var l3x = planets[j].calcPoints[tst].x+tempx; var l3y = planets[j].calcPoints[tst].y+tempy;
            var l4x = 0; var l4y = 0;
            if(tst == planets[j].calcPoints.length-1) {
              l4x = planets[j].calcPoints[0].x+tempx; l4y = planets[j].calcPoints[0].y+tempy;
            } else {
              l4x = planets[j].calcPoints[tst+1].x+tempx; l4y = planets[j].calcPoints[tst+1].y+tempy;
            }
            //drawline(l1x, l1y, l2x, l2y);
            //drawline(l3x, l3y, l4x, l4y);
            if(lineintersect(l1x, l1y, l2x, l2y, l3x, l3y, l4x, l4y)) {
            	drawline(l3x, l3y, l4x, l4y);
            	vn = new V(l4x-l3x, l4y-l3y);
            	//drawline(planets[i].pos.x, planets[i].pos.y, vn.x+planets[i].pos.x, vn.y+planets[i].pos.y);
            	vn = vn.perp(); vn = vn.normalize();
            	break;
            }
            if(tst == planets[j].calcPoints.length-1) {
              
            }
          }
          if(typeof vn.clone == "undefined") {
            continue;
          }
          var vn2 = vn;
          vn = vn.clone();
          
          var cpijv1 = cpiv1.sub(cpjv1); //relative velocity
          
          var e = 1;
          var tmpcpijv1 = cpijv1.clone();
          tmpcpijv1 = -1*(1+e)*(tmpcpijv1.dot(vn));
          
          var ji = moi(planets[j].calcPoints, planets[j].mass);
          var ii = moi(planets[i].calcPoints, planets[i].mass);
          
          var jc2 = (1/planets[j].mass)+(1/planets[i].mass);
          
          //var jc3 = colli.clone();
          //jc3 = jc3.cross(vn); jc3 = (jc3.dot(jc3))/ii;
          var jc3 = ((Math.pow(colli.clone().cross(vn).x, 2) + Math.pow(colli.clone().cross(vn).y, 2))/ii);
          
          //var jc4 = collj.clone();
          //jc4 = jc4.cross(vn); jc4 = (jc4.dot(jc4))/ji;
          var jc4 = ((Math.pow(collj.clone().cross(vn).x, 2) + Math.pow(collj.clone().cross(vn).y, 2))/ji);
          
          var jc = tmpcpijv1/(jc2+jc3+jc4);
          
          //tmpcpijv1 = tmpcpijv1/jc5;
          //var jc = tmpcpijv1/jc5;// jc5
          
          jc *= 2;
          
          //new velocities
          
          var tmpvn = vn.clone();
          tmpvn.x *= jc;
          tmpvn.y *= jc;
          
          planets[i].temp.vel.x = planets[i].vel.x - (tmpvn.x / (planets[i].mass/20))*2;
          planets[i].temp.vel.y = planets[i].vel.y - (tmpvn.y / (planets[i].mass/20))*2;
          
          //tmpvn = vn2.clone();
          //tmpvn.x *= jc;
          //tmpvn.y *= jc;
          planets[j].temp.vel.x = planets[j].vel.x + (tmpvn.x / (planets[j].mass/20))*2;
          planets[j].temp.vel.y = planets[j].vel.y + (tmpvn.y / (planets[j].mass/20))*2;
          
          
          //tmpvn = vn2.clone();
          //tmpvn.x *= jc;
          //tmpvn.y *= jc;
          var cpiv2 = cpiv1.clone();
          cpiv2 = planets[i].angular.vel + ( ((colli.x*tmpvn.y)-(colli.y*tmpvn.x))/ii );
          planets[i].temp.angular.vel = ((cpiv2)/15);
          
          //tmpvn = vn2.clone();
          //tmpvn.x *= jc;
          //tmpvn.y *= jc;
          var cpjv2 = cpjv1.clone();
          cpjv2 = planets[j].angular.vel - ( ((collj.x*tmpvn.y)-(collj.y*tmpvn.x))/ji );
          planets[j].temp.angular.vel = ((cpjv2)/15);
          
          
          //var irt = (itmp.x*planets[i].vel.y)-(itmp.y*planets[i].vel.x);
          //planets[i].temp.angular.vel = planets[i].angular.vel + irt/20;
          //console.log(irt);
          //var jrt = (jtmp.x*planets[j].vel.y)-(jtmp.y*planets[j].vel.x);
          //planets[j].temp.angular.vel = planets[j].angular.vel + jrt/20;
          //console.log(jrt);
          //drawline(planets[i].pos.x, planets[i].pos.y, 10*itmp.x+planets[i].pos.x, 10*itmp.y+planets[i].pos.y);
          //drawline(planets[j].pos.x, planets[j].pos.y, 10*itmp.x+planets[j].pos.x, 10*itmp.y+planets[j].pos.y);
          
          
          
          //break;
        //}
      //}
        }
        if(cg == 1) {
          //if(planets[j].i !== 0)
            planets[i].temp.pos.x = planets[i].pos.x + response.overlapV.x*1;
            planets[i].temp.pos.y = planets[i].pos.y + response.overlapV.y*1;
            
            //var audio = new Audio('blip.wav');
            //audio.play();
            
            //planets[i].pos.x += response.overlapV.x*1;
            //planets[i].pos.y += response.overlapV.y*1;
          //}
        } //else if(planets[j].i === 0) {
          //planets[i].pos.x += response.overlapV.x*1.2;
          //planets[i].pos.y += response.overlapV.y*1.2;
        //}
      }
    }
  }
}


function calcvars(i) {
  //if(paused === 0) {
    /*if(planets[i].pos.x < planets[i].radius || planets[i].pos.x + planets[i].radius > window.innerWidth + ew) {
      planets[i].vel.x =planets[i].vel.x * -0.9;
      planets[i].pos.x = planets[i].pos.x + (planets[i].vel.x*2);
    }
    if(planets[i].pos.y < planets[i].radius || planets[i].pos.y + planets[i].radius > window.innerHeight + eh) {
      planets[i].vel.y = (planets[i].vel.y * -0.9);
      planets[i].vel.y = planets[i].pos.y + (planets[i].vel.y*2);
    }*/
    if(planets[i].temp.pos.x !== 0) {
    	planets[i].pos.x = planets[i].temp.pos.x;
    	planets[i].temp.pos.x = 0;
    }
    if(planets[i].temp.pos.y !== 0) {
    	planets[i].pos.y = planets[i].temp.pos.y;
    	planets[i].temp.pos.y = 0;
    }
    if(planets[i].temp.vel.x !== 0) {
    	planets[i].vel.x = planets[i].temp.vel.x;
    	planets[i].temp.vel.x = 0;
    }
    if(planets[i].temp.vel.y !== 0) {
    	planets[i].vel.y = planets[i].temp.vel.y;
    	planets[i].temp.vel.y = 0;
    }
    if(planets[i].temp.acc.x !== 0) {
    	planets[i].acc.x = planets[i].temp.acc.x;
    	planets[i].temp.acc.x = 0;
    }
    if(planets[i].temp.acc.y !== 0) {
    	planets[i].acc.y = planets[i].temp.acc.y;
    	planets[i].temp.acc.y = 0;
    }
    if(planets[i].temp.angular.vel !== 0) {
      planets[i].angular.vel = planets[i].temp.angular.vel;
      planets[i].temp.angular.vel = 0;
    }
    if(planets[i].temp.angular.acc !== 0) {
      planets[i].angular.acc = planets[i].temp.angular.acc;
      planets[i].temp.angular.acc = 0;
    }
    
    planets[i].vel.x = planets[i].vel.x + planets[i].acc.x*timerate;
    planets[i].vel.y = planets[i].vel.y + planets[i].acc.y*timerate;
    
    planets[i].pos.x = planets[i].pos.x + planets[i].vel.x*timerate;
    planets[i].pos.y = planets[i].pos.y + planets[i].vel.y*timerate;
  
    planets[i].angular.vel = planets[i].angular.vel + planets[i].angular.acc;
    
    if(typeof planets[i].r == 'undefined') {
      planets[i].setAngle(planets[i].angle+planets[i].angular.vel*timerate);
    } else {
      planets[i].angle = planets[i].angle + planets[i].angular.vel*timerate;
    }
  //}
}










// LOAD/SAVE STUFF

function listsaves() {
  $("#sl").html("");
  $("#sl").append('<button id="save">save</button>');
  $("#sl").append('<button id="load">load</button>');
  $("#sl").append('<button id="remove">remove</button>');
  $("#sl").append('<button id="desel">deselect</button>');
  $("#sl").append('<button id="sclear">clear screen</button>');
  $("#sl").append('<button id="key">keyboard</button>');
  $("#sl").append('<input type="textbox" id="input">');
  $("#sl").append('<input id="slider" type="range" min="0" max="2" value="1" step="0.01">&nbsp;<span id="sliderval">rate of time: 1</span>');
  if(localStorage.getItem("planets") !== null) {
    cookiedata = $.parseJSON(localStorage.getItem("planets"));
	  for(var c = 0; c < cookiedata.length; c++) {
      var $div = $('<div/>', {
          id: c,
          class: 'saves',
          html: 'save'+c
      });
	    $("#sl").append($div);
	  }
  }


  $(".saves").click(function(event) {
    if(lsel !== -1) {
      lseldiv.removeClass("savesel");
    }
    
    target = $(event.target);
    lsel = target.attr('id');
    lseldiv = target;
    
    //console.log(target);
    target.addClass("savesel");
  });
  
  $("#save").click(function() {
    if(lsel == -1) {
    	if(localStorage.getItem("planets") === null) {
    		tplanets = [];
    		tplanets.push(planets);
    		localStorage.setItem("planets", JSON.stringify(tplanets)); //set cookie
    	} else if(localStorage.getItem("planets") !== null) {
    		tplanets = $.parseJSON(localStorage.getItem("planets"));
    		tplanets.push(planets);
    		localStorage.setItem("planets", JSON.stringify(tplanets)); //set cookie
    	}
    	listsaves();
    } else {
    	if(localStorage.getItem("planets") === null) {
    		tplanets = [];
    		tplanets.push(planets);
    		localStorage.setItem("planets", JSON.stringify(tplanets)); //set cookie
    	} else if(localStorage.getItem("planets") !== null) {
    		tplanets = $.parseJSON(localStorage.getItem("planets"));
    		tplanets.splice(lsel, 1, planets);
    		localStorage.setItem("planets", JSON.stringify(tplanets)); //set cookie
    	}
    	listsaves();
    }
  	// get cookie: var planets = $.parseJSON(localStorage.getItem("planets"));
  	// http://webcache.googleusercontent.com/search?q=cache:3jLbPU_yYdwJ:stackoverflow.com/questions/9040110/how-do-i-store-an-array-of-objects-in-a-cookie-with-jquery-cookie+&cd=3&hl=en&ct=clnk&gl=us
  });
  
  
  $("#load").click(function() {
    if(lsel !== -1) {
      var intlsel = Number(lsel);
      var array = $.parseJSON(localStorage.getItem("planets"));
      planets = array[intlsel];
    }
  });
  
  $("#remove").click(function() {
    if(typeof localStorage.getItem("planets") !== 'undefined' && lsel !== -1) {
  		var intlsel = Number(lsel);
  		tplanets = $.parseJSON(localStorage.getItem("planets"));
  		tplanets.splice(intlsel, 1);
  		localStorage.setItem("planets", JSON.stringify(tplanets)); //set cookie
  	}
  	listsaves();
  });
  
  $("#desel").click(function() {
    if(target !== -1) {
      target.removeClass("savesel");
      lsel = -1;
    }
  });
  
  $("#sclear").click(function() {
    planets = [];
  });
  
  $("#key").click(function() {
    $("#input").focus();
  });
  
  $("#slider").mousemove(function(num) {
    $("#sliderval").html("rate of time: " + $(this).val());
    timerate = Number($(this).val());
  });

}
listsaves();




$("#open").click(function() {
  var canvas = document.getElementById("gcanvas");
  var ctx = canvas.getContext("2d");
  if(opening === 0) {
	  opening = 1;
  } else {
	  opening = 0;
  }
	
  $("#sl").animate({
    width: 'toggle'
  }, {
	duration: 150,
    step: function() {
      var canvas = document.getElementById("gcanvas");
      var ctx = canvas.getContext("2d");
      if(opening == 1 && ctx.canvas.width < sfmax) {
        ctx.canvas.width += slidestep;
      } else if(opening === 0 && ctx.canvas.width > sfmin) {
        ctx.canvas.width -= slidestep;
      }
    },
    complete: function() {
	    if(ctx.canvas.width > sfmin) {ctx.canvas.width = sfmin;} else if(ctx.canvas.width < sfmax) {ctx.canvas.width = sfmax;}
	    if(ew > -1*(window.innerWidth - (window.innerWidth*0.82))) {ew = -1*(window.innerWidth - (window.innerWidth*0.82));}
	    else if(ew < -1*(window.innerWidth - (window.innerWidth*0.9))) {ew = -1*(window.innerWidth - (window.innerWidth*0.9));}
    }
  });
});


// set default
/*var newp = [
  new V(0, 0),
  new V(0, 10),
  new V(ctx.canvas.width, 10),
  new V(ctx.canvas.width, 0)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="red";
planets[planets.length-1].mass = 10000000000000000;
planets[planets.length-1].pos.y = ctx.canvas.height-5;

var newp = [
  new V(0, 0),
  new V(0, 10),
  new V(ctx.canvas.width, 10),
  new V(ctx.canvas.width, 0)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="red";
planets[planets.length-1].mass = 10000000000000000;
planets[planets.length-1].pos.y = -5;


var newp = [
  new V(0, 0),
  new V(0, ctx.canvas.height),
  new V(10, ctx.canvas.height),
  new V(10, 0)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="red";
planets[planets.length-1].mass = 10000000000000000;
planets[planets.length-1].pos.x = ctx.canvas.width-5;
planets[planets.length-1].pos.y = ctx.canvas.height/2;


var newp = [
  new V(0, 0),
  new V(0, ctx.canvas.height),
  new V(10, ctx.canvas.height),
  new V(10, 0)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="red";
planets[planets.length-1].mass = 10000000000000000;
planets[planets.length-1].pos.x = 5;
planets[planets.length-1].pos.y = ctx.canvas.height/2;*/



//others

var newp = [
  new V(-25*3, 25*3),
  new V(0, -25*3),
  new V(25*3, 25*3)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="green";
planets[planets.length-1].pos.x = 100;
planets[planets.length-1].pos.y = 300;

var newp = [
  new V(-25*3, 25*3),
  new V(0, -25*3),
  new V(25*3, 25*3)
];
createdrawnpolygon(newp);
planets[planets.length-1].color="blue";
planets[planets.length-1].pos.x = 400;
planets[planets.length-1].pos.y = 300;







