const LivingCreature = require("./livingCreature");

 module.exports =class GrassEater extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 50;

    this.mulEnergy = 150;
    this.defEnergy = 5;
    this.dieEnergy = 0;
  }


	move() {
		var emptyCells = super.chooseCell(0);
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
  mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2
			grassEatArr.push(new GrassEater(newX, newY, 2))
			this.energy = 6;
		}
	}
  
  
  eat() {
		var grassCells = super.chooseCell(1);
		var newCell = grassCells[Math.floor(Math.random() * grassCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in grassArr) {
				if (grassArr[i].x == newX && grassArr[i].y == newY) {
					grassArr.splice(i, 1)
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= 12) {
				this.mul();
			}

		}
		else {
			this.move();
		}
	}

  // move() {
  //   const newCell = random(this.chooseCell(0));
  //   const newCell2 = random(this.chooseCell(2));
  //   if (newCell) {
  //     var newX = newCell[0];
  //     var newY = newCell[1];
  //     matrix[newY][newX] = 2;

  //     matrix[this.y][this.x] = 0;

  //     this.x = newX;
  //     this.y = newY;

  //     this.energy--;
  //   } else if (newCell2) {
  //     var newX = newCell2[0];
  //     var newY = newCell2[1];
  //     matrix[newY][newX] = 2;

  //     matrix[this.y][this.x] = 2;

  //     this.x = newX;
  //     this.y = newY;

  //     this.energy--;
  //   }
  //   if (this.energy < this.dieEnergy) {
  //     this.die();
  //   }
  // }

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in grassEatArr) {
			if (grassEatArr[i].x == this.x && grassEatArr[i].y == this.y) {
				grassEatArr.splice(i, 1)
			}
		}
	}
}
