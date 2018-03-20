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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



/**
 * This class was implemented to avoid circular dependencies involving ChangeListener.
 * These constants were originally inside ChangeListener.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeListenerConstants = function () {
    function ChangeListenerConstants() {
        _classCallCheck(this, ChangeListenerConstants);
    }

    _createClass(ChangeListenerConstants, null, [{
        key: "REMOVE",
        get: function get() {
            return "remove";
        }
    }, {
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

    return ChangeListenerConstants;
}();

exports.default = ChangeListenerConstants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



/**
 * This class was implemented to avoid circular dependencies involving SVGArea.
 * These constants were originally inside SVGArea.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVGAreaConstants = function () {
    function SVGAreaConstants() {
        _classCallCheck(this, SVGAreaConstants);
    }

    _createClass(SVGAreaConstants, null, [{
        key: "LAYER",
        get: function get() {
            return "layer";
        }
    }, {
        key: "DRAWN",
        get: function get() {
            return "svg_area_drawn";
        }
    }]);

    return SVGAreaConstants;
}();

exports.default = SVGAreaConstants;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



// **********************************************
/**
 * Convert the angle from degrees to radians.
 * @param {number} degrees The angle in degrees.
 * @return {number} The angle in radians.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.notifyListeners = notifyListeners;
exports.getArgumentsAsArray = getArgumentsAsArray;
exports.getNonNullValue = getNonNullValue;
exports.isNotNull = isNotNull;
exports.isNull = isNull;
exports.checkRedundantArguments = checkRedundantArguments;
exports.checkIfNumberOfArgumentsExceed = checkIfNumberOfArgumentsExceed;
exports.isInt = isInt;
exports.isNotInt = isNotInt;
exports.isBoolean = isBoolean;
exports.isNotBoolean = isNotBoolean;
exports.error = error;
exports.warning = warning;
exports.isNumber = isNumber;
exports.isNotANumber = isNotANumber;
exports.isNotABoolean = isNotABoolean;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

/**
 * Convert the angle from radians to degrees.
 * @param {number} radians The angle in radians.
 * @return {number} The angle in degrees.
 */

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

// **********************************************

/**
 * Notify the listener and inform the target.
 * @param listener The listener.
 * @param target The target.
 */
function notifyListeners() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        listener = _ref.listener,
        target = _ref.target;

    if (listener !== undefined && listener !== null) {
        if (typeof listener === "function") {
            listener.apply(undefined, [target].concat(_toConsumableArray(Array.prototype.slice.call(arguments, 1))));
        } else {
            throw "Callback is not a function: " + (typeof listener === "undefined" ? "undefined" : _typeof(listener));
        }
    }
}

/**
 * Return the arguments received as argument in an array.
 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
 * @return {any[]} An array with the content of arguments.
 */
function getArgumentsAsArray() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
    }
    return args;
}

function getNonNullValue() {
    var args = getArgumentsAsArray.apply(undefined, arguments);
    for (var i = 0; i < args.length; ++i) {
        if (isNotNull(args[i])) {
            return args[i];
        }
    }
}

function isNotNull(value) {
    return value !== undefined && value !== null; // May be faster than != null.
}

function isNull(value) {
    return value === undefined || value === null; // May be faster than == null.
}

/**
 * Check whether the informed arguments have more than one value different of null.
 * @return {boolean} true, if the informed arguments have more than one value different of null. false, otherwise.
 */
function checkRedundantArguments() {
    var args = getArgumentsAsArray(arguments);
    var howMany = 0;
    for (var i = 0; i < args.length; ++i) {
        if (isNotNull(args[i])) {
            howMany++;
        }
    }
    return howMany > 1;
}

/**
 * Check whether the number of informed arguments is bigger than the specified number.
 * @return {boolean} true, if the number of informed arguments is bigger than the specified number.
 */
function checkIfNumberOfArgumentsExceed() {
    var args = getArgumentsAsArray(arguments);
    var howMany = 0;
    for (var i = 1; i < args.length; ++i) {
        if (isNotNull(args[i])) {
            howMany++;
        }
    }
    return howMany > args[0];
}

/**
 * Check whether the argument is an integer.
 * @param value The argument.
 * @return {boolean} true, if it is an integer. false, otherwise.
 */
function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

function isNotInt(value) {
    return !isInt(value);
}

function isBoolean(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) == _typeof(true);
}

function isNotBoolean(value) {
    return !isBoolean(value);
}

function error(message) {
    console.log(message);
    throw message;
}

function warning(message) {
    console.log(message);
}

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function isNotANumber(value) {
    return isNaN(parseFloat(value)) || !isFinite(value);
}

function isNotABoolean(value) {
    return (typeof value === "undefined" ? "undefined" : _typeof(value)) !== _typeof(true);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



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
            throw "This method must be implemented by subclasses.";
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
    }]);

    return ChangeListener;
}();

exports.default = ChangeListener;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _util = __webpack_require__(2);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _observable = __webpack_require__(27);

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements the default behaviour of graphical elements.
 * It is the base class for all graphical elements.
 *
 * A graphical element may be specified by different parameters.
 * - The top-left (x1 or x, y1 or y) and bottom-right (x2, y2) coordinates may be specified;
 * - The top-left (x1 or x, y1 or y), width (width or w) and height (height or h) may be specified;
 * - The bottom-right (x2, y2), width (width or w) and height (height or h) may be specified.
 */
var GraphicalElement = function (_Observable) {
    _inherits(GraphicalElement, _Observable);

    function GraphicalElement() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            y2 = _ref.y2,
            width = _ref.width,
            w = _ref.w,
            height = _ref.height,
            h = _ref.h,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? new _style2.default() : _ref$style,
            preserveAspectRatio = _ref.preserveAspectRatio;

        _classCallCheck(this, GraphicalElement);

        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        // Check whether there are redundant arguments.
        var _this = _possibleConstructorReturn(this, (GraphicalElement.__proto__ || Object.getPrototypeOf(GraphicalElement)).call(this));

        if ((0, _util.checkRedundantArguments)(x1, x)) {
            (0, _util.error)("Warning: Both x1 and x were informed.");
        }
        if ((0, _util.checkRedundantArguments)(y1, y)) {
            (0, _util.error)("Warning: Both y1 and y were informed.");
        }
        if ((0, _util.checkRedundantArguments)(width, w)) {
            (0, _util.error)("Warning: Both width and w were informed.");
        }
        if ((0, _util.checkRedundantArguments)(height, h)) {
            (0, _util.error)("Warning: Both height and h were informed.");
        }
        if ((0, _util.checkIfNumberOfArgumentsExceed)(2, x1, x, x2, width, w)) {
            (0, _util.error)("Warning: Two or more ways to specify the graphical element horizontal position and dimension were found.");
        }
        if ((0, _util.checkIfNumberOfArgumentsExceed)(2, y1, y, y2, height, h)) {
            (0, _util.error)("Warning: Two or more ways to specify the graphical element vertical position and dimension were found.");
        }
        // **************************************

        _this._id = id;
        // X1 and y1 may be redefined later if only the bottom-right coordinate and width/height were informed.
        _this._x1 = (0, _util.getNonNullValue)(x1, x, 0);
        _this._y1 = (0, _util.getNonNullValue)(y1, y, 0);

        if ((0, _util.isNull)(x2)) {
            if ((0, _util.isNull)(width) && (0, _util.isNull)(w)) {
                _this._x2 = _this._x1 + 14;
            } else {
                _this._x2 = _this._x1 + (0, _util.getNonNullValue)(width, w);
            }
        } else {
            _this._x2 = x2;
            if (!(0, _util.isNull)(width) || !(0, _util.isNull)(w)) {
                _this._x1 = _this._x2 - (0, _util.getNonNullValue)(width, w);
            }
        }
        if ((0, _util.isNull)(y2)) {
            if ((0, _util.isNull)(height) && (0, _util.isNull)(h)) {
                _this._y2 = _this._y1 + 14;
            } else {
                _this._y2 = _this._y1 + (0, _util.getNonNullValue)(height, h);
            }
        } else {
            _this._y2 = y2;
            if (!(0, _util.isNull)(height) || !(0, _util.isNull)(h)) {
                _this._y1 = _this._y2 - (0, _util.getNonNullValue)(height, h);
            }
        }

        _this._style = style;
        if ((0, _util.isNotNull)(_this._style)) {
            // TODO: Is bidirectional navigation necessary? Doesn't listeners resolve it?
            _this._style.target = _this; // Bidirectional navigation.

            _this._minWidth = _this.borderSize * 2;
            _this._minHeight = _this.borderSize * 2;
        } else {
            _this._minWidth = 1;
            _this._minHeight = 1;
        }

        _this._rotation = 0; // Rotation angle in degrees.
        _this._rotationCenterX = (_this._x1 + _this._x2) / 2; // The rotation reference point x-coordinate.
        _this._rotationCenterY = (_this._y1 + _this._y2) / 2; // The rotation reference point y-coordinate.

        // Define a new object to store additional information.
        // It works like a map, but with complexity on search of O(1).
        // The key works as the tag name.
        _this._tags = {};

        // Events' callback functions.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        _this._onClick = null;
        _this._onDblClick = null;
        _this._onMouseDown = null;
        _this._onMouseMove = null;
        _this._onMouseUp = null;

        _this._preserveAspectRatio = preserveAspectRatio;

        _this._relativePosition = false;
        _this._relativeX1 = null;
        _this._relativeY1 = null;
        return _this;
    }

    _createClass(GraphicalElement, [{
        key: 'getAbsX1',
        value: function getAbsX1() {
            return this.x1;
        }
    }, {
        key: 'getAbsX2',
        value: function getAbsX2() {
            return this.x2;
        }
    }, {
        key: 'getAbsY1',
        value: function getAbsY1() {
            return this.y1;
        }
    }, {
        key: 'getAbsY2',
        value: function getAbsY2() {
            return this.y2;
        }

        /**
         * Change the width without propagating any changes to the height.
         * @param {number} value The new width.
         */

    }, {
        key: 'changeWidth',
        value: function changeWidth(value) {
            this.changeX2(this.x2 + value - this.width);
        }

        /**
         * Change x2 without propagating any changes to y2.
         * @param {number} value The new x2.
         */

    }, {
        key: 'changeX2',
        value: function changeX2(value) {
            if (value === this._x2) return;
            if (value < this._x1) {
                throw "x2 must be greater than x1.";
            }

            this.validateMinWidth(value - this._x1);
            this._x2 = value;
            this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
        }

        /**
         * Change the height without propagating any changes to the width.
         * @param {number} value The new height.
         */

    }, {
        key: 'changeHeight',
        value: function changeHeight(value) {
            this.changeY2(this.y2 + value - this.height);
        }

        /**
         * Change y2 without propagating any changes to x2.
         * @param {number} value The new y2.
         */

    }, {
        key: 'changeY2',
        value: function changeY2(value) {
            if (value === this._y2) return;
            if (value < this._y1) {
                throw "y2 must be greater than y1.";
            }

            this.validateMinHeight(value - this._y1);
            this._y2 = value;

            this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'validateMinWidth',
        value: function validateMinWidth(value) {
            /*
                    if (value < this.minWidth) {
                        throw "The width must be a positive integer equal or greater than minWidth (" + this.minWidth + ").";
                    }
            */
        }
    }, {
        key: 'validateMinHeight',
        value: function validateMinHeight(value) {
            /*
                    if (value < this.minHeight) {
                        throw "The height must be a positive integer equal or greater than minHeight (" + this.minHeight + ").";
                    }
            */
        }
    }, {
        key: 'addTag',
        value: function addTag() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                key = _ref2.key,
                k = _ref2.k,
                value = _ref2.value,
                v = _ref2.v;

            // **************************************
            // Check whether there are redundant arguments.
            if ((0, _util.checkRedundantArguments)(key, k)) {
                (0, _util.error)("Warning: Both key and k were informed.");
            }
            if ((0, _util.checkRedundantArguments)(value, v)) {
                (0, _util.error)("Warning: Both value and v were informed.");
            }
            // **************************************
            key = (0, _util.getNonNullValue)(key, k);
            value = (0, _util.getNonNullValue)(value, v);
            this._tags[key] = value;
        }
    }, {
        key: 'existTag',
        value: function existTag(key) {
            return (0, _util.isNotNull)(this._tags[key]);
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

        /**
         * Returns the minimum value of X that stays inside the geometric shape for
         * the specified y value.
         * @param givenY The y value.
         * @return {number} The minimum value of X that stays inside the geometric shape for
         * the specified y value.
         */

    }, {
        key: 'boundaryX1For',
        value: function boundaryX1For(givenY) {
            return this.x1; // Assume, by default, a rectangular shape.
        }

        /**
         * Returns the maximum value of X that stays inside the geometric shape for
         * the specified y value.
         * @param givenY The y value.
         * @return {number} The maximum value of X that stays inside the geometric shape for
         * the specified y value.
         */

    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            return this.x2; // Assume, by default, a rectangular shape.
        }
    }, {
        key: 'moveBy',
        value: function moveBy() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x = _ref3.x,
                y = _ref3.y;

            if ((0, _util.isNotNull)(x)) {
                this._x1 += x;
                this._x2 += x;
            }
            if ((0, _util.isNotNull)(y)) {
                this._y1 += y;
                this._y2 += y;
            }
            this.notifyListeners(_changeListenerConstants2.default.POSITION);
        }
    }, {
        key: 'moveTo',
        value: function moveTo() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x = _ref4.x,
                y = _ref4.y;

            if ((0, _util.isNotNull)(x)) {
                this._x2 += x - this._x1;
                this._x1 = x;
            }
            if ((0, _util.isNotNull)(y)) {
                this._y2 += y - this._y1;
                this._y1 = y;
            }
            this.notifyListeners(_changeListenerConstants2.default.POSITION);
        }
    }, {
        key: 'moveYTo',
        value: function moveYTo(y) {
            this._y2 += y - this._y1;
            this._y1 = y;
            this.notifyListeners(_changeListenerConstants2.default.POSITION);
        }
    }, {
        key: 'moveXTo',
        value: function moveXTo(x) {
            this._x2 += x - this._x1;
            this._x1 = x;
            this.notifyListeners(_changeListenerConstants2.default.POSITION);
        }
    }, {
        key: 'resizeTo',
        value: function resizeTo() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref5.width,
                w = _ref5.w,
                height = _ref5.height,
                h = _ref5.h;

            width = (0, _util.getNonNullValue)(width, w);
            height = (0, _util.getNonNullValue)(height, h);
            if ((0, _util.isNotNull)(width)) {
                this.x2 += width - this.width;
            }
            if ((0, _util.isNotNull)(height)) {
                this.y2 += height - this.height;
            }
        }
    }, {
        key: 'resizeBy',
        value: function resizeBy() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref6.width,
                w = _ref6.w,
                height = _ref6.height,
                h = _ref6.h;

            width = (0, _util.getNonNullValue)(width, w);
            height = (0, _util.getNonNullValue)(height, h);
            if ((0, _util.isNotNull)(width)) {
                this.x2 += width;
            }
            if ((0, _util.isNotNull)(height)) {
                this.y2 += height;
            }
        }
    }, {
        key: 'appearance',
        value: function appearance(json) {
            if ((0, _util.isNotNull)(this.style)) {
                this.style.fromJSON(json);
                this.notifyListeners(_changeListenerConstants2.default.STYLING);
            } else {
                throw "The graphical element has no styling attributes defined.";
            }
        }

        /**
         * Returns a bounding box for the geometric shape content.
         * @returns {BoundingBox} bounding box for the geometric shape content.
         */

    }, {
        key: 'contentBox',
        value: function contentBox() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref7.width,
                w = _ref7.w,
                height = _ref7.height,
                h = _ref7.h;

            width = (0, _util.getNonNullValue)(width, w, this.width);
            height = (0, _util.getNonNullValue)(height, h, this.height);
            // Assume, by default, a rectangular shape.
            var border = this.borderSize;
            return new _boundingBox2.default({
                x1: this.x1 + border,
                y1: this.y1 + border,
                x2: this.x1 + width - border,
                y2: this.y1 + height - border
            });
        }

        /**
         * Returns the minimum width to fit the specified bounding box as its content.
         * @param boundingBox The content bounding box.
         * @returns {number} minimum width to fit the specified bounding box as its content.
         */

    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            var boundingBoxWidth = boundingBox.x2 - boundingBox.x1;
            boundingBoxWidth += this.style.strokeWidth;
            return boundingBoxWidth;
        }

        /**
         * Returns the minimum height to fit the specified bounding box as its content.
         * @param {BoundingBox} boundingBox The content bounding box.
         * @returns {number} minimum height to fit the specified bounding box as its content.
         */

    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            var boundingBoxHeight = boundingBox.y2 - boundingBox.y1;
            boundingBoxHeight += this.style.strokeWidth;
            return boundingBoxHeight;
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.notifyListeners(_changeListenerConstants2.default.REMOVE);
        }

        // Events.

    }, {
        key: 'fireOnClick',
        value: function fireOnClick(event) {
            (0, _util.notifyListeners)({ listener: this._onClick, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnDblClick',
        value: function fireOnDblClick(event) {
            (0, _util.notifyListeners)({ listener: this._onDblClick, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseDown',
        value: function fireOnMouseDown(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseDown, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseMove',
        value: function fireOnMouseMove(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseMove, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseUp',
        value: function fireOnMouseUp(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseUp, target: this }, event.clientX, event.clientY, event);
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
        key: 'absoluteX1',
        get: function get() {
            if (this.relativePosition === true) {
                return this.x1 + this.relativeX1;
            } else {
                return this.x1;
            }
        }
    }, {
        key: 'x1',
        get: function get() {
            return this._x1;
        },
        set: function set(value) {
            if (value === this._x1) return;
            if (value > this._x2) {
                throw "x1 must be less than x2.";
            }

            this.validateMinWidth(this._x2 - value);
            if (true === this.preserveAspectRatio) {
                var aspectRatio = this.height / this.width;
                var newWidth = this._x2 - value;
                this.validateMinHeight(aspectRatio * newWidth);
                var deltaX1 = value - this._x1;
                this._y1 += aspectRatio * deltaX1;
            }
            this._x1 = value;
            this.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'x',
        get: function get() {
            return this.x1;
        },
        set: function set(value) {
            this.x1 = value;
        }
    }, {
        key: 'absoluteY1',
        get: function get() {
            if (this.relativePosition === true) {
                return this.y1 + this.relativeY1;
            } else {
                return this.y1;
            }
        }
    }, {
        key: 'y1',
        get: function get() {
            return this._y1;
        },
        set: function set(value) {
            if (value === this._y1) return;
            if (value > this._y2) {
                throw "y1 must be less than y2.";
            }

            this.validateMinHeight(this._y2 - value);
            if (this.preserveAspectRatio === true) {
                var aspectRatio = this.width / this.height;
                var newHeight = this._y2 - value;
                this.validateMinWidth(aspectRatio * newHeight);
                var deltaY1 = value - this._y1;
                this._x1 += aspectRatio * deltaY1;
            }
            this._y1 = value;

            this.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'y',
        get: function get() {
            return this.y1;
        },
        set: function set(value) {
            this.y1 = value;
        }
    }, {
        key: 'width',
        get: function get() {
            return this.x2 - this.x1;
        },
        set: function set(value) {
            this.x2 += value - this.width;
        }
    }, {
        key: 'minWidth',
        get: function get() {
            return this._minWidth;
        },
        set: function set(value) {
            if (value === this.minWidth) return;
            this._minWidth = value;
            if (this.width < this.minWidth) {
                this.width = this.minWidth; // If the width changes, listener will be notified.
            }
        }
    }, {
        key: 'height',
        get: function get() {
            return this.y2 - this.y1;
        },
        set: function set(value) {
            this.y2 += value - this.height;
        }
    }, {
        key: 'minHeight',
        get: function get() {
            return this._minHeight;
        },
        set: function set(value) {
            if (value === this.minHeight) return;
            this._minHeight = value;
            if (this.height < this.minHeight) {
                this.height = this.minHeight; // If the height changes, listener will be notified.
            }
        }
    }, {
        key: 'rotation',
        get: function get() {
            return this._rotation;
        },
        set: function set(value) {
            this._rotation = value;
            this.notifyListeners(_changeListenerConstants2.default.ROTATION);
        }
    }, {
        key: 'rotationCenterX',
        get: function get() {
            return this._rotationCenterX;
        },
        set: function set(value) {
            this._rotationCenterX = value;
            this.notifyListeners(_changeListenerConstants2.default.ROTATION);
        }
    }, {
        key: 'rotationCenterY',
        get: function get() {
            return this._rotationCenterY;
        },
        set: function set(value) {
            this._rotationCenterY = value;
            this.notifyListeners(_changeListenerConstants2.default.ROTATION);
        }

        /**
         * Return the x2-coordinate of the graphical element.
         * @return {number} The x2-coordinate of the graphical element.
         */

    }, {
        key: 'x2',
        get: function get() {
            return this._x2;
        }

        /**
         * Set the x2-coordinate of the graphical element.
         * @param {number} value The x2-coordinate of the graphical element.
         */
        ,
        set: function set(value) {
            if (value === this._x2) return;
            if (value < this._x1) {
                throw "x2 must be greater than x1.";
            }

            this.validateMinWidth(value - this._x1);
            if (this.preserveAspectRatio === true) {
                var aspectRatio = this.height / this.width;
                var newWidth = value - this._x1;
                this.validateMinHeight(aspectRatio * newWidth);
                var deltaX2 = value - this._x2;
                this._y2 += aspectRatio * deltaX2;
            }
            this._x2 = value;
            this.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'y2',
        get: function get() {
            return this._y2;
        },
        set: function set(value) {
            if (value === this._y2) return;
            if (value < this._y1) {
                throw "y2 must be greater than y1.";
            }

            this.validateMinHeight(value - this._y1);
            if (this.preserveAspectRatio === true) {
                var aspectRatio = this.width / this.height;
                var newHeight = value - this._y1;
                this.validateMinWidth(aspectRatio * newHeight);
                var deltaY2 = value - this._y2;
                this._x2 += aspectRatio * deltaY2;
            }
            this._y2 = value;

            this.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'style',
        get: function get() {
            return this._style;
        },
        set: function set(value) {
            var oldBorderSize = this.borderSize;
            this._style.target = null;
            this._style = value;
            value.target = this;
            var newBorderSize = this.borderSize;

            // Update the min width and height.
            var deltaBorderSize = newBorderSize - oldBorderSize;
            this._minWidth += deltaBorderSize;
            this._minHeight += deltaBorderSize;

            this.notifyListeners(_changeListenerConstants2.default.STYLING);
        }

        /**
         * Return the border size if this element has a style with a defined stroke width.
         * It returns 0, otherwise.
         * @return {number} The border size if this element has a style with a defined stroke width. It returns 0, otherwise.
         */

    }, {
        key: 'borderSize',
        get: function get() {
            if ((0, _util.isNotNull)(this.style)) {
                return this.style.strokeWidth / 2;
            }
            return 0;
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
        key: 'relativePosition',
        get: function get() {
            return this._relativePosition;
        },
        set: function set(value) {
            this._relativePosition = value;
        }
    }, {
        key: 'relativeX1',
        get: function get() {
            return this._relativeX1;
        },
        set: function set(value) {
            this._relativeX1 = value;
        }
    }, {
        key: 'relativeY1',
        get: function get() {
            return this._relativeY1;
        },
        set: function set(value) {
            this._relativeY1 = value;
        }
    }], [{
        key: 'PARENT',
        get: function get() {
            return "parent";
        }
    }]);

    return GraphicalElement;
}(_observable2.default);

exports.default = GraphicalElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralDimensionChangeListener = function (_ChangeListener) {
    _inherits(GeneralDimensionChangeListener, _ChangeListener);

    function GeneralDimensionChangeListener() {
        _classCallCheck(this, GeneralDimensionChangeListener);

        return _possibleConstructorReturn(this, (GeneralDimensionChangeListener.__proto__ || Object.getPrototypeOf(GeneralDimensionChangeListener)).call(this, _changeListenerConstants2.default.DIMENSION));
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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("width", target.width);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("height", target.height);
        }
    }]);

    return GeneralDimensionChangeListener;
}(_changeListener2.default);

exports.default = GeneralDimensionChangeListener;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralPositionChangeListener = function (_ChangeListener) {
    _inherits(GeneralPositionChangeListener, _ChangeListener);

    function GeneralPositionChangeListener() {
        _classCallCheck(this, GeneralPositionChangeListener);

        return _possibleConstructorReturn(this, (GeneralPositionChangeListener.__proto__ || Object.getPrototypeOf(GeneralPositionChangeListener)).call(this, _changeListenerConstants2.default.POSITION));
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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("x", target.x);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("y", target.y);
        }
    }]);

    return GeneralPositionChangeListener;
}(_changeListener2.default);

exports.default = GeneralPositionChangeListener;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleChangeListener = function (_ChangeListener) {
    _inherits(StyleChangeListener, _ChangeListener);

    function StyleChangeListener() {
        _classCallCheck(this, StyleChangeListener);

        return _possibleConstructorReturn(this, (StyleChangeListener.__proto__ || Object.getPrototypeOf(StyleChangeListener)).call(this, _changeListenerConstants2.default.STYLING));
    }

    _createClass(StyleChangeListener, [{
        key: 'update',
        value: function update(target) {
            Object.assign(target.getTag(_svgAreaConstants2.default.DRAWN).style, target.style.toJSON());
        }
    }]);

    return StyleChangeListener;
}(_changeListener2.default);

exports.default = StyleChangeListener;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements bounding boxes.
 */
var BoundingBox = function () {
    function BoundingBox() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            width = _ref.width,
            w = _ref.w,
            y2 = _ref.y2,
            height = _ref.height,
            h = _ref.h;

        _classCallCheck(this, BoundingBox);

        // **************************************
        // Check whether there are redundant arguments.
        if ((0, _util.checkRedundantArguments)(x1, x)) {
            (0, _util.error)("Warning: Both x1 and x were informed.");
        }
        if ((0, _util.checkRedundantArguments)(y1, y)) {
            (0, _util.error)("Warning: Both y1 and y were informed.");
        }
        if ((0, _util.checkRedundantArguments)(x2, width, w)) {
            (0, _util.error)("Warning: More than one of the following arguments were informed: x2, width, or w.");
        }
        if ((0, _util.checkRedundantArguments)(y2, height, h)) {
            (0, _util.error)("Warning: More than one of the following arguments were informed: y2, height, or h.");
        }
        // **************************************
        this._x1 = (0, _util.getNonNullValue)(x1, x, 0);
        this._y1 = (0, _util.getNonNullValue)(y1, y, 0);

        // x2 has precedence over width and w.
        if ((0, _util.isNull)(x2)) {
            if ((0, _util.isNull)(width) && (0, _util.isNull)(w)) {
                this._x2 = this._x1 + 14;
            } else {
                this._x2 = this._x1 + (0, _util.getNonNullValue)(width, w);
            }
        } else {
            this._x2 = x2;
        }
        // Y2 has precedence over height and h.
        if ((0, _util.isNull)(y2)) {
            if ((0, _util.isNull)(height) && (0, _util.isNull)(h)) {
                this._y2 = this._y1 + 14;
            } else {
                this._y2 = this._y1 + (0, _util.getNonNullValue)(height, h);
            }
        } else {
            this._y2 = y2;
        }
    }

    _createClass(BoundingBox, [{
        key: "x1",
        get: function get() {
            return this._x1;
        },
        set: function set(value) {
            if (value > this._x2) {
                throw "x1 must be less than x2";
            }
            this._x1 = value;
        }
    }, {
        key: "y1",
        get: function get() {
            return this._y1;
        },
        set: function set(value) {
            if (value > this._y2) {
                throw "y1 must be less than y2";
            }
            this._y1 = value;
        }
    }, {
        key: "x2",
        get: function get() {
            return this._x2;
        },
        set: function set(value) {
            if (value < this._x1) {
                throw "x2 must be less than x1";
            }
            this._x2 = value;
        }
    }, {
        key: "y2",
        get: function get() {
            return this._y2;
        },
        set: function set(value) {
            if (value < this._y1) {
                throw "y2 must be less than y1";
            }
            this._y2 = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this.x2 - this.x1;
        }
    }, {
        key: "height",
        get: function get() {
            return this.y2 - this.y1;
        }
    }]);

    return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _defaultStyle = __webpack_require__(26);

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Style = function (_DefaultStyle) {
    _inherits(Style, _DefaultStyle);

    function Style() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$strokeWidth = _ref.strokeWidth,
            strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
            _ref$strokeColor = _ref.strokeColor,
            strokeColor = _ref$strokeColor === undefined ? 'black' : _ref$strokeColor,
            _ref$fillColor = _ref.fillColor,
            fillColor = _ref$fillColor === undefined ? '#FFFFCC' : _ref$fillColor,
            strokeDashArray = _ref.strokeDashArray,
            target = _ref.target;

        _classCallCheck(this, Style);

        var _this = _possibleConstructorReturn(this, (Style.__proto__ || Object.getPrototypeOf(Style)).call(this));

        _this._strokeWidth = strokeWidth;
        _this._strokeColor = strokeColor;
        _this._fillColor = fillColor;
        _this._target = target;
        _this._strokeDashArray = strokeDashArray;
        return _this;
    }

    _createClass(Style, [{
        key: "fromJSON",
        value: function fromJSON(json) {
            this.fillColor = json.fill;
            this.strokeColor = json.stroke;
            this.strokeWidth = json.strokeWidth;
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            return {
                fill: this.fillColor,
                stroke: this.strokeColor,
                strokeWidth: this.strokeWidth
            };
        }
    }, {
        key: "toString",
        value: function toString() {
            var style = "stroke:" + this.strokeColor + "; fill: " + this.fillColor + "; stroke-width: " + this.strokeWidth + ";";
            if (this.strokeDashArray !== null) {
                style += " stroke-dasharray: " + this.strokeDashArray + ";";
            }
            style += "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;";
            return style;
        }
    }, {
        key: "notifyTarget",
        value: function notifyTarget() {
            if (this.target !== undefined && this.target !== null) {
                this.target.notifyListeners(_changeListenerConstants2.default.STYLING);
            }
        }
    }, {
        key: "strokeWidth",
        get: function get() {
            return this._strokeWidth;
        },
        set: function set(value) {
            this._strokeWidth = value;
            this.notifyTarget();
        }
    }, {
        key: "strokeColor",
        get: function get() {
            return this._strokeColor;
        },
        set: function set(value) {
            this._strokeColor = value;
            this.notifyTarget();
        }
    }, {
        key: "fillColor",
        get: function get() {
            return this._fillColor;
        },
        set: function set(value) {
            this._fillColor = value;
            this.notifyTarget();
        }
    }, {
        key: "strokeDashArray",
        get: function get() {
            return this._strokeDashArray;
        },
        set: function set(value) {
            this._strokeDashArray = value;
        }
    }, {
        key: "target",
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
        }
    }]);

    return Style;
}(_defaultStyle2.default);

exports.default = Style;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements a decorator that shows squared vertices over a graphical element.
 */
var BoxVerticesDecorator = function (_GraphicalElement) {
    _inherits(BoxVerticesDecorator, _GraphicalElement);

    function BoxVerticesDecorator() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            decorated = _ref.decorated,
            _ref$topLeft = _ref.topLeft,
            topLeft = _ref$topLeft === undefined ? true : _ref$topLeft,
            _ref$topRight = _ref.topRight,
            topRight = _ref$topRight === undefined ? true : _ref$topRight,
            _ref$bottomLeft = _ref.bottomLeft,
            bottomLeft = _ref$bottomLeft === undefined ? true : _ref$bottomLeft,
            _ref$bottomRight = _ref.bottomRight,
            bottomRight = _ref$bottomRight === undefined ? true : _ref$bottomRight,
            _ref$vertexSize = _ref.vertexSize,
            vertexSize = _ref$vertexSize === undefined ? 7 : _ref$vertexSize;

        _classCallCheck(this, BoxVerticesDecorator);

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecorator.__proto__ || Object.getPrototypeOf(BoxVerticesDecorator)).call(this));

        decorated.addTag({ key: BoxVerticesDecorator.BOX_VERTICES_TAG, value: _this });
        if (decorated === undefined && decorated === null) {
            throw "A decorator must have a decorated.";
        }
        if (!(decorated instanceof _graphicalElement2.default)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        _this._decorated = decorated;

        _this._topLeft = topLeft;
        _this._topRight = topRight;
        _this._bottomLeft = bottomLeft;
        _this._bottomRight = bottomRight;

        _this._vertexSize = vertexSize;

        // Events' callback functions for vertices.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        _this._onVertexClick = null;
        _this._onVertexDblClick = null;
        _this._onVertexMouseDown = null;
        _this._onVertexMouseMove = null;
        _this._onVertexMouseUp = null;

        _this._propagateToDecorated = 0;
        return _this;
    }

    _createClass(BoxVerticesDecorator, [{
        key: "enablePropagationToDecorated",
        value: function enablePropagationToDecorated() {
            this._propagateToDecorated--;
        }
    }, {
        key: "disablePropagationToDecorated",
        value: function disablePropagationToDecorated() {
            this._propagateToDecorated++;
        }
    }, {
        key: "getAbsY2",
        value: function getAbsY2() {
            return this.decorated.getAbsY2();
        }
    }, {
        key: "resizeTo",
        value: function resizeTo() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref2.width,
                w = _ref2.w,
                height = _ref2.height,
                h = _ref2.h;

            this.decorated.resizeTo({ width: width, w: w, height: height, h: h });
        }
    }, {
        key: "widthToFit",
        value: function widthToFit(boundingBox) {
            return this.decorated.widthToFit(boundingBox);
        }
    }, {
        key: "changeX2",
        value: function changeX2(value) {
            this.decorated.changeX2(value);
        }
    }, {
        key: "changeHeight",
        value: function changeHeight(value) {
            this.decorated.changeHeight(value);
        }
    }, {
        key: "changeY2",
        value: function changeY2(value) {
            this.decorated.changeY2(value);
        }
    }, {
        key: "validateMinWidth",
        value: function validateMinWidth(value) {
            this.decorated.validateMinWidth(value);
        }
    }, {
        key: "validateMinHeight",
        value: function validateMinHeight(value) {
            this.decorated.validateMinHeight(value);
        }
    }, {
        key: "resizeBy",
        value: function resizeBy() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref3.width,
                w = _ref3.w,
                height = _ref3.height,
                h = _ref3.h;

            this.decorated.resizeBy({ width: width, w: w, height: height, h: h });
        }
    }, {
        key: "contentBox",
        value: function contentBox() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref4.width,
                w = _ref4.w,
                height = _ref4.height,
                h = _ref4.h;

            return this.decorated.contentBox({ width: width, w: w, height: height, h: h });
        }
    }, {
        key: "heightToFit",
        value: function heightToFit(boundingBox) {
            return this.decorated.heightToFit(boundingBox);
        }
    }, {
        key: "getAbsX2",
        value: function getAbsX2() {
            return this.decorated.getAbsX2();
        }
    }, {
        key: "changeWidth",
        value: function changeWidth(value) {
            this.decorated.changeWidth(value);
        }
    }, {
        key: "boundaryX2For",
        value: function boundaryX2For(givenY) {
            return this.decorated.boundaryX2For(givenY);
        }

        // Events.

    }, {
        key: "dispatchOnVertexClick",
        value: function dispatchOnVertexClick(target, x, y, event) {
            (0, _util.notifyListeners)({ listener: this._onVertexClick, target: target }, x, y, event);
        }
    }, {
        key: "dispatchOnVertexDblClick",
        value: function dispatchOnVertexDblClick(target, x, y, event) {
            (0, _util.notifyListeners)({ listener: this._onVertexDblClick, target: target }, x, y, event);
        }
    }, {
        key: "dispatchOnVertexMouseDown",
        value: function dispatchOnVertexMouseDown(target, x, y, event) {
            (0, _util.notifyListeners)({ listener: this._onVertexMouseDown, target: target }, x, y, event);
        }
    }, {
        key: "dispatchOnVertexMouseMove",
        value: function dispatchOnVertexMouseMove(target, x, y, event) {
            (0, _util.notifyListeners)({ listener: this._onVertexMouseMove, target: target }, x, y, event);
        }
    }, {
        key: "dispatchOnVertexMouseUp",
        value: function dispatchOnVertexMouseUp(target, x, y, event) {
            (0, _util.notifyListeners)({ listener: this._onVertexMouseUp, target: target }, x, y, event);
        }
    }, {
        key: "propagateToDecorated",
        get: function get() {
            return 0 === this._propagateToDecorated;
        }
    }, {
        key: "vertexSize",
        get: function get() {
            return this._vertexSize;
        },
        set: function set(value) {
            if ((0, _util.isNotInt)(value) || value <= 0) {
                throw "The vertex size must be a positive integer.";
            }
            this._vertexSize = value;
        }
    }, {
        key: "topLeft",
        get: function get() {
            return this._topLeft;
        },
        set: function set(value) {
            if ((0, _util.isNotBoolean)(value)) {
                throw "The top left value must be a boolean.";
            }
            this._topLeft = value;
        }
    }, {
        key: "topRight",
        get: function get() {
            return this._topRight;
        },
        set: function set(value) {
            if ((0, _util.isNotBoolean)(value)) {
                throw "The top right value must be a boolean.";
            }
            this._topRight = value;
        }
    }, {
        key: "bottomLeft",
        get: function get() {
            return this._bottomLeft;
        },
        set: function set(value) {
            if ((0, _util.isNotBoolean)(value)) {
                throw "The bottom left value must be a boolean.";
            }
            this._bottomLeft = value;
        }
    }, {
        key: "bottomRight",
        get: function get() {
            return this._bottomRight;
        },
        set: function set(value) {
            if ((0, _util.isNotBoolean)(value)) {
                throw "The bottom right value must be a boolean.";
            }
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
            this.decorated.width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this.decorated.height;
        },
        set: function set(value) {
            this.decorated.height = value;
        }
    }, {
        key: "minHeight",
        get: function get() {
            return this.decorated.minHeight;
        },
        set: function set(value) {
            this.decorated.minHeight = value;
        }
    }, {
        key: "y2",
        get: function get() {
            return this.decorated.y2;
        },
        set: function set(value) {
            this.decorated.y2 = value;
        }
    }, {
        key: "minWidth",
        get: function get() {
            return this.decorated.minWidth;
        },
        set: function set(value) {
            this.decorated.minWidth = value;
        }
    }, {
        key: "x2",
        get: function get() {
            return this.decorated.x2;
        },
        set: function set(value) {
            this.decorated.x2 = value;
        }
    }], [{
        key: "VERTEX",
        get: function get() {
            return "vertex";
        }
    }, {
        key: "IS_VERTEX",
        get: function get() {
            return "isVertex";
        }
    }, {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
    function Marker(_ref) {
        var id = _ref.id,
            position = _ref.position,
            type = _ref.type;

        _classCallCheck(this, Marker);

        this._id = id;
        this._position = position;
        this._type = type;
    }

    _createClass(Marker, [{
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: "position",
        get: function get() {
            return this._position;
        },
        set: function set(value) {
            this._position = value;
        }
    }, {
        key: "type",
        get: function get() {
            return this._type;
        },
        set: function set(value) {
            this._type = value;
        }
    }], [{
        key: "DIAMOND",
        get: function get() {
            return "diamond";
        }
    }, {
        key: "FILLED_DIAMOND",
        get: function get() {
            return "filled_diamond";
        }
    }, {
        key: "ARROW",
        get: function get() {
            return "arrow";
        }
    }, {
        key: "TRIANGLE",
        get: function get() {
            return "triangle";
        }
    }, {
        key: "FILLED_TRIANGLE",
        get: function get() {
            return "filled_triangle";
        }
    }, {
        key: "START",
        get: function get() {
            return "start";
        }
    }, {
        key: "END",
        get: function get() {
            return "end";
        }
    }]);

    return Marker;
}();

exports.default = Marker;

/***/ }),
/* 13 */
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

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _point = __webpack_require__(30);

