///<reference path="gameObject.ts"/>

class Blocks extends GameObject{

    private tb: TetrisBlock;

    constructor(c:string){
        super();
        this.height = 30;
        this.width = 30;
        this.blockColor = c;
        this.div = document.createElement('block');
        this.div.className = this.blockColor;
    }


}