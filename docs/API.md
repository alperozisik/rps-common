# Classes

<dl>
<dt><a href="#Action">Action</a></dt>
<dd><p>Action is one of the actions that player can pick in a round</p>
</dd>
<dt><a href="#Game">Game</a></dt>
<dd><p>Game made of one ore more players</p>
</dd>
<dt><a href="#Player">Player</a></dt>
<dd><p>Player for RPS or RPSSL game</p>
</dd>
<dt><a href="#Round">Round</a> ⇐ <code>Map</code></dt>
<dd><p>Defines the actions of the players in a single Round</p>
</dd>
</dl>

# Constants

<dl>
<dt><a href="#RPS">RPS</a> : <code><a href="#GameType">GameType</a></code></dt>
<dd><p>Rock Paper Scissors game</p>
</dd>
<dt><a href="#RPSSL">RPSSL</a> : <code><a href="#GameType">GameType</a></code></dt>
<dd><p>Rock Paper Scissors Spock Lizard</p>
</dd>
</dl>

# Typedefs

<dl>
<dt><a href="#GameType">GameType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getPlayerActionsInRound">getPlayerActionsInRound</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Action"></a>

# Action
Action is one of the actions that player can pick in a round

**Kind**: global class  

* [Action](#Action)
    * [new Action(actionName, defeats)](#new_Action_new)
    * [.name](#Action+name)
    * [.defeatList](#Action+defeatList)
    * [.defeats(otherAction)](#Action+defeats) ⇒ <code>boolean</code>
    * [.defeatsAll(otherActions)](#Action+defeatsAll) ⇒ <code>boolean</code>
    * [.isDefeatedBy(otherAction)](#Action+isDefeatedBy) ⇒ <code>boolean</code>
    * [.toString()](#Action+toString) ⇒ <code>string</code>

<a name="new_Action_new"></a>

## new Action(actionName, defeats)

| Param | Type | Description |
| --- | --- | --- |
| actionName | <code>string</code> | Name of the action |
| defeats | <code>Array.&lt;string&gt;</code> | List of the other actions that are being defeated by this action |

<a name="Action+name"></a>

## action.name
**Kind**: instance property of [<code>Action</code>](#Action)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the action |

<a name="Action+defeatList"></a>

## action.defeatList
**Kind**: instance property of [<code>Action</code>](#Action)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| defeatList | <code>Array.&lt;string&gt;</code> | Name list of the other actions |

<a name="Action+defeats"></a>

## action.defeats(otherAction) ⇒ <code>boolean</code>
Checks whether this action defeats the other action

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>boolean</code> - result of check  

| Param | Type | Description |
| --- | --- | --- |
| otherAction | [<code>Action</code>](#Action) | single action |

<a name="Action+defeatsAll"></a>

## action.defeatsAll(otherActions) ⇒ <code>boolean</code>
Checks this action defeats all other actions

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>boolean</code> - result of check  

| Param | Type | Description |
| --- | --- | --- |
| otherActions | [<code>Action</code>](#Action) \| [<code>Array.&lt;Action&gt;</code>](#Action) | list of actions |

<a name="Action+isDefeatedBy"></a>

## action.isDefeatedBy(otherAction) ⇒ <code>boolean</code>
Checks this action is defeated by the other action. Oppsite direction of defeats

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>boolean</code> - result of check  

| Param | Type | Description |
| --- | --- | --- |
| otherAction | [<code>Action</code>](#Action) | single action |

<a name="Action+toString"></a>

## action.toString() ⇒ <code>string</code>
Name of the action

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>string</code> - name of the action  
<a name="Game"></a>

# Game
Game made of one ore more players

**Kind**: global class  

* [Game](#Game)
    * [new Game(gameType, ...players)](#new_Game_new)
    * [.gameType](#Game+gameType)
    * [.players](#Game+players)
    * [.round](#Game+round)
    * [.possibleActions](#Game+possibleActions)
    * [.playRound(round)](#Game+playRound) ⇒ [<code>Player</code>](#Player)

<a name="new_Game_new"></a>

## new Game(gameType, ...players)

| Param | Type | Description |
| --- | --- | --- |
| gameType | [<code>GameType</code>](#GameType) | Rock Paper Scissors OR Rock Paper Scissors Spock Lizard game |
| ...players | [<code>Player</code>](#Player) | List of Players. At least two players required |

<a name="Game+gameType"></a>

## game.gameType
**Kind**: instance property of [<code>Game</code>](#Game)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| gameType | [<code>GameType</code>](#GameType) | Rock Paper Scissors OR Rock Paper Scissors Spock Lizard game |

<a name="Game+players"></a>

## game.players
**Kind**: instance property of [<code>Game</code>](#Game)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| players | [<code>Array.&lt;Player&gt;</code>](#Player) | List of players |

<a name="Game+round"></a>

## game.round
**Kind**: instance property of [<code>Game</code>](#Game)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| round | <code>number</code> | Rounds played. Starting from 0 |

<a name="Game+possibleActions"></a>

## game.possibleActions
**Kind**: instance property of [<code>Game</code>](#Game)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| possibleActions | <code>object</code> | Shortcut for gameType possible actions. Each action is accessed by its name |
| possibleActions.<b>actionName</b> | [<code>Action</code>](#Action) | Action by name |

<a name="Game+playRound"></a>

## game.playRound(round) ⇒ [<code>Player</code>](#Player)
Plays a round with players chosen their actions

**Kind**: instance method of [<code>Game</code>](#Game)  
**Returns**: [<code>Player</code>](#Player) - Winning Player. If no player wins, returns null  

| Param | Type | Description |
| --- | --- | --- |
| round | [<code>Round</code>](#Round) | Players with their choice of actions |

<a name="Player"></a>

# Player
Player for RPS or RPSSL game

**Kind**: global class  

* [Player](#Player)
    * [new Player(name)](#new_Player_new)
    * [.name](#Player+name)
    * [.toString()](#Player+toString)

<a name="new_Player_new"></a>

## new Player(name)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the player |

<a name="Player+name"></a>

## player.name
**Kind**: instance property of [<code>Player</code>](#Player)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Name | <code>string</code> | of the player |

<a name="Player+toString"></a>

## player.toString()
Gets the name of the player

**Kind**: instance method of [<code>Player</code>](#Player)  
**Retuns**: <code>string</code> name of the player  
<a name="Round"></a>

# Round ⇐ <code>Map</code>
Defines the actions of the players in a single Round

**Kind**: global class  
**Extends**: <code>Map</code>  
**See**: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  
<a name="Round+getActions"></a>

## round.getActions(player) ⇒ [<code>getPlayerActionsInRound</code>](#getPlayerActionsInRound)
Gets the action of the player and the actions of rest of the players

**Kind**: instance method of [<code>Round</code>](#Round)  

| Param | Type | Description |
| --- | --- | --- |
| player | [<code>Player</code>](#Player) | Focusing action of the individual player |

<a name="RPS"></a>

# RPS : [<code>GameType</code>](#GameType)
Rock Paper Scissors game

**Kind**: global constant  
<a name="RPSSL"></a>

# RPSSL : [<code>GameType</code>](#GameType)
Rock Paper Scissors Spock Lizard

**Kind**: global constant  
<a name="GameType"></a>

# GameType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| possibleActions | [<code>Array.&lt;Action&gt;</code>](#Action) | List of Possible actions of the game |
| fullName | <code>string</code> | Full Name of the game |

<a name="getPlayerActionsInRound"></a>

# getPlayerActionsInRound : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| playerAction | [<code>Action</code>](#Action) | Action of the focussed player |
| othersActions | [<code>Array.&lt;Action&gt;</code>](#Action) | List of the actions of rest of the players |

