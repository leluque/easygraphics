/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import LookAndFeel from './look-and-feel.js';
import VGroupRotationChangeListener from "./vgroup-rotation-change-listener";

export default class DefaultVerticalGroupDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        var newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        let lookAndFeel = new LookAndFeel();

        if (element.frame !== null) {
            let drawer = lookAndFeel.getDrawerFor(element.frame);
            drawer.svgArea = this.svgArea;
            var drawnFrame = drawer.draw(element.frame);
            element.frame.drawn = drawnFrame;
            newGroup.appendChild(drawnFrame);
        }

        let i = 0;
        for (i = 0; i < element.countChildren(); i++) {
            let child = element.getChildAt(i);
            //let drawer = lookAndFeel.getDrawerFor(child);
            //drawer.svgArea = this.svgArea;
            //var drawnChild = drawer.draw(child);
            //child.drawn = drawnChild;
            //newGroup.appendChild(drawnChild);
            newGroup.appendChild(child.drawn);
        }

        //*****************************
        // Add change listeners.
        element.addChangeListener(new VGroupRotationChangeListener());

        return newGroup;
    }

}