var _point2 = _interopRequireDefault(_point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolyLine = function (_GraphicalElement) {
    _inherits(PolyLine, _GraphicalElement);

    function PolyLine(_ref) {
        var id = _ref.id,
            _ref$curve = _ref.curve,
            curve = _ref$curve === undefined ? false : _ref$curve,
            startMarker = _ref.startMarker,
            endMarker = _ref.endMarker,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? new _style2.default({
            strokeWidth: 1,
            strokeColor: "black",
            fillColor: "none"
        }) : _ref$style;

        _classCallCheck(this, PolyLine);

        var _this = _possibleConstructorReturn(this, (PolyLine.__proto__ || Object.getPrototypeOf(PolyLine)).call(this, { id: id, x: 0, y: 0, width: 0, height: 0, style: style, preserveAspectRatio: false }));

        _this._idCount = 1;
        _this._points = [];
        var coordinates = Array.from(arguments).slice(1);

        for (var i = 0; i < coordinates.length; i += 2) {
            _this.addPoint(coordinates[i], coordinates[i + 1]);
        }

        _this._curve = curve;
        _this._startMarker = startMarker;
        _this._endMarker = endMarker;

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
            this._points.push(new _point2.default({ x: x, y: y, id: this.generateId() }));
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
            return new _boundingBox2.default({ x1: minX, y1: minY, x2: maxX, y2: maxY });
        }
    }, {
        key: 'updateBoundingBox',
        value: function updateBoundingBox() {
            var boundingBox = this.findBoundingBox();
            if (boundingBox.x1 === Number.MAX_SAFE_INTEGER || boundingBox.y1 === Number.MAX_SAFE_INTEGER || boundingBox.x2 === Number.MIN_SAFE_INTEGER || boundingBox.y2 === Number.MIN_SAFE_INTEGER) {
                return;
            }
            this.moveTo({ x: boundingBox.x1, y: boundingBox.y1 });
            this.resizeTo({ width: boundingBox.x2 - this.x1, height: boundingBox.y2 - this.y1 });
        }
    }, {
        key: 'curve',
        get: function get() {
            return this._curve;
        },
        set: function set(value) {
            this._curve = value;
        }
    }, {
        key: 'startMarker',
        get: function get() {
            return this._startMarker;
        },
        set: function set(value) {
            this._startMarker = value;
        }
    }, {
        key: 'endMarker',
        get: function get() {
            return this._endMarker;
        },
        set: function set(value) {
            this._endMarker = value;
        }
    }, {
        key: 'preserveAspectRatio',
        get: function get() {
            return false;
        }

        /**
         * The line aspect ratio is always false. This method throws an exception if the argument
         * is different of false.
         * @param {boolean} value true, if the aspect ratio must be preserved. false, otherwise.
         */
        ,
        set: function set(value) {
            if (value !== false) {
                throw "The polyline aspect ratio has always to be false.";
            }
        }
    }, {
        key: 'minWidth',
        get: function get() {
            if (this.style !== null) {
                return this.style.strokeWidth;
            }
            return 1;
        }
    }, {
        key: 'minHeight',
        get: function get() {
            if (this.style !== null) {
                return this.style.strokeWidth;
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

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
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        x1 = _ref.x1,
        x = _ref.x,
        y1 = _ref.y1,
        y = _ref.y,
        x2 = _ref.x2,
        y2 = _ref.y2,
        width = _ref.width,
        w = _ref.w,
        height = _ref.height,
        h = _ref.h,
        style = _ref.style,
        preserveAspectRatio = _ref.preserveAspectRatio;

    _classCallCheck(this, Rectangle);

    // The arguments validation is done inside the GraphicalElement constructor.
    return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(this, arguments));
  }

  return Rectangle;
}(_graphicalElement2.default);

exports.default = Rectangle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _util = __webpack_require__(2);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

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
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            centerX = _ref.centerX,
            cx = _ref.cx,
            centerY = _ref.centerY,
            cy = _ref.cy,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            diameter = _ref.diameter,
            d = _ref.d,
            radius = _ref.radius,
            r = _ref.r,
            style = _ref.style;

        _classCallCheck(this, Circle);

        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        if ((0, _util.isNull)(radius) && (0, _util.isNull)(r)) {
            radius = (0, _util.getNonNullValue)(diameter, d, 14) / 2;
        } else {
            radius = (0, _util.getNonNullValue)(radius, r);
        }
        if ((0, _util.isNull)(centerX) && (0, _util.isNull)(cx)) {
            x1 = (0, _util.getNonNullValue)((x, x1, 0));
        } else {
            x1 = (0, _util.getNonNullValue)(centerX, cx) - radius;
        }
        if ((0, _util.isNull)(centerY) && (0, _util.isNull)(cy)) {
            y1 = (0, _util.getNonNullValue)((y, y1, 0));
        } else {
            y1 = (0, _util.getNonNullValue)(centerY, cy) - radius;
        }
        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, {
            id: id,
            x1: x1,
            y1: y1,
            x2: x1 + radius * 2,
            y2: y1 + radius * 2,
            style: style,
            preserveAspectRatio: true
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
            return (-eqb - sqrtDelta) / (2 * eqa);
        }
    }, {
        key: 'boundaryX2For',
        value: function boundaryX2For(givenY) {
            var eqa = 1;
            var eqb = -2 * this.centerX;
            var eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
            var delta = eqb * eqb - 4 * eqa * eqc;
            var sqrtDelta = Math.sqrt(delta);
            return (-eqb + sqrtDelta) / (2 * eqa);
        }
    }, {
        key: 'contentBox',
        value: function contentBox() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref2.width,
                w = _ref2.w,
                height = _ref2.height,
                h = _ref2.h;

            // Take into consideration the ratio among width and height.
            // FORMULA:
            // (width/2)^2 + (height/2)^2 = radius^2
            // (width/2)^2 + (width/ratio/2)^2 = radius^2
            // (width/2)^2 + (width/2*ratio)^2 = radius^2
            // if z = width/2 | z^2 + ((1/ratio)*z)^2 = radius^2
            // (1 + (1/ratio)^2) z^2 = radius^2
            // z = sqrt(radius^2/ (1 + (1/ratio)^2))

            width = (0, _util.getNonNullValue)(width, w, this.width);
            height = (0, _util.getNonNullValue)(height, h, this.height);

            var aspectRatio = width / height;
            var squaredRadius = this.radius * this.radius;
            var halfWidth = Math.sqrt(squaredRadius / (1 + Math.pow(1 / aspectRatio, 2)));
            var halfHeight = halfWidth / aspectRatio;
            var deltaX = this.radius - halfWidth;
            var deltaY = this.radius - halfHeight;

            return new _boundingBox2.default({
                x1: this.x + deltaX,
                y1: this.y + deltaY,
                x2: this.x + width - deltaX,
                y2: this.y + height - deltaY
            });
        }
    }, {
        key: 'widthToFit',
        value: function widthToFit(boundingBox) {
            if (!(boundingBox instanceof _boundingBox2.default)) {
                throw "The argument must be an instance of BoundingBox";
            }
            return Math.sqrt(Math.pow(boundingBox.width, 2) + Math.pow(boundingBox.height, 2));
        }
    }, {
        key: 'heightToFit',
        value: function heightToFit(boundingBox) {
            if (!(boundingBox instanceof _boundingBox2.default)) {
                throw "The argument must be an instance of BoundingBox";
            }
            return this.widthToFit(boundingBox);
        }
    }, {
        key: 'preserveAspectRatio',
        get: function get() {
            return true;
        }

        /**
         * The circle aspect ratio is always true. This method throws an exception.
         * @param {boolean} value true, if the aspect ratio must be preserved. false, otherwise.
         */
        ,
        set: function set(value) {
            if (value !== true) {
                throw "The circle aspect ratio has always to be true.";
            }
        }
    }, {
        key: 'centerX',
        get: function get() {
            return (this.x1 + this.x2) / 2;
        }
    }, {
        key: 'centerY',
        get: function get() {
            return (this.y1 + this.y2) / 2;
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
            _set(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'width', value, this);
            this.enableChangeNotifications();
            this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
        }
    }, {
        key: 'height',
        get: function get() {
            return _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), 'height', this);
        },
        set: function set(value) {
            this.width = value;
        }
    }]);

    return Circle;
}(_graphicalElement2.default);

