/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import {isNotNull} from "../core/util";
import VerticalGroupChildrenChangeListener from "./listener/vgroup-children-change-listener";
import VerticalGroupChangeListener from "./listener/vgroup-change-listener";
import VerticalGroupDimensionChangeListener from "./listener/vgroup-dimension-change-listener";
import VerticalGroupFrameChangeListener from "./listener/vgroup-frame-change-listener";

export default class DefaultVerticalGroupDrawer extends DefaultDrawer {

    constructor(svgArea) {
        super(svgArea);
    }

    draw(element) {
        var newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        let lookAndFeel = this.svgArea.lookAndFeel;

        if (isNotNull(element.frame)) {
            let drawer = lookAndFeel.getDrawerFor(element.frame);
            drawer.svgArea = this.svgArea;
            var drawnFrame = drawer.draw(element.frame);
            element.frame.drawn = drawnFrame;
            newGroup.appendChild(drawnFrame);
        }

        let i = 0;
        for (i = 0; i < element.countChildren(); i++) {
            let child = element.childAt(i);
            newGroup.appendChild(child.drawn);
        }

        //*****************************
        // Add change listener.
        element.addChangeListener(new VerticalGroupDimensionChangeListener());
        element.addChangeListener(new VerticalGroupChangeListener());
        element.addChangeListener(new VerticalGroupChildrenChangeListener(element));
        element.addChangeListener(new VerticalGroupFrameChangeListener(element));

        return newGroup;
    }

}