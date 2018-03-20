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
import {getNonNullValue, isNull} from "./util";
import BoundingBox from "./bounding-box";
import ChangeListenerConstants from "./listener/change-listener-constants";

/**
 * This class implements circles.
 * The general circle equation is (x-a)^2 + (y-b)^2 = r^2,
 * where
 * a,b are the x,y coordinates of the circle's center.
 */
export default class Circle
    extends GraphicalElement {

    constructor({id, centerX, cx, centerY, cy, x1, x, y1, y, diameter, d, radius, r, style} = {}) {
        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        if (isNull(radius) && isNull(r)) {
            radius = getNonNullValue(diameter, d, 14) / 2;
        } else {
            radius = getNonNullValue(radius, r);
        }
        if (isNull(centerX) && isNull(cx)) {
            x1 = getNonNullValue((x, x1, 0));
        } else {
            x1 = getNonNullValue(centerX, cx) - radius;
        }
        if (isNull(centerY) && isNull(cy)) {
            y1 = getNonNullValue((y, y1, 0));
        } else {
            y1 = getNonNullValue(centerY, cy) - radius;
        }
        super({
            id: id,
            x1: x1,
            y1: y1,
            x2: x1 + radius * 2,
            y2: y1 + radius * 2,
            style: style,
            preserveAspectRatio: true
        });
    }

    get preserveAspectRatio() {
        return true;
    }

    /**
     * The circle aspect ratio is always true. This method throws an exception.
     * @param {boolean} value true, if the aspect ratio must be preserved. false, otherwise.
     */
    set preserveAspectRatio(value) {
        if (value !== true) {
            throw "The circle aspect ratio has always to be true.";
        }
    }

    get centerX() {
        return (this.x1 + this.x2) / 2;
    }

    get centerY() {
        return (this.y1 + this.y2) / 2;
    }

    get radius() {
        return this.width / 2;
    }

    get width() {
        return super.width;
    }

    set width(value) {
        this.disableChangeNotifications();
        super.height = value;
        super.width = value;
        this.enableChangeNotifications();
        this.notifyListeners(ChangeListenerConstants.DIMENSION);
    }

    get height() {
        return super.height;
    }

    set height(value) {
        this.width = value;
    }

    boundaryX1For(givenY) {
        // The circle equation is (x-a)^2 + (y-b)^2 = r^2
        // (x-a)^2 = r^2 - (y-b)^2
        // x^2 - 2xa + a^2 = r^2 - (y-b)^2
        // x^2 - 2xa + (a^2 -r^2 + (y-b)^2) = 0
        let eqa = 1;
        let eqb = -2 * this.centerX;
        let eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        return (-eqb - sqrtDelta) / (2 * eqa);
    }

    boundaryX2For(givenY) {
        let eqa = 1;
        let eqb = -2 * this.centerX;
        let eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        return (-eqb + sqrtDelta) / (2 * eqa);
    }

    contentBox({width, w, height, h} = {}) {
        // Take into consideration the ratio among width and height.
        // FORMULA:
        // (width/2)^2 + (height/2)^2 = radius^2
        // (width/2)^2 + (width/ratio/2)^2 = radius^2
        // (width/2)^2 + (width/2*ratio)^2 = radius^2
        // if z = width/2 | z^2 + ((1/ratio)*z)^2 = radius^2
        // (1 + (1/ratio)^2) z^2 = radius^2
        // z = sqrt(radius^2/ (1 + (1/ratio)^2))

        width = getNonNullValue(width, w, this.width);
        height = getNonNullValue(height, h, this.height);

        let aspectRatio = width / height;
        let squaredRadius = this.radius * this.radius;
        let halfWidth = Math.sqrt(squaredRadius / (1 + Math.pow(1 / aspectRatio, 2)));
        let halfHeight = halfWidth / aspectRatio;
        let deltaX = this.radius - halfWidth;
        let deltaY = this.radius - halfHeight;

        return new BoundingBox({
            x1: this.x + deltaX,
            y1: this.y + deltaY,
            x2: this.x + width - deltaX,
            y2: this.y + height - deltaY
        });
    }

    widthToFit(boundingBox) {
        if (!(boundingBox instanceof BoundingBox)) {
            throw "The argument must be an instance of BoundingBox";
        }
        return Math.sqrt(Math.pow(boundingBox.width, 2) + Math.pow(boundingBox.height, 2));
    }

    heightToFit(boundingBox) {
        if (!(boundingBox instanceof BoundingBox)) {
            throw "The argument must be an instance of BoundingBox";
        }
        return this.widthToFit(boundingBox);
    }

}