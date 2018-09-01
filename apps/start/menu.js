const fs = require("fs-extra");
const path = require("path");
const appPath = path.join(osRoot, "apps");
const registry = new Registry('start');
let root;
let active;
let allApps = [];
let allActions = [];

if (!Object.getOwnPropertyNames(registry.get()).length) registry.set({
  height: 400,
  width: 400
});

function render() {
  Elements.StartMenu = document.createElement("startmenu");
  root = Elements.StartMenu;
  Elements.StartMenu.className = "position-fixed d-flex flex-column m-2 hide fly up";

  Elements.StartMenu.toggle = function() {
    let condition = Elements.StartMenu.classList.contains("show");
    if (condition)
      Elements.StartMenu.close();
    else Elements.StartMenu.open();
    return !condition;
  }
  Elements.StartMenu.open = function() {
    //document.body.click()
    Elements.StartMenu.classList.replace("hide", "show")
    Elements.StartMenu.Search.Input.value = "";
    home();
    Elements.BarItems["start"].childNodes[0].style.transform = "rotate(180deg)";
    setTimeout(e => Elements.StartMenu.Search.Input.focus(), 50);
  }
  Elements.StartMenu.close = function() {
    Elements.StartMenu.classList.replace("show", "hide")
    Elements.BarItems["start"].childNodes[0].style.transform = "rotate(0deg)";
  }

  Elements.StartMenu.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  window.addEventListener("click", function() {
    Elements.StartMenu.close();
  });

  function updatePosition() {
    Elements.StartMenu.style.height = registry.get().height + "px";
    Elements.StartMenu.style.width = registry.get().width + "px";
    Elements.StartMenu.style.bottom = Elements.Bar.offsetHeight + "px";
    Elements.StartMenu.style.left = root.clientLeft + "px";
  }

  Elements.StartMenu.style.zIndex = 990;
  body.appendChild(Elements.StartMenu);

  updatePosition();
  new ResizeObserver(updatePosition).observe(Elements.Bar);

  renderSearch();
  renderApps();
  renderSearchSection();
  renderNotFound();
  renderActions();

  return Elements.StartMenu;
}
async function renderApps() {
  root.Apps = document.createElement("apps");
  active = root.Apps;
  root.Apps.className = "justify-content-around align-items-center flex-grow-1 flex-wrap py-2 px-1 flex-grow-1 card shadow flex-row scrollable";
  root.appendChild(root.Apps);
  let dirs = await fs.readdir(appPath);
  for (const item of dirs) {
    let appEntry = document.createElement("button");
    let appIcon = new Image(48, 48);
    let appName = document.createElement("div");
    appName.className = "text-truncate text-center";
    appIcon.className = "align-self-center";
    appEntry.className = "btn btn-white py-1 px-2 btn-sm flex-shrink-0 d-flex flex-column align-items-stretch justify-content-center";
    appEntry.style.width = '23%';
    appEntry.addEventListener("click", e => {
      AppWindow.launch(item);
      Elements.BarItems.start.click();
    });
    try {
      let config = await fs.readJson(path.join(appPath, item, "package.json"));
      if (config.hidden || config.type !== "app")
        continue;
      appIcon.src = config.icon.replace("$SYSTEM_ROOT", osRoot).replace("$APP_ROOT", path.join(osRoot, "apps", item));
      allApps.push({
        name: config.productName || config.name,
        icon: appIcon.src,
        item: item
      });
      appName.innerText = config.productName || config.name || "App";
      appEntry.append(appIcon, appName);
      root.Apps.append(appEntry);
    } catch (e) {
      console.error(item, "not loaded, because configuration file is missing.");
    }
  }
}
async function renderActions() {
  for (const item of await fs.readdir(path.join(osRoot, "apps"))) {
    try {
      let package = await fs.readJson(path.join(osRoot, "apps", item, "package.json"));
      for (const action of package.actions)
        allActions.push(Object.assign(action, {
          app: item,
          appName: package.productName || package.name
        }));
    } catch (error) {}
  }
}

function renderSearchSection() {
  root.SearchSection = document.createElement("section");
  root.SearchSection.className = "flex-nowrap p-2 flex-grow-1 card shadow scrollable";
  root.SearchSection.style.display = "none";
  root.appendChild(root.SearchSection);
}

