const express = require("express");
const app = express();
const path = require("path");

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/Scripts/jquery-1.10.2.min.js',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Scripts/jquery-1.10.2.min.js'));
});

app.get('/Scripts/jquery.signalR-2.2.2.min.js',(req,res)=>{
    res.sendFile(path.join(__dirname+'/Scripts/jquery.signalR-2.2.2.min.js'));
});

app.get('/signalr/hubs',(req,res)=>{
    res.sendFile(path.join(__dirname+'/signalr/hubs'));
});

const port = process.env.PORT || 1337;
app.listen(port,() => console.log("Server running at http://locahost:%d",port));

