/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import BoundingBox from './bounding-box.js';
import StylingAttributes from "./styling-attributes";

/**
 * This class implements rectangles.
 */
export default class Rectangle extends GraphicalElement {

    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, rectangleStylingAttributes = new StylingAttributes()) {
        super({x: x1, y: y1, width: x2 - x1, height: y2 - y1, stylingAttributes: rectangleStylingAttributes});
    }

    contentBox(width, height) { // For rectangles, it does not matter the current width/height of a group they may be a frame of.
        let border = this.borderSize;
        let boundingBox = new BoundingBox(this.x + border, this.y + border, this.x + this.width - border, this.y + this.height - border);
        return boundingBox;
    }

    widthToFit(boundingBox) {
        let boundingBoxWidth = boundingBox.x2 - boundingBox.x1;
        boundingBoxWidth += this.stylingAttributes.strokeWidth;
        return boundingBoxWidth;
    }

    heightToFit(boundingBox) {
        let boundingBoxHeight = boundingBox.y2 - boundingBox.y1;
        boundingBoxHeight += this.stylingAttributes.strokeWidth;
        return boundingBoxHeight;
    }

}