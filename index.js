var io = require('socket.io-client');
var tbh = {
	forceNew: true,
	transportOptions: {
		polling: {
			extraHeaders: {
				"Accept": "*/*",
				"Accept-Encoding": "identity",
				"Accept-Language": "*",
				"Cache-Control": "no-cache",
				"Connection": "keep-alive",
				"Cookie": "",
				"Host": "www.windows93.net",
				"Origin": "http://www.windows93.net",
				"Pragma": "no-cache",
				"Referer": 'http://www.windows93.net/trollbox/index.php',
				"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36"
			}
		}
	}
}
var address = "https://www.windows93.net:8088";
var he = require('he');
var started = false;
exports.prefix = "-";
var commands = {};
var onmessagecommands = [];
var onuserleftcommands = [];
var onuserjoinedcommands = [];
var currentname = "";
var currentcolor = "";
exports.socket = io(address, tbh);

function connect(name, color, prefix) {
    currentcolor = color;
    currentname = name;
    prefix = prefix;
    exports.socket.emit("user joined", currentname, currentcolor, "", "")
    exports.socket.on("message", function(data) {
      if (typeof data.msg !== "string") {
        console.error("Invalid message received:", data);
        return; // Exit early if data.msg is undefined or not a string
    }  
      exports.username = data.nick
        exports.userhome = data.home
        exports.msg = data.msg
        if (exports.msg.startsWith(prefix)) {
            const args = exports.msg.slice(prefix.length).trim().split(" ");
            const command = args.shift(); // Extract command name
    
            if (commands[command]) {
                commands[command](...args); // Execute the command with arguments
            } else {
                exports.socket.send(`Unknown command: '${command}'`);
            }
        }
    })
    
}

exports.connect = function(name, color, prefix) {
  connect(name, color, prefix)
}

exports.updateprefix = function(newprefix){
  prefix = newprefix; // doenst work
}

exports.setcommand = function(command,func){
  commands[command] = func
}
exports.updatecolor = function(color) {
  exports.socket.emit("user joined", currentname, color, "", "")
}
exports.updatename = function(name) {
  exports.socket.emit("user joined", name, currentcolor, "", "")
}
exports.updatewhole = function(name, color) {
  exports.socket.emit("user joined", name, color, "", "")
}
