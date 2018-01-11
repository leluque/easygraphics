/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import RectangleDimensionChangeListener from "./rectangle-dimension-change-listener";
import RectanglePositionChangeListener from "./rectangle-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultRectangleDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        let newRectangle = document.createElementNS(this.svgArea.namespace, "rect");
        newRectangle.setAttribute("id", element.id);
        newRectangle.setAttribute("x", element.x);
        newRectangle.setAttribute("y", element.y);
        newRectangle.setAttribute("width", element.width);
        newRectangle.setAttribute("height", element.height);
        newRectangle.setAttribute("style", element.stylingAttributes.toString());
        newRectangle.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new RectangleDimensionChangeListener());
        element.addChangeListener(new RectanglePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newRectangle;
    }

}