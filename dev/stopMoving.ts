class StopMoving implements Behavior{
    private pokemonBlock : GameObject;
    private className: string;
    private game:Game = Game.instance;

    constructor(tb: GameObject) {
        this.className = tb.div.className;
        this.pokemonBlock = tb;
    }

    update(){
        if(this.pokemonBlock.y > 0){
            this.addScore();
            this.game.pokemonBlocks.push(this.pokemonBlock);
            this.game.addNewPokemonBlock();
        }
        else{
            this.game.unsubscribe();
            this.game.stopGame();
        }
    };

    private addScore(){
        if(this.className == 'container_piplup'){
            this.game.scoreBoard(10);
        }
        else if(this.className == 'container_prinplup'){
            this.game.scoreBoard(20);
        }
        else{
            this.game.scoreBoard(40);
        }
    }

    onKeyDown(e:number){};
}