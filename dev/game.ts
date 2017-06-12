///<reference path="observable.ts"/>


class Game implements Observable{
    public static instance:Game;
    private pokemonBlock:GameObject;
    private gameOver: boolean;
    private score:number;
    public pokemonBlocks : Array<GameObject>;

    public observers:Array<Observer>;

    constructor(){
        this.score = 0;
        this.gameOver = false;

        this.pokemonBlocks = new Array<GameObject>();
        this.observers = new Array<Observer>();

        this.addNewPokemonBlock();
        this.scoreBoard(this.score);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.pokemonBlock.move();

        for(let o of this.observers){
            o.setsStylingInPokedex();
        }

        if(!this.gameOver){
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    public static getInstance(){
        if(!Game.instance){
            Game.instance = new Game();
            console.log("New Game: ", Game.instance);
        }
        else{
            console.log('HAVE GAME');
        }
        return Game.instance;
    }

    public addNewPokemonBlock(){
        // let randomNum:number = Math.floor(1);
        let randomNum:number = Math.floor(Math.random() * 3);

        switch (randomNum){
            case 0:
                this.pokemonBlock = new Piplup(this);
                break;
            case 1:
                this.pokemonBlock = new Prinplup(this);
                break;
            case 2:
                this.pokemonBlock = new Empeleon(this);
                break;
        }
    }

    public stopGame(){
        this.gameOver = true;
    }

    public scoreBoard(score:number){
        this.score += score;
        document.getElementById("score").innerHTML = ""+this.score;
    }

    public subscribe(o:Observer):void{
        this.observers.push(o);
    };

    public unsubscribe():void{
        this.observers.splice(0);
    };

}

window.addEventListener("load", function(){
    let game:Game = Game.getInstance();

});