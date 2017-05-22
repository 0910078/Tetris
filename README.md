# Tetris | The Game

### Installatie

- Fork het project.
- Clone het project in de gewenste bestandsmap
- Om de game te starten ga je naar <root>/tetris/docs/index.html

### Klassendiagram

- De klassendiagram van de game Tetris.

![UML](klassendiagram_tetris.png?raw=true "UML")

### Gameplay

- Als de game start verschijnt random een tetris block.
- Met de toetsen WASD of de pijltjes kan je het block besturen en met de spatieblak kan je het block draaien.

### Interface & Strategy Pattern

- Interface Behavior is voor het gedrag van de active tetris block. Zie klassendiagram

### Static utility method

- Static utility methode voor het grid. Hiermee zorgt ervoor dat de blocks niet uit het grid gaan.

```
public static checkCollisionGrid(g1: GameObject, xt: number, yt: number):boolean{
    return(g1.x + xt < 0 || (xt + g1.width) > 300 || yt + g1.height > 600)
}
```

### Singleton

- De singleton wordt toegepast in de class Game.

```

private static instance:Game;

public static getInstance(){
    if(!Game.instance){
        Game.instance = new Game();
    }
    return Game.instance;
}

window.addEventListener("load", function(){
    let g:Game = Game.getInstance();
});

```



## Lezen
- [Game Loop, Collision detection, Keyboard input](https://github.com/HR-CMGT/PRG04-Week3-examples)
- [Inheritance in Typescript](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Interface in Typescript](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Typescript Getting Started](https://basarat.gitbooks.io/typescript/content/docs/getting-started.html)
- [Arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ES6 For In loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [ES6 For Of loops](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)
- [Class Code Naming Conventions](https://dev.to/mohitrajput987/coding-best-practices-part-1-naming-conventions--class-designing-principles)