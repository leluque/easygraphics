/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class GeneralPositionChangeListener extends ChangeListener {
    update(target) {
        this.changeX(target);
        this.changeY(target);
    }

    changeX(target) {
        target.drawn.setAttribute("x", target.x);
    }

    changeY(target) {
        target.drawn.setAttribute("y", target.y);
    }
}