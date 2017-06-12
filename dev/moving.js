var Keys;
(function (Keys) {
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["A"] = 65] = "A";
    Keys[Keys["D"] = 68] = "D";
})(Keys || (Keys = {}));
var Moving = (function () {
    function Moving(t) {
        this.pokemonBlock = t;
        this.game = Game.instance;
        this.deg = 0;
        this.stopMoving = false;
    }
    Moving.prototype.update = function () {
        this.move();
    };
    Moving.prototype.stopCurrentPokemonBlock = function () {
        this.pokemonBlock.behavior = new StopMoving(this.pokemonBlock);
    };
    Moving.prototype.onKeyDown = function (k) {
        var xtarget = 0;
        var ytarget = 0;
        if (k == Keys.RIGHT || k == Keys.D) {
            xtarget = 30;
        }
        else if (k == Keys.LEFT || k == Keys.A) {
            xtarget = -30;
        }
        this.moveBlock(xtarget, ytarget);
    };
    Moving.prototype.move = function () {
        this.moveBlock(0, 30);
        this.draw();
    };
    Moving.prototype.draw = function () {
        this.pokemonBlock.div.style.transform = "translate(" + this.pokemonBlock.x + "px, " + this.pokemonBlock.y + "px) rotate(" + this.deg + "deg)";
    };
    Moving.prototype.moveBlock = function (xDirection, yDirection) {
        var hit = false;
        var targetObject = new FakeObject();
        this.setsPropertiesFakeObject(targetObject, xDirection, yDirection);
        hit = (Util.CollisionGrid.checkCollision(targetObject));
        console.log(this.game.pokemonBlocks);
        for (var _i = 0, _a = this.game.pokemonBlocks; _i < _a.length; _i++) {
            var pokemonBlock = _a[_i];
            if (Util.CollisionPokemonBlock.checkCollision(pokemonBlock, targetObject)) {
                hit = true;
                this.checkHitDetectionOnPokemonBlock(hit, xDirection, yDirection, targetObject);
            }
        }
        this.pokemonBlock.x = targetObject.x;
        this.pokemonBlock.y = targetObject.y;
    };
    Moving.prototype.setsPropertiesFakeObject = function (targetObject, xDirection, yDirection) {
        targetObject.x = this.pokemonBlock.x + xDirection;
        targetObject.y = this.pokemonBlock.y + yDirection;
        targetObject.height = this.pokemonBlock.height;
        targetObject.width = this.pokemonBlock.width;
    };
    Moving.prototype.checkHitDetectionOnPokemonBlock = function (hit, xDirection, yDirection, targetObject) {
        if (hit) {
            if (xDirection > 0 || xDirection < 0) {
                targetObject.x = this.pokemonBlock.x;
            }
            if (yDirection > 0) {
                targetObject.y = this.pokemonBlock.y;
                this.stopCurrentPokemonBlock();
            }
        }
    };
    return Moving;
}());
