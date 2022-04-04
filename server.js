var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);
Grass = require("./Grass")
GrassEater = require("./GrassEater")
GrassEaterEater =  require("./grassEaterEater")
Fire = require("./fire")
FireEx = require("./fireEx")


matrix = [];
grassArr = [];
grassEatArr = [];
grassEatEatArr = [];
fireArr = [];
fireExArr = [];
size = 20
fireEx = 5
function generator(size) {
  for (let i = 0; i <= size; i++) {
    matrix.push([])
    for (let b = 0; b < size; b++) {
      matrix[i].push(0)

    }
  }
}
var n = 50;
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = Math.floor(rand(0, 5))

  }
}
function createObject() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        matrix[y][x] = 1
        grassArr.push(new Grass(x, y, 1))
      }
      setTimeout(() => {

       
      }, 2000);
       if (matrix[y][x] == 2) {
        matrix[y][x] = 2
        grassEatArr.push(new GrassEater(x, y, 2))
      }
      setTimeout(() => {
       
      }, 4000);
      if (matrix[y][x] == 3) {
        matrix[y][x] = 3
        grassEatEatArr.push(new GrassEaterEater(x, y, 3))
      } 
      setTimeout(() => {
  
       }, 7500);

       if (matrix[y][x] == 4) {
        matrix[y][x] = 4
        fireArr.push(new Fire(x, y, 4))
      }
       setTimeout(() => {

       }, 10000);

       if (matrix[y][x] == 5) {
        matrix[y][x] = 5
        fireExArr.push(new FireEx(x, y, 5))
      }

    }
  }
  io.sockets.emit('send matrix', matrix)
}
function xax() {

  for (let gr in grassArr) {
    grassArr[gr].mul()
  }
  for (var grE in grassEatArr) {
    grassEatArr[grE].eat()
  }
  for (var grEE in grassEatEatArr) {
    grassEatEatArr[grEE].eat()
  }
  for (var fire in fireArr) {
    fireArr[fire].eat()
  }
  for (var fireEx in fireExArr) {
    fireExArr[fireEx].eat()
  }
  io.sockets.emit("send matrix", matrix)

}
setInterval(xax, 100);



function killall() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      for (let gr in grassArr) {
        grassArr[gr].die()
      }
    }, 250);


    setTimeout(() => {
      for (var grE in grassEatArr) {
        grassEatArr[grE].die()
      }
    }, 500);


    setTimeout(() => {
      for (var grEE in grassEatEatArr) {
        grassEatEatArr[grEE].die()
      }
    }, 750);


    setTimeout(() => {
      for (var fire in fireArr) {
        fireArr[fire].die()
      }
    }, 1000);


    setTimeout(() => {
      for (var fireEx in fireExArr) {
        fireExArr[fireEx].die()
      }
    }, 1250);



  }
}

function killFire() {
  for (let i = 0; i < 10; i++) {
    for (var fire in fireArr) {
      fireArr[fire].die()
    }
  }
  console.log("killed fire")
}

function kill() {
  setTimeout(() => { letsGo() }, 250);



  setTimeout(() => { generator(size) }, 500);
}




var mull = 0;
var play = 0;
function letsGo() {
  //noStroke()
  //start()

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        grassArr.push(new Grass(x, y, 1))
      }
    }

  }


}



io.on("connection", function (socket) {
  createObject()
  
})