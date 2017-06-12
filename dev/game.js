var Game = (function () {
    function Game() {
        var _this = this;
        this.pokemonBlocks = new Array();
        this.score = 0;
        this.gameOver = false;
        this.addNewPokemonBlock();
        this.scoreBoard(this.score);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        // this.pokemonBlock.move();
        if (!this.gameOver) {
            requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.addNewPokemonBlock = function () {
        var randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0:
                this.pokemonBlock = new Piplup();
                break;
            case 1:
                this.pokemonBlock = new Prinplup();
                break;
            case 2:
                this.pokemonBlock = new Empeleon();
                break;
        }
    };
    Game.prototype.stopGame = function () {
        this.gameOver = true;
    };
    Game.prototype.scoreBoard = function (score) {
        this.score += score;
        document.getElementById("score").innerHTML = "Score : " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var game = Game.getInstance();
});
