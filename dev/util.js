var Util;
(function (Util) {
    var CollisionPokemonBlock = (function () {
        function CollisionPokemonBlock() {
        }
        CollisionPokemonBlock.checkCollision = function (go1, go2) {
            return (go1.x < go2.x + go2.width &&
                go1.x + go1.width > go2.x &&
                go1.y < go2.y + go2.height &&
                go1.height + go1.y > go2.y);
        };
        return CollisionPokemonBlock;
    }());
    Util.CollisionPokemonBlock = CollisionPokemonBlock;
    var CollisionGrid = (function () {
        function CollisionGrid() {
        }
        CollisionGrid.checkCollision = function (g1) {
            return (g1.x < 0 || (g1.x + g1.width) > 600 || g1.y + g1.height > 600);
        };
        return CollisionGrid;
    }());
    Util.CollisionGrid = CollisionGrid;
})(Util || (Util = {}));
