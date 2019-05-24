const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win;

function createWindow(){
    win = new BrowserWindow({width: 700, height: 500})

    win.loadURL(url.format({
        pathname: path.join(__dirname, './.render/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.openDevTools();

    win.on('closed', ()=>{
        win=null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    app.quit();
})