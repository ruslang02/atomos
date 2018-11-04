const fs = require("fs").promises;
const path = require("path");
const delete_r = async function(input) {
  let files = await fs.readdir(input);
  for (const file of files) {
    var curPath = path.join(input, file);
    let stats = await fs.lstat(curPath);
    if (stats.isDirectory())
      await delete_r(curPath);
    else
      await fs.unlink(curPath);
  }
  await fs.rmdir(input);
};
setTitle("App info");

async function renderApp() {
	const pkgFile = path.join(osRoot, "apps", window.__currentApp, "package.json");
  root.innerHTML = "";
  let pkg = JSON.parse( await fs.readFile(pkgFile) );
  let header = document.createElement("header");
  header.className = "d-flex align-items-center px-3 pt-2 pb-3";
  header.icon = document.createElement("icon");
	header.icon.className = "mdi mdi-24px rounded-max flex-shrink-0 text-white d-flex p-2 lh-24 my-1 mr-2 mdi-" + pkg.icon;
	header.icon.style.background = pkg.color;
  header.right = document.createElement("div");
  header.right.className = "d-flex flex-column";
  header.appName = document.createElement("div");
  header.version = document.createElement("div");
  header.version.className = "smaller text-muted";
  header.appName.innerText = pkg.productName || pkg.name;
  header.version.innerText = pkg.version;
  header.right.append(header.appName, header.version);
  header.append(header.icon, header.right);
  let actions = document.createElement("div");
  actions.className = "d-flex justify-content-around mb-3";
  actions.uninstall = document.createElement("button");
  actions.uninstall.className = "btn w-100 mx-3 btn-secondary";
  actions.uninstall.innerText = "Uninstall";
  actions.uninstall.onclick = e => {
    shell.showMessageBox({
      type: "question",
      message: `Are you sure you want to uninstall '${header.appName.innerText}'? This action <b>cannot</b> be reversed!`,
      buttons: ["Cancel", "Proceed"],
      cancelId: 0,
      defaultId: 1,
      checkboxLabel: "Yes, uninstall this app"
    }).then(([button, checkbox]) => {
      console.log(button, checkbox)
      if(button === "Proceed" && checkbox) {
				delete_r(path.join(osRoot, "apps", window.__currentApp));
        new Snackbar(`App "${header.appName.innerText}" was deleted`);
        goBack();
      } else new Snackbar('Action canceled.');
    });
  }
  actions.uninstall.disabled = pkg.removable;
  actions.launch = document.createElement("button");
  actions.launch.className = "btn w-100 mx-3 btn-primary";
  actions.launch.innerText = "Launch";
	if (pkg.type === "app") actions.launch.addEventListener("click", e => {
		AppWindow.launch(window.__currentApp);
	}); else actions.launch.disabled = true;
  actions.append(actions.uninstall, actions.launch);
  let notifCheck = newSmallListItem({
		type: "checkbox",
		label: "Allow notifications",
		checked: !pkg.notificationsDisabled,
		click(checked) {
			let newFile = JSON.stringify(Object.assign({}, pkg, {
	      notificationsDisabled: !checked
	    }));
			fs.writeFile(pkgFile, newFile, "utf-8").then(renderApp);
		}
	});

  let size = document.createElement("div");
	size.innerHTML = "<span class='mr-2 font-weight-bolder'>App size</span>" + require("child_process").execSync("du -sh " + path.join(osRoot, "apps", window.__currentApp)).toString().split("	")[0];
  size.className = "px-4 mt-3";
  root.append(header, actions, notifCheck, size);
}
renderApp();
