'use strict'

const path = require('path')
const { app, ipcMain } = require('electron')

const Window = require('./Window')

require('electron-reload')(__dirname)

function main () {
  // todo list window
  let mainWindow = new Window({
    file: path.join('.render', 'index.html')
  })
  mainWindow.once('show', () => {
  })
}

app.on('ready', main)

app.on('window-all-closed', function () {
  app.quit()
})
