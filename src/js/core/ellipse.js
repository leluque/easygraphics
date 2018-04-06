/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import BoundingBox from './bounding-box.js';
import {checkRedundantArguments, getNonNullValue, isNull, error} from "./util";
import ChangeListenerConstants from "./listener/change-listener-constants";

/**
 * This class implements ellipses.
 * The general ellipse equation is (x-h)^2/a^2 + (y-k)^2/b^2 = 1,
 * where
 * a is the radius along the x-axis
 * b is the radius along the y-axis
 * h,k are the x,y coordinates of the ellipse's center.
 */
export default class Ellipse extends GraphicalElement {

    constructor({id, centerX, cx, centerY, cy, x, x1, y, y1, x2, y2, width, w, height, h, dx, diameterX, radiusX, rx, dy, diameterY, radiusY, ry, style, preserveAspectRatio} = {}) {
        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        // Check whether there are redundant arguments.
        if (checkRedundantArguments(radiusX, rx, diameterX, dx, width, w, x2)) {
            error("Warning: More than one of the following arguments was informed: radiusX, rx, diameterX, dx, width, w, and x2.");
        }
        if (checkRedundantArguments(radiusY, ry, diameterY, dy, height, h, y2)) {
            error("Warning: More than one of the following arguments was informed: radiusY, ry, diameterY, dy, height, h, and y2.");
        }
        // **************************************
        let needToAdjustDiameterX = false;
        let needToAdjustDiameterY = false;
        if (isNull(radiusX) && isNull(rx)) {
            if (isNull(diameterX) && isNull(dx)) {
                if (isNull(x2)) {
                    if (isNull(width) && isNull(w)) {
                        diameterX = 14;
                    } else {
                        diameterX = getNonNullValue(width, w);
                    }
                } else {
                    diameterX = x2; // Need to be adjusted later - when x1 is calculated.
                    needToAdjustDiameterX = true;
                }
            } else {
                diameterX = getNonNullValue(diameterX, dx);
            }
        } else {
            diameterX = getNonNullValue(radiusX, rx) * 2;
        }
        if (isNull(radiusY) && isNull(ry)) {
            if (isNull(diameterY) && isNull(dy)) {
                if (isNull(y2)) {
                    if (isNull(height) && isNull(h)) {
                        diameterY = 7; // Need to be adjusted later - when y1 is calculated.
                    } else {
                        diameterY = getNonNullValue(height, h);
                    }
                } else {
                    diameterY = y2;
                    needToAdjustDiameterY = true;
                }
            } else {
                diameterY = getNonNullValue(diameterY, dy);
            }
        } else {
            diameterY = getNonNullValue(radiusY, ry) * 2;
        }
        if (isNull(centerX) && isNull(cx)) {
            if (isNull(x) && isNull(x1)) {
                x1 = 0;
            } else {
                x1 = getNonNullValue(x1, x);
                if (needToAdjustDiameterX) {
                    diameterX -= x1;
                }
            }
        } else {
            if (needToAdjustDiameterX) {
                let radiusX = diameterX - getNonNullValue(centerX, cx);
                x1 = getNonNullValue(centerX, cx) - radiusX;
            } else {
                x1 = getNonNullValue(centerX, cx) - diameterX / 2;
            }
        }
        if (isNull(centerY) && isNull(cy)) {
            if (isNull(y) && isNull(y1)) {
                y1 = 0;
            } else {
                y1 = getNonNullValue(y1, y);
                if (needToAdjustDiameterY) {
                    diameterY -= y1;
                }
            }
        } else {
            if (needToAdjustDiameterY) {
                let radiusY = diameterY - getNonNullValue(centerY, cy);
                y1 = getNonNullValue(centerY, cy) - radiusY;
            } else {
                y1 = getNonNullValue(centerY, cy) - diameterY / 2;
            }
        }
        super({
            id,
            x1: x1,
            y1: y1,
            width: diameterX,
            height: diameterY,
            style: style,
            preserveAspectRatio: preserveAspectRatio
        });
    }

    get width() {
        return super.width;
    }

    set width(value) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.width = value;
        this.enableChangeNotifications();
        this.notifyListeners(ChangeListenerConstants.DIMENSION);
    }

    get height() {
        return super.height;
    }

    set height(value) {
        console.log("Changing ELLIPSE height to " + value);
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        super.height = value;
        this.enableChangeNotifications();
        this.notifyListeners(ChangeListenerConstants.DIMENSION);
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

    contentBox({width, w, height, h} = {}) {
        width = getNonNullValue(width, w, this.width);
        height = getNonNullValue(height, h, this.height);

        let sqrt2 = Math.sqrt(2);
        let rectHeight = (height / 2) * sqrt2;
        let rectWidth = (width / 2) * sqrt2;
        let deltaX = (width - rectWidth) / 2;
        let deltaY = (height - rectHeight) / 2;

        let contentBox = new BoundingBox({
            x1: this.x1 + deltaX,
            y1: this.y + deltaY,
            x2: this.x1 + width - deltaX,
            y2: this.y1 + height - deltaY
        });

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