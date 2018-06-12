const {app,BrowserWindow,ipcMain}=require('electron');

let win
var data=[];

function createWindow(){
  var win= new BrowserWindow({
    width:850,
    height:470,
    resizable:false,
    frame:false

  })
  win.loadURL('file://'+__dirname+'/index.html')
  win.on('close',()=>{
    win=null
  })

  ipcMain.on('item:check',function(e,i){
  win.webContents.send('item:check',data);
});
}



ipcMain.on('item:path',function(e,item){
  console.log(item);
  data.push(item);
  console.log(data);
});




app.on('ready',createWindow)
