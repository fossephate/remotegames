(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{493:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(e,n,a):e[n]=t[n]}return e.default=t,e}(n(0)),r=n(97),l=n(19),i=w(n(26)),o=w(n(30)),u=w(n(119)),d=w(n(195)),p=w(n(503)),s=(w(n(504)),w(n(61))),c=w(n(62)),h=(w(n(120)),w(n(70))),f=w(n(118)),m=(w(n(496)),w(n(71)),n(27));function w(t){return t&&t.__esModule?t:{default:t}}const g=n(7),y=["b","a","y","x","l","r","zl","zr","minus","plus","lstick","rstick","up","down","left","right","home"],b=["LX","LY","RX","RY"],x=["LU","LD","LL","LR","RU","RD","RL","RR","a","b","x","y","up","down","left","right","lstick","rstick","l","zl","r","zr","minus","plus","capture","home"];class E extends a.PureComponent{constructor(t){super(t),this.mapAxisTimer=null,this.mapButtonTimer=null,this.mapButton=this.mapButton.bind(this),this.mapAxis=this.mapAxis.bind(this),this.state={waiting:!1}}mapButton(){window.inputHandler.controller.lastChangedButton=null,this.setState({waiting:!0}),this.mapButtonTimer=setInterval(()=>{if(null!=window.inputHandler.controller.lastChangedButton){if(clearInterval(this.mapButtonTimer),"button"==this.props.type){let t=window.inputHandler.controller.lastChangedButton;parseInt(this.props.which);console.log(t),window.inputHandler.controller.settings.map.buttons[t].type="button",window.inputHandler.controller.settings.map.buttons[t].which=y[parseInt(this.props.which)]}this.props.type,window.inputHandler.controller.lastChangedButton=null,this.setState({waiting:!1}),this.props.update()}},200)}mapAxis(){}render(){const{classes:t}=this.props;let e="button"==this.props.type?y:b;if(this.state.waiting)return a.default.createElement(c.default,null,a.default.createElement(h.default,null,`${e[this.props.which]}`," waiting for axis / button input..."));let n="";if("button"==this.props.type)for(let t=0;t<window.inputHandler.controller.settings.map.buttons.length;t++){if(window.inputHandler.controller.settings.map.buttons[t].which==e[this.props.which]){n=t;break}}if("axis"==this.props.type)for(let t=0;t<window.inputHandler.controller.settings.map.axes.length;t++){if(window.inputHandler.controller.settings.map.axes[t].which==e[this.props.which]){n=t;break}}return a.default.createElement(c.default,null,a.default.createElement(h.default,null,`${e[this.props.which]}`),a.default.createElement(h.default,null,n),a.default.createElement(o.default,{variant:"contained",onClick:this.mapButton},"Map To Button"),a.default.createElement(o.default,{variant:"contained",onClick:this.mapAxis},"Map To Axis"))}}class v extends a.PureComponent{constructor(t){super(t),this.mapAxisTimer=null,this.mapButtonTimer=null,this.mapKey=this.mapKey.bind(this),this.state={waiting:!1}}mapKey(){console.log(window.inputHandler),window.inputHandler.keyboard.lastPressedKey=null,this.setState({waiting:!0}),this.mapKeyTimer=setInterval(()=>{null!=window.inputHandler.keyboard.lastPressedKey&&(clearInterval(this.mapKeyTimer),window.inputHandler.keyboard.map2[parseInt(this.props.which)]=window.inputHandler.keyboard.lastPressedKey,window.inputHandler.keyboard.lastPressedKey=null,this.setState({waiting:!1}),this.props.update())},200)}render(){const{classes:t}=this.props;if(this.state.waiting)return a.default.createElement(c.default,null,a.default.createElement(h.default,null,`${x[this.props.which]}`," waiting for keypress..."));let e=window.inputHandler.keyboard.map2[parseInt(this.props.which)];return a.default.createElement(c.default,null,a.default.createElement(h.default,null,`${x[this.props.which]}`),a.default.createElement(h.default,null,e),a.default.createElement(o.default,{variant:"contained",onClick:this.mapKey},"Map To Key"))}}var C=(0,m.compose)(r.withRouter,(0,l.withStyles)(t=>({root:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"95%",maxWidth:"950px",backgroundColor:t.palette.background.paper,boxShadow:t.shadows[5],padding:4*t.spacing.unit,borderRadius:"5px"},center:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},controllerRemapper:{display:"flex",flexDirection:"column",padding:"15px"},keyboardRemapper:{display:"flex",flexDirection:"column",padding:"15px"},list:{maxHeight:"400px",overflowY:"auto"}})))(class extends a.PureComponent{constructor(t){super(t),this.handleChange=this.handleChange.bind(this),this.update=this.update.bind(this),this.handleClose=this.handleClose.bind(this)}handleClose(){this.props.history.push("/")}handleChange(t){console.log(t.target.value),inputHandler.controller.settings.controllerIndex=""+t.target.value,this.setState({})}update(){console.log("re-rendering!!"),this.setState({})}render(){const{classes:t}=this.props;let e=inputHandler.controller.settings.controllerIndex,n=(window.gamepadWrapper.controllers[e],[]);for(let t in window.gamepadWrapper.controllers)n.push(a.default.createElement(u.default,{key:t,value:t},window.gamepadWrapper.controllers[t].id));return 0==n.length&&n.push(a.default.createElement(u.default,{key:0,value:0},"No gamepads detected")),a.default.createElement(f.default,{open:!0,onClose:this.handleClose},a.default.createElement("div",{className:g(t.root,t.center)},a.default.createElement(i.default,{className:t.controllerRemapper,elevation:4},a.default.createElement(h.default,null,"Active Gamepad:"),a.default.createElement(d.default,{value:e,onChange:this.handleChange,input:a.default.createElement(p.default,{labelWidth:0})},n),a.default.createElement(s.default,{className:t.list},a.default.createElement(E,{update:this.update,type:"button",which:"0"}),a.default.createElement(E,{update:this.update,type:"button",which:"1"}),a.default.createElement(E,{update:this.update,type:"button",which:"2"}),a.default.createElement(E,{update:this.update,type:"button",which:"3"}),a.default.createElement(E,{update:this.update,type:"button",which:"4"}),a.default.createElement(E,{update:this.update,type:"button",which:"5"}),a.default.createElement(E,{update:this.update,type:"button",which:"6"}),a.default.createElement(E,{update:this.update,type:"button",which:"7"}),a.default.createElement(E,{update:this.update,type:"button",which:"8"}),a.default.createElement(E,{update:this.update,type:"button",which:"9"}),a.default.createElement(E,{update:this.update,type:"button",which:"10"}),a.default.createElement(E,{update:this.update,type:"button",which:"11"}),a.default.createElement(E,{update:this.update,type:"button",which:"12"}),a.default.createElement(E,{update:this.update,type:"button",which:"13"}),a.default.createElement(E,{update:this.update,type:"button",which:"14"}),a.default.createElement(E,{update:this.update,type:"button",which:"15"}),a.default.createElement(E,{update:this.update,type:"button",which:"16"}),a.default.createElement(E,{update:this.update,type:"axis",which:"0"}),a.default.createElement(E,{update:this.update,type:"axis",which:"1"}),a.default.createElement(E,{update:this.update,type:"axis",which:"2"}),a.default.createElement(E,{update:this.update,type:"axis",which:"3"}))),a.default.createElement(i.default,{className:t.keyboardRemapper,elevation:4},a.default.createElement(h.default,null,"Keyboard Remapper:"),a.default.createElement(s.default,{className:t.list},a.default.createElement(v,{update:this.update,type:"button",which:"0"}),a.default.createElement(v,{update:this.update,type:"button",which:"1"}),a.default.createElement(v,{update:this.update,type:"button",which:"2"}),a.default.createElement(v,{update:this.update,type:"button",which:"3"}),a.default.createElement(v,{update:this.update,type:"button",which:"4"}),a.default.createElement(v,{update:this.update,type:"button",which:"5"}),a.default.createElement(v,{update:this.update,type:"button",which:"6"}),a.default.createElement(v,{update:this.update,type:"button",which:"7"}),a.default.createElement(v,{update:this.update,type:"button",which:"8"}),a.default.createElement(v,{update:this.update,type:"button",which:"9"}),a.default.createElement(v,{update:this.update,type:"button",which:"10"}),a.default.createElement(v,{update:this.update,type:"button",which:"11"}),a.default.createElement(v,{update:this.update,type:"button",which:"12"}),a.default.createElement(v,{update:this.update,type:"button",which:"13"}),a.default.createElement(v,{update:this.update,type:"button",which:"14"}),a.default.createElement(v,{update:this.update,type:"button",which:"15"}),a.default.createElement(v,{update:this.update,type:"button",which:"16"}),a.default.createElement(v,{update:this.update,type:"button",which:"17"}),a.default.createElement(v,{update:this.update,type:"button",which:"18"}),a.default.createElement(v,{update:this.update,type:"button",which:"19"}),a.default.createElement(v,{update:this.update,type:"button",which:"20"}),a.default.createElement(v,{update:this.update,type:"button",which:"21"}),a.default.createElement(v,{update:this.update,type:"button",which:"22"}),a.default.createElement(v,{update:this.update,type:"button",which:"23"}),a.default.createElement(v,{update:this.update,type:"button",which:"24"})))))}});e.default=C,t.exports=e.default},496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};a.get||a.set?Object.defineProperty(e,n,a):e[n]=t[n]}return e.default=t,e}(n(0)),r=(l(n(26)),l(n(70)),n(23));function l(t){return t&&t.__esModule?t:{default:t}}n(497);var i=(0,r.connect)(t=>({authToken:t.userInfo.authToken,connectedAccounts:t.userInfo.connectedAccounts}))(class extends a.PureComponent{constructor(t){super(t)}connectAccountOrLogIn(t){let e="https://twitchplaysnintendoswitch.com/8100/auth/"+t+"/";null!=this.props.authToken&&(e+="?uniqueToken="+this.props.authToken),window.location.href=e}render(){return a.default.createElement("div",{id:"loggedInIndicator"},-1==this.props.connectedAccounts.indexOf("twitch")?a.default.createElement("div",{className:"connectWithButton",onClick:()=>{this.connectAccountOrLogIn("twitch")}},a.default.createElement("span",{id:"connectWithTwitchText"},"Connect with"),a.default.createElement("img",{id:"twitchLogo",src:"/images/Twitch_Purple_RGB.png"})):null,-1==this.props.connectedAccounts.indexOf("youtubeV3Strategy")?a.default.createElement("div",{className:"connectWithButton",onClick:()=>{this.connectAccountOrLogIn("youtube")}},a.default.createElement("span",{id:"connectWithYouTubeText"},"Connect with"),a.default.createElement("img",{id:"ytLogo",src:"/images/yt_logo_rgb_light.png"})):null,-1==this.props.connectedAccounts.indexOf("google")?a.default.createElement("div",{className:"connectWithButton",onClick:()=>{this.connectAccountOrLogIn("google")}},a.default.createElement("span",{id:"connectWithGoogleText"},"Connect with"),a.default.createElement("div",{id:"googleConnectButton",className:"customGPlusSignIn"},a.default.createElement("span",{className:"googleIcon"}),a.default.createElement("span",{className:"googleButtonText"},"Google"))):null,-1==this.props.connectedAccounts.indexOf("discord")?a.default.createElement("div",{className:"connectWithButton",onClick:()=>{this.connectAccountOrLogIn("discord")}},a.default.createElement("span",{id:"connectWithDiscordText"},"Connect with"),a.default.createElement("img",{id:"discordLogo",src:"/images/discord_logo.png"})):null)}});e.default=i,t.exports=e.default},497:function(t,e,n){var a=n(498);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(193)(a,r);a.locals&&(t.exports=a.locals)},498:function(t,e,n){(t.exports=n(192)(!1)).push([t.i,'#loggedInIndicator {\r\n\twidth: 100%;\r\n/* \tborder: 1px solid #888;\r\n\tborder-radius: 5px; */\r\n\ttext-align: center;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\tflex-wrap: wrap;\r\n\tflex-direction: column;\r\n\tflex: 1;\r\n}\r\n\r\n.connectWithContainer {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-evenly;\r\n\t/* width: 48%; */\r\n\tmargin-top: 4px;\r\n\tmargin-bottom: 4px;\r\n}\r\n\r\n.connectWithButton {\r\n\tdisplay: flex;\r\n\talign-self: center;\r\n\tjustify-content: space-evenly;\r\n\tborder: 1px solid #888;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 1px 1px 1px grey;\r\n\ttext-decoration: none !important;\r\n\tcolor: #282828;\r\n\twhite-space: nowrap;\r\n\tmin-height: 40px;\r\n\twidth: 100%;\r\n\tcursor: pointer;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.connectWithButton > * {\r\n\tdisplay: flex;\r\n\talign-self: center;\r\n\tcolor: #282828;\r\n\t/* \tmax-width: 150px; */\r\n\t/* \tpadding: 6px; */\r\n}\r\n\r\n#twitchLogo {\r\n\t/* \twidth: 80px; */\r\n\t/* \tfilter: drop-shadow(3px 3px 2px #333); */\r\n\twidth: 60px;\r\n\tmargin-left: 10px;\r\n\tmargin-right: 10px;\r\n\t/*     width: 50px;\r\nmargin-left: 5px;\r\nmargin-right: 5px; */\r\n\t/* \twidth: 50px; */\r\n}\r\n\r\n#googleLogo {\r\n\twidth: 80px;\r\n}\r\n\r\n#ytLogo {\r\n\twidth: 80px;\r\n}\r\n\r\n#discordLogo {\r\n\twidth: 80px;\r\n}\r\n\r\n/* CONNECT WITH GOOGLE BUTTON */\r\n\r\n#googleConnectButton {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n/* \tbackground: white; */\r\n\tcolor: #444;\r\n\t/* \twidth: 80px; */\r\n\twidth: 75px;\r\n\tmargin-left: 0px;\r\n\tmargin-right: 5px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#googleConnectButton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\nspan.googleLabel {\r\n\tfont-family: serif;\r\n\tfont-weight: normal;\r\n}\r\n\r\nspan.googleIcon {\r\n\tbackground: url(/images/g-transparent.png) transparent 0px 50% no-repeat;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n}\r\n\r\nspan.googleButtonText {\r\n\tdisplay: flex;\r\n\talign-self: center;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\t/* Use the Roboto font that is loaded in the <head> */\r\n\tfont-family: "Roboto", sans-serif;\r\n}\r\n',""])}}]);