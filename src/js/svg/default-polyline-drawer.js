/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import PolyLineDimensionChangeListener from "./polyline-dimension-change-listener";
import PolyLinePositionChangeListener from "./polyline-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultPolyLineDrawer extends DefaultDrawer {

    static generatePath(polyLine) {
        let path = "M";
        for (let i = 0; i < polyLine.countPoints(); i++) {
            path += polyLine.points[i].x + " " + polyLine.points[i].y + " L";
        }
        return path.substring(0, path.length - 2);
    }

    draw(element) {
        let newPath = document.createElementNS(this.svgArea.namespace, "path");
        newPath.setAttribute("id", element.id);

        // Construct the path.
        let path = DefaultPolyLineDrawer.generatePath(element);

        newPath.setAttribute("d", path);
        newPath.setAttribute("style", element.stylingAttributes.toString());
        newPath.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new PolyLineDimensionChangeListener());
        element.addChangeListener(new PolyLinePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newPath;
    }

}