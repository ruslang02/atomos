const Shell = require("@api/Shell");
const AppWindow = require("@api/WindowManager");
const win = AppWindow.getCurrentWindow();
const path = require("path");
const fs = require("fs").promises;
const {exec} = require("child_process");
let commands = document.createElement("kbd");
commands.className = "d-block flex-grow-1 bg-transparent rounded-0 border-0 scrollable-y h-25 us";
let cwd = document.createElement("span");
cwd.innerText = win.arguments.cwd || process.env.HOME;
cwd.className = "text-white ";
let command = document.createElement("input");
command.type = "text";
command.className = "bg-transparent border-0 text-white flex-grow-1 d-flex";
command.style.outline = "none";
command.addEventListener("keydown", e => {
	if (e.keyCode === 13)
		execute().catch(e => {
			if (Shell.isDebug) console.error(e);
		});
});
command.autofocus = true;
let commandArrow = document.createElement("div");
commandArrow.innerText = "$";
commandArrow.className = "mr-1";
let commandContainer = document.createElement("div");
commandContainer.className = "bg-dark text-white m-2 very-rounded flex-shrink-0 d-flex pl-2 py-1 align-items-center";
commandContainer.append(cwd, commandArrow, command);
let dataset = document.createElement("datalist");
dataset.id = Shell.uniqueId();
//command.setAttribute("list", dataset.id);
win.ui.body.append(commands, commandContainer, dataset);

if (win.arguments.file) {
	fs.lstat(win.arguments.file).then(stat => {
		if (stat.isDirectory()) {
			cwd.innerText = win.arguments.file;
		} else {
			command.innerText = win.arguments.file;
			execute();
		}
	});
} else
	addMessage(`Welcome to AtomOS Terminal!
	This is not a real Bash so we recommend using an external terminal emulator or switching to TTY using Ctrl-Alt-F1.`);

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
	divider.className = "border-secondary my-2 mx-0";
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
		} catch (e) {
			addMessage("<div class='text-danger'>No such file or directory.</div>");
		}
	} else if (command.value.startsWith("clear")) {
		commands.innerHTML = "";
	} else if (command.value.startsWith("sudo")) {
		Shell.execAsRoot(command.value.substring(command.value.indexOf(" ")).trim(), {
			cwd: cwd.innerText,
			title: "Authentication is needed to run command as administrator",
		}).then(res => {
			if (res.stderr.trim()) addMessage("<div class='text-danger'>" + res.stderr + "</div>");
			addMessage(res.stdout);
			if (win.arguments.quiet) win.close();
		});
	} else if (command.value.trim()) {
		let noErr;
		let proc = exec(command.value, {
			cwd: cwd.innerText,
			Shell: "/bin/bash"
		}).on('error', err => {
			addMessage("<div class='text-danger'>" + err + "</div>");
		}).on('exit', (code, signal) => {
			if (code === 127 && Shell.isAppInstalled(oldValue.substring(0, spaceCheck).trim())) {
				noErr = true;
				AppWindow.launch(oldValue.substring(0, spaceCheck).trim(), oldValue.includes(" ") ? oldValue.substring(spaceCheck).trim() : {}, {
					parent: win
				}).then(win => {
					win.on("message", addMessage);
				});
			} else if (code === 127) addMessage(`<div class='text-danger'>Command '${oldValue}' cannot be executed.</div>`);
			if (win.arguments.quiet) win.close();
		});
		let stdout = "";
		let stderr = "";
		proc.stderr.on('data', chunk => {
			setTimeout(() => {
				stderr += chunk;
				noErr = false;
			}, 10);
		}).on('end', function () {
			if (!noErr) addMessage("<div class='text-danger'>" + stderr + "</div>");
			noErr = true;
			stderr = "";
		});
		proc.stdout.on('data', chunk => {
			stdout += chunk;
		}).on('end', function () {
			addMessage(stdout);
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
win.ui.body.append(css);
