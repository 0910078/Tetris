class Game {
    private static instance:Game;
    private tetrisBlock:tetrisBlock;

    constructor(){
        this.tetrisBlock = new tetrisBlock();
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

}

window.addEventListener("load", function(){
    let g:Game = Game.getInstance();
});