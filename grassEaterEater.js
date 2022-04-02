const LivingCreature = require("./livingCreature");
 
 module.exports=class GrassEaterEater extends LivingCreature{
    constructor(x, y){
        super(x,y)
        this.energy = 50;

        this.mulEnergy = 70;
        this.defEnergy = 5;
        this.dieEnergy = 0;
    }
    eat(){
        var emptyCells = super.chooseCell(2);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
         
       // const newCell1 = random(this.chooseCell(1));  
        if(newCell){
            var newX = newCell[0]
var newY = newCell[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

this.energy++
        
for(var i in grassEatArr){
    if(newX == grassEatArr[i].x && newY == grassEatArr[i].y){
grassEatArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }/*else if (newCell1){
            var newX = newCell1[0]
var newY = newCell1[1]
matrix[newY][newX] = 4

matrix[this.y][this.x] = 0;

this.x = newX
this.y = newY

// this.energy = this.energy + 0.05
        
for(var i in grassEatEatArr){
    if(newX == grassArr[i].x && newY == grassArr[i].y){
grassArr.splice(i,1)
break;
    }
}
if(this.energy >= this.mulEnergy){
    this.mulGEat();
}
        }*/
        else{
            this.move();
        }
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

    die(){
        for(var i  in grassEatEatArr){
            if(this.x == grassEatEatArr[i].x && this.y ==grassEatEatArr[i].y){
                grassEatEatArr.splice(i,1)
                break;
            }
            
                }
                matrix[this.y][this.x] = 0
            }

    


     mulGEat(){
    
         const newCell = random(this.chooseCell(0));
         const newCell1 = random(this.chooseCell(1));
         const newCell2 = random(this.chooseCell(2));
         if(newCell && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
                this.mulEnergy++
                }
         }else if(newCell1 && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
            this.mulEnergy++
            }
         }
         else if(newCell2 && this.energy >= this.mulEnergy){
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 4
            grassEatEatArr.push(new GrassEaterEater(newX, newY,this.energy,this.mulEnergy))
            this.energy = this.defEnergy
            if(this.mulEnergy < 200){
                this.mulEnergy++
                }
         }
     }
}