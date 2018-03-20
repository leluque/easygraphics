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
import CircleDimensionChangeListener from "./listener/circle-dimension-change-listener";
import CirclePositionChangeListener from "./listener/circle-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultCircleDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a circle on a SVG area and return the generated SVG element.
     * @param {Circle} element The circle to be drawn.
     * @return {SVGCircleElement} A SVG circle element.
     */
    draw(element) {
        let newCircle = document.createElementNS(this.svgArea.namespace, "circle");
        newCircle.setAttribute("id", element.id);
        newCircle.setAttribute("cx", element.centerX);
        newCircle.setAttribute("cy", element.centerY);
        newCircle.setAttribute("r", element.radius);
        newCircle.setAttribute("style", element.style.toString());
        newCircle.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listener.
        element.addChangeListener(new CircleDimensionChangeListener());
        element.addChangeListener(new CirclePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newCircle;
    }

}