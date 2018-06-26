/**
 * Action is one of the actions that player can pick in a round
 */
class  Action {
    /**
     * @param {!string} actionName - Name of the action
     * @param {!string[]} defeats - List of the other actions that are being defeated by this action
     */
    constructor(actionName, defeats) {
        /**
         * @property {string} name - Name of the action
         */
        this.name = actionName;
        
        /**
         * 
         * @property {string[]} defeatList - Name list of the other actions
         */
        this.defeatList = [].concat(defeats);
    }
    
    /**
     * Checks whether this action defeats the other action
     * @param {Action} otherAction - single action
     * @returns {boolean} result of check
     */
    defeats(otherAction) {
        return this.defeatList.includes(otherAction.name);
    }
    
    /**
     * Checks this action defeats all other actions
     * @param {(Action|Action[])} otherActions - list of actions
     * @returns {boolean} result of check
     */
    defeatsAll(otherActions) {
        otherActions = [].concat(otherActions);
        return otherActions.filter(other => this.defeats(other)).length === otherActions.length;
    }
    
    /**
     * Checks this action is defeated by the other action. Oppsite direction of defeats
     * @param {Action} otherAction - single action
     * @returns {boolean} result of check
     */
    isDefeatedBy(otherAction) {
        return otherAction.defeats(this);
    }
    
    /**
     * Name of the action
     * @returns {string} name of the action
     */
    toString() {
        return this.name;
    }
}
export default Action;
