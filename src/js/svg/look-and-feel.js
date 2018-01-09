/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

let lookAndFeelSingleton = null;

import DefaultLookAndFeelFactory from './default-look-and-feel-factory.js';

/**
 * This class implements a singleton that contains a factory created to return
 * drawers for geometric elements based on a specific look and feel.
 * If no look and feel factory is passed as an argument, a default one is adopted.
 */
export default class LookAndFeel {

    constructor(lookAndFeelFactory = new DefaultLookAndFeelFactory()) {
        if (!lookAndFeelSingleton) {
            lookAndFeelSingleton = this;

            this._lookAndFeelFactory = lookAndFeelFactory;
        }

        return lookAndFeelSingleton;
    }

    get lookAndFeelFactory() {
        return this._lookAndFeelFactory;
    }

    set lookAndFeelFactory(value) {
        this._lookAndFeelFactory = value;
    }

    getDrawerFor(element) {
        return this._lookAndFeelFactory.getDrawerFor(element);
    }

}