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

import {isNotNull} from "./util";

export default class Observable {

    constructor() {
        this._changeListeners = []; // An observable may have many change listeners.
        this._changeNotificationsEnabled = 0; // Must listeners be notified about changes?
                                              // 0 means yes.
                                              // Any value greater than 0 implies a distance from
                                              // a notification. A value greater than 1 appears
                                              // when disableChangeNotifications() is called more
                                              // than once.
    }

    get changeListeners() {
        return this._changeListeners;
    }

    set changeListeners(value) {
        this._changeListeners = value;
    }

    get changeNotificationsEnabled() {
        return this._changeNotificationsEnabled === 0;
    }

    disableChangeNotifications() {
        this._changeNotificationsEnabled++;
    }

    enableChangeNotifications() {
        this._changeNotificationsEnabled--;
    }

    addChangeListener(value) {
        this._changeListeners.push(value);
    }

    removeChangeListenerByName(name) {
        if (isNotNull(this._changeListeners)) {
            for (let i = 0; i < this._changeListeners.length; i++) {
                if (this._changeListeners[i] instanceof name) {
                    this._changeListeners.splice(i, 1);
                    i--;
                }
            }
        }
    }

    removeChangeListenerByType() {
        if (isNotNull(this._changeListeners)) {
            for (let i = 0; i < this._changeListeners.length; i++) {
                if (this._changeListeners[i].hasAnyType(...arguments)) {
                    this._changeListeners.splice(i, 1);
                    i--;
                }
            }
        }
    }

    notifyListeners() {
        if (true === this.changeNotificationsEnabled) {
            for (let listener of this.changeListeners) {
                if (listener.hasAnyType(...arguments)) {
                    listener.update(this);
                }
            }
        }
    }

}