exports.default = Circle;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _util = __webpack_require__(2);

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
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            width = _ref.width,
            w = _ref.w,
            y2 = _ref.y2,
            height = _ref.height,
            h = _ref.h,
            style = _ref.style,
            preserveAspectRatio = _ref.preserveAspectRatio;

        _classCallCheck(this, Diamond);

        // The arguments validation is done inside the GraphicalElement constructor.
        return _possibleConstructorReturn(this, (Diamond.__proto__ || Object.getPrototypeOf(Diamond)).apply(this, arguments));
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
            if (givenY === middleY) {
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
        value: function contentBox() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref2.width,
                w = _ref2.w,
                height = _ref2.height,
                h = _ref2.h;

            // For diamonds, it does not matter the current width/height of a group they may be a frame of.
            width = (0, _util.getNonNullValue)(width, w, this.width);
            height = (0, _util.getNonNullValue)(height, h, this.height);

            var deltaX = width / 4;
            var deltaY = height / 4;
            return new _boundingBox2.default({
                x1: this.x + deltaX,
                y1: this.y + deltaY,
                x2: this.x + width - deltaX,
                y2: this.y + height - deltaY
            });
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

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _util = __webpack_require__(2);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

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
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            centerX = _ref.centerX,
            cx = _ref.cx,
            centerY = _ref.centerY,
            cy = _ref.cy,
            x = _ref.x,
            x1 = _ref.x1,
            y = _ref.y,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            width = _ref.width,
            w = _ref.w,
            height = _ref.height,
            h = _ref.h,
            dx = _ref.dx,
            diameterX = _ref.diameterX,
            radiusX = _ref.radiusX,
            rx = _ref.rx,
            dy = _ref.dy,
            diameterY = _ref.diameterY,
            radiusY = _ref.radiusY,
            ry = _ref.ry,
            style = _ref.style,
            preserveAspectRatio = _ref.preserveAspectRatio;

        _classCallCheck(this, Ellipse);

        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        // Check whether there are redundant arguments.
        if ((0, _util.checkRedundantArguments)(radiusX, rx, diameterX, dx, width, w, x2)) {
            (0, _util.error)("Warning: More than one of the following arguments was informed: radiusX, rx, diameterX, dx, width, w, and x2.");
        }
        if ((0, _util.checkRedundantArguments)(radiusY, ry, diameterY, dy, height, h, y2)) {
            (0, _util.error)("Warning: More than one of the following arguments was informed: radiusY, ry, diameterY, dy, height, h, and y2.");
        }
        // **************************************
        var needToAdjustDiameterX = false;
        var needToAdjustDiameterY = false;
        if ((0, _util.isNull)(radiusX) && (0, _util.isNull)(rx)) {
            if ((0, _util.isNull)(diameterX) && (0, _util.isNull)(dx)) {
                if ((0, _util.isNull)(x2)) {
                    if ((0, _util.isNull)(width) && (0, _util.isNull)(w)) {
                        diameterX = 14;
                    } else {
                        diameterX = (0, _util.getNonNullValue)(width, w);
                    }
                } else {
                    diameterX = x2; // Need to be adjusted later - when x1 is calculated.
                    needToAdjustDiameterX = true;
                }
            } else {
                diameterX = (0, _util.getNonNullValue)(diameterX, dx);
            }
        } else {
            diameterX = (0, _util.getNonNullValue)(radiusX, rx) * 2;
        }
        if ((0, _util.isNull)(radiusY) && (0, _util.isNull)(ry)) {
            if ((0, _util.isNull)(diameterY) && (0, _util.isNull)(dy)) {
                if ((0, _util.isNull)(y2)) {
                    if ((0, _util.isNull)(height) && (0, _util.isNull)(h)) {
                        diameterY = 7; // Need to be adjusted later - when y1 is calculated.
                    } else {
                        diameterY = (0, _util.getNonNullValue)(height, h);
                    }
                } else {
                    diameterY = y2;
                    needToAdjustDiameterY = true;
                }
            } else {
                diameterY = (0, _util.getNonNullValue)(diameterY, dy);
            }
        } else {
            diameterY = (0, _util.getNonNullValue)(radiusY, ry) * 2;
        }
        if ((0, _util.isNull)(centerX) && (0, _util.isNull)(cx)) {
            if ((0, _util.isNull)(x) && (0, _util.isNull)(x1)) {
                x1 = 0;
            } else {
                x1 = (0, _util.getNonNullValue)(x1, x);
                if (needToAdjustDiameterX) {
                    diameterX -= x1;
                }
            }
        } else {
            if (needToAdjustDiameterX) {
                var _radiusX = diameterX - (0, _util.getNonNullValue)(centerX, cx);
                x1 = (0, _util.getNonNullValue)(centerX, cx) - _radiusX;
            } else {
                x1 = (0, _util.getNonNullValue)(centerX, cx) - diameterX / 2;
            }
        }
        if ((0, _util.isNull)(centerY) && (0, _util.isNull)(cy)) {
            if ((0, _util.isNull)(y) && (0, _util.isNull)(y1)) {
                y1 = 0;
            } else {
                y1 = (0, _util.getNonNullValue)(y1, y);
                if (needToAdjustDiameterY) {
                    diameterY -= y1;
                }
            }
        } else {
            if (needToAdjustDiameterY) {
                var _radiusY = diameterY - (0, _util.getNonNullValue)(centerY, cy);
                y1 = (0, _util.getNonNullValue)(centerY, cy) - _radiusY;
            } else {
                y1 = (0, _util.getNonNullValue)(centerY, cy) - diameterY / 2;
            }
        }
        return _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).call(this, {
            id: id,
            x1: x1,
            y1: y1,
            width: diameterX,
            height: diameterY,
            style: style,
            preserveAspectRatio: preserveAspectRatio
        }));
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
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                width = _ref2.width,
                w = _ref2.w,
                height = _ref2.height,
                h = _ref2.h;

            width = (0, _util.getNonNullValue)(width, w, this.width);
            height = (0, _util.getNonNullValue)(height, h, this.height);

            var sqrt2 = Math.sqrt(2);
            var rectHeight = height / 2 * sqrt2;
            var rectWidth = width / 2 * sqrt2;
            var deltaX = (width - rectWidth) / 2;
            var deltaY = (height - rectHeight) / 2;

            var contentBox = new _boundingBox2.default({
                x1: this.x1 + deltaX,
                y1: this.y + deltaY,
                x2: this.x1 + width - deltaX,
                y2: this.y1 + height - deltaY
            });

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
            this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
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
            this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_GraphicalElement) {
    _inherits(Image, _GraphicalElement);

    function Image() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            y2 = _ref.y2,
            width = _ref.width,
            w = _ref.w,
            height = _ref.height,
            h = _ref.h,
            style = _ref.style,
            preserveAspectRatio = _ref.preserveAspectRatio,
            image = _ref.image,
            img = _ref.img;

        _classCallCheck(this, Image);

        // **************************************
        // Check whether there are redundant arguments.
        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));

        if ((0, _util.checkRedundantArguments)(image, img)) {
            (0, _util.error)("Warning: Both image and img were informed.");
        }
        // **************************************
        _this._image = (0, _util.getNonNullValue)(image, img);
        return _this;
    }

    _createClass(Image, [{
        key: 'image',
        get: function get() {
            return this._image;
        },
        set: function set(value) {
            this._image = value;
        }
    }]);

    return Image;
}(_graphicalElement2.default);

exports.default = Image;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_GraphicalElement) {
    _inherits(Line, _GraphicalElement);

    function Line() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            y2 = _ref.y2,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? new _style2.default({ strokeWidth: 1 }) : _ref$style;

        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));

        _set(Line.prototype.__proto__ || Object.getPrototypeOf(Line.prototype), 'preserveAspectRatio', false, _this);
        return _this;
    }

    _createClass(Line, [{
        key: 'preserveAspectRatio',
        get: function get() {
            return false;
        }

        /**
         * The line aspect ratio is always false. This method throws an exception if the argument
         * is different of false.
         * @param {boolean} value true, if the aspect ratio must be preserved. false, otherwise.
         */
        ,
        set: function set(value) {
            if (value !== false) {
                throw "The line aspect ratio has always to be false.";
            }
        }
    }]);

    return Line;
}(_graphicalElement2.default);

exports.default = Line;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _fontStyle = __webpack_require__(31);

var _fontStyle2 = _interopRequireDefault(_fontStyle);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

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
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            _ref$text = _ref.text,
            text = _ref$text === undefined ? "Default Text" : _ref$text,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? new _style2.default({
            strokeWidth: 0,
            strokeColor: "",
            fillColor: "black"
        }) : _ref$style,
            _ref$fontStyle = _ref.fontStyle,
            fontStyle = _ref$fontStyle === undefined ? new _fontStyle2.default() : _ref$fontStyle;

        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, {
            x1: x1,
            x: x,
            y1: y1,
            y: y,
            text: text,
            style: style
        }));

        // The specified value for style was not working when calling with super(...arguments).


        _this.x2 = _this.x1 + 7;
        _this.y2 = _this.y1 + 7;

        _this._text = text;
        _this._fontStyle = fontStyle;
        if (_this._fontStyle !== undefined && _this._fontStyle !== null) {
            _this._fontStyle.target = _this;
        }
        return _this;
    }

    _createClass(Text, [{
        key: 'text',
        get: function get() {
            return this._text;
        },
        set: function set(value) {
            this._text = value;
            this.notifyListeners(_changeListenerConstants2.default.OTHER);
        }
    }, {
        key: 'fontStyle',
        get: function get() {
            return this._fontStyle;
        },
        set: function set(value) {
            // Remove the bidirectional association with this object.
            if (this._fontStyle !== undefined && this._fontStyle !== null) {
                this._fontStyle.target = null;
            }
            this._fontStyle = value;
            if (this._fontStyle !== undefined && this._fontStyle !== null) {
                // Define the bidirectional association with this object.
                this._fontStyle.target = this;
            }
            this.notifyListeners(_changeListenerConstants2.default.STYLING);
        }
    }]);

    return Text;
}(_graphicalElement2.default);

exports.default = Text;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HorizontalGravity = function () {
    function HorizontalGravity() {
        _classCallCheck(this, HorizontalGravity);
    }

    // Left gravity.


    _createClass(HorizontalGravity, null, [{
        key: 'LEFT',
        get: function get() {
            return 0;
        }

        // Center gravity.

    }, {
        key: 'CENTER',
        get: function get() {
            return 1;
        }

        // Right gravity.

    }, {
        key: 'RIGHT',
        get: function get() {
            return 2;
        }
    }]);

    return HorizontalGravity;
}();

exports.default = HorizontalGravity;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VerticalGravity = function () {
    function VerticalGravity() {
        _classCallCheck(this, VerticalGravity);
    }

    _createClass(VerticalGravity, null, [{
        key: 'TOP',
        get: function get() {
            return 0;
        }
    }, {
        key: 'MIDDLE',
        get: function get() {
            return 1;
        }
    }, {
        key: 'BOTTOM',
        get: function get() {
            return 2;
        }
    }]);

    return VerticalGravity;
}();

exports.default = VerticalGravity;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResizePolicy = function () {
    function ResizePolicy() {
        _classCallCheck(this, ResizePolicy);
    }

    // The child width fills the available space touching the frame borders (if a frame exists. Otherwise, it fills all width).


    _createClass(ResizePolicy, null, [{
        key: 'MATCH_PARENT',
        get: function get() {
            return 2;
        }

        // The child width fills the available context box area - a rectangle inside the frame (minus general horizontal padding and child horizontal margin).

    }, {
        key: 'MATCH_CONTENT_AREA',
        get: function get() {
            return 1;
        }

        // The child width fills the minimum required space.

    }, {
        key: 'WRAP_CONTENT',
        get: function get() {
            return 0;
        }
    }]);

    return ResizePolicy;
}();

exports.default = ResizePolicy;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */
/* jshint eqnull:true */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _groupStyle = __webpack_require__(35);

var _groupStyle2 = _interopRequireDefault(_groupStyle);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _util = __webpack_require__(2);

var _verticalGroupStyleChangeListener = __webpack_require__(33);

var _verticalGroupStyleChangeListener2 = _interopRequireDefault(_verticalGroupStyleChangeListener);

var _verticalGroupFrameChangeListener = __webpack_require__(34);

var _verticalGroupFrameChangeListener2 = _interopRequireDefault(_verticalGroupFrameChangeListener);

var _verticalGravity = __webpack_require__(22);

var _verticalGravity2 = _interopRequireDefault(_verticalGravity);

var _verticalGroupChild = __webpack_require__(32);

var _verticalGroupChild2 = _interopRequireDefault(_verticalGroupChild);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _resizePolicy = __webpack_require__(23);

var _resizePolicy2 = _interopRequireDefault(_resizePolicy);

var _horizontalGravity = __webpack_require__(21);

