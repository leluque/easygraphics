/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import CircleDimensionChangeListener from "./circle-dimension-change-listener";
import CirclePositionChangeListener from "./circle-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultCircleDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        let newCircle = document.createElementNS(this.svgArea.namespace, "circle");
        newCircle.setAttribute("id", element.id);
        newCircle.setAttribute("cx", element.centerX);
        newCircle.setAttribute("cy", element.centerY);
        newCircle.setAttribute("r", element.radius);
        newCircle.setAttribute("style", element.stylingAttributes.toString());
        newCircle.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new CircleDimensionChangeListener());
        element.addChangeListener(new CirclePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newCircle;
    }

}