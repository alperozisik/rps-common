export default class Round extends Map {
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