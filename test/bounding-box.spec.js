'use strict'

var assert = require('assert');
import BoundingBox from '../src/js/core/bounding-box';

let boundingBox = null;

describe('BoundingBox', () => {

    describe('Position and Dimensions', () => {

		beforeEach(function() {
			boundingBox = new BoundingBox({x1: 0, y1: 10, x2: 50, y2: 40});
		});
	
        it('X1 must be equal 0.', () => {
			assert.equal(boundingBox.x1, 0);
        });

		it('Y1 must be equal 10.', () => {
			assert.equal(boundingBox.y1, 10);
        });

		it('X2 must be equal 50.', () => {
			assert.equal(boundingBox.x2, 50);
        });

		it('Y2 must be equal 40.', () => {
			assert.equal(boundingBox.y2, 40);
        });
		
		it('Width must be equal 50.', () => {
			assert.equal(boundingBox.width, 50);
        });

		it('Height must be equal 30.', () => {
			assert.equal(boundingBox.height, 30);
        });

/*		it('X1 and x2 inverted (1).', () => {
			boundingBox.x1 = 51;
			assert.equal(boundingBox.x1, 50);
        });
		
		it('X1 and x2 inverted (2).', () => {
			boundingBox.x1 = 10;
			boundingBox.x2 = 5;
			assert.equal(boundingBox.x1, 5);
        });

		it('X1 and x2 inverted (3).', () => {
			boundingBox.x1 = 51;
			assert.equal(boundingBox.x2, 51);
        });
		
		it('X1 and x2 inverted (4).', () => {
			boundingBox.x1 = 10;
			boundingBox.x2 = 5;
			assert.equal(boundingBox.x2, 10);
        });

		it('Y1 and y2 inverted (1).', () => {
			boundingBox.y1 = 51;
			assert.equal(boundingBox.y1, 40);
        });
		
		it('Y1 and y2 inverted (2).', () => {
			boundingBox.y1 = 10;	
			boundingBox.y2 = 5;
			assert.equal(boundingBox.y1, 5);
        });

		it('Y1 and y2 inverted (3).', () => {
			boundingBox.y1 = 51;
			assert.equal(boundingBox.y2, 51);
        });
		
		it('Y1 and Y2 inverted (4).', () => {
			boundingBox.y1 = 10;
			boundingBox.y2 = 5;
			assert.equal(boundingBox.y2, 10);
        }); */

	});

});