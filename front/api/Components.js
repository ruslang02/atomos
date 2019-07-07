const Color = require("color");

class Button extends HTMLButtonElement {
	constructor(options = {}) {
		super();
		if (options.icon || options.text || options.color)
			this._options = options;
		this._init();
	}

	get visible() {
		return this.classList.contains("d-inline-flex");
	}

	set visible(bool) {
		this.classList.toggle("d-none", !bool);
		this.classList.toggle("d-inline-flex", !!bool);
	}

	get icon() {
		return this._icon;
	}

	set icon(icon) {
		if (this._icon === icon) return;
		this._icon = icon || "";
		this.updateStyles();
	}

	set size(size) {
		this._size = size;
		this.classList.remove("btn-xs", "btn-sm", "btn-lg");

		this.color = this._color;
	}

	set color(color) {
		this._outlineLast = this._outlineLast || false;
		if (color === this._color && this._outline === color.outline) return;
		if (color.includes("--"))
			this._color = getComputedStyle(document.documentElement).getPropertyValue(color);
		else
			this._color = color || "#6c757d";
		for (let i = 0, l = this.classList.length; i < l; ++i) {
			if (/btn-.*/.test(this.classList[i])) {
				this.classList.remove(this.classList[i]);
				break;
			}
		}
		switch (color) {
			case "primary":
			case "secondary":
			case "success":
			case "info":
			case "warning":
			case "danger":
			case "light":
			case "dark":
			case "link":
			case "white":
				this._CSS.innerHTML = "";
				this.classList.add("btn-" + (this._outline ? "outline-" : "") + color);
				break;
			default:
				color = Color(this._color);
				this._CSS.innerHTML = genCSS(color, this.id, this._outline);
		}
		this.classList.add(this._size ? "btn-" + this._size : "btn", this._block ? "btn-block" : "btn");
		this._outlineLast = this._outline;
		this.updateStyles();
	}

	set tooltip(text) {
		if (!text) return;
		this.dataset.originalTitle = text;
		if (!this._tooltipProvider)
			this._tooltipProvider = new Tooltip(this, {
				placement: this._tooltipLocation || "top"
			});
	}

	set outline(bool) {
		this._outline = bool;
		this.color = this._color;
	}

	set iconSize(size) {
		if (typeof size === "number") size = CSS.px(size);
		this._iconSize = size || CSS.px(24);
		this.updateStyles();
	}

	set innerText(text) {
		this._innerText = text || "";
		this.updateStyles();
	}

	getDisconnected() {
		let html = this.outerHTML.replace('is="x-button"', '');
		let template = document.createElement('template');
		template.innerHTML = html;
		return template.content.firstChild;
	}

	_init() {
		if (!this._ready) this._ready = true;
		else return;
		this._options = this._options || {};
		if (this._options.visible === undefined) this._options.visible = true;
		this.innerHTML = "";
		this._iconElement = document.createElement("icon");
		this._iconElement.className = "mdi";
		this._textElement = document.createElement("div");
		this._CSS = document.createElement("style");
		this.className = "btn d-inline-flex align-items-center justify-content-center " + (this.shadow ? "shadow-sm " : "") + (this._options.addClasses || "");
		this.icon = this._options.icon || "";
		this.innerText = this._options.text || "";
		this.id = window.uniqueId();
		this._shadow = this._options.shadow || false;
		this.iconSize = this._options.iconSize || CSS.px(18);
		this._outline = this._options.outline || false;
		this.color = this._options.color || "#6c757d";
		this.visible = this._options.visible;
		this.size = this._options.size;
		this.disabled = this._options.disabled;
		this._tooltipLocation = this._options.tooltipLocation;
		this._initialTooltip = this._options.tooltip;
		this.append(this._iconElement, this._textElement, this._CSS);
	}

	connectedCallback() {
		if (this._initialTooltip)
			this.tooltip = this._initialTooltip;
	}

	disconnectedCallback() {
		if (this._tooltipProvider) this._tooltipProvider.hide();
	}

