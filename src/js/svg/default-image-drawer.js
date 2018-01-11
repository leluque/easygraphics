/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import StyleChangeListener from "./style-change-listener";
import ImagePositionChangeListener from "./image-position-change-listener";
import ImageDimensionChangeListener from "./image-dimension-change-listener";

export default class DefaultImageDrawer extends DefaultDrawer {

    draw(element) {
        let newImage = document.createElementNS(this.svgArea.namespace, "image");
        newImage.setAttribute("id", element.id);
        newImage.setAttribute("x", element.x);
        newImage.setAttribute("y", element.y);
        newImage.setAttribute("width", element.width);
        newImage.setAttribute("height", element.height);
        newImage.setAttribute("style", element.stylingAttributes.toString());
        newImage.setAttribute("visibility", "visible");
        newImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', element.image);

        //*****************************
        // Add change listeners.
        element.addChangeListener(new ImageDimensionChangeListener());
        element.addChangeListener(new ImagePositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newImage;
    }

}