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
import LineDimensionChangeListener from "./listener/line-dimension-change-listener";
import LinePositionChangeListener from "./listener/line-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultLineDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a line on a SVG area and return the generated SVG element.
     * @param {Line} element The line to be drawn.
     * @return {SVGLineElement} A SVG line element.
     */
    draw(element) {
        let newLine = document.createElementNS(this.svgArea.namespace, "line");
        newLine.setAttribute("id", element.id);
        // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
        // The difference between no product and * 2 is necessary to center the line.
        newLine.setAttribute("x1", element.x1 + element.borderSize);
        newLine.setAttribute("y1", element.y1 + element.borderSize);
        newLine.setAttribute("x2", element.x2 - element.borderSize);
        newLine.setAttribute("y2", element.y2 - element.borderSize);
        newLine.setAttribute("style", element.style.toString());
        newLine.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listener.
        element.addChangeListener(new LineDimensionChangeListener());
        element.addChangeListener(new LinePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newLine;
    }

}