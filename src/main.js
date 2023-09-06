import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer'
const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = ({ width, height }) => {
  const mainWindow = new BrowserWindow({
    width,
    height,
    frame: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  installExtension(REDUX_DEVTOOLS)
  .then((name) => console.log(`Added Extension: ${name}`))
  .catch((err) => console.log('Oops error occured: ', err))

  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.size

  createWindow({ width, height });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
