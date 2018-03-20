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

import DefaultDrawer from './default-drawer.js';
import DiamondDimensionChangeListener from "./listener/diamond-dimension-change-listener";
import DiamondPositionChangeListener from "./listener/diamond-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultDiamondDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a diamond on a SVG area and return the generated SVG element.
     * @param {Diamond} element The diamond to be drawn.
     * @return {SVGPathElement} A SVG path element.
     */
    draw(element) {
        let newDiamond = document.createElementNS(this.svgArea.namespace, "path");
        newDiamond.setAttribute("id", element.id);
        let middleX = element.x1 + element.width / 2;
        let middleY = element.y1 + element.height / 2;
        let coordinates = "M " + element.x + "," + middleY;
        coordinates += " " + middleX + "," + element.y1;
        coordinates += " " + (element.x1 + element.width) + "," + middleY;
        coordinates += " " + middleX + "," + (element.y1 + element.height);
        // The left diamond corner was not being drawn correctly because of the border.
        // To correct that, it was necessary to use the Pythagoras' theorem to move
        // a little bit up.
        let adjustment = Math.sqrt(element.borderSize * element.borderSize / 2);
        coordinates += " " + (element.x1 - adjustment) + "," + (middleY - adjustment);
        newDiamond.setAttribute("d", coordinates);
        newDiamond.setAttribute("style", element.style.toString());
        newDiamond.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listener.
        element.addChangeListener(new DiamondDimensionChangeListener());
        element.addChangeListener(new DiamondPositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newDiamond;
    }

}