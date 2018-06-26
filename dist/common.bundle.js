(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });


/**
 * @classdesc Action is one of the actions that player can pick in a round
 */
class  Action {
    /**
     * @class
     * @param {string} actionName - Name of the action
     * @param {string[]} defeats - List of the other actions that are being defeated by this action
     */
    constructor(actionName, defeats) {
        this.name = actionName;
        this.defeatList = [].concat(defeats);
    }
    
    defeats(otherAction) {
        return this.defeatList.includes(otherAction.name);
    }
    
    defeatsAll(otherActions) {
        otherActions = [].concat(otherActions);
        return otherActions.filter(other => this.defeats(other)).length === otherActions.length;
    }
    
    isDefeatedBy(otherAction) {
        return otherAction.defeats(this);
    }
    
    toString() {
        return this.name;
    }
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
class Game {
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

/***/ }),

/***/ "./src/gameType.js":
/*!*************************!*\
  !*** ./src/gameType.js ***!
  \*************************/
/*! exports provided: RPS, RPSSL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPS", function() { return RPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPSSL", function() { return RPSSL; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/action.js");


const RPS = {
    possibleActions: [
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("rock", "scissors"),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("paper", "rock"),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("scissors", "paper")
    ]
};


const RPSSL = {
    possibleActions: [
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("rock", ["scissors", "lizard"]),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("paper", ["rock", "spock"]),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("scissors", ["paper", "lizard"]),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("spock", ["scissors", "rock"]),
        new _action__WEBPACK_IMPORTED_MODULE_0__["default"]("lizard", ["spock", "paper"])
    ]
};

/* harmony default export */ __webpack_exports__["default"] = ({RPS, RPSSL});

Object.freeze(RPS);
Object.freeze(RPSSL);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./round.js */ "./src/round.js");
/* harmony import */ var _gameType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameType.js */ "./src/gameType.js");
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.js */ "./src/action.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ "./src/player.js");






/* harmony default export */ __webpack_exports__["default"] = ({ Game: _game_js__WEBPACK_IMPORTED_MODULE_0__["default"], Round: _round_js__WEBPACK_IMPORTED_MODULE_1__["default"], GameType: _gameType_js__WEBPACK_IMPORTED_MODULE_2__["default"], Action: _action_js__WEBPACK_IMPORTED_MODULE_3__["default"], Player: _player_js__WEBPACK_IMPORTED_MODULE_4__["default"] });


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player{
    constructor(name) {
        this.name = name;
    }
    
    toString() {
        return this.name;
    }
}

/***/ }),

