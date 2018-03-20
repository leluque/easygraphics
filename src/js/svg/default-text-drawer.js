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
import TextDimensionChangeListener from "./listener/text-dimension-change-listener";
import TextPositionChangeListener from "./listener/text-position-change-listener";
import TextChangeListener from "./listener/text-change-listener";
import FontChangeListener from "./listener/font-change-listener";
import StyleChangeListener from "./listener/style-change-listener";

export default class DefaultTextDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a text on a SVG area and return the generated SVG element.
     * @param {Text} element The text to be drawn.
     * @return {SVGTextElement} A SVG text element.
     */
    draw(element) {
        let newText = document.createElementNS(this.svgArea.namespace, "text");
        newText.setAttribute("id", element.id);

        newText.setAttribute("x", element.x1);
        // The hanging baseline-alignment was not working equally on all browsers.
        // Because of that, the alignment was changed to baseline and now the
        // text must be drawn based on its bottom y coordinate.

        // 3/4 was used because the bottom-line alignment put the bottom part of
        // letters such as p and q bellow the line.
        newText.setAttribute("y", element.y1 + 3 * element.height / 4);

        newText.setAttribute("font-family", element.fontStyle.family);
        newText.setAttribute("font-size", element.fontStyle.size);
        newText.setAttribute("font-weight", element.fontStyle.weight);
        newText.setAttribute("font-style", element.fontStyle.style);
        newText.setAttribute("alignment-baseline", "baseline");
        newText.setAttribute("dominant-baseline", "baseline");
        newText.setAttribute("text-anchor", "start");
        newText.setAttribute("style", element.style.toString());
        newText.setAttribute("text-rendering", "optimizeLegibility");

        var textNode = document.createTextNode(element.text);
        newText.appendChild(textNode);

        //*****************************
        // Add change listener.
        element.addChangeListener(new TextChangeListener());
        element.addChangeListener(new TextDimensionChangeListener());
        element.addChangeListener(new TextPositionChangeListener());
        element.addChangeListener(new FontChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newText;
    }

}