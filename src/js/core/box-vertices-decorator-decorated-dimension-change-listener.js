/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */

'use strict';

import ChangeListener from './change-listener.js';

export default class BoxVerticesDecoratorDecoratedDimensionChangeListener
    extends ChangeListener {

    constructor(decorator) {
        super(ChangeListener.DIMENSION);
        this._decorator = decorator;
    }

    get decorator() {
        return this._decorator;
    }

    set decorator(value) {
        this._decorator = value;
    }

    update(target) {
        let vertexSize = this.decorator.vertexSize;
        let halfSize = (vertexSize - 1) / 2;

        this.decorator.topRightVertex.x = this.decorator.width - halfSize;
        this.decorator.bottomLeftVertex.y = this.decorator.height - halfSize;
        this.decorator.bottomRightVertex.x = this.decorator.width - halfSize;
        this.decorator.bottomRightVertex.y = this.decorator.height - halfSize;
    }

}