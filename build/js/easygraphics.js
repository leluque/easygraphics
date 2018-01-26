(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("easygraphics", [], factory);
	else if(typeof exports === 'object')
		exports["easygraphics"] = factory();
	else
		root["easygraphics"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



/**
 * This class implements a listener for changes in graphical elements.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeListener = function () {
    function ChangeListener() {
        _classCallCheck(this, ChangeListener);

        this._types = arguments;
    }

    _createClass(ChangeListener, [{
        key: "update",
        value: function update(target) {
            // Update.
        }
    }, {
        key: "hasType",
        value: function hasType(targetType) {
            return this._types.indexOf(targetType) >= 0;
        }
    }, {
        key: "hasAnyType",
        value: function hasAnyType() {
            for (var i = 0; i < this._types.length; i++) {
                for (var j = 0; j < arguments.length; j++) {
                    if (this._types[i] === arguments[j]) {
                        return true;
                    }
                }
            }
            return false;
        }
    }, {
        key: "types",
        get: function get() {
            return this._types;
        },
        set: function set(value) {
            this._types = arguments;
        }
    }], [{
        key: "DIMENSION",
        get: function get() {
            return "dimension";
        }
    }, {
        key: "POSITION",
        get: function get() {
            return "position";
        }
    }, {
        key: "ROTATION",
        get: function get() {
            return "rotation";
        }
    }, {
        key: "STYLING",
        get: function get() {
            return "styling";
        }
    }, {
        key: "OTHER",
        get: function get() {
            return "other";
        }
    }]);

    return ChangeListener;
}();

exports.default = ChangeListener;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _util = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements the default behaviour of graphical elements.
 * It is the base class for all graphical elements.
 */
var GraphicalElement = function () {

    //constructor(x = 0, y = 0, width = 7, height = 7, stylingAttributes = new StylingAttributes(), id = -1, preserveAspectRatio = false) {
    function GraphicalElement(argumentsObject) {
        _classCallCheck(this, GraphicalElement);

        if (!argumentsObject || argumentsObject === null) {
            argumentsObject = {};
        }
        (0, _util.validateArgumentsObject)(argumentsObject, 'id', -1);
        (0, _util.validateArgumentsObject)(argumentsObject, 'x', 0);
        (0, _util.validateArgumentsObject)(argumentsObject, 'y', 0);
        (0, _util.validateArgumentsObject)(argumentsObject, 'width', 7);
        (0, _util.validateArgumentsObject)(argumentsObject, 'height', 7);
        (0, _util.validateArgumentsObject)(argumentsObject, 'stylingAttributes', function () {
            return new _stylingAttributes2.default();
        });
        (0, _util.validateArgumentsObject)(argumentsObject, 'preserveAspectRatio', false);

        this._x = argumentsObject.x;
        this._y = argumentsObject.y;
        this._minWidth = 1;
        this._width = argumentsObject.width;
        this._minHeight = 1;
        this._height = argumentsObject.height;
        this._stylingAttributes = argumentsObject.stylingAttributes;
        this._stylingAttributes.target = this; // Bidirectional navigation.
        this._id = argumentsObject.id;
        this._drawn = null; // A reference to the shape drawn on a drawing area (in case of svg, for example).
        this._changeListeners = []; // A graphical element may have many change listeners.
        this._changeNotificationsEnabled = 0; // Must listeners be notified about changes?
        // 0 means yes.
        // Any value greater than 0 means a recursive call to
        // disable change notifications.
        this._rotation = 0; // Rotation angle in degrees.
        this._rotationCenterX = argumentsObject.x + argumentsObject.width / 2; // The rotation reference point x-coordinate.
        this._rotationCenterY = argumentsObject.y + argumentsObject.height / 2; // The rotation reference point y-coordinate.
        this._tag = null; // Additional information about the graphical element.
        // Define a new object to store additional information.
        // It works like a map, but with complexity on search of O(1).
        // The key works as the tag name.
        this._tags = {};

        // Events' callback functions.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        this._onClick = null;
        this._onDblClick = null;
        this._onMouseDown = null;
        this._onMouseMove = null;
        this._onMouseUp = null;

        this._preserveAspectRatio = argumentsObject.preserveAspectRatio;
    }

    _createClass(GraphicalElement, [{
        key: 'addTag',
        value: function addTag(key, value) {
            // If does not exist a tag with the same key, add it.
            if (key in this._tags) {
                this._tags[key].push(value);
            }
            this._tags[key] = value;
            return true;
        }
    }, {
        key: 'countTags',
        value: function countTags() {
            return Object.keys(this._tags).length;
        }
    }, {
        key: 'getTag',
        value: function getTag(key) {
            return this._tags[key];
        }
    }, {
        key: 'getTagsKeys',
        value: function getTagsKeys() {
            return Object.keys(this._tags);
        }
    }, {
        key: 'removeTag',
        value: function removeTag(key) {
            delete this._tags[key];
        }
    }, {
        key: 'disableChangeNotifications',
        value: function disableChangeNotifications() {
            //this.changeNotificationsEnabled = false;
            this._changeNotificationsEnabled++;
        }
    }, {
        key: 'enableChangeNotifications',
        value: function enableChangeNotifications() {
            //this.changeNotificationsEnabled = true;
            this._changeNotificationsEnabled--;
        }

        /**
         * Returns the minimum value of X that stays inside the geometric shape for
         * the specified y value.
         * @param givenY The y value.
         */

    }, {
        key: 'boundaryX1For',
        value: function boundaryX1For(givenY) {
            return this.x; // Assume, by default, a rectangular shape.
        }

        /**
         * Returns the maximum value of X that stays inside the geometric shape for
         * the specified y value.
         * @param givenY The y value.
         */

    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            return this.x2; // Assume, by default, a rectangular shape.
        }
    }, {
        key: 'moveTo',
        value: function moveTo(newX, newY) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.x = newX;
            this.enableChangeNotifications();
            this.y = newY;
        }
    }, {
        key: 'resize',
        value: function resize(newWidth, newHeight) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.width = newWidth;
            this.enableChangeNotifications();
            this.height = newHeight;
        }
    }, {
        key: 'appearance',
        value: function appearance(json) {
            this.stylingAttributes.fromJSON(json);
            this.notifyListeners(_changeListener2.default.STYLING);
        }

        /**
         * Returns a bounding box for the geometric shape content.
         * @returns A bounding box for the geometric shape content.
         */

    }, {
        key: 'contentBox',
        value: function contentBox(width, height) {
            return null;
        }

        /**
         * Returns the minimum width to fit the specified bounding box as its content.
         * @param boundingBox The content bounding box.
         * @returns The minimum width to fit the specified bounding box as its content.
         */

    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            return null;
        }

        /**
         * Returns the minimum height to fit the specified bounding box as its content.
         * @param boundingBox The content bounding box.
         * @returns The minimum height to fit the specified bounding box as its content.
         */

    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            return null;
        }
    }, {
        key: 'addChangeListener',
        value: function addChangeListener(value) {
            this._changeListeners.push(value);
        }
    }, {
        key: 'removeChangeListenerByType',
        value: function removeChangeListenerByType() {
            if (this._changeListeners) {
                for (var i = 0; i < this._changeListeners.length; i++) {
                    var _changeListeners$i;

                    if ((_changeListeners$i = this._changeListeners[i]).hasAnyType.apply(_changeListeners$i, arguments)) {
                        this._changeListeners.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }, {
        key: 'notifyListeners',
        value: function notifyListeners() {
            if (!this.changeNotificationsEnabled) {
                return;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.changeListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var listener = _step.value;

                    if (listener.hasAnyType.apply(listener, arguments)) {
                        listener.update(this);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        // Events.

    }, {
        key: 'fireOnClick',
        value: function fireOnClick(event) {
            (0, _util.notifyListeners)(this._onClick, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnDblClick',
        value: function fireOnDblClick(event) {
            (0, _util.notifyListeners)(this._onDblClick, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseDown',
        value: function fireOnMouseDown(event) {
            (0, _util.notifyListeners)(this._onMouseDown, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseMove',
        value: function fireOnMouseMove(event) {
            (0, _util.notifyListeners)(this._onMouseMove, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseUp',
        value: function fireOnMouseUp(event) {
            (0, _util.notifyListeners)(this._onMouseUp, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'preserveAspectRatio',
        get: function get() {
            return this._preserveAspectRatio;
        },
        set: function set(value) {
            this._preserveAspectRatio = value;
        }
    }, {
        key: 'x',
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            var delta = value - this._x;
            this._x = value;
            // Adjust the rotation center based on its current value and the variation of x.
            this.rotationCenterX += delta;
            this.notifyListeners(_changeListener2.default.POSITION);
        }
    }, {
        key: 'y',
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            var delta = value - this._y;
            this._y = value;
            // Adjust the rotation center based on its current value and the variation of y.
            this.rotationCenterY += delta;
            this.notifyListeners(_changeListener2.default.POSITION);
        }
    }, {
        key: 'width',
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            if (value >= this.minWidth) {
                var relation = this.height / this.width;
                var delta = value - this._width;
                this._width = value;
                this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
                // Adjust the rotation center based on its current value and the variation of width.
                this.rotationCenterX += delta;
                // Preserve the aspect ratio?
                if (this.preserveAspectRatio) {
                    this.preserveAspectRatio = false; // Necessary to avoid recursive calls.
                    this.height = value * relation;
                    this.preserveAspectRatio = true;
                }
                this.enableChangeNotifications();
                this.notifyListeners(_changeListener2.default.DIMENSION);
            }
        }
    }, {
        key: 'minWidth',
        get: function get() {
            return this._minWidth;
        },
        set: function set(value) {
            this._minWidth = value;
            if (this.width < this.minWidth) {
                this.width = this.minWidth; // If the width changes, listeners will be notified.
            }
        }
    }, {
        key: 'height',
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            if (value >= this.minHeight) {
                var relation = this.width / this.height;
                var delta = value - this._height;
                this._height = value;
                this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
                // Adjust the rotation center based on its current value and the variation of height.
                this.rotationCenterX += delta;
                this.rotationCenterY = this.y + this.height / 2;
                // Preserve the aspect ratio?
                if (this.preserveAspectRatio) {
                    this.preserveAspectRatio = false; // Necessary to avoid recursive calls.
                    this.width = value * relation;
                    this.preserveAspectRatio = true;
                }
                this.enableChangeNotifications();
                this.notifyListeners(_changeListener2.default.DIMENSION);
            }
        }
    }, {
        key: 'minHeight',
        get: function get() {
            return this._minHeight;
        },
        set: function set(value) {
            this._minHeight = value;
            if (this.height < this.minHeight) {
                this.height = this.minHeight; // If the height changes, listeners will be notified.
            }
        }
    }, {
        key: 'rotation',
        get: function get() {
            return this._rotation;
        },
        set: function set(value) {
            this._rotation = value;
            this.notifyListeners(_changeListener2.default.ROTATION);
        }
    }, {
        key: 'rotationCenterX',
        get: function get() {
            return this._rotationCenterX;
        },
        set: function set(value) {
            this._rotationCenterX = value;
            this.notifyListeners(_changeListener2.default.ROTATION);
        }
    }, {
        key: 'rotationCenterY',
        get: function get() {
            return this._rotationCenterY;
        },
        set: function set(value) {
            this._rotationCenterY = value;
            this.notifyListeners(_changeListener2.default.ROTATION);
        }
    }, {
        key: 'x2',
        get: function get() {
            return this.x + this.width;
        },
        set: function set(value) {
            if (value < this.x) {
                // Invert x1 and x2.
                var temp = this.x;
                this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
                this.x = value;
                this.enableChangeNotifications();
                this.width += temp - this.x;
            } else {
                this.width = value - this.x;
            }
        }
    }, {
        key: 'y2',
        get: function get() {
            return this.y + this.height;
        },
        set: function set(value) {
            if (value < this.y) {
                // Invert y1 and y2.
                var temp = this.y;
                this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
                this.y = value;
                this.enableChangeNotifications();
                this.height += temp - this.y;
            } else {
                this.height = value - this.y;
            }
        }
    }, {
        key: 'stylingAttributes',
        get: function get() {
            return this._stylingAttributes;
        },
        set: function set(value) {
            this._stylingAttributes = value;
            value.target = this;
            this.notifyListeners(_changeListener2.default.STYLING);
        }
    }, {
        key: 'borderSize',
        get: function get() {
            if (this.stylingAttributes !== null) {
                return this.stylingAttributes.strokeWidth / 2;
            }
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: 'drawn',
        get: function get() {
            return this._drawn;
        },
        set: function set(value) {
            this._drawn = value;
        }
    }, {
        key: 'changeListeners',
        get: function get() {
            return this._changeListeners;
        },
        set: function set(value) {
            this._changeListeners = value;
        }
    }, {
        key: 'onClick',
        get: function get() {
            return this._onClick;
        },
        set: function set(value) {
            this._onClick = value;
        }
    }, {
        key: 'onDblClick',
        get: function get() {
            return this._onDblClick;
        },
        set: function set(value) {
            this._onDblClick = value;
        }
    }, {
        key: 'onMouseDown',
        get: function get() {
            return this._onMouseDown;
        },
        set: function set(value) {
            this._onMouseDown = value;
        }
    }, {
        key: 'onMouseMove',
        get: function get() {
            return this._onMouseMove;
        },
        set: function set(value) {
            this._onMouseMove = value;
        }
    }, {
        key: 'onMouseUp',
        get: function get() {
            return this._onMouseUp;
        },
        set: function set(value) {
            this._onMouseUp = value;
        }
    }, {
        key: 'tag',
        get: function get() {
            return this._tag;
        },
        set: function set(value) {
            this._tag = value;
        }
    }, {
        key: 'changeNotificationsEnabled',
        get: function get() {
            return this._changeNotificationsEnabled === 0;
        }
    }], [{
        key: 'PARENT',
        get: function get() {
            return "parent";
        }
    }]);

    return GraphicalElement;
}();

exports.default = GraphicalElement;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StylingAttributes = function () {
    function StylingAttributes() {
        var strokeWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var strokeColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'black';
        var fillColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#FFFFCC';
        var strokeDashArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        _classCallCheck(this, StylingAttributes);

        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._target = target;
        this._strokeDashArray = strokeDashArray;
        //this._visible = true;
    }

    /*
        get visible() {
            return this._visible;
        }
    
        set visible(value) {
            this._visible = value;
            this.notifyTarget();
        }
    */

    _createClass(StylingAttributes, [{
        key: 'fromJSON',
        value: function fromJSON(json) {
            this.fillColor = json.fill;
            this.strokeColor = json.stroke;
            this.strokeWidth = json.strokeWidth;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            //let visibilityValue = this.visible ? "visible" : "hidden";
            return {
                fill: this.fillColor,
                stroke: this.strokeColor,
                strokeWidth: this.strokeWidth
            };
            // visibility: visibilityValue
        }
    }, {
        key: 'toString',
        value: function toString() {
            var style = "stroke:" + this.strokeColor + "; fill: " + this.fillColor + "; stroke-width: " + this.strokeWidth + ";";
            if (this.strokeDashArray !== null) {
                style += " stroke-dasharray: " + this.strokeDashArray + ";";
            }
            style += "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;";
            return style;
        }
    }, {
        key: 'notifyTarget',
        value: function notifyTarget() {
            if (this.target !== null) {
                this.target.notifyListeners(_changeListener2.default.STYLING);
            }
        }
    }, {
        key: 'strokeWidth',
        get: function get() {
            return this._strokeWidth;
        },
        set: function set(value) {
            this._strokeWidth = value;
            this.notifyTarget();
        }
    }, {
        key: 'strokeColor',
        get: function get() {
            return this._strokeColor;
        },
        set: function set(value) {
            this._strokeColor = value;
            this.notifyTarget();
        }
    }, {
        key: 'fillColor',
        get: function get() {
            return this._fillColor;
        },
        set: function set(value) {
            this._fillColor = value;
            this.notifyTarget();
        }
    }, {
        key: 'strokeDashArray',
        get: function get() {
            return this._strokeDashArray;
        },
        set: function set(value) {
            this._strokeDashArray = value;
        }
    }, {
        key: 'target',
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
        }
    }]);

    return StylingAttributes;
}();

exports.default = StylingAttributes;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultDrawer = function () {
    function DefaultDrawer(svgArea) {
        _classCallCheck(this, DefaultDrawer);

        this._svgArea = svgArea;
    }

    _createClass(DefaultDrawer, [{
        key: 'svgArea',
        get: function get() {
            return this._svgArea;
        },
        set: function set(value) {
            this._svgArea = value;
        }
    }]);

    return DefaultDrawer;
}();

exports.default = DefaultDrawer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralPositionChangeListener = function (_ChangeListener) {
    _inherits(GeneralPositionChangeListener, _ChangeListener);

    function GeneralPositionChangeListener() {
        _classCallCheck(this, GeneralPositionChangeListener);

        return _possibleConstructorReturn(this, (GeneralPositionChangeListener.__proto__ || Object.getPrototypeOf(GeneralPositionChangeListener)).call(this, _changeListener2.default.POSITION));
    }

    _createClass(GeneralPositionChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.changeX(target);
            this.changeY(target);
        }
    }, {
        key: 'changeX',
        value: function changeX(target) {
            target.drawn.setAttribute("x", target.x);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.drawn.setAttribute("y", target.y);
        }
    }]);

    return GeneralPositionChangeListener;
}(_changeListener2.default);

exports.default = GeneralPositionChangeListener;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralDimensionChangeListener = function (_ChangeListener) {
    _inherits(GeneralDimensionChangeListener, _ChangeListener);

    function GeneralDimensionChangeListener() {
        _classCallCheck(this, GeneralDimensionChangeListener);

        return _possibleConstructorReturn(this, (GeneralDimensionChangeListener.__proto__ || Object.getPrototypeOf(GeneralDimensionChangeListener)).call(this, _changeListener2.default.DIMENSION));
    }

    _createClass(GeneralDimensionChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.changeWidth(target);
            this.changeHeight(target);
        }
    }, {
        key: 'changeWidth',
        value: function changeWidth(target) {
            target.drawn.setAttribute("width", target.width);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.drawn.setAttribute("height", target.height);
        }
    }]);

    return GeneralDimensionChangeListener;
}(_changeListener2.default);

exports.default = GeneralDimensionChangeListener;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleChangeListener = function (_ChangeListener) {
    _inherits(StyleChangeListener, _ChangeListener);

    function StyleChangeListener() {
        _classCallCheck(this, StyleChangeListener);

        return _possibleConstructorReturn(this, (StyleChangeListener.__proto__ || Object.getPrototypeOf(StyleChangeListener)).call(this, _changeListener2.default.STYLING));
    }

    _createClass(StyleChangeListener, [{
        key: 'update',
        value: function update(target) {
            Object.assign(target.drawn.style, target.stylingAttributes.toJSON());
        }
    }]);

    return StyleChangeListener;
}(_changeListener2.default);

exports.default = StyleChangeListener;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 03/07/2017.
 */



/**
 * This method returns the angle in degrees between two lines.
 * @param ax1 The first line x1 coordinate.
 * @param ay1 The first line y1 coordinate.
 * @param ax2 The first line x2 coordinate.
 * @param ay2 The first line y2 coordinate.
 * @param bx1 The second line x1 coordinate.
 * @param by1 The second line y1 coordinate.
 * @param bx2 The second line x2 coordinate.
 * @param by2 The second line y2 coordinate.
 * @returns {number} The angle in degrees between the two lines.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.angleBetween2Lines = angleBetween2Lines;
exports.angleBetween2Vectors = angleBetween2Vectors;
exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.notifyListeners = notifyListeners;
exports.validateArgumentsObject = validateArgumentsObject;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function angleBetween2Lines(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    var angle1 = Math.atan2(ay1 - ay2, ax1 - ax2);
    var angle2 = Math.atan2(by1 - by2, bx1 - bx2);
    return toDegrees(Math.abs(angle1) - Math.abs(angle2));
}

/**
 * This method calculates the angle in degrees between two vectors with origin at (0, 0).
 * @param ax2 The x-coordinate of the second point (1st vector).
 * @param ay2 The y-coordinate of the second point (1st vector).
 * @param bx2 The x-coordinate of the second point (2nd vector).
 * @param by2 The y-coordinate of the second point (2nd vector).
 * @returns {number} The angle between the two vectors in degrees.
 */
function angleBetween2Vectors(ax2, ay2, bx2, by2) {
    // See http://www.wikihow.com/Find-the-Angle-Between-Two-Vectors

    // Convert y cartesian coordinate to y drawing coordinate.
    ay2 *= -1;
    by2 *= -1;

    // Calculate the length of each vector.
    var lengthV1 = Math.sqrt(ax2 * ax2 + ay2 * ay2);
    var lengthV2 = Math.sqrt(bx2 * bx2 + by2 * by2);

    // Calculate the scalar product of the two vectors.
    var scalarProduct = ax2 * bx2 + ay2 * by2;

    // Calculate the cosine of the angle between the two vectors.
    var cosine = scalarProduct / (lengthV1 * lengthV2);

    // Find the angle based on the arccosine.
    var angle = Math.acos(cosine);
    return toDegrees(angle);
}

// Converts from degrees to radians.
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

// Converts from radians to degrees.
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

function notifyListeners(listener, target) {
    if (listener !== null && listener) {
        if (typeof listener === "function") {
            listener.apply(undefined, [target].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 2))));
        } else {
            throw "Callback is not a function: " + (typeof listener === "undefined" ? "undefined" : _typeof(listener));
        }
    }
}

function validateArgumentsObject(argumentsObject, key, defaultValue) {
    if (!(key in argumentsObject)) {
        if (typeof defaultValue === 'function') {
            argumentsObject[key] = defaultValue();
        } else {
            argumentsObject[key] = defaultValue;
        }
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



/**
 * This class implements a bounding box.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundingBox = function () {
    function BoundingBox() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

        _classCallCheck(this, BoundingBox);

        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }

    _createClass(BoundingBox, [{
        key: 'x1',
        get: function get() {
            return this._x1;
        },
        set: function set(value) {
            this._x1 = value;
        }
    }, {
        key: 'y1',
        get: function get() {
            return this._y1;
        },
        set: function set(value) {
            this._y1 = value;
        }
    }, {
        key: 'x2',
        get: function get() {
            return this._x2;
        },
        set: function set(value) {
            this._x2 = value;
        }
    }, {
        key: 'y2',
        get: function get() {
            return this._y2;
        },
        set: function set(value) {
            this._y2 = value;
        }
    }, {
        key: 'width',
        get: function get() {
            return Math.abs(this.x2 - this.x1);
        }
    }, {
        key: 'height',
        get: function get() {
            return Math.abs(this.y2 - this.y1);
        }
    }]);

    return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultLookAndFeelFactory = __webpack_require__(51);

var _defaultLookAndFeelFactory2 = _interopRequireDefault(_defaultLookAndFeelFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var lookAndFeelSingleton = null;

/**
 * This class implements a singleton that contains a factory created to return
 * drawers for geometric elements based on a specific look and feel.
 * If no look and feel factory is passed as an argument, a default one is adopted.
 */
var LookAndFeel = function () {
    function LookAndFeel() {
        var lookAndFeelFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _defaultLookAndFeelFactory2.default();

        _classCallCheck(this, LookAndFeel);

        if (!lookAndFeelSingleton) {
            lookAndFeelSingleton = this;

            this._lookAndFeelFactory = lookAndFeelFactory;
        }

        return lookAndFeelSingleton;
    }

    _createClass(LookAndFeel, [{
        key: 'getDrawerFor',
        value: function getDrawerFor(element) {
            return this._lookAndFeelFactory.getDrawerFor(element);
        }
    }, {
        key: 'lookAndFeelFactory',
        get: function get() {
            return this._lookAndFeelFactory;
        },
        set: function set(value) {
            this._lookAndFeelFactory = value;
        }
    }]);

    return LookAndFeel;
}();

exports.default = LookAndFeel;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements rectangles.
 */
var Rectangle = function (_GraphicalElement) {
    _inherits(Rectangle, _GraphicalElement);

    function Rectangle() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var rectangleStylingAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _stylingAttributes2.default();

        _classCallCheck(this, Rectangle);

        return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, { x: x1, y: y1, width: x2 - x1, height: y2 - y1, stylingAttributes: rectangleStylingAttributes }));
    }

    _createClass(Rectangle, [{
        key: 'contentBox',
        value: function contentBox(width, height) {
            // For rectangles, it does not matter the current width/height of a group they may be a frame of.
            var border = this.borderSize;
            var boundingBox = new _boundingBox2.default(this.x + border, this.y + border, this.x + this.width - border, this.y + this.height - border);
            return boundingBox;
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            var boundingBoxWidth = boundingBox.x2 - boundingBox.x1;
            boundingBoxWidth += this.stylingAttributes.strokeWidth;
            return boundingBoxWidth;
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            var boundingBoxHeight = boundingBox.y2 - boundingBox.y1;
            boundingBoxHeight += this.stylingAttributes.strokeWidth;
            return boundingBoxHeight;
        }
    }]);

    return Rectangle;
}(_graphicalElement2.default);