var _horizontalGravity2 = _interopRequireDefault(_horizontalGravity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A vertical group is a linear layout in which children are vertically organized.
 *
 * Frame:
 * ------
 * It may have a frame, which works as an outer border for the group. A group doesn't have an aspect
 * ratio, but a frame has.
 *
 * Components:
 * -----------
 * A group has 3 components. The drawing bellow illustrates these components.
 * -------------------------------------------------
 * | Group and frame                               |
 * |     -------------------------------------     |
 * |     | Content area                      |     |
 * |     |    ---------------------------    |     |
 * |     |    | Minimum content area    |    |     |
 * |     |    |                         |    |     |
 * |     |    |                         |    |     |
 * |     |    ---------------------------    |     |
 * |     -------------------------------------     |
 * |                                               |
 * ------------------------------------------------
 *
 * The group and frame have the same dimension. When the dimension of one changes, the dimension of the other also
 * changes.
 * The content area is an automatically calculated rectangle inside the group in which content can be inserted. When
 * the group has no frame or it's a rectangle, the content area is the same as the group area. When the frame is a
 * circle, an ellipse, a diamond, or other non-rectangular area, the content area does not correspond to the group nor
 * the frame area.
 * The minimum content area is the minimum area required to display the group content.
 *
 * A child may extended horizontally in order to fill the content area using the resizing policy MATCH_CONTENT_AREA,
 * described below.
 * A child may even be extended to touch the group frame borders (outside the content area) using the resizing policy
 * MATCH_PARENT, also described below.
 * The minimum content area height may be resized to match the content area height with children weight, that determines
 * how the difference between minimum content area height and content area height must be distributed among children.
 * If no child has a weight bigger than zero (0), the minimum content area must be vertically aligned inside the
 * content area using the verticalGravity attribute.
 *
 * Children position:
 * ------------------
 * The children position is relative to the content area position inside the group - The group top-left position
 * is assumed to be (0, 0).
 *
 * Margins and paddings:
 * --------------------
 * A group has horizontal and vertical paddings applied to its content.
 * Also, each child may have an individual top, right, bottom, and left margin.
 * The group has a vertical space between children.
 *
 * Children width:
 * --------------
 * A child width is determined by a combination of its current width and its horizontal
 * resizing policy. There are three (3) resizing policies: WRAP_CONTENT, MATCH_PARENT, and
 * MATCH_CONTENT_AREA.
 * When the policy is WRAP_CONTENT, the current child width is used.
 * When the policy is MATCH_PARENT, the child width is adjusted so that the child limits
 * touch the frame borders (horizontally). The group horizontal padding and the child horizontal
 * margins are discard in this case.
 * When the policy is MATCH_CONTENT_AREA, the child width is adjusted to fill horizontally the
 * content area (a rectangle inside the frame) minus the group horizontal padding and the child
 * horizontal margins.
 */
var VerticalGroup = function (_GraphicalElement) {
    _inherits(VerticalGroup, _GraphicalElement);

    function VerticalGroup() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            x1 = _ref.x1,
            x = _ref.x,
            y1 = _ref.y1,
            y = _ref.y,
            x2 = _ref.x2,
            width = _ref.width,
            w = _ref.w,
            y2 = _ref.y2,
            height = _ref.height,
            h = _ref.h,
            style = _ref.style,
            _ref$groupStyle = _ref.groupStyle,
            groupStyle = _ref$groupStyle === undefined ? new _groupStyle2.default() : _ref$groupStyle,
            frame = _ref.frame,
            _ref$neverHideContent = _ref.neverHideContent,
            neverHideContent = _ref$neverHideContent === undefined ? true : _ref$neverHideContent,
            verticalGravity = _ref.verticalGravity,
            vGravity = _ref.vGravity;

        _classCallCheck(this, VerticalGroup);

        var _this = _possibleConstructorReturn(this, (VerticalGroup.__proto__ || Object.getPrototypeOf(VerticalGroup)).apply(this, arguments));

        _this._groupStyle = groupStyle;

        _this._children = [];
        _this._adjustGroupWhenFrameChanges = 0; // 0 means yes.
        _this._adjustGroupWhenChildrenChange = 0; // 0 means yes.
        _this._adjustChildrenWhenGroupChanges = 0; // 0 means yes.

        // May the group width and height be changed to a value that hides its content?
        // Even if content hidden is allowed, the group size will never be smaller than minWidth and minHeight.
        _this._neverHideContent = neverHideContent;

        // Children weight sum.
        // It may be updated when a child is added, removed, or when a child has its weight changed.
        _this._weightSum = 0;

        // Top-left coordinates of the content area relative to the group position.
        // It may change when the frame or the group dimension changes. Also, it may change if a new child is added
        // or its dimension is changed. Finally, it may change when the group style changes.
        _this._contentX1 = 0;
        _this._contentY1 = 0;

        // The content width and height.
        // It may change when the frame or the group dimension changes. Also, it may change if a new child is added
        // or its dimension is changed. Finally, it may change when the group style changes.
        _this._contentWidth = 0;
        _this._contentHeight = 0;

        // The minimum content width and height are the minimum value to fit the children content, including paddings
        // and margins.
        // It may change when a child is added, removed or its dimension changes.  Finally,
        // it may change when the group style changes.
        _this._minContentWidth = 0;
        _this._minContentHeight = 0;

        // The minimum group width and height not to hide the content.
        _this._minWidthNotToHideContent = 0;
        _this._minHeightNotToHideContent = 0;

        // A vertical gravity is used when no child has a weight bigger than zero and the minimum content area
        // is lower than the content area.
        _this._verticalGravity = (0, _util.getNonNullValue)(verticalGravity, vGravity, _verticalGravity2.default.MIDDLE);

        // Set the frame.
        if ((0, _util.isNotNull)(frame)) {
            _this.frame = frame;
        }
        return _this;
    }

    /**
     * Must the group be changed when one or more of its children change?
     * @return {boolean} true if yes. false otherwise.
     */


    _createClass(VerticalGroup, [{
        key: "adjustContentAreaPositionAndDimension",


        /**
         * Adjust the content area position and dimension.
         */
        value: function adjustContentAreaPositionAndDimension() {
            if ((0, _util.isNull)(this.frame)) {
                if (0 !== this._contentX1 || this.width !== this._contentWidth) {
                    this._contentX1 = 0;
                    this._contentWidth = this.width;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenHorizontally();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
                if (0 !== this._contentY1 || this.height !== this._contentHeight) {
                    this._contentY1 = 0;
                    this._contentHeight = this.height;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenVertically();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
            } else {
                var contentArea = this.frame.contentBox();
                if (contentArea.width === this.contentWidth && contentArea.height === this.contentHeight) {
                    if (contentArea.x1 !== this.contentX1 || contentArea.y1 !== this.contentY1) {
                        // If only the content area position has changed, adjust only the children position.
                        var deltaX = contentArea.x1 - this.contentX1;
                        var deltaY = contentArea.y1 - this.contentY1;
                        this.disableGroupAdjustmentWhenChildrenChange();
                        this.adjustChildrenPositionBy({ x: deltaX, y: deltaY });
                        this.enableGroupAdjustmentWhenChildrenChange();

                        this._contentX1 = contentArea.x1;
                        this._contentY1 = contentArea.y1;
                    }
                } else {
                    this.disableGroupAdjustmentWhenChildrenChange();
                    if (contentArea.x1 !== this.contentX1 || contentArea.width !== this.contentWidth) {
                        this._contentX1 = contentArea.x1;
                        this._contentWidth = contentArea.width;
                        this.adjustChildrenHorizontally();
                    }
                    if (contentArea.y1 !== this.contentY1 || contentArea.height !== this.contentHeight) {
                        this._contentY1 = contentArea.y1;
                        this._contentHeight = contentArea.height;
                        this.adjustChildrenVertically();
                    }
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
            }
        }

        /**
         * Set the weight of the child at the specified position.
         * @param i The child position.
         * @param weight The weight.
         * @param w The weight.
         */

    }, {
        key: "setChildWeightAt",
        value: function setChildWeightAt() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                i = _ref2.i,
                weight = _ref2.weight,
                w = _ref2.w;

            this.checkChildArrayIndexValidity(i);
            if ((0, _util.checkRedundantArguments)(weight, w)) {
                (0, _util.error)("Both weight and w were informed. Id: " + this.id + ".");
            }
            weight = (0, _util.getNonNullValue)(weight, w);
            if (weight === this.childWeightAt(i)) {
                (0, _util.warning)("The new weight is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            if ((0, _util.isNotANumber)(weight) || weight < 0) {
                (0, _util.error)("The weight must be a positive real number greater than or equal zero (0). Id: " + this.id + ".");
            }
            this.children[i].weight = weight;
            this.adjustChildrenVertically();
        }

        /**
         * Adjust all children position summing to their position the specified x and y value.
         * @param x {number} The value to add to current x position.
         * @param y {number} The value to add to current y position.
         */

    }, {
        key: "adjustChildrenPositionBy",
        value: function adjustChildrenPositionBy() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x = _ref3.x,
                y = _ref3.y;

            if ((0, _util.isNotANumber)(x) || (0, _util.isNotANumber)(y)) {
                (0, _util.error)("The x or y value must be an integer number. Nothing to change. Id: " + this.id + ".");
            }
            for (var i = 0; i < this.countChildren(); i++) {
                this.childAt(i).moveBy({ x: x, y: y });
            }
        }
    }, {
        key: "allowContentHidden",
        value: function allowContentHidden() {
            return !this.neverHideContent;
        }

        /**
         * This method adds a new child to the group with the specified arguments.
         * @param child {GraphicalElement} The child.
         * @param horResizingPolicy The child horizontal resizing policy (one of the constants in this class).
         * @param hResizingPolicy The child horizontal resizing policy (one of the constants in this class).
         * @param horGravity The child horizontal gravity (one of the constants in this class).
         * @param hGravity The child horizontal gravity (one of the constants in this class).
         * @param weight {number} The child vertical weight, that defines how the child will fill the remaining space.
         * @param leftMargin {number} The child left margin.
         * @param lMargin {number} The child left margin.
         * @param rightMargin {number} The child right margin.
         * @param rMargin {number} The child right margin.
         * @param topMargin {number} The child top margin.
         * @param tMargin {number} The child top margin.
         * @param bottomMargin {number} The child bottom margin.
         * @param bMargin {number} The child bottom margin.
         * @param vOverlap {number} A final adjustment in the vertical position of a child after its position has been
         *                          calculated.
         */

    }, {
        key: "addChild",
        value: function addChild() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                element = _ref4.element,
                _ref4$horResizingPoli = _ref4.horResizingPolicy,
                horResizingPolicy = _ref4$horResizingPoli === undefined ? _resizePolicy2.default.WRAP_CONTENT : _ref4$horResizingPoli,
                hResizingPolicy = _ref4.hResizingPolicy,
                _ref4$horGravity = _ref4.horGravity,
                horGravity = _ref4$horGravity === undefined ? _horizontalGravity2.default.CENTER : _ref4$horGravity,
                hGravity = _ref4.hGravity,
                _ref4$weight = _ref4.weight,
                weight = _ref4$weight === undefined ? 0 : _ref4$weight,
                leftMargin = _ref4.leftMargin,
                lMargin = _ref4.lMargin,
                rightMargin = _ref4.rightMargin,
                rMargin = _ref4.rMargin,
                topMargin = _ref4.topMargin,
                tMargin = _ref4.tMargin,
                bottomMargin = _ref4.bottomMargin,
                bMargin = _ref4.bMargin,
                _ref4$vOverlap = _ref4.vOverlap,
                vOverlap = _ref4$vOverlap === undefined ? 0 : _ref4$vOverlap;

            // **************************************
            // * VALIDATE ARGUMENTS.
            // **************************************
            if ((0, _util.isNull)(element)) {
                (0, _util.error)("The group child cannot be null. Id: " + this.id + ".");
            }
            if ((0, _util.isNotANumber)(weight) || weight < 0) {
                (0, _util.error)("The weight must be a positive integer. Id: " + this.id + ".");
            }
            // Check whether there are redundant arguments.
            if ((0, _util.checkRedundantArguments)(horResizingPolicy, hResizingPolicy)) {
                (0, _util.error)("Warning: Both horResizingPolicy and hResizingPolicy were informed. Id: " + this.id + ".");
            }
            if ((0, _util.checkRedundantArguments)(horGravity, hGravity)) {
                (0, _util.error)("Warning: Both horGravity and hGravity were informed. Id: " + this.id + ".");
            }
            if ((0, _util.checkRedundantArguments)(leftMargin, lMargin)) {
                (0, _util.error)("Warning: Both leftMargin and lMargin were informed. Id: " + this.id + ".");
            }
            if ((0, _util.checkRedundantArguments)(rightMargin, rMargin)) {
                (0, _util.error)("Warning: Both rightMargin and rMargin were informed. Id: " + this.id + ".");
            }
            if ((0, _util.checkRedundantArguments)(topMargin, tMargin)) {
                (0, _util.error)("Warning: Both topMargin and tMargin were informed. Id: " + this.id + ".");
            }
            if ((0, _util.checkRedundantArguments)(bottomMargin, bMargin)) {
                (0, _util.error)("Warning: Both bottomMargin and bMargin were informed. Id: " + this.id + ".");
            }
            // **************************************

            var child = new (Function.prototype.bind.apply(_verticalGroupChild2.default, [null].concat(Array.prototype.slice.call(arguments))))();

            // Update some group variables.
            var oldWeightSum = this.weightSum;
            this._weightSum += weight;

            this._minContentHeight += child.totalHeight;
            if (this.countChildren() > 0) {
                // Add the space between children if there is at least one child in the group.
                this._minContentHeight += this.spaceBetweenChildren;
            }
            this._minContentWidth = Math.max(child.totalWidth + this.horPadding, this._minContentWidth);

            var hasContentBoxChanged = false;
            if (this._minContentHeight > this._contentHeight || this._minContentWidth > this._contentWidth) {
                hasContentBoxChanged = true;
            }

            var lastChild = this._children[this._children.length - 1];
            this.children.push(child);

            // If the content box has not changed, define the new child position relative to the other children.
            element.disableChangeNotifications();
            this.notifyListeners(_changeListenerConstants2.default.OTHER);
            element.relativePosition = true;
            element.relativeX1 = this.x1;
            element.relativeY1 = this.y1;
            //element.moveTo({x: 0, y: 0});
            if (hasContentBoxChanged) {
                this.readjustGroup();
            } else {
                // Adjust all children vertical position and height.
                this.adjustChildrenVertically();
                this.adjustChildHorizontally(this.countChildren() - 1);
            }
            element.enableChangeNotifications();
            element.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
        }

        /**
         * Adjust the children width based on their resizing policy, gravity, and the content area x1 and width.
         */

    }, {
        key: "adjustChildrenHorizontally",
        value: function adjustChildrenHorizontally() {
            this.adjustChildHorizontally();
        }

        /**
         * Adjust the ith-child x1 and width based on its resizing policy, gravity, and the content area x1 and width.
         * @param [i] {number} The index i.
         */

    }, {
        key: "adjustChildHorizontally",
        value: function adjustChildHorizontally(i) {
            // If i is not specified, all children will be adjusted.
            if ((0, _util.isNull)(i)) {
                for (var j = 0; j < this.countChildren(); j++) {
                    this.adjustChildHorizontally(j);
                }
                return;
            }
            this.checkChildArrayIndexValidity(i);

            var childHorResizePolicy = this.childHorResizePolicyAt(i);
            var childHorGravity = this.childHorGravityAt(i);
            var child = this.childAt(i);

            if (childHorResizePolicy === _resizePolicy2.default.WRAP_CONTENT) {
                if (childHorGravity === _horizontalGravity2.default.LEFT) {
                    child.moveTo({ x: this.contentX1 + this.leftPadding + this.childLeftMarginAt(i) });
                } else if (childHorGravity === _horizontalGravity2.default.RIGHT) {
                    child.moveTo({ x: this.contentX1 + this.contentWidth - this.rightPadding - this.childRightMarginAt(i) - child.width });
                } else if (childHorGravity === _horizontalGravity2.default.CENTER) {
                    child.moveTo({ x: (this.contentX1 + this.contentWidth - child.width) / 2 });
                } else {
                    (0, _util.error)("Unknown horizontal gravity: " + childHorGravity + ". Id: " + this.id + ".");
                }
            } else if (childHorResizePolicy === _resizePolicy2.default.MATCH_CONTENT_AREA) {
                child.resizeTo({ width: this.contentWidth - this.horPadding - child.horMargin });
                child.moveTo({ x: this.contentX1 + this.leftPadding + this.childLeftMarginAt(i) });
            } else if (childHorResizePolicy === _resizePolicy2.default.MATCH_PARENT) {
                var boundaryX1 = Math.max(this.boundaryX1For(child.y1), this.boundaryX1For(child.y2));
                var boundaryX2 = Math.min(this.boundaryX2For(child.y1), this.boundaryX2For(child.y2));
                if ((0, _util.isNotNull)(this.frame)) {
                    boundaryX1 = Math.max(this.frame.boundaryX1For(child.y1), this.frame.boundaryX1For(child.y2));
                    boundaryX2 = Math.min(this.frame.boundaryX2For(child.y1), this.frame.boundaryX2For(child.y2));
                }

                child.resizeTo({ width: boundaryX2 - boundaryX1 });
                child.moveTo({ x: boundaryX1 });
            } else {
                (0, _util.error)("Unknown horizontal resize policy: " + childHorResizePolicy + ". Id: " + this.id + ".");
            }
        }

        /**
         * Readjust the group dimension (and children if necessary) based on its minimum content width and/or height that has changed.
         */

    }, {
        key: "readjustGroup",
        value: function readjustGroup() {
            // Calculate the new required group size, content box x1 and y1 based on
            // the minContentWidth and the minContentHeight.
            if ((0, _util.isNull)(this.frame)) {
                this.width = this.minContentWidth;
                this.height = this.minContentHeight;
            } else {
                this._contentWidth = Math.max(this.minContentWidth, this.contentWidth);
                this._contentHeight = Math.max(this.minContentHeight, this.contentHeight);
                this.disableGroupAdjustmentWhenFrameChanges();
                this.frame.disableChangeNotifications();
                var contentBoundingBox = new _boundingBox2.default({
                    x: this.contentX1,
                    y: this.contentY1,
                    width: this.contentWidth,
                    height: this.contentHeight
                });
                var requiredWidth = this.frame.widthToFit(contentBoundingBox);
                var requiredHeight = this.frame.heightToFit(contentBoundingBox);
                if (true === this.frame.preserveAspectRatio) {
                    this.frame.width = requiredWidth;
                    if (this.frame.height < requiredHeight) {
                        this.frame.height = requiredHeight;
                    }
                    _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "width", this.frame.width, this);
                    _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "height", this.frame.height, this);

                    // Calculate the frame content area position and dimension.
                    this.adjustContentAreaPositionAndDimension();
                } else {
                    if (requiredWidth !== this.width) {
                        this.width = requiredWidth;
                    } else {
                        this.adjustChildrenHorizontally();
                    }
                    if (requiredHeight !== this.height) {
                        this.height = requiredHeight;
                    } else {
                        this.adjustChildrenVertically();
                    }
                }

                this.notifyListeners(_changeListenerConstants2.default.DIMENSION);

                this.frame.enableChangeNotifications();
                this.frame.notifyListeners(_changeListenerConstants2.default.DIMENSION);
                this.enableGroupAdjustmentWhenFrameChanges();
            }
        }

        /**
         * Adjust children y1 coordinate and height.
         */

    }, {
        key: "adjustChildrenVertically",
        value: function adjustChildrenVertically() {
            // Calculate the height left to distribute among children.
            var verticalSpaceLeft = this.contentHeight - this.minContentHeight;
            var tempY1 = this.contentY1 + this.topPadding;
            if (0 === this.weightSum && verticalSpaceLeft > 0) {
                if (_verticalGravity2.default.MIDDLE === this.verticalGravity) {
                    tempY1 = this.contentY1 + verticalSpaceLeft / 2;
                } else if (_verticalGravity2.default.BOTTOM === this.verticalGravity) {
                    tempY1 = this.contentY1 + this.contentHeight - this.minContentHeight;
                }
            }

            for (var i = 0; i < this.countChildren(); i++) {
                var element = this.childAt(i);
                tempY1 += this.childTopMarginAt(i);
                element.moveTo({ y: tempY1 });
                if (this.childWeightAt(i) > 0) {
                    var deltaHeight = this.childWeightAt(i) / this.weightSum * verticalSpaceLeft;
                    element.resizeBy({ height: deltaHeight });
                }
                tempY1 += element.height + this.childBottomMarginAt(i) + this.spaceBetweenChildren;
            }
        }

        /**
         * Return the number of children.
         * @returns {number} The number of children.
         */

    }, {
        key: "countChildren",
        value: function countChildren() {
            return this._children.length;
        }

        /**
         * Disable group adjustment when the frame changes.
         */

    }, {
        key: "disableGroupAdjustmentWhenFrameChanges",
        value: function disableGroupAdjustmentWhenFrameChanges() {
            this._adjustGroupWhenFrameChanges++;
        }

        /**
         * Disable frame adjustment when the group changes.
         */

    }, {
        key: "disableFrameAdjustmentWhenGroupChanges",
        value: function disableFrameAdjustmentWhenGroupChanges() {
            this._adjustGroupWhenFrameChanges++;
        }

        /**
         * Enable frame adjustment when the group changes.
         */

    }, {
        key: "enableFrameAdjustmentWhenGroupChanges",
        value: function enableFrameAdjustmentWhenGroupChanges() {
            this._adjustGroupWhenFrameChanges--;
        }

        /**
         * Disable group adjustment when the frame changes.
         */

    }, {
        key: "enableGroupAdjustmentWhenFrameChanges",
        value: function enableGroupAdjustmentWhenFrameChanges() {
            this._adjustGroupWhenFrameChanges--;
        }

        /**
         * Disable group adjustment when any children change.
         */

    }, {
        key: "disableGroupAdjustmentWhenChildrenChange",
        value: function disableGroupAdjustmentWhenChildrenChange() {
            this._adjustGroupWhenChildrenChange++;
        }

        /**
         * Enable group adjustment when any children change.
         */

    }, {
        key: "enableGroupAdjustmentWhenChildrenChange",
        value: function enableGroupAdjustmentWhenChildrenChange() {
            this._adjustGroupWhenChildrenChange--;
        }

        /**
         * Disable children adjustment when the group changes.
         */

    }, {
        key: "disableChildrenAdjustmentWhenGroupChanges",
        value: function disableChildrenAdjustmentWhenGroupChanges() {
            this._adjustChildrenWhenGroupChanges++;
        }

        /**
         * Enable children adjustment when the group changes.
         */

    }, {
        key: "enableChildrenAdjustmentWhenGroupChanges",
        value: function enableChildrenAdjustmentWhenGroupChanges() {
            this._adjustChildrenWhenGroupChanges--;
        }

        /**
         * Check whether the specified position corresponds to a valid position in the children array.
         * @param i {number} The position that must be checked.
         */

    }, {
        key: "checkChildArrayIndexValidity",
        value: function checkChildArrayIndexValidity(i) {
            if (i >= this.countChildren()) {
                (0, _util.error)("Invalid index. Index: " + i + ".");
            }
        }

        /**
         * Return the ith-child element.
         * @param i {number} The position i.
         * @return {number} The index i.
         */

    }, {
        key: "childAt",
        value: function childAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].element;
        }

        /**
         * Return the ith-child weight.
         * @param i {number} The position i.
         * @return {number} The ith-child weight.
         */

    }, {
        key: "childWeightAt",
        value: function childWeightAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].weight;
        }

        /**
         * Return the ith-child horizontal margin (left + right margin). It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child horizontal margin (left + right margin). It is defined in the group style.
         */

    }, {
        key: "childHorMarginAt",
        value: function childHorMarginAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].horMargin;
        }

        /**
         * Return the ith-child horizontal resizing policy. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child horizontal resizing policy. It is defined in the group style.
         */

    }, {
        key: "childHorResizePolicyAt",
        value: function childHorResizePolicyAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].horResizingPolicy;
        }

        /**
         * Return the ith-child horizontal gravity. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child horizontal gravity. It is defined in the group style.
         */

    }, {
        key: "childHorGravityAt",
        value: function childHorGravityAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].horGravity;
        }

        /**
         * Return the ith-child top margin. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child top margin. It is defined in the group style.
         */

    }, {
        key: "childTopMarginAt",
        value: function childTopMarginAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].topMargin;
        }

        /**
         * Return the ith-child bottom margin. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child bottom margin. It is defined in the group style.
         */

    }, {
        key: "childBottomMarginAt",
        value: function childBottomMarginAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].bottomMargin;
        }

        /**
         * Return the ith-child left margin. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child left margin. It is defined in the group style.
         */

    }, {
        key: "childLeftMarginAt",
        value: function childLeftMarginAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].leftMargin;
        }

        /**
         * Return the ith-child right margin. It is defined in the group style.
         * @param i {number} The index i.
         * @return {number} The ith-child right margin. It is defined in the group style.
         */

    }, {
        key: "childRightMarginAt",
        value: function childRightMarginAt(i) {
            this.checkChildArrayIndexValidity(i);
            return this._children[i].rightMargin;
        }

        /**
         * Update the group when the frame changes.
         */

    }, {
        key: "frameChanged",
        value: function frameChanged() {
            if (true === this.adjustGroupWhenFrameChanges) {
                this.disableGroupAdjustmentWhenFrameChanges();
                this.frame.disableChangeNotifications();
                // If someone has changed the relative value of the frame, change it again to
                // the correct value.
                if (this.x1 !== this.frame.relativeX1) {
                    this.frame.relativeX1 = this.x1;
                }
                if (this.y1 !== this.frame.relativeY1) {
                    this.frame.relativeY1 = this.y1;
                }
                // If the frame position is different of zero (0), change it to zero (0).
                if (0 !== this.frame.x1) {
                    this.frame.moveTo({ x: 0 });
                }
                if (0 !== this.frame.y1) {
                    this.frame.moveTo({ y: 0 });
                }
                // If the frame dimension has changed, adjust the group dimension.
                if (this.frame.width !== this.width) {
                    this.width = this.frame.width;
                }
                if (this.frame.height !== this.height) {
                    this.height = this.frame.height;
                }
                this.frame.enableChangeNotifications();
                this.adjustContentAreaPositionAndDimension();
                this.enableGroupAdjustmentWhenFrameChanges();
            }
        }

        /**
         * Update the group when the group style changes.
         */

    }, {
        key: "groupStyleChanged",
        value: function groupStyleChanged() {
            this.disableGroupAdjustmentWhenChildrenChange();
            this.adjustChildrenVertically();
            this.adjustChildrenHorizontally();
            this.enableGroupAdjustmentWhenChildrenChange();
        }

        /**
         * Update the group when any child changes.
         *
         * When a child position changes, the group does not change, since the child may only be moving to another place.
         * When a child width and/or height changes, the group must be properly adjusted.
         */

    }, {
        key: "childrenChanged",
        value: function childrenChanged() {
            if (true === this.adjustGroupWhenChildrenChange) {
                this.adjustChildrenVertically();
                this.adjustChildrenHorizontally();
            }
        }

        /**
         * Return the max child width.
         */

    }, {
        key: "maxChildWidth",
        value: function maxChildWidth() {
            var maxWidth = 0;
            for (var i = 0; i < this.countChildren(); i++) {
                if (this.childAt(i).totalWidth > maxWidth) {
                    maxWidth = this.childAt(i).totalWidth;
                }
            }
            return maxWidth;
        }

        /**
         * Remove the specified child.
         * @param child {VerticalGroupChild} The child that must be removed.
         */

    }, {
        key: "removeChild",
        value: function removeChild(child) {
            var index = this.children.indexOf(child);
            if (index >= 0) {
                child.element.relativePosition = false;
                child.element.relativeX1 = null;
                child.element.relativeY1 = null;
                this.children.splice(index, 1);
                this._contentHeight -= child.totalHeight;
                this._contentWidth = this.maxChildWidth + this.horPadding;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenHorizontally();
                this.adjustChildrenVertically();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
        }
    }, {
        key: "adjustGroupWhenChildrenChange",
        get: function get() {
            return 0 === this._adjustGroupWhenChildrenChange;
        }

        /**
         * Must the children be changed when the group changes?
         * @return {boolean} true if yes. false otherwise.
         */

    }, {
        key: "adjustChildrenWhenGroupChanges",
        get: function get() {
            return 0 === this._adjustChildrenWhenGroupChanges;
        }

        /**
         * Must the group be changed when its frame changes?
         * @return {boolean} true if yes. false otherwise.
         */

    }, {
        key: "adjustGroupWhenFrameChanges",
        get: function get() {
            return 0 === this._adjustGroupWhenFrameChanges;
        }

        /**
         * Must the group preserve its aspect ratio?
         * @return {boolean} true if yes. false otherwise.
         */

    }, {
        key: "preserveAspectRatio",
        get: function get() {
            if ((0, _util.isNull)(this.frame)) {
                return false; // A group without frame never preserves its aspect ratio.
            } else {
                return this.frame.preserveAspectRatio;
            }
        }

        /**
         * Set whether the group must preserve its aspect ratio.
         * @param value {boolean} true if yes. false otherwise.
         */
        ,
        set: function set(value) {
            if ((0, _util.isNotABoolean)(value)) {
                (0, _util.error)("The value must be a boolean. Id: " + this.id + ".");
            }
            if ((0, _util.isNull)(this.frame)) {
                if (true === value) {
                    (0, _util.error)("The aspect ratio of a group can be maintained only if it has a frame.");
                }
            } else {
                this.frame.preserveAspectRatio = value;
            }
        }

        /**
         * Return the group minimum content area vertical gravity.
         * @return {number} The group minimum content area vertical gravity. A vertical gravity is used when no child has a weight bigger than
         *                  zero and the minimum content area is lower than the content area.
         */

    }, {
        key: "verticalGravity",
        get: function get() {
            return this._verticalGravity;
        }

        /**
         * Set the group minimum content area vertical gravity.
         * @param value {number} The new group minimum content area vertical gravity. A vertical gravity is used when no child has a weight bigger than
         *                  zero and the minimum content area is lower than the content area.
         */
        ,
        set: function set(value) {
            if (value === this.verticalGravity) {
                (0, _util.warning)("The new vertical gravity is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            if (value !== _verticalGravity2.default.TOP && value !== _verticalGravity2.default.MIDDLE && value !== _verticalGravity2.default.BOTTOM) {
                (0, _util.error)("The value must be a constant inside VerticalGravity. Id: " + this.id + ".");
            }
            this._verticalGravity = value;
            this.disableGroupAdjustmentWhenChildrenChange();
            this.adjustChildrenVertically();
            this.enableGroupAdjustmentWhenChildrenChange();
        }

        /**
         * Return the group min width required not to hide the content.
         * @return {number} The group min width required not to hide the content.
         */

    }, {
        key: "minWidthNotToHideContent",
        get: function get() {
            return this._minWidthNotToHideContent;
        }

        /**
         * Return the group min height required not to hide the content.
         * @return {number} The group min height required not to hide the content.
         */

    }, {
        key: "minHeightNotToHideContent",
        get: function get() {
            return this._minHeightNotToHideContent;
        }

        /**
         * Must the group content always be visible?
         * @return {boolean} true if yes. false otherwise.
         */

    }, {
        key: "neverHideContent",
        get: function get() {
            return this._neverHideContent;
        }

        /**
         * Must the group content always be visible?
         * @param value {boolean} true if yes. false otherwise.
         */
        ,
        set: function set(value) {
            if (value === this.neverHideContent) {
                (0, _util.warning)("The new 'never hide content' is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            if ((0, _util.isNotABoolean)(value)) {
                (0, _util.error)("The value must be a boolean. Id: " + this.id + ".");
            }
            // If the value changed from false to true, check whether the content is already visible.
            if (value === true && this.neverHideContent === false) {
                if (this.width < this.minWidthNotToHideContent || this.height < this.minHeightNotToHideContent) {
                    this.disableChangeNotifications();
                    this.resizeTo({ width: this.minWidthNotToHideContent, height: this.minHeightNotToHideContent });
                    this.enableChangeNotifications();
                    if ((0, _util.isNotNull)(this.frame)) {
                        this.frame.disableChangeNotifications();
                        this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
                        this.frame.enableChangeNotifications();
                    }
                }
            }
            this._neverHideContent = value;
        }

        /**
         * May the group content be hidden?
         * @return {boolean} true if yes. false otherwise.
         */

    }, {
        key: "allowContentHiding",
        get: function get() {
            return !this._neverHideContent;
        }

        /**
         * Return the children weight sum.
         * @return {number} The children weight sum.
         */

    }, {
        key: "weightSum",
        get: function get() {
            return this._weightSum;
        }

        /**
         * Return the minimum content area width.
         * @return {number} The minimum content area width.
         */

    }, {
        key: "minContentWidth",
        get: function get() {
            return this._minContentWidth;
        }

        /**
         * Return the minimum content area height.
         * @return {number} The minimum content area height.
         */

    }, {
        key: "minContentHeight",
        get: function get() {
            return this._minContentHeight;
        }

        /**
         * Return the content area width.
         * @return {number} The content area width.
         */

    }, {
        key: "contentWidth",
        get: function get() {
            return this._contentWidth;
        }

        /**
         * Return the content area height.
         * @return {number} The content area height.
         */

    }, {
        key: "contentHeight",
        get: function get() {
            return this._contentHeight;
        }

        /**
         * Return the group frame.
         * @return {GraphicalElement} The group frame.
         */

    }, {
        key: "frame",
        get: function get() {
            return this._frame;
        }

        /**
         * Set the group frame.
         * @param value {GraphicalElement} The group frame.
         */
        ,
        set: function set(value) {
            if (value === this.frame) {
                (0, _util.warning)("The new frame is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            // When a new frame is set, first, it's necessary to remove the last frame from the graphical representation.
            // Then, it is necessary to change the frame position to 0,0 and also to change the frame width and height
            // it order to accommodate the group. Consequently, the group width and height may change as well.

            if ((0, _util.isNotNull)(this.frame)) {
                this.frame.removeChangeListenerByName(_verticalGroupFrameChangeListener2.default);
                this.frame.relativePosition = false;
                this.frame.relativeX1 = null;
                this.frame.relativeY1 = null;
                this.frame.remove();
            }

            this._frame = value;

            if ((0, _util.isNotNull)(this.frame)) {
                this.disableGroupAdjustmentWhenFrameChanges();
                this.frame.disableChangeNotifications();
                this.frame.relativePosition = true;
                this.frame.relativeX1 = this.x1;
                this.frame.relativeY1 = this.y1;
                this.frame.moveTo({ x: 0, y: 0 });
                this.frame.resizeTo({ width: this.width, height: this.height });

                // Calculate the frame content area position and dimension.
                this.adjustContentAreaPositionAndDimension();

                this.frame.enableChangeNotifications();
                this.frame.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);
                this.enableGroupAdjustmentWhenFrameChanges();
                this.notifyListeners(_changeListenerConstants2.default.OTHER);
            } else {
                this.adjustContentAreaPositionAndDimension();
            }
        }

        /**
         * Return the children.
         * @return {Array} The children array.
         */

    }, {
        key: "children",
        get: function get() {
            return this._children;
        }

        /**
         * Return the group style.
         * @return {GroupStyle} The group style.
         */

    }, {
        key: "groupStyle",
        get: function get() {
            return this._groupStyle;
        }

        /**
         * Set the group style.
         * @param value {GroupStyle} The group style.
         */
        ,
        set: function set(value) {
            if (value === this.groupStyle) {
                (0, _util.warning)("The new group style is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }

            // Remove the listener from the current group style.
            if ((0, _util.isNotNull)(this.groupStyle)) {
                this.groupStyle.removeChangeListenerByType(_verticalGroupStyleChangeListener2.default);
            }
            if ((0, _util.isNull)(value)) {
                // If any vertical padding, the space between children or the vertical alignment has changed.
                if (0 !== this.topPadding || 0 !== this.bottomPadding || _groupStyle2.default.defaultVerGravity !== this.verGravity || 0 !== this.spaceBetweenChildren) {
                    this._groupStyle = null;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenVertically();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
                // If any horizontal padding has changed.
                if (0 !== this.groupStyle.leftPadding || 0 !== this.groupStyle.rightPadding) {
                    // If any horizontal padding has changed.
                    this._groupStyle = null;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenHorizontally();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }

                this._groupStyle = null;
            } else {
                // If any vertical padding, the space between children or the vertical alignment has changed.
                if (value.topPadding !== this.topPadding || value.bottomPadding !== this.bottomPadding || value.verGravity !== this.verGravity || value.spaceBetweenChildren !== this.spaceBetweenChildren) {
                    this._groupStyle = value;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenVertically();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
                if (value.leftPadding !== this.leftPadding || value.rightPadding !== this.rightPadding) {
                    // If any horizontal padding has changed.
                    this._groupStyle = value;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenHorizontally();
                    this.enableGroupAdjustmentWhenChildrenChange();
                }
                this._groupStyle = value;

                // The group must be informed when one of its styling attributes change.
                value.addChangeListener(new _verticalGroupStyleChangeListener2.default(this));
            }
        }

        /**
         * Return the group left padding.
         * @return {number} The group left padding.
         */

    }, {
        key: "leftPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.leftPadding;
        }

        /**
         * Return the group right padding.
         * @return {number} The group right padding.
         */

    }, {
        key: "rightPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.rightPadding;
        }

        /**
         * Return the group horizontal padding (left + right).
         * @return {number} The group right horizontal padding (left+ right).
         */

    }, {
        key: "horPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.leftPadding + this.groupStyle.rightPadding;
        }

        /**
         * Return the group vertical padding (top + bottom).
         * @return {number} The group right vertical padding (top + bottom).
         */

    }, {
        key: "verPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.topPadding + this.groupStyle.bottomPadding;
        }

        /**
         * Return the group top padding.
         * @return {number} The group top padding.
         */

    }, {
        key: "topPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.topPadding;
        }

        /**
         * Return the group bottom padding.
         * @return {number} The group bottom padding.
         */

    }, {
        key: "bottomPadding",
        get: function get() {
            return (0, _util.isNull)(this.groupStyle) ? 0 : this.groupStyle.bottomPadding;
        }

        /**
         * Return the group width.
         * @return {number} The group width.
         */

    }, {
        key: "width",
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "width", this);
        }

        /**
         * Set the group width.
         * When the group width changes, the content area position inside the frame (if one is defined) and its
         * dimension may change. When it happens, all children position and dimension may change.
         * The group width is exactly the same as the frame width (if one is defined). If there is a frame and it
         * preserves its aspect ratio, the group height may change as well.
         * @param {number} value The new group width.
         */
        ,
        set: function set(value) {
            if (value === this.width) {
                (0, _util.warning)("The new width is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            if ((0, _util.isNotANumber)(value)) {
                (0, _util.error)("The new width must be an integer number. Nothing to change. Id: " + this.id + ".");
            }
            if (value < this.minWidth) {
                (0, _util.warning)("The new width must be greater than minWidth. Nothing to change. Id: " + this.id + ".");
                return;
            }
            // Check whether the new width has a valid value.
            // If the content can be hidden, any value greater than zero (0) is valid. Otherwise, some verification
            // is required.
            if (this.neverHideContent) {
                if ((0, _util.isNull)(this.frame)) {
                    // If the group has no frame, the minimum width is the minimum content width.
                    if (value < this.minContentWidth) {
                        (0, _util.warning)("The content cannot be hidden. The new width is smaller than the minimum content width. Id: " + this.id + ".");
                        return;
                    }
                } else {
                    // If the group has a frame, check whether the new width allows the frame to fit the content
                    // inside its content area.

                    // Calculate the frame content area for the new width.
                    var ratio = 1.0;
                    if (true === this.frame.preserveAspectRatio) {
                        ratio = value / this.frame.width;
                        var newFrameHeight = ratio * this.frame.height;
                        // What is the content area region for the specified width/height?
                        var contentAreaBoundingBox = this.frame.contentBox({ width: value, height: newFrameHeight });
                        if (contentAreaBoundingBox.width < this.minContentWidth || contentAreaBoundingBox.height < this.minContentHeight) {
                            (0, _util.warning)("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                            return;
                        }
                    } else {
                        var _contentAreaBoundingBox = this.frame.contentBox({ width: value, height: this.frame.height });
                        if (_contentAreaBoundingBox.width < this.minContentWidth) {
                            (0, _util.warning)("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                            return;
                        }
                    }
                }
            }

            // Notify listeners only after changing everything.
            this.disableChangeNotifications();

            if ((0, _util.isNull)(this.frame)) {
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "width", value, this);
                this._contentWidth = value;
            } else {
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "width", value, this);
                this.disableGroupAdjustmentWhenFrameChanges();
                this.frame.width = value;
                this.enableGroupAdjustmentWhenFrameChanges();
            }

            this.adjustContentAreaPositionAndDimension();
            this.adjustChildrenHorizontally();

            this.enableChangeNotifications();
            if ((0, _util.isNull)(this.frame)) {
                this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
            } else {
                this.frame.disableChangeNotifications();
                this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
                this.frame.enableChangeNotifications();
            }
        }

        /**
         * Return the group height.
         * @return {number} The group height.
         */

    }, {
        key: "height",
        get: function get() {
            return _get(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "height", this);
        }

        /**
         * Set the group height.
         * When the group height changes, the content area position inside the frame (if one is defined) and its
         * dimension may change. When it happens, all children position and dimension may change.
         * The group height is exactly the same as the frame height (if one is defined). If there is a frame and it
         * preserves its aspect ratio, the group width may change as well.
         * @param {number} value The new group height.
         */
        ,
        set: function set(value) {
            if (value === this.height) {
                (0, _util.warning)("The new height is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
                return;
            }
            if ((0, _util.isNotANumber)(value)) {
                (0, _util.error)("The new height must be an integer number. Nothing to change. Id: " + this.id + ".");
            }
            if (value < this.minHeight) {
                (0, _util.warning)("The new height must be greater than minHeight. Nothing to change. Id: " + this.id + ".");
                return;
            }
            // Check whether the new height has a valid value.
            // If the content can be hidden, any value greater than zero (0) is valid. Otherwise, some verification
            // is required.
            if (this.neverHideContent) {
                if ((0, _util.isNull)(this.frame)) {
                    // If the group has no frame, the minimum width is the minimum content width.
                    if (value < this.minContentHeight) {
                        (0, _util.warning)("The content cannot be hidden. The new height is smaller than the minimum content height. Id: " + this.id + ".");
                        return;
                    }
                } else {
                    // If the group has a frame, check whether the new width allows the frame to fit the content
                    // inside its content area.

                    // Calculate the frame content area for the new height.
                    var ratio = 1.0;
                    if (true === this.frame.preserveAspectRatio) {
                        ratio = value / this.frame.height;

                        var newWidth = ratio * this.frame.width;

                        // What is the content area region for the specified width/height?
                        var contentAreaBoundingBox = this.frame.contentBox({ width: newWidth, height: value });
                        if (contentAreaBoundingBox.width < this.minContentWidth || contentAreaBoundingBox.height < this.minContentHeight) {
                            (0, _util.warning)("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                            return;
                        }
                    } else {
                        // What is the content area region for the specified width/height?
                        var _contentAreaBoundingBox2 = this.frame.contentBox({ width: this.frame.width, height: value });
                        if (_contentAreaBoundingBox2.height < this.minContentHeight) {
                            (0, _util.warning)("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                            return;
                        }
                    }
                }
            }

            this.disableChangeNotifications();

            if ((0, _util.isNull)(this.frame)) {
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "height", value, this);
                this._contentHeight = value;
            } else {
                _set(VerticalGroup.prototype.__proto__ || Object.getPrototypeOf(VerticalGroup.prototype), "height", value, this);
                this.disableGroupAdjustmentWhenFrameChanges();
                this.frame.height = value;
                this.enableGroupAdjustmentWhenFrameChanges();
            }

            this.adjustContentAreaPositionAndDimension();
            this.adjustChildrenVertically();

            this.enableChangeNotifications();
            if ((0, _util.isNotNull)(this.frame)) {
                this.frame.disableChangeNotifications();
                this.notifyListeners(_changeListenerConstants2.default.DIMENSION);
                this.frame.enableChangeNotifications();
            }
        }

        /**
         * Return the vertical space between children.
         * It is defined in the vertical group style.
         */

    }, {
        key: "spaceBetweenChildren",
        get: function get() {
            if ((0, _util.isNull)(this.groupStyle)) {
                return 0;
            }
            return this.groupStyle.spaceBetweenChildren;
        }

        /**
         * Return the x1 coordinate of the content box inside the frame.
         * As only this class can change contentX1, there is not set method for this property.
         * @return {number} The x1 coordinate of the content box inside the frame. If the frame is null, it is 0.
         */

    }, {
        key: "contentX1",
        get: function get() {
            return this._contentX1;
        }

        /**
         * Return the y1 coordinate of the content box inside the frame.
         * As only this class can change contentY1, there is not set method for this property.
         * @return {number} The y1 coordinate of the content box inside the frame. If the frame is null, it is 0.
         */

    }, {
        key: "contentY1",
        get: function get() {
            return this._contentY1;
        }
    }]);

    return VerticalGroup;
}(_graphicalElement2.default);

exports.default = VerticalGroup;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _circle = __webpack_require__(15);

var _circle2 = _interopRequireDefault(_circle);

var _defaultCircleDrawer = __webpack_require__(63);

var _defaultCircleDrawer2 = _interopRequireDefault(_defaultCircleDrawer);

var _ellipse = __webpack_require__(17);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _defaultEllipseDrawer = __webpack_require__(65);

var _defaultEllipseDrawer2 = _interopRequireDefault(_defaultEllipseDrawer);

var _rectangle = __webpack_require__(14);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _defaultRectangleDrawer = __webpack_require__(69);

var _defaultRectangleDrawer2 = _interopRequireDefault(_defaultRectangleDrawer);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _defaultDiamondDrawer = __webpack_require__(64);

var _defaultDiamondDrawer2 = _interopRequireDefault(_defaultDiamondDrawer);

var _text = __webpack_require__(20);

var _text2 = _interopRequireDefault(_text);

var _defaultTextDrawer = __webpack_require__(70);

var _defaultTextDrawer2 = _interopRequireDefault(_defaultTextDrawer);

var _verticalGroup = __webpack_require__(24);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _defaultVerticalGroupDrawer = __webpack_require__(71);

var _defaultVerticalGroupDrawer2 = _interopRequireDefault(_defaultVerticalGroupDrawer);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _defaultLineDrawer = __webpack_require__(67);

var _defaultLineDrawer2 = _interopRequireDefault(_defaultLineDrawer);

var _image = __webpack_require__(18);

var _image2 = _interopRequireDefault(_image);

var _defaultImageDrawer = __webpack_require__(66);

var _defaultImageDrawer2 = _interopRequireDefault(_defaultImageDrawer);

var _defaultPolylineDrawer = __webpack_require__(68);

var _defaultPolylineDrawer2 = _interopRequireDefault(_defaultPolylineDrawer);

var _polyline = __webpack_require__(13);

var _polyline2 = _interopRequireDefault(_polyline);

var _boxVerticesDecorator = __webpack_require__(11);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _defaultBoxVerticesDecoratorDrawer = __webpack_require__(62);

var _defaultBoxVerticesDecoratorDrawer2 = _interopRequireDefault(_defaultBoxVerticesDecoratorDrawer);

var _marker = __webpack_require__(12);

var _marker2 = _interopRequireDefault(_marker);

var _defaultMarkerDrawer = __webpack_require__(61);

var _defaultMarkerDrawer2 = _interopRequireDefault(_defaultMarkerDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements a default look and feel factory for SVG areas.
 */
var DefaultLookAndFeelFactory = function () {
    function DefaultLookAndFeelFactory() {
        _classCallCheck(this, DefaultLookAndFeelFactory);
    }

    _createClass(DefaultLookAndFeelFactory, [{
        key: 'getDrawerFor',


        /**
         * Get a SVG drawer for the specified element.
         * @param {GraphicalElement} element The element must be a subclass of graphical element.
         * @return {*} A SVG drawer for the specified element.
         */
        value: function getDrawerFor(element) {
            if (element instanceof _marker2.default) {
                return new _defaultMarkerDrawer2.default();
            } else if (element instanceof _circle2.default) {
                return new _defaultCircleDrawer2.default();
            } else if (element instanceof _ellipse2.default) {
                return new _defaultEllipseDrawer2.default();
            } else if (element instanceof _rectangle2.default) {
                return new _defaultRectangleDrawer2.default();
            } else if (element instanceof _diamond2.default) {
                return new _defaultDiamondDrawer2.default();
            } else if (element instanceof _text2.default) {
                return new _defaultTextDrawer2.default();
            } else if (element instanceof _verticalGroup2.default) {
                return new _defaultVerticalGroupDrawer2.default();
            } else if (element instanceof _line2.default) {
                return new _defaultLineDrawer2.default();
            } else if (element instanceof _polyline2.default) {
                return new _defaultPolylineDrawer2.default();
            } else if (element instanceof _image2.default) {
                return new _defaultImageDrawer2.default();
            } else if (element instanceof _boxVerticesDecorator2.default) {
                return new _defaultBoxVerticesDecoratorDrawer2.default();
            } else {
                throw "No SVG drawer was found for the element.";
            }
        }
    }]);

    return DefaultLookAndFeelFactory;
}();

exports.default = DefaultLookAndFeelFactory;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _observable = __webpack_require__(27);

var _observable2 = _interopRequireDefault(_observable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultStyle = function (_Observable) {
  _inherits(DefaultStyle, _Observable);

  function DefaultStyle() {
    _classCallCheck(this, DefaultStyle);

    return _possibleConstructorReturn(this, (DefaultStyle.__proto__ || Object.getPrototypeOf(DefaultStyle)).apply(this, arguments));
  }

  return DefaultStyle;
}(_observable2.default);

exports.default = DefaultStyle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);

        this._changeListeners = []; // An observable may have many change listeners.
        this._changeNotificationsEnabled = 0; // Must listeners be notified about changes?
        // 0 means yes.
        // Any value greater than 0 implies a distance from
        // a notification. A value greater than 1 appears
        // when disableChangeNotifications() is called more
        // than once.
    }

    _createClass(Observable, [{
        key: "disableChangeNotifications",
        value: function disableChangeNotifications() {
            this._changeNotificationsEnabled++;
        }
    }, {
        key: "enableChangeNotifications",
        value: function enableChangeNotifications() {
            this._changeNotificationsEnabled--;
        }
    }, {
        key: "addChangeListener",
        value: function addChangeListener(value) {
            this._changeListeners.push(value);
        }
    }, {
        key: "removeChangeListenerByName",
        value: function removeChangeListenerByName(name) {
            if ((0, _util.isNotNull)(this._changeListeners)) {
                for (var i = 0; i < this._changeListeners.length; i++) {
                    if (this._changeListeners[i] instanceof name) {
                        this._changeListeners.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    }, {
        key: "removeChangeListenerByType",
        value: function removeChangeListenerByType() {
            if ((0, _util.isNotNull)(this._changeListeners)) {
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
        key: "notifyListeners",
        value: function notifyListeners() {
            if (true === this.changeNotificationsEnabled) {
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
        }
    }, {
        key: "changeListeners",
        get: function get() {
            return this._changeListeners;
        },
        set: function set(value) {
            this._changeListeners = value;
        }
    }, {
        key: "changeNotificationsEnabled",
        get: function get() {
            return this._changeNotificationsEnabled === 0;
        }
    }]);

    return Observable;
}();

exports.default = Observable;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements a layer where the graphic elements can be drawn.
 */
var Layer = function () {
    function Layer() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            name = _ref.name,
            _ref$visible = _ref.visible,
            visible = _ref$visible === undefined ? true : _ref$visible;

        _classCallCheck(this, Layer);

        this._id = id;
        this._name = name;
        this._visible = visible;

        // Define a new object to store graphical elements.
        // It works like a map, but with complexity on search of O(1).
        // The key is the element name.
        this._elements = {};

        // Event listener.
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
            (0, _util.notifyListeners)({ listener: this.onChangeVisibility, target: this }, oldValue, newValue);
        }
    }, {
        key: "notifyElementAddition",
        value: function notifyElementAddition(addedElement) {
            (0, _util.notifyListeners)({ listener: this.onAddElement, target: this }, addedElement);
        }
    }, {
        key: "notifyElementRemoval",
        value: function notifyElementRemoval(removedElement) {
            (0, _util.notifyListeners)({ listener: this.onRemoveElement, target: this }, removedElement);
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            this._name = value;
        }
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
            }
        }
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

var _layer = __webpack_require__(28);

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
        // Layer stack. It is used to define the drawing layerStack of the layers' elements.
        this._layerStack = [];

        // Id count.
        this._elementIdCount = 1;
        this._layerIdCount = 1;

        // Layer-related event listener.
        // -----------------------------
        // Functions that receive the area and the changed layer as arguments.
        this._onAddLayer = null;
        this._onRemoveLayer = null;
        // Function that receives the area.
        this._onChangeLayerOrder = null;

        // Create a default layer that will be used if the user does not create a new one.
        this.newLayer();
    }

    _createClass(AreaDefaults, [{
        key: "moveLayerUp",


        /**
         * Move the specified layer one position to the top of the layer stack.
         * @param layer The layer that must be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */
        value: function moveLayerUp(layer) {
            var layerPosition = this._layerStack.map(function (o) {
                return o.id;
            }).indexOf(layer.id);
            // If it is not the layer at the top.
            if (layerPosition < this._layerStack.length - 1) {
                // Remove the layer from its position.
                this._layerStack.splice(layerPosition, 1);
                // Add the layer to the next position.
                this._layerStack.splice(layerPosition + 1, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }

        /**
         * Move the specified layer one position to the bottom of the layer stack.
         * @param layer The layer that must be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */

    }, {
        key: "moveLayerDown",
        value: function moveLayerDown(layer) {
            var layerPosition = this._layerStack.map(function (o) {
                return o.id;
            }).indexOf(layer.id);
            // If it is not the layer at the bottom.
            if (layerPosition > 0) {
                // Remove the layer from its position.
                this._layerStack.splice(layerPosition, 1);
                // Add the layer to the previous position.
                this._layerStack.splice(layerPosition - 1, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }

        /**
         * Move the specified layer to the specified position of the layer stack.
         * @param layer The layer that must be moved.
         * @param position The position to which the layer has to be moved.
         * @returns {boolean} true, if the layer was moved. false, otherwise.
         */

    }, {
        key: "moveLayerTo",
        value: function moveLayerTo() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                layer = _ref.layer,
                l = _ref.l,
                position = _ref.position,
                pos = _ref.pos;

            layer = (0, _util.getNonNullValue)(layer, l);
            position = (0, _util.getNonNullValue)(position, pos);
            // Argument is not a layer.
            if (!(layer instanceof _layer2.default)) {
                throw "The element to be moved must be a layer";
            }
            if (position < 0 || position >= this._layerStack.length) {
                throw "The position is invalid.";
            }
            var layerPosition = this._layerStack.map(function (o) {
                return o.id;
            }).indexOf(layer.id);
            // If it is not at the targeted position.
            if (layerPosition !== position) {
                // Remove the layer from its position.
                this._layerStack.splice(layerPosition, 1);
                // Add the layer to the targeted position.
                this._layerStack.splice(position, 0, layer);
                this.notifyLayerOrderChanging();
                return true;
            }
            return false;
        }
    }, {
        key: "newLayer",
        value: function newLayer() {
            return this.addLayer(new _layer2.default({ id: this.generateLayerId() }));
        }
    }, {
        key: "addLayer",
        value: function addLayer(layer) {
            // Argument is not a layer.
            if ((0, _util.isNull)(_layer2.default)) {
                throw "The layer cannot be null.";
            }
            if (!(layer instanceof _layer2.default)) {
                throw "Area's layers must be instances of Layer. It is an instance of " + layer.prototype !== null && layer.prototype !== undefined ? layer.prototype.name : "null" + ".";
            }
            // If a layer with the same id does not exist in the area, add it.
            if (!(layer.id in this._layers)) {
                this._layers[layer.id] = layer;
                this._layerStack.push(layer);
                this.notifyLayerAddition(layer);
                return layer;
            } else {
                throw "The area already has a layer with id " + layer.id + ".";
            }
        }
    }, {
        key: "countLayers",
        value: function countLayers() {
            return Object.keys(this._layers).length;
        }

        /**
         * Return the layer that has the specified id.
         * @param {string} id The layer id.
         * @returns {Layer} The layer.
         */

    }, {
        key: "getLayer",
        value: function getLayer(id) {
            return this._layers[id];
        }

        /**
         * Return the layer that has the specified id.
         * @param {string} id The layer id.
         * @returns {Layer} The layer.
         */

    }, {
        key: "getLayerAt",
        value: function getLayerAt(position) {
            if (position < 0 || position >= this._layerStack.length) {
                throw "The position is invalid.";
            }
            return this._layerStack[position];
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
            // Argument is not a layer.
            if (!(layer instanceof _layer2.default)) {
                throw "The element to be removed must be a layer";
            }
            if (layer.id in this._layers) {
                delete this._layers[layer.id];
                this._layerStack.splice(this._layerStack.map(function (o) {
                    return o.id;
                }).indexOf(layer.id), 1);
                this.notifyLayerRemoval(layer);
                return true;
            }
            return false;
        }
    }, {
        key: "notifyLayerAddition",
        value: function notifyLayerAddition(addedLayer) {
            (0, _util.notifyListeners)({ listener: this.onAddLayer, target: this }, addedLayer);
        }
    }, {
        key: "notifyLayerRemoval",
        value: function notifyLayerRemoval(removedLayer) {
            (0, _util.notifyListeners)({ listener: this.onRemoveLayer, target: this }, removedLayer);
        }
    }, {
        key: "notifyLayerOrderChanging",
        value: function notifyLayerOrderChanging() {
            (0, _util.notifyListeners)({ listener: this.onChangeLayerOrder, target: this }, null);
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
        key: "toString",
        value: function toString() {
            return "Area with " + this.countLayers() + ": " + this._layerStack.map(function (o) {
                return o.id;
            }).join();
        }
    }, {
        key: "bottomLayer",
        get: function get() {
            if (this._layerStack.length > 0) {
                return this._layerStack[0];
            }
            throw "The area has no layers.";
        }
    }, {
        key: "topLayer",
        get: function get() {
            if (this._layerStack.length > 0) {
                return this._layerStack[this._layerStack.length - 1];
            }
            throw "The area has no layers.";
        }
    }, {
        key: "onAddLayer",
        get: function get() {
            return this._onAddLayer;
        },
        set: function set(value) {
            if (typeof value !== 'function') {
                throw "The callback must be a function.";
            }
            this._onAddLayer = value;
        }
    }, {
        key: "onChangeLayerOrder",
        get: function get() {
            return this._onChangeLayerOrder;
        },
        set: function set(value) {
            if (typeof value !== 'function') {
                throw "The callback must be a function.";
            }
            this._onChangeLayerOrder = value;
        }
    }, {
        key: "onRemoveLayer",
        get: function get() {
            return this._onRemoveLayer;
        },
        set: function set(value) {
            if (typeof value !== 'function') {
                throw "The callback must be a function.";
            }
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
        key: "layerStack",
        get: function get() {
            return this._layerStack;
        }
    }]);

    return AreaDefaults;
}();

exports.default = AreaDefaults;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements two dimensional points.
 */
var Point = function () {
    function Point() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            _ref$x = _ref.x,
            x = _ref$x === undefined ? 0 : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? 0 : _ref$y;

        _classCallCheck(this, Point);

        this._id = id;
        this._x = x;
        this._y = y;
    }

    _createClass(Point, [{
        key: "rotateAround",


        /**
         * This method rotates "angle" degrees the point around the specified coordinate.
         * @param centerX The x-coordinate of the rotation center.
         * @param centerY The y-coordinate of the rotation center.
         * @param angle The angle in degrees.
         */
        value: function rotateAround() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x = _ref2.x,
                y = _ref2.y,
                angle = _ref2.angle;

            // See https://stackoverflow.com/questions/22491178/how-to-rotate-a-point-around-another-point
            var x1 = this.x - x;
            var y1 = this.y - y;

            var x2 = x1 * Math.cos((0, _util.toRadians)(angle)) - y1 * Math.sin((0, _util.toRadians)(angle));
            var y2 = x1 * Math.sin((0, _util.toRadians)(angle)) + y1 * Math.cos((0, _util.toRadians)(angle));

            this.x = x2 + x;
            this.y = y2 + x;
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontStyle = function () {
    function FontStyle() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$family = _ref.family,
            family = _ref$family === undefined ? "'Roboto', sans-serif" : _ref$family,
            _ref$size = _ref.size,
            size = _ref$size === undefined ? 15 : _ref$size,
            _ref$weight = _ref.weight,
            weight = _ref$weight === undefined ? "100" : _ref$weight,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? "normal" : _ref$style,
            target = _ref.target;

        _classCallCheck(this, FontStyle);

        this._family = family;
        this._size = size;
        this._childrenVerWeight = weight;
        this._target = target;
        this._style = style;
    }

    _createClass(FontStyle, [{
        key: "notifyTarget",
        value: function notifyTarget() {
            if (this.target !== undefined && this.target !== null) {
                this.target.notifyListeners(_changeListenerConstants2.default.STYLING);
            }
        }
    }, {
        key: "style",
        get: function get() {
            return this._style;
        },
        set: function set(value) {
            this._style = value;
        }
    }, {
        key: "family",
        get: function get() {
            return this._family;
        },
        set: function set(value) {
            this._family = value;
            this.notifyTarget();
        }
    }, {
        key: "size",
        get: function get() {
            return this._size;
        },
        set: function set(value) {
            this._size = value;
            this.notifyTarget();
        }
    }, {
        key: "weight",
        get: function get() {
            return this._childrenVerWeight;
        },
        set: function set(value) {
            this._childrenVerWeight = value;
            this.notifyTarget();
        }
    }, {
        key: "target",
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
            this.notifyTarget();
        }
    }]);

    return FontStyle;
}();

exports.default = FontStyle;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */
/* jshint eqnull:true */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _horizontalGravity = __webpack_require__(21);

var _horizontalGravity2 = _interopRequireDefault(_horizontalGravity);

var _resizePolicy = __webpack_require__(23);

var _resizePolicy2 = _interopRequireDefault(_resizePolicy);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VerticalGroupChild = function () {
    function VerticalGroupChild() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            element = _ref.element,
            leftMargin = _ref.leftMargin,
            lMargin = _ref.lMargin,
            rightMargin = _ref.rightMargin,
            rMargin = _ref.rMargin,
            topMargin = _ref.topMargin,
            tMargin = _ref.tMargin,
            bottomMargin = _ref.bottomMargin,
            bMargin = _ref.bMargin,
            horResizingPolicy = _ref.horResizingPolicy,
            hResizingPolicy = _ref.hResizingPolicy,
            horGravity = _ref.horGravity,
            hGravity = _ref.hGravity,
            weight = _ref.weight,
            overlap = _ref.overlap;

        _classCallCheck(this, VerticalGroupChild);

        this._element = element;
        this._horResizingPolicy = (0, _util.getNonNullValue)(horResizingPolicy, hResizingPolicy, _resizePolicy2.default.WRAP_CONTENT);
        this._horGravity = (0, _util.getNonNullValue)(horGravity, hGravity, _horizontalGravity2.default.LEFT);
        this._leftMargin = (0, _util.getNonNullValue)(leftMargin, lMargin, 0);
        this._rightMargin = (0, _util.getNonNullValue)(rightMargin, rMargin, 0);
        this._topMargin = (0, _util.getNonNullValue)(topMargin, tMargin, 0);
        this._bottomMargin = (0, _util.getNonNullValue)(bottomMargin, bMargin, 0);
        this._weight = weight;
        this._overlap = overlap;
    }

    _createClass(VerticalGroupChild, [{
        key: "element",
        get: function get() {
            return this._element;
        },
        set: function set(value) {
            this._element = value;
        }
    }, {
        key: "leftMargin",
        get: function get() {
            return this._leftMargin;
        },
        set: function set(value) {
            this._leftMargin = value;
        }
    }, {
        key: "rightMargin",
        get: function get() {
            return this._rightMargin;
        },
        set: function set(value) {
            this._rightMargin = value;
        }
    }, {
        key: "topMargin",
        get: function get() {
            return this._topMargin;
        },
        set: function set(value) {
            this._topMargin = value;
        }
    }, {
        key: "bottomMargin",
        get: function get() {
            return this._bottomMargin;
        },
        set: function set(value) {
            this._bottomMargin = value;
        }
    }, {
        key: "horResizingPolicy",
        get: function get() {
            return this._horResizingPolicy;
        },
        set: function set(value) {
            this._horResizingPolicy = value;
        }
    }, {
        key: "weight",
        get: function get() {
            return this._weight;
        },
        set: function set(value) {
            this._weight = value;
        }
    }, {
        key: "overlap",
        get: function get() {
            return this._overlap;
        },
        set: function set(value) {
            this._overlap = value;
        }
    }, {
        key: "horGravity",
        get: function get() {
            return this._horGravity;
        },
        set: function set(value) {
            this._horGravity = value;
        }
    }, {
        key: "verMargin",
        get: function get() {
            return this.topMargin + this.bottomMargin;
        }
    }, {
        key: "horMargin",
        get: function get() {
            return this.leftMargin + this.rightMargin;
        }
    }, {
        key: "totalHeight",
        get: function get() {
            return 2 * this.verMargin + this.element.height;
        }
    }, {
        key: "totalWidth",
        get: function get() {
            return 2 * this.horMargin + this.element.width;
        }
    }]);

    return VerticalGroupChild;
}();

exports.default = VerticalGroupChild;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupStyleChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupStyleChangeListener, _ChangeListener);

    function VerticalGroupStyleChangeListener(vGroup) {
        _classCallCheck(this, VerticalGroupStyleChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupStyleChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupStyleChangeListener)).call(this));

        _this._vGroup = vGroup;
        return _this;
    }

    _createClass(VerticalGroupStyleChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.vGroup.groupStyleChanged();
        }
    }, {
        key: 'vGroup',
        get: function get() {
            return this._vGroup;
        }
    }]);

    return VerticalGroupStyleChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupStyleChangeListener;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import VerticalGroup from "../vertical-group";

var VerticalGroupFrameChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupFrameChangeListener, _ChangeListener);

    function VerticalGroupFrameChangeListener(vGroup) {
        _classCallCheck(this, VerticalGroupFrameChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupFrameChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupFrameChangeListener)).call(this));
        // To avoid a circular dependence when importing.
        /*
                if (!(vGroup instanceof VerticalGroup)) {
                    throw "The argument must be an instance of VerticalGroup or one of its subclasses.";
                }
        */

        _this._vGroup = vGroup;
        return _this;
    }

    _createClass(VerticalGroupFrameChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.vGroup.frameChanged();
        }
    }, {
        key: 'vGroup',
        get: function get() {
            return this._vGroup;
        },
        set: function set(value) {
            this._vGroup = value;
        }
    }]);

    return VerticalGroupFrameChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupFrameChangeListener;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _defaultStyle = __webpack_require__(26);

