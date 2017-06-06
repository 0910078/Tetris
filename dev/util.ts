class Util{
    public static checkCollision(go1:GameObject, go2:GameObject):boolean {
        return (go1.x < go2.x + go2.width &&
        go1.x + go1.width > go2.x &&
        go1.y < go2.y + go2.height &&
        go1.height + go1.y  > go2.y)
    }

    public static checkCollisionGrid(g1: GameObject):boolean{
        return(g1.x < 0 || (g1.x + g1.width) > 300 || g1.y + g1.height > 600)
    }


}