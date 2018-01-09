/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class GeneralTransformationChangeListener extends ChangeListener {

    update(target) {
        target.drawn.setAttribute("transform", "rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
    }

}