	updateStyles() {
		if (this._icon) {
			this._iconElement.className = `mdi${!!this._innerText ? " mr-2" : ""} d-flex mdi-${this._icon || "help-circle-outline"}`;
			this._iconElement.style.lineHeight = this._iconSize;
			this._iconElement.style.fontSize = this._iconSize;
		} else {
			this._iconElement.className = `d-none`;
		}
		this._textElement.innerHTML = this._innerText || "";
		this._textElement.classList.toggle("d-none", !this._innerText);
		this.classList.toggle("shadow-sm", !!this._shadow);
		this.dataset.draggable = "false";
	}
}

class Spinner extends HTMLElement {
	constructor() {
		super();
		this.icon = document.createElement("icon");
		this.icon.className = "mdi mdi-spin-faster mdi-loading mdi-24px d-flex justify-content-center align-items-center lh-24";
		this.style.cssText = "left:0;right:0;width:36px;height:36px;z-index:100";
		this.className = "position-absolute mt-5 bg-light border mx-auto p-1 rounded-circle shadow";
		this.hide();
		this.append(this.icon);
	}

	show() {
		this.animate([{
			transform: "translateY(-3rem)",
			opacity: 0
		},
			{
				transform: "translateY(0px)",
				opacity: 1
			}
		], {
			duration: 200,
			fill: "forwards"
		})
	}

	hide() {
		this.animate([{
			transform: "translateY(0px)",
			opacity: 1
		},
			{
				transform: "translateY(-3rem)",
				opacity: 0
			}
		], {
			duration: 200,
			fill: "forwards"
		})
	}
}

function genCSS(color, id, outline) {
	let textColor = color.isDark() ? "white" : "#212529";
	let hexColor = color.rgb();
	if (!outline) return `
  #${id} {
      color: ${textColor};
      background-color: ${hexColor};
      border-color: ${hexColor}
  }

  #${id}:hover {
      color: ${textColor};
      background-color: ${color.darken(0.075).rgb()};
      border-color: ${color.darken(0.1).rgb()}
  }

  #${id}.focus,#${id}:focus {
      box-shadow: 0 0 0 .2rem ${color.lighten(0.15).fade(0.5).rgb()}
  }

  #${id}.disabled,#${id}:disabled {
      color: ${textColor};
      background-color: ${hexColor};
      border-color: ${hexColor}
  }

  #${id}:not(:disabled):not(.disabled).active,#${id}:not(:disabled):not(.disabled):active,.show>#${id}.dropdown-toggle {
      color: ${textColor};
      background-color: ${color.darken(0.1).rgb()};
      border-color: ${color.darken(0.125).rgb()}
  }

  #${id}:not(:disabled):not(.disabled).active:focus,#${id}:not(:disabled):not(.disabled):active:focus,.show>#${id}.dropdown-toggle:focus {
      box-shadow: 0 0 0 .2rem ${color.lighten(0.15).fade(0.5).rgb()}
  }`;
	else return `
      #${id} {
          color: ${hexColor};
          border-color: ${hexColor}
      }

      #${id}:hover {
          color: ${textColor};
          background-color: ${color.fade(0.3).rgb()};
          border-color: ${hexColor}
      }

      #${id}.focus,#${id}:focus {
          box-shadow: 0 0 0 .2rem ${color.fade(0.5).rgb()}
      }

      #${id}.disabled,#${id}:disabled {
          color: ${hexColor};
          background-color: transparent
      }

      #${id}:not(:disabled):not(.disabled).active,#${id}:not(:disabled):not(.disabled):active,.show>#${id}.dropdown-toggle {
          color: ${textColor};
          background-color: ${hexColor};
          border-color: ${hexColor}
      }

      #${id}:not(:disabled):not(.disabled).active:focus,#${id}:not(:disabled):not(.disabled):active:focus,.show>#${id}.dropdown-toggle:focus {
          box-shadow: 0 0 0 .2rem ${color.fade(0.5).rgb()}
      }`;
}

customElements.define('x-button', Button, {
	extends: "button"
});
customElements.define('x-spinner', Spinner);
module.exports = {
	Button: Button,
	Spinner: Spinner
};

