const { app, BrowserWindow, Menu } = require('electron'); // Menu - To manipulate the application’s menu


// Function to create the main window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable node integration
      contextIsolation: false, // Disable context isolation (for Electron versions > 12)
    },
  });

  // Load the HTML file into the window
  win.loadFile('index.html');
}

// This event is triggered when Electron finishes initializing
app.whenReady().then(createWindow);

// Close the app when all windows are closed (except for macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate a window on macOS when clicking on the app icon after all windows are closed
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Custom menu template
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        click() {
          console.log('Open clicked');
        }
      },
      {
        label: 'Save',
        click() {
          console.log('Save clicked');
        }
      },
      { type: 'separator' }, // Adds a separator
      {
        label: 'Exit',
        role: 'quit' // 'quit' is a predefined role that closes the app
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        role: 'reload'
      },
      {
        label: 'Toggle Developer Tools',
        role: 'toggleDevTools'
      }
    ]
  },
  // Custom action button
  {
    label: 'Custom Action',
    role: 'toggleDevTools',  // Opens developer tools
    click() {
      console.log('Custom action triggered');
      // Perform your custom logic here
    }
  }
  
];

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');

  // Create the custom menu
  const menu = Menu.buildFromTemplate(menuTemplate);

  // Set the application menu
  Menu.setApplicationMenu(menu);
});

// Modifying Context Menu (Right-click)



