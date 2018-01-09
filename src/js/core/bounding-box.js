/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

/**
 * This class implements a bounding box.
 */
export default class BoundingBox {

    constructor(x1 = 0, y1 = 0, x2 = 100, y2 = 100) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
    }

    get x1() {
        return this._x1;
    }

    set x1(value) {
        this._x1 = value;
    }

    get y1() {
        return this._y1;
    }

    set y1(value) {
        this._y1 = value;
    }

    get x2() {
        return this._x2;
    }

    set x2(value) {
        this._x2 = value;
    }

    get y2() {
        return this._y2;
    }

    set y2(value) {
        this._y2 = value;
    }

    get width() {
        return Math.abs(this.x2 - this.x1);
    }

    get height() {
        return Math.abs(this.y2 - this.y1);
    }

}