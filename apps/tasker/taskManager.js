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
		this.setIcon(this.window.options.icon || noAppIcon);
		this.task.appendChild(this.taskIcon);
		this.window.on("title-updated", title => this.setTitle(title));
		this.window.on("icon-updated", icon => this.setIcon(icon || noAppIcon));
		root.appendChild(this.task);
		new BSN.Tooltip(this.task, {
			delay: 250
		});
		this.menu = new Menu(null, [{
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
		let thumbnail = Registry.get("system.enableThumbnails");
		let markup = "";
		if(thumbnail === undefined) Registry.set("system.enableThumbnails", false);
		if(thumbnail) {
		markup = `
		<div style='max-width: 250px; max-height: 200px; margin: -0.25rem -0.5rem' class='text-left rounded scrollable-0'>
			<img class='w-100 mb-1' src='${this.window.thumbnail}'/>
			<div class='mb-1 ml-1 text-truncate'>${title}</div>
		</div>`;
	} else {
		markup = title;
	}
		this.task.dataset.originalTitle = markup;
	}
	setIcon(iconURL) {
		if(iconURL)
			this.taskIcon.src = path.join(osRoot, "apps", this.window.app, this.window.options.icon);
	}
	focus() {
		this.task.classList.add("active");
	}
	blur() {
		this.task.classList.remove("active");
	}
}
const noAppIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALBSURBVHhe7ZDBiRZhFAT/SAzDBDYVgzEhQ/ImLIJ4VT5oGLbovQw0DHQX1O1BP+o1xhhjjDHGGGOMMcZnfPvx99/8XGXK4UbnpTLlcKPzUplyuNF5qUw53OgT/fL9p/Xu3Z+3r1beKVMODj5VF/V4987FP/JOmXJw8Km6qMe7dy7+kXfKlIODT9VFPd69c/GPvFOmHBx8qi7q8e6di3/knTLl4OBTdVGPd+9c/CPvlCkHB+dHlSmHG52XypTDjc5LZcrhRuelMuXg4K/339WyhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysFB91ST7KFMOTjonmqSPZQpBwfdU02yhzLl4KB7qkn2UKYcHHRPNckeypSDg+6pJtlDmXJw0D3VJHsoUw4OuqeaZA9lysHB+VFlyuFG56Uy5XCj81KZcrjRealMY4wxxhhjjDHGGGOA1+s/pqSbQlhFbH0AAAAASUVORK5CYII=`;
