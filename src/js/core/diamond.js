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
import ChangeListener from "./change-listener";

/**
 * This class implements diamonds.
 */
export default class Diamond extends GraphicalElement {

    constructor(x1 = 0, y1 = 0, width = 0, height = 0, preserveAspectRatio = false, stylingAttributes = new StylingAttributes()) {
        // The third parameter is the horizontal diagonal and the fourth one is the vertical diagonal.
        super(x1, y1, Math.sqrt(2 * Math.pow(width, 2)), Math.sqrt(2 * Math.pow(height, 2)), stylingAttributes);
        this._preserveAspectRatio = preserveAspectRatio;
    }

    get width() {
        return super.width;
    }

    set width(value) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.width = value;
        if (this.preserveAspectRatio) {
            super.height = value;
        }
        this.enableChangeNotifications();
        this.notifyListeners(ChangeListener.DIMENSION);
    }

    get height() {
        return super.height;
    }

    set height(value) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.height = value;
        if (this.preserveAspectRatio) {
            super.width = value;
        }
        this.enableChangeNotifications();
        this.notifyListeners(ChangeListener.DIMENSION);
    }

    get preserveAspectRatio() {
        return this._preserveAspectRatio;
    }

    set preserveAspectRatio(value) {
        this._preserveAspectRatio = value;
    }

    boundaryX1For(givenY) {
        // Using the line equation for two points:
        // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
        // assuming that a = (y2 - y1)/(x2 - x1)
        // x = x1 + (y - y1)/a;
        let middleY = this.y + this.height / 2;
        //let middleX = this.x + this.width / 2;
        let a = this.height / this.width;
        if (givenY === middleY) { // Middle.
            return this.x;
        } else if (givenY < middleY) { // Use the top "/" line.
            return this.x + (givenY - this.y) / a;
        } else { // Use the bottom "\" line.
            return this.x + (givenY - middleY) / a;
        }
    }

    boundaryX2For(givenY) {
        // Using the line equation for two points:
        // y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)
        // assuming that a = (y2 - y1)/(x2 - x1)
        // x = x1 + (y - y1)/a;
        let middleY = this.y + this.height / 2;
        let middleX = this.x + this.width / 2;
        let a = this.height / this.width;
        if (givenY == middleY) { // Middle.
            return this.x + this.width;
        } else if (givenY < middleY) { // Use the top "\" line.
            return middleX + (givenY - this.y) / a;
        } else { // Use the bottom "/" line.
            return middleX + (givenY - middleY) / a;
        }
    }

    contentBox(width, height) { // For diamonds, it does not matter the current width/height of a group they may be a frame of.
        let deltaX = this.width / 4;
        let deltaY = this.height / 4;
        let boundingBox = new BoundingBox(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);
        return boundingBox;
    }

    widthToFit(boundingBox) {
        return 2 * boundingBox.width;
    }

    heightToFit(boundingBox) {
        return 2 * boundingBox.height;
    }
}