exports.default = Rectangle;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _verticalGroupChildChangeListener = __webpack_require__(25);

var _verticalGroupChildChangeListener2 = _interopRequireDefault(_verticalGroupChildChangeListener);

var _groupStylingAttributes = __webpack_require__(12);

var _groupStylingAttributes2 = _interopRequireDefault(_groupStylingAttributes);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroup = function (_GraphicalElement) {
    _inherits(VerticalGroup, _GraphicalElement);

    function VerticalGroup() {
        var verticalGroupX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var verticalGroupY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var verticalGroupStylingAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _stylingAttributes2.default();
        var groupStylingAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _groupStylingAttributes2.default();

        _classCallCheck(this, VerticalGroup);

        var _this = _possibleConstructorReturn(this, (VerticalGroup.__proto__ || Object.getPrototypeOf(VerticalGroup)).call(this, {
            x: verticalGroupX,
            y: verticalGroupY,
            width: 0,
            height: 0,
            stylingAttributes: verticalGroupStylingAttributes
        }));

        _this._groupStylingAttributes = groupStylingAttributes;
        _this._children = [];
        _this._resizePolicy = [];
        _this._gravity = [];
        _this._weight = [];
        _this._overlap = [];
        _this._frame = null;
        _this._dimensionReadjustmentEnabled = 0; // Must listeners be notified about changes?
        // 0 means yes.
        // Any value greater than 0 means a recursive call to
        // disable change notifications.
        // Does the group must fit its content?
        // If the user resize it, for example, this attribute may be changed to false.
        _this._fitContent = true;
        return _this;
    }

    // The child goes further the content area and touches the frame borders.


    _createClass(VerticalGroup, [{
        key: 'adjustChildrenPositionAndDimension',


        /**
         * Recalculate children position and dimension.
         */
        value: function adjustChildrenPositionAndDimension() {
            var availableWidthForChildren = this.width;
            var newX = this.x;
            var newY = this.y;
            var rightXLimit = this.x + this.width;
            var bottomYLimit = this.y + this.height;
            if (this.frame !== null) {
                var contentBox = this.frame.contentBox(this.width, this.height);
                availableWidthForChildren = contentBox.width;
                newX = contentBox.x1;
                newY = contentBox.y1;
                rightXLimit = contentBox.x2;
                bottomYLimit = contentBox.y2;
            }

            // Calculate the content height.
            var contentHeight = 0;
            if (this.countChildren() > 0) {
                contentHeight += this.verMargin;
            }
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _child = _step.value;

                    contentHeight += _child.height + this.overlap[i];
                    contentHeight += this.verMargin;
                    i++;
                }

                // Calculate the space left after drawing all children.
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var heightLeft = bottomYLimit - newY - contentHeight;
            // If the is space left, distribute it among the children with weight greater than zero (0).
            if (heightLeft > 0) {
                // Sum all children weight.
                var weightSum = 0;
                for (i = 0; i < this.countChildren(); i++) {
                    weightSum += this.weight[i];
                }
                for (i = 0; i < this.countChildren(); i++) {
                    var child = this.children[i];
                    if (this.weight[i] > 0) {
                        var deltaHeight = this.weight[i] / weightSum * heightLeft;
                        child.height += deltaHeight;
                    }
                }
            }

            // Center content vertically inside the group.
            // It is important for squared frames as circles, for example.
            // Recalculate the content weight.
            contentHeight = 0;
            if (this.countChildren() > 0) {
                contentHeight += this.verMargin;
            }
            i = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _child2 = _step2.value;

                    contentHeight += _child2.height + this.overlap[i];
                    contentHeight += this.verMargin;
                    i++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var deltaY = (bottomYLimit - newY - contentHeight) / 2;
            newY += deltaY + this.verMargin; // The vertical margin is necessary to start at the right position for the first child.

            // Adjust children's position and dimension.
            for (i = 0; i < this.countChildren(); i++) {
                //let oldChangeNotificationsStatus = this.children[i].changeNotificationsEnabled;
                this.children[i].disableChangeNotifications(); // Prevent cascade readjustments: parent changes child and child changes parent.

                if (this.resizePolicy[i] === VerticalGroup.WRAP_CONTENT) {
                    if (this.gravity[i] === VerticalGroup.LEFT) {
                        this.children[i].x = newX + this.horMargin;
                    } else if (this.gravity[i] == VerticalGroup.RIGHT) {
                        this.children[i].x = rightXLimit - this.horMargin - this.children[i].width;
                    } else {
                        this.children[i].x = (newX + rightXLimit - this.children[i].width) / 2;
                    }
                } else if (this.resizePolicy[i] === VerticalGroup.FILL_SPACE) {
                    this.children[i].width = availableWidthForChildren - 2 * this.horMargin;
                    this.children[i].x = newX + this.horMargin;
                } else if (this.resizePolicy[i] === VerticalGroup.MATCH_CONTENT_AREA) {
                    this.children[i].width = availableWidthForChildren;
                    this.children[i].x = newX;
                } else if (this.resizePolicy[i] === VerticalGroup.MATCH_PARENT) {
                    var boundaryX1 = this.boundaryX1For(newY);
                    var boundaryX2 = this.boundaryX2For(newY);
                    if (this.frame !== null) {
                        boundaryX1 = this.frame.boundaryX1For(newY);
                        boundaryX2 = this.frame.boundaryX2For(newY);
                    }

                    this.children[i].width = boundaryX2 - boundaryX1;
                    this.children[i].x = boundaryX1;
                }

                newY += this.overlap[i];
                this.children[i].y = newY;
                newY += this.children[i].height + this.verMargin;

                //this.children[i].changeNotificationsEnabled = oldChangeNotificationsStatus;
                this.children[i].enableChangeNotifications();
                this.children[i].notifyListeners(_changeListener2.default.POSITION, _changeListener2.default.DIMENSION);
            }
        }

        /**
         * Readjusts the group dimension.
         */

    }, {
        key: 'readjustDimensions',
        value: function readjustDimensions() {
            if (!this.dimensionReadjustmentEnabled) {
                return;
            }

            if (this.fitContent || this.minWidth > this.width) {
                this.width = this.minWidth;
            }
            if (this.fitContent || this.minHeight > this.height) {
                this.height = this.minHeight;
            }
        }

        /**
         * Increases the width value by the specified parameter value.
         * @param {number} value The width delta.
         */

    }, {
        key: 'increaseWidthBy',
        value: function increaseWidthBy(value) {
            this.width += value;
        }

        /**
         * Increases the height value by the specified parameter value.
         * @param {number} value The height delta.
         */

    }, {
        key: 'increaseHeightBy',
        value: function increaseHeightBy(value) {
            this.height += value;
        }

        /**
         * Appends a new child to the group.
         * @param child The child.
         * @param resizePolicy the child resize policy.
         * @param gravity The child horizontal gravity.
         */

    }, {
        key: 'addChild',
        value: function addChild(child) {
            var resizePolicy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VerticalGroup.WRAP_CONTENT;
            var gravity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : VerticalGroup.LEFT;
            var weight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var overlap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

            //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
            //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;
            this.disableChangeNotifications(); // Avoid unnecessary change notifications.
            this.disableDimensionReadjustment(); // Avoid unnecessary readjustments.

            //*****************************
            // Increase the group height to fit the new child.
            var childRequiredHeight = child.height + this.verMargin + overlap;
            if (this.countChildren() == 0) {
                // Add another vertical margin to the first child.
                childRequiredHeight += this.verMargin;
            }
            this.increaseHeightBy(childRequiredHeight);

            //*****************************
            // Calculate the minimum width that the group must have to fit this new child in its content.
            var requiredGroupWidth = child.minWidth + 2 * this.horMargin; // MARGIN + child + MARGIN.
            if (this.frame !== null) {
                var boundingBox = new _boundingBox2.default(this.x, this.y, this.x + requiredGroupWidth, this.y2);
                requiredGroupWidth = this.frame.widthToFit(boundingBox);
            }

            //*****************************
            // Add to the group the child, its resizing policy, and its gravity.
            this.children.push(child);
            this.resizePolicy.push(resizePolicy);
            this.gravity.push(gravity);
            this.weight.push(weight);
            this.overlap.push(overlap);
            this.drawn.appendChild(child.drawn);

            //*****************************
            // Update the group width if necessary.
            if (this.width < requiredGroupWidth) {
                this.width = requiredGroupWidth;
            }

            // Add the group as a child change listener.
            child.addChangeListener(new _verticalGroupChildChangeListener2.default(this));

            //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
            this.enableChangeNotifications();
            this.adjustChildrenPositionAndDimension();
            this.enableDimensionReadjustment();
            //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
        }

        /**
         * Returns the number of children.
         * @returns {Number} The number of children.
         */

    }, {
        key: 'countChildren',
        value: function countChildren() {
            return this._children.length;
        }

        /**
         * Returns the children at the specified index.
         * @param {number} i The index.
         * @returns {GeometricShape} The child at the specified index.
         */

    }, {
        key: 'getChildAt',
        value: function getChildAt(i) {
            return this._children[i];
        }
    }, {
        key: 'disableDimensionReadjustment',
        value: function disableDimensionReadjustment() {
            this._dimensionReadjustmentEnabled++;
        }
    }, {
        key: 'enableDimensionReadjustment',
        value: function enableDimensionReadjustment() {
            this._dimensionReadjustmentEnabled--;
        }
    }, {
        key: 'forceFitContent',
        value: function forceFitContent() {
            this.fitContent = true;
            this.readjustDimensions();
        }
    }, {
        key: 'x',


        /**
         * Returns the group x coordinate.
         * @returns {number} The group x coordinate.
         */
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'x', this);
        }

        /**
         * Sets the group x coordinate.
         * @param {number} value The new x coordinate.
         */
        ,
        set: function set(value) {
            // Calculate the difference between the current x value and the new one.
            var delta = value - this.x;

            _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'x', value, this);
            if (this.frame !== null) {
                this.frame.x = this.x;
            }

            //*****************************
            // Move all children.
            this.disableDimensionReadjustment(); // The dimension does not have to change in this case.
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var child = _step3.value;

                    child.x += delta;
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            this.enableDimensionReadjustment();
        }

        /**
         * Returns the group y coordinate.
         * @returns {number} The group y coordinate.
         */

    }, {
        key: 'y',
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'y', this);
        }

        /**
         * Changes the group y coordinate.
         * @param {number} value The new y coordinate.
         */
        ,
        set: function set(value) {
            // Calculate the difference between the current y value and the new one.
            var delta = value - this.y;

            _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'y', value, this);
            if (this.frame !== null) {
                this.frame.y = this.y;
            }

            //*****************************
            // Move all children.
            this.disableDimensionReadjustment(); // The dimension does not have to change in this case.
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var child = _step4.value;

                    child.y += delta;
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            this.enableDimensionReadjustment();
        }

        /**
         * Returns the group width.
         * @returns {number} The group width.
         */

    }, {
        key: 'width',
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'width', this);
        }

        /**
         * Sets the group width.
         * If the new width is smaller than the minimum required width to display the group, return without changing anything.
         * @param {number} value The new width.
         */
        ,
        set: function set(value) {
            //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
            //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;
            this.disableChangeNotifications(); // Prevent stack overflow.
            this.disableDimensionReadjustment(); // Prevent stack overflow.
            var minimumRequiredWidth = this.minContentWidth;
            if (this.frame !== null) {
                var boundingBox = new _boundingBox2.default(this.x, this.y, this.x + minimumRequiredWidth, this.y2);
                minimumRequiredWidth = this.frame.widthToFit(boundingBox);
            }
            if (value < minimumRequiredWidth) {
                // Do not resize if the content does not fit the new width.
                return;
            }

            _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'width', value, this);

            // Check whether the height must be changed.
            // It must be necessary if the frame is a circle or a square, for example.
            if (this.frame !== null) {
                this.frame.width = this.width;
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'height', this.frame.height, this);
            }

            this.adjustChildrenPositionAndDimension();

            this.enableChangeNotifications();
            this.enableDimensionReadjustment();
            //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
            //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
        }

        /**
         * Calculates and returns the minimum width required to display the group content.
         * @returns {number} The minimum width required to display the group content.
         */

    }, {
        key: 'minContentWidth',
        get: function get() {
            var calcMinWidth = 0;
            // Get the biggest child min width and add the horizontal margin when necessary.
            for (var i = 0; i < this.countChildren(); i++) {
                var child = this.getChildAt(i);
                if (child.minWidth > calcMinWidth) {
                    calcMinWidth = child.minWidth;
                    // MATCH_CONTENT_AREA does not use horizontal margins for elements.
                    // It is used for lines, for example.
                    if (this.resizePolicy[i] !== VerticalGroup.MATCH_CONTENT_AREA && this.resizePolicy[i] !== VerticalGroup.MATCH_PARENT) {
                        calcMinWidth += 2 * this.horMargin;
                    }
                }
            }
            return calcMinWidth;
        }

        /**
         * Calculates and returns the minimum width required to display the group frame and its content.
         * @returns {number} The minimum width required to display the group frame and its content.
         */

    }, {
        key: 'minWidth',
        get: function get() {
            var calcMinWidth = this.minContentWidth;

            if (this.frame !== null) {
                var boundingBox = new _boundingBox2.default(this.x, this.y, this.x + calcMinWidth, this.y2);
                var frameWidth = this.frame.widthToFit(boundingBox);
                return frameWidth;
            }

            return calcMinWidth;
        }

        /**
         * Returns the group height.
         * @returns {number} The group height.
         */

    }, {
        key: 'height',
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'height', this);
        }

        /**
         * Sets the group height.
         * @param {number} value The group height.
         */
        ,
        set: function set(value) {
            //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
            //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;

            this.disableChangeNotifications();
            this.disableDimensionReadjustment(); // Prevent stack overflow.
            var minimumRequiredHeight = this.minHeight;
            if (value < minimumRequiredHeight) {
                return;
            }

            _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'height', value, this);

            // Check whether the width must be changed.
            // It must be necessary if the frame is a circle or a square, for example.
            if (this.frame !== null) {
                this.frame.height = this.height;
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), 'width', this.frame.width, this);
            }

            this.adjustChildrenPositionAndDimension();

            //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
            this.enableChangeNotifications();
            this.enableDimensionReadjustment();
            //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
        }

        /**
         * Calculates and returns the minimum height required to display the group content.
         * @returns {number} The minimum height required to display the group content.
         */

    }, {
        key: 'minContentHeight',
        get: function get() {
            var contentMinHeight = 0;
            var i = 0;
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var child = _step5.value;

                    contentMinHeight += this.verMargin;
                    contentMinHeight += child.minHeight + this.overlap[i];
                    i++;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            if (this.countChildren() > 0) {
                contentMinHeight += this.verMargin;
            }

            return contentMinHeight;
        }

        /**
         * Calculates and returns the minimum height required to display the group frame and its content.
         * @returns {number} The minimum height required to display the group frame and its content.
         */

    }, {
        key: 'minHeight',
        get: function get() {
            var calcMinHeight = this.minContentHeight;

            if (this.frame !== null) {
                var boundingBox = new _boundingBox2.default(this.x, this.y, this.x2, this.y + calcMinHeight);
                var frameHeight = this.frame.heightToFit(boundingBox);
                return frameHeight;
            }

            return calcMinHeight;
        }

        /**
         * Returns the children.
         * @returns {Array} The children.
         */

    }, {
        key: 'children',
        get: function get() {
            return this._children;
        }

        /**
         * Sets the children.
         * @param {Array} value The children array.
         */
        ,
        set: function set(value) {
            this._children = [];
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = value[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var child = _step6.value;

                    this.add(child);
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }

        /**
         * Returns the frame.
         * @returns {GeometricShape|null} The frame.
         */

    }, {
        key: 'frame',
        get: function get() {
            return this._frame;
        }

        // TODO: What to do when a frame is removed?
        /**
         * Sets the frame.
         * @param {GeometricShape|null} value value The new frame.
         */
        ,
        set: function set(value) {
            this.disableChangeNotifications();

            // Change the group width and height to accommodate the frame border.
            this.width += value.borderSize * 2;
            this.height += value.borderSize * 2;

            this._frame = value;
            this.drawn.appendChild(this.frame.drawn);
            this.frame.x = this.x;
            this.frame.y = this.y;
            this.frame.width = this.width;
            this.frame.height = this.height;

            this.adjustChildrenPositionAndDimension();
            this.enableChangeNotifications();

            this.frame.notifyListeners(_changeListener2.default.POSITION, _changeListener2.default.DIMENSION);
            this.notifyListeners(_changeListener2.default.POSITION, _changeListener2.default.DIMENSION);
        }
    }, {
        key: 'dimensionReadjustmentEnabled',
        get: function get() {
            return this._dimensionReadjustmentEnabled === 0;
        }

        /*
            set dimensionReadjustmentEnabled(value) {
                this._dimensionReadjustmentEnabled = value;
            }
        */

    }, {
        key: 'fitContent',
        get: function get() {
            return this._fitContent;
        },
        set: function set(value) {
            this._fitContent = value;
        }
    }, {
        key: 'groupStylingAttributes',
        get: function get() {
            return this._groupStylingAttributes;
        },
        set: function set(value) {
            this._groupStylingAttributes = value;
            this.notifyListeners(_changeListener2.default.STYLING);
        }

        /**
         * Returns the horizontal margin.
         * @returns {number} The horizontal margin.
         */

    }, {
        key: 'horMargin',
        get: function get() {
            if (this.groupStylingAttributes !== null) {
                return this.groupStylingAttributes.horMargin;
            }
            return 0;
        }

        /**
         * Returns the vertical margin.
         * @returns {number} The vertical margin.
         */

    }, {
        key: 'verMargin',
        get: function get() {
            if (this.groupStylingAttributes !== null) {
                return this.groupStylingAttributes.verMargin;
            }
            return 0;
        }
    }, {
        key: 'borderSize',
        get: function get() {
            if (this.frame !== null) {
                return this.frame.borderSize;
            }
        }
    }, {
        key: 'resizePolicy',
        get: function get() {
            return this._resizePolicy;
        },
        set: function set(value) {
            this._resizePolicy = value;
        }
    }, {
        key: 'gravity',
        get: function get() {
            return this._gravity;
        },
        set: function set(value) {
            this._gravity = value;
        }
    }, {
        key: 'weight',
        get: function get() {
            return this._weight;
        },
        set: function set(value) {
            this._weight = value;
        }
    }, {
        key: 'overlap',
        get: function get() {
            return this._overlap;
        },
        set: function set(value) {
            this._overlap = value;
        }
    }], [{
        key: 'MATCH_PARENT',
        get: function get() {
            return 3;
        }

        // The child does not use horizontal margins for elements.

    }, {
        key: 'MATCH_CONTENT_AREA',
        get: function get() {
            return 2;
        }

        // The child uses the parent space minus the margins.

    }, {
        key: 'FILL_SPACE',
        get: function get() {
            return 1;
        }
    }, {
        key: 'WRAP_CONTENT',
        get: function get() {
            return 0;
        }
    }, {
        key: 'LEFT',
        get: function get() {
            return 0;
        }
    }, {
        key: 'CENTER',
        get: function get() {
            return 1;
        }
    }, {
        key: 'RIGHT',
        get: function get() {
            return 2;
        }
    }]);

    return VerticalGroup;
}(_graphicalElement2.default);

