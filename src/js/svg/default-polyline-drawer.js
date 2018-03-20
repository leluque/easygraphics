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
import PolyLineDimensionChangeListener from "./listener/polyline-dimension-change-listener";
import PolyLinePositionChangeListener from "./listener/polyline-position-change-listener";
import StyleChangeListener from "./listener/style-change-listener";
import PolyLine from "../core/polyline";
import {isNotNull} from "../core/util";

export default class DefaultPolyLineDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a polyLine on a SVG area and return the generated SVG element.
     * @param {PolyLine} element The polyLine to be drawn.
     * @return {SVGPathElement} A SVG path element.
     */
    draw(element) {
        let newPath = document.createElementNS(this.svgArea.namespace, "path");
        newPath.setAttribute("id", element.id);

        // Construct the path.
        let path = this.generatePath(element);

        newPath.setAttribute("d", path);
        newPath.setAttribute("style", element.style.toString());
        newPath.setAttribute("shape-rendering", "geometricPrecision");

        if(isNotNull(element.startMarker)) {
            newPath.setAttribute("marker-start", "url(#" + element.startMarker + ")");
        }
        if(isNotNull(element.endMarker)) {
            newPath.setAttribute("marker-end", "url(#" + element.endMarker + ")");
        }

        //*****************************
        // Add change listener.
        element.addChangeListener(new PolyLineDimensionChangeListener());
        element.addChangeListener(new PolyLinePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newPath;
    }

    /**
     * Generate a SVG path String for the specified polyLine.
     * @param {PolyLine} polyLine The polyLine.
     * @return {string} A SVG path string.
     */
    generatePath(polyLine) {
        if (!(polyLine instanceof PolyLine)) {
            throw "The argument must be an instance of PolyLine.";
        }
        let path = "M";
        for (let i = 0; i < polyLine.countPoints(); i++) {
            path += polyLine.points[i].x + " " + polyLine.points[i].y;
            if(polyLine.curve && polyLine.countPoints() > 2) {
                if(i == 0) {
                    path += " S";
                } else {
                    path += "  ";
                }
            } else {
                path += " L";
            }
        }
        return path.substring(0, path.length - 2);
    }

}