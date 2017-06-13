///<reference path="gameObject.ts"/>

class Empeleon extends GameObject implements Observer{


    private timer:number;
    public behavior: Behavior;

    constructor(g:Game){
        super();

        this.timer = 0;
        this.behavior = new Moving(this);

        this.setsPropertiesBlock(g);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    setsPropertiesBlock(game:Game){
        this.y = 0;
        this.x = 270;
        this.width = 120;
        this.height = 120;

        this.div = document.createElement('containerBlock');
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        this.div.className = 'container_empeleon';

        let grid:HTMLElement = document.getElementById('grid');
        grid.appendChild(this.div);

        game.subscribe(this);
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

    setsStylingInPokedex(){
        let pokedexInfo = document.getElementById('pokemonName');
        let pokedexImage = document.getElementById('pokemonGif');

        pokedexImage.className = "empoleon";
        pokedexImage.style.width = "60px";
        pokedexImage.style.height = "60px";
        pokedexImage.style.top = "70%";

        pokedexInfo.innerText = "Empoleon";
    }

}