exports.default = VerticalGroup;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupStylingAttributes = function () {
    function GroupStylingAttributes() {
        var horMargin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var verMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

        _classCallCheck(this, GroupStylingAttributes);

        this._horMargin = horMargin;
        this._verMargin = verMargin;
    }

    _createClass(GroupStylingAttributes, [{
        key: 'horMargin',
        get: function get() {
            return this._horMargin;
        },
        set: function set(value) {
            this._horMargin = value;
        }
    }, {
        key: 'verMargin',
        get: function get() {
            return this._verMargin;
        },
        set: function set(value) {
            this._verMargin = value;
        }
    }]);

    return GroupStylingAttributes;
}();

exports.default = GroupStylingAttributes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2018.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _util = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecorator = function (_GraphicalElement) {
    _inherits(BoxVerticesDecorator, _GraphicalElement);

    _createClass(BoxVerticesDecorator, null, [{
        key: "VERTEX",
        get: function get() {
            return "vertex";
        }
    }]);

    function BoxVerticesDecorator(decorated) {
        var topLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var topRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var bottomLeft = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var bottomRight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var vertexSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;

        _classCallCheck(this, BoxVerticesDecorator);

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecorator.__proto__ || Object.getPrototypeOf(BoxVerticesDecorator)).call(this));

        decorated.addTag(BoxVerticesDecorator.BOX_VERTICES_TAG, _this);
        _this._decorated = decorated;

        _this._topLeft = topLeft;
        _this._topRight = topRight;
        _this._bottomLeft = bottomLeft;
        _this._bottomRight = bottomRight;

        // Vertices drawn.
        _this._topLeftVertex = null;
        _this._topRightVertex = null;
        _this._bottomLeftVertex = null;
        _this._bottomRightVertex = null;

        // Events' callback functions for vertices.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        _this._onVertexClick = null;
        _this._onVertexDblClick = null;
        _this._onVertexMouseDown = null;
        _this._onVertexMouseMove = null;
        _this._onVertexMouseUp = null;
        _this._vertexSize = vertexSize;
        return _this;
    }

    _createClass(BoxVerticesDecorator, [{
        key: "dispathOnVertexClick",


        // Events.
        value: function dispathOnVertexClick(target, x, y, event) {
            (0, _util.notifyListeners)(this._onVertexClick, target, x, y, event);
        }
    }, {
        key: "dispathOnVertexDblClick",
        value: function dispathOnVertexDblClick(target, x, y, event) {
            (0, _util.notifyListeners)(this._onVertexDblClick, target, x, y, event);
        }
    }, {
        key: "dispathOnVertexMouseDown",
        value: function dispathOnVertexMouseDown(target, x, y, event) {
            (0, _util.notifyListeners)(this._onVertexMouseDown, target, x, y, event);
        }
    }, {
        key: "dispathOnVertexMouseMove",
        value: function dispathOnVertexMouseMove(target, x, y, event) {
            (0, _util.notifyListeners)(this._onVertexMouseMove, target, x, y, event);
        }
    }, {
        key: "dispathOnVertexMouseUp",
        value: function dispathOnVertexMouseUp(target, x, y, event) {
            (0, _util.notifyListeners)(this._onVertexMouseUp, target, x, y, event);
        }
    }, {
        key: "vertexSize",
        get: function get() {
            return this._vertexSize;
        },
        set: function set(value) {
            this._vertexSize = value;
        }
    }, {
        key: "topLeft",
        get: function get() {
            return this._topLeft;
        },
        set: function set(value) {
            this._topLeft = value;
        }
    }, {
        key: "topRight",
        get: function get() {
            return this._topRight;
        },
        set: function set(value) {
            this._topRight = value;
        }
    }, {
        key: "bottomLeft",
        get: function get() {
            return this._bottomLeft;
        },
        set: function set(value) {
            this._bottomLeft = value;
        }
    }, {
        key: "bottomRight",
        get: function get() {
            return this._bottomRight;
        },
        set: function set(value) {
            this._bottomRight = value;
        }
    }, {
        key: "onVertexClick",
        get: function get() {
            return this._onVertexClick;
        },
        set: function set(value) {
            this._onVertexClick = value;
        }
    }, {
        key: "onVertexDblClick",
        get: function get() {
            return this._onVertexDblClick;
        },
        set: function set(value) {
            this._onVertexDblClick = value;
        }
    }, {
        key: "onVertexMouseDown",
        get: function get() {
            return this._onVertexMouseDown;
        },
        set: function set(value) {
            this._onVertexMouseDown = value;
        }
    }, {
        key: "onVertexMouseMove",
        get: function get() {
            return this._onVertexMouseMove;
        },
        set: function set(value) {
            this._onVertexMouseMove = value;
        }
    }, {
        key: "onVertexMouseUp",
        get: function get() {
            return this._onVertexMouseUp;
        },
        set: function set(value) {
            this._onVertexMouseUp = value;
        }
    }, {
        key: "decorated",
        get: function get() {
            return this._decorated;
        },
        set: function set(value) {
            this._decorated = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this.decorated.width;
        },
        set: function set(value) {
            //this.disableChangeNotifications();
            //this.decorated.disableChangeNotifications();
            this.decorated.width = value;
            //this.decorated.enableChangeNotifications();
            //this.decorated.notifyListeners(ChangeListener.DIMENSION);
            //this.enableChangeNotifications();
        }
    }, {
        key: "height",
        get: function get() {
            return this.decorated.height;
        },
        set: function set(value) {
            //this.disableChangeNotifications();
            //this.decorated.disableChangeNotifications();
            this.decorated.height = value;
            //this.decorated.enableChangeNotifications();
            //this.decorated.notifyListeners(ChangeListener.DIMENSION);
            //this.enableChangeNotifications();
        }
    }, {
        key: "topLeftVertex",
        get: function get() {
            return this._topLeftVertex;
        },
        set: function set(value) {
            this._topLeftVertex = value;
        }
    }, {
        key: "topRightVertex",
        get: function get() {
            return this._topRightVertex;
        },
        set: function set(value) {
            this._topRightVertex = value;
        }
    }, {
        key: "bottomLeftVertex",
        get: function get() {
            return this._bottomLeftVertex;
        },
        set: function set(value) {
            this._bottomLeftVertex = value;
        }
    }, {
        key: "bottomRightVertex",
        get: function get() {
            return this._bottomRightVertex;
        },
        set: function set(value) {
            this._bottomRightVertex = value;
        }
    }], [{
        key: "BOX_VERTICES_TAG",
        get: function get() {
            return "isBoxVertices";
        }
    }, {
        key: "TOP_LEFT",
        get: function get() {
            return 0;
        }

        // It does not use horizontal margins for elements.

    }, {
        key: "TOP_RIGHT",
        get: function get() {
            return 1;
        }

        // It uses horizontal margins for elements.

    }, {
        key: "BOTTOM_LEFT",
        get: function get() {
            return 2;
        }
    }, {
        key: "BOTTOM_RIGHT",
        get: function get() {
            return 3;
        }
    }]);

    return BoxVerticesDecorator;
}(_graphicalElement2.default);

exports.default = BoxVerticesDecorator;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements circles.
 * The general circle equation is (x-a)^2 + (y-b)^2 = r^2,
 * where
 * a,b are the x,y coordinates of the circle's center.
 */
var Circle = function (_GraphicalElement) {
    _inherits(Circle, _GraphicalElement);

    function Circle() {
        var centerX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var centerY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
        var circleStylingAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _stylingAttributes2.default();

        _classCallCheck(this, Circle);

        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, {
            x: centerX - radius,
            y: centerY - radius,
            width: radius * 2,
            height: radius * 2,
            stylingAttributes: circleStylingAttributes
        }));
    }

    _createClass(Circle, [{
        key: 'boundaryX1For',
        value: function boundaryX1For(givenY) {
            // The circle equation is (x-a)^2 + (y-b)^2 = r^2
            // (x-a)^2 = r^2 - (y-b)^2
            // x^2 - 2xa + a^2 = r^2 - (y-b)^2
            // x^2 - 2xa + (a^2 -r^2 + (y-b)^2) = 0
            var eqa = 1;
            var eqb = -2 * this.centerX;
            var eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
            var delta = eqb * eqb - 4 * eqa * eqc;
            var sqrtDelta = Math.sqrt(delta);
            var x1 = (-eqb - sqrtDelta) / (2 * eqa);
            return x1;
        }
    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            var eqa = 1;
            var eqb = -2 * this.centerX;
            var eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
            var delta = eqb * eqb - 4 * eqa * eqc;
            var sqrtDelta = Math.sqrt(delta);
            var x2 = (-eqb + sqrtDelta) / (2 * eqa);
            return x2;
        }
    }, {
        key: 'contentBox',
        value: function contentBox() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            // Take into consideration the ratio among width and height.
            // FORMULA:
            // (width/2)^2 + (height/2)^2 = radius^2
            // (width/2)^2 + (width/ratio/2)^2 = radius^2
            // (width/2)^2 + (width/2*ratio)^2 = radius^2
            // if z = width/2 | z^2 + ((1/ratio)*z)^2 = radius^2
            // (1 + (1/ratio)^2) z^2 = radius^2
            // z = sqrt(radius^2/ (1 + (1/ratio)^2))

            var ratio = width / height;
            var squaredRadius = this.radius * this.radius;
            var halfWidth = Math.sqrt(squaredRadius / (1 + Math.pow(1 / ratio, 2)));
            var halfHeight = halfWidth / ratio;
            var deltaX = this.radius - halfWidth;
            var deltaY = this.radius - halfHeight;

            var contentBox = new _boundingBox2.default(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);

            return contentBox;
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            var diameter = Math.sqrt(Math.pow(boundingBox.width, 2) + Math.pow(boundingBox.height, 2));
            return diameter;
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            return this.widthToFit(boundingBox);
        }
    }, {
        key: 'centerX',
        get: function get() {
            return this.x + this.width / 2;
        }
    }, {
        key: 'centerY',
        get: function get() {
            return this.y + this.height / 2;
        }
    }, {
        key: 'radius',
        get: function get() {
            return this.width / 2;
        }
    }, {
        key: 'width',
        get: function get() {
            return _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'width', this);
        },
        set: function set(value) {
            this.disableChangeNotifications();
            _set(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'height', value, this);
            this.enableChangeNotifications();
            _set(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'width', value, this);
        }
    }, {
        key: 'height',
        get: function get() {
            return _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'height', this);
        },
        set: function set(value) {
            this.disableChangeNotifications();
            _set(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'width', value, this);
            this.enableChangeNotifications();
            _set(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'height', value, this);
        }
    }]);

    return Circle;
}(_graphicalElement2.default);

exports.default = Circle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements ellipses.
 * The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1,
 * where
 * a is the radius along the x-axis
 * b is the radius along the y-axis
 * h,k are the x,y coordinates of the ellipse's center.
 */
var Ellipse = function (_GraphicalElement) {
    _inherits(Ellipse, _GraphicalElement);

    function Ellipse() {
        var centerX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var centerY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var radiusX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
        var radiusY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
        var ellipseStylingAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _stylingAttributes2.default();
        var ellipsePreserveAspectRatio = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        _classCallCheck(this, Ellipse);

        return _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this, { x: centerX - radiusX, y: centerY - radiusY, width: radiusX * 2, height: radiusY * 2, stylingAttributes: ellipseStylingAttributes, preserveAspectRatio: ellipsePreserveAspectRatio }));
    }

    _createClass(Ellipse, [{
        key: 'boundaryX1For',
        value: function boundaryX1For(givenY) {
            // The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1
            // (x^2 - 2xh + h^2)
            // ----------------- + (y-k)^2/b^2 - 1 = 0
            //        a^2
            // (1/a^2)x^2 - (2h/a^2)x + h^2/a^2 + (y-k)^2/b^2 - 1 = 0
            var a = this.radiusX;
            var b = this.radiusY;
            var h = this.centerX;
            var k = this.centerY;
            var eqa = 1 / (a * a);
            var eqb = -2 * h / (a * a);
            var eqc = h * h / (a * a) + Math.pow(givenY - k, 2) / (b * b) - 1;
            var delta = eqb * eqb - 4 * eqa * eqc;
            var sqrtDelta = Math.sqrt(delta);
            var x1 = (-eqb - sqrtDelta) / (2 * eqa);
            return x1;
        }
    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            // The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1
            // (x^2 - 2xh + h^2)
            // ----------------- + (y-k)^2/b^2 - 1 = 0
            //        a^2
            // (1/a^2)x^2 - (2h/a^2)x + h^2/a^2 + (y-k)^2/b^2 - 1 = 0
            var a = this.radiusX;
            var b = this.radiusY;
            var h = this.centerX;
            var k = this.centerY;
            var eqa = 1 / (a * a);
            var eqb = -2 * h / (a * a);
            var eqc = h * h / (a * a) + Math.pow(givenY - k, 2) / (b * b) - 1;
            var delta = eqb * eqb - 4 * eqa * eqc;
            var sqrtDelta = Math.sqrt(delta);
            var x2 = (-eqb + sqrtDelta) / (2 * eqa);
            return x2;
        }
    }, {
        key: 'contentBox',
        value: function contentBox() {
            var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var sqrt2 = Math.sqrt(2);
            var rectHeight = this.height / 2 * sqrt2;
            var rectWidth = this.width / 2 * sqrt2;
            var deltaX = (this.width - rectWidth) / 2;
            var deltaY = (this.height - rectHeight) / 2;

            var contentBox = new _boundingBox2.default(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);

            return contentBox;
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            // Ellipse formula is (x/A)^2+(y/B)^2=1, where A and B are the two radius of the ellipse
            // Rectangle sides are Rw and Rh
            // Let's assume we want ellipse with same proportions as rectangle; then, if we image square in circle (A=B,Rq=Rh) and squeeze it, we well keep ratio of ellipse A/B same as ratio of rectangle sides Rw/Rh;
            // This leads us to following system of equations:
            //     (x/A)^2+(y/B)^2=1
            // A/B=Rw/Rh
            //
            // Lets solve it: A=B*(Rw/Rh)
            //     (Rh/2B)^2+(Rh/2B)^2=1
            // Rh=sqrt(2)*B
            //
            // And final solution:
            //     A=Rw/sqrt(2)
            // B=Rh/sqrt(2)

            return 2 * boundingBox.width / Math.sqrt(2);
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            return 2 * boundingBox.height / Math.sqrt(2);
        }
    }, {
        key: 'width',
        get: function get() {
            return _get(Ellipse.prototype.__proto__ || Object.getPrototypeOf(Ellipse.prototype), 'width', this);
        },
        set: function set(value) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            _set(Ellipse.prototype.__proto__ || Object.getPrototypeOf(Ellipse.prototype), 'width', value, this);
            this.enableChangeNotifications();
            this.notifyListeners(_changeListener2.default.DIMENSION);
        }
    }, {
        key: 'height',
        get: function get() {
            return _get(Ellipse.prototype.__proto__ || Object.getPrototypeOf(Ellipse.prototype), 'height', this);
        },
        set: function set(value) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            _set(Ellipse.prototype.__proto__ || Object.getPrototypeOf(Ellipse.prototype), 'height', value, this);
            this.enableChangeNotifications();
            this.notifyListeners(_changeListener2.default.DIMENSION);
        }
    }, {
        key: 'centerX',
        get: function get() {
            return this.x + this.width / 2;
        },
        set: function set(value) {
            this.x = value - this.width / 2;
        }
    }, {
        key: 'centerY',
        get: function get() {
            return this.y + this.height / 2;
        },
        set: function set(value) {
            this.y = value - this.height / 2;
        }
    }, {
        key: 'radiusX',
        get: function get() {
            return this.width / 2;
        },
        set: function set(value) {
            this.width = value * 2;
        }
    }, {
        key: 'radiusY',
        get: function get() {
            return this.height / 2;
        },
        set: function set(value) {
            this.height = value * 2;
        }
    }]);

    return Ellipse;
}(_graphicalElement2.default);

exports.default = Ellipse;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements diamonds.
 */
var Diamond = function (_GraphicalElement) {
    _inherits(Diamond, _GraphicalElement);

    function Diamond() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var diamondPreserveAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        var diamondStylingAttributes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _stylingAttributes2.default();

        _classCallCheck(this, Diamond);

        // The third parameter is the horizontal diagonal and the fourth one is the vertical diagonal.
        return _possibleConstructorReturn(this, (Diamond.__proto__ || Object.getPrototypeOf(Diamond)).call(this, {
            x: x1,
            y: y1,
            width: Math.sqrt(2 * Math.pow(width, 2)),
            height: Math.sqrt(2 * Math.pow(height, 2)),
            stylingAttributes: diamondStylingAttributes,
            preserveAspectRatio: diamondPreserveAspectRatio
        }));
    }

    _createClass(Diamond, [{
        key: 'boundaryX1For',
        value: function boundaryX1For(givenY) {
            // Using the line equation for two points:
            // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
            // assuming that a = (y2 - y1)/(x2 - x1)
            // x = x1 + (y - y1)/a;
            var middleY = this.y + this.height / 2;
            //let middleX = this.x + this.width / 2;
            var a = this.height / this.width;
            if (givenY === middleY) {
                // Middle.
                return this.x;
            } else if (givenY < middleY) {
                // Use the top "/" line.
                return this.x + (givenY - this.y) / a;
            } else {
                // Use the bottom "\" line.
                return this.x + (givenY - middleY) / a;
            }
        }
    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            // Using the line equation for two points:
            // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
            // assuming that a = (y2 - y1)/(x2 - x1)
            // x = x1 + (y - y1)/a;
            var middleY = this.y + this.height / 2;
            var middleX = this.x + this.width / 2;
            var a = this.height / this.width;
            if (givenY == middleY) {
                // Middle.
                return this.x + this.width;
            } else if (givenY < middleY) {
                // Use the top "\" line.
                return middleX + (givenY - this.y) / a;
            } else {
                // Use the bottom "/" line.
                return middleX + (givenY - middleY) / a;
            }
        }
    }, {
        key: 'contentBox',
        value: function contentBox(width, height) {
            // For diamonds, it does not matter the current width/height of a group they may be a frame of.
            var deltaX = this.width / 4;
            var deltaY = this.height / 4;
            var boundingBox = new _boundingBox2.default(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);
            return boundingBox;
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            return 2 * boundingBox.width;
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            return 2 * boundingBox.height;
        }
    }, {
        key: 'width',
        get: function get() {
            return _get(Diamond.prototype.__proto__ || Object.getPrototypeOf(Diamond.prototype), 'width', this);
        },
        set: function set(value) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            _set(Diamond.prototype.__proto__ || Object.getPrototypeOf(Diamond.prototype), 'width', value, this);
            /*
                    if (this.preserveAspectRatio) {
                        super.height = value;
                    }
            */
            this.enableChangeNotifications();
            this.notifyListeners(_changeListener2.default.DIMENSION);
        }
    }, {
        key: 'height',
        get: function get() {
            return _get(Diamond.prototype.__proto__ || Object.getPrototypeOf(Diamond.prototype), 'height', this);
        },
        set: function set(value) {
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            _set(Diamond.prototype.__proto__ || Object.getPrototypeOf(Diamond.prototype), 'height', value, this);
            /*
                    if (this.preserveAspectRatio) {
                        super.width = value;
                    }
            */
            this.enableChangeNotifications();
            this.notifyListeners(_changeListener2.default.DIMENSION);
        }
    }]);

    return Diamond;
}(_graphicalElement2.default);

exports.default = Diamond;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _fontStylingAttributes = __webpack_require__(18);

var _fontStylingAttributes2 = _interopRequireDefault(_fontStylingAttributes);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements texts.
 */
