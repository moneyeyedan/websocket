const WebSocket = require('ws');
// const express = require('express'),app = express();
// const bodyparser = require('body-parser');
// app.use(bodyparser.json())
//  app.get("/websocket",(req,res)=>{
    const ws = new WebSocket('ws://localhost:8000')
 
    ws.on('open', function open() {
      ws.send('i am client');
    });
     
    ws.on('message', function incoming(data) {
    //   res.json(JSON.parse(data));
      console.log(data);
    });
//  })
// var http = require('http').createServer(app).listen(5000,()=>{
//     console.log("port is running ")
// })