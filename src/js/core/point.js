/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';
import {toRadians} from "./util";

/**
 * This class implements two dimensional points.
 */
export default class Point {

    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    /**
     * This method rotates "angle" degrees the point around the specified coordinate.
     * @param centerX The x-coordinate of the rotation center.
     * @param centerY The y-coordinate of the rotation center.
     * @param angle The angle in degrees.
     */
    rotateAround(centerX, centerY, angle) {
        // See https://stackoverflow.com/questions/22491178/how-to-rotate-a-point-around-another-point
        let x1 = this.x - centerX;
        let y1 = this.y - centerY;

        let x2 = x1 * Math.cos(toRadians(angle)) - y1 * Math.sin(toRadians(angle));
        let y2 = x1 * Math.sin(toRadians(angle)) + y1 * Math.cos(toRadians(angle));

        this.x = x2 + centerX;
        this.y = y2 + centerY;
    }

}