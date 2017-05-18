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
        let xtarget = this.tetrisBlock.x;
        let ytarget = this.tetrisBlock.y;

        if(k == 'ArrowRight' || k == 'd'){
            xtarget += 30;
        }
        else if(k == 'ArrowLeft' || k == 'a'){
            xtarget -= 30;
        }
        else if(k == 'ArrowDown' || k == 's'){
            ytarget += 30;
        }

        if(!Util.checkCollisionGrid(this.tetrisBlock, xtarget, ytarget)){
            this.tetrisBlock.x = xtarget;
            this.tetrisBlock.y = ytarget;
        }

        this.draw();

        if(k == ' '){
            this.deg = this.deg + 90;
            let mainEvent = this.tetrisBlock.div.getBoundingClientRect();
            let mainEventLeft = mainEvent.left;
            let restXpos = mainEvent.left % 30;
            // this.tetrisBlock.x = this.tetrisBlock.x - restXpos;
            this.draw();
        }
    }

    private move(){
        let ytarget = this.tetrisBlock.y;
        ytarget += 30;

        if(!Util.checkCollisionGrid(this.tetrisBlock, 0, ytarget)){
            this.tetrisBlock.y = ytarget;
            this.draw();
        }
        else{
            this.stop();
        }

    }

    private draw(){
        this.tetrisBlock.div.style.transform = "translate("+this.tetrisBlock.x+"px, "+this.tetrisBlock.y+"px) rotate("+this.deg+"deg)"
    }
}