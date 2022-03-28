var socket = io()


function fireЕxtinguisher(){
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();
}

function createFire(){
	var audio = new Audio('./sound/feuer.ogg');
	audio.play();
}

function pred(){
	var audio = new Audio('./sound/T-Rex Attack - QuickSounds.com.ogg');
	audio.play();
}

function grass(){
	var audio = new Audio('./sound/Footsteps-in-grass-moderate-A-www.fesliyanstudios.com.ogg');
	audio.play();
}

function herb(){
	var audio = new Audio('./sound/Indian Elephant 2 - QuickSounds.com.ogg');
	audio.play();
}

function restart(){
	// killall()
	// // stop()
	// //erase();
	// setTimeout(() => {start()}, 3000);

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html?action=restart")}, 3000);

	
	
}
function stop(){

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html")}, 3000);
	
}
function killFire(){
	var audio = new Audio('./sound/Blastwave_FX_FireExtinguisher_BW.4175.ogg');
	audio.play();

}

function showbuttons(id){
	var button = document.getElementById(id);
	
	// get the current value of the clock's display property
	var displaySetting = button.style.display;
	// now toggle the clock and the button text, depending on current state
	
	  // clock is visible. hide it
	  button.style.display = 'block';
	
}

function hidebuttons(id){
	var button = document.getElementById(id);
	
	// get the current value of the clock's display property
	var displaySetting = button.style.display;
	// now toggle the clock and the button text, depending on current state

	  // clock is visible. hide it
	  button.style.display = 'none';
	
}

function setkill(){

	var audio = new Audio('./sound/cinema-drum-hit-SBA-300419703-preview.ogg');
	audio.play();
	setTimeout(() => {window.location.replace("./index.html?action=killall")}, 3000);
	
}




function start(playsound){
	if(playsound){
	//stop()
	var audio = new Audio('./sound/243020__plasterbrain__game-start.ogg');
	audio.play();
	}
}

const side = 10;
const size = 50


function setup(){
	//noStroke()
//start()
createCanvas(size * side , size * side )
	frameRate(30)
	background("#222222")
  
}
// socket.on("senc matrix",matrix)


function drawww(matrix){
	
	for (let y = 0; y < matrix.length; y++) {
		//const element = array[y];
		for (let x = 0; x < matrix[y].length; x++) {
			//const element = array[x];
			if(matrix[y][x]== 1){
				fill("green")
			}else if(matrix[y][x]== 2){
				fill("yellow")
			
			
			}else if(matrix[y][x]== 3){
				fill("orange")
			}else if(matrix[y][x]==4){
fill("red")
			}else if(matrix[y][x]==5){
				fill("white")
			}
			else{
				fill("#222222")
			}
rect(x * side,y*side,side,side)
		}
	}


	
}
socket.on("send matrix", drawww)

// var grass1 = new Grass(1,2,1)
// console.log(grass1)
// var emptyCells = grass1.chooseCell(0)
// console.log(emptyCells)