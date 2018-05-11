const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // Creating the browser window
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    center: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);

  win.on('closed', function() {
    win = null;
  });
}

// Create window on electron initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function() {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }

});

app.on('activate', function() {
  // On macOS specific close process
  if (win === null) {
    createWindow();
  }
});
