# Changelog
## 0.4-dev40
 - Repository reverted back to 0.4-dev26 with some edits from 0.4-dev30 because of full unstabillity of whole system and problems with opening any menus in some systems.

## 0.4-dev33
 - aos-typewriter is now using new menus
 - Deleted debug commands

## 0.4-dev32
 - Menus are a bit stabilized and are replaced in some apps
 - Submenus are disabled for now
 - aos-cabinet was given view preferences

## 0.4-dev30
 - Context menus are now unlinked from Electron API, fully Bootstrapish generation
 - Very unstable menus
 - Desktop is now working again
 - aos-cabinet-createFolder and aos-cabinet-createFile are restored, but no entry in menus again

## 0.4-dev26
 - aos-photoframe was removed, brush replaced it
 - aos-appchooserdialog was updated to work in the 0.4
 - brush now can open files via path
 - proton now can open local files
 - framework update

## 0.4-dev25
 - Zooming is now available in all apps using Ctrl + and Ctrl -
 - Angles was given the ability to change syntax highlighting and theme settings
 - Dropdown now get a scrollbar if don't fit inside app
 - npm package "atomos" now renamed to "atomos-framework" to reserve the name
 - Changed all connections with that package
 - Small fixes is "index.js"

## 0.4-dev23

 - New applications:
   - ash - still in development, terminal emulator, can be used in different apps
   - aos-terminal - ash with extensions
   - brush - image editor based on Cropper.js
   - angles - code editor based on Ace.js
   - properties - dialog that shows the properties of file

 - Fixed menu items in aos-typewriter
 - Improved context menu integration
 - 'cropperjs' npm package was integrated

## 0.4-dev15

 - 70% of code rewritten
 - Using Electron's WebView instead of <iframe>'s
 - atomOS API is now unavailable
 - Node.JS is available in all applications

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