var _defaultStyle2 = _interopRequireDefault(_defaultStyle);

var _verticalGravity = __webpack_require__(22);

var _verticalGravity2 = _interopRequireDefault(_verticalGravity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupStyle = function (_DefaultStyle) {
    _inherits(GroupStyle, _DefaultStyle);

    function GroupStyle() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            leftPadding = _ref.leftPadding,
            lPadding = _ref.lPadding,
            rightPadding = _ref.rightPadding,
            rPadding = _ref.rPadding,
            topPadding = _ref.topPadding,
            tPadding = _ref.tPadding,
            bottomPadding = _ref.bottomPadding,
            bPadding = _ref.bPadding,
            verGravity = _ref.verGravity,
            vGravity = _ref.vGravity,
            _ref$spaceBetweenChil = _ref.spaceBetweenChildren,
            spaceBetweenChildren = _ref$spaceBetweenChil === undefined ? 0 : _ref$spaceBetweenChil;

        _classCallCheck(this, GroupStyle);

        // **************************************
        // Check whether there are redundant arguments.
        var _this = _possibleConstructorReturn(this, (GroupStyle.__proto__ || Object.getPrototypeOf(GroupStyle)).call(this));

        if ((0, _util.checkRedundantArguments)(leftPadding, lPadding)) {
            (0, _util.error)("Warning: Both leftPadding and lPadding were informed.");
        }
        if ((0, _util.checkRedundantArguments)(rightPadding, rPadding)) {
            (0, _util.error)("Warning: Both rightPadding and rPadding were informed.");
        }
        if ((0, _util.checkRedundantArguments)(topPadding, tPadding)) {
            (0, _util.error)("Warning: Both topPadding and tPadding were informed.");
        }
        if ((0, _util.checkRedundantArguments)(bottomPadding, bPadding)) {
            (0, _util.error)("Warning: Both bottomPadding and bPadding were informed.");
        }
        if ((0, _util.checkRedundantArguments)(verGravity, vGravity)) {
            (0, _util.error)("Warning: Both verGravity and vGravity were informed.");
        }
        // **************************************

        _this._leftPadding = (0, _util.getNonNullValue)(leftPadding, lPadding, 0);
        _this._rightPadding = (0, _util.getNonNullValue)(rightPadding, rPadding, 0);
        _this._topPadding = (0, _util.getNonNullValue)(topPadding, tPadding, 0);
        _this._bottomPadding = (0, _util.getNonNullValue)(bottomPadding, bPadding, 0);
        _this._spaceBetweenChildren = spaceBetweenChildren;
        _this._target = null;
        _this._verGravity = verGravity;
        return _this;
    }

    _createClass(GroupStyle, [{
        key: "notifyTarget",
        value: function notifyTarget() {
            if (this.target !== undefined && this.target !== null) {
                this.target.notifyListeners(_changeListenerConstants2.default.STYLING);
            }
        }
    }, {
        key: "verGravity",
        get: function get() {
            return this._verGravity;
        },
        set: function set(value) {
            this._verGravity = value;
        }
    }, {
        key: "leftPadding",
        get: function get() {
            return this._leftPadding;
        },
        set: function set(value) {
            this._leftPadding = value;
            this.notifyTarget();
        }
    }, {
        key: "rightPadding",
        get: function get() {
            return this._rightPadding;
        },
        set: function set(value) {
            this._rightPadding = value;
            this.notifyTarget();
        }
    }, {
        key: "topPadding",
        get: function get() {
            return this._topPadding;
        },
        set: function set(value) {
            this._topPadding = value;
            this.notifyTarget();
        }
    }, {
        key: "bottomPadding",
        get: function get() {
            return this._bottomPadding;
        },
        set: function set(value) {
            this._bottomPadding = value;
            this.notifyTarget();
        }
    }, {
        key: "spaceBetweenChildren",
        get: function get() {
            return this._spaceBetweenChildren;
        },
        set: function set(value) {
            this._spaceBetweenChildren = value;
            this.notifyTarget();
        }
    }, {
        key: "target",
        get: function get() {
            return this._target;
        },
        set: function set(value) {
            this._target = value;
        }
    }], [{
        key: "defaultVerGravity",
        get: function get() {
            return _verticalGravity2.default.MIDDLE;
        }
    }]);

    return GroupStyle;
}(_defaultStyle2.default);

