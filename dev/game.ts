class Game {
    private static instance:Game;
    private tetrisBlock:TetrisBlock;

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

}

window.addEventListener("load", function(){
    let g:Game = Game.getInstance();
});