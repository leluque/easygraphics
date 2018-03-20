'use strict'

var assert = require('assert');
import GraphicalElement from '../src/js/core/graphical-element';

let graphicalElement = null;

describe('GraphicalElement', () => {

	describe('Constructor', () => {
		
		it('x1 must be equal to 10 (1)', () => {
			graphicalElement = new GraphicalElement({x: 0, x1: 10, y: 0, width: 50, height: 50});
			assert.equal(graphicalElement.x1, 10);
		});
		
		it('x1 must be equal to 10 (2)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y: 0, width: 50, height: 50});
			assert.equal(graphicalElement.x1, 10);
		});

		it('x2 must be equal to 20 (1)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y: 0, width: 10, height: 50});
			assert.equal(graphicalElement.x2, 20);
		});
		
		it('x2 must be equal to 20 (2)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y: 0, width: 30, x2: 20, height: 50});
			assert.equal(graphicalElement.x2, 20);
		});

		it('y1 must be equal to 10 (1)', () => {
			graphicalElement = new GraphicalElement({x: 0, x1: 10, y: 0, y1: 10, width: 50, height: 50});
			assert.equal(graphicalElement.y1, 10);
		});
		
		it('y1 must be equal to 10 (2)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y1: 10, y: 0, width: 50, height: 50});
			assert.equal(graphicalElement.y1, 10);
		});

		it('y2 must be equal to 20 (1)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y: 0, width: 10, height: 20});
			assert.equal(graphicalElement.y2, 20);
		});
		
		it('y2 must be equal to 20 (2)', () => {
			graphicalElement = new GraphicalElement({x1: 10, x: 0, y: 0, width: 30, y2: 20, height: 50});
			assert.equal(graphicalElement.y2, 20);
		});
		
	});

    describe('Position and Dimensions', () => {

		beforeEach(function() {
			graphicalElement = new GraphicalElement({x: 0, y: 10, width: 50, height: 50});
		});
	
        it('X1 must be equal 0.', () => {
			assert.equal(graphicalElement.x1, 0);
        });

		it('Y1 must be equal 10.', () => {
			assert.equal(graphicalElement.y1, 10);
        });

		it('X2 must be equal 50.', () => {
			assert.equal(graphicalElement.x2, 50);
        });

		it('Y2 must be equal 60.', () => {
			assert.equal(graphicalElement.y2, 60);
        });
		
		it('Width must be equal 50.', () => {
			assert.equal(graphicalElement.width, 50);
        });

		it('Height must be equal 50.', () => {
			assert.equal(graphicalElement.height, 50);
        });

		it('Width must be equal 50', () => {
			assert.equal(graphicalElement.width, 50);
        });

		it('Width must be equal 40', () => {
			graphicalElement.x += 10;
			assert.equal(graphicalElement.width, 40);
        });

		it('Height must be equal 50', () => {
			assert.equal(graphicalElement.height, 50);
        });

		it('Height must be equal 40', () => {
			graphicalElement.y += 10;
			assert.equal(graphicalElement.height, 40);
        });
		
	});
	
	describe('moveBy', () => {
		
		beforeEach(function() {
			graphicalElement = new GraphicalElement({x: 0, y: 10, width: 50, height: 50});
		});

		it('X1 must be equal to 20', () => {
			graphicalElement.moveBy({x: 20, y: 0});
			assert.equal(graphicalElement.x1, 20);
        });

		it('X2 must be equal to 70', () => {
			graphicalElement.moveBy({x: 20, y: 0});
			assert.equal(graphicalElement.x2, 70);
        });

		it('Y1 must be equal to 20', () => {
			graphicalElement.moveBy({x: 20, y: 10});
			assert.equal(graphicalElement.y1, 20);
        });

		it('Y2 must be equal to 70', () => {
			graphicalElement.moveBy({x: 20, y: 10});
			assert.equal(graphicalElement.y2, 70);
        });
		
		it('Width must be equal to 50', () => {
			graphicalElement.moveBy({x: 20, y: 0});
			assert.equal(graphicalElement.width, 50);
        });

		it('Height must be equal to 50', () => {
			graphicalElement.moveBy({x: 20, y: 30});
			assert.equal(graphicalElement.height, 50);
        });
				
	});

	describe('moveTo', () => {
		
		beforeEach(function() {
			graphicalElement = new GraphicalElement({x: 0, y: 0, width: 50, height: 50});
		});

		it('X1 must be equal to 20', () => {
			graphicalElement.moveTo({x: 20, y: 10});
			assert.equal(graphicalElement.x1, 20);
        });

		it('X2 must be equal to 70', () => {
			graphicalElement.moveTo({x: 20, y: 0});
			assert.equal(graphicalElement.x2, 70);
        });

		it('Y1 must be equal to 20', () => {
			graphicalElement.moveTo({x: 10, y: 20});
			assert.equal(graphicalElement.y1, 20);
        });

		it('Y2 must be equal to 60', () => {
			graphicalElement.moveTo({x: 20, y: 10});
			assert.equal(graphicalElement.y2, 60);
        });
		
		it('Width must be equal to 50', () => {
			graphicalElement.moveTo({x: 20, y: 0});
			assert.equal(graphicalElement.width, 50);
        });

		it('Height must be equal to 50', () => {
			graphicalElement.moveTo({x: 20, y: 30});
			assert.equal(graphicalElement.height, 50);
        });
				
	});

	describe('resizeTo', () => {
		
		beforeEach(function() {
			graphicalElement = new GraphicalElement({x: 0, y: 0, width: 50, height: 50});
		});

		it('X1 must be equal to 0', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.x1, 0);
        });

		it('X2 must be equal to 20', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.x2, 20);
		});

		it('Y1 must be equal to 0', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.y1, 0);
        });

		it('Y2 must be equal to 60', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.y2, 10);
        });
		
		it('Width must be equal to 20', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.width, 20);
        });

		it('Height must be equal to 30', () => {
			graphicalElement.resizeTo({w: 20, h: 30});
			assert.equal(graphicalElement.height, 30);
        });
				
	});
	
	describe('resizeTo', () => {
		
		it('X1 must be equal to 0', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.x1, 0);
        });

		it('X2 must be equal to 20', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.x2, 20);
		});

		it('Y1 must be equal to 0', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.y1, 0);
        });

		it('Y2 must be equal to 60', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.y2, 10);
        });
		
		it('Width must be equal to 20', () => {
			graphicalElement.resizeTo({w: 20, h: 10});
			assert.equal(graphicalElement.width, 20);
        });

		it('Height must be equal to 30', () => {
			graphicalElement.resizeTo({w: 20, h: 30});
			assert.equal(graphicalElement.height, 30);
        });
				
	});

});