/***/ "./src/round.js":
/*!**********************!*\
  !*** ./src/round.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Round; });
class Round extends Map {
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnQjs7QUFFaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDTmhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsQyIsImZpbGUiOiJjb21tb24uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKGdsb2JhbCwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgQWN0aW9uIGlzIG9uZSBvZiB0aGUgYWN0aW9ucyB0aGF0IHBsYXllciBjYW4gcGljayBpbiBhIHJvdW5kXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBBY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBjbGFzc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25OYW1lIC0gTmFtZSBvZiB0aGUgYWN0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZGVmZWF0cyAtIExpc3Qgb2YgdGhlIG90aGVyIGFjdGlvbnMgdGhhdCBhcmUgYmVpbmcgZGVmZWF0ZWQgYnkgdGhpcyBhY3Rpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25OYW1lLCBkZWZlYXRzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuZGVmZWF0TGlzdCA9IFtdLmNvbmNhdChkZWZlYXRzKTtcbiAgICB9XG4gICAgXG4gICAgZGVmZWF0cyhvdGhlckFjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZlYXRMaXN0LmluY2x1ZGVzKG90aGVyQWN0aW9uLm5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBkZWZlYXRzQWxsKG90aGVyQWN0aW9ucykge1xuICAgICAgICBvdGhlckFjdGlvbnMgPSBbXS5jb25jYXQob3RoZXJBY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIG90aGVyQWN0aW9ucy5maWx0ZXIob3RoZXIgPT4gdGhpcy5kZWZlYXRzKG90aGVyKSkubGVuZ3RoID09PSBvdGhlckFjdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgICBcbiAgICBpc0RlZmVhdGVkQnkob3RoZXJBY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIG90aGVyQWN0aW9uLmRlZmVhdHModGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWVUeXBlLCAuLi5wbGF5ZXJzKSB7XG4gICAgICAgIHRoaXMuZ2FtZVR5cGUgPSBnYW1lVHlwZTtcbiAgICAgICAgaWYgKHBsYXllcnMubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTnVtYmVyIG9mIHBsYXllcnMgbXVzdCBiZSAyIG9yIG1vcmVcIik7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFtdLmNvbmNhdChwbGF5ZXJzKTtcbiAgICAgICAgdGhpcy5yb3VuZCA9IDA7XG4gICAgICAgIHRoaXMucG9zc2libGVBY3Rpb25zID0ge307XG4gICAgICAgIGdhbWVUeXBlLnBvc3NpYmxlQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc3NpYmxlQWN0aW9uc1thY3Rpb24ubmFtZV0gPSBhY3Rpb247XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwbGF5Um91bmQocm91bmQpIHtcbiAgICAgICAgdGhpcy5yb3VuZCsrO1xuICAgICAgICBsZXQgd2lubmVyID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgcCBvZiB0aGlzLnBsYXllcnMpIHtcbiAgICAgICAgICAgIGxldCB7IHBsYXllckFjdGlvbiwgb3RoZXJzQWN0aW9ucyB9ID0gcm91bmQuZ2V0QWN0aW9ucyhwKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJBY3Rpb24uZGVmZWF0c0FsbChvdGhlcnNBY3Rpb25zKSkge1xuICAgICAgICAgICAgICAgIHdpbm5lciA9IHA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcbiAgICB9XG59IiwiaW1wb3J0IEFjdGlvbiBmcm9tIFwiLi9hY3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IFJQUyA9IHtcbiAgICBwb3NzaWJsZUFjdGlvbnM6IFtcbiAgICAgICAgbmV3IEFjdGlvbihcInJvY2tcIiwgXCJzY2lzc29yc1wiKSxcbiAgICAgICAgbmV3IEFjdGlvbihcInBhcGVyXCIsIFwicm9ja1wiKSxcbiAgICAgICAgbmV3IEFjdGlvbihcInNjaXNzb3JzXCIsIFwicGFwZXJcIilcbiAgICBdXG59O1xuXG5cbmV4cG9ydCBjb25zdCBSUFNTTCA9IHtcbiAgICBwb3NzaWJsZUFjdGlvbnM6IFtcbiAgICAgICAgbmV3IEFjdGlvbihcInJvY2tcIiwgW1wic2Npc3NvcnNcIiwgXCJsaXphcmRcIl0pLFxuICAgICAgICBuZXcgQWN0aW9uKFwicGFwZXJcIiwgW1wicm9ja1wiLCBcInNwb2NrXCJdKSxcbiAgICAgICAgbmV3IEFjdGlvbihcInNjaXNzb3JzXCIsIFtcInBhcGVyXCIsIFwibGl6YXJkXCJdKSxcbiAgICAgICAgbmV3IEFjdGlvbihcInNwb2NrXCIsIFtcInNjaXNzb3JzXCIsIFwicm9ja1wiXSksXG4gICAgICAgIG5ldyBBY3Rpb24oXCJsaXphcmRcIiwgW1wic3BvY2tcIiwgXCJwYXBlclwiXSlcbiAgICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7UlBTLCBSUFNTTH07XG5cbk9iamVjdC5mcmVlemUoUlBTKTtcbk9iamVjdC5mcmVlemUoUlBTU0wpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZS5qc1wiO1xuaW1wb3J0IFJvdW5kIGZyb20gXCIuL3JvdW5kLmpzXCI7XG5pbXBvcnQgR2FtZVR5cGUgZnJvbSBcIi4vZ2FtZVR5cGUuanNcIjtcbmltcG9ydCBBY3Rpb24gZnJvbSBcIi4vYWN0aW9uLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7IEdhbWUsIFJvdW5kLCBHYW1lVHlwZSwgQWN0aW9uLCBQbGF5ZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb3VuZCBleHRlbmRzIE1hcCB7XG4gICAgZ2V0QWN0aW9ucyhwbGF5ZXIpIHtcbiAgICAgICAgbGV0IHBsYXllckFjdGlvbiwgb3RoZXJzQWN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgdGhpcykge1xuICAgICAgICAgICAgaWYoa2V5ID09PSBwbGF5ZXIpXG4gICAgICAgICAgICAgICAgcGxheWVyQWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgb3RoZXJzQWN0aW9ucy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3BsYXllckFjdGlvbiwgb3RoZXJzQWN0aW9uc307XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=