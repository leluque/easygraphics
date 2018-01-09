/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';

export default class DefaultRectangleDrawer extends DefaultDrawer {

    draw(element) {
        let newRectangle = document.createElementNS(this.svgArea.namespace, "rect");
        newRectangle.setAttribute("id", element.id);
        newRectangle.setAttribute("x", element.x);
        newRectangle.setAttribute("y", element.y);
        newRectangle.setAttribute("width", element.width);
        newRectangle.setAttribute("height", element.height);
        newRectangle.setAttribute("style", element.stylingAttributes.toString());
        newRectangle.setAttribute("shape-rendering", "geometricPrecision");
        return newRectangle;
    }

}