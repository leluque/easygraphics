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

import GeneralPositionChangeListener from './general-position-change-listener.js';
import SVGAreaConstants from "../svg-area-constants";

export default class DiamondPositionChangeListener extends GeneralPositionChangeListener {

    changeX(target) {
        this.updateCoordinates(target);
    }

    changeY(target) {
        this.updateCoordinates(target);
    }

    /**
     * @private
     * Update the coordinates of the target diamond.
     * @param {Diamond} target The target diamond.
     */
    updateCoordinates(target) {
        let middleX = target.x + target.width / 2;
        let middleY = target.y + target.height / 2;
        let coordinates = "M " + target.x + "," + middleY;
        coordinates += " " + middleX + "," + target.y;
        coordinates += " " + (target.x + target.width) + "," + middleY;
        coordinates += " " + middleX + "," + (target.y + target.height);
        // The left diamond corner was not being drawn correctly because of the border.
        // To correct that, it was necessary to use the Pythagoras' theorem to move
        // a little bit up.
        let adjustment = Math.sqrt(target.borderSize * target.borderSize / 2);
        coordinates += " " + (target.x - adjustment) + "," + (middleY - adjustment);
        target.getTag(SVGAreaConstants.DRAWN).setAttribute("d", coordinates);
    }

}