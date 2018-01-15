/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralDimensionChangeListener from './general-dimension-change-listener.js';

export default class EllipseDimensionChangeListener extends GeneralDimensionChangeListener {

    changeWidth(target) {
        target.drawn.setAttribute("cx", target.centerX);
        target.drawn.setAttribute("rx", target.radiusX);
    }

    changeHeight(target) {
        target.drawn.setAttribute("cy", target.centerY);
        target.drawn.setAttribute("ry", target.radiusY);
    }

}