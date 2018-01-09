/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import Circle from '../core/circle.js';
import CircleDimensionChangeListener from './circle-dimension-change-listener.js';
import CirclePositionChangeListener from './circle-position-change-listener.js';
import Ellipse from '../core/ellipse.js';
import EllipseDimensionChangeListener from './ellipse-dimension-change-listener.js';
import EllipsePositionChangeListener from './ellipse-position-change-listener.js';
import Rectangle from '../core/rectangle.js';
import RectangleDimensionChangeListener from './rectangle-dimension-change-listener.js';
import RectanglePositionChangeListener from './rectangle-position-change-listener.js';
import Diamond from '../core/diamond.js';
import DiamondDimensionChangeListener from './diamond-dimension-change-listener.js';
import DiamondPositionChangeListener from './diamond-position-change-listener.js';
import Text from '../core/text.js';
import TextDimensionChangeListener from './text-dimension-change-listener.js';
import TextPositionChangeListener from './text-position-change-listener.js';
import TextChangeListener from './text-change-listener.js';
import FontChangeListener from './font-change-listener.js';
import Image from '../core/image.js';
import ImageDimensionChangeListener from './image-dimension-change-listener.js';
import ImagePositionChangeListener from './image-position-change-listener.js';
import VerticalGroup from '../core/vertical-group.js';
import VGroupTransformationChangeListener from './vgroup-transformation-change-listener.js';
import LinearGroup from '../core/linear-group.js';
import LinearGroupTransformationChangeListener from './linear-group-transformation-change-listener.js';
import Line from '../core/line.js';
import LineDimensionChangeListener from './line-dimension-change-listener.js';
import LinePositionChangeListener from './line-position-change-listener.js';
import StyleChangeListener from './style-change-listener.js';
import LookAndFeel from './look-and-feel.js';
import GroupStylingAttributes from '../core/group-styling-attributes.js';
import FontStylingAttributes from '../core/font-styling-attributes.js';
import StylingAttributes from '../core/styling-attributes.js';

export default class SVGArea {

    constructor(svgSelector = "#svg") {
        this._idCount = 1;
        this._svg = document.querySelector(svgSelector);
        this._namespace = "http://www.w3.org/2000/svg";
        this._elements = [];
    }

    get idCount() {
        return this._idCount;
    }

    set idCount(value) {
        this._idCount = value;
    }

    generateId() {
        return "element_" + (this._idCount++);
    }

    get svg() {
        return this._svg;
    }

    set svg(value) {
        this._svg = value;
    }

    get namespace() {
        return this._namespace;
    }

    set namespace(value) {
        this._namespace = value;
    }

    get elements() {
        return this._elements;
    }

    set elements(value) {
        this._elements = value;
    }

    addElement(element) {
        this._elements.push(element);
        return element;
    }

    // TODO: in all methods below, register listener events for all
    // relevant events and register Circle (or the appropriate class)
    // EVENThappened method as a callback function. This function
    // just inform the event listeners that the event happened.
    circle(centerX = 50, centerY = 50, radius = 100) {
        //*****************************
        // Create a new circle and set its id.
        let newCircle = new Circle(centerX, centerY, radius);
        newCircle.id = this.generateId();

        //*****************************
        // Add change listeners.
        newCircle.addChangeListener(new CircleDimensionChangeListener());
        newCircle.addChangeListener(new CirclePositionChangeListener());
        newCircle.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newCircle);
        drawer.svgArea = this;
        var drawnCircle = drawer.draw(newCircle);
        this.svg.appendChild(drawnCircle);

        newCircle.drawn = drawnCircle;

