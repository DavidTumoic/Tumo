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




  
function game(){
  for (let gr in grassArr) {
    grassArr[gr].mul();
  }
  for (var grE in grassEatArr) {
    grassEatArr[grE].eat();
  }
  for (var grEE in grassEatEatArr) {
    grassEatEatArr[grEE].eat();
  }
  for (var fire in fireArr) {
    fireArr[fire].eat();  
  }
  for (var fireEx in fireExArr) {
    fireExArr[fireEx].eat();
  }
}
setInterval(game,1000)


io.on('connection', function (socket) {
  game(matrix)
})