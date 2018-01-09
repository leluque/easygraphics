/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GeneralPositionChangeListener from './general-position-change-listener.js';

export default class TextPositionChangeListener extends GeneralPositionChangeListener {

    changeY(target) {
        // The hanging baseline-alignment was not working equally on all browsers.
        // Because of that, the alignment was changed to baseline and now the
        // text must be drawn based on its bottom y coordinate.

        // 3/4 was used because the bottom-line alignment put the bottom part of
        // letters such as p and q bellow the line.
        target.drawn.setAttribute("y", (target.y + 3 * target.height / 4));
    }

}