/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2017.
 */

'use strict';
import SVGArea from "../svg/svg-area";

export default class Area {

    static init(selector = "#area") {
        let area = document.querySelector(selector);
        let name = area.tagName;
        if(name.toLowerCase() === "svg") {
            return new SVGArea(selector);
        } else {
            throw "Invalid area tag type: " + name;
        }
    }

}