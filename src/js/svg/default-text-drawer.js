/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import TextDimensionChangeListener from "./text-dimension-change-listener";
import TextPositionChangeListener from "./text-position-change-listener";
import TextChangeListener from "./text-change-listener";
import FontChangeListener from "./font-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultTextDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        let newText = document.createElementNS(this.svgArea.namespace, "text");
        newText.setAttribute("id", element.id);

        newText.setAttribute("x", element.x);
        // The hanging baseline-alignment was not working equally on all browsers.
        // Because of that, the alignment was changed to baseline and now the
        // text must be drawn based on its bottom y coordinate.

        // 3/4 was used because the bottom-line alignment put the bottom part of
        // letters such as p and q bellow the line.
        newText.setAttribute("y", element.y + 3 * element.height / 4);

        newText.setAttribute("font-family", element.fontStylingAttributes.family);
        newText.setAttribute("font-size", element.fontStylingAttributes.size);
        newText.setAttribute("font-weight", element.fontStylingAttributes.weight);
        newText.setAttribute("font-style", element.fontStylingAttributes.style);
        newText.setAttribute("alignment-baseline", "baseline");
        newText.setAttribute("dominant-baseline", "baseline");
        newText.setAttribute("text-anchor", "start");
        newText.setAttribute("style", element.stylingAttributes.toString());
        newText.setAttribute("text-rendering", "optimizeLegibility");

        var textNode = document.createTextNode(element.text);
        newText.appendChild(textNode);

        //*****************************
        // Add change listeners.
        element.addChangeListener(new TextDimensionChangeListener());
        element.addChangeListener(new TextPositionChangeListener());
        element.addChangeListener(new TextChangeListener());
        element.addChangeListener(new FontChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newText;
    }

}