const win = AppWindow.fromId(WINDOW_ID);
const path = require("path");
const fs = require("fs").promises;
const {exec} = require("child_process");
let commands = document.createElement("kbd");
commands.className = "d-block flex-grow-1 bg-transparent rounded-0 border-0 scrollable-y h-25 us";
let cwd = document.createElement("span");
cwd.innerText = app.getPath("home") || win.arguments.cwd;
cwd.className = "text-white ";
let command = document.createElement("input");
command.type = "text";
command.className = "bg-transparent border-0 text-white flex-grow-1 d-flex";
command.style.outline = 0;
command.addEventListener("keydown", e => {
	if (e.keyCode === 13) execute();
});
command.autofocus = true;
let commandArrow = document.createElement("div");
commandArrow.innerText = "$";
commandArrow.className = "mr-1";
let commandContainer = document.createElement("div");
commandContainer.className = "bg-dark text-white border-top border-secondary flex-shrink-0 d-flex pl-2 py-1 align-items-center"
commandContainer.append(cwd, commandArrow, command);
let dataset = document.createElement("datalist");
dataset.id = shell.uniqueId();
command.setAttribute("list", dataset.id);
root.append(commands, commandContainer, dataset);
win.show();
if (win.arguments.file) {
	if (await fs.lstat(win.arguments.file).isDirectory())
		cwd.innerText = win.arguments.file;
	else {
		command.innerText = win.arguments.file;
		execute();
	}
} else
	addMessage(`Welcome to AtomOS Terminal!
	This is not a real TTY so we recommend using an external terminal emulator or switching to TTY using Ctrl-Alt-F1.`);
setImmediate(async function() {
	for(const item of await fs.readdir(path.join(osRoot, "apps"))) {
		try {
			await fs.access(path.join(osRoot, "apps", item, "package.json"));
			dataset.append(new Option(item));
		} catch(e) {}
	}
});
function addMessage(text) {
	let message = document.createElement("div");
	if (text.length > 1000) {
		let expander = document.createElement("button");
		expander.innerText = "Expand";
		expander.className = "btn btn-white smaller border-0 text-white d-block w-100 text-left py-1 px-2 my-1";
		expander.addEventListener("click", e => {
			expander.innerText = message.text.classList.toggle("d-none") ? "Expand" : "Collapse";
		});
		message.append(expander);
	}
	message.text = document.createElement("div");
	message.text.innerHTML = text.replace(/\n/gi, "<br>");
	message.append(message.text);
	commands.append(message);
	commands.scrollTop = commands.scrollHeight;
	return text;
}

async function execute() {
	let divider = document.createElement("hr");
	divider.className = "border-secondary my-2 mx-0"
	commands.append(divider);
	addMessage(cwd.innerText + commandArrow.innerText + " " + command.value);
	let spaceCheck = command.value.includes(" ") ? command.value.indexOf(" ") : Infinity;
	let oldValue = command.value;
	if (command.value.startsWith("cd")) {
		let dir = oldValue.split(" ")[1];
		let newDir = path.resolve(cwd.innerText, dir.trim());
		try {
			await fs.access(newDir);
			cwd.innerText = newDir;
		} catch(e) {
			addMessage("<div class='text-danger'>No such file or directory.</div>");
		}
	} else if (command.value.startsWith("clear")) {
		commands.innerHTML = "";
	} else if (command.value.startsWith("sudo")) {
		shell.execAsRoot(command.value.substring(command.value.indexOf(" ")).trim(), {
			cwd: cwd.innerText,
			title: "Authentication is needed to run command as administrator",
		}).then(res => {
			if (res.stderr.trim()) addMessage("<div class='text-danger'>" + res.stderr + "</div>");
						addMessage(res.stdout);
			if (win.arguments.quiet) win.close();
		});
	} else if(command.value.trim()) {
		let noErr;
		let proc = exec(command.value, {
			cwd: cwd.innerText,
			shell: "/bin/bash"
		}).on('error', err => {
			addMessage("<div class='text-danger'>" + err + "</div>");
		}).on('exit', (code, signal) => {
			console.log(code, oldValue.substring(0, spaceCheck).trim());
			if(code === 127 && shell.isAppInstalled(oldValue.substring(0, spaceCheck).trim())) {
				noErr = true;
				console.log(noErr);
				AppWindow.launch(oldValue.substring(0, spaceCheck).trim(), oldValue.includes(" ") ? oldValue.substring(spaceCheck).trim() : {}, {
					parent: win
				}).then(win => {
					win.on("message", addMessage);
				});
			} else if(code === 127) addMessage(`<div class='text-danger'>Command '${oldValue}' cannot be executed.</div>`);
			if (win.arguments.quiet) win.close();
		});
		let stdout = "";
		let stderr = "";
		proc.stderr.on('data', chunk => {
			setTimeout(() => {
				stderr += chunk;
				noErr = false;
			}, 10);
		}).on('end', function() {
			if(!noErr) addMessage("<div class='text-danger'>" + stderr + "</div>");
					noErr = true;
			stderr = "";
		});
		proc.stdout.on('data', chunk => {
			stdout += chunk;
		}).on('end', function() {
			addMessage(stdout)
			stdout = "";
		});
	}
		command.value = "";
}
let css = document.createElement("style");
css.innerHTML = `
window[id='${win.id}'] input::-webkit-calendar-picker-indicator {
	display: none;
}`;
root.append(css);
