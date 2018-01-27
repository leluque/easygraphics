'use strict'

var assert = require('assert');
import AreaDefaults from '../src/js/core/area-defaults';

let areaDefaults = null;

describe('AreaDefaults', () => {

    describe('Layers', () => {

		beforeEach(function() {
			areaDefaults = new AreaDefaults();
			areaDefaults.newLayer();
			areaDefaults.newLayer();
			areaDefaults.newLayer();
			areaDefaults.newLayer();
		});
	
        it('The layer counting must be equal 5.', () => {
			// Compare the number of layers (remembering that there is a default one).
			assert.equal(areaDefaults.countLayers(), 5);
        });

        it('The stack bottom layer must be the layer with id "l_1".', () => {
			assert.equal(areaDefaults.bottomLayer.id, 'l_1');
		});
		
		it('The stack top layer must be the layer with id "l_5".', () => {
			assert.equal(areaDefaults.topLayer.id, 'l_5');
		});
		
		it('The stack top layer must be the layer with id "l_4".', () => {
			let layer4 = areaDefaults.getLayerAt(3);
			areaDefaults.moveLayerUp(layer4);
			assert.equal(areaDefaults.topLayer.id, 'l_4');
		});
		
		it('The stack top layer must be the layer with id "l_3".', () => {
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.moveLayerUp(layer3);
			areaDefaults.moveLayerUp(layer3);
			assert.equal(areaDefaults.topLayer.id, 'l_3');
		});

		it('The stack top layer must still be the layer with id "l_3".', () => {
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.moveLayerUp(layer3);
			areaDefaults.moveLayerUp(layer3);
			areaDefaults.moveLayerUp(layer3);
			areaDefaults.moveLayerUp(layer3);
			areaDefaults.moveLayerUp(layer3);
			assert.equal(areaDefaults.topLayer.id, 'l_3');
		});
		
		it('The stack bottom layer must be the layer with id "l_5".', () => {
			let layer5 = areaDefaults.getLayerAt(4);
			areaDefaults.moveLayerDown(layer5);
			areaDefaults.moveLayerDown(layer5);
			areaDefaults.moveLayerDown(layer5);
			areaDefaults.moveLayerDown(layer5);
			assert.equal(areaDefaults.bottomLayer.id, 'l_5');
		});
		
		it('The layer stack must have the order: l_1, l_5, l_2, l_3, l_4.', () => {
			let layer5 = areaDefaults.getLayerAt(4);
			areaDefaults.moveLayerTo({layer: layer5, targetPosition: 1});
			assert.deepEqual(areaDefaults.layerStack.map(o => o.id), ["l_1","l_5","l_2","l_3","l_4"]);
		});
		
		it('The layer stack must have the order: l_1, l_2, l_4, l_5.', () => {
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.removeLayer({layer: layer3});
			assert.deepEqual(areaDefaults.layerStack.map(o => o.id), ["l_1","l_2","l_4","l_5"]);
		});

		it('The layer stack size must be equal 4', () => {
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.removeLayer({layer: layer3});
			assert.equal(areaDefaults.countLayers(), 4);
		});
		
		it('The layer adding callback function must be called.', function(done) {
			areaDefaults.onAddLayer = function() {done();};
			areaDefaults.newLayer();
		});

		it('The layer removing callback function must be called.', function(done) {
			areaDefaults.onRemoveLayer = function() {done();};
			areaDefaults.removeLayer({layer: areaDefaults.getLayerAt(2)});
		});
		
		it('The layer moving callback function must be called (1).', function(done) {
			areaDefaults.onChangeLayerOrder = function() {done();};
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.moveLayerUp(layer3);
		});

		it('The layer moving callback function must be called (2).', function(done) {
			areaDefaults.onChangeLayerOrder = function() {done();};
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.moveLayerDown(layer3);
		});
		
		it('The layer moving callback function must be called (3).', function(done) {
			areaDefaults.onChangeLayerOrder = function() {done();};
			let layer3 = areaDefaults.getLayerAt(2);
			areaDefaults.moveLayerTo({layer: layer3, position: 1});
		});
		
	});

});