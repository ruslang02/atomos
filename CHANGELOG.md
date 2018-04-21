# Changelog

## 0.6.0 _unstable_
 - API redesign using `module.exports`
 - Translucent UI
 - Window open animation
 - No need to use special AtomOS XFWM4 theme

## 0.5.3

 - #####Stable than ever
 
 
 - Stability improvements
 - Fixed Start Menu auto-update
 - App uninstallation and shortcut creation in Start menu
 - .lnk files fixes
 - _ash_ finally fixed and working, _quiet_ flag
 - Keyboard layout, Alt+Shift switching layouts
 - _proton_ night mode toggler
 - Notification Preferences, muting
 - _aos-shutdown_ for preventing closing AtomOS GUI
 - npm optimization
 - _camcorder_ graphical glitch fixed
 
## 0.5.2
 - Stability improvements
 - Resizable taskbar
 - App structure redesign
 
## 0.5.1
 - System root unlinked from directory /atomos
 - New apps: _viewerjs_, _aos-files_
 - _aos-files_ replaced _aos-cabinet_ due to better performance and less memory leaks
 - UI improvements
 - Window state saving
 - Notification Center
 - Less RAM usage

## 0.5.0
 - App structure redesigned
 - Package management system
 - Online application repository
 - Optimized for GitHub
 - System Updater
 - Graphics rendering improvements on some platforms
 - Preload removal
 - New applications: _market_, _install_, _systeminfo_*, _aclockwallpaper_*, _camcorder_, _sudo_, _control_, _updater_
 - Interface customization, Date/Time change utility
 - _proton_ now has a history list, local home page, lots of imporvements
 - Overall bug fixes
 - Multi-user mode
 - Configuration files for each user by each app
 - Specialised _lightdm-webkit-greeter_ theme, will be available sooner
 - Asynchronous copy/paste file operations in _aos-cabinet_
 
## 0.4.2
 - _boombox_ now can work begin hiden in a tray, a popup with a playlist, controls and context menu
 - Tray API modified
 - Control Panel
 - Wallpaper selection
 - Desktop is now generated using _aos-cabinet_
 - _proton_ was given tab functionality, history navigation
 - Fixed _aos-typewriter_ "Save" command and "Edit" commands
 - Fixed menu behavior
 - _aos-appchooserdialog_ updated to today's standards, including a notification
 - _ash_ was fixed and now can execute Linux apps
 - Fixed bugs related to popups
 - _angles_ opens files in an already opened tab if it is empty + show/hide tab/toolbar
 
## 0.4.1
 - Multiple bug fixes
 - Notifcations API
 - _aos-typewriter_ was added some notification interaction
 - End disk image Linux updated

## 0.4 RTM
 - API removal
 - New apps _boombox_, _angles_, _ash_, _brush_
 - Improved stability and fixed lots of bugs
 - Absolutely rewritten window system
 - 40% performance boost
 - WebGL support
 - Wi-Fi support
 - Node.JS, Electron and RequireJS integration
 - Full stack optimization
 
## 0.3.3
 - Ability to create files and folders in aos-cabinet
 - Frameless modals
 - Filesystem links are now supported
 - z-index fixes
 - Fully functional FileClipboard API
 - Context menus in aos-typewriter
 - Hidden files toggle in aos-cabinet
 - TooLargeFile warning in aos-typewriter

## 0.3.2
 - FileClipboard API
 - Desktop is now generated dynamically from folder ~/Desktop
 - Shortcut support
 - File management commands
 - Fixed window z-order sometimes not bringing to front
 - Keyboard shortcuts in aos-typewriter
## 0.3.1
 - Calculator application
 - Apps list is now generated automatically
 - Context menus are in beta and are available in some apps
 - Ping can now be controlled using a toggle
 - Improved app opening performance
 - aos.components.ContextMenu and Point were added to API
 - Cabinet now has sorting and icon size settings
 - Some OFD bugs were resolved
 - More deep Node.JS integration
## 0.3
 - Proton Web Browser
 - Improved About dialog
 - Movement from v2.3.2 to v4-beta Bootstrap framework
 - Updated jQuery
 - Components API beta
 - Change Font styles
 - Clock sidebar
 - Network settings
 - Autoping on the sidebar
 - Rebuilt Start menu
 - Ability to exit X Window System
 - fs, network, wireless-api Node.JS libraries are used