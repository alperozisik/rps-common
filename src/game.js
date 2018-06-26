export default class Game {
    constructor(gameType, ...players) {
        this.gameType = gameType;
        if (players.length < 2)
            throw Error("Number of players must be 2 or more");
        this.players = [].concat(players);
        this.round = 0;
        this.possibleActions = {};
        gameType.possibleActions.forEach(action => {
            this.possibleActions[action.name] = action;
        });
    }
    playRound(round) {
        this.round++;
        let winner = null;
        for (let p of this.players) {
            let { playerAction, othersActions } = round.getActions(p);
            if (playerAction.defeatsAll(othersActions)) {
                winner = p;
                break;
            }
        }
        return winner;
    }
}