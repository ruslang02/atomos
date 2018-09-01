	const EventEmitter = require("events");
	window.Registry = class Registry extends EventEmitter {
		constructor(storageName) {
			super();
			if(!window.localStorage.getItem("registry")) window.localStorage.setItem("registry", "{}");
			let storage = JSON.parse(window.localStorage.getItem("registry"))[storageName];
			this.storageName = storageName;
			this.storage = storage || {};
			if(!storage) this.set({}); else if(!Object.getOwnPropertyNames(storage).length) this.set({});
			let that = this;
			window.addEventListener("storage", function(e) {
				that.storage = JSON.parse(e.newValue)[storageName];
				this.emit('changed', that.storage);
			});
		}
		static getSystemRegistry() {
			return new Registry("system");
		}
		get() {
			return this.storage;
		}
		set(newStorage) {
			let oldStorage = JSON.parse(window.localStorage.getItem("registry"));
			oldStorage[this.storageName] = newStorage;
			window.localStorage.setItem("registry", JSON.stringify(oldStorage));
			this.storage = newStorage;
		}
		static eraseAll() {
			if(isDebug) window.localStorage.setItem("registry", "{}");
			else console.info("What the hell are you doing?");
		}
	}
