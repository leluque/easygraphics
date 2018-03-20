/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import ChangeListener from './change-listener.js';
import GraphicalElement from "../graphical-element";
import ChangeListenerConstants from "./change-listener-constants";

/**
 * This class implements a listener for changes in the rotation of box vertices decorators' decorated.
 */
export default class BoxVerticesDecoratorDecoratedRotationChangeListener
    extends ChangeListener {

    constructor(decorator) {
        if (decorator === undefined || decorator === null) {
            throw "The decorator cannot be null.";
        }
        if (!(decorator instanceof GraphicalElement)) {
            throw "The decorator must be an instance of GraphicalElement or one of its subclasses.";
        }

        super(ChangeListenerConstants.ROTATION);
        this._decorator = decorator;
    }

    get decorator() {
        return this._decorator;
    }

    /**
     * Update the rotation of the decorator.
     */
    update() {
        this.decorator.disableChangeNotifications();
        this.decorator.rotation = this.decorator.decorated.rotation;
        this.decorator.rotationCenterX = this.decorator.decorated.rotationCenterX;
        this.decorator.rotationCenterY = this.decorator.decorated.rotationCenterY;
        this.decorator.enableChangeNotifications();
        this.decorator.notifyListeners(ChangeListenerConstants.ROTATION);
    }

}