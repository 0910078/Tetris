///<reference path="gameObject.ts"/>
///<reference path="observer.ts"/>

class Piplup extends GameObject implements Observer{

    private timer:number;
    public behavior: Behavior;

    constructor(g:Game){
        super();

        this.timer = 0;
        this.behavior = new Moving(this);

        this.setsPropertiesBlock(g);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    setsPropertiesBlock(game){
        this.y = 0;
        this.x = 270;
        this.width = 60;
        this.height = 60;

        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        this.div.className = 'container_piplup';

        let grid:HTMLElement = document.getElementById('grid');
        grid.appendChild(this.div);

        game.subscribe(this)
    }

    move(){
        this.timer = this.timer + 5;

        if(this.timer > 60){
            this.behavior.update();
            this.timer = 0;
        }
    }

    onKeyDown(e: KeyboardEvent): void{
        this.behavior.onKeyDown(e.keyCode);
    }

    public setsStylingInPokedex(){
        console.log('setsPokedex');
        let pokedexInfo = document.getElementById('pokemonName');
        let pokedexImage = document.getElementById('pokemonGif');

        pokedexImage.className = "piplup";
        pokedexImage.style.width = "30px";
        pokedexImage.style.height = "41px";

        pokedexInfo.innerText = "Piplup";
    }

}