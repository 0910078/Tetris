class StopMoving implements Behavior{
    private tetrisBlock : TetrisBlock;

    constructor(tb: TetrisBlock){
        this.tetrisBlock = tb;
    }

    update(){
        let g: Game = Game.getInstance();
        if(this.tetrisBlock.y > 0){
            Game.tetrisBlocks.push(this.tetrisBlock);
            g.addNewTetrisBlock();
        }
        else{
            g.stopGame();
        }

    };

    stop(){};
    onKeyDown(e:string){};
}