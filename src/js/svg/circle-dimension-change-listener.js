/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralDimensionChangeListener from './general-dimension-change-listener.js';

export default class CircleDimensionChangeListener extends GeneralDimensionChangeListener {

    changeWidth(target) {
        target.drawn.setAttribute("r", target.radius);
    }

    changeHeight(target) {
        target.drawn.setAttribute("r", target.radius);
    }

}