var Text = function (_GraphicalElement) {
    _inherits(Text, _GraphicalElement);

    function Text() {
        var textX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var textY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Text";
        var textStylingAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _stylingAttributes2.default(1, "black", "black");
        var fontStylingAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _fontStylingAttributes2.default();

        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, { x: textX, y: textY, stylingAttributes: textStylingAttributes }));

        _this._text = text;
        _this._fontStylingAttributes = fontStylingAttributes;
        _this._fontStylingAttributes.target = _this;
        return _this;
    }

    /*get minWidth() {
        let boundingBox = this.drawn.getBBox();
        return boundingBox.width;
    }
      get minHeight() {
        let boundingBox = this.drawn.getBBox();
        return boundingBox.height;
    }*/

    _createClass(Text, [{
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(value) {
            this._text = value;
            this.notifyListeners(_changeListener2.default.OTHER);
            //this.calculateDimensions();
        }
    }, {
        key: 'fontStylingAttributes',
        get: function get() {
            return this._fontStylingAttributes;
        },
        set: function set(value) {
            this._fontStylingAttributes = value;
            this.fontStylingAttributes.target = this;
            this.notifyListeners(_changeListener2.default.STYLING);
        }

        /*  calculateDimensions() {
              try {
                  this.width = this.minWidth;
                  this.height = this.minHeight;
              }
              catch (error) {
              }
          }*/

    }]);

    return Text;
}(_graphicalElement2.default);

exports.default = Text;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontStylingAttributes = function () {
    function FontStylingAttributes() {
        var family = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "'Roboto', sans-serif";
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 13;
        var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "100";
        var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "normal";
        var target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        _classCallCheck(this, FontStylingAttributes);

        this._family = family;
        this._size = size;
        this._weight = weight;
        this._target = target;
        this._style = style;
    }

    _createClass(FontStylingAttributes, [{
        key: 'style',
        get: function get() {
            return this._style;
        },
        set: function set(value) {
            this._style = value;
        }
    }, {
        key: 'family',
        get: function get() {
            return this._family;
        },
        set: function set(value) {
            this._family = value;
            this.target.notifyListeners(_changeListener2.default.STYLING);
        }
    }, {
        key: 'size',
        get: function get() {
            return this._size;
        },
        set: function set(value) {
            this._size = value;
            this.target.notifyListeners(_changeListener2.default.STYLING);
        }
    }, {
        key: 'weight',
        get: function get() {
            return this._weight;
        },
        set: function set(value) {
            this._weight = value;
            this.target.notifyListeners(_changeListener2.default.STYLING);
        }
    }, {
        key: 'target',
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
            this.target.notifyListeners(_changeListener2.default.STYLING);
        }
    }]);

    return FontStylingAttributes;
}();

exports.default = FontStylingAttributes;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_GraphicalElement) {
    _inherits(Line, _GraphicalElement);

    function Line() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var lineStylingAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _stylingAttributes2.default(1);

        _classCallCheck(this, Line);

        return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, {
            x: x1,
            y: y1,
            width: x2 - x1 + lineStylingAttributes.strokeWidth,
            height: y2 - y1 + lineStylingAttributes.strokeWidth,
            stylingAttributes: lineStylingAttributes
        }));
    }

    _createClass(Line, [{
        key: 'x1',
        get: function get() {
            return this.x;
        },
        set: function set(value) {
            this.x = value;
        }
    }, {
        key: 'y1',
        get: function get() {
            return this.y;
        },
        set: function set(value) {
            this.y = value;
        }
    }, {
        key: 'minWidth',
        get: function get() {
            if (this.stylingAttributes !== null) {
                return this.stylingAttributes.strokeWidth;
            }
            return 1;
        }
    }, {
        key: 'minHeight',
        get: function get() {
            if (this.stylingAttributes !== null) {
                return this.stylingAttributes.strokeWidth;
            }
            return 1;
        }
    }]);

    return Line;
}(_graphicalElement2.default);

exports.default = Line;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2018.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _point = __webpack_require__(24);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolyLine = function (_GraphicalElement) {
    _inherits(PolyLine, _GraphicalElement);

    function PolyLine() {
        var polyLineStylingAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _stylingAttributes2.default(1);

        _classCallCheck(this, PolyLine);

        var _this = _possibleConstructorReturn(this, (PolyLine.__proto__ || Object.getPrototypeOf(PolyLine)).call(this, { x: 0, y: 0, width: 0, height: 0, stylingAttributes: polyLineStylingAttributes }));

        _this._idCount = 1;
        _this._points = [];
        var coordinates = Array.from(arguments).slice(1);
        if (Array.isArray(coordinates)) {
            coordinates = coordinates[0]; // SVGArea may have passed it as an array.
        }

        for (var i = 0; i < coordinates.length; i += 2) {
            _this.addPoint(coordinates[i], coordinates[i + 1]);
        }
        _this.updateBoundingBox();
        return _this;
    }

    _createClass(PolyLine, [{
        key: 'generateId',
        value: function generateId() {
            return "point_" + this._idCount++;
        }
    }, {
        key: 'addPoint',
        value: function addPoint(x, y) {
            this._points.push(new _point2.default(x, y, this.generateId()));
            return true;
        }
    }, {
        key: 'removePointAt',
        value: function removePointAt(position) {
            if (position >= 0 && position < this.countPoints()) {
                this._points.splice(position, 1);
                return true;
            }
            return false;
        }
    }, {
        key: 'removePoint',
        value: function removePoint(point) {
            for (var i = 0; i < this._points.length; i++) {
                if (this._points[i].id === point.id) {
                    this.removePointAt(i);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'removePointById',
        value: function removePointById(id) {
            for (var i = 0; i < this._points.length; i++) {
                if (this._points[i].id === id) {
                    this.removePointAt(i);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'countPoints',
        value: function countPoints() {
            return this._points.length;
        }
    }, {
        key: 'findBoundingBox',
        value: function findBoundingBox() {
            var minX = Number.MAX_SAFE_INTEGER;
            var minY = Number.MAX_SAFE_INTEGER;
            var maxX = Number.MIN_SAFE_INTEGER;
            var maxY = Number.MIN_SAFE_INTEGER;
            for (var i = 0; i < this.points.length; i++) {
                if (this._points[i].x < minX) {
                    minX = this._points[i].x;
                }
                if (this._points[i].x > maxX) {
                    maxX = this._points[i].x;
                }
                if (this._points[i].y < minY) {
                    minY = this._points[i].y;
                }
                if (this._points[i].y > maxY) {
                    maxY = this._points[i].y;
                }
            }
            return new _boundingBox2.default(minX, minY, maxX, maxY);
        }
    }, {
        key: 'updateBoundingBox',
        value: function updateBoundingBox() {
            var boundingBox = this.findBoundingBox();
            this.x1 = boundingBox.x1;
            this.y1 = boundingBox.y1;
            this.x2 = boundingBox.x2;
            this.y2 = boundingBox.y2;
        }
    }, {
        key: 'x1',
        get: function get() {
            return this.x;
        },
        set: function set(value) {
            this.x = value;
        }
    }, {
        key: 'y1',
        get: function get() {
            return this.y;
        },
        set: function set(value) {
            this.y = value;
        }
    }, {
        key: 'minWidth',
        get: function get() {
            if (this.stylingAttributes !== null) {
                return this.stylingAttributes.strokeWidth;
            }
            return 1;
        }
    }, {
        key: 'minHeight',
        get: function get() {
            if (this.stylingAttributes !== null) {
                return this.stylingAttributes.strokeWidth;
            }
            return 1;
        }
    }, {
        key: 'points',
        get: function get() {
            return this._points;
        },
        set: function set(value) {
            this._points = value;
        }
    }]);

    return PolyLine;
}(_graphicalElement2.default);

exports.default = PolyLine;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_GraphicalElement) {
    _inherits(Image, _GraphicalElement);

    function Image() {
        var imageX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
        var imageY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var imageWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
        var imageHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
        var image = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
        var imageStylingAttributes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : new _stylingAttributes2.default();

        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, {
            x: imageX,
            y: imageY,
            width: imageWidth,
            height: imageHeight,
            stylingAttributes: imageStylingAttributes
        }));

        _this._image = image;
        _this._boundingBoxFunction = _this.defaultBoundingBox;
        _this._widthToFitFunction = _this.defaultWidthToFit;
        _this._heightToFitFunction = _this.defaultHeightToFit;
        return _this;
    }

    _createClass(Image, [{
        key: 'defaultBoundingBox',
        value: function defaultBoundingBox(width, height) {
            return new _boundingBox2.default(this.x, this.y, this.x2, this.y2);
        }
    }, {
        key: 'defaultWidthToFit',
        value: function defaultWidthToFit(boundingBox) {
            return boundingBox.width;
        }
    }, {
        key: 'defaultHeightToFit',
        value: function defaultHeightToFit(boundingBox) {
            return boundingBox.height;
        }
    }, {
        key: 'contentBox',
        value: function contentBox(width, height) {
            return this.boundingBoxFunction(width, height);
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            return this.widthToFitFunction(boundingBox);
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            return this.heightToFitFunction(boundingBox);
        }
    }, {
        key: 'image',
        get: function get() {
            return this._image;
        },
        set: function set(value) {
            this._image = value;
        }
    }, {
        key: 'boundingBoxFunction',
        get: function get() {
            return this._boundingBoxFunction;
        },
        set: function set(value) {
            this._boundingBoxFunction = value;
        }
    }, {
        key: 'widthToFitFunction',
        get: function get() {
            return this._widthToFitFunction;
        },
        set: function set(value) {
            this._widthToFitFunction = value;
        }
    }, {
        key: 'heightToFitFunction',
        get: function get() {
            return this._heightToFitFunction;
        },
        set: function set(value) {
            this._heightToFitFunction = value;
        }
    }]);

    return Image;
}(_graphicalElement2.default);

exports.default = Image;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _groupStylingAttributes = __webpack_require__(12);

var _groupStylingAttributes2 = _interopRequireDefault(_groupStylingAttributes);

var _verticalGroup = __webpack_require__(11);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _util = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinearGroup = function (_GraphicalElement) {
    _inherits(LinearGroup, _GraphicalElement);

    function LinearGroup() {
        var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var linearGroupStylingAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new _stylingAttributes2.default();

        _classCallCheck(this, LinearGroup);

        var _this = _possibleConstructorReturn(this, (LinearGroup.__proto__ || Object.getPrototypeOf(LinearGroup)).call(this, { x: x1, y: y1, width: x2 - x1, height: y2 - y1, stylingAttributes: linearGroupStylingAttributes }));

        _this._verticalGroup = new _verticalGroup2.default(x1, y1, linearGroupStylingAttributes, new _groupStylingAttributes2.default(0, 0));
        return _this;
    }

    _createClass(LinearGroup, [{
        key: 'addChild',
        value: function addChild(child) {
            var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var overlap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            this.verticalGroup.addChild(child, _verticalGroup2.default.WRAP_CONTENT, _verticalGroup2.default.CENTER, weight, overlap);
            this.recalculate();
        }
    }, {
        key: 'recalculate',
        value: function recalculate() {
            var lineHeight = 1 + Math.abs(Math.abs(this.verticalGroup.height - Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))));
            this.verticalGroup.increaseHeightBy(lineHeight);

            var groupX = Math.min(this.x1, this.x2) + this.width / 2 - this.verticalGroup.width / 2;
            var groupY = Math.min(this.y1, this.y2) - (this.verticalGroup.height - this.height) / 2;
            this.verticalGroup.x = groupX;
            this.verticalGroup.y = groupY;

            var middleX = this.verticalGroup.x + this.verticalGroup.width / 2;
            var angle = (0, _util.angleBetween2Lines)(middleX, this.verticalGroup.y, middleX, this.verticalGroup.y + this.verticalGroup.height, this.x, this.y, this.x, this.y2);
            this.verticalGroup.rotation = -1 * angle;
        }
    }, {
        key: 'verticalGroup',
        get: function get() {
            return this._verticalGroup;
        },
        set: function set(value) {
            this._verticalGroup = value;
        }
    }]);

    return LinearGroup;
}(_graphicalElement2.default);

exports.default = LinearGroup;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralRotationChangeListener = function (_ChangeListener) {
    _inherits(GeneralRotationChangeListener, _ChangeListener);

    function GeneralRotationChangeListener() {
        _classCallCheck(this, GeneralRotationChangeListener);

        return _possibleConstructorReturn(this, (GeneralRotationChangeListener.__proto__ || Object.getPrototypeOf(GeneralRotationChangeListener)).call(this, _changeListener2.default.ROTATION));
    }

    _createClass(GeneralRotationChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.drawn.setAttribute("transform", "rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
        }
    }]);

    return GeneralRotationChangeListener;
}(_changeListener2.default);

exports.default = GeneralRotationChangeListener;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements two dimensional points.
 */
var Point = function () {
    function Point() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        _classCallCheck(this, Point);

        this._x = x;
        this._y = y;
        this._id = id;
    }

    _createClass(Point, [{
        key: "rotateAround",


        /**
         * This method rotates "angle" degrees the point around the specified coordinate.
         * @param centerX The x-coordinate of the rotation center.
         * @param centerY The y-coordinate of the rotation center.
         * @param angle The angle in degrees.
         */
        value: function rotateAround(centerX, centerY, angle) {
            // See https://stackoverflow.com/questions/22491178/how-to-rotate-a-point-around-another-point
            var x1 = this.x - centerX;
            var y1 = this.y - centerY;

            var x2 = x1 * Math.cos((0, _util.toRadians)(angle)) - y1 * Math.sin((0, _util.toRadians)(angle));
            var y2 = x1 * Math.sin((0, _util.toRadians)(angle)) + y1 * Math.cos((0, _util.toRadians)(angle));

            this.x = x2 + centerX;
            this.y = y2 + centerY;
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
        }
    }]);

    return Point;
}();

exports.default = Point;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupChildChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupChildChangeListener, _ChangeListener);

    function VerticalGroupChildChangeListener(vgroup) {
        _classCallCheck(this, VerticalGroupChildChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupChildChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupChildChangeListener)).call(this));

        _this._vgroup = vgroup;
        return _this;
    }

    _createClass(VerticalGroupChildChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.vgroup.readjustDimensions();
        }
    }, {
        key: 'vgroup',
        get: function get() {
            return this._vgroup;
        },
        set: function set(value) {
            this._vgroup = value;
        }
    }]);

    return VerticalGroupChildChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupChildChangeListener;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecoratorDecoratedPositionChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedPositionChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedPositionChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedPositionChangeListener);

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedPositionChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedPositionChangeListener)).call(this, _changeListener2.default.POSITION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedPositionChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.decorator.disableChangeNotifications();
            this.decorator.x = this.decorator.decorated.x;
            this.decorator.y = this.decorator.decorated.y;
            this.decorator.rotation = this.decorator.decorated.rotation;
            this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
            this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
            this.decorator.enableChangeNotifications();
            this.decorator.notifyListeners(_changeListener2.default.POSITION);
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        },
        set: function set(value) {
            this._decorator = value;
        }
    }]);

    return BoxVerticesDecoratorDecoratedPositionChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedPositionChangeListener;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecoratorDecoratedRotationChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedRotationChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedRotationChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedRotationChangeListener);

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedRotationChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedRotationChangeListener)).call(this, _changeListener2.default.ROTATION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedRotationChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.decorator.disableChangeNotifications();
            this.decorator.rotation = this.decorator.decorated.rotation;
            this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
            this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
            this.decorator.enableChangeNotifications();
            this.decorator.notifyListeners(_changeListener2.default.ROTATION);
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        },
        set: function set(value) {
            this._decorator = value;
        }
    }]);

    return BoxVerticesDecoratorDecoratedRotationChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedRotationChangeListener;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecoratorDecoratedDimensionChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedDimensionChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedDimensionChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedDimensionChangeListener);

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedDimensionChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedDimensionChangeListener)).call(this, _changeListener2.default.DIMENSION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedDimensionChangeListener, [{
        key: 'update',
        value: function update(target) {
            var vertexSize = this.decorator.vertexSize;
            var halfSize = (vertexSize - 1) / 2;

            this.decorator.topRightVertex.x = this.decorator.width - halfSize;
            this.decorator.bottomLeftVertex.y = this.decorator.height - halfSize;
            this.decorator.bottomRightVertex.x = this.decorator.width - halfSize;
            this.decorator.bottomRightVertex.y = this.decorator.height - halfSize;
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        },
        set: function set(value) {
            this._decorator = value;
        }
    }]);

    return BoxVerticesDecoratorDecoratedDimensionChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedDimensionChangeListener;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(7);

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements a layer where the graphic elements can be drawn.
 */
var Layer = function () {
    function Layer(id, visible) {
        _classCallCheck(this, Layer);

        this._id = id;
        this._visible = visible ? visible : true;

        // Define a new object to store graphical elements.
        // It works like a map, but with complexity on search of O(1).
        // The key is the element name.
        this._elements = {};

        // Event listeners.
        // Functions that receive the layer, the old, and the new value as arguments.
        //this._onChangeId = null;
        this._onChangeVisibility = null;
        // Functions that receive the layer and the changed element as arguments.
        this._onAddElement = null;
        this._onRemoveElement = null;
    }

    _createClass(Layer, [{
        key: "addElement",
        value: function addElement(element) {
            // Argument is not a graphical element.
            if (!(element instanceof _graphicalElement2.default)) {
                throw "Layer elements must be graphical elements";
            }
            // If a graphical element with the same id does not exist in the layer, add it.
            if (!(element.id in this._elements)) {
                this._elements[element.id] = element;
                this.notifyElementAddition(element);
                return true;
            }
            return false;
        }
    }, {
        key: "countElements",
        value: function countElements() {
            return Object.keys(this._elements).length;
        }
    }, {
        key: "getElement",
        value: function getElement(id) {
            return this._elements[id];
        }
    }, {
        key: "getElementsIds",
        value: function getElementsIds() {
            return Object.keys(this._elements);
        }
    }, {
        key: "removeElement",
        value: function removeElement(element) {
            if (element in this._elements) {
                delete this._elements[element.id];
                this.notifyElementRemoval(element);
                return true;
            }
            return false;
        }
    }, {
        key: "notifyVisibilityChange",
        value: function notifyVisibilityChange(oldValue, newValue) {
            (0, _util.notifyListeners)(this.onChangeVisibility, this, oldValue, newValue);
        }

        /*   notifyIdChange(oldValue, newValue) {
               notifyListeners(this.onChangeId, this, oldValue, newValue);
           }*/

    }, {
        key: "notifyElementAddition",
        value: function notifyElementAddition(addedElement) {
            (0, _util.notifyListeners)(this.onAddElement, this, addedElement);
        }
    }, {
        key: "notifyElementRemoval",
        value: function notifyElementRemoval(removedElement) {
            (0, _util.notifyListeners)(this.onRemoveElement, this, removedElement);
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        }

        /* set id(value) {
             if (value !== this.id) {
                 let oldValue = this.id;
                 this._id = value;
                 this.notifyIdChange(oldValue, value);
             } else {
                 this._id = value;
             }
         }*/

    }, {
        key: "visible",
        get: function get() {
            return this._visible;
        },
        set: function set(value) {
            // Argument is not a boolean.
            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== _typeof(true)) {
                throw "Visibility value must be a boolean";
            }
            if (value !== this.visible) {
                var oldValue = this.visible;
                this._visible = value;
                this.notifyVisibilityChange(oldValue, value);
            } else {
                this._visible = value;
            }
        }

        /*  get onChangeId() {
              return this._onChangeId;
          }
            set onChangeId(value) {
              // Argument is not a function.
              if (typeof(value) !== "function") {
                  throw "Listener must be a function";
              }
              this._onChangeId = value;
          }*/

    }, {
        key: "onChangeVisibility",
        get: function get() {
            return this._onChangeVisibility;
        },
        set: function set(value) {
            // Argument is not a function.
            if (typeof value !== "function") {
                throw "Listener must be a function";
            }
            this._onChangeVisibility = value;
        }
    }, {
        key: "onAddElement",
        get: function get() {
            return this._onAddElement;
        },
        set: function set(value) {
            // Argument is not a function.
            if (typeof value !== "function") {
                throw "Listener must be a function";
            }
            this._onAddElement = value;
        }
    }, {
        key: "onRemoveElement",
        get: function get() {
            return this._onRemoveElement;
        },
        set: function set(value) {
            // Argument is not a function.
            if (typeof value !== "function") {
                throw "Listener must be a function";
            }
            this._onRemoveElement = value;
        }
    }, {
        key: "elements",
        get: function get() {
            return this._elements;
        }
    }]);

    return Layer;
}();

exports.default = Layer;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 16/01/2018.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(7);

