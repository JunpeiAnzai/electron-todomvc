const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    const id = "fmkadmapgofadopljbjfkapdkoienihi";
    const localAppData = process.env.LOCALAPPDATA;
    const extensionDir = 'Google\\Chrome\\User Data\\Default\\Extensions';
    const version = '0.15.6_0';
    BrowserWindow.addDevToolsExtension(`${localAppData}\\${extensionDir}\\${id}\\${version}`);

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
