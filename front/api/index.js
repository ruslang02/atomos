let ncache;
module.exports = class UnifiedAPI {
	static get AppWindow() {
		return require("./WindowManager")
	}

	static get Shell() {
		return require("./Shell")
	}

	static get Notification() {
		if (!ncache)
			ncache = require("./Notification");
		return ncache.Notification;
	}

	static get Snackbar() {
		if (!ncache)
			ncache = require("./Notification");
		return ncache.Snackbar;
	}

	static get Registry() {
		return require("./Registry")
	}

	static get Menu() {
		return require("./Menu")
	}

	static get Components() {
		return require("./Components")
	}
};