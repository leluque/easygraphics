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

import ChangeListener from '../../core/listener/change-listener.js';
import SVGAreaConstants from "../svg-area-constants";
import ChangeListenerConstants from "../../core/listener/change-listener-constants";

export default class VerticalGroupChildrenChangeListener
    extends ChangeListener {

    constructor(vGroup) {
        super(ChangeListenerConstants.OTHER);
        this._vGroup = vGroup;
    }

    static get DRAWN_CHILD() {
        return "VERTICAL_GROUP_DRAWN_CHILD";
    }

    get vGroup() {
        return this._vGroup;
    }

    set vGroup(value) {
        this._vGroup = value;
    }

    update(target) {
        let newGroup = this.vGroup.getTag(SVGAreaConstants.DRAWN);
        for (let i = 0; i < this.vGroup.countChildren(); i++) {
            if (this.vGroup !== this.vGroup.childAt(i).getTag(VerticalGroupChildrenChangeListener.DRAWN_CHILD)) {
                newGroup.appendChild(this.vGroup.childAt(i).getTag(SVGAreaConstants.DRAWN));
                this.vGroup.childAt(i).addTag({key: VerticalGroupChildrenChangeListener.DRAWN_CHILD, value: newGroup});
            }
        }

    }

}