var _layer = __webpack_require__(29);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AreaDefaults = function () {
    function AreaDefaults() {
        _classCallCheck(this, AreaDefaults);

        // Define a new object to store layers.
        // It works like a map, but with complexity on search of O(1).
        // The key is the layer id.
        this._layers = {};
        // Array of layers order. It is used to define the drawing order.
        this._order = [];

        // Id count.
        this._elementIdCount = 1;
        this._layerIdCount = 1;

        // Layer-related event listeners.
        // Functions that receive the area and the changed layer as arguments.
        this._onAddLayer = null;
        this._onRemoveLayer = null;
        // Function that receive the area.
        this._onChangeLayerOrder = null;

        // Create a default layer that will be used if the user does not create a new one.
        this.newLayer();
    }

    _createClass(AreaDefaults, [{
        key: "moveLayerUp",


        /**
         * Move the specified layer one position to the top of the layer order array.
         * @param layer The layer that must be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */
        value: function moveLayerUp(layer) {
            var layerPosition = this._order.indexOf(layer);
            // If it is not the layer at the top.
            if (layerPosition < this._order.length - 1) {
                // Remove the layer from its position.
                this._order.splice(layerPosition, 1);
                // Add the layer to the next position.
                this._order.splice(layerPosition + 1, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }

        /**
         * Move the specified layer one position to the bottom of the layer order array.
         * @param layer The layer that must be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */

    }, {
        key: "moveLayerDown",
        value: function moveLayerDown(layer) {
            var layerPosition = this._order.indexOf(layer);
            // If it is not the layer at the bottom.
            if (layerPosition > 0) {
                // Remove the layer from its position.
                this._order.splice(layerPosition, 1);
                // Add the layer to the previous position.
                this._order.splice(layerPosition - 1, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }

        /**
         * Move the specified layer to the specified position of the layer order array.
         * @param layer The layer that must be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */

    }, {
        key: "moveLayerTo",
        value: function moveLayerTo(layer, targetPosition) {
            if (targetPosition >= this._order.length) {
                return false;
            }
            var layerPosition = this._order.indexOf(layer);
            // If it is not at the targeted position.
            if (layerPosition != targetPosition) {
                // Remove the layer from its position.
                this._order.splice(layerPosition, 1);
                // Add the layer to the targeted position.
                this._order.splice(targetPosition, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }
    }, {
        key: "newLayer",
        value: function newLayer() {
            this.addLayer(new _layer2.default(this.generateLayerId()));
        }
    }, {
        key: "addLayer",
        value: function addLayer(layer) {
            // Argument is not a layer.
            if (!(layer instanceof _layer2.default)) {
                throw "Area layers must be instances of Layer";
            }
            // If a layer with the same id does not exist in the layer, add it.
            if (!(layer.id in this._layers)) {
                this._layers[layer.id] = layer;
                this._order.push(layer);
                this.notifyLayerAddition(layer);
                return true;
            } else {
                throw "The layer with id " + layer.id + " is already on the area.";
            }
            return false;
        }
    }, {
        key: "countLayers",
        value: function countLayers() {
            return Object.keys(this._layers).length;
        }

        /**
         * Return the layer that has the specified id.
         * @param id The layer id.
         * @returns {Layer} The layer.
         */

    }, {
        key: "getLayer",
        value: function getLayer(id) {
            return this._layers[id];
        }

        /**
         * Return an array of layer ids.
         * @returns {string[]} An array of layers id.
         */

    }, {
        key: "getLayersIds",
        value: function getLayersIds() {
            return Object.keys(this._layers);
        }

        /**
         * Remove the layer from the area if it exists.
         * @param layer The layer that must be removed.
         * @returns {boolean} true, if the layer was removed. false, otherwise.
         */

    }, {
        key: "removeLayer",
        value: function removeLayer(layer) {
            if (layer in this._layers) {
                delete this._layers[layer.id];
                this._order.splice(this._order.indexOf(layer), 1);
                this.notifyLayerRemoval(layer);
                return true;
            }
            return false;
        }
    }, {
        key: "notifyLayerAddition",
        value: function notifyLayerAddition(addedLayer) {
            (0, _util.notifyListeners)(this.onAddLayer, this, addedLayer);
        }
    }, {
        key: "notifyLayerRemoval",
        value: function notifyLayerRemoval(removedLayer) {
            (0, _util.notifyListeners)(this.onRemoveLayer, this, removedLayer);
        }
    }, {
        key: "notifyLayerOrderChanging",
        value: function notifyLayerOrderChanging() {
            (0, _util.notifyListeners)(this.onChangeLayerOrder, this, null);
        }
    }, {
        key: "generateElementId",
        value: function generateElementId() {
            return "e_" + this._elementIdCount++;
        }
    }, {
        key: "generateLayerId",
        value: function generateLayerId() {
            return "l_" + this._layerIdCount++;
        }
    }, {
        key: "layers",
        get: function get() {
            return this._layers;
        }
    }, {
        key: "firstLayer",
        get: function get() {
            if (this._order.length > 0) {
                return this._order[0];
            }
            return null;
        }
    }, {
        key: "topLayer",
        get: function get() {
            if (this._order.length > 0) {
                return this._order[this._order.length - 1];
            }
            return null;
        }
    }, {
        key: "onAddLayer",
        get: function get() {
            return this._onAddLayer;
        },
        set: function set(value) {
            this._onAddLayer = value;
        }
    }, {
        key: "onChangeLayerOrder",
        get: function get() {
            return this._onChangeLayerOrder;
        },
        set: function set(value) {
            this._onChangeLayerOrder = value;
        }
    }, {
        key: "onRemoveLayer",
        get: function get() {
            return this._onRemoveLayer;
        },
        set: function set(value) {
            this._onRemoveLayer = value;
        }
    }, {
        key: "elementIdCount",
        get: function get() {
            return this._elementIdCount;
        }
    }, {
        key: "layerIdCount",
        get: function get() {
            return this._layerIdCount;
        }
    }, {
        key: "order",
        get: function get() {
            return this._order;
        }
    }, {
        key: "defaultLayer",
        get: function get() {
            return this._order[this._order.length - 1]; // The top layer.
        }
    }]);

    return AreaDefaults;
}();

exports.default = AreaDefaults;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RectanglePositionChangeListener = function (_GeneralPositionChang) {
  _inherits(RectanglePositionChangeListener, _GeneralPositionChang);

  function RectanglePositionChangeListener() {
    _classCallCheck(this, RectanglePositionChangeListener);

    return _possibleConstructorReturn(this, (RectanglePositionChangeListener.__proto__ || Object.getPrototypeOf(RectanglePositionChangeListener)).apply(this, arguments));
  }

  return RectanglePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = RectanglePositionChangeListener;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiamondPositionChangeListener = function (_GeneralPositionChang) {
    _inherits(DiamondPositionChangeListener, _GeneralPositionChang);

    function DiamondPositionChangeListener() {
        _classCallCheck(this, DiamondPositionChangeListener);

        return _possibleConstructorReturn(this, (DiamondPositionChangeListener.__proto__ || Object.getPrototypeOf(DiamondPositionChangeListener)).apply(this, arguments));
    }

    _createClass(DiamondPositionChangeListener, [{
        key: 'changeX',
        value: function changeX(target) {
            this.updateCoordinates(target);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            this.updateCoordinates(target);
        }
    }, {
        key: 'updateCoordinates',
        value: function updateCoordinates(target) {
            var middleX = target.x + target.width / 2;
            var middleY = target.y + target.height / 2;
            var coordinates = "M " + target.x + "," + middleY;
            coordinates += " " + middleX + "," + target.y;
            coordinates += " " + (target.x + target.width) + "," + middleY;
            coordinates += " " + middleX + "," + (target.y + target.height);
            // The left diamond corner was not being drawn correctly because of the border.
            // To correct that, it was necessary to use the Pythagoras' theorem to move
            // a little bit up.
            var adjustment = Math.sqrt(target.borderSize * target.borderSize / 2);
            coordinates += " " + (target.x - adjustment) + "," + (middleY - adjustment);
            target.drawn.setAttribute("d", coordinates);
        }
    }]);

    return DiamondPositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = DiamondPositionChangeListener;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EllipsePositionChangeListener = function (_GeneralPositionChang) {
    _inherits(EllipsePositionChangeListener, _GeneralPositionChang);

    function EllipsePositionChangeListener() {
        _classCallCheck(this, EllipsePositionChangeListener);

        return _possibleConstructorReturn(this, (EllipsePositionChangeListener.__proto__ || Object.getPrototypeOf(EllipsePositionChangeListener)).apply(this, arguments));
    }

    _createClass(EllipsePositionChangeListener, [{
        key: 'changeX',
        value: function changeX(target) {
            target.drawn.setAttribute("cx", target.centerX);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.drawn.setAttribute("cy", target.centerY);
        }
    }]);

    return EllipsePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = EllipsePositionChangeListener;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImagePositionChangeListener = function (_GeneralPositionChang) {
  _inherits(ImagePositionChangeListener, _GeneralPositionChang);

  function ImagePositionChangeListener() {
    _classCallCheck(this, ImagePositionChangeListener);

    return _possibleConstructorReturn(this, (ImagePositionChangeListener.__proto__ || Object.getPrototypeOf(ImagePositionChangeListener)).apply(this, arguments));
  }

  return ImagePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = ImagePositionChangeListener;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextPositionChangeListener = function (_GeneralPositionChang) {
    _inherits(TextPositionChangeListener, _GeneralPositionChang);

    function TextPositionChangeListener() {
        _classCallCheck(this, TextPositionChangeListener);

        return _possibleConstructorReturn(this, (TextPositionChangeListener.__proto__ || Object.getPrototypeOf(TextPositionChangeListener)).apply(this, arguments));
    }

    _createClass(TextPositionChangeListener, [{
        key: 'changeY',
        value: function changeY(target) {
            // The hanging baseline-alignment was not working equally on all browsers.
            // Because of that, the alignment was changed to baseline and now the
            // text must be drawn based on its bottom y coordinate.

            // 3/4 was used because the bottom-line alignment put the bottom part of
            // letters such as p and q bellow the line.
            target.drawn.setAttribute("y", target.y + 3 * target.height / 4);
        }
    }]);

    return TextPositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = TextPositionChangeListener;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinePositionChangeListener = function (_GeneralPositionChang) {
    _inherits(LinePositionChangeListener, _GeneralPositionChang);

    function LinePositionChangeListener() {
        _classCallCheck(this, LinePositionChangeListener);

        return _possibleConstructorReturn(this, (LinePositionChangeListener.__proto__ || Object.getPrototypeOf(LinePositionChangeListener)).apply(this, arguments));
    }

    _createClass(LinePositionChangeListener, [{
        key: 'update',
        value: function update(target) {
            // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
            // The difference between no product and * 2 is necessary to center the line.
            target.drawn.setAttribute("x1", target.x1 + target.borderSize);
            target.drawn.setAttribute("y1", target.y1 + target.borderSize);
            target.drawn.setAttribute("x2", target.x2 - target.borderSize);
            target.drawn.setAttribute("y2", target.y2 - target.borderSize);
        }
    }]);

    return LinePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = LinePositionChangeListener;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolyLinePositionChangeListener = function (_GeneralPositionChang) {
    _inherits(PolyLinePositionChangeListener, _GeneralPositionChang);

    function PolyLinePositionChangeListener() {
        _classCallCheck(this, PolyLinePositionChangeListener);

        return _possibleConstructorReturn(this, (PolyLinePositionChangeListener.__proto__ || Object.getPrototypeOf(PolyLinePositionChangeListener)).apply(this, arguments));
    }

    _createClass(PolyLinePositionChangeListener, [{
        key: 'update',
        value: function update(target) {
            // Construct the path.
            var path = "M";
            for (var i = 0; i < target.countPoints(); i++) {
                path += target.points[i].x + " " + target.points[i].y + " L";
            }
            path = path.substring(0, path.length - 2);

            target.drawn.setAttribute("d", path);
        }
    }]);

    return PolyLinePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = PolyLinePositionChangeListener;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CirclePositionChangeListener = function (_GeneralPositionChang) {
    _inherits(CirclePositionChangeListener, _GeneralPositionChang);

    function CirclePositionChangeListener() {
        _classCallCheck(this, CirclePositionChangeListener);

        return _possibleConstructorReturn(this, (CirclePositionChangeListener.__proto__ || Object.getPrototypeOf(CirclePositionChangeListener)).apply(this, arguments));
    }

    _createClass(CirclePositionChangeListener, [{
        key: 'changeX',
        value: function changeX(target) {
            target.drawn.setAttribute("cx", target.centerX);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.drawn.setAttribute("cy", target.centerY);
        }
    }]);

    return CirclePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = CirclePositionChangeListener;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RectangleDimensionChangeListener = function (_GeneralDimensionChan) {
  _inherits(RectangleDimensionChangeListener, _GeneralDimensionChan);

  function RectangleDimensionChangeListener() {
    _classCallCheck(this, RectangleDimensionChangeListener);

    return _possibleConstructorReturn(this, (RectangleDimensionChangeListener.__proto__ || Object.getPrototypeOf(RectangleDimensionChangeListener)).apply(this, arguments));
  }

  return RectangleDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = RectangleDimensionChangeListener;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiamondDimensionChangeListener = function (_GeneralDimensionChan) {
    _inherits(DiamondDimensionChangeListener, _GeneralDimensionChan);

    function DiamondDimensionChangeListener() {
        _classCallCheck(this, DiamondDimensionChangeListener);

        return _possibleConstructorReturn(this, (DiamondDimensionChangeListener.__proto__ || Object.getPrototypeOf(DiamondDimensionChangeListener)).apply(this, arguments));
    }

    _createClass(DiamondDimensionChangeListener, [{
        key: 'changeWidth',
        value: function changeWidth(target) {
            this.updateCoordinates(target);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            this.updateCoordinates(target);
        }
    }, {
        key: 'updateCoordinates',
        value: function updateCoordinates(target) {
            var middleX = target.x + target.width / 2;
            var middleY = target.y + target.height / 2;
            var coordinates = "M " + target.x + "," + middleY;
            coordinates += " " + middleX + "," + target.y;
            coordinates += " " + (target.x + target.width) + "," + middleY;
            coordinates += " " + middleX + "," + (target.y + target.height);
            // The left diamond corner was not being drawn correctly because of the border.
            // To correct that, it was necessary to use the Pythagoras' theorem to move
            // a little bit up.
            var adjustment = Math.sqrt(target.borderSize * target.borderSize / 2);
            coordinates += " " + (target.x - adjustment) + "," + (middleY - adjustment);
            target.drawn.setAttribute("d", coordinates);
        }
    }]);

    return DiamondDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = DiamondDimensionChangeListener;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EllipseDimensionChangeListener = function (_GeneralDimensionChan) {
    _inherits(EllipseDimensionChangeListener, _GeneralDimensionChan);

    function EllipseDimensionChangeListener() {
        _classCallCheck(this, EllipseDimensionChangeListener);

        return _possibleConstructorReturn(this, (EllipseDimensionChangeListener.__proto__ || Object.getPrototypeOf(EllipseDimensionChangeListener)).apply(this, arguments));
    }

    _createClass(EllipseDimensionChangeListener, [{
        key: 'changeWidth',
        value: function changeWidth(target) {
            target.drawn.setAttribute("cx", target.centerX);
            target.drawn.setAttribute("rx", target.radiusX);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.drawn.setAttribute("cy", target.centerY);
            target.drawn.setAttribute("ry", target.radiusY);
        }
    }]);

    return EllipseDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = EllipseDimensionChangeListener;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageDimensionChangeListener = function (_GeneralDimensionChan) {
  _inherits(ImageDimensionChangeListener, _GeneralDimensionChan);

  function ImageDimensionChangeListener() {
    _classCallCheck(this, ImageDimensionChangeListener);

    return _possibleConstructorReturn(this, (ImageDimensionChangeListener.__proto__ || Object.getPrototypeOf(ImageDimensionChangeListener)).apply(this, arguments));
  }

  return ImageDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = ImageDimensionChangeListener;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextDimensionChangeListener = function (_GeneralDimensionChan) {
  _inherits(TextDimensionChangeListener, _GeneralDimensionChan);

  function TextDimensionChangeListener() {
    _classCallCheck(this, TextDimensionChangeListener);

    return _possibleConstructorReturn(this, (TextDimensionChangeListener.__proto__ || Object.getPrototypeOf(TextDimensionChangeListener)).apply(this, arguments));
  }

  return TextDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = TextDimensionChangeListener;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleDimensionChangeListener = function (_GeneralDimensionChan) {
    _inherits(CircleDimensionChangeListener, _GeneralDimensionChan);

    function CircleDimensionChangeListener() {
        _classCallCheck(this, CircleDimensionChangeListener);

        return _possibleConstructorReturn(this, (CircleDimensionChangeListener.__proto__ || Object.getPrototypeOf(CircleDimensionChangeListener)).apply(this, arguments));
    }

    _createClass(CircleDimensionChangeListener, [{
        key: 'changeWidth',
        value: function changeWidth(target) {
            target.drawn.setAttribute("r", target.radius);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.drawn.setAttribute("r", target.radius);
        }
    }]);

    return CircleDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = CircleDimensionChangeListener;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineDimensionChangeListener = function (_GeneralDimensionChan) {
    _inherits(LineDimensionChangeListener, _GeneralDimensionChan);

    function LineDimensionChangeListener() {
        _classCallCheck(this, LineDimensionChangeListener);

        return _possibleConstructorReturn(this, (LineDimensionChangeListener.__proto__ || Object.getPrototypeOf(LineDimensionChangeListener)).apply(this, arguments));
    }

    _createClass(LineDimensionChangeListener, [{
        key: 'changeWidth',
        value: function changeWidth(target) {
            // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
            // The difference between no product and * 2 is necessary to center the line.
            target.drawn.setAttribute("x2", target.x2 - target.borderSize);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
            // The difference between no product and * 2 is necessary to center the line.
            target.drawn.setAttribute("y2", target.y2 - target.borderSize);
        }
    }]);

    return LineDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = LineDimensionChangeListener;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolyLineDimensionChangeListener = function (_GeneralDimensionChan) {
    _inherits(PolyLineDimensionChangeListener, _GeneralDimensionChan);

    function PolyLineDimensionChangeListener() {
        _classCallCheck(this, PolyLineDimensionChangeListener);

        return _possibleConstructorReturn(this, (PolyLineDimensionChangeListener.__proto__ || Object.getPrototypeOf(PolyLineDimensionChangeListener)).apply(this, arguments));
    }

    _createClass(PolyLineDimensionChangeListener, [{
        key: 'changeWidth',
        value: function changeWidth(target) {
            this.update(target);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            this.update(target);
        }
    }, {
        key: 'update',
        value: function update(target) {
            // Construct the path.
            var path = "M";
            for (var i = 0; i < target.countPoints(); i++) {
                path += target.points[i].x + " " + target.points[i].y + " L";
            }
            path = path.substring(0, path.length - 2);

            target.drawn.setAttribute("d", path);
        }
    }]);

    return PolyLineDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = PolyLineDimensionChangeListener;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalRotationChangeListener = __webpack_require__(23);

var _generalRotationChangeListener2 = _interopRequireDefault(_generalRotationChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VGroupRotationChangeListener = function (_GeneralRotationChang) {
  _inherits(VGroupRotationChangeListener, _GeneralRotationChang);

  function VGroupRotationChangeListener() {
    _classCallCheck(this, VGroupRotationChangeListener);

    return _possibleConstructorReturn(this, (VGroupRotationChangeListener.__proto__ || Object.getPrototypeOf(VGroupRotationChangeListener)).apply(this, arguments));
  }

  return VGroupRotationChangeListener;
}(_generalRotationChangeListener2.default);

exports.default = VGroupRotationChangeListener;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalRotationChangeListener = __webpack_require__(23);

var _generalRotationChangeListener2 = _interopRequireDefault(_generalRotationChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinearGroupRotationChangeListener = function (_GeneralRotationChang) {
  _inherits(LinearGroupRotationChangeListener, _GeneralRotationChang);

  function LinearGroupRotationChangeListener() {
    _classCallCheck(this, LinearGroupRotationChangeListener);

    return _possibleConstructorReturn(this, (LinearGroupRotationChangeListener.__proto__ || Object.getPrototypeOf(LinearGroupRotationChangeListener)).apply(this, arguments));
  }

  return LinearGroupRotationChangeListener;
}(_generalRotationChangeListener2.default);

exports.default = LinearGroupRotationChangeListener;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextChangeListener = function (_ChangeListener) {
    _inherits(TextChangeListener, _ChangeListener);

    function TextChangeListener() {
        _classCallCheck(this, TextChangeListener);

        return _possibleConstructorReturn(this, (TextChangeListener.__proto__ || Object.getPrototypeOf(TextChangeListener)).call(this, _changeListener2.default.OTHER));
    }

    _createClass(TextChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.drawn.textContent = target.text;
            // As the text changed, the graphical element minimum width and height must be updated.
            var boundingBox = target.drawn.getBoundingClientRect();
            target.disableChangeNotifications(); // Avoid stack overflow.
            target.minWidth = boundingBox.width;
            target.minHeight = boundingBox.height;
            target.width = boundingBox.width;
            target.height = boundingBox.height;
            target.enableChangeNotifications();
        }
    }]);

    return TextChangeListener;
}(_changeListener2.default);

exports.default = TextChangeListener;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontChangeListener = function (_ChangeListener) {
    _inherits(FontChangeListener, _ChangeListener);

    function FontChangeListener() {
        _classCallCheck(this, FontChangeListener);

        return _possibleConstructorReturn(this, (FontChangeListener.__proto__ || Object.getPrototypeOf(FontChangeListener)).call(this, _changeListener2.default.STYLING));
    }

    _createClass(FontChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.drawn.setAttribute("font-family", target.fontStylingAttributes.family);
            target.drawn.setAttribute("font-size", target.fontStylingAttributes.size);
            target.drawn.setAttribute("font-weight", target.fontStylingAttributes.weight);
            target.drawn.setAttribute("font-style", target.fontStylingAttributes.style);
        }
    }]);

    return FontChangeListener;
}(_changeListener2.default);

exports.default = FontChangeListener;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _circle = __webpack_require__(14);

var _circle2 = _interopRequireDefault(_circle);

var _defaultCircleDrawer = __webpack_require__(52);

var _defaultCircleDrawer2 = _interopRequireDefault(_defaultCircleDrawer);

var _ellipse = __webpack_require__(15);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _defaultEllipseDrawer = __webpack_require__(53);

var _defaultEllipseDrawer2 = _interopRequireDefault(_defaultEllipseDrawer);

var _rectangle = __webpack_require__(10);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _defaultRectangleDrawer = __webpack_require__(54);

var _defaultRectangleDrawer2 = _interopRequireDefault(_defaultRectangleDrawer);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _defaultDiamondDrawer = __webpack_require__(55);

var _defaultDiamondDrawer2 = _interopRequireDefault(_defaultDiamondDrawer);

var _text = __webpack_require__(17);

var _text2 = _interopRequireDefault(_text);

var _defaultTextDrawer = __webpack_require__(56);

var _defaultTextDrawer2 = _interopRequireDefault(_defaultTextDrawer);

var _verticalGroup = __webpack_require__(11);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _defaultVerticalGroupDrawer = __webpack_require__(57);

var _defaultVerticalGroupDrawer2 = _interopRequireDefault(_defaultVerticalGroupDrawer);

var _linearGroup = __webpack_require__(22);

var _linearGroup2 = _interopRequireDefault(_linearGroup);

var _defaultLinearGroupDrawer = __webpack_require__(58);

var _defaultLinearGroupDrawer2 = _interopRequireDefault(_defaultLinearGroupDrawer);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _defaultLineDrawer = __webpack_require__(59);

var _defaultLineDrawer2 = _interopRequireDefault(_defaultLineDrawer);

var _image = __webpack_require__(21);

var _image2 = _interopRequireDefault(_image);

var _defaultImageDrawer = __webpack_require__(60);

var _defaultImageDrawer2 = _interopRequireDefault(_defaultImageDrawer);

var _defaultPolylineDrawer = __webpack_require__(61);

var _defaultPolylineDrawer2 = _interopRequireDefault(_defaultPolylineDrawer);

var _polyline = __webpack_require__(20);

var _polyline2 = _interopRequireDefault(_polyline);

var _boxVerticesDecorator = __webpack_require__(13);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _defaultBoxVerticesDecoratorDrawer = __webpack_require__(62);

var _defaultBoxVerticesDecoratorDrawer2 = _interopRequireDefault(_defaultBoxVerticesDecoratorDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements a default look and feel factory.
 */
var DefaultLookAndFeelFactory = function () {
    function DefaultLookAndFeelFactory() {
        _classCallCheck(this, DefaultLookAndFeelFactory);
    }

    _createClass(DefaultLookAndFeelFactory, [{
        key: 'getDrawerFor',
        value: function getDrawerFor(element) {
            if (Object.getPrototypeOf(element) === _circle2.default.prototype) {
                return new _defaultCircleDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _ellipse2.default.prototype) {
                return new _defaultEllipseDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _rectangle2.default.prototype) {
                return new _defaultRectangleDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _diamond2.default.prototype) {
                return new _defaultDiamondDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _text2.default.prototype) {
                return new _defaultTextDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _verticalGroup2.default.prototype) {
                return new _defaultVerticalGroupDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _linearGroup2.default.prototype) {
                return new _defaultLinearGroupDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _line2.default.prototype) {
                return new _defaultLineDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _polyline2.default.prototype) {
                return new _defaultPolylineDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _image2.default.prototype) {
                return new _defaultImageDrawer2.default();
            } else if (Object.getPrototypeOf(element) === _boxVerticesDecorator2.default.prototype) {
                return new _defaultBoxVerticesDecoratorDrawer2.default();
            }
        }
    }]);

    return DefaultLookAndFeelFactory;
}();

exports.default = DefaultLookAndFeelFactory;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _circleDimensionChangeListener = __webpack_require__(44);

var _circleDimensionChangeListener2 = _interopRequireDefault(_circleDimensionChangeListener);

var _circlePositionChangeListener = __webpack_require__(38);

var _circlePositionChangeListener2 = _interopRequireDefault(_circlePositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultCircleDrawer = function (_DefaultDrawer) {
    _inherits(DefaultCircleDrawer, _DefaultDrawer);

    function DefaultCircleDrawer(svgArea) {
        _classCallCheck(this, DefaultCircleDrawer);

        return _possibleConstructorReturn(this, (DefaultCircleDrawer.__proto__ || Object.getPrototypeOf(DefaultCircleDrawer)).call(this, svgArea));
    }

    _createClass(DefaultCircleDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newCircle = document.createElementNS(this.svgArea.namespace, "circle");
            newCircle.setAttribute("id", element.id);
            newCircle.setAttribute("cx", element.centerX);
            newCircle.setAttribute("cy", element.centerY);
            newCircle.setAttribute("r", element.radius);
            newCircle.setAttribute("style", element.stylingAttributes.toString());
            newCircle.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _circleDimensionChangeListener2.default());
            element.addChangeListener(new _circlePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newCircle;
        }
    }]);

    return DefaultCircleDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultCircleDrawer;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _ellipseDimensionChangeListener = __webpack_require__(41);

var _ellipseDimensionChangeListener2 = _interopRequireDefault(_ellipseDimensionChangeListener);

var _ellipsePositionChangeListener = __webpack_require__(33);

var _ellipsePositionChangeListener2 = _interopRequireDefault(_ellipsePositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultEllipseDrawer = function (_DefaultDrawer) {
    _inherits(DefaultEllipseDrawer, _DefaultDrawer);

    function DefaultEllipseDrawer(svgArea) {
        _classCallCheck(this, DefaultEllipseDrawer);

        return _possibleConstructorReturn(this, (DefaultEllipseDrawer.__proto__ || Object.getPrototypeOf(DefaultEllipseDrawer)).call(this, svgArea));
    }

    _createClass(DefaultEllipseDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newEllipse = document.createElementNS(this.svgArea.namespace, "ellipse");
            newEllipse.setAttribute("id", element.id);
            newEllipse.setAttribute("cx", element.centerX);
            newEllipse.setAttribute("cy", element.centerY);
            newEllipse.setAttribute("rx", element.radiusX);
            newEllipse.setAttribute("ry", element.radiusY);
            newEllipse.setAttribute("style", element.stylingAttributes.toString());
            newEllipse.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _ellipseDimensionChangeListener2.default());
            element.addChangeListener(new _ellipsePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newEllipse;
        }
    }]);

    return DefaultEllipseDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultEllipseDrawer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _rectangleDimensionChangeListener = __webpack_require__(39);

var _rectangleDimensionChangeListener2 = _interopRequireDefault(_rectangleDimensionChangeListener);

var _rectanglePositionChangeListener = __webpack_require__(31);

var _rectanglePositionChangeListener2 = _interopRequireDefault(_rectanglePositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultRectangleDrawer = function (_DefaultDrawer) {
    _inherits(DefaultRectangleDrawer, _DefaultDrawer);

    function DefaultRectangleDrawer(svgArea) {
        _classCallCheck(this, DefaultRectangleDrawer);

        return _possibleConstructorReturn(this, (DefaultRectangleDrawer.__proto__ || Object.getPrototypeOf(DefaultRectangleDrawer)).call(this, svgArea));
    }

    _createClass(DefaultRectangleDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newRectangle = document.createElementNS(this.svgArea.namespace, "rect");
            newRectangle.setAttribute("id", element.id);
            newRectangle.setAttribute("x", element.x);
            newRectangle.setAttribute("y", element.y);
            newRectangle.setAttribute("width", element.width);
            newRectangle.setAttribute("height", element.height);
            newRectangle.setAttribute("style", element.stylingAttributes.toString());
            newRectangle.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _rectangleDimensionChangeListener2.default());
            element.addChangeListener(new _rectanglePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newRectangle;
        }
    }]);

    return DefaultRectangleDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultRectangleDrawer;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _diamondDimensionChangeListener = __webpack_require__(40);

var _diamondDimensionChangeListener2 = _interopRequireDefault(_diamondDimensionChangeListener);

var _diamondPositionChangeListener = __webpack_require__(32);

var _diamondPositionChangeListener2 = _interopRequireDefault(_diamondPositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultDiamondDrawer = function (_DefaultDrawer) {
    _inherits(DefaultDiamondDrawer, _DefaultDrawer);

    function DefaultDiamondDrawer(svgArea) {
        _classCallCheck(this, DefaultDiamondDrawer);

        return _possibleConstructorReturn(this, (DefaultDiamondDrawer.__proto__ || Object.getPrototypeOf(DefaultDiamondDrawer)).call(this, svgArea));
    }

    _createClass(DefaultDiamondDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newDiamond = document.createElementNS(this.svgArea.namespace, "path");
            newDiamond.setAttribute("id", element.id);
            var middleX = element.x + element.width / 2;
            var middleY = element.y + element.height / 2;
            var coordinates = "M " + element.x + "," + middleY;
            coordinates += " " + middleX + "," + element.y;
            coordinates += " " + (element.x + element.width) + "," + middleY;
            coordinates += " " + middleX + "," + (element.y + element.height);
            // The left diamond corner was not being drawn correctly because of the border.
            // To correct that, it was necessary to use the Pythagoras' theorem to move
            // a little bit up.
            var adjustment = Math.sqrt(element.borderSize * element.borderSize / 2);
            coordinates += " " + (element.x - adjustment) + "," + (middleY - adjustment);
            newDiamond.setAttribute("d", coordinates);
            newDiamond.setAttribute("style", element.stylingAttributes.toString());
            newDiamond.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _diamondDimensionChangeListener2.default());
            element.addChangeListener(new _diamondPositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newDiamond;
        }
    }]);

    return DefaultDiamondDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultDiamondDrawer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _textDimensionChangeListener = __webpack_require__(43);

var _textDimensionChangeListener2 = _interopRequireDefault(_textDimensionChangeListener);

var _textPositionChangeListener = __webpack_require__(35);

var _textPositionChangeListener2 = _interopRequireDefault(_textPositionChangeListener);

var _textChangeListener = __webpack_require__(49);

var _textChangeListener2 = _interopRequireDefault(_textChangeListener);

var _fontChangeListener = __webpack_require__(50);

var _fontChangeListener2 = _interopRequireDefault(_fontChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultTextDrawer = function (_DefaultDrawer) {
        _inherits(DefaultTextDrawer, _DefaultDrawer);

        function DefaultTextDrawer(svgArea) {
                _classCallCheck(this, DefaultTextDrawer);

                return _possibleConstructorReturn(this, (DefaultTextDrawer.__proto__ || Object.getPrototypeOf(DefaultTextDrawer)).call(this, svgArea));
        }

        _createClass(DefaultTextDrawer, [{
                key: 'draw',
                value: function draw(element) {
                        var newText = document.createElementNS(this.svgArea.namespace, "text");
                        newText.setAttribute("id", element.id);

                        newText.setAttribute("x", element.x);
                        // The hanging baseline-alignment was not working equally on all browsers.
                        // Because of that, the alignment was changed to baseline and now the
                        // text must be drawn based on its bottom y coordinate.

                        // 3/4 was used because the bottom-line alignment put the bottom part of
                        // letters such as p and q bellow the line.
                        newText.setAttribute("y", element.y + 3 * element.height / 4);

                        newText.setAttribute("font-family", element.fontStylingAttributes.family);
                        newText.setAttribute("font-size", element.fontStylingAttributes.size);
                        newText.setAttribute("font-weight", element.fontStylingAttributes.weight);
                        newText.setAttribute("font-style", element.fontStylingAttributes.style);
                        newText.setAttribute("alignment-baseline", "baseline");
                        newText.setAttribute("dominant-baseline", "baseline");
                        newText.setAttribute("text-anchor", "start");
                        newText.setAttribute("style", element.stylingAttributes.toString());
                        newText.setAttribute("text-rendering", "optimizeLegibility");

                        var textNode = document.createTextNode(element.text);
                        newText.appendChild(textNode);

                        //*****************************
                        // Add change listeners.
                        element.addChangeListener(new _textDimensionChangeListener2.default());
                        element.addChangeListener(new _textPositionChangeListener2.default());
                        element.addChangeListener(new _textChangeListener2.default());
                        element.addChangeListener(new _fontChangeListener2.default());
                        element.addChangeListener(new _styleChangeListener2.default());

                        return newText;
                }
        }]);

        return DefaultTextDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultTextDrawer;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lookAndFeel = __webpack_require__(9);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _vgroupRotationChangeListener = __webpack_require__(47);

var _vgroupRotationChangeListener2 = _interopRequireDefault(_vgroupRotationChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultVerticalGroupDrawer = function (_DefaultDrawer) {
    _inherits(DefaultVerticalGroupDrawer, _DefaultDrawer);

    function DefaultVerticalGroupDrawer(svgArea) {
        _classCallCheck(this, DefaultVerticalGroupDrawer);

        return _possibleConstructorReturn(this, (DefaultVerticalGroupDrawer.__proto__ || Object.getPrototypeOf(DefaultVerticalGroupDrawer)).call(this, svgArea));
    }

    _createClass(DefaultVerticalGroupDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newGroup = document.createElementNS(this.svgArea.namespace, "g");
            newGroup.setAttribute("id", element.id);
            newGroup.setAttribute('shape-rendering', 'inherit');
            newGroup.setAttribute('pointer-events', 'all');

            var lookAndFeel = new _lookAndFeel2.default();

            if (element.frame !== null) {
                var drawer = lookAndFeel.getDrawerFor(element.frame);
                drawer.svgArea = this.svgArea;
                var drawnFrame = drawer.draw(element.frame);
                element.frame.drawn = drawnFrame;
                newGroup.appendChild(drawnFrame);
            }

            var i = 0;
            for (i = 0; i < element.countChildren(); i++) {
                var child = element.getChildAt(i);
                //let drawer = lookAndFeel.getDrawerFor(child);
                //drawer.svgArea = this.svgArea;
                //var drawnChild = drawer.draw(child);
                //child.drawn = drawnChild;
                //newGroup.appendChild(drawnChild);
                newGroup.appendChild(child.drawn);
            }

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _vgroupRotationChangeListener2.default());

            return newGroup;
        }
    }]);

    return DefaultVerticalGroupDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultVerticalGroupDrawer;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lookAndFeel = __webpack_require__(9);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _linearGroupRotationChangeListener = __webpack_require__(48);

var _linearGroupRotationChangeListener2 = _interopRequireDefault(_linearGroupRotationChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLinearGroupDrawer = function (_DefaultDrawer) {
    _inherits(DefaultLinearGroupDrawer, _DefaultDrawer);

    function DefaultLinearGroupDrawer(svgArea) {
        _classCallCheck(this, DefaultLinearGroupDrawer);

        return _possibleConstructorReturn(this, (DefaultLinearGroupDrawer.__proto__ || Object.getPrototypeOf(DefaultLinearGroupDrawer)).call(this, svgArea));
    }

    _createClass(DefaultLinearGroupDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newGroup = document.createElementNS(this.svgArea.namespace, "g");
            newGroup.setAttribute("id", element.id);
            newGroup.setAttribute('shape-rendering', 'inherit');
            newGroup.setAttribute('pointer-events', 'all');

            var lookAndFeel = new _lookAndFeel2.default();

            if (element.verticalGroup.frame !== null) {
                var drawer = lookAndFeel.getDrawerFor(element.verticalGroup.frame);
                drawer.svgArea = this.svgArea;
                var drawnFrame = drawer.draw(element.verticalGroup.frame);
                element.verticalGroup.frame.drawn = drawnFrame;
                newGroup.appendChild(drawnFrame);
            }

            var i = 0;
            for (i = 0; i < element.verticalGroup.countChildren(); i++) {
                var child = element.verticalGroup.getChildAt(i);
                /*
                            let drawer = lookAndFeel.getDrawerFor(child);
                            drawer.svgArea = this.svgArea;
                            var drawnChild = drawer.draw(child);
                            child.drawn = drawnChild;
                            newGroup.appendChild(drawnChild);
                */
                newGroup.appendChild(child.drawn);
            }

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _linearGroupRotationChangeListener2.default());

            return newGroup;
        }
    }]);

    return DefaultLinearGroupDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultLinearGroupDrawer;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lineDimensionChangeListener = __webpack_require__(45);

var _lineDimensionChangeListener2 = _interopRequireDefault(_lineDimensionChangeListener);

var _linePositionChangeListener = __webpack_require__(36);

var _linePositionChangeListener2 = _interopRequireDefault(_linePositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultLineDrawer = function (_DefaultDrawer) {
    _inherits(DefaultLineDrawer, _DefaultDrawer);

    function DefaultLineDrawer(svgArea) {
        _classCallCheck(this, DefaultLineDrawer);

        return _possibleConstructorReturn(this, (DefaultLineDrawer.__proto__ || Object.getPrototypeOf(DefaultLineDrawer)).call(this, svgArea));
    }

    _createClass(DefaultLineDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newLine = document.createElementNS(this.svgArea.namespace, "line");
            newLine.setAttribute("id", element.id);
            // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
            // The difference between no product and * 2 is necessary to center the line.
            newLine.setAttribute("x1", element.x1 + element.borderSize);
            newLine.setAttribute("y1", element.y1 + element.borderSize);
            newLine.setAttribute("x2", element.x2 - element.borderSize);
            newLine.setAttribute("y2", element.y2 - element.borderSize);
            newLine.setAttribute("style", element.stylingAttributes.toString());
            newLine.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _lineDimensionChangeListener2.default());
            element.addChangeListener(new _linePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newLine;
        }
    }]);

    return DefaultLineDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultLineDrawer;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

var _imagePositionChangeListener = __webpack_require__(34);

var _imagePositionChangeListener2 = _interopRequireDefault(_imagePositionChangeListener);

var _imageDimensionChangeListener = __webpack_require__(42);

var _imageDimensionChangeListener2 = _interopRequireDefault(_imageDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultImageDrawer = function (_DefaultDrawer) {
    _inherits(DefaultImageDrawer, _DefaultDrawer);

    function DefaultImageDrawer(svgArea) {
        _classCallCheck(this, DefaultImageDrawer);

        return _possibleConstructorReturn(this, (DefaultImageDrawer.__proto__ || Object.getPrototypeOf(DefaultImageDrawer)).call(this, svgArea));
    }

    _createClass(DefaultImageDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newImage = document.createElementNS(this.svgArea.namespace, "image");
            newImage.setAttribute("id", element.id);
            newImage.setAttribute("x", element.x);
            newImage.setAttribute("y", element.y);
            newImage.setAttribute("width", element.width);
            newImage.setAttribute("height", element.height);
            newImage.setAttribute("style", element.stylingAttributes.toString());
            newImage.setAttribute("visibility", "visible");
            newImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', element.image);

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _imageDimensionChangeListener2.default());
            element.addChangeListener(new _imagePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newImage;
        }
    }]);

    return DefaultImageDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultImageDrawer;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _polylineDimensionChangeListener = __webpack_require__(46);

var _polylineDimensionChangeListener2 = _interopRequireDefault(_polylineDimensionChangeListener);

var _polylinePositionChangeListener = __webpack_require__(37);

var _polylinePositionChangeListener2 = _interopRequireDefault(_polylinePositionChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultPolyLineDrawer = function (_DefaultDrawer) {
    _inherits(DefaultPolyLineDrawer, _DefaultDrawer);

    function DefaultPolyLineDrawer(svgArea) {
        _classCallCheck(this, DefaultPolyLineDrawer);

        return _possibleConstructorReturn(this, (DefaultPolyLineDrawer.__proto__ || Object.getPrototypeOf(DefaultPolyLineDrawer)).call(this, svgArea));
    }

    _createClass(DefaultPolyLineDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newPath = document.createElementNS(this.svgArea.namespace, "path");
            newPath.setAttribute("id", element.id);

            // Construct the path.
            var path = DefaultPolyLineDrawer.generatePath(element);

            newPath.setAttribute("d", path);
            newPath.setAttribute("style", element.stylingAttributes.toString());
            newPath.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listeners.
            element.addChangeListener(new _polylineDimensionChangeListener2.default());
            element.addChangeListener(new _polylinePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newPath;
        }
    }], [{
        key: 'generatePath',
        value: function generatePath(polyLine) {
            var path = "M";
            for (var i = 0; i < polyLine.countPoints(); i++) {
                path += polyLine.points[i].x + " " + polyLine.points[i].y + " L";
            }
            return path.substring(0, path.length - 2);
        }
    }]);

    return DefaultPolyLineDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultPolyLineDrawer;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lookAndFeel = __webpack_require__(9);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _rectangle = __webpack_require__(10);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _boxVerticesDecorator = __webpack_require__(13);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _boxVerticesDecoratorChangeListener = __webpack_require__(63);

var _boxVerticesDecoratorChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorChangeListener);

var _boxVerticesDecoratorDecoratedRotationChangeListener = __webpack_require__(27);

var _boxVerticesDecoratorDecoratedRotationChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedRotationChangeListener);

var _boxVerticesDecoratorDecoratedPositionChangeListener = __webpack_require__(26);

var _boxVerticesDecoratorDecoratedPositionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedPositionChangeListener);

var _boxVerticesDecoratorDecoratedDimensionChangeListener = __webpack_require__(28);

var _boxVerticesDecoratorDecoratedDimensionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedDimensionChangeListener);

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultBoxVerticesDecoratorDrawer = function (_DefaultDrawer) {
    _inherits(DefaultBoxVerticesDecoratorDrawer, _DefaultDrawer);

    function DefaultBoxVerticesDecoratorDrawer(svgArea) {
        _classCallCheck(this, DefaultBoxVerticesDecoratorDrawer);

        return _possibleConstructorReturn(this, (DefaultBoxVerticesDecoratorDrawer.__proto__ || Object.getPrototypeOf(DefaultBoxVerticesDecoratorDrawer)).call(this, svgArea));
    }

    _createClass(DefaultBoxVerticesDecoratorDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newGroup = document.createElementNS(this.svgArea.namespace, "g");
            newGroup.setAttribute("id", element.id);
            newGroup.setAttribute('shape-rendering', 'inherit');
            newGroup.setAttribute('pointer-events', 'all');

            if (element.decorated !== null) {
                newGroup.appendChild(element.decorated.drawn);

                // Copy the decorated position before removing its listeners.
                element.x = element.decorated.x;
                element.y = element.decorated.y;
                element.width = element.decorated.width;
                element.height = element.decorated.height;
                element.decorated.disableChangeNotifications();
                element.decorated.x = 0;
                element.decorated.y = 0;
                element.decorated.enableChangeNotifications();
                element.decorated.notifyListeners(_changeListener2.default.POSITION);

                //*****************************
                // Remove the decorated listeners related to position, dimension, and rotation.
                // These events will be handled by the decorator group.
                element.decorated.removeChangeListenerByType(_changeListener2.default.POSITION, _changeListener2.default.ROTATION);
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedPositionChangeListener2.default(element));
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedRotationChangeListener2.default(element));
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedDimensionChangeListener2.default(element));
            }

            //*****************************
            // Add group change listeners.
            element.addChangeListener(new _boxVerticesDecoratorChangeListener2.default());

            var vertexSize = element.vertexSize;
            var halfSize = (vertexSize - 1) / 2;

            var lookAndFeel = new _lookAndFeel2.default();
            var stylingAttributes = new _stylingAttributes2.default(0, "black", "black");

            // Draw the box vertices.
            if (element.topLeft) {
                var vertexTL = new _rectangle2.default(0 - halfSize, 0 - halfSize, 0 + halfSize, 0 + halfSize, stylingAttributes);
                vertexTL.tag = _boxVerticesDecorator2.default.TOP_LEFT;
                vertexTL.addTag(_boxVerticesDecorator2.default.VERTEX, true);
                vertexTL.addTag(_graphicalElement2.default.PARENT, element);
                var drawerTL = lookAndFeel.getDrawerFor(vertexTL);
                drawerTL.svgArea = this.svgArea;
                var drawnChildTL = drawerTL.draw(vertexTL);
                vertexTL.drawn = drawnChildTL;
                newGroup.appendChild(drawnChildTL);
                this.registerEvents(vertexTL, drawnChildTL, element);
                element.topLeftVertex = vertexTL;
            }
            if (element.topRight) {
                var vertexTR = new _rectangle2.default(element.width - halfSize, 0 - halfSize, element.width + halfSize, 0 + halfSize, stylingAttributes);
                vertexTR.tag = _boxVerticesDecorator2.default.TOP_RIGHT;
                vertexTR.addTag(_boxVerticesDecorator2.default.VERTEX, true);
                vertexTR.addTag(_graphicalElement2.default.PARENT, element);
                var drawerTR = lookAndFeel.getDrawerFor(vertexTR);
                drawerTR.svgArea = this.svgArea;
                var drawnChildTR = drawerTR.draw(vertexTR);
                vertexTR.drawn = drawnChildTR;
                newGroup.appendChild(drawnChildTR);
                this.registerEvents(vertexTR, drawnChildTR, element);
                element.topRightVertex = vertexTR;
            }
            if (element.bottomLeft) {
                var vertexBL = new _rectangle2.default(0 - halfSize, element.height - halfSize, 0 + halfSize, element.height + halfSize, stylingAttributes);
                vertexBL.tag = _boxVerticesDecorator2.default.BOTTOM_LEFT;
                vertexBL.addTag(_boxVerticesDecorator2.default.VERTEX, true);
                vertexBL.addTag(_graphicalElement2.default.PARENT, element);
                var drawerBL = lookAndFeel.getDrawerFor(vertexBL);
                drawerBL.svgArea = this.svgArea;
                var drawnChildBL = drawerBL.draw(vertexBL);
                vertexBL.drawn = drawnChildBL;
                newGroup.appendChild(drawnChildBL);
                this.registerEvents(vertexBL, drawnChildBL, element);
                element.bottomLeftVertex = vertexBL;
            }
            if (element.bottomRight) {
                var vertexBR = new _rectangle2.default(element.width - halfSize, element.height - halfSize, element.width + halfSize, element.height + halfSize, stylingAttributes);
                vertexBR.tag = _boxVerticesDecorator2.default.BOTTOM_RIGHT;
                vertexBR.addTag(_boxVerticesDecorator2.default.VERTEX, true);
                vertexBR.addTag(_graphicalElement2.default.PARENT, element);
                var drawerBR = lookAndFeel.getDrawerFor(vertexBR);
                drawerBR.svgArea = this.svgArea;
                var drawnChildBR = drawerBR.draw(vertexBR);
                vertexBR.drawn = drawnChildBR;
                newGroup.appendChild(drawnChildBR);
                this.registerEvents(vertexBR, drawnChildBR, element);
                element.bottomRightVertex = vertexBR;
            }

            return newGroup;
        }
    }, {
        key: 'registerEvents',
        value: function registerEvents(model, drawn, decorator) {
            drawn.onclick = model.fireOnClick.bind(model);
            model.onClick = decorator.dispathOnVertexClick.bind(decorator);
            drawn.ondblclick = model.fireOnDblClick.bind(model);
            model.onDblClick = decorator.dispathOnVertexDblClick.bind(decorator);
            drawn.onmousedown = model.fireOnMouseDown.bind(model);
            model.onMouseDown = decorator.dispathOnVertexMouseDown.bind(decorator);
            drawn.onmousemove = model.fireOnMouseMove.bind(model);
            model.onMouseMove = decorator.dispathOnVertexMouseMove.bind(decorator);
            drawn.onmouseup = model.fireOnMouseUp.bind(model);
            model.onMouseUp = decorator.dispathOnVertexMouseUp.bind(decorator);
        }
    }]);

    return DefaultBoxVerticesDecoratorDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultBoxVerticesDecoratorDrawer;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecoratorChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorChangeListener, _ChangeListener);

    function BoxVerticesDecoratorChangeListener() {
        _classCallCheck(this, BoxVerticesDecoratorChangeListener);

        return _possibleConstructorReturn(this, (BoxVerticesDecoratorChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorChangeListener)).call(this, _changeListener2.default.POSITION, _changeListener2.default.ROTATION));
    }

    _createClass(BoxVerticesDecoratorChangeListener, [{
        key: "update",
        value: function update(target) {
            target.drawn.setAttribute("transform", "translate(" + target.x + ", " + target.y + ") rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
        }
    }]);

    return BoxVerticesDecoratorChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorChangeListener;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _circle = __webpack_require__(14);

var _circle2 = _interopRequireDefault(_circle);

var _ellipse = __webpack_require__(15);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _rectangle = __webpack_require__(10);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _text = __webpack_require__(17);

var _text2 = _interopRequireDefault(_text);

var _image = __webpack_require__(21);

var _image2 = _interopRequireDefault(_image);

var _verticalGroup = __webpack_require__(11);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _linearGroup = __webpack_require__(22);

var _linearGroup2 = _interopRequireDefault(_linearGroup);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _lookAndFeel = __webpack_require__(9);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _groupStylingAttributes = __webpack_require__(12);

var _groupStylingAttributes2 = _interopRequireDefault(_groupStylingAttributes);

var _fontStylingAttributes = __webpack_require__(18);

var _fontStylingAttributes2 = _interopRequireDefault(_fontStylingAttributes);

var _polyline = __webpack_require__(20);

var _polyline2 = _interopRequireDefault(_polyline);

var _boxVerticesDecorator = __webpack_require__(13);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _areaDefaults = __webpack_require__(30);

var _areaDefaults2 = _interopRequireDefault(_areaDefaults);

var _util = __webpack_require__(7);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGArea = function (_AreaDefaults) {
    _inherits(SVGArea, _AreaDefaults);

    function SVGArea() {
        var svgSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#svg";

        _classCallCheck(this, SVGArea);

        var _this = _possibleConstructorReturn(this, (SVGArea.__proto__ || Object.getPrototypeOf(SVGArea)).call(this));

        _this._svg = document.querySelector(svgSelector);
        _this._namespace = "http://www.w3.org/2000/svg";
        _this._elements = [];

        // Avoid text selection when dragging and dropping on the area.
        Object.assign(_this._svg.style, {
            'cursor': 'default',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none'
        });

        // Events' callback functions.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        _this._onClick = null;
        _this._onDblClick = null;
        _this._onMouseDown = null;
        _this._onMouseMove = null;
        _this._onMouseUp = null;

        // Register methods in this class as callbacks for the HTML SVG element.
        _this._svg.onclick = _this.fireOnClick.bind(_this);
        _this._svg.ondblclick = _this.fireOnDblClick.bind(_this);
        _this._svg.onmousedown = _this.fireOnMouseDown.bind(_this);
        _this._svg.onmousemove = _this.fireOnMouseMove.bind(_this);
        _this._svg.onmouseup = _this.fireOnMouseUp.bind(_this);
        return _this;
    }

    _createClass(SVGArea, [{
        key: 'addLayer',
        value: function addLayer(layer) {
            layer.onChangeVisibility = this.handleLayerVisibilityChange.bind(this);
            return _get(SVGArea.prototype.__proto__ || Object.getPrototypeOf(SVGArea.prototype), 'addLayer', this).call(this, layer);
        }
    }, {
        key: 'handleLayerVisibilityChange',
        value: function handleLayerVisibilityChange(layer, oldValue, newValue) {
            if (oldValue !== newValue) {
                if (newValue === true) {
                    // Make visible all elements in the layer.
                    Object.keys(layer.elements).forEach(function (id) {
                        layer.getElement(id).stylingAttributes.visible = true;
                    });
                } else {
                    // Hide all elements in the layer.
                    Object.keys(layer.elements).forEach(function (id) {
                        layer.getElement(id).stylingAttributes.visible = false;
                    });
                }
            }
        }

        // Callback methods called by HTML SVG element events.

    }, {
        key: 'fireOnClick',
        value: function fireOnClick(event) {
            (0, _util.notifyListeners)(this._onClick, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnDblClick',
        value: function fireOnDblClick(event) {
            (0, _util.notifyListeners)(this._onDblClick, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseDown',
        value: function fireOnMouseDown(event) {
            (0, _util.notifyListeners)(this._onMouseDown, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseMove',
        value: function fireOnMouseMove(event) {
            (0, _util.notifyListeners)(this._onMouseMove, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseUp',
        value: function fireOnMouseUp(event) {
            (0, _util.notifyListeners)(this._onMouseUp, this, event.clientX, event.clientY, event);
        }
    }, {
        key: 'addElement',
        value: function addElement(element, layer) {
            if (!layer || layer === null) {
                layer = this.firstLayer;
            }
            element.addTag(SVGArea.LAYER, layer);
            layer.addElement(element);
            return element;
        }
    }, {
        key: 'removeElement',
        value: function removeElement(element) {
            element.getTag(SVGArea.LAYER).removeElement(element);
            this.svg.removeChild(element.drawn);
        }

        /**
         * Draw a new circle with the specified parameters.
         * @param parameterObject An object with the following optional attributes: centerX, centerY, radius, and layer.
         */

    }, {
        key: 'circ',
        value: function circ(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('centerX' in parameterObject)) {
                parameterObject.centerX = 50;
            }
            if (!('centerY' in parameterObject)) {
                parameterObject.centerY = 50;
            }
            if (!('radius' in parameterObject)) {
                parameterObject.radius = 50;
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }
            //*****************************
            // Create a new circle and set its id.
            var newCircle = new _circle2.default(parameterObject.centerX, parameterObject.centerY, parameterObject.radius);
            newCircle.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newCircle);
            drawer.svgArea = this;
            var drawnCircle = drawer.draw(newCircle);
            this.svg.appendChild(drawnCircle);

            newCircle.drawn = drawnCircle;

            this.registerEvents(newCircle, drawnCircle);

            return this.addElement(newCircle, parameterObject.layer);
        }

        /**
         * @see {@link circ}
         */

    }, {
        key: 'circle',
        value: function circle(parameterObject) {
            return this.circ(parameterObject);
        }

        /**
         * Draw a new ellipse with the specified parameters.
         * @param parameterObject An object with the following optional attributes: centerX, centerY, radiusX, radiusY, preserveAspectRatio, and layer.
         */

    }, {
        key: 'ellipse',
        value: function ellipse(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('centerX' in parameterObject)) {
                parameterObject.centerX = 50;
            }
            if (!('centerY' in parameterObject)) {
                parameterObject.centerY = 50;
            }
            if (!('radiusX' in parameterObject)) {
                parameterObject.radiusX = 100;
            }
            if (!('radiusY' in parameterObject)) {
                parameterObject.radiusY = 50;
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new ellipse and set its id.
            var newEllipse = new _ellipse2.default(parameterObject.centerX, parameterObject.centerY, parameterObject.radiusX, parameterObject.radiusY);
            newEllipse.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newEllipse);
            drawer.svgArea = this;
            var drawnEllipse = drawer.draw(newEllipse);
            this.svg.appendChild(drawnEllipse);

            newEllipse.drawn = drawnEllipse;

            this.registerEvents(newEllipse, drawnEllipse);

            return this.addElement(newEllipse, parameterObject.layer);
        }

        /**
         * Draw a new rectangle with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, and layer.
         */

    }, {
        key: 'rect',
        value: function rect(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x1' in parameterObject)) {
                parameterObject.x1 = 10;
            }
            if (!('y1' in parameterObject)) {
                parameterObject.y1 = 10;
            }
            if (!('x2' in parameterObject)) {
                parameterObject.x2 = 10;
            }
            if (!('y2' in parameterObject)) {
                parameterObject.y2 = 10;
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new rectangle and set its id.
            var newRectangle = new _rectangle2.default(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2);
            newRectangle.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newRectangle);
            drawer.svgArea = this;
            var drawnRectangle = drawer.draw(newRectangle);
            this.svg.appendChild(drawnRectangle);

            newRectangle.drawn = drawnRectangle;

            this.registerEvents(newRectangle, drawnRectangle);

            return this.addElement(newRectangle, parameterObject.layer);
        }

        /**
         * @see {@link rect}
         */

    }, {
        key: 'rectangle',
        value: function rectangle(parameterObject) {
            return this.rect(parameterObject);
        }

        /**
         * Draw a new diamond with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x1, y1, width, height, preserveAspectRatio, stylingAttributes, and layer.
         */

    }, {
        key: 'diamond',
        value: function diamond(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x1' in parameterObject)) {
                parameterObject.x1 = 10;
            }
            if (!('y1' in parameterObject)) {
                parameterObject.y1 = 10;
            }
            if (!('width' in parameterObject)) {
                parameterObject.width = 50;
            }
            if (!('height' in parameterObject)) {
                parameterObject.height = 50;
            }
            if (!('preserveAspectRatio' in parameterObject)) {
                parameterObject.preserveAspectRatio = true;
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default();
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new diamond and set its id.
            var newDiamond = new _diamond2.default(parameterObject.x1, parameterObject.y1, parameterObject.width, parameterObject.height, parameterObject.preserveAspectRatio, parameterObject.stylingAttributes);
            newDiamond.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newDiamond);
            drawer.svgArea = this;
            var drawnDiamond = drawer.draw(newDiamond);
            this.svg.appendChild(drawnDiamond);

            newDiamond.drawn = drawnDiamond;

            this.registerEvents(newDiamond, drawnDiamond);

            return this.addElement(newDiamond, parameterObject.layer);
        }

        /**
         * Draw a new text with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x, y, text, stylingAttributes, fontStylingAttributes, and layer.
         */

    }, {
        key: 'txt',
        value: function txt(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x' in parameterObject)) {
                parameterObject.x = 10;
            }
            if (!('y' in parameterObject)) {
                parameterObject.y = 10;
            }
            if (!('text' in parameterObject)) {
                parameterObject.text = "This is an example text";
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default(1, "black", "black");
            }
            if (!('fontStylingAttributes' in parameterObject)) {
                parameterObject.fontStylingAttributes = new _fontStylingAttributes2.default();
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new text and set its id.
            var newText = new _text2.default(parameterObject.x, parameterObject.y, parameterObject.text, parameterObject.stylingAttributes, parameterObject.fontStylingAttributes);
            newText.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newText);
            drawer.svgArea = this;
            var drawnText = drawer.draw(newText);
            this.svg.appendChild(drawnText);

            newText.drawn = drawnText;
            newText.text = parameterObject.text; // Recalculate the text width calling a listener.

            this.registerEvents(newText, drawnText);

            return this.addElement(newText, parameterObject.layer);
        }

        /**
         * @see {@link txt}
         */

    }, {
        key: 'text',
        value: function text(parameterObject) {
            return this.txt(parameterObject);
        }

        /**
         * Draw a new image with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x, y, width, height, image, and layer.
         */

    }, {
        key: 'img',
        value: function img(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x' in parameterObject)) {
                parameterObject.x = 10;
            }
            if (!('y' in parameterObject)) {
                parameterObject.y = 10;
            }
            if (!('width' in parameterObject)) {
                parameterObject.width = 50;
            }
            if (!('height' in parameterObject)) {
                parameterObject.height = 50;
            }
            if (!('image' in parameterObject)) {
                parameterObject.image = null;
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new image and set its id.
            var newImage = new _image2.default(parameterObject.x, parameterObject.y, parameterObject.width, parameterObject.height, parameterObject.image);
            newImage.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newImage);
            drawer.svgArea = this;
            var drawnImage = drawer.draw(newImage);
            this.svg.appendChild(drawnImage);

            newImage.drawn = drawnImage;

            this.registerEvents(newImage, drawnImage);

            return this.addElement(newImage, parameterObject.layer);
        }

        /**
         * @see {@link img}
         */

    }, {
        key: 'image',
        value: function image(parameterObject) {
            return this.img(parameterObject);
        }

        /**
         * Draw a new vertical group with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x, y, stylingAttributes, groupStylingAttributes, and layer.
         */

    }, {
        key: 'vGroup',
        value: function vGroup(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x' in parameterObject)) {
                parameterObject.x = 10;
            }
            if (!('y' in parameterObject)) {
                parameterObject.y = 10;
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default();
            }
            if (!('groupStylingAttributes' in parameterObject)) {
                parameterObject.groupStylingAttributes = new _groupStylingAttributes2.default();
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new vertical group and set its id.
            var newVGroup = new _verticalGroup2.default(parameterObject.x, parameterObject.y, parameterObject.stylingAttributes, parameterObject.groupStylingAttributes);
            newVGroup.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newVGroup);
            drawer.svgArea = this;
            var drawnVGroup = drawer.draw(newVGroup);
            this.svg.appendChild(drawnVGroup);

            newVGroup.drawn = drawnVGroup;

            this.registerEvents(newVGroup, drawnVGroup);

            return this.addElement(newVGroup, parameterObject.layer);
        }

        /**
         * @see {@link vGroup}
         */

    }, {
        key: 'verticalGroup',
        value: function verticalGroup(parameterObject) {
            return this.vGroup(parameterObject);
        }

        /**
         * Draw a new linear group with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, stylingAttributes, groupStylingAttributes, and layer.
         */

    }, {
        key: 'lGroup',
        value: function lGroup(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x1' in parameterObject)) {
                parameterObject.x1 = 10;
            }
            if (!('y1' in parameterObject)) {
                parameterObject.y1 = 10;
            }
            if (!('x2' in parameterObject)) {
                parameterObject.x2 = 100;
            }
            if (!('y2' in parameterObject)) {
                parameterObject.y2 = 100;
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default();
            }
            if (!('groupStylingAttributes' in parameterObject)) {
                parameterObject.groupStylingAttributes = new _groupStylingAttributes2.default(0, 0);
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new linear group and set its id.
            var newLinearGroup = new _linearGroup2.default(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2, parameterObject.stylingAttributes, parameterObject.groupStylingAttributes);
            newLinearGroup.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newLinearGroup);
            drawer.svgArea = this;
            var drawnLinearGroup = drawer.draw(newLinearGroup);
            this.svg.appendChild(drawnLinearGroup);

            newLinearGroup.drawn = drawnLinearGroup;

            this.registerEvents(newLinearGroup, drawnLinearGroup);

            return this.addElement(newLinearGroup, parameterObject.layer);
        }

        /**
         * @see {@link lGroup}
         */

    }, {
        key: 'linearGroup',
        value: function linearGroup(parameterObject) {
            return this.lGroup(parameterObject);
        }

        /**
         * Draw a new line with the specified parameters.
         * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, stylingAttributes, and layer.
         */

    }, {
        key: 'line',
        value: function line(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('x1' in parameterObject)) {
                parameterObject.x1 = 10;
            }
            if (!('y1' in parameterObject)) {
                parameterObject.y1 = 10;
            }
            if (!('x2' in parameterObject)) {
                parameterObject.x2 = 100;
            }
            if (!('y2' in parameterObject)) {
                parameterObject.y2 = 10;
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default();
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new line and set its id.
            var newLine = new _line2.default(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2, parameterObject.stylingAttributes);
            newLine.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newLine);
            drawer.svgArea = this;
            var drawnLine = drawer.draw(newLine);
            this.svg.appendChild(drawnLine);

            newLine.drawn = drawnLine;

            this.registerEvents(newLine, drawnLine);

            return this.addElement(newLine, parameterObject.layer);
        }

        /**
         * Draw a new poly line with the specified parameters.
         * @param parameterObject An object with the following optional attributes: stylingAttributes and layer.
         * @param pairOfCoordinates An undefined odd number of coordinates (x and y).
         */

    }, {
        key: 'polyLine',
        value: function polyLine(parameterObject, pairOfCoordinates) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('stylingAttributes' in parameterObject)) {
                parameterObject.stylingAttributes = new _stylingAttributes2.default(1, "black", "none");
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new line and set its id.
            var coordinates = Array.from(arguments).slice(1);
            var newPolyline = new _polyline2.default(parameterObject.stylingAttributes, coordinates);
            newPolyline.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newPolyline);
            drawer.svgArea = this;
            var drawnLine = drawer.draw(newPolyline);
            this.svg.appendChild(drawnLine);

            newPolyline.drawn = drawnLine;

            this.registerEvents(newPolyline, drawnLine);

            return this.addElement(newPolyline, parameterObject.layer);
        }

        /**
         * Draw a new box vertices decorator with the specified parameters.
         * @param parameterObject An object with the following required attributes: decorated; and the following optional attributes: layer.
         */

    }, {
        key: 'boxVerticesDecorator',
        value: function boxVerticesDecorator(parameterObject) {
            if (!parameterObject || parameterObject === null) {
                parameterObject = {};
            }
            if (!('decorated' in parameterObject)) {
                throw "An object to decorated is required to create a new Box Vertices Decorator";
            }
            if (!('layer' in parameterObject)) {
                parameterObject.layer = this.topLayer;
            }

            //*****************************
            // Create a new box vertices decorator and set its id.
            var newBoxVerticesDecorator = new _boxVerticesDecorator2.default(parameterObject.decorated);
            newBoxVerticesDecorator.id = parameterObject.decorated.id;

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newBoxVerticesDecorator);
            drawer.svgArea = this;
            var drawnBoxVerticesDecorator = drawer.draw(newBoxVerticesDecorator);
            this.svg.appendChild(drawnBoxVerticesDecorator);

            newBoxVerticesDecorator.drawn = drawnBoxVerticesDecorator;
            newBoxVerticesDecorator.notifyListeners(_changeListener2.default.POSITION, _changeListener2.default.DIMENSION);

            this.registerEvents(newBoxVerticesDecorator, drawnBoxVerticesDecorator);

            return this.addElement(newBoxVerticesDecorator, parameterObject.layer);
        }
    }, {
        key: 'registerEvents',
        value: function registerEvents(model, drawn) {
            drawn.onclick = model.fireOnClick.bind(model);
            drawn.ondblclick = model.fireOnDblClick.bind(model);
            drawn.onmousedown = model.fireOnMouseDown.bind(model);
            drawn.onmousemove = model.fireOnMouseMove.bind(model);
            drawn.onmouseup = model.fireOnMouseUp.bind(model);
        }
    }, {
        key: 'svg',
        get: function get() {
            return this._svg;
        }
    }, {
        key: 'namespace',
        get: function get() {
            return this._namespace;
        }
    }, {
        key: 'elements',
        get: function get() {
            return this._elements;
        }
    }, {
        key: 'onClick',
        get: function get() {
            return this._onClick;
        },
        set: function set(value) {
            this._onClick = value;
        }
    }, {
        key: 'onDblClick',
        get: function get() {
            return this._onDblClick;
        },
        set: function set(value) {
            this._onDblClick = value;
        }
    }, {
        key: 'onMouseDown',
        get: function get() {
            return this._onMouseDown;
        },
        set: function set(value) {
            this._onMouseDown = value;
        }
    }, {
        key: 'onMouseMove',
        get: function get() {
            return this._onMouseMove;
        },
        set: function set(value) {
            this._onMouseMove = value;
        }
    }, {
        key: 'onMouseUp',
        get: function get() {
            return this._onMouseUp;
        },
        set: function set(value) {
            this._onMouseUp = value;
        }
    }], [{
        key: 'LAYER',
        get: function get() {
            return "layer";
        }
    }]);

    return SVGArea;
}(_areaDefaults2.default);

