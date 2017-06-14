class Moving implements Behavior{
    private pokemonBlock:GameObject;
    private stopMoving:boolean;

    constructor(t:GameObject){
        this.pokemonBlock = t;
        this.stopMoving = false;
    }

    update(){
        this.move();
    }

    private stopCurrentPokemonBlock(){
        this.pokemonBlock.behavior = new StopMoving(this.pokemonBlock);
    }

    onKeyDown(e:number){
        let xtarget:number = 0;
        let ytarget:number = 0;

        if(e == Util.Keys.RIGHT || e == Util.Keys.D){
            xtarget = 30;
        }
        else if(e == Util.Keys.LEFT || e == Util.Keys.A){
            xtarget = -30;
        }
        this.moveBlock(xtarget, ytarget);
    }

    private move(){
        this.moveBlock(0,30);
        this.draw();
    }

    public draw(){
        this.pokemonBlock.div.style.transform = "translate("+this.pokemonBlock.x+"px, "+this.pokemonBlock.y+"px)"
    }

    private moveBlock(xDirection: number, yDirection:number){
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

    private setsPropertiesFakeObject(targetObject:FakeObject, xDirection:number, yDirection:number){
        targetObject.x = this.pokemonBlock.x + xDirection;
        targetObject.y = this.pokemonBlock.y + yDirection;
        targetObject.height = this.pokemonBlock.height;
        targetObject.width = this.pokemonBlock.width;
    }

    private checkHitDetectionOnPokemonBlock(hit:boolean, xDirection:number, yDirection:number, targetObject:FakeGameObject){
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