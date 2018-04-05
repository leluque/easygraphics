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

import Style from './style/style.js';
import {
    checkIfNumberOfArgumentsExceed,
    checkRedundantArguments,
    error,
    getNonNullValue,
    isNotNull,
    isNull,
    notifyListeners
} from "./util";
import BoundingBox from "./bounding-box";
import ChangeListenerConstants from "./listener/change-listener-constants";
import Observable from "./observable";

/**
 * This class implements the default behaviour of graphical elements.
 * It is the base class for all graphical elements.
 *
 * A graphical element may be specified by different parameters.
 * - The top-left (x1 or x, y1 or y) and bottom-right (x2, y2) coordinates may be specified;
 * - The top-left (x1 or x, y1 or y), width (width or w) and height (height or h) may be specified;
 * - The bottom-right (x2, y2), width (width or w) and height (height or h) may be specified.
 */
export default class GraphicalElement extends Observable {

    constructor({id, x1, x, y1, y, x2, y2, width, w, height, h, style = new Style(), preserveAspectRatio} = {}) {
        super();
        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        // Check whether there are redundant arguments.
        if (checkRedundantArguments(x1, x)) {
            error("Warning: Both x1 and x were informed.");
        }
        if (checkRedundantArguments(y1, y)) {
            error("Warning: Both y1 and y were informed.");
        }
        if (checkRedundantArguments(width, w)) {
            error("Warning: Both width and w were informed.");
        }
        if (checkRedundantArguments(height, h)) {
            error("Warning: Both height and h were informed.");
        }
        if (checkIfNumberOfArgumentsExceed(2, x1, x, x2, width, w)) {
            error("Warning: Two or more ways to specify the graphical element horizontal position and dimension were found.");
        }
        if (checkIfNumberOfArgumentsExceed(2, y1, y, y2, height, h)) {
            error("Warning: Two or more ways to specify the graphical element vertical position and dimension were found.");
        }
        // **************************************

        this._id = id;
        // X1 and y1 may be redefined later if only the bottom-right coordinate and width/height were informed.
        this._x1 = getNonNullValue(x1, x, 0);
        this._y1 = getNonNullValue(y1, y, 0);

        if (isNull(x2)) {
            if (isNull(width) && isNull(w)) {
                this._x2 = this._x1 + 14;
            } else {
                this._x2 = this._x1 + getNonNullValue(width, w);
            }
        } else {
            this._x2 = x2;
            if (!isNull(width) || !isNull(w)) {
                this._x1 = this._x2 - getNonNullValue(width, w);
            }
        }
        if (isNull(y2)) {
            if (isNull(height) && isNull(h)) {
                this._y2 = this._y1 + 14;
            } else {
                this._y2 = this._y1 + getNonNullValue(height, h);
            }
        } else {
            this._y2 = y2;
            if (!isNull(height) || !isNull(h)) {
                this._y1 = this._y2 - getNonNullValue(height, h);
            }
        }

        this._style = style;
        if (isNotNull(this._style)) {
            // TODO: Is bidirectional navigation necessary? Doesn't listeners resolve it?
            this._style.target = this; // Bidirectional navigation.

            this._minWidth = this.borderSize * 2;
            this._minHeight = this.borderSize * 2;
        } else {
            this._minWidth = 1;
            this._minHeight = 1;
        }

        this._rotation = 0; // Rotation angle in degrees.
        this._rotationCenterX = (this._x1 + this._x2) / 2; // The rotation reference point x-coordinate.
        this._rotationCenterY = (this._y1 + this._y2) / 2; // The rotation reference point y-coordinate.

        // Define a new object to store additional information.
        // It works like a map, but with complexity on search of O(1).
        // The key works as the tag name.
        this._tags = {};

        // Events' callback functions.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        this._onClick = null;
        this._onDblClick = null;
        this._onMouseDown = null;
        this._onMouseMove = null;
        this._onMouseUp = null;

        this._preserveAspectRatio = preserveAspectRatio;

        this._relativePosition = false;
        this._relativeX1 = null;
        this._relativeY1 = null;
    }

    static get PARENT() {
        return "parent";
    }

    get preserveAspectRatio() {
        return this._preserveAspectRatio;
    }

    set preserveAspectRatio(value) {
        this._preserveAspectRatio = value;
    }

    get absoluteX1() {
        if (this.relativePosition === true) {
            return this.x1 + this.relativeX1;
        }
        else {
            return this.x1;
        }
    }

