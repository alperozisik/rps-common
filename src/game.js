/**
 * Game made of one ore more players
 */
class Game {
    /**
     * @param {!GameType} gameType - Rock Paper Scissors OR Rock Paper Scissors Spock Lizard game
     * @param {...Player} players - List of Players. At least two players required
     */
    constructor(gameType, ...players) {
        /**
         * @property {GameType} gameType - Rock Paper Scissors OR Rock Paper Scissors Spock Lizard game
         */
        this.gameType = gameType;
        if (players.length < 2)
            throw Error("Number of players must be 2 or more");

        /**
         * @property {Player[]} players - List of players
         */
        this.players = [].concat(players);

        /**
         * @property {number} round - Rounds played. Starting from 0
         */
        this.round = 0;

        /**
         * @property {object} possibleActions - Shortcut for gameType possible actions. Each action is accessed by its name
         * @property {Action} possibleActions.<b>actionName</b> - Action by name
         */
        this.possibleActions = {};
        gameType.possibleActions.forEach(action => {
            this.possibleActions[action.name] = action;
        });
    }

    /**
     * Plays a round with players chosen their actions
     * @param {!Round} round - Players with their choice of actions
     * @returns {?Player} Winning Player. If no player wins, returns null
     */
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

export default Game;
