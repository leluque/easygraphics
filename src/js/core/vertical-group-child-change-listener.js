/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import ChangeListener from './change-listener.js';

export default class VerticalGroupChildChangeListener
    extends ChangeListener {

    constructor(vgroup) {
        super();
        this._vgroup = vgroup;
    }

    get vgroup() {
        return this._vgroup;
    }

    set vgroup(value) {
        this._vgroup = value;
    }

    update(target) {
        this.vgroup.readjustDimensions();
    }

}