class Moving implements Behavior{
    private speed:number;
    private tetrisBlock:tetrisBlock;
    private deg: number;
    private stopMoving:boolean;

    constructor(s:number, t:tetrisBlock){
        this.speed = s;
        this.tetrisBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }

    update(){
        this.move();
    }

    stop(){
        this.tetrisBlock.y = 500;
        this.stopMoving = true;
    }

    onKeyDown(k:string){
        if(k == 'ArrowRight' || k == 'd'){
            this.tetrisBlock.x = this.tetrisBlock.x + 30;
        }
        else if(k == 'ArrowLeft' || k == 'a'){
            this.tetrisBlock.x = this.tetrisBlock.x - 30;
        }
        else if(k == 'ArrowDown' || k == 's'){
            if(this.stopMoving == false){
                console.log(this.tetrisBlock.y);
                this.tetrisBlock.y = this.tetrisBlock.y + 30;
            }
        }
        else if(k == ' '){
            this.deg = this.deg + 90;
            let mainEvent = this.tetrisBlock.div.getBoundingClientRect();
            let mainEventLeft = mainEvent.left;
            console.log(mainEventLeft);
            let restXpos = mainEvent.left % 3;
            console.log(restXpos);
            this.tetrisBlock.x = this.tetrisBlock.x - restXpos;
        }
    }
    private move(){
        this.tetrisBlock.y = this.tetrisBlock.y + 1;
        this.draw();

    }

    private draw(){
        this.tetrisBlock.div.style.transform = "translate("+this.tetrisBlock.x+"px, "+this.tetrisBlock.y+"px) rotate("+this.deg+"deg)"
    }
}