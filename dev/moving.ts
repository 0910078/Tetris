enum Keys{
    RIGHT = 39,
    LEFT = 37,
    A = 65,
    D = 68
}

class Moving implements Behavior{
    private pokemonBlock:GameObject;
    private deg: number;
    private stopMoving:boolean;

    constructor(t:GameObject){
        this.pokemonBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }

    update(){
        this.move();
    }

    private stopCurrentPokemonBlock(){
        this.pokemonBlock.behavior = new StopMoving(this.pokemonBlock);
    }

    onKeyDown(k:number){
        let xtarget:number = 0;
        let ytarget:number = 0;

        if(k == Keys.RIGHT || k == Keys.D){
            xtarget = 30;
        }
        else if(k == Keys.LEFT || k == Keys.A){
            xtarget = -30;
        }
        this.moveBlock(xtarget, ytarget);
    }

    private move(){
        this.moveBlock(0,30);
        this.draw();
    }

    public draw(){
        this.pokemonBlock.div.style.transform = "translate("+this.pokemonBlock.x+"px, "+this.pokemonBlock.y+"px) rotate("+this.deg+"deg)"
    }

    private moveBlock(xDirection, yDirection){
        let hit:boolean = false;
        let game = Game.instance;

        let targetObject:FakeObject = new FakeObject();
        this.setsPropertiesFakeObject(targetObject, xDirection, yDirection);

        if(Util.CollisionGrid.checkCollision(targetObject)){
            hit = true;
            this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
        }

        for(let pokemonBlock of game.pokemonBlocks) {
            if (Util.CollisionPokemonBlock.checkCollision(pokemonBlock, targetObject)) {
                hit = true;
                this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
            }
        }

        this.pokemonBlock.x = targetObject.x;
        this.pokemonBlock.y = targetObject.y;
    }

    private setsPropertiesFakeObject(targetObject, xDirection, yDirection){
        targetObject.x = this.pokemonBlock.x + xDirection;
        targetObject.y = this.pokemonBlock.y + yDirection;
        targetObject.height = this.pokemonBlock.height;
        targetObject.width = this.pokemonBlock.width;
    }

    private checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject){
        console.log("checkHITS");
        if(hit){
            if(xDirection > 0 || xDirection < 0){
                targetObject.x = this.pokemonBlock.x;
            }

            if(yDirection > 0){
                targetObject.y = this.pokemonBlock.y;
                this.stopCurrentPokemonBlock();
            }
        }
    }
}