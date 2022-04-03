const LivingCreature = require("./livingCreature");
 
 module.exports=class GrassEaterEater extends LivingCreature{
    constructor(x, y){
        super(x,y)
        this.energy = 50;
        this.mulEnergy = 70;
        this.defEnergy = 5;
        this.dieEnergy = 0;
    }
    eat() {
		var grassCells = super.chooseCell(2);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in grassEatArr) {
				if (grassEatArr[i].x == newX && grassEatArr[i].y == newY) {
					grassEatArr.splice(i, 1)
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= this.mulEnergy) {
				this.mul();
			}

		}
		else {
			this.move();
		}
	}

    move() {
		var emptyCells = super.chooseCell(1);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}

    die(){
        for(var i  in grassEatEatArr){
            if(this.x == grassEatEatArr[i].x && this.y ==grassEatEatArr[i].y){
                grassEatEatArr.splice(i,1)
                break;
            }
            
                }
                matrix[this.y][this.x] = 0
            }

    


            mul() {
                var emptyCells = super.chooseCell(0);
                var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        
                if (newCell) {
                    var newX = newCell[0];
                    var newY = newCell[1];
                    matrix[newY][newX] = 3
                    grassEatEatArr.push(new GrassEaterEater(newX, newY, 3))
                    this.energy = 6;
                }
            }
        }