exports.default = GroupStyle;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements a listener for changes in the position of box vertices decorators' decorated.
 */
var BoxVerticesDecoratorDecoratedPositionChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedPositionChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedPositionChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedPositionChangeListener);

        if (decorator === undefined || decorator === null) {
            throw "The decorator cannot be null.";
        }
        if (!(decorator instanceof _graphicalElement2.default)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedPositionChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedPositionChangeListener)).call(this, _changeListenerConstants2.default.POSITION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedPositionChangeListener, [{
        key: 'update',


        /**
         * Update the position and the rotation of the decorator.
         */
        value: function update() {
            this.decorator.disableChangeNotifications();
            this.decorator.x1 = this.decorator.decorated.x1;
            this.decorator.y1 = this.decorator.decorated.y1;
            this.decorator.rotation = this.decorator.decorated.rotation;
            this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
            this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
            this.decorator.enableChangeNotifications();
            this.decorator.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.ROTATION);
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        }
    }]);

    return BoxVerticesDecoratorDecoratedPositionChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedPositionChangeListener;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements a listener for changes in the rotation of box vertices decorators' decorated.
 */
var BoxVerticesDecoratorDecoratedRotationChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedRotationChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedRotationChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedRotationChangeListener);

        if (decorator === undefined || decorator === null) {
            throw "The decorator cannot be null.";
        }
        if (!(decorator instanceof _graphicalElement2.default)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedRotationChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedRotationChangeListener)).call(this, _changeListenerConstants2.default.ROTATION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedRotationChangeListener, [{
        key: 'update',


        /**
         * Update the rotation of the decorator.
         */
        value: function update() {
            this.decorator.disableChangeNotifications();
            this.decorator.rotation = this.decorator.decorated.rotation;
            this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
            this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
            this.decorator.enableChangeNotifications();
            this.decorator.notifyListeners(_changeListenerConstants2.default.ROTATION);
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        }
    }]);

    return BoxVerticesDecoratorDecoratedRotationChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedRotationChangeListener;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _boxVerticesDecorator = __webpack_require__(11);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class implements a listener for changes in the dimension of box vertices decorators' decorated.
 */
var BoxVerticesDecoratorDecoratedDimensionChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorDecoratedDimensionChangeListener, _ChangeListener);

    function BoxVerticesDecoratorDecoratedDimensionChangeListener(decorator) {
        _classCallCheck(this, BoxVerticesDecoratorDecoratedDimensionChangeListener);

        if (decorator === undefined || decorator === null) {
            throw "The decorator cannot be null.";
        }
        if (!(decorator instanceof _graphicalElement2.default)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        var _this = _possibleConstructorReturn(this, (BoxVerticesDecoratorDecoratedDimensionChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorDecoratedDimensionChangeListener)).call(this, _changeListenerConstants2.default.DIMENSION));

        _this._decorator = decorator;
        return _this;
    }

    _createClass(BoxVerticesDecoratorDecoratedDimensionChangeListener, [{
        key: 'update',


        /**
         * Update the position of the top-right, bottom-left, and bottom-right vertices.
         * The top-left vertex is fixed when only the dimension is changing.
         */
        value: function update() {
            var halfSize = (this.decorator.vertexSize - 1) / 2;
            var newX = this.decorator.width - halfSize;
            var newY = this.decorator.height - halfSize;
            this.decorator.disablePropagationToDecorated();
            //this.decorator.width = this.decorator.decorated.width;
            //this.decorator.height = this.decorator.decorated.height;
            this.decorator.enablePropagationToDecorated();

            this.decorator.getTag(_boxVerticesDecorator2.default.TOP_RIGHT).moveXTo(newX);
            this.decorator.getTag(_boxVerticesDecorator2.default.BOTTOM_LEFT).moveYTo(newY);
            this.decorator.getTag(_boxVerticesDecorator2.default.BOTTOM_RIGHT).moveTo({ x: newX, y: newY });
        }
    }, {
        key: 'decorator',
        get: function get() {
            return this._decorator;
        }
    }]);

    return BoxVerticesDecoratorDecoratedDimensionChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorDecoratedDimensionChangeListener;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxVerticesDecoratorChangeListener = function (_ChangeListener) {
    _inherits(BoxVerticesDecoratorChangeListener, _ChangeListener);

    function BoxVerticesDecoratorChangeListener() {
        _classCallCheck(this, BoxVerticesDecoratorChangeListener);

        return _possibleConstructorReturn(this, (BoxVerticesDecoratorChangeListener.__proto__ || Object.getPrototypeOf(BoxVerticesDecoratorChangeListener)).call(this, _changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.ROTATION));
    }

    _createClass(BoxVerticesDecoratorChangeListener, [{
        key: "update",
        value: function update(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("transform", "translate(" + target.x + ", " + target.y + ") rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
        }
    }]);

    return BoxVerticesDecoratorChangeListener;
}(_changeListener2.default);

exports.default = BoxVerticesDecoratorChangeListener;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("r", target.radius);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("r", target.radius);
        }
    }]);

    return CircleDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = CircleDimensionChangeListener;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cx", target.centerX);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cy", target.centerY);
        }
    }]);

    return CirclePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = CirclePositionChangeListener;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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

        /**
         * @private
         * Update the coordinates of the target diamond.
         * @param {Diamond} target The target diamond.
         */

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("d", coordinates);
        }
    }]);

    return DiamondDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = DiamondDimensionChangeListener;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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

        /**
         * @private
         * Update the coordinates of the target diamond.
         * @param {Diamond} target The target diamond.
         */

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("d", coordinates);
        }
    }]);

    return DiamondPositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = DiamondPositionChangeListener;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cx", target.centerX);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("rx", target.radiusX);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cy", target.centerY);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("ry", target.radiusY);
        }
    }]);

    return EllipseDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = EllipseDimensionChangeListener;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cx", target.centerX);
        }
    }, {
        key: 'changeY',
        value: function changeY(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("cy", target.centerY);
        }
    }]);

    return EllipsePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = EllipsePositionChangeListener;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontChangeListener = function (_ChangeListener) {
    _inherits(FontChangeListener, _ChangeListener);

    function FontChangeListener() {
        _classCallCheck(this, FontChangeListener);

        return _possibleConstructorReturn(this, (FontChangeListener.__proto__ || Object.getPrototypeOf(FontChangeListener)).call(this, _changeListenerConstants2.default.STYLING));
    }

    /**
     * Change the font style for the specified text.
     * @param {Text} target The text that must have its font style changed.
     */


    _createClass(FontChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("font-family", target.fontStyle.family);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("font-size", target.fontStyle.size);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("font-weight", target.fontStyle.weight);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("font-style", target.fontStyle.style);
        }
    }]);

    return FontChangeListener;
}(_changeListener2.default);

exports.default = FontChangeListener;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(6);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalPositionChangeListener = __webpack_require__(7);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("x2", target.x2 - target.borderSize);
        }
    }, {
        key: 'changeHeight',
        value: function changeHeight(target) {
            // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
            // The difference between no product and * 2 is necessary to center the line.
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("y2", target.y2 - target.borderSize);
        }
    }]);

    return LineDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = LineDimensionChangeListener;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("x1", target.x1 + target.borderSize);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("y1", target.y1 + target.borderSize);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("x2", target.x2 - target.borderSize);
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("y2", target.y2 - target.borderSize);
        }
    }]);

    return LinePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = LinePositionChangeListener;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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

            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("d", path);
        }
    }]);

    return PolyLineDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = PolyLineDimensionChangeListener;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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

            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("d", path);
        }
    }]);

    return PolyLinePositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = PolyLinePositionChangeListener;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(6);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalPositionChangeListener = __webpack_require__(7);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextChangeListener = function (_ChangeListener) {
    _inherits(TextChangeListener, _ChangeListener);

    function TextChangeListener() {
        _classCallCheck(this, TextChangeListener);

        return _possibleConstructorReturn(this, (TextChangeListener.__proto__ || Object.getPrototypeOf(TextChangeListener)).call(this, _changeListenerConstants2.default.OTHER));
    }

    _createClass(TextChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).textContent = target.text;
            // As the text changed, the graphical element minimum width and height must be updated.
            var boundingBox = target.getTag(_svgAreaConstants2.default.DRAWN).getBoundingClientRect();
            target.disableChangeNotifications(); // Avoid stack overflow.
            target.minWidth = boundingBox.width;
            target.enableChangeNotifications();
            target.minHeight = boundingBox.height;
        }
    }]);

    return TextChangeListener;
}(_changeListener2.default);

exports.default = TextChangeListener;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(6);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("y", target.y + 3 * target.height / 4);
        }
    }]);

    return TextPositionChangeListener;
}(_generalPositionChangeListener2.default);

exports.default = TextPositionChangeListener;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupChildrenChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupChildrenChangeListener, _ChangeListener);

    function VerticalGroupChildrenChangeListener(vGroup) {
        _classCallCheck(this, VerticalGroupChildrenChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupChildrenChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupChildrenChangeListener)).call(this, _changeListenerConstants2.default.OTHER));

        _this._vGroup = vGroup;
        return _this;
    }

    _createClass(VerticalGroupChildrenChangeListener, [{
        key: 'update',
        value: function update(target) {
            var newGroup = this.vGroup.getTag(_svgAreaConstants2.default.DRAWN);
            for (var i = 0; i < this.vGroup.countChildren(); i++) {
                if (this.vGroup !== this.vGroup.childAt(i).getTag(VerticalGroupChildrenChangeListener.DRAWN_CHILD)) {
                    newGroup.appendChild(this.vGroup.childAt(i).getTag(_svgAreaConstants2.default.DRAWN));
                    this.vGroup.childAt(i).addTag({ key: VerticalGroupChildrenChangeListener.DRAWN_CHILD, value: newGroup });
                }
            }
        }
    }, {
        key: 'vGroup',
        get: function get() {
            return this._vGroup;
        },
        set: function set(value) {
            this._vGroup = value;
        }
    }], [{
        key: 'DRAWN_CHILD',
        get: function get() {
            return "VERTICAL_GROUP_DRAWN_CHILD";
        }
    }]);

    return VerticalGroupChildrenChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupChildrenChangeListener;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupChangeListener, _ChangeListener);

    function VerticalGroupChangeListener() {
        _classCallCheck(this, VerticalGroupChangeListener);

        return _possibleConstructorReturn(this, (VerticalGroupChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupChangeListener)).call(this, _changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.ROTATION));
    }

    _createClass(VerticalGroupChangeListener, [{
        key: "update",
        value: function update(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("transform", "translate(" + target.x + ", " + target.y + ") rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
        }
    }]);

    return VerticalGroupChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupChangeListener;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupDimensionChangeListener = function (_GeneralDimensionChan) {
  _inherits(VerticalGroupDimensionChangeListener, _GeneralDimensionChan);

  function VerticalGroupDimensionChangeListener() {
    _classCallCheck(this, VerticalGroupDimensionChangeListener);

    return _possibleConstructorReturn(this, (VerticalGroupDimensionChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupDimensionChangeListener)).apply(this, arguments));
  }

  return VerticalGroupDimensionChangeListener;
}(_generalDimensionChangeListener2.default);

exports.default = VerticalGroupDimensionChangeListener;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _marker = __webpack_require__(12);

var _marker2 = _interopRequireDefault(_marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultMarkerDrawer = function (_DefaultDrawer) {
    _inherits(DefaultMarkerDrawer, _DefaultDrawer);

    function DefaultMarkerDrawer(svgArea) {
        _classCallCheck(this, DefaultMarkerDrawer);

        return _possibleConstructorReturn(this, (DefaultMarkerDrawer.__proto__ || Object.getPrototypeOf(DefaultMarkerDrawer)).call(this, svgArea));
    }

    /**
     * Draw a text on a SVG area and return the generated SVG element.
     * @param {Marker} element The marker element.
     * @return {SVGMarkerElement} A SVG marker element.
     */


    _createClass(DefaultMarkerDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newMarker = document.createElementNS(this.svgArea.namespace, "marker");
            newMarker.setAttribute("id", element.id);

            if (element.position === _marker2.default.END) {
                if (element.type === _marker2.default.FILLED_TRIANGLE) {
                    this.drawEndFilledTriangle(newMarker);
                } else if (element.type === _marker2.default.TRIANGLE) {
                    this.drawEndTriangle(newMarker);
                }
            }

            //*****************************
            // Add change listener.

            return newMarker;
        }
    }, {
        key: 'drawEndFilledTriangle',
        value: function drawEndFilledTriangle(marker) {
            marker.setAttribute("markerWidth", "9");
            marker.setAttribute("markerHeight", "6");
            marker.setAttribute("refX", "0");
            marker.setAttribute("refY", "3");
            marker.setAttribute("orient", "auto");
            marker.setAttribute("markerUnits", "strokeWidth");

            var path = document.createElementNS(this.svgArea.namespace, "path");
            path.setAttribute("d", "M0,0 L0,6 L9,3 z");
            path.setAttribute("fill", "#000");

            marker.appendChild(path);
        }
    }, {
        key: 'drawEndTriangle',
        value: function drawEndTriangle(marker) {
            marker.setAttribute("markerWidth", "18");
            marker.setAttribute("markerHeight", "12");
            marker.setAttribute("refX", "0");
            marker.setAttribute("refY", "6");
            marker.setAttribute("orient", "auto");
            marker.setAttribute("markerUnits", "strokeWidth");

            var path = document.createElementNS(this.svgArea.namespace, "path");
            path.setAttribute("d", "M0,0 L0,12 L18,6 z");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-width", "3");
            path.setAttribute("stroke", "#000");

            marker.appendChild(path);
        }
    }]);

    return DefaultMarkerDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultMarkerDrawer;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _rectangle = __webpack_require__(14);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _boxVerticesDecorator = __webpack_require__(11);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _boxVerticesDecoratorChangeListener = __webpack_require__(39);

var _boxVerticesDecoratorChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorChangeListener);

var _boxVerticesDecoratorDecoratedRotationChangeListener = __webpack_require__(37);

var _boxVerticesDecoratorDecoratedRotationChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedRotationChangeListener);

var _boxVerticesDecoratorDecoratedPositionChangeListener = __webpack_require__(36);

var _boxVerticesDecoratorDecoratedPositionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedPositionChangeListener);

var _boxVerticesDecoratorDecoratedDimensionChangeListener = __webpack_require__(38);

