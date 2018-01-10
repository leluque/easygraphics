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

export default class DefaultBoxDecoratorVerticesDrawer extends DefaultDrawer {

    draw(element) {
        var newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        let lookAndFeel = new LookAndFeel();

        if (element.decorated !== null) {
            let drawer = lookAndFeel.getDrawerFor(element.decorated);
            drawer.svgArea = this.svgArea;
            var drawnDecorated = drawer.draw(element.decorated);
            element.decorated.drawn = drawnDecorated;
            newGroup.appendChild(drawnDecorated);
        }

        let vertexSize = 5;
        let halfSize = (vertexSize - 1) / 2;

        let stylingAttributes = new StylingAttributes(0, "black", "black");
        // Draw the box vertices.
        if (element.topLeft) {
            let vertex = new Rectangle(element.x - halfSize, element.y - halfSize, element.x + halfSize, element.y + halfSize, stylingAttributes);
            let drawer = lookAndFeel.getDrawerFor(vertex);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(vertex);
            vertex.drawn = drawnChild;
            newGroup.appendChild(drawnChild);
        }
        if (element.topRight) {
            let vertex = new Rectangle(element.x2 - halfSize, element.y - halfSize, element.x2 + halfSize, element.y + halfSize, stylingAttributes);
            let drawer = lookAndFeel.getDrawerFor(vertex);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(vertex);
            vertex.drawn = drawnChild;
            newGroup.appendChild(drawnChild);
        }
        if (element.bottomLeft) {
            let vertex = new Rectangle(element.x - halfSize, element.y2 - halfSize, element.x + halfSize, element.y2 + halfSize, stylingAttributes);
            let drawer = lookAndFeel.getDrawerFor(vertex);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(vertex);
            vertex.drawn = drawnChild;
            newGroup.appendChild(drawnChild);
        }
        if (element.bottomRight) {
            let vertex = new Rectangle(element.x2 - halfSize, element.y2 - halfSize, element.x2 + halfSize, element.y2 + halfSize, stylingAttributes);
            let drawer = lookAndFeel.getDrawerFor(vertex);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(vertex);
            vertex.drawn = drawnChild;
            newGroup.appendChild(drawnChild);
        }


        return newGroup;
    }

}