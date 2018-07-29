import { app, BrowserWindow } from 'electron';
import url from 'url';
import path from 'path';
import watch from 'electron-reload';



watch(__dirname);
let mainWindow;

console.log(app)
app.on('ready', () =>{
    //Create Window
    mainWindow = new BrowserWindow({});
    
    //Load index.html file.
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

});
