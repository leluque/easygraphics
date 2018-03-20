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
import Marker from '../core/marker.js';

export default class DefaultMarkerDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a text on a SVG area and return the generated SVG element.
     * @param {Marker} element The marker element.
     * @return {SVGMarkerElement} A SVG marker element.
     */
    draw(element) {
        let newMarker = document.createElementNS(this.svgArea.namespace, "marker");
        newMarker.setAttribute("id", element.id);

        if (element.position === Marker.END) {
            if (element.type === Marker.FILLED_TRIANGLE) {
                this.drawEndFilledTriangle(newMarker);
            } else if (element.type === Marker.TRIANGLE) {
                this.drawEndTriangle(newMarker);
            }
        }

        //*****************************
        // Add change listener.

        return newMarker;
    }

    drawEndFilledTriangle(marker) {
        marker.setAttribute("markerWidth", "9");
        marker.setAttribute("markerHeight", "6");
        marker.setAttribute("refX", "0");
        marker.setAttribute("refY", "3");
        marker.setAttribute("orient", "auto");
        marker.setAttribute("markerUnits", "strokeWidth");

        let path = document.createElementNS(this.svgArea.namespace, "path");
        path.setAttribute("d", "M0,0 L0,6 L9,3 z");
        path.setAttribute("fill", "#000");

        marker.appendChild(path);
    }

    drawEndTriangle(marker) {
        marker.setAttribute("markerWidth", "18");
        marker.setAttribute("markerHeight", "12");
        marker.setAttribute("refX", "0");
        marker.setAttribute("refY", "6");
        marker.setAttribute("orient", "auto");
        marker.setAttribute("markerUnits", "strokeWidth");

        let path = document.createElementNS(this.svgArea.namespace, "path");
        path.setAttribute("d", "M0,0 L0,12 L18,6 z");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke", "#000");

        marker.appendChild(path);
    }

}