        return this.addElement(newCircle);
    }

    ellipse(centerX = 50, centerY = 50, radiusX = 100, radiusY = 50) {
        //*****************************
        // Create a new ellipse and set its id.
        let newEllipse = new Ellipse(centerX, centerY, radiusX, radiusY);
        newEllipse.id = this.generateId();

        //*****************************
        // Add change listeners.
        newEllipse.addChangeListener(new EllipseDimensionChangeListener());
        newEllipse.addChangeListener(new EllipsePositionChangeListener());
        newEllipse.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newEllipse);
        drawer.svgArea = this;
        var drawnEllipse = drawer.draw(newEllipse);
        this.svg.appendChild(drawnEllipse);

        newEllipse.drawn = drawnEllipse;

        return this.addElement(newEllipse);
    }

    rect(x1 = 10, y1 = 10, x2 = 100, y2 = 20) {
        //*****************************
        // Create a new rectangle and set its id.
        let newRectangle = new Rectangle(x1, y1, x2, y2);
        newRectangle.id = this.generateId();

        //*****************************
        // Add change listeners.
        newRectangle.addChangeListener(new RectangleDimensionChangeListener());
        newRectangle.addChangeListener(new RectanglePositionChangeListener());
        newRectangle.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newRectangle);
        drawer.svgArea = this;
        var drawnRectangle = drawer.draw(newRectangle);
        this.svg.appendChild(drawnRectangle);

        newRectangle.drawn = drawnRectangle;

        return this.addElement(newRectangle);
    }

    diamond(x1 = 10, y1 = 10, width = 50, height = 50, preserveAspectRatio = false, stylingAttributes = new StylingAttributes(3)) {
        //*****************************
        // Create a new diamond and set its id.
        let newDiamong = new Diamond(x1, y1, width, height, preserveAspectRatio, stylingAttributes);
        newDiamong.id = this.generateId();

        //*****************************
        // Add change listeners.
        newDiamong.addChangeListener(new DiamondDimensionChangeListener());
        newDiamong.addChangeListener(new DiamondPositionChangeListener());
        newDiamong.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newDiamong);
        drawer.svgArea = this;
        var drawnDiamong = drawer.draw(newDiamong);
        this.svg.appendChild(drawnDiamong);

        newDiamong.drawn = drawnDiamong;

        return this.addElement(newDiamong);
    }

    text(x = 10, y = 10, text = "This is an example text", fontStylingAttributes = new FontStylingAttributes()) {
        //*****************************
        // Create a new text and set its id.
        let newText = new Text(x, y, "", undefined, fontStylingAttributes);
        newText.id = this.generateId();

        //*****************************
        // Add change listeners.
        newText.addChangeListener(new TextDimensionChangeListener());
        newText.addChangeListener(new TextPositionChangeListener());
        newText.addChangeListener(new TextChangeListener());
        newText.addChangeListener(new FontChangeListener());
        newText.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newText);
        drawer.svgArea = this;
        var drawnText = drawer.draw(newText);
        this.svg.appendChild(drawnText);

        newText.drawn = drawnText;
        newText.text = text; // Recalculate the text width calling a listener.
        //newText.calculateDimensions();

        return this.addElement(newText);
    }

    image(x = 10, y = 10, width = 20, height = 20, image = undefined) {
        //*****************************
        // Create a new image and set its id.
        let newImage = new Image(x, y, width, height, image);
        newImage.id = this.generateId();

        //*****************************
        // Add change listeners.
        newImage.addChangeListener(new ImageDimensionChangeListener());
        newImage.addChangeListener(new ImagePositionChangeListener());
        newImage.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newImage);
        drawer.svgArea = this;
        var drawnText = drawer.draw(newImage);
        this.svg.appendChild(drawnText);

        newImage.drawn = drawnText;

        return this.addElement(newImage);
    }

    vgroup(x = 10, y = 10, groupStyling = new GroupStylingAttributes()) {
        //*****************************
        // Create a new vertical group and set its id.
        let newVGroup = new VerticalGroup(x, y, undefined, groupStyling);
        newVGroup.id = this.generateId();

        //*****************************
        // Add change listeners.
        newVGroup.addChangeListener(new VGroupTransformationChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newVGroup);
        drawer.svgArea = this;
        var drawnVGroup = drawer.draw(newVGroup);
        this.svg.appendChild(drawnVGroup);

        newVGroup.drawn = drawnVGroup;

        return this.addElement(newVGroup);
    }

    linearGroup(x1 = 10, y1 = 10, x2 = 100, y2 = 100) {
        //*****************************
        // Create a new linear group and set its id.
        let newLinearGroup = new LinearGroup(x1, y1, x2, y2, undefined, new GroupStylingAttributes(0, 0));
        newLinearGroup.id = this.generateId();

        //*****************************
        // Add change listeners.
        newLinearGroup.addChangeListener(new LinearGroupTransformationChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLinearGroup);
        drawer.svgArea = this;
        var drawnLinearGroup = drawer.draw(newLinearGroup);
        this.svg.appendChild(drawnLinearGroup);

        newLinearGroup.drawn = drawnLinearGroup;

        return this.addElement(newLinearGroup);
    }

    line(x1 = 10, y1 = 10, x2 = 100, y2 = 10, stylingAttributes = new StylingAttributes(1)) {
        //*****************************
        // Create a new line and set its id.
        let newLine = new Line(x1, y1, x2, y2, stylingAttributes);
        newLine.id = this.generateId();

        //*****************************
        // Add change listeners.
        newLine.addChangeListener(new LineDimensionChangeListener());
        newLine.addChangeListener(new LinePositionChangeListener());
        newLine.addChangeListener(new StyleChangeListener());

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLine);
        drawer.svgArea = this;
        var drawnLine = drawer.draw(newLine);
        this.svg.appendChild(drawnLine);

        newLine.drawn = drawnLine;

        return this.addElement(newLine);
    }

}