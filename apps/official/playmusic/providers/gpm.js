/*function render() {
  const pm = new(require("playmusic"));
  pm.init(cookies, err => {
    if(err) {
        new Snackbar("There was a problem loading PM library. Check the console");
        console.error(err);
        return;
    }
    tracksBtn.click();
  })
  let sidebar = document.createElement("aside");
  sidebar.className = "mt-2";
  sidebar.style.minWidth = CSS.px(150);
  sidebar.style.width = CSS.px(200);
  let gen = (name, icon, active = false) => {
    let btn = document.createElement("button");
    btn.className = "dropdown-item p-2 font-weight-bolder d-flex align-items-center rounded-right-pill " + (active ? "bg-danger active" : "");
    btn.icon = document.createElement("icon");
    btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${icon}${active ? "" : "-outline"} mr-2`;
    btn.label = document.createElement("div");
    btn.label.innerText = name;
    btn.iconName = icon;
    btn.append(btn.icon, btn.label);
    btn.activate = () => {
      btn.classList.add("active", "bg-orange");
      btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${btn.iconName} mr-2`;
    }
    btn.deactivate = () => {
      btn.classList.remove("active", "bg-orange");
      btn.icon.className = `mdi mdi-24px lh-24 d-flex mdi-${btn.iconName}-outline mr-2`;
    }
    return btn;
  }
  tracksBtn = gen("Songs", "music-box");
  plBtn = gen("Playlists", "playlist-music");
  favBtn = gen("Favorites", "heart");

  tracksBtn.addEventListener("click", () => {
    spinner.show();
    tracksBtn.activate();
    plBtn.deactivate();
    favBtn.deactivate();
    let header = document.createElement("h4");
    header.innerText = "All tracks";
    header.className = "mx-2 mt-1 mb-3"
    pm.getAllTracks((err, response) => {
      if (err) {
        new Snackbar("There was a problem retrieving tracks. Check the console");
        console.error(err);
        spinner.hide();
        return;
      }
      main.append(header);
      function songContext(e) {
        if(e) e.stopImmediatePropagation();

        let _this = this;
        let smallItem = document.createElement("button");
        smallItem.className = "btn btn-white d-flex p-0 align-items-center flex-shrink-0 text-left shadow-0";
        smallItem.img = new Image(24, 24);
        smallItem.img.src = this.art.src;
        smallItem.img.className = "rounded";
        smallItem.header = document.createElement("div");
        smallItem.header.className = "flex-grow-1 text-truncate px-2";
        smallItem.header.innerText = this.trackTitle.innerText;
        smallItem.songId = this.songId;
        smallItem.addEventListener("contextmenu", () => {
          smallItem.remove();
        })
        smallItem.addEventListener("click", function() {
          controls.play.classList.remove("mdi-play", "mdi-pause");
          controls.play.classList.add("mdi-spin-faster", "mdi-loading");
          controls.play.disabled = true;
          pm.getStreamUrl(this.songId, (err, url) => {
            if(err) {
              console.error(err);
              return;
            }
            controls.play.disabled = false;
            player.src = url;
            player.play();
            art.src = smallItem.img.src;
            current.audio.innerText = smallItem.header.innerText;
            current.artist.innerText = _this.artist.innerText;
            for(const item of playlist.children) item.classList.remove("active");
            smallItem.classList.add("active");
            playlist.active = smallItem;
          })
        })
        smallItem.append(smallItem.img, smallItem.header)
        if(e) new Menu([{
          label: "Play now",
          icon: "play",
          click() {
            playlist.innerHTML = "";
            playlist.append(smallItem);
            smallItem.click();
          }
        }, {
          label: "Play next",
          icon: "play-speed",
          click() {
            playlist.insertBefore(smallItem, playlist.children[1]);
          }
        }, {
          label: "Add to queue",
          icon: "playlist-play",
          click() {
            playlist.append(smallItem);
          }
        }]).popup();
        else playlist.append(smallItem);
      }
      for(const track of response.data.items) {
        let time = Math.trunc(Math.trunc(track.durationMillis / 1000) / 60) + ":" + (Math.trunc(track.durationMillis / 1000) % 60 < 10 ? "0" : "") + Math.trunc(track.durationMillis / 1000) % 60;
        let entry = document.createElement("button");
        entry.className = "dropdown-item d-flex px-1 py-0 align-items-center flex-shrink-0 border-bottom";
        entry.addEventListener("contextmenu", songContext);
        entry.addEventListener("click", () => songContext.call(entry))
        entry.songId = track.id;
        entry.art = new Image(36,36);
        entry.art.src = track.albumArtRef[0].url;
        entry.art.className = "mr-2";
        entry.trackTitle = document.createElement("div");
        entry.trackTitle.innerText = track.title;
        entry.trackTitle.className = "col text-truncate px-2";
        entry.artist = document.createElement("div");
        entry.artist.innerText = track.artist;
        entry.artist.className = "col-3 text-truncate pr-2";
        entry.album = document.createElement("div");
        entry.album.innerText = track.album;
        entry.album.className = "col-4 text-truncate px-2";
        entry.duration = document.createElement("div");
        entry.duration.innerText = time;
        entry.duration.className = "ml-auto text-center pl-2";
        entry.duration.style.width = CSS.px(40);
        entry.append(entry.art, entry.trackTitle, entry.artist, entry.album, entry.duration);
        main.append(entry);
      }
      spinner.hide();
    })
  })

  sidebar.append(tracksBtn, plBtn, favBtn);

  let main = document.createElement("main");
  main.className = "very-rounded shadow scrollable-y flex-grow-1 position-relative mx-2 mb-2 p-2 d-flex flex-column " + (win.options.darkMode ? "bg-dark" : "bg-light")

  let playSection = document.createElement("section");
  playSection.className = "shadow d-flex flex-column very-rounded mb-2 p-2 mr-2 " + (win.options.darkMode ? "bg-dark" : "bg-light");
  playSection.style.minWidth = CSS.px(200);
  playSection.style.width = CSS.px(300);
  playSection.header = document.createElement("h5");
  playSection.header.className = "mt-1 mb-3 mx-1";
  playSection.header.innerText = "Now Playing".toLocaleString();
  let playlist = document.createElement("playlist");
  playlist.className = "flex-grow-1 scrollable-y d-flex flex-column position-relative";
  playSection.append(playSection.header, playlist);
  let footer = document.createElement("footer");
  footer.dataset.draggable = false;
  footer.className = "d-flex flex-column very-rounded shadow flex-shrink-0 mx-2 mb-2 " + (win.options.darkMode ? "bg-dark" : "bg-light");
  footer.progress = document.createElement("input");
  footer.progress.type = "range";
  footer.progress.className = "w-100 custom-range";
  footer.progress.max = 10000;
  footer.progress.value = 10000;
  footer.progress.onchange = () => {
  	player.currentTime = footer.progress.value;
  	footer.progress.style.setProperty("--value", (footer.progress.value / footer.progress.max * 100) + "%");
  };
  footer.progress.style.setProperty("--value", "100%");
  footer.body = document.createElement("div");
  footer.body.className = "flex-grow-1 d-flex";
  let art = new Image(48,48);
  art.className = "rounded mr-3";

  let current = document.createElement("div");
  current.className = "d-flex align-items-center pl-1 flex-grow-1" + (win.options.darkMode ? " text-white" : " text-dark");
  current.style.width = 0;
  current.audioInfo = document.createElement("div");
  current.audioInfo.className = "d-flex align-items-start flex-column justify-content-center"
  current.audio = document.createElement("h5");
  current.audio.className = "mb-0 text-truncate w-100 font-weight-bolder";
  current.artist = document.createElement("div");
  current.artist.className = "text-truncate w-100 lh-18";
  let controls = document.createElement("div");
  controls.className = "d-flex align-items-center flex-shrink-0 m-2 justify-content-center";
  controls.previous = document.createElement("button");
  controls.previous.className = "btn mdi mdi-skip-previous mdi-24px lh-24 rounded-circle d-flex p-1" + (win.options.darkMode ? " btn-dark" : " btn-light");
  controls.previous.disabled = true;
  controls.previous.addEventListener("click", () => {
  	if (playlist.active)
  		if (playlist.active.previousSibling) playlist.active.previousSibling.click();
  });
  controls.next = document.createElement("button");
  controls.next.className = "btn mdi mdi-skip-next mdi-24px lh-24 rounded-circle d-flex p-1" + (win.options.darkMode ? " btn-dark" : " btn-light");
  controls.next.disabled = true;
  controls.next.addEventListener("click", () => {
  	if (playlist.active)
  		if (playlist.active.nextSibling) playlist.active.nextSibling.click();
  });
  controls.play = document.createElement("button");
  controls.play.className = "btn mdi mdi-play mdi-24px mx-2 lh-24 rounded-circle d-flex p-2 text-white";
  controls.play.disabled = true;
  controls.play.style.background = "#ff5722";
  controls.play.style.zIndex = "5";
  controls.play.addEventListener("click", () => {
  	if (!playlist.active) controls.next.click();
  	else if (player.paused) player.play();
  	else player.pause();
  });
  let addControls = document.createElement("div");
  addControls.className = "flex-grow-1 d-flex align-items-center justify-content-end mr-2";
  addControls.style.width = 0;
  controls.append(controls.previous, controls.play, controls.next);
  current.audioInfo.append(current.audio, current.artist)
  current.append(art, current.audioInfo);
  footer.body.append(current, controls, addControls);
  footer.append(footer.progress, footer.body);

  let player = new Audio();
  player.preload = "auto";

  win.on('close', function() {
    player.pause();
  })
  player.ontimeupdate = function () {
  	footer.progress.value = player.currentTime || 0;
  	footer.progress.max = player.duration || 0;
  	addControls.innerText = Math.trunc(footer.progress.value / 60) + ":" + (footer.progress.value % 60 < 10 ? "0" : "") + footer.progress.value % 60 + " / " + Math.trunc(footer.progress.max / 60) + ":" + (footer.progress.max % 60 < 10 ? "0" : "") + Math.round(footer.progress.max % 60);
  	footer.progress.style.setProperty("--value", (footer.progress.value / footer.progress.max * 100) + "%");
    controls.next.disabled = playlist.active === playlist.lastChild;
    controls.previous.disabled = playlist.active === playlist.firstChild;
  };
  player.onended = () => controls.next.click();
  player.onplay = function () {
    controls.play.classList.remove("mdi-play", "mdi-spin-faster", "mdi-loading");
    controls.play.classList.add("mdi-pause");
    controls.play.disabled = false;
  };
  player.onprogress = function() {
    footer.progress.style.setProperty("--loaded-value", (player.buffered.end(player.buffered.length - 1) / footer.progress.max * 100) + "%");
      controls.play.classList.remove("mdi-play", "mdi-spin-faster", "mdi-loading");
      controls.play.classList.add("mdi-pause");
      controls.play.disabled = false;
  }
  player.onpause = function () {
    controls.play.classList.remove("mdi-pause", "mdi-spin-faster", "mdi-loading");
    controls.play.classList.add("mdi-play");
    controls.play.disabled = false;
  };
  player.onwaiting = function() {
    controls.play.classList.remove("mdi-play", "mdi-pause");
    controls.play.classList.add("mdi-spin-faster", "mdi-loading");
    controls.play.disabled = true;
  }
  win.ui.body.innerHTML = "";
  win.ui.body.append(sidebar, main, playSection);
  win.ui.ui.append(footer);
}
*/
exports = 6
