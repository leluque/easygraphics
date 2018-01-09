/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralPositionChangeListener from './general-position-change-listener.js';

export default class DiamondPositionChangeListener extends GeneralPositionChangeListener {

    changeX(target) {
        this.updateCoordinates(target);
    }

    changeY(target) {
        this.updateCoordinates(target);
    }

    updateCoordinates(target) {
        let middleX = target.x + target.width / 2;
        let middleY = target.y + target.height / 2;
        let coordinates = "M " + target.x + "," + middleY;
        coordinates += " " + middleX + "," + target.y;
        coordinates += " " + (target.x + target.width) + "," + middleY;
        coordinates += " " + middleX + "," + (target.y + target.height);
        // The left diamond corner was not being drawn correctly because of the border.
        // To correct that, it was necessary to use the Pythagoras' theorem to move
        // a little bit up.
        let adjustment = Math.sqrt(target.borderSize * target.borderSize / 2);
        coordinates += " " + (target.x - adjustment) + "," + (middleY - adjustment);
        target.drawn.setAttribute("d", coordinates);
    }

}