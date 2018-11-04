const EventEmitter = require("events");
let instances = [];
window.Registry = class Registry extends EventEmitter {
	constructor(storageName) {
		super();
		if (!window.localStorage.getItem("registry")) window.localStorage.setItem("registry", "{}");
		let storage = JSON.parse(window.localStorage.getItem("registry"))[storageName];
		this.storageName = storageName;
		this.storage = storage || {};
		if (!storage) this.set({}); else if (!Object.getOwnPropertyNames(storage).length) this.set({});
		instances.push({name: storageName, instance: this});
	}

	static set(key, value) {
		let keys = key.split(".");
		let sName = keys.shift();
		let registry = new Registry(sName);
		let prefs = registry.get();
		let prop = keys.pop();
		keys.reduce(function (cur, key) {
			return cur[key];
		}, prefs)[prop] = value;
		registry.set(prefs);
		return prefs;
	}

	static get(key) {
		let keys = key.split(".");
		let registry = new Registry(keys.shift());
		return keys.reduce(function (cur, key) {
			return cur[key];
		}, registry.get());
	}

	static eraseAll() {
		if (isDebug) window.localStorage.setItem("registry", "{}");
		else console.info("What the hell are you doing?");
	}

	get() {
		return this.storage;
	}

	set(newStorage) {
		let that = this;
		let oldStorage = JSON.parse(window.localStorage.getItem("registry"));
		oldStorage[this.storageName] = newStorage;
		window.localStorage.setItem("registry", JSON.stringify(oldStorage));
		this.storage = newStorage;
		instances.forEach(item => {
			if (item.name === that.storageName) item.instance.emit('changed', newStorage);
		});
	}
}
