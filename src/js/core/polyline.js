/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2018.
 */

'use strict';

import GraphicalElement from './graphical-element';
import StylingAttributes from './styling-attributes';
import BoundingBox from "./bounding-box";
import Point from "./point";

export default class PolyLine extends GraphicalElement {

    constructor(polyLineStylingAttributes = new StylingAttributes(1)) {
        super({x: 0, y: 0, width: 0, height: 0, stylingAttributes: polyLineStylingAttributes});
        this._idCount = 1;
        this._points = [];
        let coordinates = Array.from(arguments).slice(1);
        if (Array.isArray(coordinates)) {
            coordinates = coordinates[0]; // SVGArea may have passed it as an array.
        }

        for (let i = 0; i < coordinates.length; i += 2) {
            this.addPoint(coordinates[i], coordinates[i + 1]);
        }
        this.updateBoundingBox();
    }

    get x1() {
        return this.x;
    }

    set x1(value) {
        this.x = value;
    }

    get y1() {
        return this.y;
    }

    set y1(value) {
        this.y = value;
    }

    get minWidth() {
        if (this.stylingAttributes !== null) {
            return this.stylingAttributes.strokeWidth;
        }
        return 1;
    }

    get minHeight() {
        if (this.stylingAttributes !== null) {
            return this.stylingAttributes.strokeWidth;
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
        this._points.push(new Point(x, y, this.generateId()));
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
        return new BoundingBox(minX, minY, maxX, maxY);
    }

    updateBoundingBox() {
        let boundingBox = this.findBoundingBox();
        this.x1 = boundingBox.x1;
        this.y1 = boundingBox.y1;
        this.x2 = boundingBox.x2;
        this.y2 = boundingBox.y2;
    }
}