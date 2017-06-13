namespace Util {
    export class CollisionPokemonBlock {
        public static checkCollision(go1: GameObject, go2: FakeGameObject): boolean {
            return (go1.x < go2.x + go2.width &&
            go1.x + go1.width > go2.x &&
            go1.y < go2.y + go2.height &&
            go1.height + go1.y > go2.y)
        }
    }

    export class CollisionGrid {
        public static checkCollision(g1: FakeGameObject): boolean {
            return (g1.x < 0 || (g1.x + g1.width) > 600 || g1.y + g1.height > 600);
        }
    }

    export class GameOverEffect{
        public static effects(){
            let gameOver = document.getElementById('gameOver');
            TweenLite.to(gameOver, 3, {x:0, y:300,ease:Bounce.easeInOut});

        }
    }
}