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

import {checkRedundantArguments, getNonNullValue, isNull, error} from "./util";

/**
 * This class implements bounding boxes.
 */
export default class BoundingBox {

    constructor({x1, x, y1, y, x2, width, w, y2, height, h} = {}) {
        // **************************************
        // Check whether there are redundant arguments.
        if (checkRedundantArguments(x1, x)) {
            error("Warning: Both x1 and x were informed.");
        }
        if (checkRedundantArguments(y1, y)) {
            error("Warning: Both y1 and y were informed.");
        }
        if (checkRedundantArguments(x2, width, w)) {
            error("Warning: More than one of the following arguments were informed: x2, width, or w.");
        }
        if (checkRedundantArguments(y2, height, h)) {
            error("Warning: More than one of the following arguments were informed: y2, height, or h.");
        }
        // **************************************
        this._x1 = getNonNullValue(x1, x, 0);
        this._y1 = getNonNullValue(y1, y, 0);

        // x2 has precedence over width and w.
        if (isNull(x2)) {
            if (isNull(width) && isNull(w)) {
                this._x2 = this._x1 + 14;
            } else {
                this._x2 = this._x1 + getNonNullValue(width, w);
            }
        } else {
            this._x2 = x2;
        }
        // Y2 has precedence over height and h.
        if (isNull(y2)) {
            if (isNull(height) && isNull(h)) {
                this._y2 = this._y1 + 14;
            } else {
                this._y2 = this._y1 + getNonNullValue(height, h);
            }
        } else {
            this._y2 = y2;
        }
    }

    get x1() {
        return this._x1;
    }

    set x1(value) {
        if (value > this._x2) {
            throw "x1 must be less than x2";
        }
        this._x1 = value;
    }

    get y1() {
        return this._y1;
    }

    set y1(value) {
        if (value > this._y2) {
            throw "y1 must be less than y2";
        }
        this._y1 = value;
    }

    get x2() {
        return this._x2;
    }

    set x2(value) {
        if (value < this._x1) {
            throw "x2 must be less than x1";
        }
        this._x2 = value;
    }

    get y2() {
        return this._y2;
    }

    set y2(value) {
        if (value < this._y1) {
            throw "y2 must be less than y1";
        }
        this._y2 = value;
    }

    get width() {
        return this.x2 - this.x1;
    }

    get height() {
        return this.y2 - this.y1;
    }

}