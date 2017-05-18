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
        this.tetrisBlock = new TetrisBlock();
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
        this.tetrisBlock = new TetrisBlock();
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
        this.move();
    };
    Moving.prototype.stop = function () {
        this.tetrisBlock.behavior = new StopMoving(this.tetrisBlock);
    };
    Moving.prototype.onKeyDown = function (k) {
        var xtarget = this.tetrisBlock.x;
        var ytarget = this.tetrisBlock.y;
        if (k == 'ArrowRight' || k == 'd') {
            xtarget += 30;
        }
        else if (k == 'ArrowLeft' || k == 'a') {
            xtarget -= 30;
        }
        else if (k == 'ArrowDown' || k == 's') {
            ytarget += 30;
        }
        if (!Util.checkCollisionGrid(this.tetrisBlock, xtarget, ytarget)) {
            this.tetrisBlock.x = xtarget;
            this.tetrisBlock.y = ytarget;
        }
        this.draw();
        if (k == ' ') {
            this.deg = this.deg + 90;
            var mainEvent = this.tetrisBlock.div.getBoundingClientRect();
            var mainEventLeft = mainEvent.left;
            var restXpos = mainEvent.left % 30;
            this.draw();
        }
    };
    Moving.prototype.move = function () {
        var ytarget = this.tetrisBlock.y;
        ytarget += 30;
        if (!Util.checkCollisionGrid(this.tetrisBlock, 0, ytarget)) {
            this.tetrisBlock.y = ytarget;
            this.draw();
        }
        else {
            this.stop();
        }
    };
    Moving.prototype.draw = function () {
        this.tetrisBlock.div.style.transform = "translate(" + this.tetrisBlock.x + "px, " + this.tetrisBlock.y + "px) rotate(" + this.deg + "deg)";
    };
    return Moving;
}());
var TetrisBlock = (function (_super) {
    __extends(TetrisBlock, _super);
    function TetrisBlock() {
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
    TetrisBlock.prototype.generateBlock = function () {
        var randomNum = Math.floor(Math.random() * 7);
        var blockColor = this.randomBlock[randomNum];
        this.setsPropertyTetrisBlock(blockColor);
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
    TetrisBlock.prototype.move = function () {
        this.timer = this.timer + 1;
        if (this.timer > 60) {
            this.behavior.update();
            this.timer = 0;
        }
    };
    TetrisBlock.prototype.onKeyDown = function (e) {
        this.behavior.onKeyDown(e.key);
    };
    TetrisBlock.prototype.setsPropertyTetrisBlock = function (c) {
        if (c == 'yellow') {
            this.width = 60;
            this.height = 60;
        }
        else if (c == 'lightBlue') {
            this.width = 30;
            this.height = 120;
        }
        else {
            this.width = 90;
            this.height = 60;
        }
    };
    return TetrisBlock;
}(GameObject));
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (g1, g2) {
        return (g1.x < g2.x + g2.width &&
            g1.x + g1.width > g2.x &&
            g1.y < g2.y + g2.height &&
            g1.height + g1.y > g2.y);
    };
    Util.checkCollisionGrid = function (g1, xt, yt) {
        console.log(xt + g1.width);
        return (g1.x + xt < 0 || (xt + g1.width) > 300 || yt + g1.height > 600);
    };
    return Util;
}());
var StopMoving = (function () {
    function StopMoving(tb) {
        this.tetrisBlock = tb;
    }
    StopMoving.prototype.update = function () {
        var g = Game.getInstance();
        g.addNewTetrisBlock();
    };
    ;
    StopMoving.prototype.stop = function () { };
    ;
    StopMoving.prototype.onKeyDown = function (e) { };
    ;
    return StopMoving;
}());
//# sourceMappingURL=main.js.map