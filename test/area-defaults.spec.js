'use strict'

var assert = require('assert');
import AreaDefaults from '../src/js/core/area-defaults';

describe('AreaDefaults', () => {

    describe('Layers', () => {

        it('The layer counting is correct?', () => {
            let areaDefaults = new AreaDefaults();
            //
			areaDefaults.newLayer();
			areaDefaults.newLayer();
			areaDefaults.newLayer();
			areaDefaults.newLayer();
			// Compare the number of layers (remembering that there is a default one).
			assert.equal(areaDefaults.countLayers(), 5);
        });
    });

});