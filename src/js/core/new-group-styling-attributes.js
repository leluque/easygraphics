/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 26/01/2017.
 */

'use strict';

import {validateArgumentsObject} from "./util";

export default class NewGroupStylingAttributes {

    constructor(argumentsObject) {
        if (!argumentsObject || argumentsObject === null) {
            argumentsObject = {};
        }
        validateArgumentsObject(argumentsObject, 'horPadding', 0);
        validateArgumentsObject(argumentsObject, 'verPadding', 0);
        validateArgumentsObject(argumentsObject, 'verChildMargin', 0);

        this._horPadding = argumentsObject.horPadding;
        this._verPadding = argumentsObject.verPadding;
        this._verChildMargin = argumentsObject.verChildMargin;
    }

    get horPadding() {
        return this._horPadding;
    }

    set horPadding(value) {
        this._horPadding = value;
    }

    get verPadding() {
        return this._verPadding;
    }

    set verPadding(value) {
        this._verPadding = value;
    }

    get verChildMargin() {
        return this._verChildMargin;
    }

    set verChildMargin(value) {
        this._verChildMargin = value;
    }
}