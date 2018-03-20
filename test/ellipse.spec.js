'use strict'

var assert = require('assert');
import Ellipse from '../src/js/core/ellipse';

let ellipse = null;

describe('Ellipse', () => {

	describe('Constructor', () => {
		
		it('x1 must be equal to 10 (1)', () => {
			ellipse = new Ellipse({x: 0, x1: 10, y: 0, width: 50, height: 50});
			assert.equal(ellipse.x1, 10);
		});
		
		it('x1 must be equal to 10 (2)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y: 0, width: 50, height: 50});
			assert.equal(ellipse.x1, 10);
		});

		it('x2 must be equal to 20 (1)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y: 0, width: 10, height: 50});
			assert.equal(ellipse.x2, 20);
		});
		
		it('x2 must be equal to 20 (2)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y: 0, width: 30, x2: 20, height: 50});
			assert.equal(ellipse.x2, 20);
		});
		
		it('y1 must be equal to 10 (1)', () => {
			ellipse = new Ellipse({x: 0, x1: 10, y: 0, y1: 10, width: 50, height: 50});
			assert.equal(ellipse.y1, 10);
		});
		
		it('y1 must be equal to 10 (2)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y1: 10, y: 0, width: 50, height: 50});
			assert.equal(ellipse.y1, 10);
		});

		it('y2 must be equal to 20 (1)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y: 0, width: 10, height: 20});
			assert.equal(ellipse.y2, 20);
		});
		
		it('y2 must be equal to 20 (2)', () => {
			ellipse = new Ellipse({x1: 10, x: 0, y: 0, width: 30, y2: 20, height: 50});
			assert.equal(ellipse.y2, 20);
		});
		
	});

    describe('Position and Dimensions', () => {

		beforeEach(function() {
			ellipse = new Ellipse({x: 0, y: 10, width: 50, height: 50});
		});
	
        it('X1 must be equal 0.', () => {
			assert.equal(ellipse.x1, 0);
        });

		it('Y1 must be equal 10.', () => {
			assert.equal(ellipse.y1, 10);
        });

		it('X2 must be equal 50.', () => {
			assert.equal(ellipse.x2, 50);
        });

		it('Y2 must be equal 60.', () => {
			assert.equal(ellipse.y2, 60);
        });
		
		it('Width must be equal 50.', () => {
			assert.equal(ellipse.width, 50);
        });

		it('Height must be equal 50.', () => {
			assert.equal(ellipse.height, 50);
        });

		it('Width must be equal 50', () => {
			assert.equal(ellipse.width, 50);
        });

		it('Width must be equal 40', () => {
			ellipse.x += 10;
			assert.equal(ellipse.width, 40);
        });

		it('Height must be equal 50', () => {
			assert.equal(ellipse.height, 50);
        });

		it('Height must be equal 40', () => {
			ellipse.y += 10;
			assert.equal(ellipse.height, 40);
        });
		
	});
	
	describe('moveBy', () => {
		
		beforeEach(function() {
			ellipse = new Ellipse({x: 0, y: 10, width: 50, height: 50});
		});

		it('X1 must be equal to 20', () => {
			ellipse.moveBy({x: 20, y: 0});
			assert.equal(ellipse.x1, 20);
        });

		it('X2 must be equal to 70', () => {
			ellipse.moveBy({x: 20, y: 0});
			assert.equal(ellipse.x2, 70);
        });

		it('Y1 must be equal to 20', () => {
			ellipse.moveBy({x: 20, y: 10});
			assert.equal(ellipse.y1, 20);
        });

		it('Y2 must be equal to 70', () => {
			ellipse.moveBy({x: 20, y: 10});
			assert.equal(ellipse.y2, 70);
        });
		
		it('Width must be equal to 50', () => {
			ellipse.moveBy({x: 20, y: 0});
			assert.equal(ellipse.width, 50);
        });

		it('Height must be equal to 50', () => {
			ellipse.moveBy({x: 20, y: 30});
			assert.equal(ellipse.height, 50);
        });
				
	});

	describe('moveTo', () => {
		
		beforeEach(function() {
			ellipse = new Ellipse({x: 0, y: 0, width: 50, height: 50});
		});

		it('X1 must be equal to 20', () => {
			ellipse.moveTo({x: 20, y: 10});
			assert.equal(ellipse.x1, 20);
        });

		it('X2 must be equal to 70', () => {
			ellipse.moveTo({x: 20, y: 0});
			assert.equal(ellipse.x2, 70);
        });

		it('Y1 must be equal to 20', () => {
			ellipse.moveTo({x: 10, y: 20});
			assert.equal(ellipse.y1, 20);
        });

		it('Y2 must be equal to 60', () => {
			ellipse.moveTo({x: 20, y: 10});
			assert.equal(ellipse.y2, 60);
        });
		
		it('Width must be equal to 50', () => {
			ellipse.moveTo({x: 20, y: 0});
			assert.equal(ellipse.width, 50);
        });

		it('Height must be equal to 50', () => {
			ellipse.moveTo({x: 20, y: 30});
			assert.equal(ellipse.height, 50);
        });
				
	});

	describe('resizeTo', () => {
		
		beforeEach(function() {
			ellipse = new Ellipse({x: 0, y: 0, width: 50, height: 50});
		});

		it('X1 must be equal to 0', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.x1, 0);
        });

		it('X2 must be equal to 20', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.x2, 20);
		});

		it('Y1 must be equal to 0', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.y1, 0);
        });

		it('Y2 must be equal to 60', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.y2, 10);
        });
		
		it('Width must be equal to 20', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.width, 20);
        });

		it('Height must be equal to 30', () => {
			ellipse.resizeTo({w: 20, h: 30});
			assert.equal(ellipse.height, 30);
        });
				
	});
	
	describe('resizeTo', () => {
		
		it('X1 must be equal to 0', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.x1, 0);
        });

		it('X2 must be equal to 20', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.x2, 20);
		});

		it('Y1 must be equal to 0', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.y1, 0);
        });

		it('Y2 must be equal to 60', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.y2, 10);
        });
		
		it('Width must be equal to 20', () => {
			ellipse.resizeTo({w: 20, h: 10});
			assert.equal(ellipse.width, 20);
        });

		it('Height must be equal to 30', () => {
			ellipse.resizeTo({w: 20, h: 30});
			assert.equal(ellipse.height, 30);
        });
				
	});

});