import Action from "./action";

export const RPS = {
    possibleActions: [
        new Action("rock", "scissors"),
        new Action("paper", "rock"),
        new Action("scissors", "paper")
    ]
};


export const RPSSL = {
    possibleActions: [
        new Action("rock", ["scissors", "lizard"]),
        new Action("paper", ["rock", "spock"]),
        new Action("scissors", ["paper", "lizard"]),
        new Action("spock", ["scissors", "rock"]),
        new Action("lizard", ["spock", "paper"])
    ]
};

export default {RPS, RPSSL};

Object.freeze(RPS);
Object.freeze(RPSSL);
