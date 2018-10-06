window.app = class App {
  static getPath(path) {
    if (path === "os")
      return require("electron").remote.app.getAppPath();
    else return require("electron").remote.app.getPath(path);
  }
};
