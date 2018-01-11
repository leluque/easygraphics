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
            //let drawer = lookAndFeel.getDrawerFor(element.decorated);
            //drawer.svgArea = this.svgArea;
            //var drawnDecorated = drawer.draw(element.decorated);
            //element.decorated.drawn = drawnDecorated;
            //newGroup.appendChild(drawnDecorated);
            //this.registerEvents(element.decorated, drawnDecorated);
            newGroup.appendChild(element.decorated.drawn);
        }

      /*  let vertexSize = element.vertexSize;
        let halfSize = (vertexSize - 1) / 2;

        let lookAndFeel = new LookAndFeel();
        let stylingAttributes = new StylingAttributes(0, "black", "black");
        // Draw the box vertices.
        if (element.topLeft) {
            let vertexTL = new Rectangle(element.x - halfSize, element.y - halfSize, element.x + halfSize, element.y + halfSize, stylingAttributes);
            vertexTL.tag = BoxVerticesDecorator.TOP_LEFT;
            let drawerTL = lookAndFeel.getDrawerFor(vertexTL);
            drawerTL.svgArea = this.svgArea;
            var drawnChildTL = drawerTL.draw(vertexTL);
            vertexTL.drawn = drawnChildTL;
            newGroup.appendChild(drawnChildTL);
            this.registerEvents(vertexTL, drawnChildTL, element);
        }
        if (element.topRight) {
            let vertexTR = new Rectangle(element.x2 - halfSize, element.y - halfSize, element.x2 + halfSize, element.y + halfSize, stylingAttributes);
            vertexTR.tag = BoxVerticesDecorator.TOP_RIGHT;
            let drawerTR = lookAndFeel.getDrawerFor(vertexTR);
            drawerTR.svgArea = this.svgArea;
            var drawnChildTR = drawerTR.draw(vertexTR);
            vertexTR.drawn = drawnChildTR;
            newGroup.appendChild(drawnChildTR);
            this.registerEvents(vertexTR, drawnChildTR, element);
        }
        if (element.bottomLeft) {
            let vertexBL = new Rectangle(element.x - halfSize, element.y2 - halfSize, element.x + halfSize, element.y2 + halfSize, stylingAttributes);
            vertexBL.tag = BoxVerticesDecorator.BOTTOM_LEFT;
            let drawerBL = lookAndFeel.getDrawerFor(vertexBL);
            drawerBL.svgArea = this.svgArea;
            var drawnChildBL = drawerBL.draw(vertexBL);
            vertexBL.drawn = drawnChildBL;
            newGroup.appendChild(drawnChildBL);
            this.registerEvents(vertexBL, drawnChildBL, element);
        }
        if (element.bottomRight) {
            let vertexBR = new Rectangle(element.x2 - halfSize, element.y2 - halfSize, element.x2 + halfSize, element.y2 + halfSize, stylingAttributes);
            vertexBR.tag = BoxVerticesDecorator.BOTTOM_RIGHT;
            let drawerBR = lookAndFeel.getDrawerFor(vertexBR);
            drawerBR.svgArea = this.svgArea;
            var drawnChildBR = drawerBR.draw(vertexBR);
            vertexBR.drawn = drawnChildBR;
            newGroup.appendChild(drawnChildBR);
            this.registerEvents(vertexBR, drawnChildBR, element);
        }*/

        return newGroup;
    }

    registerEvents(model, drawn, decorator) {
        /*
                if(!decorator || decorator == null) {
                    drawn.onclick = model.fireOnClick.bind(model);
                    drawn.ondblclick = model.fireOnDblClick.bind(model);
                    drawn.onmousedown = model.fireOnMouseDown.bind(model);
                    drawn.onmousemove = model.fireOnMouseMove.bind(model);
                    drawn.onmouseup = model.fireOnMouseUp.bind(model);
                }
                else {
        */
        drawn.onclick = model.fireOnClick.bind(model);
        model.onClick = decorator.fireOnVertexClick.bind(decorator);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        model.onDblClick = decorator.fireOnVertexDblClick.bind(decorator);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        model.onMouseDown = decorator.fireOnVertexMouseDown.bind(decorator);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        model.onMouseMove = decorator.fireOnVertexMouseMove.bind(decorator);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
        model.onMouseUp = decorator.fireOnVertexMouseUp.bind(decorator);
//        }
    }

}