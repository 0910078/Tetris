class StopMoving implements Behavior{
    private pokemonBlock : GameObject;
    private game:Game = Game.instance;

    constructor(tb: GameObject) {
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
            if(this.pokemonBlock instanceof Piplup){
                this.game.scoreBoard(10);
            }
            else if(this.pokemonBlock instanceof Prinplup){
                this.game.scoreBoard(20);
            }

            else if(this.pokemonBlock instanceof Empeleon){
                this.game.scoreBoard(40);
            }
    }

    onKeyDown(e:number){};
}