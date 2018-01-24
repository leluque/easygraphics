/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2018.
 */

'use strict';

import GraphicalElement from "./graphical-element";
import {notifyListeners} from "./util";

export default class BoxVerticesDecorator extends GraphicalElement {

    static get VERTEX() {
        return "vertex";
    }

    constructor(decorated, topLeft = true, topRight = true, bottomLeft = true, bottomRight = true, vertexSize = 5) {
        super();
        decorated.addTag(BoxVerticesDecorator.BOX_VERTICES_TAG, this);
        this._decorated = decorated;

        this._topLeft = topLeft;
        this._topRight = topRight;
        this._bottomLeft = bottomLeft;
        this._bottomRight = bottomRight;

        // Vertices drawn.
        this._topLeftVertex = null;
        this._topRightVertex = null;
        this._bottomLeftVertex = null;
        this._bottomRightVertex = null;

        // Events' callback functions for vertices.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        this._onVertexClick = null;
        this._onVertexDblClick = null;
        this._onVertexMouseDown = null;
        this._onVertexMouseMove = null;
        this._onVertexMouseUp = null;
        this._vertexSize = vertexSize;
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

    get vertexSize() {
        return this._vertexSize;
    }

    set vertexSize(value) {
        this._vertexSize = value;
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
        //this.disableChangeNotifications();
        //this.decorated.disableChangeNotifications();
        this.decorated.width = value;
        //this.decorated.enableChangeNotifications();
        //this.decorated.notifyListeners(ChangeListener.DIMENSION);
        //this.enableChangeNotifications();
    }

    get height() {
        return this.decorated.height;
    }

    set height(value) {
        //this.disableChangeNotifications();
        //this.decorated.disableChangeNotifications();
        this.decorated.height = value;
        //this.decorated.enableChangeNotifications();
        //this.decorated.notifyListeners(ChangeListener.DIMENSION);
        //this.enableChangeNotifications();
    }


    get topLeftVertex() {
        return this._topLeftVertex;
    }

    set topLeftVertex(value) {
        this._topLeftVertex = value;
    }

    get topRightVertex() {
        return this._topRightVertex;
    }

    set topRightVertex(value) {
        this._topRightVertex = value;
    }

    get bottomLeftVertex() {
        return this._bottomLeftVertex;
    }

    set bottomLeftVertex(value) {
        this._bottomLeftVertex = value;
    }

    get bottomRightVertex() {
        return this._bottomRightVertex;
    }

    set bottomRightVertex(value) {
        this._bottomRightVertex = value;
    }

    // Events.
    dispathOnVertexClick(target, x, y, event) {
        notifyListeners(this._onVertexClick, target, x, y, event);
    }

    dispathOnVertexDblClick(target, x, y, event) {
        notifyListeners(this._onVertexDblClick, target, x, y, event);
    }

    dispathOnVertexMouseDown(target, x, y, event) {
        notifyListeners(this._onVertexMouseDown, target, x, y, event);
    }

    dispathOnVertexMouseMove(target, x, y, event) {
        notifyListeners(this._onVertexMouseMove, target, x, y, event);
    }

    dispathOnVertexMouseUp(target, x, y, event) {
        notifyListeners(this._onVertexMouseUp, target, x, y, event);
    }
}
