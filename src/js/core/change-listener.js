/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

/**
 * This class implements a listener for changes in graphical elements.
 */
export default class ChangeListener {

    constructor() {
        this._types = arguments;
    }

    static get DIMENSION() {
        return "dimension";
    }

    static get POSITION() {
        return "position";
    }

    static get ROTATION() {
        return "rotation";
    }

    static get STYLING() {
        return "styling";
    }

    static get OTHER() {
        return "other";
    }

    get types() {
        return this._types;
    }

    set types(value) {
        this._types = arguments;
    }

    update(target) {
        // Update.
    }

    hasType(targetType) {
        return this._types.indexOf(targetType) >= 0;
    }

    hasAnyType() {
        for (let i = 0; i < this._types.length; i++) {
            for (let j = 0; j < arguments.length; j++) {
                if (this._types[i] === arguments[j]) {
                    return true;
                }
            }
        }
        return false;
    }

}