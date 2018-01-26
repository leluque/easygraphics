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

export default class Image extends GraphicalElement {

    constructor(imageX = 10, imageY = 10, imageWidth = 20, imageHeight = 20, image = undefined, imageStylingAttributes = new StylingAttributes()) {
        super({
            x: imageX,
            y: imageY,
            width: imageWidth,
            height: imageHeight,
            stylingAttributes: imageStylingAttributes
        });
        this._image = image;
        this._boundingBoxFunction = this.defaultBoundingBox;
        this._widthToFitFunction = this.defaultWidthToFit;
        this._heightToFitFunction = this.defaultHeightToFit;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get boundingBoxFunction() {
        return this._boundingBoxFunction;
    }

    set boundingBoxFunction(value) {
        this._boundingBoxFunction = value;
    }

    get widthToFitFunction() {
        return this._widthToFitFunction;
    }

    set widthToFitFunction(value) {
        this._widthToFitFunction = value;
    }

    get heightToFitFunction() {
        return this._heightToFitFunction;
    }

    set heightToFitFunction(value) {
        this._heightToFitFunction = value;
    }

    defaultBoundingBox(width, height) {
        return new BoundingBox(this.x, this.y, this.x2, this.y2);
    }

    defaultWidthToFit(boundingBox) {
        return boundingBox.width;
    }

    defaultHeightToFit(boundingBox) {
        return boundingBox.height;
    }

    contentBox(width, height) {
        return this.boundingBoxFunction(width, height);
    }

    widthToFit(boundingBox) {
        return this.widthToFitFunction(boundingBox);
    }

    heightToFit(boundingBox) {
        return this.heightToFitFunction(boundingBox);
    }

}