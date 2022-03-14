class GrassEater extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 50;

    this.mulEnergy = 150;
    this.defEnergy = 5;
    this.dieEnergy = 0;
  }

  eat() {
    const newCell = random(this.chooseCell(1));
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 2;

      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      this.energy = this.energy + 2;

      for (var i in grassEatArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      if (this.energy >= this.mulEnergy) {
        this.mulGEat();
      }
    } else {
      this.move();
    }
  }

  move() {
    const newCell = random(this.chooseCell(0));
    const newCell2 = random(this.chooseCell(2));
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 2;

      matrix[this.y][this.x] = 0;

      this.x = newX;
      this.y = newY;

      this.energy--;
    } else if (newCell2) {
      var newX = newCell2[0];
      var newY = newCell2[1];
      matrix[newY][newX] = 2;

      matrix[this.y][this.x] = 2;

      this.x = newX;
      this.y = newY;

      this.energy--;
    }
    if (this.energy < this.dieEnergy) {
      this.die();
    }
  }

  die() {
    for (var i in grassEatArr) {
      if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
        grassEatArr.splice(i, 1);
        break;
      }
    }
    matrix[this.y][this.x] = 0;
  }

  mulGEat() {
    const newCell = random(this.chooseCell(0));
    if (newCell && this.energy >= this.mulEnergy) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[newY][newX] = 2;
      grassEatArr.push(new GrassEater(newX, newY, this.energy, this.mulEnergy));
      this.energy = this.defEnergy;
    }
  }
}
