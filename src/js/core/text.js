/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import StylingAttributes from './styling-attributes.js';
import BoundingBox from './bounding-box.js';
import FontStylingAttributes from "./font-styling-attributes";
import ChangeListener from "./change-listener";

/**
 * This class implements texts.
 */
export default class Text extends GraphicalElement {

    constructor(x = 10, y = 10, text = "Text", stylingAttributes = new StylingAttributes(1, "black", "black"), fontStylingAttributes = new FontStylingAttributes()) {
        super(x, y, undefined, undefined, stylingAttributes);
        this._text = text;
        this._fontStylingAttributes = fontStylingAttributes;
        this._fontStylingAttributes.target = this;
    }


    /*get minWidth() {
        let boundingBox = this.drawn.getBBox();
        return boundingBox.width;
    }

    get minHeight() {
        let boundingBox = this.drawn.getBBox();
        return boundingBox.height;
    }*/


    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
        this.notifyListeners(ChangeListener.OTHER);
        //this.calculateDimensions();
    }

    get fontStylingAttributes() {
        return this._fontStylingAttributes;
    }

    set fontStylingAttributes(value) {
        this._fontStylingAttributes = value;
        this.fontStylingAttributes.target = this;
        this.notifyListeners(ChangeListener.STYLING);
    }

    /*  calculateDimensions() {
          try {
              this.width = this.minWidth;
              this.height = this.minHeight;
          }
          catch (error) {
          }
      }*/

}