    get x1() {
        return this._x1;
    }

    set x1(value) {
        if (value === this._x1) return;
        if (value > this._x2) {
            throw "x1 must be less than x2.";
        }

        this.validateMinWidth(this._x2 - value);
        if (true === this.preserveAspectRatio) {
            let aspectRatio = this.height / this.width;
            let newWidth = (this._x2 - value);
            this.validateMinHeight(aspectRatio * newWidth);
            let deltaX1 = value - this._x1;
            this._y1 += aspectRatio * deltaX1;
        }
        this._x1 = value;
        this.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
    }

    get x() {
        return this.x1;
    }

    set x(value) {
        this.x1 = value;
    }

    get absoluteY1() {
        if (this.relativePosition === true) {
            return this.y1 + this.relativeY1;
        }
        else {
            return this.y1;
        }
    }

    get y1() {
        return this._y1;
    }

    set y1(value) {
        if (value === this._y1) return;
        if (value > this._y2) {
            throw "y1 must be less than y2.";
        }

        this.validateMinHeight(this._y2 - value);
        if (this.preserveAspectRatio === true) {
            let aspectRatio = this.width / this.height;
            let newHeight = (this._y2 - value);
            this.validateMinWidth(aspectRatio * newHeight);
            let deltaY1 = value - this._y1;
            this._x1 += aspectRatio * deltaY1;
        }
        this._y1 = value;

        this.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
    }

    get y() {
        return this.y1;
    }

    set y(value) {
        this.y1 = value;
    }

    get width() {
        return this.x2 - this.x1;
    }

    set width(value) {
        this.x2 += value - this.width;
    }

    get minWidth() {
        return this._minWidth;
    }

    set minWidth(value) {
        if (value === this.minWidth) return;
        this._minWidth = value;
        if (this.width < this.minWidth) {
            this.width = this.minWidth; // If the width changes, listener will be notified.
        }
    }

    get height() {
        return this.y2 - this.y1;
    }

    set height(value) {
        this.y2 += value - this.height;
    }

    get minHeight() {
        return this._minHeight;
    }

