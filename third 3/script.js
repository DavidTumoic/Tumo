var socket = io();

var side = 10;

function setup() {
    createCanvas(50 * side, 50 * side);
    background("pink");
}

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            var obj = matrix[y][x];
            if (obj == 0){
                fill("grey")
            }
            else if (obj == 1) {
                fill("green");
            }
            else if (obj == 2) {
                fill("yellow");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

        socket.on('send matrix', nkarel)
 

/* let button1 = document.getElementById('button1')
button1.addEventListener('click', kill) */

function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}