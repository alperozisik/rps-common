import Action from "./action";

/**
 * @typeDef {object} GameType
 * @property {Action[]} possibleActions - List of Possible actions of the game
 * @property {string} fullName - Full Name of the game
 */

/**
 * Rock Paper Scissors game
 * @type {GameType}
 */
export const RPS = {
    possibleActions: [
        new Action("rock", "scissors"),
        new Action("paper", "rock"),
        new Action("scissors", "paper")
    ],
    fullName: "Rock Paper Scissors",
    name: "RPS"
};

/**
 * Rock Paper Scissors Spock Lizard
 * @type {GameType}
 */
export const RPSSL = {
    possibleActions: [
        new Action("rock", ["scissors", "lizard"]),
        new Action("paper", ["rock", "spock"]),
        new Action("scissors", ["paper", "lizard"]),
        new Action("spock", ["scissors", "rock"]),
        new Action("lizard", ["spock", "paper"])
    ],
    fullName: "Rock Paper Scissors Spock Lizard",
    name: "RPSSL"
};

export default {RPS, RPSSL};

Object.freeze(RPS);
Object.freeze(RPSSL);
