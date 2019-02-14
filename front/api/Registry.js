let instances = {};

class Registry {
	static set(key, value) {
		if (!window.localStorage.getItem("registry")) Registry.eraseAll();
		let storage = JSON.parse(window.localStorage.getItem("registry"));

		function recursiveSet(obj, key, val) {
			if (typeof key == 'string')
				key = key.split(".");
			obj[key[0]] = obj[key[0]] || {};
			let tmpObj = obj[key[0]];
			if (key.length > 1) {
				key.shift();
				recursiveSet(tmpObj, key, val);
			} else
				obj[key[0]] = val;
			return obj;
		}

		let newStorage = recursiveSet(storage, key, value);
		window.localStorage.setItem("registry", JSON.stringify(newStorage));
		let sName = key.split(".")[0];
		if (instances[sName])
			for (const fnc of instances[sName])
				fnc(key, value);
		return newStorage[sName];
	}

	static watch(key, cb) {
		if (!instances[key]) instances[key] = [];
		instances[key].push(cb);
	}

	static get(key) {
		if (!window.localStorage.getItem("registry")) Registry.eraseAll();
		let keys = key.split(".");
		let sName = keys[0];
		let regs = JSON.parse(window.localStorage.getItem("registry"));
		if (keys.length === 1) {
			return regs[sName] || {};
		} else {
			return keys.reduce(function (cur, key) {
				if (!cur) return undefined; else
					return cur[key];
			}, regs);
		}
	}

	static eraseAll() {
		window.localStorage.setItem("registry", "{}");
	}
}

module.exports = Registry;