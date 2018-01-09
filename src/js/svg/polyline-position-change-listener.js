/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralPositionChangeListener from './general-position-change-listener.js';

export default class PolyLinePositionChangeListener extends GeneralPositionChangeListener {
    update(target) {
        // Construct the path.
        let path = "M";
        for (let i = 0; i < target.countPoints(); i++) {
            path += target.points[i].x + " " + target.points[i].y + " L";
        }
        path = path.substring(0, path.length - 2);

        target.drawn.setAttribute("d", path);
    }
}