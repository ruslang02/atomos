setTitle("Atom Link");
let main = document.createElement("main");
main.className = "d-flex flex-grow-1 flex-column scrollable-0 w-100 align-items-center justify-content-center text-center px-4"
main.style.width = "350px"
let title = document.createElement("h3");
title.innerText = "Register Atom Account"
let descr = document.createElement("p");
descr.innerText = "Get Cloud Sync, online storage, access to Atom Apps and control your PC using Atom Link app for free."
let shinyRegisterButton = document.createElement("button");
shinyRegisterButton.className = "btn btn-outline-primary shadow mb-1";
shinyRegisterButton.innerText = "Register";
shinyRegisterButton.disabled = true;
let signInButton = document.createElement("button");
signInButton.className = "btn btn-link";
signInButton.disabled = true;
signInButton.innerText = "Existing account";
main.append(title, descr, shinyRegisterButton, signInButton);
root.append(main);
