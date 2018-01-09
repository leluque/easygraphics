/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';

export default class DefaultPolyLineDrawer extends DefaultDrawer {

    draw(element) {
        let newPath = document.createElementNS(this.svgArea.namespace, "path");
        newPath.setAttribute("id", element.id);

        // Construct the path.
        let path = DefaultPolyLineDrawer.generatePath(element);
        console.log(path);

        newPath.setAttribute("d", path);
        newPath.setAttribute("style", element.stylingAttributes.toString());
        newPath.setAttribute("shape-rendering", "geometricPrecision");
        return newPath;
    }

    static generatePath(polyLine) {
        let path = "M";
        for (let i = 0; i < polyLine.countPoints(); i++) {
            path += polyLine.points[i].x + " " + polyLine.points[i].y + " L";
        }
        return path.substring(0, path.length - 2);
    }

}