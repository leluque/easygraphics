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
import StyleChangeListener from "./listener/style-change-listener";
import ImagePositionChangeListener from "./listener/image-position-change-listener";
import ImageDimensionChangeListener from "./listener/image-dimension-change-listener";

export default class DefaultImageDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw an image on a SVG area and return the generated SVG element.
     * @param {Image} element The image to be drawn.
     * @return {SVGImageElement} A SVG image element.
     */
    draw(element) {
        let newImage = document.createElementNS(this.svgArea.namespace, "image");
        newImage.setAttribute("id", element.id);
        newImage.setAttribute("x", element.x1);
        newImage.setAttribute("y", element.y1);
        newImage.setAttribute("width", element.width);
        newImage.setAttribute("height", element.height);
        newImage.setAttribute("style", element.style.toString());
        newImage.setAttribute("visibility", "visible");
        newImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', element.image);

        //*****************************
        // Add change listener.
        element.addChangeListener(new ImageDimensionChangeListener());
        element.addChangeListener(new ImagePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newImage;
    }

}