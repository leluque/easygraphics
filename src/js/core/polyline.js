/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2018.
 */

'use strict';

import GraphicalElement from './graphical-element';
import Style from './style/style';
import BoundingBox from "./bounding-box";
import Point from "./point";

export default class PolyLine extends GraphicalElement {

    constructor({
                    id, curve = false, startMarker, endMarker, style = new Style({
            strokeWidth: 1,
            strokeColor: "black",
            fillColor: "none"
        })
                }) {
        super({id: id, x: 0, y: 0, width: 0, height: 0, style: style, preserveAspectRatio: false});
        this._idCount = 1;
        this._points = [];
        let coordinates = Array.from(arguments).slice(1);

        for (let i = 0; i < coordinates.length; i += 2) {
            this.addPoint(coordinates[i], coordinates[i + 1]);
        }

        this._curve = curve;
        this._startMarker = startMarker;
        this._endMarker = endMarker;

        this.updateBoundingBox();
    }

    get curve() {
        return this._curve;
    }

    set curve(value) {
        this._curve = value;
    }

    get startMarker() {
        return this._startMarker;
    }

    set startMarker(value) {
        this._startMarker = value;
    }

    get endMarker() {
        return this._endMarker;
    }

    set endMarker(value) {
        this._endMarker = value;
    }

    get preserveAspectRatio() {
        return false;
    }

    /**
     * The line aspect ratio is always false. This method throws an exception if the argument
     * is different of false.
     * @param {boolean} value true, if the aspect ratio must be preserved. false, otherwise.
     */
    set preserveAspectRatio(value) {
        if (value !== false) {
            throw "The polyline aspect ratio has always to be false.";
        }
    }

    get minWidth() {
        if (this.style !== null) {
            return this.style.strokeWidth;
        }
        return 1;
    }

    get minHeight() {
        if (this.style !== null) {
            return this.style.strokeWidth;
        }
        return 1;
    }

    get points() {
        return this._points;
    }

    set points(value) {
        this._points = value;
    }

    generateId() {
        return "point_" + (this._idCount++);
    }

    addPoint(x, y) {
        this._points.push(new Point({x: x, y: y, id: this.generateId()}));
        return true;
    }

    removePointAt(position) {
        if (position >= 0 && position < this.countPoints()) {
            this._points.splice(position, 1);
            return true;
        }
        return false;
    }

    removePoint(point) {
        for (var i = 0; i < this._points.length; i++) {
            if (this._points[i].id === point.id) {
                this.removePointAt(i);
                return true;
            }
        }
        return false;
    }

    removePointById(id) {
        for (var i = 0; i < this._points.length; i++) {
            if (this._points[i].id === id) {
                this.removePointAt(i);
                return true;
            }
        }
        return false;
    }

    countPoints() {
        return this._points.length;
    }

    findBoundingBox() {
        let minX = Number.MAX_SAFE_INTEGER;
        let minY = Number.MAX_SAFE_INTEGER;
        let maxX = Number.MIN_SAFE_INTEGER;
        let maxY = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < this.points.length; i++) {
            if (this._points[i].x < minX) {
                minX = this._points[i].x;
            }
            if (this._points[i].x > maxX) {
                maxX = this._points[i].x;
            }
            if (this._points[i].y < minY) {
                minY = this._points[i].y;
            }
            if (this._points[i].y > maxY) {
                maxY = this._points[i].y;
            }
        }
        return new BoundingBox({x1: minX, y1: minY, x2: maxX, y2: maxY});
    }

    updateBoundingBox() {
        let boundingBox = this.findBoundingBox();
        if (boundingBox.x1 === Number.MAX_SAFE_INTEGER ||
            boundingBox.y1 === Number.MAX_SAFE_INTEGER ||
            boundingBox.x2 === Number.MIN_SAFE_INTEGER ||
            boundingBox.y2 === Number.MIN_SAFE_INTEGER) {
            return;
        }
        this.moveTo({x: boundingBox.x1, y: boundingBox.y1});
        this.resizeTo({width: boundingBox.x2 - this.x1, height: boundingBox.y2 - this.y1});
    }

}