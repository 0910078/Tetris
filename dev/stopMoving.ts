class StopMoving implements Behavior{
    private tetrisBlock : TetrisBlock;

    constructor(tb: TetrisBlock){
        this.tetrisBlock = tb;
    }

    update(){
        let g: Game = Game.getInstance();
        g.addNewTetrisBlock()
    };

    stop(){};
    onKeyDown(e:string){};
}