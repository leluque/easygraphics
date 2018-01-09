/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';

export default class FontStylingAttributes {
    constructor(family = "'Roboto', sans-serif", size = 13, weight = "100", style = "normal", target = null) {
        this._family = family;
        this._size = size;
        this._weight = weight;
        this._target = target;
        this._style = style;
    }

    get style() {
        return this._style;
    }

    set style(value) {
        this._style = value;
    }

    get family() {
        return this._family;
    }

    set family(value) {
        this._family = value;
        this.target.notifyListeners();
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
        this.target.notifyListeners();
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
        this.target.notifyListeners();
    }

    get target() {
        return this._target;
    }

    set target(value) {
        this._target = value;
        this.target.notifyListeners();
    }
}