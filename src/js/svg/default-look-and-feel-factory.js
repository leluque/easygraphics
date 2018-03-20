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

import Circle from '../core/circle.js';
import DefaultCircleDrawer from './default-circle-drawer.js';
import Ellipse from '../core/ellipse.js';
import DefaultEllipseDrawer from './default-ellipse-drawer.js';
import Rectangle from '../core/rectangle.js';
import DefaultRectangleDrawer from './default-rectangle-drawer.js';
import Diamond from '../core/diamond.js';
import DefaultDiamondDrawer from './default-diamond-drawer.js';
import Text from '../core/text.js';
import DefaultTextDrawer from './default-text-drawer.js';
import VerticalGroup from '../core/vertical-group.js';
import DefaultVerticalGroupDrawer from './default-vertical-group-drawer.js';
import Line from '../core/line.js';
import DefaultLineDrawer from './default-line-drawer.js';
import Image from '../core/image.js';
import DefaultImageDrawer from './default-image-drawer.js';
import DefaultPolyLineDrawer from "./default-polyline-drawer";
import PolyLine from "../core/polyline";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import DefaultBoxVerticesDecoratorDrawer from "./default-box-vertices-decorator-drawer";
import Marker from "../core/marker";
import DefaultMarkerDrawer from "./default-marker-drawer";

/**
 * This class implements a default look and feel factory for SVG areas.
 */
export default class DefaultLookAndFeelFactory {

    /**
     * Get a SVG drawer for the specified element.
     * @param {GraphicalElement} element The element must be a subclass of graphical element.
     * @return {*} A SVG drawer for the specified element.
     */
    getDrawerFor(element) {
        if(element instanceof Marker) {
            return new DefaultMarkerDrawer();
        }  else if (element instanceof Circle) {
            return new DefaultCircleDrawer();
        } else if (element instanceof Ellipse) {
            return new DefaultEllipseDrawer();
        } else if (element instanceof Rectangle) {
            return new DefaultRectangleDrawer();
        } else if (element instanceof Diamond) {
            return new DefaultDiamondDrawer();
        } else if (element instanceof Text) {
            return new DefaultTextDrawer();
        } else if (element instanceof VerticalGroup) {
            return new DefaultVerticalGroupDrawer();
        } else if (element instanceof Line) {
            return new DefaultLineDrawer();
        } else if (element instanceof PolyLine) {
            return new DefaultPolyLineDrawer();
        } else if (element instanceof Image) {
            return new DefaultImageDrawer();
        } else if (element instanceof BoxVerticesDecorator) {
            return new DefaultBoxVerticesDecoratorDrawer();
        } else {
            throw "No SVG drawer was found for the element.";
        }
    }

}