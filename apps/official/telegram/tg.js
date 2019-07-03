const {
	MTProto
} = require("telegram-mtproto");
const crypto = require('crypto');
const {
	AppWindow,
	Shell,
	Registry
} = require("@api");
const config = {
	// NOTE: if you FORK the project you MUST use your APP ID.
	// Otherwise YOUR APPLICATION WILL BE BLOCKED BY TELEGRAM
	// You can obtain your own APP ID for your application here: https://my.telegram.org
	id: 570760,
	hash: '66584d51b59aae137440acc891600a07'
};
const api = {
	//invokeWithLayer: 0xda9b0d0d,
	layer: 57,
	initConnection: 0x69796de9,
	api_id: config.id
};
const StorageProvider = {
	get(key) {
		return Promise.resolve(Registry.get("telegram." + key));
	},
	set(key, value) {
		Registry.set("telegram." + key, value);
		return Promise.resolve();
	},
	remove(...keys) {
		for (const key of keys)
			Registry.set("telegram." + key, undefined);
		return Promise.resolve();
	},
	clear() {
		Registry.set("telegram", undefined);
		return Promise.resolve();
	}
}
const server = {dcList: [{id: 2, host: "149.154.167.40", port: 443}]};
const telegram = MTProto({
	api, server, app: {
		storage: StorageProvider
	}
});

const win = AppWindow.getCurrentWindow();
win.ui.root.classList.remove("bg-semiwhite");
win.ui.title.classList.add("d-none");
win.ui.buttons.classList.add("my-1");
win.ui.header.style.background = "rgba(0,0,0,0.2)";
win.ui.root.style.background = "linear-gradient(to bottom, #5682a3 0%, #5682a3 300px, rgb(231, 235, 240) 300px)";

function login() {
	let loginPage = document.createElement("div");
	loginPage.className = "d-flex flex-column align-self-center position-relative";
	loginPage.style.top = CSS.px(100);
	loginPage.style.width = CSS.px(350);
	let tgLogo = document.createElement("div");
	tgLogo.icon = document.createElement("i");
	tgLogo.icon.className = "mdi mdi-telegram mr-3 rounded-circle lh-48 text-center";
	tgLogo.icon.style.background = "rgba(0,0,0,0.1)";
	tgLogo.icon.style.width = tgLogo.icon.style.height = CSS.px(48);
	tgLogo.header = document.createElement("h3");
	tgLogo.header.className = "m-0";
	tgLogo.header.innerText = "Telegram";
	tgLogo.className = "d-flex align-items-center my-4 text-white h2 justify-content-center";
	tgLogo.append(tgLogo.icon, tgLogo.header);
	let loginForm = document.createElement("form");
	loginForm.className = "card rounded shadow-sm py-4 px-3 border-0";
	let header = document.createElement("h5");
	header.innerText = "Sign in";
	let lead = document.createElement("p");
	lead.innerText = "Please enter your full mobile number";
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
	submitBtn.addEventListener("click", async function provideCodes() {
		console.log("provide")
		phoneNum.disabled = true;
		submitBtn.disabled = true;
		const {phone_code_hash} = await telegram('auth.sendCode', {
			phone_number: phoneNum.value,
			current_number: false,
			api_id: config.id,
			api_hash: config.hash
		});
		phoneNum.classList.add("font-weight-bold");
		submitBtn.disabled = false;
		lead.incorrect = document.createElement("a");
		lead.incorrect.innerText = "incorrect?";
		lead.incorrect.href = "javascript:true";
		lead.incorrect.onclick = () => {
			loginPage.remove();
			login();
		};
		lead.innerHTML = "";
		lead.append(lead.incorrect);
		lead.incorrect.before("Your phone number (");
		lead.incorrect.after("): ");
		lead.className = "mb-1";
		let codeLead = document.createElement("p");
		codeLead.innerText = "Enter the code we sent you via SMS:";
		codeLead.className = "mt-2 mb-1";
		loginForm.insertBefore(codeLead, submitDiv);
		let codeNum = document.createElement("input");
		codeNum.className = "form-control";
		codeNum.type = "password";
		codeNum.placeholder = "Code";
		codeNum.minLength = 3;
		codeNum.maxLength = 10;
		loginForm.insertBefore(codeNum, submitDiv);
		submitBtn.removeEventListener("click", provideCodes);
		submitBtn.addEventListener("click", async function signIn() {
			const {user} = await telegram('auth.signIn', {
				phone_number: phoneNum.value,
				phone_code_hash,
				phone_code: codeNum.value
			});
			console.log(user);
		});
	});
	submitDiv.append(submitBtn);
	let notice = document.createElement("footer");
	notice.className = "mt-4 text-muted text-center";
	notice.innerHTML = "This is an unofficial Telegram client. By proceeding you are doing everything at your own risk. <br /><br /><a target='_blank' href='https://web.telegram.org'>Open official web Telegram</a>"
	loginForm.append(header, lead, phoneNum, submitDiv);
	loginPage.append(tgLogo, loginForm, notice);
	win.ui.body.append(loginPage);
}

login();
