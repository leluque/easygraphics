/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import GraphicalElement from "./graphical-element";
import {isNotBoolean, isNotInt, notifyListeners} from "./util";

/**
 * This class implements a decorator that shows squared vertices over a graphical element.
 */
export default class BoxVerticesDecorator extends GraphicalElement {

    constructor({decorated, topLeft = true, topRight = true, bottomLeft = true, bottomRight = true, vertexSize = 7} = {}) {
        super();
        decorated.addTag({key: BoxVerticesDecorator.BOX_VERTICES_TAG, value: this});
        if (decorated === undefined && decorated === null) {
            throw "A decorator must have a decorated.";
        }
        if (!(decorated instanceof GraphicalElement)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        this._decorated = decorated;

        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
        this._bottomRight = bottomRight;

        this._vertexSize = vertexSize;

        // Events' callback functions for vertices.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        this._onVertexClick = null;
        this._onVertexDblClick = null;
        this._onVertexMouseDown = null;
        this._onVertexMouseMove = null;
        this._onVertexMouseUp = null;

        this._propagateToDecorated = 0;
    }

    static get VERTEX() {
        return "vertex";
    }

    static get IS_VERTEX() {
        return "isVertex";
    }

    static get BOX_VERTICES_TAG() {
        return "isBoxVertices";
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

    get propagateToDecorated() {
        return 0 === this._propagateToDecorated;
    }

    enablePropagationToDecorated() {
        this._propagateToDecorated--;
    }

    disablePropagationToDecorated() {
        this._propagateToDecorated++;
    }

    get vertexSize() {
        return this._vertexSize;
    }

    set vertexSize(value) {
        if (isNotInt(value) || value <= 0) {
            throw "The vertex size must be a positive integer.";
        }
        this._vertexSize = value;
    }

    get topLeft() {
        return this._topLeft;
    }

    set topLeft(value) {
        if (isNotBoolean(value)) {
            throw "The top left value must be a boolean.";
        }
        this._topLeft = value;
    }

    get topRight() {
        return this._topRight;
    }

    set topRight(value) {
        if (isNotBoolean(value)) {
            throw "The top right value must be a boolean.";
        }
        this._topRight = value;
    }

    get bottomLeft() {
        return this._bottomLeft;
    }

    set bottomLeft(value) {
        if (isNotBoolean(value)) {
            throw "The bottom left value must be a boolean.";
        }
        this._bottomLeft = value;
    }

    get bottomRight() {
        return this._bottomRight;
    }

    set bottomRight(value) {
        if (isNotBoolean(value)) {
            throw "The bottom right value must be a boolean.";
        }
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

    get decorated() {
        return this._decorated;
    }

    set decorated(value) {
        this._decorated = value;
    }

    get width() {
        return this.decorated.width;
    }

    set width(value) {
        this.decorated.width = value;
    }


    get height() {
        return this.decorated.height;
    }

    set height(value) {
        this.decorated.height = value;
    }


    get minHeight() {
        return this.decorated.minHeight;
    }

    set minHeight(value) {
        this.decorated.minHeight = value;
    }

    get y2() {
        return this.decorated.y2;
    }

    set y2(value) {
        this.decorated.y2 = value;
    }

    getAbsY2() {
        return this.decorated.getAbsY2();
    }

    resizeTo({width, w, height, h} = {}) {
        this.decorated.resizeTo({width, w, height, h});
    }

    widthToFit(boundingBox) {
        return this.decorated.widthToFit(boundingBox);
    }

    get minWidth() {
        return this.decorated.minWidth;
    }

    set minWidth(value) {
        this.decorated.minWidth = value;
    }

    changeX2(value) {
        this.decorated.changeX2(value);
    }

    changeHeight(value) {
        this.decorated.changeHeight(value);
    }

    changeY2(value) {
        this.decorated.changeY2(value);
    }

    validateMinWidth(value) {
        this.decorated.validateMinWidth(value);
    }

    validateMinHeight(value) {
        this.decorated.validateMinHeight(value);
    }

    resizeBy({width, w, height, h} = {}) {
        this.decorated.resizeBy({width, w, height, h});
    }

    contentBox({width, w, height, h} = {}) {
        return this.decorated.contentBox({width, w, height, h});
    }

    heightToFit(boundingBox) {
        return this.decorated.heightToFit(boundingBox);
    }

    get x2() {
        return this.decorated.x2;
    }

    set x2(value) {
        this.decorated.x2 = value;
    }

    getAbsX2() {
        return this.decorated.getAbsX2();
    }

    changeWidth(value) {
        this.decorated.changeWidth(value);
    }

    boundaryX2For(givenY) {
        return this.decorated.boundaryX2For(givenY);
    }

// Events.
    dispatchOnVertexClick(target, x, y, event) {
        notifyListeners({listener: this._onVertexClick, target: target}, x, y, event);
    }

    dispatchOnVertexDblClick(target, x, y, event) {
        notifyListeners({listener: this._onVertexDblClick, target: target}, x, y, event);
    }

    dispatchOnVertexMouseDown(target, x, y, event) {
        notifyListeners({listener: this._onVertexMouseDown, target: target}, x, y, event);
    }

    dispatchOnVertexMouseMove(target, x, y, event) {
        notifyListeners({listener: this._onVertexMouseMove, target: target}, x, y, event);
    }

    dispatchOnVertexMouseUp(target, x, y, event) {
        notifyListeners({listener: this._onVertexMouseUp, target: target}, x, y, event);
    }
}
