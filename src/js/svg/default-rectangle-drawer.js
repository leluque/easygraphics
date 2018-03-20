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
import RectangleDimensionChangeListener from "./listener/rectangle-dimension-change-listener";
import RectanglePositionChangeListener from "./listener/rectangle-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultRectangleDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a rectangle on a SVG area and return the generated SVG element.
     * @param {Rectangle} element The rectangle to be drawn.
     * @return {SVGRectElement} A SVG rectangle element.
     */
    draw(element) {
        let newRectangle = document.createElementNS(this.svgArea.namespace, "rect");
        newRectangle.setAttribute("id", element.id);
        newRectangle.setAttribute("x", element.x1);
        newRectangle.setAttribute("y", element.y1);
        newRectangle.setAttribute("width", element.width);
        newRectangle.setAttribute("height", element.height);
        newRectangle.setAttribute("style", element.style.toString());
        newRectangle.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listener.
        element.addChangeListener(new RectangleDimensionChangeListener());
        element.addChangeListener(new RectanglePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newRectangle;
    }

}