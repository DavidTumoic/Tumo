const Fire = require("./fire");
const LivingCreature = require("./livingCreature");

module.exports = class fireEx extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 10;
    this.mulEnergy = 100;
    this.defEnergy = 5;
    this.dieEnergy = 50;
    this.play = 0;
    this.killer = 0;
  }

  eat() {
    var emptyCells = super.chooseCell(3);
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 5;

      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      this.energy += 10;
      mull--;

      for (var i in fireArr) {
        if (newX == fireArr[i].x && newY == fireArr[i].y) {
          fireArr.splice(i, 1);
          break;
        }
      }
      if (this.energy >= this.mulEnergy) {
      }
    } else {
      this.move();
    }
  }

  move() {
    var emptyCells = super.chooseCell(1);
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 5;

      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      this.play++;
    } /*else if(newCell2){
    var newX = newCell[0]
    var newY = newCell[1]
    matrix[newY][newX] = 2
    
    matrix[this.y][this.x] = 2;
    
    this.x = newX
    this.y = newY
    
    this.energy-- 
}*/
    if (this.play > this.dieEnergy) {
      this.die();
    }
  }

  die() {
    for (var i in fireExArr) {
      if (this.x == fireExArr[i].x && this.y == fireExArr[i].y) {
        fireExArr.splice(i, 1);
        break;
      }
    }
    matrix[this.y][this.x] = 0;
  }

  mul() {
    var emptyCells = super.chooseCell(0);
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 5;
      fireExArr.push(new Fire(newX, newY, 2));
      this.energy = 10;
    }
  }
};
