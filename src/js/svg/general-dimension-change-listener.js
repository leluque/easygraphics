/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class GeneralDimensionChangeListener extends ChangeListener {

    constructor() {
        super(ChangeListener.DIMENSION);
    }

    update(target) {
        this.changeWidth(target);
        this.changeHeight(target);
    }

    changeWidth(target) {
        target.drawn.setAttribute("width", target.width);
    }

    changeHeight(target) {
        target.drawn.setAttribute("height", target.height);
    }

}