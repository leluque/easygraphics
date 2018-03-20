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
import {toRadians} from "./util";

/**
 * This class implements two dimensional points.
 */
export default class Point {

    constructor({id, x = 0, y = 0} = {}) {
        this._id = id;
        this._x = x;
        this._y = y;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    /**
     * This method rotates "angle" degrees the point around the specified coordinate.
     * @param centerX The x-coordinate of the rotation center.
     * @param centerY The y-coordinate of the rotation center.
     * @param angle The angle in degrees.
     */
    rotateAround({x, y, angle} = {}) {
        // See https://stackoverflow.com/questions/22491178/how-to-rotate-a-point-around-another-point
        let x1 = this.x - x;
        let y1 = this.y - y;

        let x2 = x1 * Math.cos(toRadians(angle)) - y1 * Math.sin(toRadians(angle));
        let y2 = x1 * Math.sin(toRadians(angle)) + y1 * Math.cos(toRadians(angle));

        this.x = x2 + x;
        this.y = y2 + x;
    }

}