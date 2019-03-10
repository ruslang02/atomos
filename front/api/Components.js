class Button extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({mode: "open"});
		this.iconElement = document.createElement("icon");
		this.iconElement.className = "mdi";
		this.shadow.appendChild(this.iconElement);
	}

	static get observedAttributes() {
		return ['c', 'l'];
	}

	updateStyles() {
		this.iconElement.className = `mdi mdi-${this.getAttribute("icon-size") || 18} mdi-${this.getAttribute("icon")}`
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "icon":
				this.iconElement.classList.remove("mdi-" + oldValue);
				this.iconElement.classList.add("mdi-" + newValue);
				break;
			case "text":
				this.iconElement.classList.remove("mdi-" + oldValue);
				this.iconElement.classList.add("mdi-" + newValue);
				break;
		}
		console.log('Button attributes changed.');
	}
}

customElements.define('x-button', Button);