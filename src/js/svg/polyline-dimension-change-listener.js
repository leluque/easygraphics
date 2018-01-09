/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2017.
 */

'use strict';

import GeneralDimensionChangeListener from './general-dimension-change-listener.js';

export default class PolyLineDimensionChangeListener extends GeneralDimensionChangeListener {

    changeWidth(target) {
        this.update(target);
    }

    changeHeight(target) {
        this.update(target);
    }

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