var _boxVerticesDecoratorDecoratedDimensionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedDimensionChangeListener);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

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

    /**
     * Draw a box vertices decorator on a SVG area and return the generated SVG element.
     * @param {BoxVerticesDecorator} element The box vertices decorator to be drawn.
     * @return A SVG group element.
     */


    _createClass(DefaultBoxVerticesDecoratorDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newGroup = document.createElementNS(this.svgArea.namespace, "g");
            newGroup.setAttribute("id", element.id);
            newGroup.setAttribute('shape-rendering', 'inherit');
            newGroup.setAttribute('pointer-events', 'all');

            if (element.decorated !== null) {
                newGroup.appendChild(element.decorated.getTag(_svgAreaConstants2.default.DRAWN));

                // Copy the decorated position before removing its listener.
                element.moveTo({ x: element.decorated.x1, y: element.decorated.y1 });
                element.resizeTo({ width: element.decorated.width, height: element.decorated.height });
                element.decorated.disableChangeNotifications();
                element.decorated.moveTo({ x: 0, y: 0 });
                element.decorated.enableChangeNotifications();
                element.decorated.notifyListeners(_changeListenerConstants2.default.POSITION);

                //*****************************
                // Remove the decorated listener related to position, dimension, and rotation.
                // These events will be handled by the decorator group.
                element.decorated.removeChangeListenerByType(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.ROTATION);
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedPositionChangeListener2.default(element));
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedRotationChangeListener2.default(element));
                element.decorated.addChangeListener(new _boxVerticesDecoratorDecoratedDimensionChangeListener2.default(element));
            }

            //*****************************
            // Add group change listener.
            element.addChangeListener(new _boxVerticesDecoratorChangeListener2.default());

            var vertexSize = element.vertexSize;
            var halfSize = (vertexSize - 1) / 2;

            var lookAndFeel = this.svgArea.lookAndFeel;
            var style = new _style2.default({ strokeWidth: 0, strokeColor: "black", fillColor: "black" });

            // Draw the box vertices.
            if (true === element.topLeft) {
                element.addTag({
                    key: _boxVerticesDecorator2.default.TOP_LEFT, value: this.generateVertex({
                        position: _boxVerticesDecorator2.default.TOP_LEFT,
                        element: element,
                        halfSize: halfSize,
                        style: style,
                        lookAndFeel: lookAndFeel,
                        group: newGroup
                    })
                });
            }
            if (true === element.topRight) {
                element.addTag({
                    key: _boxVerticesDecorator2.default.TOP_RIGHT, value: this.generateVertex({
                        position: _boxVerticesDecorator2.default.TOP_RIGHT,
                        element: element,
                        halfSize: halfSize,
                        style: style,
                        lookAndFeel: lookAndFeel,
                        group: newGroup
                    })
                });
            }
            if (true === element.bottomLeft) {
                element.addTag({
                    key: _boxVerticesDecorator2.default.BOTTOM_LEFT, value: this.generateVertex({
                        position: _boxVerticesDecorator2.default.BOTTOM_LEFT,
                        element: element,
                        halfSize: halfSize,
                        style: style,
                        lookAndFeel: lookAndFeel,
                        group: newGroup
                    })
                });
            }
            if (true === element.bottomRight) {
                element.addTag({
                    key: _boxVerticesDecorator2.default.BOTTOM_RIGHT, value: this.generateVertex({
                        position: _boxVerticesDecorator2.default.BOTTOM_RIGHT,
                        element: element,
                        halfSize: halfSize,
                        style: style,
                        lookAndFeel: lookAndFeel,
                        group: newGroup
                    })
                });
            }

            return newGroup;
        }
    }, {
        key: 'generateVertex',
        value: function generateVertex() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                position = _ref.position,
                element = _ref.element,
                halfSize = _ref.halfSize,
                style = _ref.style,
                lookAndFeel = _ref.lookAndFeel,
                group = _ref.group;

            var x1 = 0 - halfSize;
            var y1 = 0 - halfSize;
            if (position === _boxVerticesDecorator2.default.TOP_RIGHT) {
                x1 = element.width - halfSize;
            } else if (position === _boxVerticesDecorator2.default.BOTTOM_LEFT) {
                y1 = element.height - halfSize;
            } else if (position === _boxVerticesDecorator2.default.BOTTOM_RIGHT) {
                x1 = element.width - halfSize;
                y1 = element.height - halfSize;
            } else if (position === _boxVerticesDecorator2.default.TOP_LEFT) {} else {
                throw "The position is invalid.";
            }

            var vertex = new _rectangle2.default({
                x1: x1,
                y1: y1,
                width: 2 * halfSize,
                height: 2 * halfSize,
                style: style
            });
            vertex.addTag({ key: _boxVerticesDecorator2.default.VERTEX, value: position });
            vertex.addTag({ key: _boxVerticesDecorator2.default.IS_VERTEX, value: true });
            vertex.addTag({ key: _graphicalElement2.default.PARENT, value: element });
            // Get a drawer for the vertex.
            var drawer = lookAndFeel.getDrawerFor(vertex);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(vertex);
            vertex.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnChild });
            group.appendChild(drawnChild);

            this.registerEvents(vertex, drawnChild, element);
            return vertex;
        }
    }, {
        key: 'registerEvents',
        value: function registerEvents(model, drawn, decorator) {
            drawn.onclick = model.fireOnClick.bind(model);
            model.onClick = decorator.dispatchOnVertexClick.bind(decorator);
            drawn.ondblclick = model.fireOnDblClick.bind(model);
            model.onDblClick = decorator.dispatchOnVertexDblClick.bind(decorator);
            drawn.onmousedown = model.fireOnMouseDown.bind(model);
            model.onMouseDown = decorator.dispatchOnVertexMouseDown.bind(decorator);
            drawn.onmousemove = model.fireOnMouseMove.bind(model);
            model.onMouseMove = decorator.dispatchOnVertexMouseMove.bind(decorator);
            drawn.onmouseup = model.fireOnMouseUp.bind(model);
            model.onMouseUp = decorator.dispatchOnVertexMouseUp.bind(decorator);
        }
    }]);

    return DefaultBoxVerticesDecoratorDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultBoxVerticesDecoratorDrawer;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _circleDimensionChangeListener = __webpack_require__(40);

var _circleDimensionChangeListener2 = _interopRequireDefault(_circleDimensionChangeListener);

var _circlePositionChangeListener = __webpack_require__(41);

var _circlePositionChangeListener2 = _interopRequireDefault(_circlePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

    /**
     * Draw a circle on a SVG area and return the generated SVG element.
     * @param {Circle} element The circle to be drawn.
     * @return {SVGCircleElement} A SVG circle element.
     */


    _createClass(DefaultCircleDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newCircle = document.createElementNS(this.svgArea.namespace, "circle");
            newCircle.setAttribute("id", element.id);
            newCircle.setAttribute("cx", element.centerX);
            newCircle.setAttribute("cy", element.centerY);
            newCircle.setAttribute("r", element.radius);
            newCircle.setAttribute("style", element.style.toString());
            newCircle.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listener.
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _diamondDimensionChangeListener = __webpack_require__(42);

var _diamondDimensionChangeListener2 = _interopRequireDefault(_diamondDimensionChangeListener);

var _diamondPositionChangeListener = __webpack_require__(43);

var _diamondPositionChangeListener2 = _interopRequireDefault(_diamondPositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

    /**
     * Draw a diamond on a SVG area and return the generated SVG element.
     * @param {Diamond} element The diamond to be drawn.
     * @return {SVGPathElement} A SVG path element.
     */


    _createClass(DefaultDiamondDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newDiamond = document.createElementNS(this.svgArea.namespace, "path");
            newDiamond.setAttribute("id", element.id);
            var middleX = element.x1 + element.width / 2;
            var middleY = element.y1 + element.height / 2;
            var coordinates = "M " + element.x + "," + middleY;
            coordinates += " " + middleX + "," + element.y1;
            coordinates += " " + (element.x1 + element.width) + "," + middleY;
            coordinates += " " + middleX + "," + (element.y1 + element.height);
            // The left diamond corner was not being drawn correctly because of the border.
            // To correct that, it was necessary to use the Pythagoras' theorem to move
            // a little bit up.
            var adjustment = Math.sqrt(element.borderSize * element.borderSize / 2);
            coordinates += " " + (element.x1 - adjustment) + "," + (middleY - adjustment);
            newDiamond.setAttribute("d", coordinates);
            newDiamond.setAttribute("style", element.style.toString());
            newDiamond.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listener.
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _ellipseDimensionChangeListener = __webpack_require__(44);

var _ellipseDimensionChangeListener2 = _interopRequireDefault(_ellipseDimensionChangeListener);

var _ellipsePositionChangeListener = __webpack_require__(45);

var _ellipsePositionChangeListener2 = _interopRequireDefault(_ellipsePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

    /**
     * Draw an ellipse on a SVG area and return the generated SVG element.
     * @param {Ellipse} element The ellipse to be drawn.
     * @return {SVGEllipseElement} A SVG ellipse element.
     */


    _createClass(DefaultEllipseDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newEllipse = document.createElementNS(this.svgArea.namespace, "ellipse");
            newEllipse.setAttribute("id", element.id);
            newEllipse.setAttribute("cx", element.centerX);
            newEllipse.setAttribute("cy", element.centerY);
            newEllipse.setAttribute("rx", element.radiusX);
            newEllipse.setAttribute("ry", element.radiusY);
            newEllipse.setAttribute("style", element.style.toString());
            newEllipse.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listener.
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _styleChangeListener = __webpack_require__(8);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

var _imagePositionChangeListener = __webpack_require__(48);

var _imagePositionChangeListener2 = _interopRequireDefault(_imagePositionChangeListener);

var _imageDimensionChangeListener = __webpack_require__(47);

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

    /**
     * Draw an image on a SVG area and return the generated SVG element.
     * @param {Image} element The image to be drawn.
     * @return {SVGImageElement} A SVG image element.
     */


    _createClass(DefaultImageDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newImage = document.createElementNS(this.svgArea.namespace, "image");
            newImage.setAttribute("id", element.id);
            newImage.setAttribute("x", element.x1);
            newImage.setAttribute("y", element.y1);
            newImage.setAttribute("width", element.width);
            newImage.setAttribute("height", element.height);
            newImage.setAttribute("style", element.style.toString());
            newImage.setAttribute("visibility", "visible");
            newImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', element.image);

            //*****************************
            // Add change listener.
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _lineDimensionChangeListener = __webpack_require__(49);

var _lineDimensionChangeListener2 = _interopRequireDefault(_lineDimensionChangeListener);

var _linePositionChangeListener = __webpack_require__(50);

var _linePositionChangeListener2 = _interopRequireDefault(_linePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

    /**
     * Draw a line on a SVG area and return the generated SVG element.
     * @param {Line} element The line to be drawn.
     * @return {SVGLineElement} A SVG line element.
     */


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
            newLine.setAttribute("style", element.style.toString());
            newLine.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listener.
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _polylineDimensionChangeListener = __webpack_require__(51);

var _polylineDimensionChangeListener2 = _interopRequireDefault(_polylineDimensionChangeListener);

var _polylinePositionChangeListener = __webpack_require__(52);

var _polylinePositionChangeListener2 = _interopRequireDefault(_polylinePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

var _polyline = __webpack_require__(13);

var _polyline2 = _interopRequireDefault(_polyline);

var _util = __webpack_require__(2);

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

    /**
     * Draw a polyLine on a SVG area and return the generated SVG element.
     * @param {PolyLine} element The polyLine to be drawn.
     * @return {SVGPathElement} A SVG path element.
     */


    _createClass(DefaultPolyLineDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newPath = document.createElementNS(this.svgArea.namespace, "path");
            newPath.setAttribute("id", element.id);

            // Construct the path.
            var path = this.generatePath(element);

            newPath.setAttribute("d", path);
            newPath.setAttribute("style", element.style.toString());
            newPath.setAttribute("shape-rendering", "geometricPrecision");

            if ((0, _util.isNotNull)(element.startMarker)) {
                newPath.setAttribute("marker-start", "url(#" + element.startMarker + ")");
            }
            if ((0, _util.isNotNull)(element.endMarker)) {
                newPath.setAttribute("marker-end", "url(#" + element.endMarker + ")");
            }

            //*****************************
            // Add change listener.
            element.addChangeListener(new _polylineDimensionChangeListener2.default());
            element.addChangeListener(new _polylinePositionChangeListener2.default());
            element.addChangeListener(new _styleChangeListener2.default());

            return newPath;
        }

        /**
         * Generate a SVG path String for the specified polyLine.
         * @param {PolyLine} polyLine The polyLine.
         * @return {string} A SVG path string.
         */

    }, {
        key: 'generatePath',
        value: function generatePath(polyLine) {
            if (!(polyLine instanceof _polyline2.default)) {
                throw "The argument must be an instance of PolyLine.";
            }
            var path = "M";
            for (var i = 0; i < polyLine.countPoints(); i++) {
                path += polyLine.points[i].x + " " + polyLine.points[i].y;
                if (polyLine.curve && polyLine.countPoints() > 2) {
                    if (i == 0) {
                        path += " S";
                    } else {
                        path += "  ";
                    }
                } else {
                    path += " L";
                }
            }
            return path.substring(0, path.length - 2);
        }
    }]);

    return DefaultPolyLineDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultPolyLineDrawer;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _rectangleDimensionChangeListener = __webpack_require__(53);

var _rectangleDimensionChangeListener2 = _interopRequireDefault(_rectangleDimensionChangeListener);

var _rectanglePositionChangeListener = __webpack_require__(54);

var _rectanglePositionChangeListener2 = _interopRequireDefault(_rectanglePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

    /**
     * Draw a rectangle on a SVG area and return the generated SVG element.
     * @param {Rectangle} element The rectangle to be drawn.
     * @return {SVGRectElement} A SVG rectangle element.
     */


    _createClass(DefaultRectangleDrawer, [{
        key: 'draw',
        value: function draw(element) {
            var newRectangle = document.createElementNS(this.svgArea.namespace, "rect");
            newRectangle.setAttribute("id", element.id);
            newRectangle.setAttribute("x", element.x1);
            newRectangle.setAttribute("y", element.y1);
            newRectangle.setAttribute("width", element.width);
            newRectangle.setAttribute("height", element.height);
            newRectangle.setAttribute("style", element.style.toString());
            newRectangle.setAttribute("shape-rendering", "geometricPrecision");

            //*****************************
            // Add change listener.
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _textDimensionChangeListener = __webpack_require__(56);

var _textDimensionChangeListener2 = _interopRequireDefault(_textDimensionChangeListener);

var _textPositionChangeListener = __webpack_require__(57);

var _textPositionChangeListener2 = _interopRequireDefault(_textPositionChangeListener);

var _textChangeListener = __webpack_require__(55);

var _textChangeListener2 = _interopRequireDefault(_textChangeListener);

var _fontChangeListener = __webpack_require__(46);

var _fontChangeListener2 = _interopRequireDefault(_fontChangeListener);

var _styleChangeListener = __webpack_require__(8);

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

        /**
         * Draw a text on a SVG area and return the generated SVG element.
         * @param {Text} element The text to be drawn.
         * @return {SVGTextElement} A SVG text element.
         */


        _createClass(DefaultTextDrawer, [{
                key: 'draw',
                value: function draw(element) {
                        var newText = document.createElementNS(this.svgArea.namespace, "text");
                        newText.setAttribute("id", element.id);

                        newText.setAttribute("x", element.x1);
                        // The hanging baseline-alignment was not working equally on all browsers.
                        // Because of that, the alignment was changed to baseline and now the
                        // text must be drawn based on its bottom y coordinate.

                        // 3/4 was used because the bottom-line alignment put the bottom part of
                        // letters such as p and q bellow the line.
                        newText.setAttribute("y", element.y1 + 3 * element.height / 4);

                        newText.setAttribute("font-family", element.fontStyle.family);
                        newText.setAttribute("font-size", element.fontStyle.size);
                        newText.setAttribute("font-weight", element.fontStyle.weight);
                        newText.setAttribute("font-style", element.fontStyle.style);
                        newText.setAttribute("alignment-baseline", "baseline");
                        newText.setAttribute("dominant-baseline", "baseline");
                        newText.setAttribute("text-anchor", "start");
                        newText.setAttribute("style", element.style.toString());
                        newText.setAttribute("text-rendering", "optimizeLegibility");

                        var textNode = document.createTextNode(element.text);
                        newText.appendChild(textNode);

                        //*****************************
                        // Add change listener.
                        element.addChangeListener(new _textChangeListener2.default());
                        element.addChangeListener(new _textDimensionChangeListener2.default());
                        element.addChangeListener(new _textPositionChangeListener2.default());
                        element.addChangeListener(new _fontChangeListener2.default());
                        element.addChangeListener(new _styleChangeListener2.default());

                        return newText;
                }
        }]);

        return DefaultTextDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultTextDrawer;

/***/ }),
/* 71 */
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

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _util = __webpack_require__(2);

var _vgroupChildrenChangeListener = __webpack_require__(58);

var _vgroupChildrenChangeListener2 = _interopRequireDefault(_vgroupChildrenChangeListener);

var _vgroupChangeListener = __webpack_require__(59);

var _vgroupChangeListener2 = _interopRequireDefault(_vgroupChangeListener);

var _vgroupDimensionChangeListener = __webpack_require__(60);

var _vgroupDimensionChangeListener2 = _interopRequireDefault(_vgroupDimensionChangeListener);

var _vgroupFrameChangeListener = __webpack_require__(77);

var _vgroupFrameChangeListener2 = _interopRequireDefault(_vgroupFrameChangeListener);

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

            var lookAndFeel = this.svgArea.lookAndFeel;

            if ((0, _util.isNotNull)(element.frame)) {
                var drawer = lookAndFeel.getDrawerFor(element.frame);
                drawer.svgArea = this.svgArea;
                var drawnFrame = drawer.draw(element.frame);
                element.frame.drawn = drawnFrame;
                newGroup.appendChild(drawnFrame);
            }

            var i = 0;
            for (i = 0; i < element.countChildren(); i++) {
                var child = element.childAt(i);
                newGroup.appendChild(child.drawn);
            }

            //*****************************
            // Add change listener.
            element.addChangeListener(new _vgroupDimensionChangeListener2.default());
            element.addChangeListener(new _vgroupChangeListener2.default());
            element.addChangeListener(new _vgroupChildrenChangeListener2.default(element));
            element.addChangeListener(new _vgroupFrameChangeListener2.default(element));

            return newGroup;
        }
    }]);

    return DefaultVerticalGroupDrawer;
}(_defaultDrawer2.default);

exports.default = DefaultVerticalGroupDrawer;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(2);

var _defaultLookAndFeelFactory = __webpack_require__(25);

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

        if ((0, _util.isNull)(lookAndFeelSingleton)) {
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _circle = __webpack_require__(15);

var _circle2 = _interopRequireDefault(_circle);

var _ellipse = __webpack_require__(17);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _rectangle = __webpack_require__(14);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _text = __webpack_require__(20);

var _text2 = _interopRequireDefault(_text);

var _image = __webpack_require__(18);

var _image2 = _interopRequireDefault(_image);

var _verticalGroup = __webpack_require__(24);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _lookAndFeel = __webpack_require__(72);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _polyline = __webpack_require__(13);

var _polyline2 = _interopRequireDefault(_polyline);

var _boxVerticesDecorator = __webpack_require__(11);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _areaDefaults = __webpack_require__(29);

var _areaDefaults2 = _interopRequireDefault(_areaDefaults);

var _util = __webpack_require__(2);

var _defaultLookAndFeelFactory = __webpack_require__(25);

var _defaultLookAndFeelFactory2 = _interopRequireDefault(_defaultLookAndFeelFactory);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _marker = __webpack_require__(12);

var _marker2 = _interopRequireDefault(_marker);

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

        _this._lookAndFeel = new _defaultLookAndFeelFactory2.default();

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

        _this.addMarkers();
        return _this;
    }

    _createClass(SVGArea, [{
        key: 'addMarkers',
        value: function addMarkers(svg) {
            //*****************************
            // Create a new marker and set its id.

            // Filled Triangle.
            var newModel = new _marker2.default({ id: _marker2.default.FILLED_TRIANGLE, position: _marker2.default.END, type: _marker2.default.FILLED_TRIANGLE });
            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            // Triangle.
            newModel = new _marker2.default({ id: _marker2.default.TRIANGLE, position: _marker2.default.END, type: _marker2.default.TRIANGLE });
            drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);
        }
    }, {
        key: 'addLayer',
        value: function addLayer(layer) {
            layer.onChangeVisibility = this.handleLayerVisibilityChange.bind(this);
            return _get(SVGArea.prototype.__proto__ || Object.getPrototypeOf(SVGArea.prototype), 'addLayer', this).call(this, layer);
        }
    }, {
        key: 'handleLayerVisibilityChange',
        value: function handleLayerVisibilityChange() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                layer = _ref.layer,
                oldValue = _ref.oldValue,
                newValue = _ref.newValue;

            if (oldValue !== newValue) {
                if (newValue === true) {
                    // Make all elements in the layer visible.
                    Object.keys(layer.elements).forEach(function (id) {
                        layer.getElement(id).style.visible = true;
                    });
                } else {
                    // Hide all elements in the layer.
                    Object.keys(layer.elements).forEach(function (id) {
                        layer.getElement(id).style.visible = false;
                    });
                }
            }
        }

        // Callback methods called by HTML SVG element events.

    }, {
        key: 'fireOnClick',
        value: function fireOnClick(event) {
            (0, _util.notifyListeners)({ listener: this._onClick, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnDblClick',
        value: function fireOnDblClick(event) {
            (0, _util.notifyListeners)({ listener: this._onDblClick, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseDown',
        value: function fireOnMouseDown(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseDown, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseMove',
        value: function fireOnMouseMove(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseMove, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'fireOnMouseUp',
        value: function fireOnMouseUp(event) {
            (0, _util.notifyListeners)({ listener: this._onMouseUp, target: this }, event.clientX, event.clientY, event);
        }
    }, {
        key: 'addElement',
        value: function addElement() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                element = _ref2.element,
                layer = _ref2.layer;

            if (!layer || layer === null) {
                layer = this.topLayer;
            }
            element.addTag({ key: _svgAreaConstants2.default.LAYER, value: layer });
            layer.addElement(element);
            return element;
        }
    }, {
        key: 'removeElement',
        value: function removeElement(element) {
            element.getTag(_svgAreaConstants2.default.LAYER).removeElement(element);
            this.svg.removeChild(element.getTag(_svgAreaConstants2.default.DRAWN));
        }

        /**
         * Draw a new circle with the specified parameters.
         */

    }, {
        key: 'circ',
        value: function circ() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                centerX = _ref3.centerX,
                cx = _ref3.cx,
                centerY = _ref3.centerY,
                cy = _ref3.cy,
                x1 = _ref3.x1,
                x = _ref3.x,
                y1 = _ref3.y1,
                y = _ref3.y,
                diameter = _ref3.diameter,
                d = _ref3.d,
                radius = _ref3.radius,
                r = _ref3.r,
                style = _ref3.style,
                _ref3$layer = _ref3.layer,
                layer = _ref3$layer === undefined ? this.topLayer : _ref3$layer;

            //*****************************
            // Create a new circle and set its id.
            var newModel = new (Function.prototype.bind.apply(_circle2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newModel.id = this.generateElementId();

            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            newModel.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawn });

            this.registerEvents(newModel, drawn);

            return this.addElement({ element: newModel, layer: layer });
        }

        /**
         * @see {@link circ}
         */

    }, {
        key: 'circle',
        value: function circle() {
            return this.circ.apply(this, arguments);
        }

        /**
         * Draw a new ellipse with the specified parameters.
         */

    }, {
        key: 'ellipse',
        value: function ellipse() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                centerX = _ref4.centerX,
                cx = _ref4.cx,
                centerY = _ref4.centerY,
                cy = _ref4.cy,
                x = _ref4.x,
                x1 = _ref4.x1,
                y = _ref4.y,
                y1 = _ref4.y1,
                x2 = _ref4.x2,
                y2 = _ref4.y2,
                width = _ref4.width,
                w = _ref4.w,
                height = _ref4.height,
                h = _ref4.h,
                dx = _ref4.dx,
                diameterX = _ref4.diameterX,
                radiusX = _ref4.radiusX,
                rx = _ref4.rx,
                dy = _ref4.dy,
                diameterY = _ref4.diameterY,
                radiusY = _ref4.radiusY,
                ry = _ref4.ry,
                style = _ref4.style,
                preserveAspectRatio = _ref4.preserveAspectRatio,
                _ref4$layer = _ref4.layer,
                layer = _ref4$layer === undefined ? this.topLayer : _ref4$layer;

            //*****************************
            // Create a new ellipse and set its id.
            var newEllipse = new (Function.prototype.bind.apply(_ellipse2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newEllipse.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newEllipse);
            drawer.svgArea = this;
            var drawnEllipse = drawer.draw(newEllipse);
            this.svg.appendChild(drawnEllipse);

            newEllipse.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnEllipse });

            this.registerEvents(newEllipse, drawnEllipse);

            return this.addElement({ element: newEllipse, layer: layer });
        }

        /**
         * Draw a new rectangle with the specified parameters.
         */

    }, {
        key: 'rect',
        value: function rect() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x1 = _ref5.x1,
                x = _ref5.x,
                y1 = _ref5.y1,
                y = _ref5.y,
                x2 = _ref5.x2,
                y2 = _ref5.y2,
                width = _ref5.width,
                w = _ref5.w,
                height = _ref5.height,
                h = _ref5.h,
                style = _ref5.style,
                preserveAspectRatio = _ref5.preserveAspectRatio,
                _ref5$layer = _ref5.layer,
                layer = _ref5$layer === undefined ? this.topLayer : _ref5$layer;

            //*****************************
            // Create a new rectangle and set its id.
            var newRectangle = new (Function.prototype.bind.apply(_rectangle2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newRectangle.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newRectangle);
            drawer.svgArea = this;
            var drawnRectangle = drawer.draw(newRectangle);
            this.svg.appendChild(drawnRectangle);

            newRectangle.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnRectangle });

            this.registerEvents(newRectangle, drawnRectangle);

            return this.addElement({ element: newRectangle, layer: layer });
        }

        /**
         * @see {@link rect}
         */

    }, {
        key: 'rectangle',
        value: function rectangle() {
            return this.rect.apply(this, arguments);
        }

        /**
         * Draw a new diamond with the specified parameters.
         */

    }, {
        key: 'diamond',
        value: function diamond() {
            var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x1 = _ref6.x1,
                x = _ref6.x,
                y1 = _ref6.y1,
                y = _ref6.y,
                x2 = _ref6.x2,
                width = _ref6.width,
                w = _ref6.w,
                y2 = _ref6.y2,
                height = _ref6.height,
                h = _ref6.h,
                style = _ref6.style,
                preserveAspectRatio = _ref6.preserveAspectRatio,
                _ref6$layer = _ref6.layer,
                layer = _ref6$layer === undefined ? this.topLayer : _ref6$layer;

            // Create a new diamond and set its id.
            var newDiamond = new (Function.prototype.bind.apply(_diamond2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newDiamond.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newDiamond);
            drawer.svgArea = this;
            var drawnDiamond = drawer.draw(newDiamond);
            this.svg.appendChild(drawnDiamond);

            newDiamond.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnDiamond });

            this.registerEvents(newDiamond, drawnDiamond);

            return this.addElement({ element: newDiamond, layer: layer });
        }

        /**
         * Draw a new text with the specified parameters.
         */

    }, {
        key: 'txt',
        value: function txt() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x1 = _ref7.x1,
                x = _ref7.x,
                y1 = _ref7.y1,
                y = _ref7.y,
                _ref7$text = _ref7.text,
                text = _ref7$text === undefined ? "Default text" : _ref7$text,
                style = _ref7.style,
                fontStyle = _ref7.fontStyle,
                _ref7$layer = _ref7.layer,
                layer = _ref7$layer === undefined ? this.topLayer : _ref7$layer;

            //*****************************
            // Create a new text and set its id.
            var newText = new (Function.prototype.bind.apply(_text2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newText.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newText);
            drawer.svgArea = this;
            var drawnText = drawer.draw(newText);
            this.svg.appendChild(drawnText);

            newText.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnText });
            newText.text = text; // Recalculate the text width calling a listener.

            this.registerEvents(newText, drawnText);

            return this.addElement({ element: newText, layer: layer });
        }

        /**
         * @see {@link txt}
         */

    }, {
        key: 'text',
        value: function text() {
            return this.txt.apply(this, arguments);
        }

        /**
         * Draw a new image with the specified parameters.
         */

    }, {
        key: 'img',
        value: function img() {
            var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                id = _ref8.id,
                x1 = _ref8.x1,
                x = _ref8.x,
                y1 = _ref8.y1,
                y = _ref8.y,
                x2 = _ref8.x2,
                y2 = _ref8.y2,
                width = _ref8.width,
                w = _ref8.w,
                height = _ref8.height,
                h = _ref8.h,
                style = _ref8.style,
                preserveAspectRatio = _ref8.preserveAspectRatio,
                image = _ref8.image,
                _img = _ref8.img,
                _ref8$layer = _ref8.layer,
                layer = _ref8$layer === undefined ? this.topLayer : _ref8$layer;

            //*****************************
            // Create a new image and set its id.
            var newImage = new (Function.prototype.bind.apply(_image2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newImage.id = this.generateElementId();

            var lookAndFeel = new _lookAndFeel2.default();
            var drawer = lookAndFeel.getDrawerFor(newImage);
            drawer.svgArea = this;
            var drawnImage = drawer.draw(newImage);
            this.svg.appendChild(drawnImage);

            newImage.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawnImage });

            this.registerEvents(newImage, drawnImage);

            return this.addElement({ element: newImage, layer: layer });
        }

        /**
         * @see {@link img}
         */

    }, {
        key: 'image',
        value: function image() {
            return this.img.apply(this, arguments);
        }

        /**
         * Draw a new vertical group with the specified parameters.
         */

    }, {
        key: 'vGroup',
        value: function vGroup() {
            var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                x1 = _ref9.x1,
                x = _ref9.x,
                y1 = _ref9.y1,
                y = _ref9.y,
                style = _ref9.style,
                groupStyle = _ref9.groupStyle,
                _ref9$layer = _ref9.layer,
                layer = _ref9$layer === undefined ? this.topLayer : _ref9$layer;

            //*****************************
            // Create a new vertical group and set its id.
            var newModel = new (Function.prototype.bind.apply(_verticalGroup2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newModel.id = this.generateElementId();

            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            newModel.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawn });

            this.registerEvents(newModel, drawn);

            return this.addElement({ element: newModel, layer: layer });
        }

        /**
         * @see {@link vGroup}
         */

    }, {
        key: 'verticalGroup',
        value: function verticalGroup() {
            return this.vGroup.apply(this, arguments);
        }

        /**
         * Draw a new line with the specified parameters.
         */

    }, {
        key: 'line',
        value: function line() {
            var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                id = _ref10.id,
                x1 = _ref10.x1,
                x = _ref10.x,
                y1 = _ref10.y1,
                y = _ref10.y,
                x2 = _ref10.x2,
                y2 = _ref10.y2,
                style = _ref10.style,
                _ref10$layer = _ref10.layer,
                layer = _ref10$layer === undefined ? this.topLayer : _ref10$layer;

            //*****************************
            // Create a new line and set its id.
            var newModel = new (Function.prototype.bind.apply(_line2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newModel.id = this.generateElementId();

            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            newModel.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawn });

            this.registerEvents(newModel, drawn);

            return this.addElement({ element: newModel, layer: layer });
        }

        /**
         * Draw a new polyline with the specified parameters.
         * @param layer
         * @param style
         * @param pairsOfCoordinates
         */

    }, {
        key: 'polyLine',
        value: function polyLine() {
            var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref11$layer = _ref11.layer,
                layer = _ref11$layer === undefined ? this.topLayer : _ref11$layer,
                style = _ref11.style,
                initialMarker = _ref11.initialMarker,
                endMarker = _ref11.endMarker,
                curve = _ref11.curve;

            //*****************************
            // Create a new line and set its id.
            var newModel = new (Function.prototype.bind.apply(_polyline2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newModel.id = this.generateElementId();

            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            newModel.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawn });

            this.registerEvents(newModel, drawn);

            return this.addElement({ element: newModel, layer: layer });
        }
    }, {
        key: 'boxVerticesDecorator',
        value: function boxVerticesDecorator() {
            var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                decorated = _ref12.decorated,
                topLeft = _ref12.topLeft,
                topRight = _ref12.topRight,
                bottomLeft = _ref12.bottomLeft,
                bottomRight = _ref12.bottomRight,
                vertexSize = _ref12.vertexSize,
                layer = _ref12.layer;

            //*****************************
            // Create a new box vertices decorator and set its id based on the decorated id.
            var newModel = new (Function.prototype.bind.apply(_boxVerticesDecorator2.default, [null].concat(Array.prototype.slice.call(arguments))))();
            newModel.id = this.generateElementId();

            var drawer = this.lookAndFeel.getDrawerFor(newModel);
            drawer.svgArea = this;
            var drawn = drawer.draw(newModel);
            this.svg.appendChild(drawn);

            newModel.addTag({ key: _svgAreaConstants2.default.DRAWN, value: drawn });
            newModel.notifyListeners(_changeListenerConstants2.default.POSITION, _changeListenerConstants2.default.DIMENSION);

            this.registerEvents(newModel, drawn);

            return this.addElement({ element: newModel, layer: layer });
        }

        /**
         * @private
         * Register events for the drawn and the model.
         * @param model The model.
         * @param drawn The drawn.
         */

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
        key: 'lookAndFeel',
        get: function get() {
            return this._lookAndFeel;
        }

        // TODO: Change all drawings when the look and feel is changed.
        ,
        set: function set(value) {
            this._lookAndFeel = value;
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
    }]);

    return SVGArea;
}(_areaDefaults2.default);

exports.default = SVGArea;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResizePolicy = exports.VerticalGravity = exports.HorizontalGravity = exports.Marker = exports.GraphicalElement = exports.BoxVerticesDecorator = exports.Ellipse = exports.Area = exports.SVGArea = exports.VerticalGroup = exports.GroupStyle = exports.FontStyle = exports.Style = undefined;

var _util = __webpack_require__(2);

var _util2 = _interopRequireDefault(_util);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _marker = __webpack_require__(12);

var _marker2 = _interopRequireDefault(_marker);

var _boundingBox = __webpack_require__(9);

var _boundingBox2 = _interopRequireDefault(_boundingBox);

var _graphicalElement = __webpack_require__(4);

var _graphicalElement2 = _interopRequireDefault(_graphicalElement);

var _layer = __webpack_require__(28);

var _layer2 = _interopRequireDefault(_layer);

var _areaDefaults = __webpack_require__(29);

var _areaDefaults2 = _interopRequireDefault(_areaDefaults);

var _boxVerticesDecorator = __webpack_require__(11);

var _boxVerticesDecorator2 = _interopRequireDefault(_boxVerticesDecorator);

var _circle = __webpack_require__(15);

var _circle2 = _interopRequireDefault(_circle);

var _diamond = __webpack_require__(16);

var _diamond2 = _interopRequireDefault(_diamond);

var _ellipse = __webpack_require__(17);

var _ellipse2 = _interopRequireDefault(_ellipse);

var _image = __webpack_require__(18);

var _image2 = _interopRequireDefault(_image);

var _line = __webpack_require__(19);

var _line2 = _interopRequireDefault(_line);

var _point = __webpack_require__(30);

var _point2 = _interopRequireDefault(_point);

var _polyline = __webpack_require__(13);

var _polyline2 = _interopRequireDefault(_polyline);

var _rectangle = __webpack_require__(14);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _fontStyle = __webpack_require__(31);

var _fontStyle2 = _interopRequireDefault(_fontStyle);

var _text = __webpack_require__(20);

var _text2 = _interopRequireDefault(_text);

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _horizontalGravity = __webpack_require__(21);

var _horizontalGravity2 = _interopRequireDefault(_horizontalGravity);

var _verticalGravity = __webpack_require__(22);

var _verticalGravity2 = _interopRequireDefault(_verticalGravity);

var _resizePolicy = __webpack_require__(23);

var _resizePolicy2 = _interopRequireDefault(_resizePolicy);

var _verticalGroupChild = __webpack_require__(32);

var _verticalGroupChild2 = _interopRequireDefault(_verticalGroupChild);

var _verticalGroupStyleChangeListener = __webpack_require__(33);

var _verticalGroupStyleChangeListener2 = _interopRequireDefault(_verticalGroupStyleChangeListener);

var _verticalGroupChildChangeListener = __webpack_require__(75);

var _verticalGroupChildChangeListener2 = _interopRequireDefault(_verticalGroupChildChangeListener);

var _verticalGroupFrameChangeListener = __webpack_require__(34);

var _verticalGroupFrameChangeListener2 = _interopRequireDefault(_verticalGroupFrameChangeListener);

var _groupStyle = __webpack_require__(35);

var _groupStyle2 = _interopRequireDefault(_groupStyle);

var _verticalGroup = __webpack_require__(24);

var _verticalGroup2 = _interopRequireDefault(_verticalGroup);

var _boxVerticesDecoratorDecoratedPositionChangeListener = __webpack_require__(36);

var _boxVerticesDecoratorDecoratedPositionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedPositionChangeListener);

