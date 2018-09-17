const path = require("path");
root.className = "flex-grow-1";
window.TaskManager = class TaskManager {
	constructor(wID) {
		let _this = this;
		this.window = AppWindow.fromId(wID);
		this.task = document.createElement('button');
		this.setTitle(this.window.options.title);
		this.task.className = "p-0 border-0 bg-transparent mr-3 position-relative active fade show";
		this.task.setAttribute("data-id", this.window.id);
		this.taskIcon = new Image(48, 48);
		this.setIcon(this.window.options.icon);
		this.task.appendChild(this.taskIcon);
		this.window.on("title-updated", title => this.setTitle(title));
		this.window.on("icon-updated", icon => this.setIcon(icon));
		root.appendChild(this.task);
		new BSN.Tooltip(this.task, {
			delay: 250
		});
		this.menu = new Menu([{
			label: "Maximize",
			icon: "window-maximize",
			click: e => this.window.maximize()
		}, {
			label: "Restore",
			icon: "window-restore",
			click: e => this.window.restore()
		}, {
			label: "Minimize",
			icon: "window-minimize",
			click: e => this.window.minimize()
		}, {
			type: "separator"
		}, {
			label: "Close",
			icon: "window-close",
			click: e => this.window.close()
		}]);
		this.task.addEventListener("contextmenu", function(e) {
			e.stopPropagation();
			_this.menu.popup();
		});
		this.window.ui.header.addEventListener("contextmenu", function(e) {
			e.stopPropagation();
			_this.menu.popup();
		});
		this.window.ui.buttons.addEventListener("contextmenu", e => e.stopPropagation());
		this.task.addEventListener("click", function(e) {
			e.stopPropagation();
			_this.menu.closePopup();
			_this.window.show()
		});
		this.window.on('closed', function() {
			document.body.click();
			_this.task.classList.remove("show");
			setTimeout(e => _this.destroy(), FADE_ANIMATION_DURATION)
		});
		this.window.on('blur', e => this.task.classList.remove("active"));
		this.window.on('focus', e => this.task.classList.add("active"));
		this.window.on('thumbnail-changed', e => this.setTitle())
	}
	destroy() {
		this.task.remove();
	}
	setTitle(title = this.window.ui.title.innerText) {
		let markup = "<div style='max-width: 250px; max-height: 200px; margin: -0.25rem -0.5rem' class='text-left rounded scrollable-0'><img class='w-100 mb-1' src='" + this.window.thumbnail + "'/><div class='mb-1 ml-1'>" + title + 
			`</div></div>`;
		this.task.dataset.originalTitle = markup;
	}
	setIcon(iconURL) {
		if(iconURL)
			this.taskIcon.src = iconURL.replace("$SYSTEM_ROOT", osRoot).replace("$APP_ROOT", path.join(osRoot, "apps", this.window.app));
	}
	focus() {
		this.task.classList.add("active");
	}
	blur() {
		this.task.classList.remove("active");
	}
}
