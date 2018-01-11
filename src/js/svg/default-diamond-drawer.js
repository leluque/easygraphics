/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import DiamondDimensionChangeListener from "./diamond-dimension-change-listener";
import DiamondPositionChangeListener from "./diamond-position-change-listener";
import StyleChangeListener from "./style-change-listener";

export default class DefaultDiamondDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        let newDiamond = document.createElementNS(this.svgArea.namespace, "path");
        newDiamond.setAttribute("id", element.id);
        let middleX = element.x + element.width / 2;
        let middleY = element.y + element.height / 2;
        let coordinates = "M " + element.x + "," + middleY;
        coordinates += " " + middleX + "," + element.y;
        coordinates += " " + (element.x + element.width) + "," + middleY;
        coordinates += " " + middleX + "," + (element.y + element.height);
        // The left diamond corner was not being drawn correctly because of the border.
        // To correct that, it was necessary to use the Pythagoras' theorem to move
        // a little bit up.
        let adjustment = Math.sqrt(element.borderSize * element.borderSize / 2);
        coordinates += " " + (element.x - adjustment) + "," + (middleY - adjustment);
        newDiamond.setAttribute("d", coordinates);
        newDiamond.setAttribute("style", element.stylingAttributes.toString());
        newDiamond.setAttribute("shape-rendering", "geometricPrecision");

        //*****************************
        // Add change listeners.
        element.addChangeListener(new DiamondDimensionChangeListener());
        element.addChangeListener(new DiamondPositionChangeListener());
        element.addChangeListener(new StyleChangeListener());

        return newDiamond;
    }

}