/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';

export default class DefaultCircleDrawer extends DefaultDrawer {

    draw(element) {
        let newCircle = document.createElementNS(this.svgArea.namespace, "circle");
        newCircle.setAttribute("id", element.id);
        newCircle.setAttribute("cx", element.centerX);
        newCircle.setAttribute("cy", element.centerY);
        newCircle.setAttribute("r", element.radius);
        newCircle.setAttribute("style", element.stylingAttributes.toString());
        newCircle.setAttribute("shape-rendering", "geometricPrecision");

        return newCircle;
    }

}