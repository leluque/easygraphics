/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */

'use strict';

import ChangeListener from './change-listener.js';

export default class BoxVerticesDecoratorDecoratedRotationChangeListener
    extends ChangeListener {

    constructor(decorator) {
        super(ChangeListener.ROTATION);
        this._decorator = decorator;
    }

    get decorator() {
        return this._decorator;
    }

    set decorator(value) {
        this._decorator = value;
    }

    update(target) {
        this.decorator.disableChangeNotifications();
        this.decorator.rotation = this.decorator.decorated.rotation;
        this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
        this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
        this.decorator.enableChangeNotifications();
        this.decorator.notifyListeners(ChangeListener.ROTATION);
    }

}