var StopMoving = (function () {
    function StopMoving(tb) {
        this.game = Game.instance;
        this.className = tb.div.className;
        this.pokemonBlock = tb;
    }
    StopMoving.prototype.update = function () {
        if (this.pokemonBlock.y > 0) {
            this.addScore();
            this.game.pokemonBlocks.push(this.pokemonBlock);
            this.game.addNewPokemonBlock();
        }
        else {
            this.game.stopGame();
        }
    };
    ;
    StopMoving.prototype.addScore = function () {
        if (this.className == 'container_piplup') {
            this.game.scoreBoard(10);
        }
        else if (this.className == 'container_prinplup') {
            this.game.scoreBoard(20);
        }
        else {
            this.game.scoreBoard(40);
        }
    };
    StopMoving.prototype.onKeyDown = function (e) { };
    ;
    return StopMoving;
}());