function renderSearch() {
  root.Search = document.createElement("search")
  root.Search.className = "input-group card flex-row shadow mb-2 flex-shrink-0";

  let igp = document.createElement("label");
  igp.className = "input-group-prepend m-0 d-flex align-items-center";
  igp.htmlFor = "__searchInput"

  let igt = document.createElement("div");
  igt.className = "mdi mdi-magnify mdi-18px input-group-text material-icons text-muted border-white bg-white pr-1 border-0 py-0";

  root.Search.Input = document.createElement("input");
  root.Search.Input.placeholder = "Search apps or execute any action...";
  root.Search.Input.className = "form-control border-white py-2 px-1 shadow-none";
  root.Search.Input.id = "__searchInput";

  igp.appendChild(igt);
  root.Search.append(igp, root.Search.Input);
  root.Search.Input.addEventListener("input", search)
  root.Search.Input.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      let prev = active.querySelector("button.active");
      if (!prev)
        return;
      if (!prev.previousSibling)
        return;
      prev.classList.remove("active");
      prev.additional.classList.remove("show");
      prev.additional.classList.remove("show");
      prev.previousSibling.classList.add("active");
      prev.previousSibling.scrollIntoView(false);
      prev.previousSibling.additional.classList.add("show")
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      let prev = active.querySelector("button.active");
      if (!prev)
        return;
      if (!prev.nextSibling)
        return;
      prev.classList.remove("active");
      prev.additional.classList.remove("show");
      prev.nextSibling.classList.add("active");
      prev.nextSibling.scrollIntoView(false);
      prev.nextSibling.additional.classList.add("show")
    }
    if (e.key === "Escape") {
      Elements.StartMenu.close();
    }
    if (e.key === "Enter" && active.querySelector(".active"))
      active.querySelector(".active").click();
  });
  root.appendChild(root.Search);
}

function renderNotFound() {

  root.NotFound = document.createElement("section");
  root.NotFound.className = "card shadow justify-content-center align-items-center flex-grow-1";
  root.NotFound.style.display = "none";
  let icon = new Image(64, 64);
  icon.src = iconDB.retrieveIconURL("Nothing Found");
  let title = document.createElement("h5");
  title.className = "font-weight-normal";
  title.innerText = '"" was not found';
  let uselessinfo = document.createElement("p");
  uselessinfo.className = "font-weight-normal";
  uselessinfo.innerText = "There is no such application installed, but there may be one online.";
  uselessinfo.style.width = '80%';
  let searchBtn = document.createElement("button");
  searchBtn.className = "btn btn-outline-success";
  searchBtn.innerText = "Search in Store";
  searchBtn.onclick = e => AppWindow.launch("market", {
    q: root.Search.lastChild.value
  });
  root.NotFound.append(icon, title, uselessinfo, searchBtn);
  root.appendChild(root.NotFound)
}

function home() {
  showSection(root.Apps);
  root.Search.lastChild.value = "";
}

function search() {
  let q = root.Search.lastChild.value.toLowerCase().trim();
  root.NotFound.querySelector("h5").innerText = `"${q}" was not found`;
  let res = [];
  console.log(q)
  if (q == "") {
    showSection(root.Apps);
    return;
  }
  root.SearchSection.innerHTML = "";
  allActions.forEach((item, i) => {
    if (item.name.trim().toLowerCase().includes(q))
      res.push(item);
  });
  allApps.forEach((app, i) => {
    if (app.name.trim().toLowerCase().includes(q))
      res.push(app);
  });
  if (!res.length)
    showSection(root.NotFound);
  else {
    let items = [];
    res.forEach((item, i) => {
      let elem = document.createElement("button");
      elem.icon = (item.main ? document.createElement("icon") : new Image(24, 24));
      elem.header = document.createElement("div");
      elem.additional = document.createElement("div");
      elem.additional.innerText = (item.main ? item.appName : "Open");
      elem.additional.className = "text-muted flex-shrink-0 ml-auto fade mr-1";
      elem.header.className = "text-truncate text-left ml-2";
      elem.className = "btn btn-white p-1 btn-sm flex-shrink-0 w-100 d-flex align-items-center";
      elem.addEventListener("click", e => {
        if (item.main) {
          fs.readFile(path.join(osRoot, "apps", item.app, item.main)).then(script => {
            new Function('__dirname', script)(path.join(osRoot, "apps", item.app));
          })
        } else AppWindow.launch(item.item);
        Elements.StartMenu.close();
      });
      elem.addEventListener("mouseenter", function() {
        elem.additional.classList.add("show")
      });
      elem.addEventListener("mouseleave", function() {
        elem.additional.classList.remove("show")
      });
      if (item.main) elem.icon.className = "mdi mdi-24px lh-24 d-flex mdi-" + item.icon;
      else elem.icon.src = item.icon;
      elem.header.innerText = item.name;
      elem.append(elem.icon, elem.header, elem.additional);
      items.push(elem);
    });
    items.sort(function(a, b) {
      return a.header.innerText.toLowerCase().localeCompare(b.header.innerText.toLowerCase());
    })
    items[0].classList.add("active")
    items[0].additional.classList.add("show")
    root.SearchSection.append(...items);
    showSection(root.SearchSection);
  }
}

function showSection(elem) {
  active = elem;
  root.NotFound.style.display = "none";
  root.SearchSection.style.display = "none";
  root.Apps.style.display = "none";
  elem.style.display = "flex";
}
return render();
