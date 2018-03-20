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

'use strict';

import HorizontalGravity from "./horizontal-gravity";
import ResizePolicy from "./resize-policy";
import {getNonNullValue} from "./util";

export default class VerticalGroupChild {

    constructor({element, leftMargin, lMargin, rightMargin, rMargin, topMargin, tMargin, bottomMargin, bMargin, horResizingPolicy, hResizingPolicy, horGravity, hGravity, weight, overlap} = {}) {
        this._element = element;
        this._horResizingPolicy = getNonNullValue(horResizingPolicy, hResizingPolicy, ResizePolicy.WRAP_CONTENT);
        this._horGravity = getNonNullValue(horGravity, hGravity, HorizontalGravity.LEFT);
        this._leftMargin = getNonNullValue(leftMargin, lMargin, 0);
        this._rightMargin = getNonNullValue(rightMargin, rMargin, 0);
        this._topMargin = getNonNullValue(topMargin, tMargin, 0);
        this._bottomMargin = getNonNullValue(bottomMargin, bMargin, 0);
        this._weight = weight;
        this._overlap = overlap;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        this._element = value;
    }

    get leftMargin() {
        return this._leftMargin;
    }

    set leftMargin(value) {
        this._leftMargin = value;
    }

    get rightMargin() {
        return this._rightMargin;
    }

    set rightMargin(value) {
        this._rightMargin = value;
    }

    get topMargin() {
        return this._topMargin;
    }

    set topMargin(value) {
        this._topMargin = value;
    }

    get bottomMargin() {
        return this._bottomMargin;
    }

    set bottomMargin(value) {
        this._bottomMargin = value;
    }

    get horResizingPolicy() {
        return this._horResizingPolicy;
    }

    set horResizingPolicy(value) {
        this._horResizingPolicy = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get overlap() {
        return this._overlap;
    }

    set overlap(value) {
        this._overlap = value;
    }

    get horGravity() {
        return this._horGravity;
    }

    set horGravity(value) {
        this._horGravity = value;
    }

    get verMargin() {
        return this.topMargin + this.bottomMargin;
    }

    get horMargin() {
        return this.leftMargin + this.rightMargin;
    }

    get totalHeight() {
        return 2 * this.verMargin + this.element.height;
    }

    get totalWidth() {
        return 2 * this.horMargin + this.element.width;
    }

}