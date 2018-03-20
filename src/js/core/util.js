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

'use strict';

// **********************************************
/**
 * Convert the angle from degrees to radians.
 * @param {number} degrees The angle in degrees.
 * @return {number} The angle in radians.
 */
export function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

/**
 * Convert the angle from radians to degrees.
 * @param {number} radians The angle in radians.
 * @return {number} The angle in degrees.
 */

export function toDegrees(radians) {
    return radians * 180 / Math.PI;
}

// **********************************************

/**
 * Notify the listener and inform the target.
 * @param listener The listener.
 * @param target The target.
 */
export function notifyListeners({listener, target} = {}) {
    if (listener !== undefined && listener !== null) {
        if (typeof(listener) === "function") {
            listener(target, ...Array.prototype.slice.call(arguments, 1));
        } else {
            throw "Callback is not a function: " + typeof(listener);
        }
    }
}

/**
 * Return the arguments received as argument in an array.
 * @see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
 * @return {any[]} An array with the content of arguments.
 */
export function getArgumentsAsArray() {
    var args = new Array(arguments.length);
    for (let i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
    }
    return args;
}

export function getNonNullValue() {
    let args = getArgumentsAsArray(...arguments);
    for (let i = 0; i < args.length; ++i) {
        if (isNotNull(args[i])) {
            return args[i];
        }
    }
}

export function isNotNull(value) {
    return value !== undefined && value !== null; // May be faster than != null.
}

export function isNull(value) {
    return value === undefined || value === null; // May be faster than == null.
}

/**
 * Check whether the informed arguments have more than one value different of null.
 * @return {boolean} true, if the informed arguments have more than one value different of null. false, otherwise.
 */
export function checkRedundantArguments() {
    let args = getArgumentsAsArray(arguments);
    let howMany = 0;
    for (let i = 0; i < args.length; ++i) {
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
export function checkIfNumberOfArgumentsExceed() {
    let args = getArgumentsAsArray(arguments);
    let howMany = 0;
    for (let i = 1; i < args.length; ++i) {
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
export function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

export function isNotInt(value) {
    return !isInt(value);
}

export function isBoolean(value) {
    return typeof(value) == typeof(true);
}

export function isNotBoolean(value) {
    return !isBoolean(value);
}

export function error(message) {
    console.log(message);
    throw message;
}

export function warning(message) {
    console.log(message);
}

export function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

export function isNotANumber(value) {
    return isNaN(parseFloat(value)) || !isFinite(value);
}

export function isNotABoolean(value) {
    return typeof(value) !== typeof(true);
}