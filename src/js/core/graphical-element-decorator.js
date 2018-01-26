/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2018.
 */

'use strict';

import GraphicalElement from "./graphical-element";

export default class GraphicalElementDecorator extends GraphicalElement {

    constructor(decorated) {
        super({x: decorated.x, y: decorated.y, width: decorated.width, height: decorated.height});
        this._decorated = decorated;
    }

    get decorated() {
        return this._decorated;
    }

    set decorated(value) {
        this._decorated = value;
    }

    // Delegate.

    get changeNotificationsEnabled() {
        return this._decorated.changeNotificationsEnabled;
    }

    get x() {
        return this._decorated.x;
    }

    set x(value) {
        this._decorated.x = value;
    }

    get y() {
        return this._decorated.y;
    }

    set y(value) {
        this._decorated.y = value;
    }

    get width() {
        return this._decorated.width;
    }

    set width(value) {
        this._decorated.width = value;
    }

    get minWidth() {
        return this._decorated.minWidth;
    }

    set minWidth(value) {
        this._decorated.minWidth = value;
    }

    get height() {
        return this._decorated.height;
    }

    set height(value) {
        this._decorated.height = value;
    }

    get minHeight() {
        return this._decorated.minHeight;
    }

    set minHeight(value) {
        this._decorated.minHeight = value;
    }

    get rotation() {
        return this._decorated.rotation;
    }

    set rotation(value) {
        this._decorated.rotation = value;
    }

    get rotationCenterX() {
        return this._decorated.rotationCenterX;
    }

    set rotationCenterX(value) {
        this._decorated.rotationCenterX = value;
    }

    get rotationCenterY() {
        return this._decorated.rotationCenterY;
    }

    set rotationCenterY(value) {
        this._decorated.rotationCenterY = value;
    }

    get x2() {
        return this._decorated.x2;
    }

    set x2(value) {
        this._decorated.x2 = value;
    }

    get y2() {
        return this._decorated.y2;
    }

    set y2(value) {
        this._decorated.y2 = value;
    }

    get stylingAttributes() {
        return this._decorated.stylingAttributes;
    }

    set stylingAttributes(value) {
        this._decorated.stylingAttributes = value;
    }

    get borderSize() {
        return this._decorated.borderSize;
    }

    get id() {
        return this._decorated.id;
    }

    set id(value) {
        this._decorated.id = value;
    }

    /*    get drawn() {
            return this._decorated.drawn;
        }

        set drawn(value) {
            this._decorated.drawn = value;
        }*/

    get changeListeners() {
        return this._decorated.changeListeners;
    }

    set changeListeners(value) {
        this._decorated.changeListeners = value;
    }

    get onClick() {
        return this._decorated.onClick;
    }

    set onClick(value) {
        this._decorated.onClick = value;
    }

    get onDblClick() {
        return this._decorated.onDblClick;
    }

    set onDblClick(value) {
        this._decorated.onDblClick = value;
    }

    get onMouseDown() {
        return this._decorated.onMouseDown;
    }

    set onMouseDown(value) {
        this._decorated.onMouseDown = value;
    }

    get onMouseMove() {
        return this._decorated.onMouseMove;
    }

    set onMouseMove(value) {
        this._decorated.onMouseMove = value;
    }

    get onMouseUp() {
        return this._decorated.onMouseUp;
    }

    set onMouseUp(value) {
        this._decorated.onMouseUp = value;
    }

    get tag() {
        return this._decorated.tag;
    }

    set tag(value) {
        this._decorated.tag = value;
    }

    disableChangeNotifications() {
        this._decorated.disableChangeNotifications();
    }

    enableChangeNotifications() {
        this._decorated.enableChangeNotifications();
    }

    boundaryX1For(givenY) {
        return this._decorated.boundaryX1For(givenY);
    }

    boundaryX2For(givenY) {
        return this._decorated.boundaryX2For(givenY);
    }

    moveTo(newX, newY) {
        this._decorated.moveLayerTo(newX, newY);
    }

    resize(newWidth, newHeight) {
        this._decorated.resize(newWidth, newHeight);
    }

    appearance(json) {
        this._decorated.appearance(json);
    }

    contentBox(width, height) {
        return this._decorated.contentBox(width, height);
    }

    widthToFit(boundingBox) {
        return this._decorated.widthToFit(boundingBox);
    }

    heightToFit(boundingBox) {
        return this._decorated.heightToFit(boundingBox);
    }

    addChangeListener(value) {
        this._decorated.addChangeListener(value);
    }

    notifyListeners() {
        this._decorated.notifyListeners();
    }

    fireOnClick(event) {
        this._decorated.fireOnClick(event);
    }

    fireOnDblClick(event) {
        this._decorated.fireOnDblClick(event);
    }

    fireOnMouseDown(event) {
        this._decorated.fireOnMouseDown(event);
    }

    fireOnMouseMove(event) {
        this._decorated.fireOnMouseMove(event);
    }

    fireOnMouseUp(event) {
        this._decorated.fireOnMouseUp(event);
    }

    addTag(key, value) {
        this._decorated.addTag(key, value);
    }

    countTags() {
        return this._decorated.countTags();
    }

    getTag(key) {
        return this._decorated.getTag(key);
    }

    getTagsKeys() {
        return this._decorated.getTagsKeys();
    }

    removeTag(key) {
        this._decorated.removeTag(key);
    }
}
