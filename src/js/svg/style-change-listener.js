/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class StyleChangeListener extends ChangeListener {

    constructor() {
        super(ChangeListener.STYLING);
    }

    update(target) {
        Object.assign(target.drawn.style, target.stylingAttributes.toJSON());
    }
}