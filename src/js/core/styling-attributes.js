/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from "./change-listener";

export default class StylingAttributes {

    constructor(strokeWidth = 3, strokeColor = 'black', fillColor = '#FFFFCC', strokeDashArray = null, target = null) {
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._target = target;
        this._strokeDashArray = strokeDashArray;
        //this._visible = true;
    }

/*
    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
        this.notifyTarget();
    }
*/

    get strokeWidth() {
        return this._strokeWidth;
    }

    set strokeWidth(value) {
        this._strokeWidth = value;
        this.notifyTarget();
    }

    get strokeColor() {
        return this._strokeColor;
    }

    set strokeColor(value) {
        this._strokeColor = value;
        this.notifyTarget();
    }

    get fillColor() {
        return this._fillColor;
    }

    set fillColor(value) {
        this._fillColor = value;
        this.notifyTarget();
    }

    get strokeDashArray() {
        return this._strokeDashArray;
    }

    set strokeDashArray(value) {
        this._strokeDashArray = value;
    }

    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
    }

    fromJSON(json) {
        this.fillColor = json.fill;
        this.strokeColor = json.stroke;
        this.strokeWidth = json.strokeWidth;
    }

    toJSON() {
        //let visibilityValue = this.visible ? "visible" : "hidden";
        return {
            fill: this.fillColor,
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth
        };
        // visibility: visibilityValue
    }

    toString() {
        let style = "stroke:" + this.strokeColor + "; fill: " + this.fillColor + "; stroke-width: " + this.strokeWidth + ";";
        if (this.strokeDashArray !== null) {
            style += " stroke-dasharray: " + this.strokeDashArray + ";";
        }
        style += "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;";
        return style;
    }

    notifyTarget() {
        if (this.target !== null) {
            this.target.notifyListeners(ChangeListener.STYLING);
        }
    }

}