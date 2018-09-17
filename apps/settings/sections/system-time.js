setTitle("Date and time")
function upd() {
	list.changeDate.innerHTML = `<div>Change date and time</div><div class='smaller text-muted'>${new Date().toLocaleTimeString({}, {
		hour: '2-digit',
		minute: '2-digit'
	})}, ${new Date().toLocaleDateString({}, {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	})}`;
}
setInterval(upd, 1000);
let list = document.createElement("section");
list.className = "list-group mb-2 rounded-0 d-flex flex-column";
list.changeDate = document.createElement("button");
list.changeDate.className = "list-group-item list-group-item-action py-2 rounded-0 border-left-0 border-right-0";
list.changeDate.innerHTML = "<div>Change date and time</div><div class='smaller'></div>";
function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
list.changeDate.onclick = e => {
	let cDate = new Date();
	let input = document.createElement("input");
	input.type = 'datetime-local';
	input.className = 'form-control mt-2';
	input.value = cDate.getUTCFullYear() +
        '-' + pad(cDate.getUTCMonth() + 1) +
        '-' + pad(cDate.getUTCDate()) +
        'T' + pad(cDate.getUTCHours()) +
        ':' + pad(cDate.getUTCMinutes())
	shell.showMessageBox({
		title: "Change current system time",
		icon: "clock-outline",
		buttons: ["Cancel", "Set"],
		defaultId: 1,
		message: input
	}).then(button => {
		if(button === "Set") {
			let time = new Date(document.querySelector("message-box input").value);
			let format = time.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }).toUpperCase().replace(",", "")
			console.log(format, time)
			shell.execAsRoot(`date --set="${format}"`, {
				title: "Authenticate to change system time",
				message: 'Type your root password'
			});
		}
	})
}
list.timezone = document.createElement("div");
list.timezone.className = "list-group-item py-2 rounded-0 border-left-0 border-right-0";
list.timezone.innerHTML = "<div>Timezone settings</div><div class='smaller text-muted'>GMT +03: Moscow</div>";
list.clockFormat = document.createElement("div");
list.clockFormat.className = "list-group-item py-2 rounded-0 border-left-0 border-right-0";
list.clockFormat.innerHTML = "<div>Date format</div><div class='smaller text-muted'>AM/PM</div>";
list.append(list.changeDate, list.timezone, list.clockFormat);
upd();
root.append(list);
