/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from "../core/change-listener";

export default class BoxVerticesDecoratorChangeListener extends ChangeListener {

    constructor() {
        super(ChangeListener.POSITION, ChangeListener.ROTATION);
    }

    update(target) {
        target.drawn.setAttribute("transform", "translate(" + target.x + ", " + target.y + ") rotate(" + target.rotation + " " + target.rotationCenterX + " " + target.rotationCenterY + ")");
    }

}