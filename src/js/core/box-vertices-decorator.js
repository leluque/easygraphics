/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElementDecorator from './graphical-element-decorator.js';

export default class BoxVerticesDecorator extends GraphicalElementDecorator {
    get vertexSize() {
        return this._vertexSize;
    }

    set vertexSize(value) {
        this._vertexSize = value;
    }

    static get TOP_LEFT() {
        return 0;
    }

    // It does not use horizontal margins for elements.
    static get TOP_RIGHT() {
        return 1;
    }

    // It uses horizontal margins for elements.
    static get BOTTOM_LEFT() {
        return 2;
    }

    static get BOTTOM_RIGHT() {
        return 3;
    }

    constructor(decorated, topLeft = true, topRight = true, bottomLeft = true, bottomRight = true, vertexSize = 5) {
        super(decorated);
        this._decorated = decorated;
        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
        this._bottomRight = bottomRight;

        // Events.
        this._onVertexClick = null;
        this._onVertexDblClick = null;
        this._onVertexMouseDown = null;
        this._onVertexMouseMove = null;
        this._onVertexMouseUp = null;
        this._vertexSize = vertexSize;
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

    get onVertexClick() {
        return this._onVertexClick;
    }

    set onVertexClick(value) {
        this._onVertexClick = value;
    }

    get onVertexDblClick() {
        return this._onVertexDblClick;
    }

    set onVertexDblClick(value) {
        this._onVertexDblClick = value;
    }

    get onVertexMouseDown() {
        return this._onVertexMouseDown;
    }

    set onVertexMouseDown(value) {
        this._onVertexMouseDown = value;
    }

    get onVertexMouseMove() {
        return this._onVertexMouseMove;
    }

    set onVertexMouseMove(value) {
        this._onVertexMouseMove = value;
    }

    get onVertexMouseUp() {
        return this._onVertexMouseUp;
    }

    set onVertexMouseUp(value) {
        this._onVertexMouseUp = value;
    }

    // Events.
    fireOnVertexClick(x, y, where) {
        if (this._onVertexClick !== null && this._onVertexClick) {
            if (typeof(this._onVertexClick) === "function") {
                this._onVertexClick(event.clientX, event.clientY, where);
            } else {
                throw "Callback is not a function: " + typeof(this._onVertexClick);
            }
        }
    }

    fireOnVertexDblClick(x, y, where) {
        if (this._onVertexDblClick !== null && this._onVertexDblClick) {
            if (typeof(this._onVertexDblClick) === "function") {
                this._onVertexDblClick(event.clientX, event.clientY, where);
            } else {
                throw "Callback is not a function: " + typeof(this._onVertexDblClick);
            }
        }
    }

    fireOnVertexMouseDown(x, y, where) {
        if (this._onVertexMouseDown !== null && this._onVertexMouseDown) {
            if (typeof(this._onVertexMouseDown) === "function") {
                this._onVertexMouseDown(event.clientX, event.clientY, where);
            } else {
                throw "Callback is not a function: " + typeof(this._onVertexMouseDown);
            }
        }
    }

    fireOnVertexMouseMove(x, y, where) {
        if (this._onVertexMouseMove !== null && this._onVertexMouseMove) {
            if (typeof(this._onVertexMouseMove) === "function") {
                this._onVertexMouseMove(event.clientX, event.clientY, where);
            } else {
                throw "Callback is not a function: " + typeof(this._onVertexMouseMove);
            }
        }
    }

    fireOnVertexMouseUp(x, y, where) {
        if (this._onVertexMouseUp !== null && this._onVertexMouseUp) {
            if (typeof(this._onVertexMouseUp) === "function") {
                this._onVertexMouseUp(event.clientX, event.clientY, where);
            } else {
                throw "Callback is not a function: " + typeof(this._onVertexMouseUp);
            }
        }
    }

}
