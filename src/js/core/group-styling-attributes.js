/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';

export default class GroupStylingAttributes {

    constructor(horMargin = 10, verMargin = 10) {
        this._horMargin = horMargin;
        this._verMargin = verMargin;
    }

    get horMargin() {
        return this._horMargin;
    }

    set horMargin(value) {
        this._horMargin = value;
    }

    get verMargin() {
        return this._verMargin;
    }

    set verMargin(value) {
        this._verMargin = value;
    }

}