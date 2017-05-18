var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
    }
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (v) {
            this._height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (v) {
            this._width = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "blockColor", {
        get: function () {
            return this._blockColor;
        },
        set: function (v) {
            this._blockColor = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        set: function (v) {
            this._div = v;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}());
var Blocks = (function (_super) {
    __extends(Blocks, _super);
    function Blocks(c) {
        var _this = _super.call(this) || this;
        _this.height = 30;
        _this.width = 30;
        _this.blockColor = c;
        _this.div = document.createElement('block');
        _this.div.className = _this.blockColor;
        return _this;
    }
    return Blocks;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.tetrisBlock = new tetrisBlock();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.tetrisBlock.move();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.addNewTetrisBlock = function () {
        this.tetrisBlock = new tetrisBlock();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var Moving = (function () {
    function Moving(s, t) {
        this.speed = s;
        this.tetrisBlock = t;
        this.deg = 0;
        this.stopMoving = false;
    }
    Moving.prototype.update = function () {
        if (!this.stopMoving) {
            this.move();
        }
    };
    Moving.prototype.stop = function () {
        this.stopMoving = true;
    };
    Moving.prototype.onKeyDown = function (k) {
        if (!this.stopMoving) {
            if (k == 'ArrowRight' || k == 'd') {
                this.tetrisBlock.x = this.tetrisBlock.x + 30;
                this.draw();
            }
            else if (k == 'ArrowLeft' || k == 'a') {
                this.tetrisBlock.x = this.tetrisBlock.x - 30;
                this.draw();
            }
            else if (k == 'ArrowDown' || k == 's') {
                if (this.stopMoving == false) {
                    console.log(this.tetrisBlock.y);
                    this.tetrisBlock.y = this.tetrisBlock.y + 30;
                    this.draw();
                }
            }
            else if (k == ' ') {
                this.deg = this.deg + 90;
                var mainEvent = this.tetrisBlock.div.getBoundingClientRect();
                var mainEventLeft = mainEvent.left;
                console.log(mainEventLeft);
                this.draw();
            }
        }
    };
    Moving.prototype.move = function () {
        this.tetrisBlock.y = this.tetrisBlock.y + 30;
        this.draw();
    };
    Moving.prototype.draw = function () {
        this.tetrisBlock.div.style.transform = "translate(" + this.tetrisBlock.x + "px, " + this.tetrisBlock.y + "px) rotate(" + this.deg + "deg)";
    };
    return Moving;
}());
var tetrisBlock = (function (_super) {
    __extends(tetrisBlock, _super);
    function tetrisBlock() {
        var _this = _super.call(this) || this;
        _this.randomBlock = ['red', 'green', 'yellow', 'lightBlue', 'blue', 'purple', 'orange'];
        _this.div = document.createElement('containerBlock');
        _this.blocks = new Array();
        _this.speed = 2;
        _this.y = 0;
        _this.x = 0;
        _this.timer = 0;
        _this.behavior = new Moving(_this.speed, _this);
        _this.generateBlock();
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    tetrisBlock.prototype.generateBlock = function () {
        var randomNum = Math.floor(Math.random() * 7);
        var blockColor = this.randomBlock[randomNum];
        this.div.className = 'container_' + blockColor;
        for (var i = 0; i < 4; i++) {
            this.blocks.push(new Blocks(blockColor));
        }
        for (var _i = 0, _a = this.blocks; _i < _a.length; _i++) {
            var block = _a[_i];
            this.div.appendChild(block.div);
        }
        var grid = document.getElementById('grid');
        grid.appendChild(this.div);
    };
    tetrisBlock.prototype.move = function () {
        this.timer = this.timer + 1;
        if (this.timer > 50) {
            this.behavior.update();
            this.timer = 0;
        }
        if (this.y > 540) {
            this.behavior.stop();
            var g = Game.getInstance();
            g.addNewTetrisBlock();
        }
    };
    tetrisBlock.prototype.onKeyDown = function (e) {
        console.log('move');
        this.behavior.onKeyDown(e.key);
    };
    return tetrisBlock;
}(GameObject));
//# sourceMappingURL=main.js.map