class Game {
    private static instance:Game;
    private tetrisBlock:TetrisBlock;
    // static weg
    // Game.getInstance().tetrisBlocks;
    public static tetrisBlocks : Array<TetrisBlock> = new Array<TetrisBlock>();

    constructor(){
        this.tetrisBlock = new TetrisBlock();
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.tetrisBlock.move();
        requestAnimationFrame(() => this.gameLoop());
    }

    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }

    public addNewTetrisBlock(){
        this.tetrisBlock = new TetrisBlock();
    }

    public stopGame(){
        console.log("Game OVER!");
        requestAnimationFrame(() => false);
    }

}

window.addEventListener("load", function(){
    let g:Game = Game.getInstance();
});