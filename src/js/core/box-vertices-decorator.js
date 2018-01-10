/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElementDecorator from './graphical-element-decorator.js';

// TODO: change to mixin in the future.
export default class BoxVerticesDecorator extends GraphicalElementDecorator {

    constructor(decorated, topLeft = 11, topRight = 11, bottomLeft = 11, bottomRight = 11) {
        super(decorated);
        this._decorated = decorated;
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
        this._bottomRight = bottomRight;
    }

    get topLeft() {
        return this._topLeft;
    }

    set topLeft(value) {
        this._topLeft = value;
    }

    get topRight() {
        return this._topRight;
    }

    set topRight(value) {
        this._topRight = value;
    }

    get bottomLeft() {
        return this._bottomLeft;
    }

    set bottomLeft(value) {
        this._bottomLeft = value;
    }

    get bottomRight() {
        return this._bottomRight;
    }

    set bottomRight(value) {
        this._bottomRight = value;
    }

    hasTopLeft() {
        return this.topLeft > 0;
    }

    hasTopRight() {
        return this.topRight > 0;
    }

    hasBottomLeft() {
        return this.bottomLeft > 0;
    }

    hasBottomRight() {
        return this.bottomRight > 0;
    }
}
