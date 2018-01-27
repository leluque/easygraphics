/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import StylingAttributes from './styling-attributes.js';
import ChangeListener from "./change-listener";
import {notifyListeners, validateArgumentsObject} from "./util";

/**
 * This class implements the default behaviour of graphical elements.
 * It is the base class for all graphical elements.
 */
export default class GraphicalElement {

    //constructor(x = 0, y = 0, width = 7, height = 7, stylingAttributes = new StylingAttributes(), id = -1, preserveAspectRatio = false) {
    constructor(argumentsObject) {
        if (!argumentsObject || argumentsObject === null) {
            argumentsObject = {};
        }
        validateArgumentsObject(argumentsObject, 'id', -1);
        validateArgumentsObject(argumentsObject, 'x', 0);
        validateArgumentsObject(argumentsObject, 'y', 0);
        validateArgumentsObject(argumentsObject, 'width', 0);
        validateArgumentsObject(argumentsObject, 'height', 0);
        validateArgumentsObject(argumentsObject, 'stylingAttributes', function () {
            return new StylingAttributes();
        });
        validateArgumentsObject(argumentsObject, 'preserveAspectRatio', false);

        this._x = argumentsObject.x;
        this._y = argumentsObject.y;
        this._minWidth = 1;
        this._width = argumentsObject.width;
        this._minHeight = 1;
        this._height = argumentsObject.height;
        this._stylingAttributes = argumentsObject.stylingAttributes;
        this._stylingAttributes.target = this; // Bidirectional navigation.
        this._id = argumentsObject.id;
        this._drawn = null; // A reference to the shape drawn on a drawing area (in case of svg, for example).
        this._changeListeners = []; // A graphical element may have many change listeners.
        this._changeNotificationsEnabled = 0; // Must listeners be notified about changes?
                                              // 0 means yes.
                                              // Any value greater than 0 means a recursive call to
                                              // disable change notifications.
        this._rotation = 0; // Rotation angle in degrees.
        this._rotationCenterX = argumentsObject.x + argumentsObject.width / 2; // The rotation reference point x-coordinate.
        this._rotationCenterY = argumentsObject.y + argumentsObject.height / 2; // The rotation reference point y-coordinate.
        this._tag = null; // Additional information about the graphical element.
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

        this._preserveAspectRatio = argumentsObject.preserveAspectRatio;
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

    get x() {
        return this._x;
    }

    set x(value) {
        let delta = value - this._x;
        this._x = value;
        // Adjust the rotation center based on its current value and the variation of x.
        this.rotationCenterX += delta;
        this.notifyListeners(ChangeListener.POSITION);
    }

    get y() {
        return this._y;
    }

    set y(value) {
        let delta = value - this._y;
        this._y = value;
        // Adjust the rotation center based on its current value and the variation of y.
        this.rotationCenterY += delta;
        this.notifyListeners(ChangeListener.POSITION);
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value >= this.minWidth) {
            let relation = this.height / this.width;
            let delta = value - this._width;
            this._width = value;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            // Adjust the rotation center based on its current value and the variation of width.
            this.rotationCenterX += delta;
            // Preserve the aspect ratio?
            if (this.preserveAspectRatio) {
                this.preserveAspectRatio = false; // Necessary to avoid recursive calls.
                this.height = value * relation;
                this.preserveAspectRatio = true;
            }
            this.enableChangeNotifications();
            this.notifyListeners(ChangeListener.DIMENSION);
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
            let relation = this.width / this.height;
            let delta = value - this._height;
            this._height = value;
            this.disableChangeNotifications(); // Avoid unnecessary repeated notifications.
            // Adjust the rotation center based on its current value and the variation of height.
            this.rotationCenterX += delta;
            this.rotationCenterY = this.y + this.height / 2;
            // Preserve the aspect ratio?
            if (this.preserveAspectRatio) {
                this.preserveAspectRatio = false; // Necessary to avoid recursive calls.
                this.width = value * relation;
                this.preserveAspectRatio = true;
            }
            this.enableChangeNotifications();
            this.notifyListeners(ChangeListener.DIMENSION);
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
        this.notifyListeners(ChangeListener.ROTATION);
    }

    get rotationCenterX() {
        return this._rotationCenterX;
    }

    set rotationCenterX(value) {
        this._rotationCenterX = value;
        this.notifyListeners(ChangeListener.ROTATION);
    }

    get rotationCenterY() {
        return this._rotationCenterY;
    }

    set rotationCenterY(value) {
        this._rotationCenterY = value;
        this.notifyListeners(ChangeListener.ROTATION);
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
        this.notifyListeners(ChangeListener.STYLING);
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

    get tag() {
        return this._tag;
    }

    set tag(value) {
        this._tag = value;
    }

    get changeNotificationsEnabled() {
        return this._changeNotificationsEnabled === 0;
    }

    addTag(key, value) {
        // If does not exist a tag with the same key, add it.
        if (key in this._tags) {
            this._tags[key].push(value);
        }
        this._tags[key] = value;
        return true;
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
        this.notifyListeners(ChangeListener.STYLING);
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

    removeChangeListenerByType() {
        if (this._changeListeners) {
            for (let i = 0; i < this._changeListeners.length; i++) {
                if (this._changeListeners[i].hasAnyType(...arguments)) {
                    this._changeListeners.splice(i, 1);
                    i--;
                }
            }
        }
    }

    notifyListeners() {
        if (!this.changeNotificationsEnabled) {
            return;
        }
        for (let listener of this.changeListeners) {
            if (listener.hasAnyType(...arguments)) {
                listener.update(this);
            }
        }
    }

    // Events.
    fireOnClick(event) {
        notifyListeners(this._onClick, this, event.clientX, event.clientY, event);
    }

    fireOnDblClick(event) {
        notifyListeners(this._onDblClick, this, event.clientX, event.clientY, event);
    }

    fireOnMouseDown(event) {
        notifyListeners(this._onMouseDown, this, event.clientX, event.clientY, event);
    }

    fireOnMouseMove(event) {
        notifyListeners(this._onMouseMove, this, event.clientX, event.clientY, event);
    }

    fireOnMouseUp(event) {
        notifyListeners(this._onMouseUp, this, event.clientX, event.clientY, event);
    }
}