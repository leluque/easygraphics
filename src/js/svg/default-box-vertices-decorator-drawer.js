/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import LookAndFeel from './look-and-feel.js';
import Rectangle from "../core/rectangle";
import StylingAttributes from "../core/styling-attributes";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import ChangeListener from "../core/change-listener";
import BoxVerticesDecoratorChangeListener from "./box-vertices-decorator-change-listener";
import BoxVerticesDecoratorDecoratedRotationChangeListener from "../core/box-vertices-decorator-decorated-rotation-change-listener";
import BoxVerticesDecoratorDecoratedPositionChangeListener from "../core/box-vertices-decorator-decorated-position-change-listener";
import BoxVerticesDecoratorDecoratedDimensionChangeListener from "../core/box-vertices-decorator-decorated-dimension-change-listener";
import GraphicalElement from "../core/graphical-element";

export default class DefaultBoxVerticesDecoratorDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        var newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        if (element.decorated !== null) {
            newGroup.appendChild(element.decorated.drawn);

            // Copy the decorated position before removing its listeners.
            element.x = element.decorated.x;
            element.y = element.decorated.y;
            element.width = element.decorated.width;
            element.height = element.decorated.height;
            element.decorated.disableChangeNotifications();
            element.decorated.x = 0;
            element.decorated.y = 0;
            element.decorated.enableChangeNotifications();
            element.decorated.notifyListeners(ChangeListener.POSITION);

            //*****************************
            // Remove the decorated listeners related to position, dimension, and rotation.
            // These events will be handled by the decorator group.
            element.decorated.removeChangeListenerByType(ChangeListener.POSITION, ChangeListener.ROTATION);
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedPositionChangeListener(element));
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedRotationChangeListener(element));
            element.decorated.addChangeListener(new BoxVerticesDecoratorDecoratedDimensionChangeListener(element));
        }

        //*****************************
        // Add group change listeners.
        element.addChangeListener(new BoxVerticesDecoratorChangeListener());

        let vertexSize = element.vertexSize;
        let halfSize = (vertexSize - 1) / 2;

        let lookAndFeel = new LookAndFeel();
        let stylingAttributes = new StylingAttributes(0, "black", "black");

        // Draw the box vertices.
        if (element.topLeft) {
            let vertexTL = new Rectangle(0 - halfSize, 0 - halfSize, 0 + halfSize, 0 + halfSize, stylingAttributes);
            vertexTL.tag = BoxVerticesDecorator.TOP_LEFT;
            vertexTL.addTag(BoxVerticesDecorator.VERTEX, true);
            vertexTL.addTag(GraphicalElement.PARENT, element);
            let drawerTL = lookAndFeel.getDrawerFor(vertexTL);
            drawerTL.svgArea = this.svgArea;
            var drawnChildTL = drawerTL.draw(vertexTL);
            vertexTL.drawn = drawnChildTL;
            newGroup.appendChild(drawnChildTL);
            this.registerEvents(vertexTL, drawnChildTL, element);
            element.topLeftVertex = vertexTL;
        }
        if (element.topRight) {
            let vertexTR = new Rectangle(element.width - halfSize, 0 - halfSize, element.width + halfSize, 0 + halfSize, stylingAttributes);
            vertexTR.tag = BoxVerticesDecorator.TOP_RIGHT;
            vertexTR.addTag(BoxVerticesDecorator.VERTEX, true);
            vertexTR.addTag(GraphicalElement.PARENT, element);
            let drawerTR = lookAndFeel.getDrawerFor(vertexTR);
            drawerTR.svgArea = this.svgArea;
            var drawnChildTR = drawerTR.draw(vertexTR);
            vertexTR.drawn = drawnChildTR;
            newGroup.appendChild(drawnChildTR);
            this.registerEvents(vertexTR, drawnChildTR, element);
            element.topRightVertex = vertexTR;
        }
        if (element.bottomLeft) {
            let vertexBL = new Rectangle(0 - halfSize, element.height - halfSize, 0 + halfSize, element.height + halfSize, stylingAttributes);
            vertexBL.tag = BoxVerticesDecorator.BOTTOM_LEFT;
            vertexBL.addTag(BoxVerticesDecorator.VERTEX, true);
            vertexBL.addTag(GraphicalElement.PARENT, element);
            let drawerBL = lookAndFeel.getDrawerFor(vertexBL);
            drawerBL.svgArea = this.svgArea;
            var drawnChildBL = drawerBL.draw(vertexBL);
            vertexBL.drawn = drawnChildBL;
            newGroup.appendChild(drawnChildBL);
            this.registerEvents(vertexBL, drawnChildBL, element);
            element.bottomLeftVertex = vertexBL;
        }
        if (element.bottomRight) {
            let vertexBR = new Rectangle(element.width - halfSize, element.height - halfSize, element.width + halfSize, element.height + halfSize, stylingAttributes);
            vertexBR.tag = BoxVerticesDecorator.BOTTOM_RIGHT;
            vertexBR.addTag(BoxVerticesDecorator.VERTEX, true);
            vertexBR.addTag(GraphicalElement.PARENT, element);
            let drawerBR = lookAndFeel.getDrawerFor(vertexBR);
            drawerBR.svgArea = this.svgArea;
            var drawnChildBR = drawerBR.draw(vertexBR);
            vertexBR.drawn = drawnChildBR;
            newGroup.appendChild(drawnChildBR);
            this.registerEvents(vertexBR, drawnChildBR, element);
            element.bottomRightVertex = vertexBR;
        }

        return newGroup;
    }

    registerEvents(model, drawn, decorator) {
        drawn.onclick = model.fireOnClick.bind(model);
        model.onClick = decorator.dispathOnVertexClick.bind(decorator);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        model.onDblClick = decorator.dispathOnVertexDblClick.bind(decorator);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        model.onMouseDown = decorator.dispathOnVertexMouseDown.bind(decorator);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        model.onMouseMove = decorator.dispathOnVertexMouseMove.bind(decorator);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
        model.onMouseUp = decorator.dispathOnVertexMouseUp.bind(decorator);
    }

}