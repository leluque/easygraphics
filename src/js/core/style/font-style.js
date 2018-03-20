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

import ChangeListenerConstants from "../listener/change-listener-constants";

export default class FontStyle {

    constructor({family = "'Roboto', sans-serif", size = 15, weight = "100", style = "normal", target} = {}) {
        this._family = family;
        this._size = size;
        this._childrenVerWeight = weight;
        this._target = target;
        this._style = style;
    }

    get style() {
        return this._style;
    }

    set style(value) {
        this._style = value;
    }

    get family() {
        return this._family;
    }

    set family(value) {
        this._family = value;
        this.notifyTarget();
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
        this.notifyTarget();
    }

    get weight() {
        return this._childrenVerWeight;
    }

    set weight(value) {
        this._childrenVerWeight = value;
        this.notifyTarget();
    }

    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
        this.notifyTarget();
    }

    notifyTarget() {
        if (this.target !== undefined && this.target !== null) {
            this.target.notifyListeners(ChangeListenerConstants.STYLING);
        }
    }


}