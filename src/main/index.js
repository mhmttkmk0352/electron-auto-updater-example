const {app, BrowserWindow} = require('electron');
const {autoUpdater} = require('electron-updater');
let mainWindow = '';

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        },
    });

    mainWindow.loadFile('../../www/index.html');

});