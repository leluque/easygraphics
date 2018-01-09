/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class FontChangeListener extends ChangeListener {
    update(target) {
        target.drawn.setAttribute("font-family", target.fontStylingAttributes.family);
        target.drawn.setAttribute("font-size", target.fontStylingAttributes.size);
        target.drawn.setAttribute("font-weight", target.fontStylingAttributes.weight);
        target.drawn.setAttribute("font-style", target.fontStylingAttributes.style);
    }
}