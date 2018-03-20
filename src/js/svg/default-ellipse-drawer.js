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
import EllipseDimensionChangeListener from "./listener/ellipse-dimension-change-listener";
import EllipsePositionChangeListener from "./listener/ellipse-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultEllipseDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw an ellipse on a SVG area and return the generated SVG element.
     * @param {Ellipse} element The ellipse to be drawn.
     * @return {SVGEllipseElement} A SVG ellipse element.
     */
    draw(element) {
        let newEllipse = document.createElementNS(this.svgArea.namespace, "ellipse");
        newEllipse.setAttribute("id", element.id);
        newEllipse.setAttribute("cx", element.centerX);
        newEllipse.setAttribute("cy", element.centerY);
        newEllipse.setAttribute("rx", element.radiusX);
        newEllipse.setAttribute("ry", element.radiusY);
        newEllipse.setAttribute("style", element.style.toString());
        newEllipse.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listener.
        element.addChangeListener(new EllipseDimensionChangeListener());
        element.addChangeListener(new EllipsePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newEllipse;
    }

}