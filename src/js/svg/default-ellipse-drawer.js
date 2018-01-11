/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import EllipseDimensionChangeListener from "./ellipse-dimension-change-listener";
import EllipsePositionChangeListener from "./ellipse-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultEllipseDrawer extends DefaultDrawer {

    draw(element) {
        let newEllipse = document.createElementNS(this.svgArea.namespace, "ellipse");
        newEllipse.setAttribute("id", element.id);
        newEllipse.setAttribute("cx", element.centerX);
        newEllipse.setAttribute("cy", element.centerY);
        newEllipse.setAttribute("rx", element.radiusX);
        newEllipse.setAttribute("ry", element.radiusY);
        newEllipse.setAttribute("style", element.stylingAttributes.toString());
        newEllipse.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new EllipseDimensionChangeListener());
        element.addChangeListener(new EllipsePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newEllipse;
    }

}