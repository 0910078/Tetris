# Pokemon Tetris | The Game

### Installatie

- Fork het project.
- Clone het project in de gewenste bestandsmap
- Om de game te starten ga je naar <root>/tetris/docs/index.html

### Klassendiagram

- De klassendiagram van de game Pokemon Tetris.

![UML](klassendiagram_tetris.png?raw=true "UML")

### Gameplay

- Als de game start verschijnt random een tetris block.
- Met de toetsen A en D of de pijltjes links en rechts kan je het block besturen.

### Library
Je hebt gebruik gemaakt van greensock en de tweenlite class gebruikt. Het werkt, dus verder niks op aan te merken.

### Encapsualtion
In orde want over het algemeen een hoop properties private gemaakt

### Composition
De moving class maakt een fakeobject, maar verder nergens gebruik van gemaakt.

### Inheritance
Op meerdere classes correct toegepast.

### Singleton
Gebruikt om de game instance op te kunnen halen, je hebt hier goed gebruik van gemaakt, bijvoorbeeld in stopMoving.ts

### Observer
De game wordt geobserveert door de tetris blocks en hun functie wordt via de game aangeroepen. Het werkt prima alleen zou je volgens mij dit net zo goed zonder observer kunnen doen, omdat de game al toegang tot de tetrisblocks heeft en nooit hoeft te unsubscriben.

### Strategy
Moving en stopmoving classes implementeren behaviour. Dit doe je op een goede manier.

### Interface
Behaviour is een interface en wordt correct geimplementeerd.

### Static
De instance van de game is static, er is dus gebruik van gemaakt en dus in orde.

### Abstract
De gameobject class is abstract, dit is een goed gebruik hiervan, omdat je nooit een instance van gameobject zou willen maken.

### Namespaces
Namespaces is toegepast op de utils class en wordt door andere classes foutloos gebruikt.

### Polymorphism
Pokemonblocks in game.ts kunnen alle gameobjecten zijn en dus wordt hier gebruik gemaakt van polymorphisme. Op deze manier kunnen de functies die in gameobject class zitten altijd worden aangeroepen onafhankelijk van welke class er in zit.

### Enumeraties
Is gebruikt voor de keybindings te onthouden.

# Eindbeoordeling:
Afgezien van een paar kleine logica foutjes is de game gewoon dik in orde, dus een voldoende!
p.s. eigenlijk had je alle bovenstaande punten zelf nog moeten toelichten in de readme