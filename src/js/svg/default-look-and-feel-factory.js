/**
 * Created by Leandro Luque on 08/06/2017.
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
import LinearGroup from '../core/linear-group.js';
import DefaultLinearGroupDrawer from './default-linear-group-drawer.js';
import Line from '../core/line.js';
import DefaultLineDrawer from './default-line-drawer.js';
import Image from '../core/image.js';
import DefaultImageDrawer from './default-image-drawer.js';
import DefaultPolyLineDrawer from "./default-polyline-drawer";
import PolyLine from "../core/polyline";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import DefaultBoxVerticesDecoratorDrawer from "./default-box-vertices-decorator-drawer";

/**
 * This class implements a default look and feel factory.
 */
export default class DefaultLookAndFeelFactory {

    getDrawerFor(element) {
        if (Object.getPrototypeOf(element) === Circle.prototype) {
            return new DefaultCircleDrawer();
        } else if (Object.getPrototypeOf(element) === Ellipse.prototype) {
            return new DefaultEllipseDrawer();
        } else if (Object.getPrototypeOf(element) === Rectangle.prototype) {
            return new DefaultRectangleDrawer();
        } else if (Object.getPrototypeOf(element) === Diamond.prototype) {
            return new DefaultDiamondDrawer();
        } else if (Object.getPrototypeOf(element) === Text.prototype) {
            return new DefaultTextDrawer();
        } else if (Object.getPrototypeOf(element) === VerticalGroup.prototype) {
            return new DefaultVerticalGroupDrawer();
        } else if (Object.getPrototypeOf(element) === LinearGroup.prototype) {
            return new DefaultLinearGroupDrawer();
        } else if (Object.getPrototypeOf(element) === Line.prototype) {
            return new DefaultLineDrawer();
        } else if (Object.getPrototypeOf(element) === PolyLine.prototype) {
            return new DefaultPolyLineDrawer();
        } else if (Object.getPrototypeOf(element) === Image.prototype) {
            return new DefaultImageDrawer();
        } else if (Object.getPrototypeOf(element) === BoxVerticesDecorator.prototype) {
            return new DefaultBoxVerticesDecoratorDrawer();
        }
    }

}