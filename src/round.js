/**
 * Defines the actions of the players in a single Round
 * @extends {Map}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
 */
class Round extends Map {
    /**
     * @typeDef {object} getPlayerActionsInRound
     * @property {Action} playerAction - Action of the focussed player
     * @property {Action[]} othersActions - List of the actions of rest of the players
     */
    
    /**
     * Gets the action of the player and the actions of rest of the players
     * @param {Player} player - Focusing action of the individual player
     * @returns {getPlayerActionsInRound}
     */
    getActions(player) {
        let playerAction, othersActions = [];
        for (let [key, value] of this) {
            if(key === player)
                playerAction = value;
            else
                othersActions.push(value);
        }
        return {playerAction, othersActions};
    }
}

export default Round;