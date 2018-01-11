/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import LineDimensionChangeListener from "./line-dimension-change-listener";
import LinePositionChangeListener from "./line-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultLineDrawer extends DefaultDrawer {

    draw(element) {
        let newLine = document.createElementNS(this.svgArea.namespace, "line");
        newLine.setAttribute("id", element.id);
        // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
        // The difference between no product and * 2 is necessary to center the line.
        newLine.setAttribute("x1", element.x1 + element.borderSize);
        newLine.setAttribute("y1", element.y1 + element.borderSize);
        newLine.setAttribute("x2", element.x2 - element.borderSize);
        newLine.setAttribute("y2", element.y2 - element.borderSize);
        newLine.setAttribute("style", element.stylingAttributes.toString());
        newLine.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new LineDimensionChangeListener());
        element.addChangeListener(new LinePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newLine;
    }

}