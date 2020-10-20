const {app, BrowserWindow, Menu} = require('electron')

// ToDo
// 1. Enable logging using the electron-log module
// 2. Set environment variable
// 3. Create vaiables for NODE_ENV & Platform
// 4. Create menu for application

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow ({
        title: 'AppName',
        width: 1000,
        height: 900,
        icon: 'Icon Location',
        resizable: 'True or False',
        webPreferences: {
            nodeIntegration: true,
        }
    })

    mainWindow.loadFile('./app/index.html')
}

app.on('ready', () => {
    createMainWindow()
})

app.allowRendererProcessReuse = true