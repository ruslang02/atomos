let container = document.createElement("main");
container.className = "flex-grow-1";
container.addEventListener("mousedown", () => {
	const AppWindow = require(`@api/WindowManager`);
	if (AppWindow.getFocusedWindow()) AppWindow.getFocusedWindow().blur();
});
document.body.prepend(container);