    set minHeight(value) {
        if (value === this.minHeight) return;
        this._minHeight = value;
        if (this.height < this.minHeight) {
            this.height = this.minHeight; // If the height changes, listener will be notified.
        }
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(value) {
        this._rotation = value;
        this.notifyListeners(ChangeListenerConstants.ROTATION);
    }

    get rotationCenterX() {
        return this._rotationCenterX;
    }

    set rotationCenterX(value) {
        this._rotationCenterX = value;
        this.notifyListeners(ChangeListenerConstants.ROTATION);
    }

    get rotationCenterY() {
        return this._rotationCenterY;
    }

    set rotationCenterY(value) {
        this._rotationCenterY = value;
        this.notifyListeners(ChangeListenerConstants.ROTATION);
    }

    /**
     * Return the x2-coordinate of the graphical element.
     * @return {number} The x2-coordinate of the graphical element.
     */
    get x2() {
        return this._x2;
    }

    /**
     * Set the x2-coordinate of the graphical element.
     * @param {number} value The x2-coordinate of the graphical element.
     */
    set x2(value) {
        if (value === this._x2) return;
        if (this._x1 > value) {
            throw "x2 must be greater than x1.";
        }

        this.validateMinWidth(value - this._x1);
        if (true === this.preserveAspectRatio) {
            let aspectRatio = this.height / this.width;
            let newWidth = (value - this._x1);
            this.validateMinHeight(aspectRatio * newWidth);
            let deltaX2 = value - this._x2;
            this._y2 += aspectRatio * deltaX2;
        }
        this._x2 = value;
        this.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
    }

    get y2() {
        return this._y2;
    }

    set y2(value) {
        if (value === this._y2) return;
        if (value < this._y1) {
            throw "y2 must be greater than y1.";
        }

        this.validateMinHeight(value - this._y1);
        if (this.preserveAspectRatio === true) {
            let aspectRatio = this.width / this.height;
            let newHeight = (value - this._y1);
            this.validateMinWidth(aspectRatio * newHeight);
            let deltaY2 = value - this._y2;
            this._x2 += aspectRatio * deltaY2;
        }
        this._y2 = value;

        this.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
    }

    get style() {
        return this._style;
    }

    set style(value) {
        let oldBorderSize = this.borderSize;
        this._style.target = null;
        this._style = value;
        value.target = this;
        let newBorderSize = this.borderSize;

        // Update the min width and height.
        let deltaBorderSize = newBorderSize - oldBorderSize;
        this._minWidth += deltaBorderSize;
        this._minHeight += deltaBorderSize;

        this.notifyListeners(ChangeListenerConstants.STYLING);
    }

    /**
     * Return the border size if this element has a style with a defined stroke width.
     * It returns 0, otherwise.
     * @return {number} The border size if this element has a style with a defined stroke width. It returns 0, otherwise.
     */
    get borderSize() {
        if (isNotNull(this.style)) {
            return this.style.strokeWidth / 2;
        }
        return 0;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get onClick() {
        return this._onClick;
    }

    set onClick(value) {
        this._onClick = value;
    }

    get onDblClick() {
        return this._onDblClick;
    }

    set onDblClick(value) {
        this._onDblClick = value;
    }

    get onMouseDown() {
        return this._onMouseDown;
    }

    set onMouseDown(value) {
        this._onMouseDown = value;
    }

    get onMouseMove() {
        return this._onMouseMove;
    }

    set onMouseMove(value) {
        this._onMouseMove = value;
    }

    get onMouseUp() {
        return this._onMouseUp;
    }

    set onMouseUp(value) {
        this._onMouseUp = value;
    }

    get relativePosition() {
        return this._relativePosition;
    }

    set relativePosition(value) {
        this._relativePosition = value;
    }

    get relativeX1() {
        return this._relativeX1;
    }

    set relativeX1(value) {
        this._relativeX1 = value;
    }

    get relativeY1() {
        return this._relativeY1;
    }

    set relativeY1(value) {
        this._relativeY1 = value;
    }

    getAbsX1() {
        return this.x1;
    }

    getAbsX2() {
        return this.x2;
    }

    getAbsY1() {
        return this.y1;
    }

    getAbsY2() {
        return this.y2;
    }

    /**
     * Change the width without propagating any changes to the height.
     * @param {number} value The new width.
     */
    changeWidth(value) {
        this.changeX2(this.x2 + value - this.width);
    }

    /**
     * Change x2 without propagating any changes to y2.
     * @param {number} value The new x2.
     */
    changeX2(value) {
        if (value === this._x2) return;
        if (value < this._x1) {
            throw "x2 must be greater than x1.";
        }

        this.validateMinWidth(value - this._x1);
        this._x2 = value;
        this.notifyListeners(ChangeListenerConstants.DIMENSION);
    }

    /**
     * Change the height without propagating any changes to the width.
     * @param {number} value The new height.
     */
    changeHeight(value) {
        this.changeY2(this.y2 + value - this.height);
    }

    /**
     * Change y2 without propagating any changes to x2.
     * @param {number} value The new y2.
     */
    changeY2(value) {
        if (value === this._y2) return;
        if (value < this._y1) {
            throw "y2 must be greater than y1.";
        }

        this.validateMinHeight(value - this._y1);
        this._y2 = value;

        this.notifyListeners(ChangeListenerConstants.DIMENSION);
    }

    validateMinWidth(value) {
        /*
                if (value < this.minWidth) {
                    throw "The width must be a positive integer equal or greater than minWidth (" + this.minWidth + ").";
                }
        */
    }

    validateMinHeight(value) {
        /*
                if (value < this.minHeight) {
                    throw "The height must be a positive integer equal or greater than minHeight (" + this.minHeight + ").";
                }
        */
    }

    addTag({key, k, value, v} = {}) {
        // **************************************
        // Check whether there are redundant arguments.
        if (checkRedundantArguments(key, k)) {
            error("Warning: Both key and k were informed.");
        }
        if (checkRedundantArguments(value, v)) {
            error("Warning: Both value and v were informed.");
        }
        // **************************************
        key = getNonNullValue(key, k);
        value = getNonNullValue(value, v);
        this._tags[key] = value;
    }

    existTag(key) {
        return isNotNull(this._tags[key]);
    }

    countTags() {
        return Object.keys(this._tags).length;
    }

    getTag(key) {
        return this._tags[key];
    }

    getTagsKeys() {
        return Object.keys(this._tags);
    }

    removeTag(key) {
        delete this._tags[key];
    }

    /**
     * Returns the minimum value of X that stays inside the geometric shape for
     * the specified y value.
     * @param givenY The y value.
     * @return {number} The minimum value of X that stays inside the geometric shape for
     * the specified y value.
     */
    boundaryX1For(givenY) {
        return this.x1; // Assume, by default, a rectangular shape.
    }

    /**
     * Returns the maximum value of X that stays inside the geometric shape for
     * the specified y value.
     * @param givenY The y value.
     * @return {number} The maximum value of X that stays inside the geometric shape for
     * the specified y value.
     */
    boundaryX2For(givenY) {
        return this.x2; // Assume, by default, a rectangular shape.
    }

    moveBy({x, y} = {}) {
        if (isNotNull(x)) {
            this._x1 += x;
            this._x2 += x;
        }
        if (isNotNull(y)) {
            this._y1 += y;
            this._y2 += y;
        }
        this.notifyListeners(ChangeListenerConstants.POSITION);
    }

    moveTo({x, y} = {}) {
        if (isNotNull(x)) {
            this._x2 += x - this._x1;
            this._x1 = x;
        }
        if (isNotNull(y)) {
            this._y2 += y - this._y1;
            this._y1 = y;
        }
        this.notifyListeners(ChangeListenerConstants.POSITION);
    }

    moveYTo(y) {
        this._y2 += y - this._y1;
        this._y1 = y;
        this.notifyListeners(ChangeListenerConstants.POSITION);
    }

    moveXTo(x) {
        this._x2 += x - this._x1;
        this._x1 = x;
        this.notifyListeners(ChangeListenerConstants.POSITION);
    }

    resizeTo({width, w, height, h} = {}) {
        width = getNonNullValue(width, w);
        height = getNonNullValue(height, h);
        if (isNotNull(width)) {
            this.x2 += width - this.width;
        }
        if (isNotNull(height)) {
            this.y2 += height - this.height;
        }
    }

    resizeBy({width, w, height, h} = {}) {
        width = getNonNullValue(width, w);
        height = getNonNullValue(height, h);
        if (isNotNull(width)) {
            this.x2 += width;
        }
        if (isNotNull(height)) {
            this.y2 += height;
        }
    }

    appearance(json) {
        if (isNotNull(this.style)) {
            this.style.fromJSON(json);
            this.notifyListeners(ChangeListenerConstants.STYLING);
        } else {
            throw "The graphical element has no styling attributes defined.";
        }
    }

    /**
     * Returns a bounding box for the geometric shape content.
     * @returns {BoundingBox} bounding box for the geometric shape content.
     */
    contentBox({width, w, height, h} = {}) {
        width = getNonNullValue(width, w, this.width);
        height = getNonNullValue(height, h, this.height);
        // Assume, by default, a rectangular shape.
        let border = this.borderSize;
        return new BoundingBox({
            x1: this.x1 + border,
            y1: this.y1 + border,
            x2: this.x1 + width - border,
            y2: this.y1 + height - border
        });
    }

    /**
     * Returns the minimum width to fit the specified bounding box as its content.
     * @param boundingBox The content bounding box.
     * @returns {number} minimum width to fit the specified bounding box as its content.
     */
    widthToFit(boundingBox) {
        let boundingBoxWidth = boundingBox.x2 - boundingBox.x1;
        boundingBoxWidth += this.style.strokeWidth;
        return boundingBoxWidth;
    }

    /**
     * Returns the minimum height to fit the specified bounding box as its content.
     * @param {BoundingBox} boundingBox The content bounding box.
     * @returns {number} minimum height to fit the specified bounding box as its content.
     */
    heightToFit(boundingBox) {
        let boundingBoxHeight = boundingBox.y2 - boundingBox.y1;
        boundingBoxHeight += this.style.strokeWidth;
        return boundingBoxHeight;
    }

    remove() {
        this.notifyListeners(ChangeListenerConstants.REMOVE);
    }

    // Events.
    fireOnClick(event) {
        notifyListeners({listener: this._onClick, target: this}, event.clientX, event.clientY, event);
    }

    fireOnDblClick(event) {
        notifyListeners({listener: this._onDblClick, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseDown(event) {
        notifyListeners({listener: this._onMouseDown, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseMove(event) {
        notifyListeners({listener: this._onMouseMove, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseUp(event) {
        notifyListeners({listener: this._onMouseUp, target: this}, event.clientX, event.clientY, event);
    }

}