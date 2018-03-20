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
import BoundingBox from './bounding-box.js';
import {getNonNullValue} from "./util";

/**
 * This class implements diamonds.
 */
export default class Diamond extends GraphicalElement {

    constructor({id, x1, x, y1, y, x2, width, w, y2, height, h, style, preserveAspectRatio} = {}) {
        // The arguments validation is done inside the GraphicalElement constructor.
        super(...arguments);
    }

    boundaryX1For(givenY) {
        // Using the line equation for two points:
        // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
        // assuming that a = (y2 - y1)/(x2 - x1)
        // x = x1 + (y - y1)/a;
        let middleY = this.y + this.height / 2;
        //let middleX = this.x + this.width / 2;
        let a = this.height / this.width;
        if (givenY === middleY) { // Middle.
            return this.x;
        } else if (givenY < middleY) { // Use the top "/" line.
            return this.x + (givenY - this.y) / a;
        } else { // Use the bottom "\" line.
            return this.x + (givenY - middleY) / a;
        }
    }

    boundaryX2For(givenY) {
        // Using the line equation for two points:
        // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
        // assuming that a = (y2 - y1)/(x2 - x1)
        // x = x1 + (y - y1)/a;
        let middleY = this.y + this.height / 2;
        let middleX = this.x + this.width / 2;
        let a = this.height / this.width;
        if (givenY === middleY) { // Middle.
            return this.x + this.width;
        } else if (givenY < middleY) { // Use the top "\" line.
            return middleX + (givenY - this.y) / a;
        } else { // Use the bottom "/" line.
            return middleX + (givenY - middleY) / a;
        }
    }

    contentBox({width, w, height, h} = {}) { // For diamonds, it does not matter the current width/height of a group they may be a frame of.
        width = getNonNullValue(width, w, this.width);
        height = getNonNullValue(height, h, this.height);

        let deltaX = width / 4;
        let deltaY = height / 4;
        return new BoundingBox({
            x1: this.x + deltaX,
            y1: this.y + deltaY,
            x2: this.x + width - deltaX,
            y2: this.y + height - deltaY
        });
    }

    widthToFit(boundingBox) {
        return 2 * boundingBox.width;
    }

    heightToFit(boundingBox) {
        return 2 * boundingBox.height;
    }

}