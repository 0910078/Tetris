///<reference path="gameObject.ts"/>

class TetrisBlock extends GameObject{

    private randomBlock:Array<string> = ['red', 'green', 'yellow', 'lightBlue', 'blue', 'purple', 'orange'];
    public blocks:Array<Blocks>;
    private speed: number;
    public behavior: Behavior;
    private timer: number;

    constructor(){
        super();
        this.div = document.createElement('containerBlock');
        this.blocks = new Array<Blocks>();
        this.speed = 10;
        this.y = 0;
        this.x = 0;
        this.timer = 0;
        this.behavior = new Moving(this.speed, this);

        this.generateBlock();
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    private generateBlock(){

        let randomNum = Math.floor(Math.random() * 7);
        let blockColor = this.randomBlock[2];

        this.setsPropertyTetrisBlock(blockColor);

        this.div.className = 'container_' + blockColor;

        for(let i = 0; i < 4; i++){
            this.blocks.push(new Blocks(blockColor));
        }
        
        this.setsPropertyBlocks(blockColor);

        for(let block of this.blocks){
            this.div.appendChild(block.div);
        }

        let grid = document.getElementById('grid');
        grid.appendChild(this.div);

    }

    public move(){
        this.timer = this.timer + 3;

        if(this.timer > 60){
            this.behavior.update();
            this.timer = 0;
        }
    }

    private onKeyDown(e: KeyboardEvent): void{
        this.behavior.onKeyDown(e.key);
        // console.log(this.y);
    }

    private setsPropertyTetrisBlock(c:string){
        if(c == 'yellow'){
            this.width = 60;
            this.height = 60;
        }
        else if(c == 'lightBlue'){
            this.width = 30;
            this.height = 120;
        }
        else{
            this.width = 90;
            this.height = 60;
        }
    }
    
    private setsPropertyBlocks(c:string){
        if(c == 'yellow'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 30;
            this.blocks[1].x = 30;
            this.blocks[2].x = 60;
            this.blocks[3].x = 60;
        }
        else if(c == 'red'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 30;
            this.blocks[1].x = 60;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if(c == 'green'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if(c == 'lightBlue'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 30;
            this.blocks[3].y = 60;

            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if(c == 'blue'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if(c == 'orange'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
        else if(c == 'purple'){
            this.blocks[0].y = 0;
            this.blocks[1].y = 0;
            this.blocks[2].y = 0;
            this.blocks[3].y = 0;

            this.blocks[0].x = 0;
            this.blocks[1].x = 0;
            this.blocks[2].x = 30;
            this.blocks[3].x = 30;
        }
    }




}