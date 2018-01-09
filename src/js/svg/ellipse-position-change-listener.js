/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralPositionChangeListener from './general-position-change-listener.js';

export default class EllipsePositionChangeListener extends GeneralPositionChangeListener {

    changeX(target) {
        target.drawn.setAttribute("cx", target.centerX);
    }

    changeY(target) {
        target.drawn.setAttribute("cy", target.centerY);
    }

}