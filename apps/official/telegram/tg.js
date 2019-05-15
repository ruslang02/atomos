const {
	MTProto
} = require("telegram-mtproto");
const crypto = require('crypto');
const {
	AppWindow
} = require("@api");
const config = {
	// NOTE: if you FORK the project you MUST use your APP ID.
	// Otherwise YOUR APPLICATION WILL BE BLOCKED BY TELEGRAM
	// You can obtain your own APP ID for your application here: https://my.telegram.org
	id: 570760,
	hash: '66584d51b59aae137440acc891600a07'
};
const api = {
	invokeWithLayer: 0xda9b0d0d,
	layer: 57,
	initConnection: 0x69796de9,
	api_id: config.id,
	app_version: '1.0.1',
	lang_code: 'en'
};
const server = {webogram: true, dev: true};
const telegram = MTProto({api, server});

const win = AppWindow.getCurrentWindow();
win.ui.root.classList.remove("bg-semiwhite");
win.ui.title.classList.add("d-none");
win.ui.buttons.classList.add("my-1");
win.ui.header.style.background = "rgba(0,0,0,0.2)";
win.ui.root.style.background = "linear-gradient(to bottom, #5682a3 0%, #5682a3 40%, rgb(231, 235, 240) 40%)";

function login() {
	let loginForm = document.createElement("form");
	loginForm.className = "card rounded shadow align-self-center py-4 px-3 border-0";
	loginForm.style.top = "30%";
	loginForm.style.width = CSS.px(350);
	let header = document.createElement("h5");
	header.innerText = "Sign in";
	let lead = document.createElement("p");
	lead.innerText = "Enter your mobile number to proceed with logging in";
	let phoneNum = document.createElement("input");
	phoneNum.className = "form-control";
	phoneNum.placeholder = "Phone number";
	phoneNum.minLength = 10;
	phoneNum.maxLength = 40;
	let submitDiv = document.createElement("div");
	submitDiv.className = "text-right mt-3";
	let submitBtn = document.createElement("button");
	submitBtn.type = "submit";
	submitBtn.className = "btn btn-primary shadow-sm px-3";
	submitBtn.innerHTML = "Next".toLocaleString() + " <i class='mdi mdi-arrow-right'></i>";
	submitBtn.addEventListener("click", async function () {
		phoneNum.disabled = true;
		submitBtn.disabled = true;
		const {
			hash
		} = await telegram('auth.sendCode', {
			phone_number: phoneNum.value,
			current_number: false,
			api_id: config.id,
			api_hash: config.hash
		});
		console.log(hash);
		phoneNum.classList.add("font-weight-bold");
		submitBtn.disabled = false;
		lead.remove();
		lead.innerText = "Enter the code we have sent to you";
		lead.className = "pt-2";
		loginForm.insertBefore(lead, submitDiv);
		let codeNum = document.createElement("input");
		codeNum.className = "form-control";
		codeNum.type = "password";
		codeNum.placeholder = "Code";
		codeNum.minLength = 3;
		codeNum.maxLength = 10;
		loginForm.insertBefore(codeNum, submitDiv);

	});
	submitDiv.append(submitBtn);
	loginForm.append(header, lead, phoneNum, submitDiv);
	win.ui.body.append(loginForm);
}

login();
