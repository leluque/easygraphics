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

import GraphicalElement from './graphical-element.js';
import Style from "./style/style";
import FontStyle from "./style/font-style";
import ChangeListenerConstants from "./listener/change-listener-constants";

/**
 * This class implements texts.
 */
export default class Text extends GraphicalElement {

    constructor({x1, x, y1, y, text = "Default Text", style = new Style({
        strokeWidth: 0,
        strokeColor: "",
        fillColor: "black"
    }), fontStyle = new FontStyle()} = {}) {

        // The specified value for style was not working when calling with super(...arguments).
        super({
            x1: x1,
            x: x,
            y1: y1,
            y: y,
            text: text,
            style: style
        });
        this.x2 = this.x1 + 7;
        this.y2 = this.y1 + 7;

        this._text = text;
        this._fontStyle = fontStyle;
        if (this._fontStyle !== undefined && this._fontStyle !== null) {
            this._fontStyle.target = this;
        }
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
        this.notifyListeners(ChangeListenerConstants.OTHER);
    }

    get fontStyle() {
        return this._fontStyle;
    }

    set fontStyle(value) {
        // Remove the bidirectional association with this object.
        if (this._fontStyle !== undefined && this._fontStyle !== null) {
            this._fontStyle.target = null;
        }
        this._fontStyle = value;
        if (this._fontStyle !== undefined && this._fontStyle !== null) {
            // Define the bidirectional association with this object.
            this._fontStyle.target = this;
        }
        this.notifyListeners(ChangeListenerConstants.STYLING);
    }

}