exports.default = SVGArea;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphicalElement = exports.BoxVerticesDecorator = exports.Ellipse = exports.Area = exports.SVGArea = exports.VerticalGroup = exports.GroupStylingAttributes = exports.FontStylingAttributes = exports.StylingAttributes = undefined;

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

var _point = __webpack_require__(24);

var _point2 = _interopRequireDefault(_point);

var _boundingBox = __webpack_require__(8);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _circle = __webpack_require__(14);

var _circle2 = _interopRequireDefault(_circle);

var _ellipse = __webpack_require__(15);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _rectangle = __webpack_require__(10);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _text = __webpack_require__(17);

var _text2 = _interopRequireDefault(_text);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _polyline = __webpack_require__(20);

var _polyline2 = _interopRequireDefault(_polyline);

var _image = __webpack_require__(21);

var _image2 = _interopRequireDefault(_image);

var _verticalGroup = __webpack_require__(11);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _changeListener = __webpack_require__(0);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _verticalGroupChildChangeListener = __webpack_require__(25);

var _verticalGroupChildChangeListener2 = _interopRequireDefault(_verticalGroupChildChangeListener);

var _linearGroup = __webpack_require__(22);

var _linearGroup2 = _interopRequireDefault(_linearGroup);

var _stylingAttributes = __webpack_require__(2);

