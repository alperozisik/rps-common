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
Name of the action

**Kind**: instance property of [<code>Action</code>](#Action)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the action |

<a name="Action+defeatList"></a>

## action.defeatList
List of the names of the other actions that are defeated by this action

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
