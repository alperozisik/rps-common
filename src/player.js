/**
 * Player for RPS or RPSSL game
 */
class Player{
    /**
     * @param {!string} name - Name of the player
     */
    constructor(name) {
        /**
         * @property {string} Name of the player
         */
        this.name = name;
    }
    
    /**
     * Gets the name of the player
     * @retuns {string} name of the player
     */
    toString() {
        return this.name;
    }
}

export default Player;