var _stylingAttributes2 = _interopRequireDefault(_stylingAttributes);

var _groupStylingAttributes = __webpack_require__(12);

var _groupStylingAttributes2 = _interopRequireDefault(_groupStylingAttributes);

var _fontStylingAttributes = __webpack_require__(18);

var _fontStylingAttributes2 = _interopRequireDefault(_fontStylingAttributes);

var _graphicalElementDecorator = __webpack_require__(66);

var _graphicalElementDecorator2 = _interopRequireDefault(_graphicalElementDecorator);

var _boxVerticesDecorator = __webpack_require__(13);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _boxVerticesDecoratorDecoratedPositionChangeListener = __webpack_require__(26);

var _boxVerticesDecoratorDecoratedPositionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedPositionChangeListener);

var _boxVerticesDecoratorDecoratedRotationChangeListener = __webpack_require__(27);

var _boxVerticesDecoratorDecoratedRotationChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedRotationChangeListener);

var _boxVerticesDecoratorDecoratedDimensionChangeListener = __webpack_require__(28);

var _boxVerticesDecoratorDecoratedDimensionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedDimensionChangeListener);

var _layer = __webpack_require__(29);

var _layer2 = _interopRequireDefault(_layer);

var _areaDefaults = __webpack_require__(30);

var _areaDefaults2 = _interopRequireDefault(_areaDefaults);

