This a common libray module for playing Rock–paper–scissors game.
For more information about the game please check [Wikipedia](Rock–paper–scissors)

# Installation
To use in a **node** project
```shell
npm i -S https://github.com/alperozisik/rps-common --production
```

# Simple Usage
```javascript
const { Game, Round, GameType, Player } = require("rps-common");

const player1 = new Player("p1"),
    player2 = new Player("p2");

const game1 = new Game(GameType.RPS, player1, player2);

const winnerOfGame1Round1 = game1.playRound(new Round([
    [player1, game1.possibleActions.rock],
    [player2, game1.possibleActions.paper]
]));

console.log(`[1] Winner of the Round ${game1.round} is ${winnerOfGame1Round1}`);
```
# Docs
Please check [API.md](./docs/API.md)

# Development
Please do not hesitate to report any [issues](https://github.com/alperozisik/rps-common/issues).

Feel free to [pull request](https://github.com/alperozisik/rps-common/pulls).
Before submitting make sure that:
- Bundle is built `npm run build`
- Update docs `npm run docs`
- Test are running `npm run test`

