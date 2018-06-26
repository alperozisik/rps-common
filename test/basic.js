const { Game, Round, GameType, /*Action,*/ Player } = require("../");
const expect = require("chai").expect;

const player1 = new Player("p1"),
    player2 = new Player("p2");


const game1 = new Game(GameType.RPS, player1, player2);

const winnerOfGame1Round1 = game1.playRound(new Round([
    [player1, game1.possibleActions.rock],
    [player2, game1.possibleActions.paper]
]));
expect(winnerOfGame1Round1).to.be.equal(player2);
expect(game1.round).to.be.a("number").that.is.equal(1);
console.log(`[1] Winner of the Round ${game1.round} is ${winnerOfGame1Round1}`);


const winnerOfGame1Round2 = game1.playRound(new Round([
    [player1, game1.possibleActions.rock],
    [player2, game1.possibleActions.scissors]
]));
expect(winnerOfGame1Round2).to.be.equal(player1);
expect(game1.round).to.be.a("number").that.is.equal(2);
console.log(`[1] Winner of the Round ${game1.round} is ${winnerOfGame1Round2}`);


const winnerOfGame1Round3 = game1.playRound(new Round([
    [player1, game1.possibleActions.paper],
    [player2, game1.possibleActions.scissors]
]));
expect(winnerOfGame1Round3).to.be.equal(player2);
expect(game1.round).to.be.a("number").that.is.equal(3);
console.log(`[1] Winner of the Round ${game1.round} is ${winnerOfGame1Round3}`);

const winnerOfGame1Round4 = game1.playRound(new Round([
    [player1, game1.possibleActions.paper],
    [player2, game1.possibleActions.paper]
]));
expect(winnerOfGame1Round4).to.be.null;
console.log(`[1] Winner of the Round ${game1.round} is ${winnerOfGame1Round4}`);




/******************************************************************************/

const player3 = new Player("p3");
const game2 = new Game(GameType.RPS, player1, player2, player3);

const round1OfGame2 = new Round();
round1OfGame2.set(player1 , game2.possibleActions.scissors);
round1OfGame2.set(player2 , game2.possibleActions.scissors);
round1OfGame2.set(player3 , game2.possibleActions.rock);
const winnerOfGame2Round1 = game2.playRound(round1OfGame2);
expect(winnerOfGame2Round1).to.be.equal(player3);
expect(game2.round).to.be.a("number").that.is.equal(1);
console.log(`[2] Winner of the Round ${game2.round} is ${winnerOfGame2Round1}`);

const round2OfGame2 = new Round();
round2OfGame2.set(player1 , game2.possibleActions.scissors);
round2OfGame2.set(player2 , game2.possibleActions.paper);
round2OfGame2.set(player3 , game2.possibleActions.rock);
const winnerOfGame2Round2 = game2.playRound(round2OfGame2);
expect(winnerOfGame2Round2).to.be.null;
expect(game2.round).to.be.a("number").that.is.equal(2);
console.log(`[2] Winner of the Round ${game2.round} is ${winnerOfGame2Round2}`);

/******************************************************************************/

const game3 = new Game(GameType.RPSSL, player1, player2, player3);

const round1OfGame3 = new Round();
round1OfGame3.set(player1 , game3.possibleActions.scissors);
round1OfGame3.set(player2 , game3.possibleActions.scissors);
round1OfGame3.set(player3 , game3.possibleActions.rock);
const winnerOfGame3Round1 = game3.playRound(round1OfGame3);
expect(winnerOfGame3Round1).to.be.equal(player3);
expect(game3.round).to.be.a("number").that.is.equal(1);
console.log(`[3] Winner of the Round ${game3.round} is ${winnerOfGame3Round1}`);

const round2OfGame3 = new Round();
round2OfGame3.set(player1 , game3.possibleActions.lizard);
round2OfGame3.set(player2 , game3.possibleActions.scissors);
round2OfGame3.set(player3 , game3.possibleActions.rock);
const winnerOfGame3Round2 = game3.playRound(round2OfGame3);
expect(winnerOfGame3Round2).to.be.equal(player3);
expect(game3.round).to.be.a("number").that.is.equal(2);
console.log(`[3] Winner of the Round ${game3.round} is ${winnerOfGame3Round2}`);

const round3OfGame3 = new Round();
round3OfGame3.set(player1 , game3.possibleActions.paper);
round3OfGame3.set(player2 , game3.possibleActions.spock);
round3OfGame3.set(player3 , game3.possibleActions.rock);
const winnerOfGame3Round3 = game3.playRound(round3OfGame3);
expect(winnerOfGame3Round3).to.be.equal(player1);
expect(game3.round).to.be.a("number").that.is.equal(3);
console.log(`[3] Winner of the Round ${game3.round} is ${winnerOfGame3Round3}`);