var _generalPositionChangeListener = __webpack_require__(4);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _rectanglePositionChangeListener = __webpack_require__(31);

var _rectanglePositionChangeListener2 = _interopRequireDefault(_rectanglePositionChangeListener);

var _diamondPositionChangeListener = __webpack_require__(32);

var _diamondPositionChangeListener2 = _interopRequireDefault(_diamondPositionChangeListener);

var _ellipsePositionChangeListener = __webpack_require__(33);

var _ellipsePositionChangeListener2 = _interopRequireDefault(_ellipsePositionChangeListener);

var _imagePositionChangeListener = __webpack_require__(34);

var _imagePositionChangeListener2 = _interopRequireDefault(_imagePositionChangeListener);

var _textPositionChangeListener = __webpack_require__(35);

var _textPositionChangeListener2 = _interopRequireDefault(_textPositionChangeListener);

var _linePositionChangeListener = __webpack_require__(36);

var _linePositionChangeListener2 = _interopRequireDefault(_linePositionChangeListener);

var _polylinePositionChangeListener = __webpack_require__(37);

var _polylinePositionChangeListener2 = _interopRequireDefault(_polylinePositionChangeListener);

var _circlePositionChangeListener = __webpack_require__(38);

var _circlePositionChangeListener2 = _interopRequireDefault(_circlePositionChangeListener);

var _generalDimensionChangeListener = __webpack_require__(5);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _rectangleDimensionChangeListener = __webpack_require__(39);

var _rectangleDimensionChangeListener2 = _interopRequireDefault(_rectangleDimensionChangeListener);

var _diamondDimensionChangeListener = __webpack_require__(40);

var _diamondDimensionChangeListener2 = _interopRequireDefault(_diamondDimensionChangeListener);

var _ellipseDimensionChangeListener = __webpack_require__(41);

var _ellipseDimensionChangeListener2 = _interopRequireDefault(_ellipseDimensionChangeListener);

var _imageDimensionChangeListener = __webpack_require__(42);

var _imageDimensionChangeListener2 = _interopRequireDefault(_imageDimensionChangeListener);

var _textDimensionChangeListener = __webpack_require__(43);

var _textDimensionChangeListener2 = _interopRequireDefault(_textDimensionChangeListener);

var _circleDimensionChangeListener = __webpack_require__(44);

var _circleDimensionChangeListener2 = _interopRequireDefault(_circleDimensionChangeListener);

var _lineDimensionChangeListener = __webpack_require__(45);

var _lineDimensionChangeListener2 = _interopRequireDefault(_lineDimensionChangeListener);

var _polylineDimensionChangeListener = __webpack_require__(46);

var _polylineDimensionChangeListener2 = _interopRequireDefault(_polylineDimensionChangeListener);

var _generalRotationChangeListener = __webpack_require__(23);

var _generalRotationChangeListener2 = _interopRequireDefault(_generalRotationChangeListener);

var _vgroupRotationChangeListener = __webpack_require__(47);

var _vgroupRotationChangeListener2 = _interopRequireDefault(_vgroupRotationChangeListener);

var _linearGroupRotationChangeListener = __webpack_require__(48);

var _linearGroupRotationChangeListener2 = _interopRequireDefault(_linearGroupRotationChangeListener);

var _textChangeListener = __webpack_require__(49);

var _textChangeListener2 = _interopRequireDefault(_textChangeListener);

var _fontChangeListener = __webpack_require__(50);

var _fontChangeListener2 = _interopRequireDefault(_fontChangeListener);

var _styleChangeListener = __webpack_require__(6);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

var _defaultDrawer = __webpack_require__(3);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lookAndFeel = __webpack_require__(9);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _defaultLookAndFeelFactory = __webpack_require__(51);

var _defaultLookAndFeelFactory2 = _interopRequireDefault(_defaultLookAndFeelFactory);

var _defaultCircleDrawer = __webpack_require__(52);

var _defaultCircleDrawer2 = _interopRequireDefault(_defaultCircleDrawer);

var _defaultEllipseDrawer = __webpack_require__(53);

var _defaultEllipseDrawer2 = _interopRequireDefault(_defaultEllipseDrawer);

var _defaultRectangleDrawer = __webpack_require__(54);

var _defaultRectangleDrawer2 = _interopRequireDefault(_defaultRectangleDrawer);

var _defaultDiamondDrawer = __webpack_require__(55);

var _defaultDiamondDrawer2 = _interopRequireDefault(_defaultDiamondDrawer);

var _defaultTextDrawer = __webpack_require__(56);

var _defaultTextDrawer2 = _interopRequireDefault(_defaultTextDrawer);

var _defaultLineDrawer = __webpack_require__(59);

var _defaultLineDrawer2 = _interopRequireDefault(_defaultLineDrawer);

var _defaultPolylineDrawer = __webpack_require__(61);

var _defaultPolylineDrawer2 = _interopRequireDefault(_defaultPolylineDrawer);

var _defaultImageDrawer = __webpack_require__(60);

var _defaultImageDrawer2 = _interopRequireDefault(_defaultImageDrawer);

var _defaultVerticalGroupDrawer = __webpack_require__(57);

var _defaultVerticalGroupDrawer2 = _interopRequireDefault(_defaultVerticalGroupDrawer);

var _defaultLinearGroupDrawer = __webpack_require__(58);

var _defaultLinearGroupDrawer2 = _interopRequireDefault(_defaultLinearGroupDrawer);

var _defaultBoxVerticesDecoratorDrawer = __webpack_require__(62);

var _defaultBoxVerticesDecoratorDrawer2 = _interopRequireDefault(_defaultBoxVerticesDecoratorDrawer);

var _boxVerticesDecoratorChangeListener = __webpack_require__(63);

var _boxVerticesDecoratorChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorChangeListener);

var _svgArea = __webpack_require__(64);

var _svgArea2 = _interopRequireDefault(_svgArea);

var _area = __webpack_require__(67);

var _area2 = _interopRequireDefault(_area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Graphical primitives.
exports.StylingAttributes = _stylingAttributes2.default;
exports.FontStylingAttributes = _fontStylingAttributes2.default;
exports.GroupStylingAttributes = _groupStylingAttributes2.default;
exports.VerticalGroup = _verticalGroup2.default;
exports.SVGArea = _svgArea2.default;
exports.Area = _area2.default;
exports.Ellipse = _ellipse2.default;
exports.BoxVerticesDecorator = _boxVerticesDecorator2.default;
exports.GraphicalElement = _graphicalElement2.default;
// export { A, B, C, D, E, ... }

// SVG implementation.
// Util.

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2018.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(1);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphicalElementDecorator = function (_GraphicalElement) {
    _inherits(GraphicalElementDecorator, _GraphicalElement);

    function GraphicalElementDecorator(decorated) {
        _classCallCheck(this, GraphicalElementDecorator);

        var _this = _possibleConstructorReturn(this, (GraphicalElementDecorator.__proto__ || Object.getPrototypeOf(GraphicalElementDecorator)).call(this, { x: decorated.x, y: decorated.y, width: decorated.width, height: decorated.height }));

        _this._decorated = decorated;
        return _this;
    }

    _createClass(GraphicalElementDecorator, [{
        key: "disableChangeNotifications",
        value: function disableChangeNotifications() {
            this._decorated.disableChangeNotifications();
        }
    }, {
        key: "enableChangeNotifications",
        value: function enableChangeNotifications() {
            this._decorated.enableChangeNotifications();
        }
    }, {
        key: "boundaryX1For",
        value: function boundaryX1For(givenY) {
            return this._decorated.boundaryX1For(givenY);
        }
    }, {
        key: "boundaryX2For",
        value: function boundaryX2For(givenY) {
            return this._decorated.boundaryX2For(givenY);
        }
    }, {
        key: "moveTo",
        value: function moveTo(newX, newY) {
            this._decorated.moveLayerTo(newX, newY);
        }
    }, {
        key: "resize",
        value: function resize(newWidth, newHeight) {
            this._decorated.resize(newWidth, newHeight);
        }
    }, {
        key: "appearance",
        value: function appearance(json) {
            this._decorated.appearance(json);
        }
    }, {
        key: "contentBox",
        value: function contentBox(width, height) {
            return this._decorated.contentBox(width, height);
        }
    }, {
        key: "widthToFit",
        value: function widthToFit(boundingBox) {
            return this._decorated.widthToFit(boundingBox);
        }
    }, {
        key: "heightToFit",
        value: function heightToFit(boundingBox) {
            return this._decorated.heightToFit(boundingBox);
        }
    }, {
        key: "addChangeListener",
        value: function addChangeListener(value) {
            this._decorated.addChangeListener(value);
        }
    }, {
        key: "notifyListeners",
        value: function notifyListeners() {
            this._decorated.notifyListeners();
        }
    }, {
        key: "fireOnClick",
        value: function fireOnClick(event) {
            this._decorated.fireOnClick(event);
        }
    }, {
        key: "fireOnDblClick",
        value: function fireOnDblClick(event) {
            this._decorated.fireOnDblClick(event);
        }
    }, {
        key: "fireOnMouseDown",
        value: function fireOnMouseDown(event) {
            this._decorated.fireOnMouseDown(event);
        }
    }, {
        key: "fireOnMouseMove",
        value: function fireOnMouseMove(event) {
            this._decorated.fireOnMouseMove(event);
        }
    }, {
        key: "fireOnMouseUp",
        value: function fireOnMouseUp(event) {
            this._decorated.fireOnMouseUp(event);
        }
    }, {
        key: "addTag",
        value: function addTag(key, value) {
            this._decorated.addTag(key, value);
        }
    }, {
        key: "countTags",
        value: function countTags() {
            return this._decorated.countTags();
        }
    }, {
        key: "getTag",
        value: function getTag(key) {
            return this._decorated.getTag(key);
        }
    }, {
        key: "getTagsKeys",
        value: function getTagsKeys() {
            return this._decorated.getTagsKeys();
        }
    }, {
        key: "removeTag",
        value: function removeTag(key) {
            this._decorated.removeTag(key);
        }
    }, {
        key: "decorated",
        get: function get() {
            return this._decorated;
        },
        set: function set(value) {
            this._decorated = value;
        }

        // Delegate.

    }, {
        key: "changeNotificationsEnabled",
        get: function get() {
            return this._decorated.changeNotificationsEnabled;
        }
    }, {
        key: "x",
        get: function get() {
            return this._decorated.x;
        },
        set: function set(value) {
            this._decorated.x = value;
        }
    }, {
        key: "y",
        get: function get() {
            return this._decorated.y;
        },
        set: function set(value) {
            this._decorated.y = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this._decorated.width;
        },
        set: function set(value) {
            this._decorated.width = value;
        }
    }, {
        key: "minWidth",
        get: function get() {
            return this._decorated.minWidth;
        },
        set: function set(value) {
            this._decorated.minWidth = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._decorated.height;
        },
        set: function set(value) {
            this._decorated.height = value;
        }
    }, {
        key: "minHeight",
        get: function get() {
            return this._decorated.minHeight;
        },
        set: function set(value) {
            this._decorated.minHeight = value;
        }
    }, {
        key: "rotation",
        get: function get() {
            return this._decorated.rotation;
        },
        set: function set(value) {
            this._decorated.rotation = value;
        }
    }, {
        key: "rotationCenterX",
        get: function get() {
            return this._decorated.rotationCenterX;
        },
        set: function set(value) {
            this._decorated.rotationCenterX = value;
        }
    }, {
        key: "rotationCenterY",
        get: function get() {
            return this._decorated.rotationCenterY;
        },
        set: function set(value) {
            this._decorated.rotationCenterY = value;
        }
    }, {
        key: "x2",
        get: function get() {
            return this._decorated.x2;
        },
        set: function set(value) {
            this._decorated.x2 = value;
        }
    }, {
        key: "y2",
        get: function get() {
            return this._decorated.y2;
        },
        set: function set(value) {
            this._decorated.y2 = value;
        }
    }, {
        key: "stylingAttributes",
        get: function get() {
            return this._decorated.stylingAttributes;
        },
        set: function set(value) {
            this._decorated.stylingAttributes = value;
        }
    }, {
        key: "borderSize",
        get: function get() {
            return this._decorated.borderSize;
        }
    }, {
        key: "id",
        get: function get() {
            return this._decorated.id;
        },
        set: function set(value) {
            this._decorated.id = value;
        }

        /*    get drawn() {
                return this._decorated.drawn;
            }
              set drawn(value) {
                this._decorated.drawn = value;
            }*/

    }, {
        key: "changeListeners",
        get: function get() {
            return this._decorated.changeListeners;
        },
        set: function set(value) {
            this._decorated.changeListeners = value;
        }
    }, {
        key: "onClick",
        get: function get() {
            return this._decorated.onClick;
        },
        set: function set(value) {
            this._decorated.onClick = value;
        }
    }, {
        key: "onDblClick",
        get: function get() {
            return this._decorated.onDblClick;
        },
        set: function set(value) {
            this._decorated.onDblClick = value;
        }
    }, {
        key: "onMouseDown",
        get: function get() {
            return this._decorated.onMouseDown;
        },
        set: function set(value) {
            this._decorated.onMouseDown = value;
        }
    }, {
        key: "onMouseMove",
        get: function get() {
            return this._decorated.onMouseMove;
        },
        set: function set(value) {
            this._decorated.onMouseMove = value;
        }
    }, {
        key: "onMouseUp",
        get: function get() {
            return this._decorated.onMouseUp;
        },
        set: function set(value) {
            this._decorated.onMouseUp = value;
        }
    }, {
        key: "tag",
        get: function get() {
            return this._decorated.tag;
        },
        set: function set(value) {
            this._decorated.tag = value;
        }
    }]);

    return GraphicalElementDecorator;
}(_graphicalElement2.default);

exports.default = GraphicalElementDecorator;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2018.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svgArea = __webpack_require__(64);

var _svgArea2 = _interopRequireDefault(_svgArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function () {
    function Area() {
        _classCallCheck(this, Area);
    }

    _createClass(Area, null, [{
        key: "init",
        value: function init() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#area";

            var name = document.querySelector(selector).tagName;
            if (name.toLowerCase() === "svg") {
                return new _svgArea2.default(selector);
            } else {
                throw "Invalid area tag type: " + name;
            }
        }
    }]);

    return Area;
}();

exports.default = Area;

/***/ })
/******/ ]);
});
//# sourceMappingURL=easygraphics.js.map