/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import StylingAttributes from './styling-attributes.js';

/**
 * This class implements the default behaviour of graphical elements.
 * It is the base class for all graphical elements.
 */
export default class GraphicalElement {

    constructor(x = 0, y = 0, width = 0, height = 0, stylingAttributes = new StylingAttributes(), id = -1) {
        this._x = x;
        this._y = y;
        this._minWidth = 1;
        this._width = width;
        this._minHeight = 1;
        this._height = height;
        this._stylingAttributes = stylingAttributes;
        this._stylingAttributes.target = this; // Bidirectional navigation.
        this._id = id;
        this._drawn = null; // A reference to the shape drawn on a drawing area.
        this._changeListeners = []; // A graphical element may have many change listeners.
        //this._changeNotificationsEnabled = true; // Must listeners be notified about changes?
        this._changeNotificationsEnabled = 0; // Must listeners be notified about changes?
                                              // 0 means yes.
                                              // Any value greater than 0 means a recursive call to
                                              // disable change notifications.
        this._rotation = 0; // Rotation angle in degrees.
        this._rotationCenterX = this.x + this.width / 2; // The rotation point x coordinate.
        this._rotationCenterY = this.y + this.height / 2; // The rotation point y coordinate.
    }

    get changeNotificationsEnabled() {
        return this._changeNotificationsEnabled === 0;
    }

/*
    set changeNotificationsEnabled(value) {
        this._changeNotificationsEnabled = value;
    }
*/

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
        this.rotationCenterX = this.x + this.width / 2;
        this.notifyListeners();
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
        this.rotationCenterY = this.y + this.height / 2;
        this.notifyListeners();
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value >= this.minWidth) {
            this._width = value;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.rotationCenterX = this.x + this.width / 2;
            this.enableChangeNotifications();
            this.notifyListeners();
        }
    }

    get minWidth() {
        return this._minWidth;
    }

    set minWidth(value) {
        this._minWidth = value;
        if (this.width < this.minWidth) {
            this.width = this.minWidth; // If the width changes, listeners will be notified.
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value >= this.minHeight) {
            this._height = value;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.rotationCenterY = this.y + this.height / 2;
            this.enableChangeNotifications();
            this.notifyListeners();
        }
    }

    get minHeight() {
        return this._minHeight;
    }

    set minHeight(value) {
        this._minHeight = value;
        if (this.height < this.minHeight) {
            this.height = this.minHeight; // If the height changes, listeners will be notified.
        }
    }

    get rotation() {
        return this._rotation;
    }

    set rotation(value) {
        this._rotation = value;
        this.notifyListeners();
    }

    get rotationCenterX() {
        return this._rotationCenterX;
    }

    set rotationCenterX(value) {
        this._rotationCenterX = value;
        this.notifyListeners();
    }

    get rotationCenterY() {
        return this._rotationCenterY;
    }

    set rotationCenterY(value) {
        this._rotationCenterY = value;
        this.notifyListeners();
    }

    get x2() {
        return this.x + this.width;
    }

    set x2(value) {
        if (value < this.x) {
            // Invert x1 and x2.
            let temp = this.x;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.x = value;
            this.enableChangeNotifications();
            this.width += temp - this.x;
        } else {
            this.width = value - this.x;
        }
    }

    get y2() {
        return this.y + this.height;
    }

    set y2(value) {
        if (value < this.y) {
            // Invert y1 and y2.
            let temp = this.y;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            this.y = value;
            this.enableChangeNotifications();
            this.height += temp - this.y;
        } else {
            this.height = value - this.y;
        }
    }

    get stylingAttributes() {
        return this._stylingAttributes;
    }

    set stylingAttributes(value) {
        this._stylingAttributes = value;
        value.target = this;
        this.notifyListeners();
    }

    get borderSize() {
        if (this.stylingAttributes !== null) {
            return this.stylingAttributes.strokeWidth / 2;
        }
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get drawn() {
        return this._drawn;
    }

    set drawn(value) {
        this._drawn = value;
    }

    get changeListeners() {
        return this._changeListeners;
    }

    set changeListeners(value) {
        this._changeListeners = value;
    }

    disableChangeNotifications() {
        //this.changeNotificationsEnabled = false;
        this._changeNotificationsEnabled++;
    }

    enableChangeNotifications() {
        //this.changeNotificationsEnabled = true;
        this._changeNotificationsEnabled--;
    }

    /**
     * Returns the minimum value of X that stays inside the geometric shape for
     * the specified y value.
     * @param givenY The y value.
     */
    boundaryX1For(givenY) {
        return this.x; // Assume, by default, a rectangular shape.
    }

    /**
     * Returns the maximum value of X that stays inside the geometric shape for
     * the specified y value.
     * @param givenY The y value.
     */
    boundaryX2For(givenY) {
        return this.x2; // Assume, by default, a rectangular shape.
    }

    moveTo(newX, newY) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        this.x = newX;
        this.enableChangeNotifications();
        this.y = newY;
    }

    resize(newWidth, newHeight) {
        this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
        this.width = newWidth;
        this.enableChangeNotifications();
        this.height = newHeight;
    }

    appearance(json) {
        this.stylingAttributes.fromJSON(json);
        this.notifyListeners();
    }

    /**
     * Returns a bounding box for the geometric shape content.
     * @returns A bounding box for the geometric shape content.
     */
    contentBox(width, height) {
        return null;
    }

    /**
     * Returns the minimum width to fit the specified bounding box as its content.
     * @param boundingBox The content bounding box.
     * @returns The minimum width to fit the specified bounding box as its content.
     */
    widthToFit(boundingBox) {
        return null;
    }

    /**
     * Returns the minimum height to fit the specified bounding box as its content.
     * @param boundingBox The content bounding box.
     * @returns The minimum height to fit the specified bounding box as its content.
     */
    heightToFit(boundingBox) {
        return null;
    }

    addChangeListener(value) {
        this._changeListeners.push(value);
    }

    notifyListeners() {
        if (!this.changeNotificationsEnabled) {
            return;
        }
        for (let listener of this.changeListeners) {
            listener.update(this);
        }
    }

}