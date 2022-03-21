var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

 var matrix = [];

function generator(size) {
    for (let i = 0; i <= size; i++) {
      matrix.push([]);
      for (let b = 0; b < size; b++) {
        matrix[i].push(0);
      }
    }
}

io.sockets.emit('send matrix', matrix)

const grassArr = [];
const grassEatArr = [];
const grassEatEatArr = [];
const fireArr = [];
const fireExArr = [];

Grass = require("./Grass");
GrassEater = require("./grassEater")
GrassEaterEater = require("./grassEaterEater")
Fire = require("./fire")
FireEx = require("./fireEx")


function generatorEat(count, color, size, ent, arr) {
    console.log("cnvec");
    for (let y = 0; y < count; y++) {
      let x = Math.round(Math.random() * size);
      let y = Math.round(Math.random() * size);
  
      matrix[y][x] = color;
      arr.push(new ent(x, y, 1));
      //console.log(x,y)
    }
  }
