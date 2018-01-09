/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import BoundingBox from './bounding-box.js';
import StylingAttributes from "./styling-attributes";
import GroupStylingAttributes from "./group-styling-attributes";
import VerticalGroup from "./vertical-group";
import {angleBetween2Lines} from "./util";

export default class LinearGroup extends GraphicalElement {

    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, stylingAttributes = new StylingAttributes()) {
        super(x1, y1, x2 - x1, y2 - y1, stylingAttributes);
        this._verticalGroup = new VerticalGroup(x1, y1, stylingAttributes, new GroupStylingAttributes(0, 0));
    }

    get verticalGroup() {
        return this._verticalGroup;
    }

    set verticalGroup(value) {
        this._verticalGroup = value;
    }

    addChild(child, weight = 0, overlap = 0) {
        this.verticalGroup.addChild(child, VerticalGroup.WRAP_CONTENT, VerticalGroup.CENTER, weight, overlap);
        this.recalculate();
    }

    recalculate() {
        let lineHeight = 1 + Math.abs(Math.abs(this.verticalGroup.height - Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))));
        this.verticalGroup.increaseHeightBy(lineHeight);

        let groupX = Math.min(this.x1, this.x2) + this.width / 2 - this.verticalGroup.width / 2;
        let groupY = Math.min(this.y1, this.y2) - (this.verticalGroup.height - this.height) / 2;
        this.verticalGroup.x = groupX;
        this.verticalGroup.y = groupY;

        let middleX = this.verticalGroup.x + this.verticalGroup.width / 2;
        let angle = angleBetween2Lines(middleX, this.verticalGroup.y, middleX, this.verticalGroup.y + this.verticalGroup.height,
            this.x, this.y, this.x, this.y2);
        this.verticalGroup.rotation = -1 * angle;
    }
}