var _boxVerticesDecoratorDecoratedRotationChangeListener = __webpack_require__(37);

var _boxVerticesDecoratorDecoratedRotationChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedRotationChangeListener);

var _boxVerticesDecoratorDecoratedDimensionChangeListener = __webpack_require__(38);

var _boxVerticesDecoratorDecoratedDimensionChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorDecoratedDimensionChangeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _boxVerticesDecoratorChangeListener = __webpack_require__(39);

var _boxVerticesDecoratorChangeListener2 = _interopRequireDefault(_boxVerticesDecoratorChangeListener);

var _generalDimensionChangeListener = __webpack_require__(6);

var _generalDimensionChangeListener2 = _interopRequireDefault(_generalDimensionChangeListener);

var _generalPositionChangeListener = __webpack_require__(7);

var _generalPositionChangeListener2 = _interopRequireDefault(_generalPositionChangeListener);

var _generalRotationChangeListener = __webpack_require__(76);

var _generalRotationChangeListener2 = _interopRequireDefault(_generalRotationChangeListener);

var _circleDimensionChangeListener = __webpack_require__(40);

var _circleDimensionChangeListener2 = _interopRequireDefault(_circleDimensionChangeListener);

var _circlePositionChangeListener = __webpack_require__(41);

var _circlePositionChangeListener2 = _interopRequireDefault(_circlePositionChangeListener);

var _diamondDimensionChangeListener = __webpack_require__(42);

var _diamondDimensionChangeListener2 = _interopRequireDefault(_diamondDimensionChangeListener);

var _diamondPositionChangeListener = __webpack_require__(43);

var _diamondPositionChangeListener2 = _interopRequireDefault(_diamondPositionChangeListener);

var _ellipseDimensionChangeListener = __webpack_require__(44);

var _ellipseDimensionChangeListener2 = _interopRequireDefault(_ellipseDimensionChangeListener);

var _ellipsePositionChangeListener = __webpack_require__(45);

var _ellipsePositionChangeListener2 = _interopRequireDefault(_ellipsePositionChangeListener);

var _fontChangeListener = __webpack_require__(46);

var _fontChangeListener2 = _interopRequireDefault(_fontChangeListener);

var _imageDimensionChangeListener = __webpack_require__(47);

var _imageDimensionChangeListener2 = _interopRequireDefault(_imageDimensionChangeListener);

var _imagePositionChangeListener = __webpack_require__(48);

var _imagePositionChangeListener2 = _interopRequireDefault(_imagePositionChangeListener);

var _lineDimensionChangeListener = __webpack_require__(49);

var _lineDimensionChangeListener2 = _interopRequireDefault(_lineDimensionChangeListener);

var _linePositionChangeListener = __webpack_require__(50);

var _linePositionChangeListener2 = _interopRequireDefault(_linePositionChangeListener);

var _polylineDimensionChangeListener = __webpack_require__(51);

var _polylineDimensionChangeListener2 = _interopRequireDefault(_polylineDimensionChangeListener);

var _polylinePositionChangeListener = __webpack_require__(52);

var _polylinePositionChangeListener2 = _interopRequireDefault(_polylinePositionChangeListener);

var _rectangleDimensionChangeListener = __webpack_require__(53);

var _rectangleDimensionChangeListener2 = _interopRequireDefault(_rectangleDimensionChangeListener);

var _rectanglePositionChangeListener = __webpack_require__(54);

var _rectanglePositionChangeListener2 = _interopRequireDefault(_rectanglePositionChangeListener);

var _styleChangeListener = __webpack_require__(8);

var _styleChangeListener2 = _interopRequireDefault(_styleChangeListener);

var _textChangeListener = __webpack_require__(55);

var _textChangeListener2 = _interopRequireDefault(_textChangeListener);

var _textDimensionChangeListener = __webpack_require__(56);

var _textDimensionChangeListener2 = _interopRequireDefault(_textDimensionChangeListener);

var _textPositionChangeListener = __webpack_require__(57);

var _textPositionChangeListener2 = _interopRequireDefault(_textPositionChangeListener);

var _vgroupChildrenChangeListener = __webpack_require__(58);

var _vgroupChildrenChangeListener2 = _interopRequireDefault(_vgroupChildrenChangeListener);

var _vgroupChangeListener = __webpack_require__(59);

var _vgroupChangeListener2 = _interopRequireDefault(_vgroupChangeListener);

var _vgroupDimensionChangeListener = __webpack_require__(60);

var _vgroupDimensionChangeListener2 = _interopRequireDefault(_vgroupDimensionChangeListener);

var _defaultDrawer = __webpack_require__(5);

var _defaultDrawer2 = _interopRequireDefault(_defaultDrawer);

var _defaultMarkerDrawer = __webpack_require__(61);

var _defaultMarkerDrawer2 = _interopRequireDefault(_defaultMarkerDrawer);

var _defaultBoxVerticesDecoratorDrawer = __webpack_require__(62);

var _defaultBoxVerticesDecoratorDrawer2 = _interopRequireDefault(_defaultBoxVerticesDecoratorDrawer);

var _defaultCircleDrawer = __webpack_require__(63);

var _defaultCircleDrawer2 = _interopRequireDefault(_defaultCircleDrawer);

var _defaultDiamondDrawer = __webpack_require__(64);

var _defaultDiamondDrawer2 = _interopRequireDefault(_defaultDiamondDrawer);

var _defaultEllipseDrawer = __webpack_require__(65);

var _defaultEllipseDrawer2 = _interopRequireDefault(_defaultEllipseDrawer);

var _defaultImageDrawer = __webpack_require__(66);

var _defaultImageDrawer2 = _interopRequireDefault(_defaultImageDrawer);

var _defaultLineDrawer = __webpack_require__(67);

var _defaultLineDrawer2 = _interopRequireDefault(_defaultLineDrawer);

var _defaultPolylineDrawer = __webpack_require__(68);

var _defaultPolylineDrawer2 = _interopRequireDefault(_defaultPolylineDrawer);

var _defaultRectangleDrawer = __webpack_require__(69);

var _defaultRectangleDrawer2 = _interopRequireDefault(_defaultRectangleDrawer);

var _defaultTextDrawer = __webpack_require__(70);

var _defaultTextDrawer2 = _interopRequireDefault(_defaultTextDrawer);

var _defaultVerticalGroupDrawer = __webpack_require__(71);

var _defaultVerticalGroupDrawer2 = _interopRequireDefault(_defaultVerticalGroupDrawer);

var _defaultLookAndFeelFactory = __webpack_require__(25);

var _defaultLookAndFeelFactory2 = _interopRequireDefault(_defaultLookAndFeelFactory);

var _lookAndFeel = __webpack_require__(72);

var _lookAndFeel2 = _interopRequireDefault(_lookAndFeel);

var _svgArea = __webpack_require__(73);

var _svgArea2 = _interopRequireDefault(_svgArea);

var _area = __webpack_require__(78);

var _area2 = _interopRequireDefault(_area);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DefaultDrawer, CircleDimensionChangeListener, CirclePositionChangeListener, and StyleChangeListener.
// DefaultDrawer and Marker.
// GeneralDimensionChangeListener.

// 

// GeneralDimensionChangeListener.
// GeneralDimensionChangeListener.
// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.

// GeneralDimensionChangeListener.
// SVGAreaConstants and GeneralDimensionChangeListener.
// SVGAreaConstants and GeneralDimensionChangeListener.
// GeneralDimensionChangeListener.
// SVGAreaConstants and GeneralPositionChangeListener.

// SVGAreaConstants and GeneralPositionChangeListener.

// SVGAreaConstants and GeneralPositionChangeListener.

// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.

// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.
// GraphicalElement, ChangeListenerConstants, GraphicalElement, and ChangeListener.
// GraphicalElement, BoundingBox, ChangeListenerConstants, GroupStyle, and VerticalGroupChildChangeListener.
// ChangeListener.
// ChangeListener.
// No dependencies.
// No dependencies.
// GraphicalElement, Style, ChangeListenerConstants, and FontStyle.
// GraphicalElement.
// Util.
// GraphicalElement and Util.
// GraphicalElement and BoundingBox.
// GraphicalElement and Util.
// GraphicalElement and Util.
// Util.
// ChangeListenerConstants.


// Graphical primitives.
exports.Style = _style2.default;
exports.FontStyle = _fontStyle2.default;
exports.GroupStyle = _groupStyle2.default;
exports.VerticalGroup = _verticalGroup2.default;
exports.SVGArea = _svgArea2.default;
exports.Area = _area2.default;
exports.Ellipse = _ellipse2.default;
exports.BoxVerticesDecorator = _boxVerticesDecorator2.default;
exports.GraphicalElement = _graphicalElement2.default;
exports.Marker = _marker2.default;
exports.HorizontalGravity = _horizontalGravity2.default;
exports.VerticalGravity = _verticalGravity2.default;
exports.ResizePolicy = _resizePolicy2.default;
// export { A, B, C, D, E, ... }
// DefaultDrawer, Rectangle, Style, BoxVerticesDecorator, BoxVerticesDecoratorChangeListener, BoxVerticesDecoratorDecoratedRotationChangeListener, BoxVerticesDecoratorDecoratedPositionChangeListener, BoxVerticesDecoratorDecoratedDimensionChangeListener, GraphicalElement, ChangeListenerConstants, and SVGAreaConstants.
// No dependencies.
// ChangeListener, SVGAreaConstants, ChangeListenerConstants.
// SVGAreaConstants and GeneralPositionChangeListener.

// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.
// GeneralPositionChangeListener.

// SVGAreaConstants and GeneralPositionChangeListener.

// SVGAreaConstants and GeneralPositionChangeListener.

// GeneralPositionChangeListener.

// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.

// SVGAreaConstants and GeneralDimensionChangeListener.
// SVGAreaConstants and GeneralDimensionChangeListener.
// SVGAreaConstants and GeneralDimensionChangeListener.
// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.
// ChangeListener, SVGAreaConstants, and ChangeListenerConstants.
// GraphicalElement, ChangeListenerConstants, GraphicalElement, and ChangeListener.

// SVG implementation.
// GraphicalElement, ChangeListenerConstants, GraphicalElement, and ChangeListener.
// ChangeListenerConstants and Util.
// ChangeListener.
// HorizontalGravity, ResizePolicy, and Util.
// No dependencies.
// No dependencies.
// ChangeListenerConstants.
// BoundingBox, Style, Point and GraphicalElement.
// GraphicalElement.
// GraphicalElement, BoundingBox, ChangeListenerConstants, and Util.
// GraphicalElement, BoundingBox, ChangeListenerConstants, and Util.
// Layer and Util.
// BoundingBox, Style, ChangeListenerConstants, and Util.
// No dependencies.
// No dependencies.
// Util.

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import VerticalGroup from "../vertical-group";

var VerticalGroupChildChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupChildChangeListener, _ChangeListener);

    function VerticalGroupChildChangeListener(vGroup) {
        _classCallCheck(this, VerticalGroupChildChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupChildChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupChildChangeListener)).call(this));
        // To avoid a circular dependence when importing.
        /*
                if (!(vGroup instanceof VerticalGroup)) {
                    throw "The argument must be an instance of VerticalGroup or one of its subclasses.";
                }
        */

        _this._vGroup = vGroup;
        return _this;
    }

    _createClass(VerticalGroupChildChangeListener, [{
        key: 'update',
        value: function update(target) {
            this.vGroup.readjustDimensions();
        }
    }, {
        key: 'vGroup',
        get: function get() {
            return this._vGroup;
        },
        set: function set(value) {
            this._vGroup = value;
        }
    }]);

    return VerticalGroupChildChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupChildChangeListener;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneralRotationChangeListener = function (_ChangeListener) {
    _inherits(GeneralRotationChangeListener, _ChangeListener);

    function GeneralRotationChangeListener() {
        _classCallCheck(this, GeneralRotationChangeListener);

        return _possibleConstructorReturn(this, (GeneralRotationChangeListener.__proto__ || Object.getPrototypeOf(GeneralRotationChangeListener)).call(this, _changeListenerConstants2.default.ROTATION));
    }

    _createClass(GeneralRotationChangeListener, [{
        key: 'update',
        value: function update(target) {
            target.getTag(_svgAreaConstants2.default.DRAWN).setAttribute("transform", "rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
        }
    }]);

    return GeneralRotationChangeListener;
}(_changeListener2.default);

exports.default = GeneralRotationChangeListener;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _changeListener = __webpack_require__(3);

var _changeListener2 = _interopRequireDefault(_changeListener);

var _svgAreaConstants = __webpack_require__(1);

var _svgAreaConstants2 = _interopRequireDefault(_svgAreaConstants);

var _changeListenerConstants = __webpack_require__(0);

var _changeListenerConstants2 = _interopRequireDefault(_changeListenerConstants);

var _util = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalGroupFrameChangeListener = function (_ChangeListener) {
    _inherits(VerticalGroupFrameChangeListener, _ChangeListener);

    function VerticalGroupFrameChangeListener(vGroup) {
        _classCallCheck(this, VerticalGroupFrameChangeListener);

        var _this = _possibleConstructorReturn(this, (VerticalGroupFrameChangeListener.__proto__ || Object.getPrototypeOf(VerticalGroupFrameChangeListener)).call(this, _changeListenerConstants2.default.OTHER));

        _this._vGroup = vGroup;
        return _this;
    }

    _createClass(VerticalGroupFrameChangeListener, [{
        key: 'update',
        value: function update(target) {
            var newGroup = this.vGroup.getTag(_svgAreaConstants2.default.DRAWN);
            if ((0, _util.isNotNull)(this.vGroup.frame) && this.vGroup !== this.vGroup.frame.getTag(VerticalGroupFrameChangeListener.DRAWN_FRAME)) {
                newGroup.insertBefore(this.vGroup.frame.getTag(_svgAreaConstants2.default.DRAWN), newGroup.firstChild);
                this.vGroup.frame.addTag({ key: VerticalGroupFrameChangeListener.DRAWN_FRAME, value: newGroup });
            }
        }
    }, {
        key: 'vGroup',
        get: function get() {
            return this._vGroup;
        },
        set: function set(value) {
            this._vGroup = value;
        }
    }], [{
        key: 'DRAWN_FRAME',
        get: function get() {
            return "VERTICAL_GROUP_DRAWN_FRAME";
        }
    }]);

    return VerticalGroupFrameChangeListener;
}(_changeListener2.default);

exports.default = VerticalGroupFrameChangeListener;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _svgArea = __webpack_require__(73);

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