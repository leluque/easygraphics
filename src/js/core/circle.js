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
 * This class implements circles.
 * The general circle equation is (x-a)^2 + (y-b)^2 = r^2,
 * where
 * a,b are the x,y coordinates of the circle's center.
 */
export default class Circle
    extends GraphicalElement {

    constructor(centerX = 0, centerY = 0, radius = 50, circleStylingAttributes = new StylingAttributes()) {
        super({
            x: centerX - radius,
            y: centerY - radius,
            width: radius * 2,
            height: radius * 2,
            stylingAttributes: circleStylingAttributes
        });
    }

    get centerX() {
        return this.x + (this.width / 2);
    }

    get centerY() {
        return this.y + (this.height / 2);
    }

    get radius() {
        return this.width / 2;
    }

    get width() {
        return super.width;
    }

    set width(value) {
        this.disableChangeNotifications();
        super.height = value;
        this.enableChangeNotifications();
        super.width = value;
    }

    get height() {
        return super.height;
    }

    set height(value) {
        this.disableChangeNotifications();
        super.width = value;
        this.enableChangeNotifications();
        super.height = value;
    }

    boundaryX1For(givenY) {
        // The circle equation is (x-a)^2 + (y-b)^2 = r^2
        // (x-a)^2 = r^2 - (y-b)^2
        // x^2 - 2xa + a^2 = r^2 - (y-b)^2
        // x^2 - 2xa + (a^2 -r^2 + (y-b)^2) = 0
        let eqa = 1;
        let eqb = -2 * this.centerX;
        let eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        let x1 = (-eqb - sqrtDelta) / (2 * eqa);
        return x1;
    }

    boundaryX2For(givenY) {
        let eqa = 1;
        let eqb = -2 * this.centerX;
        let eqc = Math.pow(this.centerX, 2) - Math.pow(this.radius, 2) + Math.pow(givenY - this.centerY, 2);
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        let x2 = (-eqb + sqrtDelta) / (2 * eqa);
        return x2;
    }

    contentBox(width = 1, height = 1) {
        // Take into consideration the ratio among width and height.
        // FORMULA:
        // (width/2)^2 + (height/2)^2 = radius^2
        // (width/2)^2 + (width/ratio/2)^2 = radius^2
        // (width/2)^2 + (width/2*ratio)^2 = radius^2
        // if z = width/2 | z^2 + ((1/ratio)*z)^2 = radius^2
        // (1 + (1/ratio)^2) z^2 = radius^2
        // z = sqrt(radius^2/ (1 + (1/ratio)^2))

        let ratio = width / height;
        let squaredRadius = this.radius * this.radius;
        let halfWidth = Math.sqrt(squaredRadius / (1 + Math.pow(1 / ratio, 2)));
        let halfHeight = halfWidth / ratio;
        let deltaX = this.radius - halfWidth;
        let deltaY = this.radius - halfHeight;

        let contentBox = new BoundingBox(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);

        return contentBox;
    }

    widthToFit(boundingBox) {
        let diameter = Math.sqrt(Math.pow(boundingBox.width, 2) + Math.pow(boundingBox.height, 2));
        return diameter;
    }

    heightToFit(boundingBox) {
        return this.widthToFit(boundingBox);
    }

}