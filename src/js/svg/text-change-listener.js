/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from '../core/change-listener.js';

export default class TextChangeListener extends ChangeListener {

    constructor() {
        super(ChangeListener.OTHER);
    }

    update(target) {
        target.drawn.textContent = target.text;
        // As the text changed, the graphical element minimum width and height must be updated.
        let boundingBox = target.drawn.getBoundingClientRect();
        target.disableChangeNotifications(); // Avoid stack overflow.
        target.minWidth = boundingBox.width;
        target.minHeight = boundingBox.height;
        target.width = boundingBox.width;
        target.height = boundingBox.height;
        target.enableChangeNotifications();
    }
}