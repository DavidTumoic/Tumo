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

var matrix = [];

function generator(size) {
  for (let i = 0; i <= size; i++) {
      matrix.push([])
      for (let b = 0; b < size; b++) {
        matrix[i].push(0)
        
      }	 
     } 
   }
  
   function generatorEat(count,color,size,ent,arr) {
     console.log("cnvec")
      for (let y = 0; y < count; y++) {
      let x = Math.round( Math.random() * size );
    let y = Math.round( Math.random() * size );
    
    matrix[y][x] = color
    arr.push(new ent(x,y,1))
        //console.log(x,y)
    }
   }

   function fireЕxtinguisher(){
    setTimeout(() => {generatorEat(10,5,size,fireEx,fireExArr)}, 300);
  }
  
  function createFire(){
    setTimeout(() => {generatorEat(10,3,size,Fire,fireArr)}, 1000);
  }
  
  function pred(){
    setTimeout(() => {generatorEat(5,4,size,GrassEaterEater,grassEatEatArr)}, 1000);
    setTimeout(() => {audio.pause();}, 5000);
  }
  
  function grass(){
    setTimeout(() => {generatorEat(100,1,size,Grass,grassArr)
      
    }, 1000);
  
    setTimeout(() => {audio.pause();}, 5000);
  }
  
  function herb(){
    setTimeout(() => {generatorEat(15,2,size,GrassEater,grassEatArr)}, 1000);
  }
  
  
  
  
  function killall(){
    for(let i=0;i<100;i++){
      setTimeout(() => {for (let gr in grassArr) {
        grassArr[gr].die()
      }}, 250);
    
  
      setTimeout(() => {for (var grE in grassEatArr) {
        grassEatArr[grE].die()
      }}, 500);
    
  
    setTimeout(() => {for (var grEE in grassEatEatArr) {
      grassEatEatArr[grEE].die()
    }}, 750);
    
  
    setTimeout(() => {for (var fire in fireArr) {
      fireArr[fire].die()
    }}, 1000);
  
  
    setTimeout(() => {for (var fireEx in fireExArr) {
      fireExArr[fireEx].die()
    }}, 1250);
  
    
    
  }
}

function killFire(){
	for(let i =0;i<10;i++){
	for (var fire in fireArr) {
		fireArr[fire].die()
	}
	}	
	console.log("killed fire")
}

function kill()
{
	hidebuttons("start")
	showbuttons("restart")
	showbuttons("stop")
	showbuttons("button")
	showbuttons("button2")
	showbuttons("buttongrass")
	showbuttons("buttonfire")
	showbuttons("kill")
	showbuttons("killhalf")
	showbuttons("fireЕxtinguisher")

	setTimeout(() => {letsGo()}, 250);



setTimeout(() => {generator(size)}, 500);
}

function start(){
	hidebuttons("start")
	showbuttons("restart")
	showbuttons("stop")
	showbuttons("button")
	showbuttons("button2")
	showbuttons("buttongrass")
	showbuttons("buttonfire")
	showbuttons("kill")
	showbuttons("killhalf")
	showbuttons("fireЕxtinguisher")

	
	
	setTimeout(() => {letsGo()}, 250);



setTimeout(() => {generator(size)}, 500);
	
	

	setTimeout(() => {generatorEat(600,1,size,Grass,grassArr)}, 1000);
	setTimeout(() => {generatorEat(50,2,size,GrassEater,grassEatArr)}, 2000);
	
	setTimeout(() => {generatorEat(25,4,size,GrassEaterEater,grassEatEatArr)}, 9000);


	setTimeout(() => {generatorEat(10,3,size,Fire,fireArr)}, 14000);
	setTimeout(() => {generatorEat(60,5,size,fireEx,fireExArr)}, 40000);

	
}


const grassArr = [];
const grassEatArr = [];
const grassEatEatArr = [];
const fireArr = [];
const fireExArr = [];
var mull = 0;
var play = 0;
function letsGo(){
	//noStroke()
//start()
	
	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if(matrix[y][x]== 1){
				grassArr.push(new Grass(x,y,1))
			}		
		}
		
	}
	

}
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
