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
 * This class implements ellipses.
 * The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1,
 * where
 * a is the radius along the x-axis
 * b is the radius along the y-axis
 * h,k are the x,y coordinates of the ellipse's center.
 */
export default class Ellipse extends GraphicalElement {

    constructor(centerX = 0, centerY = 0, radiusX = 50, radiusY = 25, stylingAttributes = new StylingAttributes()) {
        super(centerX - radiusX, centerY - radiusY, radiusX * 2, radiusY * 2, stylingAttributes);
    }

    get width() {
        return super.width;
    }

    set width(value) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.width = value;
        this.enableChangeNotifications();
        super.height = value / 2; // Keep the proportion.
    }

    get height() {
        return super.height;
    }

    set height(value) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.height = value;
        this.enableChangeNotifications();
        super.width = value * 2; // Keep the proportion.
    }

    get centerX() {
        return this.x + (this.width / 2);
    }

    set centerX(value) {
        this.x = value - (this.width / 2);
    }

    get centerY() {
        return this.y + (this.height / 2);
    }

    set centerY(value) {
        this.y = value - (this.height / 2);
    }

    get radiusX() {
        return this.width / 2;
    }

    set radiusX(value) {
        this.width = value * 2;
    }

    get radiusY() {
        return this.height / 2;
    }

    set radiusY(value) {
        this.height = value * 2;
    }

    boundaryX1For(givenY) {
        // The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1
        // (x^2 - 2xh + h^2)
        // ----------------- + (y-k)^2/b^2 - 1 = 0
        //        a^2
        // (1/a^2)x^2 - (2h/a^2)x + h^2/a^2 + (y-k)^2/b^2 - 1 = 0
        let a = this.radiusX;
        let b = this.radiusY;
        let h = this.centerX;
        let k = this.centerY;
        let eqa = 1 / (a * a);
        let eqb = -2 * h / (a * a);
        let eqc = ((h * h) / (a * a)) + Math.pow(givenY - k, 2) / (b * b) - 1;
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        let x1 = (-eqb - sqrtDelta) / (2 * eqa);
        return x1;
    }

    boundaryX2For(givenY) {
        // The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1
        // (x^2 - 2xh + h^2)
        // ----------------- + (y-k)^2/b^2 - 1 = 0
        //        a^2
        // (1/a^2)x^2 - (2h/a^2)x + h^2/a^2 + (y-k)^2/b^2 - 1 = 0
        let a = this.radiusX;
        let b = this.radiusY;
        let h = this.centerX;
        let k = this.centerY;
        let eqa = 1 / (a * a);
        let eqb = -2 * h / (a * a);
        let eqc = ((h * h) / (a * a)) + Math.pow(givenY - k, 2) / (b * b) - 1;
        let delta = eqb * eqb - 4 * eqa * eqc;
        let sqrtDelta = Math.sqrt(delta);
        let x2 = (-eqb + sqrtDelta) / (2 * eqa);
        return x2;
    }

    contentBox(width = 1, height = 1) {
        let sqrt2 = Math.sqrt(2);
        let rectHeight = (this.height / 2) * sqrt2;
        let rectWidth = (this.width / 2) * sqrt2;
        let deltaX = (this.width - rectWidth) / 2;
        let deltaY = (this.height - rectHeight) / 2;

        let contentBox = new BoundingBox(this.x + deltaX, this.y + deltaY, this.x + this.width - deltaX, this.y + this.height - deltaY);

        return contentBox;
    }

    widthToFit(boundingBox) {
        // Ellipse formula is (x/A)^2+(y/B)^2=1, where A and B are the two radius of the ellipse
        // Rectangle sides are Rw and Rh
        // Let's assume we want ellipse with same proportions as rectangle; then, if we image square in circle (A=B,Rq=Rh) and squeeze it, we well keep ratio of ellipse A/B same as ratio of rectangle sides Rw/Rh;
        // This leads us to following system of equations:
        //     (x/A)^2+(y/B)^2=1
        // A/B=Rw/Rh
        //
        // Lets solve it: A=B*(Rw/Rh)
        //     (Rh/2B)^2+(Rh/2B)^2=1
        // Rh=sqrt(2)*B
        //
        // And final solution:
        //     A=Rw/sqrt(2)
        // B=Rh/sqrt(2)

        return 2 * boundingBox.width / Math.sqrt(2);
    }

    heightToFit(boundingBox) {
        return 2 * boundingBox.height / Math.sqrt(2);
    }

}