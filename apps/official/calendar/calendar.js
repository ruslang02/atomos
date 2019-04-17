const AppWindow = require("@api/WindowManager");
const Menu = require("@api/Menu");
const win = AppWindow.getCurrentWindow();

let currentMonth = new Date();
let monthPicker = document.createElement("div");
monthPicker.className = "btn-group btn-group-sm shadow-sm mx-auto";
monthPicker.prev = document.createElement("button");
monthPicker.prev.className = "btn mdi mdi-chevron-left mdi-18px lh-18 d-flex btn-light";
monthPicker.prev.onclick = () => {
  currentMonth.setMonth(currentMonth.getMonth() - 1);
  openMonth(currentMonth)
};
monthPicker.prev.addEventListener("dblclick", e => e.stopPropagation());
monthPicker.month = document.createElement("button");
monthPicker.month.className = "btn lh-18 text-center px-2 btn-light";
monthPicker.month.style.minWidth = CSS.px(70);
monthPicker.month.addEventListener("dblclick", e => e.stopPropagation());
monthPicker.month.addEventListener("click", () => monthPicker.menu.popup());
monthPicker.next = document.createElement("button");
monthPicker.next.className = "btn mdi mdi-chevron-right mdi-18px lh-18 d-flex btn-light";
monthPicker.next.addEventListener("dblclick", e => e.stopPropagation());
monthPicker.next.onclick = () => {
  currentMonth.setMonth(currentMonth.getMonth() + 1);
  openMonth(currentMonth)
};
monthPicker.append(monthPicker.prev, monthPicker.month, monthPicker.next);
let searchBtn = document.createElement("button");
searchBtn.className = "btn btn-sm shadow-sm mdi mdi-magnify mdi-18px lh-18 ml-2 d-flex btn-light";
let accountsBtn = document.createElement("button");
accountsBtn.className = "btn mdi btn-sm shadow-sm mdi-account-box-outline mdi-18px lh-18 ml-2 d-flex btn-light";
win.ui.header.append(monthPicker/*, accountsBtn, searchBtn*/);
win.ui.title.classList.add("d-none");
let body = document.createElement("main");
body.className = "very-rounded shadow h-100 flex-grow-1 mx-2 px-2 pt-2 pb-3 mb-2 scrollable-0 " + (win.options.darkMode ? "bg-dark" : "bg-white");
body.style.display = "grid";
body.style.gridTemplateColumns = "repeat(7, 1fr)";
body.style["gridAutoRows"] = "40px 1fr 1fr 1fr 1fr 1fr 1fr";
function newWD(name) {
  let wd = document.createElement("b");
  wd.className = "text-center py-2 px-1 bg-light d-inline-block btn btn-white shadow-sm text-truncate " + (name === "Sunday" ? "very-rounded-left" : (name === "Saturday" ? "very-rounded-right": ""));
  wd.innerText = name;
  return wd;
}
let weekdays = [newWD("Sunday"), newWD("Monday"), newWD("Tuesday"), newWD("Wednesday"), newWD("Thursday"), newWD("Friday"), newWD("Saturday")];
weekdays.forEach(week => body.appendChild(week));

function openMonth(date) {
let menuItems = []
for(let i = currentMonth.getFullYear() - 3; i<currentMonth.getFullYear() + 5; i++) {
  menuItems.push({
    label: i.toString(),
    selected() {
      return i === currentMonth.getFullYear();
    },
    click() {
      currentMonth.setYear(i);
      openMonth(currentMonth)
    }
  })
}
monthPicker.menu = new Menu(menuItems);
  body.querySelectorAll("div").forEach(div => div.remove());
  monthPicker.month.innerText = date.toLocaleString('en-us', { month: 'long', year: 'numeric' })
  let numOfDays;
  switch(date.getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      numOfDays=31;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      numOfDays=30;
      break;
    default:
      let y = date.getFullYear();
      if(y % 4 !== 0) numOfDays=28;
      else if (y % 100 !== 0) numOfDays=29;
      else if (y % 400 !== 0) numOfDays=28;
      else numOfDays=29;
  }
  let nd = new Date(date.getTime());
  let gc = 2;
  let now = new Date();
  now.setHours(0,0,0,0);
  nd.setHours(0,0,0,0);
  for(let i=1; i <= numOfDays; i++) {
    nd.setDate(i);
    let day = document.createElement("div");
    day.className = "d-flex btn btn-white align-items-end justify-content-end" + (nd.getTime() == now.getTime() ? " active" : "");
    day.style.fontSize = "1.5rem";
    day.innerText = i;
    day.style.gridColumn = nd.getDay() + 1;
    if(nd.getDay() === 0) gc++;
    day.style.gridRow = gc;
    body.append(day);
  }
}
openMonth(currentMonth)
win.ui.body.append(body);
