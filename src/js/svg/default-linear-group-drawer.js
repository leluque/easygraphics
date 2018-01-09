/**
 * Created by Leandro Luque on 08/06/2017.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import DefaultDrawer from './default-drawer.js';
import LookAndFeel from "./look-and-feel";

export default class DefaultLinearGroupDrawer extends DefaultDrawer {

    draw(element) {
        var newGroup = document.createElementNS(this.svgArea.namespace, "g");
        newGroup.setAttribute("id", element.id);
        newGroup.setAttribute('shape-rendering', 'inherit');
        newGroup.setAttribute('pointer-events', 'all');

        let lookAndFeel = new LookAndFeel();

        if (element.verticalGroup.frame !== null) {
            let drawer = lookAndFeel.getDrawerFor(element.verticalGroup.frame);
            drawer.svgArea = this.svgArea;
            var drawnFrame = drawer.draw(element.verticalGroup.frame);
            element.verticalGroup.frame.drawn = drawnFrame;
            newGroup.appendChild(drawnFrame);
        }

        let i = 0;
        for (i = 0; i < element.verticalGroup.countChildren(); i++) {
            let child = element.verticalGroup.getChildAt(i);
            let drawer = lookAndFeel.getDrawerFor(child);
            drawer.svgArea = this.svgArea;
            var drawnChild = drawer.draw(child);
            child.drawn = drawnChild;
            newGroup.appendChild(drawnChild);
        }

        return newGroup;
    }

}