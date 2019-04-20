let vk, auth, VK, authErrors;

function initVK() { /* Initializes in the end not to hang the UI when loading */
  const VKIO = require("vk-io")
  VK = VKIO.VK;
  authErrors = VKIO.authErrors;
  vk = new VK({
    appId: 6414462,
    language: "en",
    debug: true
  });
  auth = vk.auth;
  win.show();
}
const {
  AppWindow,
  Shell,
  Components: {
    Button,
    Spinner
  }
} = require("@api");

const win = AppWindow.getCurrentWindow();
win.ui.root.classList.remove("bg-semiwhite", "bg-semidark");
win.ui.title.classList.add("d-none");
win.ui.buttons.classList.add("my-1");
win.ui.header.style.background = "rgba(0,0,0,0.2)";
win.ui.root.style.background = `linear-gradient(to bottom, #4a76a8 0%, #4a76a8 300px, var(--${win.options.theme}) 300px)`;

function login() {
  let alert = document.createElement("div");
  alert.className = "border-left-0 border-right-0 border-bottom-0 alert alert-danger text-center m-0 d-none rounded-0";
  alert.style.opacity = 0;
  alert.onanimationend = () => {
    if (alert.style.opacity == 0)
      alert.classList.add("d-none")
  }
  let loginSection = document.createElement("section");
  loginSection.className = "d-flex flex-column align-items-center align-self-center position-relative";
  loginSection.style.top = CSS.px(100);
  loginSection.style.width = CSS.px(350);
  let logo = document.createElement("icon");
  logo.className = "mdi display-1 mdi-vk text-white";
  let loginForm = document.createElement("form");
  loginForm.className = "card rounded shadow border-0 w-100 scrollable-0 bg-" + win.options.theme;
  let loginBody = document.createElement("div");
  loginBody.className = "card-body";
  let email = document.createElement("input");
  email.className = "form-control mb-3" + (win.options.darkMode ? " bg-secondary text-white" : "");
  email.placeholder = "Phone or email".toLocaleString();
  email.required = true;
  let pass = document.createElement("input");
  pass.className = "form-control" + (win.options.darkMode ? " bg-secondary text-white" : "");
  pass.placeholder = "Password".toLocaleString();
  pass.type = "password";
  pass.required = true;
  let submitDiv = document.createElement("div");
  submitDiv.className = "d-flex align-items-center mt-3";
  let openExternal = new Button({
    text: "Open in browser",
    icon: "open-in-app",
    color: "link",
    addClasses: "text-decoration-none px-0"
  });
  openExternal.onclick = () => Shell.openExternal("https://vk.com");
  openExternal.type = "button";
  let submitBtn = new Button({
    text: "Log in",
    color: "#4a76a8",
    addClasses: "ml-auto"
  });
  submitBtn.type = "submit";
  submitBtn.style.minWidth = CSS.px(80);
  console.log(submitBtn);
  submitBtn.addEventListener("click", async function() {
    alert.animate([{
      opacity: 1
    }, {
      opacity: 0
    }], {
      duration: 300,
      fill: "forwards"
    })
    email.disabled = true;
    pass.disabled = true;
    submitBtn.disabled = true;
    console.log(email.value, pass.value);
    vk.setOptions({
      appId: 6414462,
      login: email.value,
      //phone: email.value.includes("@") ? null : email.value,
      password: pass.value
    })
    auth.implicitFlowUser().run()
      .then((response) => {
        console.log('Token:', response.token);
        console.log('Expires:', response.expires);

        console.log('Email:', response.email);
        console.log('User ID:', response.user);
      })
      .catch(e => {
        console.log(e);
        switch (e.code) {
          case authErrors.AUTHORIZATION_FAILED:
            alert.innerHTML = "<b>Unable to log in.</b> Check the data you entered.";
            break;
          case authErrors.INVALID_PHONE_NUMBER:
            alert.innerHTML = "<b>Unable to log in.</b> The phone number you entered is invalid.";
            break;
          case authErrors.PAGE_BLOCKED:
            alert.innerHTML = "<b>Unable to log in.</b> Account is blocked. Contact support team.";
            break;
          case authErrors.FAILED_PASSED_CAPTCHA:
            alert.innerHTML = "<b>Unable to log in.</b> The captcha is incorrect. Try again.";
            break;
          case authErrors.FAILED_PASSED_TWO_FACTOR:
            alert.innerHTML = "<b>Unable to log in.</b> Two-Factor auth is not supported.";
            break;
          default:
            alert.innerHTML = "<b>Unable to log in.</b> " + e.message;
        }
        alert.classList.remove("d-none");
        alert.animate([{
          opacity: 0
        }, {
          opacity: 1
        }], {
          duration: 300,
          fill: "forwards"
        })
      })
      .finally(() => {
        email.disabled = false;
        pass.disabled = false;
        submitBtn.disabled = false;
      })
  })
  submitDiv.append(openExternal, submitBtn);
  loginBody.append(email, pass, submitDiv);
  loginForm.append(loginBody, alert)
  loginSection.append(logo, loginForm);
  win.ui.body.append(loginSection);
}
login();
initVK();
