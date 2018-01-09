/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';

export default class DefaultTextDrawer extends DefaultDrawer {

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

        return newText;
    }

}