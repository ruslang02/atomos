setTitle("Date and time")

function upd() {
	list.changeDate.header.lastChild.innerHTML = new Date().toLocaleTimeString({}, {
		hour: '2-digit',
		minute: '2-digit'
	}) + ", " + new Date().toLocaleDateString({}, {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

setInterval(upd, 1000);
let list = document.createElement("section");
list.className = "list-group mb-2 rounded-0 d-flex flex-column";
list.changeDate = newSmallListItem({
	label: "Change date and time",
	sublabel: "12:00 PM",
	click() {
		let cDate = new Date();
		let input = document.createElement("input");
		input.type = 'datetime-local';
		input.className = 'form-control mt-2';
		input.value = cDate.getUTCFullYear() +
			'-' + pad(cDate.getUTCMonth() + 1) +
			'-' + pad(cDate.getUTCDate()) +
			'T' + pad(cDate.getUTCHours()) +
			':' + pad(cDate.getUTCMinutes())
		Shell.showMessageBox({
			title: "Change current system time",
			icon: "clock-outline",
			buttons: ["Cancel", "Set"],
			defaultId: 1,
			message: input
		}).then(button => {
			if (button === "Set") {
				let time = new Date(document.querySelector("message-box input").value);
				let format = time.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).toUpperCase().replace(",", "")
				console.log(format, time)
				Shell.execAsRoot(`date --set="${format}"`, {
					title: "Authenticate to change system time",
					message: 'Type your root password'
				});
			}
		})
	}
});

function pad(number) {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}

list.timezone = newSmallListItem({
	label: "Timezone",
	sublabel: "GMT " + (new Date().getTimezoneOffset() / -60) + ": " + Intl.DateTimeFormat().resolvedOptions().timeZone
});
list.clockFormat = newSmallListItem({
	label: "Date format",
	sublabel: "AM/PM"
});
list.append(list.changeDate, list.timezone, list.clockFormat);
upd();
root.append(list);
