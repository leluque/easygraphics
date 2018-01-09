/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralPositionChangeListener from './general-position-change-listener.js';

export default class LinePositionChangeListener extends GeneralPositionChangeListener {
    update(target) {
        // (-borderSize) was used because (+borderSize * 2) was used at line constructor so that the line has at least one pixel even if their initial and final coordinate are equal.
        // The difference between no product and * 2 is necessary to center the line.
        target.drawn.setAttribute("x1", target.x1 + target.borderSize);
        target.drawn.setAttribute("y1", target.y1 + target.borderSize);
        target.drawn.setAttribute("x2", target.x2 - target.borderSize);
        target.drawn.setAttribute("y2", target.y2 - target.borderSize);
    }
}