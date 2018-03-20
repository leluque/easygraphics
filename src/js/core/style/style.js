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
import DefaultStyle from "./default-style";

export default class Style extends DefaultStyle {

    constructor({strokeWidth = 2, strokeColor = 'black', fillColor = '#FFFFCC', strokeDashArray, target} = {}) {
        super();
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._target = target;
        this._strokeDashArray = strokeDashArray;
    }

    get strokeWidth() {
        return this._strokeWidth;
    }

    set strokeWidth(value) {
        this._strokeWidth = value;
        this.notifyTarget();
    }

    get strokeColor() {
        return this._strokeColor;
    }

    set strokeColor(value) {
        this._strokeColor = value;
        this.notifyTarget();
    }

    get fillColor() {
        return this._fillColor;
    }

    set fillColor(value) {
        this._fillColor = value;
        this.notifyTarget();
    }

    get strokeDashArray() {
        return this._strokeDashArray;
    }

    set strokeDashArray(value) {
        this._strokeDashArray = value;
    }

    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
    }

    fromJSON(json) {
        this.fillColor = json.fill;
        this.strokeColor = json.stroke;
        this.strokeWidth = json.strokeWidth;
    }

    toJSON() {
        return {
            fill: this.fillColor,
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth
        };
    }

    toString() {
        let style = "stroke:" + this.strokeColor + "; fill: " + this.fillColor + "; stroke-width: " + this.strokeWidth + ";";
        if (this.strokeDashArray !== null) {
            style += " stroke-dasharray: " + this.strokeDashArray + ";";
        }
        style += "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;";
        return style;
    }

    notifyTarget() {
        if (this.target !== undefined && this.target !== null) {
            this.target.notifyListeners(ChangeListenerConstants.STYLING);
        }
    }

}