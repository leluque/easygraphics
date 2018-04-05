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
import {error} from "../core/util";

/**
 * This class draws BoxVerticesDecorator.
 */
export default class DefaultBoxVerticesDecoratorDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    /**
     * Draw a box vertices decorator on a SVG area and return the generated SVG element.
     * @param {BoxVerticesDecorator} boxVerticesDecorator The box vertices decorator to be drawn.
     * @return A SVG group element.
     */
    draw(boxVerticesDecorator) {
        let newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", boxVerticesDecorator.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        if (null !== boxVerticesDecorator.decorated) {
            let decorated = boxVerticesDecorator.decorated;
            newGroup.appendChild(decorated.getTag(SVGAreaConstants.DRAWN));

            // Copy the decorated position (before changing it to 0,0) and dimension before removing its listener.
            boxVerticesDecorator.moveTo({x: decorated.x1, y: decorated.y1});
            boxVerticesDecorator.resizeTo({
                width: decorated.width,
                height: decorated.height
            });
            decorated.disableChangeNotifications();
            decorated.moveTo({x: 0, y: 0});
            decorated.enableChangeNotifications();
            decorated.notifyListeners(ChangeListenerConstants.POSITION);

            //*****************************
            // Remove the decorated listener related to position, dimension, and rotation.
            // These events will be handled by the decorator group.
            decorated.removeChangeListenerByType(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION, ChangeListenerConstants.ROTATION);
            decorated.addChangeListener(new BoxVerticesDecoratorDecoratedPositionChangeListener(boxVerticesDecorator));
            decorated.addChangeListener(new BoxVerticesDecoratorDecoratedRotationChangeListener(boxVerticesDecorator));
            decorated.addChangeListener(new BoxVerticesDecoratorDecoratedDimensionChangeListener(boxVerticesDecorator));
        }

        //*****************************
        // Add group change listener.
        boxVerticesDecorator.addChangeListener(new BoxVerticesDecoratorChangeListener());

        let vertexSize = boxVerticesDecorator.vertexSize;
        let halfSize = (vertexSize - 1) / 2;

        let lookAndFeel = this.svgArea.lookAndFeel;
        let style = new Style({strokeWidth: 0, strokeColor: "black", fillColor: "black"});

        // Draw the box vertices.
        if (true === boxVerticesDecorator.topLeft) {
            boxVerticesDecorator.addTag({
                key: BoxVerticesDecorator.TOP_LEFT, value: this.generateVertex({
                    position: BoxVerticesDecorator.TOP_LEFT,
                    element: boxVerticesDecorator,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === boxVerticesDecorator.topRight) {
            boxVerticesDecorator.addTag({
                key: BoxVerticesDecorator.TOP_RIGHT, value: this.generateVertex({
                    position: BoxVerticesDecorator.TOP_RIGHT,
                    element: boxVerticesDecorator,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === boxVerticesDecorator.bottomLeft) {
            boxVerticesDecorator.addTag({
                key: BoxVerticesDecorator.BOTTOM_LEFT, value: this.generateVertex({
                    position: BoxVerticesDecorator.BOTTOM_LEFT,
                    element: boxVerticesDecorator,
                    halfSize: halfSize,
                    style: style,
                    lookAndFeel: lookAndFeel,
                    group: newGroup
                })
            });
        }
        if (true === boxVerticesDecorator.bottomRight) {
            boxVerticesDecorator.addTag({
                key: BoxVerticesDecorator.BOTTOM_RIGHT, value: this.generateVertex({
                    position: BoxVerticesDecorator.BOTTOM_RIGHT,
                    element: boxVerticesDecorator,
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
        if (BoxVerticesDecorator.TOP_RIGHT === position) {
            x1 = element.width - halfSize;
        } else if (BoxVerticesDecorator.BOTTOM_LEFT === position) {
            y1 = element.height - halfSize;
        } else if (BoxVerticesDecorator.BOTTOM_RIGHT === position) {
            x1 = element.width - halfSize;
            y1 = element.height - halfSize;
        } else if (BoxVerticesDecorator.TOP_LEFT === position) {
        } else {
            error("The position is invalid.");
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