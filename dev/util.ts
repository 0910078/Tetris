class Util{
    public static checkCollision(g1: GameObject, g2: GameObject):boolean{

        return (g1.x < g2.x + g2.width &&
            g1.x + g1.width > g2.x &&
            g1.y < g2.y + g2.height &&
            g1.height + g1.y > g2.y)
    }

    public static checkCollisionGrid(g1: GameObject, xt: number, yt: number):boolean{
        // width: 300px, height: 600px
        // console.log(g1.x + "," + g1.width);
        console.log(xt + g1.width);
        // console.log("links buiten " + (g1.x < 0));
        // console.log("rechts buiten " + (xt + g1.width > 300));

        return(g1.x + xt < 0 || (xt + g1.width) > 300 || yt + g1.height > 600)

        // if(!g1.x < container.x + container.width &&
        //     g1.x + g1.width > container.x &&
        //     g1.y < container.y + container.height &&
        //     g1.height + g1.y > container.y){
        //     return true;
        // }
    }
}