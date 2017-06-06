class Moving implements Behavior{
    private speed:number;
    private tetrisBlock:TetrisBlock;
    private deg: number;
    private stopMoving:boolean;

    constructor(s:number, t:TetrisBlock){
        this.speed = s;
        this.tetrisBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }

    update(){
        this.move();
    }

    stop(){
        this.tetrisBlock.behavior = new StopMoving(this.tetrisBlock);
    }

    public onKeyDown(k:string){
        let xtarget:number = 0;
        let ytarget:number = 0;

        if(k == 'ArrowRight' || k == 'd'){
            xtarget = 30;
        }
        else if(k == 'ArrowLeft' || k == 'a'){
            xtarget = -30;
        }
        else if(k == 'ArrowDown' || k == 's'){
           // ytarget = 30;
        }

        this.moveBlock(xtarget, ytarget);


        //console.log(this.tetrisBlock);
       // if(k == ' '){
       //     this.deg = this.deg + 90;
        //    this.draw();
       // }
    }

    private moveBlock(xDirection, yDirection){
        let hit = false;


        let targetObject = new FakeObject();
        targetObject.x = this.tetrisBlock.x + xDirection;
        targetObject.y = this.tetrisBlock.y + yDirection;
        targetObject.height = this.tetrisBlock.height;
        targetObject.width = this.tetrisBlock.width;

        hit = (Util.checkCollisionGrid(targetObject));
        console.log("grid is", hit);

        for(let tetrisBlock of Game.tetrisBlocks) {
            if (Util.checkCollision(tetrisBlock, targetObject)) {
                console.log(hit);
                hit = true;
            }
        }

        console.log("hit other block: ", hit);
        // nu weten we of er een hlock geraakt wordt
        if(hit){
            // we raken iets, als het door x komt dan wel doorgaan en x op 0 zetten
            // als het door y komt dan stoppen
            if(xDirection > 0 || xDirection < 0){
                targetObject.x = this.tetrisBlock.x;
            }

            if(yDirection > 0){
                this.stop();
                console.log("Y COST COLLISION");
                targetObject.y = this.tetrisBlock.y;
            }
            // probleem, niet stoppen als je naar links of rechts gaat

        }
        this.tetrisBlock.x = targetObject.x;
        this.tetrisBlock.y = targetObject.y;

    }

    private move(){
        this.moveBlock(0,30);
        this.draw();
    }

    private draw(){
        this.tetrisBlock.div.style.transform = "translate("+this.tetrisBlock.x+"px, "+this.tetrisBlock.y+"px) rotate("+this.deg+"deg)"
    }
}