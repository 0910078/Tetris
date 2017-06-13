abstract class GameObject{
    protected _div:HTMLElement;
    protected _height:number;
    protected _width:number;
    protected _x:number;
    protected _y:number;

    constructor(){}

    public get height():number{
        return this._height
    }

    public set height(v:number){
        this._height = v;
    }

    public get width():number{
        return this._width
    }

    public set width(v:number){
        this._width = v;
    }

    public get x():number{
        return this._x
    }

    public set x(v:number){
        this._x = v;
    }

    public get y():number{
        return this._y;
    }

    public set y(v:number){
        this._y = v;
    }

    public get div():HTMLElement{
        return this._div;
    }

    public set div(v: HTMLElement) {
        this._div = v;
    }

    public behavior:Behavior;

    public abstract setsPropertiesBlock(game:Game);
    public abstract move();
    public abstract onKeyDown(e: KeyboardEvent);
}