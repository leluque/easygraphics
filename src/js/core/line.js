/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import StylingAttributes from './styling-attributes';

export default class Line extends GraphicalElement {

    constructor(x1 = 10, y1 = 10, x2 = 1, y2 = 1, lineStylingAttributes = new StylingAttributes(1)) {
        super({
            x: x1,
            y: y1,
            width: x2 - x1 + lineStylingAttributes.strokeWidth,
            height: y2 - y1 + lineStylingAttributes.strokeWidth,
            stylingAttributes: lineStylingAttributes
        });
    }

    get x1() {
        return this.x;
    }

    set x1(value) {
        this.x = value;
    }

    get y1() {
        return this.y;
    }

    set y1(value) {
        this.y = value;
    }

    get minWidth() {
        if (this.stylingAttributes !== null) {
            return this.stylingAttributes.strokeWidth;
        }
        return 1;
    }

    get minHeight() {
        if (this.stylingAttributes !== null) {
            return this.stylingAttributes.strokeWidth;
        }
        return 1;
    }

}