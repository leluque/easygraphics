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

import DefaultDrawer from './default-drawer.js';
import Rectangle from "../core/rectangle";
import Style from "../core/style/style";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import BoxVerticesDecoratorChangeListener from "./listener/box-vertices-decorator-change-listener";
import BoxVerticesDecoratorDecoratedRotationChangeListener from "../core/listener/box-vertices-decorator-decorated-rotation-change-listener";
import BoxVerticesDecoratorDecoratedPositionChangeListener from "../core/listener/box-vertices-decorator-decorated-position-change-listener";
import BoxVerticesDecoratorDecoratedDimensionChangeListener from "../core/listener/box-vertices-decorator-decorated-dimension-change-listener";
import GraphicalElement from "../core/graphical-element";
import ChangeListenerConstants from "../core/listener/change-listener-constants";
import SVGAreaConstants from "./svg-area-constants";

export default class DefaultBoxVerticesDecoratorDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a box vertices decorator on a SVG area and return the generated SVG element.
     * @param {BoxVerticesDecorator} element The box vertices decorator to be drawn.
     * @return A SVG group element.
     */
    draw(element) {
        let newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        if (element.decorated !== null) {
            newGroup.appendChild(element.decorated.getTag(SVGAreaConstants.DRAWN));

            // Copy the decorated position before removing its listener.
            element.moveTo({x: element.decorated.x1, y: element.decorated.y1});
            element.resizeTo({width: element.decorated.width, height: element.decorated.height});
            element.decorated.disableChangeNotifications();
            element.decorated.moveTo({x: 0, y: 0});
            element.decorated.enableChangeNotifications();
            element.decorated.notifyListeners(ChangeListenerConstants.POSITION);

            //*****************************
            // Remove the decorated listener related to position, dimension, and rotation.
            // These events will be handled by the decorator group.
            element.decorated.removeChangeListenerByType(ChangeListenerConstants.POSITION, ChangeListenerConstants.ROTATION);
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedPositionChangeListener(element));
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedRotationChangeListener(element));
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedDimensionChangeListener(element));
        }

        //*****************************
        // Add group change listener.
        element.addChangeListener(new BoxVerticesDecoratorChangeListener());

        let vertexSize = element.vertexSize;
        let halfSize = (vertexSize - 1) / 2;

        let lookAndFeel = this.svgArea.lookAndFeel;
        let style = new Style({strokeWidth: 0, strokeColor: "black", fillColor: "black"});

        // Draw the box vertices.
        if (true === element.topLeft) {
            element.addTag({
                key: BoxVerticesDecorator.TOP_LEFT, value: this.generateVertex({
                    position: BoxVerticesDecorator.TOP_LEFT,
                    element: element,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === element.topRight) {
            element.addTag({
                key: BoxVerticesDecorator.TOP_RIGHT, value: this.generateVertex({
                    position: BoxVerticesDecorator.TOP_RIGHT,
                    element: element,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === element.bottomLeft) {
            element.addTag({
                key: BoxVerticesDecorator.BOTTOM_LEFT, value: this.generateVertex({
                    position: BoxVerticesDecorator.BOTTOM_LEFT,
                    element: element,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === element.bottomRight) {
            element.addTag({
                key: BoxVerticesDecorator.BOTTOM_RIGHT, value: this.generateVertex({
                    position: BoxVerticesDecorator.BOTTOM_RIGHT,
                    element: element,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }

        return newGroup;
    }

    generateVertex({position, element, halfSize, style, lookAndFeel, group} = {}) {
        let x1 = 0 - halfSize;
        let y1 = 0 - halfSize;
        if (position === BoxVerticesDecorator.TOP_RIGHT) {
            x1 = element.width - halfSize;
        } else if (position === BoxVerticesDecorator.BOTTOM_LEFT) {
            y1 = element.height - halfSize;
        } else if (position === BoxVerticesDecorator.BOTTOM_RIGHT) {
            x1 = element.width - halfSize;
            y1 = element.height - halfSize;
        } else if (position === BoxVerticesDecorator.TOP_LEFT) {
        } else {
            throw "The position is invalid.";
        }

        let vertex = new Rectangle({
            x1: x1,
            y1: y1,
            width: 2 * halfSize,
            height: 2 * halfSize,
            style: style
        });
        vertex.addTag({key: BoxVerticesDecorator.VERTEX, value: position});
        vertex.addTag({key: BoxVerticesDecorator.IS_VERTEX, value: true});
        vertex.addTag({key: GraphicalElement.PARENT, value: element});
        // Get a drawer for the vertex.
        let drawer = lookAndFeel.getDrawerFor(vertex);
        drawer.svgArea = this.svgArea;
        let drawnChild = drawer.draw(vertex);
        vertex.addTag({key: SVGAreaConstants.DRAWN, value: drawnChild});
        group.appendChild(drawnChild);

        this.registerEvents(vertex, drawnChild, element);
        return vertex;
    }

    registerEvents(model, drawn, decorator) {
        drawn.onclick = model.fireOnClick.bind(model);
        model.onClick = decorator.dispatchOnVertexClick.bind(decorator);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        model.onDblClick = decorator.dispatchOnVertexDblClick.bind(decorator);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        model.onMouseDown = decorator.dispatchOnVertexMouseDown.bind(decorator);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        model.onMouseMove = decorator.dispatchOnVertexMouseMove.bind(decorator);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
        model.onMouseUp = decorator.dispatchOnVertexMouseUp.bind(decorator);
    }

}