/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import Circle from '../core/circle.js';
import Ellipse from '../core/ellipse.js';
import Rectangle from '../core/rectangle.js';
import Diamond from '../core/diamond.js';
import Text from '../core/text.js';
import Image from '../core/image.js';
import VerticalGroup from '../core/vertical-group.js';
import LinearGroup from '../core/linear-group.js';
import Line from '../core/line.js';
import LookAndFeel from './look-and-feel.js';
import GroupStylingAttributes from '../core/group-styling-attributes.js';
import FontStylingAttributes from '../core/font-styling-attributes.js';
import StylingAttributes from '../core/styling-attributes.js';
import PolyLine from "../core/polyline";
import BoxVerticesDecorator from "../core/box-vertices-decorator";

export default class SVGArea {

    constructor(svgSelector = "#svg") {
        this._idCount = 1;
        this._svg = document.querySelector(svgSelector);
        Object.assign(this._svg.style, { 'cursor': 'default', '-webkit-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none' });

        this._namespace = "http://www.w3.org/2000/svg";
        this._elements = [];

        // Events.
        this._onClick = null;
        this._onDblClick = null;
        this._onMouseDown = null;
        this._onMouseMove = null;
        this._onMouseUp = null;

        this._svg.onclick = this.fireOnClick.bind(this);
        this._svg.ondblclick = this.fireOnDblClick.bind(this);
        this._svg.onmousedown = this.fireOnMouseDown.bind(this);
        this._svg.onmousemove = this.fireOnMouseMove.bind(this);
        this._svg.onmouseup = this.fireOnMouseUp.bind(this);
    }

    get idCount() {
        return this._idCount;
    }

    set idCount(value) {
        this._idCount = value;
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

    get onClick() {
        return this._onClick;
    }

    set onClick(value) {
        this._onClick = value;
    }

    get onDblClick() {
        return this._onDblClick;
    }

    set onDblClick(value) {
        this._onDblClick = value;
    }

    get onMouseDown() {
        return this._onMouseDown;
    }

    set onMouseDown(value) {
        this._onMouseDown = value;
    }

    get onMouseMove() {
        return this._onMouseMove;
    }

    set onMouseMove(value) {
        this._onMouseMove = value;
    }

    get onMouseUp() {
        return this._onMouseUp;
    }

    set onMouseUp(value) {
        this._onMouseUp = value;
    }

    // Events.
    fireOnClick(event) {
        if (this._onClick !== null && this._onClick) {
            if (typeof(this._onClick) === "function") {
                this._onClick(event.clientX, event.clientY, this);
            } else {
                throw "Callback is not a function: " + typeof(this._onClick);
            }
        }
    }

    fireOnDblClick(event) {
        if (this._onDblClick !== null && this._onDblClick) {
            if (typeof(this._onDblClick) === "function") {
                this._onDblClick(event.clientX, event.clientY, this);
            } else {
                throw "Callback is not a function: " + typeof(this._onDblClick);
            }
        }
    }

    fireOnMouseDown(event) {
        if (this._onMouseDown !== null && this._onMouseDown) {
            if (typeof(this._onMouseDown) === "function") {
                this._onMouseDown(event.clientX, event.clientY, this);
            } else {
                throw "Callback is not a function: " + typeof(this._onMouseDown);
            }
        }
    }

    fireOnMouseMove(event) {
        if (this._onMouseMove !== null && this._onMouseMove) {
            if (typeof(this._onMouseMove) === "function") {
                this._onMouseMove(event.clientX, event.clientY, this);
            } else {
                throw "Callback is not a function: " + typeof(this._onMouseMove);
            }
        }
    }

    fireOnMouseUp(event) {
        if (this._onMouseUp !== null && this._onMouseUp) {
            if (typeof(this._onMouseUp) === "function") {
                this._onMouseUp(event.clientX, event.clientY, this);
            } else {
                throw "Callback is not a function: " + typeof(this._onMouseUp);
            }
        }
    }

    generateId() {
        return "element_" + (this._idCount++);
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
        //console.log(newCircle.id);

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newCircle);
        drawer.svgArea = this;
        var drawnCircle = drawer.draw(newCircle);
        this.svg.appendChild(drawnCircle);

        newCircle.drawn = drawnCircle;

        this.registerEvents(newCircle, drawnCircle);

        return this.addElement(newCircle);
    }

    ellipse(centerX = 50, centerY = 50, radiusX = 100, radiusY = 50) {
        //*****************************
        // Create a new ellipse and set its id.
        let newEllipse = new Ellipse(centerX, centerY, radiusX, radiusY);
        newEllipse.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newEllipse);
        drawer.svgArea = this;
        var drawnEllipse = drawer.draw(newEllipse);
        this.svg.appendChild(drawnEllipse);

        newEllipse.drawn = drawnEllipse;

        this.registerEvents(newEllipse, drawnEllipse);

        return this.addElement(newEllipse);
    }

    rect(x1 = 10, y1 = 10, x2 = 100, y2 = 20) {
        //*****************************
        // Create a new rectangle and set its id.
        let newRectangle = new Rectangle(x1, y1, x2, y2);
        newRectangle.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newRectangle);
        drawer.svgArea = this;
        var drawnRectangle = drawer.draw(newRectangle);
        this.svg.appendChild(drawnRectangle);

        newRectangle.drawn = drawnRectangle;

        this.registerEvents(newRectangle, drawnRectangle);

        return this.addElement(newRectangle);
    }

    diamond(x1 = 10, y1 = 10, width = 50, height = 50, preserveAspectRatio = false, stylingAttributes = new StylingAttributes(3)) {
        //*****************************
        // Create a new diamond and set its id.
        let newDiamond = new Diamond(x1, y1, width, height, preserveAspectRatio, stylingAttributes);
        newDiamond.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newDiamond);
        drawer.svgArea = this;
        var drawnDiamond = drawer.draw(newDiamond);
        this.svg.appendChild(drawnDiamond);

        newDiamond.drawn = drawnDiamond;

        this.registerEvents(newDiamond, drawnDiamond);

        return this.addElement(newDiamond);
    }

    text(x = 10, y = 10, text = "This is an example text", fontStylingAttributes = new FontStylingAttributes()) {
        //*****************************
        // Create a new text and set its id.
        let newText = new Text(x, y, "", undefined, fontStylingAttributes);
        newText.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newText);
        drawer.svgArea = this;
        var drawnText = drawer.draw(newText);
        this.svg.appendChild(drawnText);

        newText.drawn = drawnText;
        newText.text = text; // Recalculate the text width calling a listener.
        //newText.calculateDimensions();

        this.registerEvents(newText, drawnText);

        return this.addElement(newText);
    }

    image(x = 10, y = 10, width = 20, height = 20, image = undefined) {
        //*****************************
        // Create a new image and set its id.
        let newImage = new Image(x, y, width, height, image);
        newImage.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newImage);
        drawer.svgArea = this;
        var drawnImage = drawer.draw(newImage);
        this.svg.appendChild(drawnImage);

        newImage.drawn = drawnImage;

        this.registerEvents(newImage, drawnImage);

        return this.addElement(newImage);
    }

    vgroup(x = 10, y = 10, groupStyling = new GroupStylingAttributes()) {
        //*****************************
        // Create a new vertical group and set its id.
        let newVGroup = new VerticalGroup(x, y, undefined, groupStyling);
        newVGroup.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newVGroup);
        drawer.svgArea = this;
        var drawnVGroup = drawer.draw(newVGroup);
        this.svg.appendChild(drawnVGroup);

        newVGroup.drawn = drawnVGroup;

        this.registerEvents(newVGroup, drawnVGroup);

        return this.addElement(newVGroup);
    }

    linearGroup(x1 = 10, y1 = 10, x2 = 100, y2 = 100) {
        //*****************************
        // Create a new linear group and set its id.
        let newLinearGroup = new LinearGroup(x1, y1, x2, y2, undefined, new GroupStylingAttributes(0, 0));
        newLinearGroup.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLinearGroup);
        drawer.svgArea = this;
        var drawnLinearGroup = drawer.draw(newLinearGroup);
        this.svg.appendChild(drawnLinearGroup);

        newLinearGroup.drawn = drawnLinearGroup;

        this.registerEvents(newLinearGroup, drawnLinearGroup);

        return this.addElement(newLinearGroup);
    }

    line(x1 = 10, y1 = 10, x2 = 100, y2 = 10, stylingAttributes = new StylingAttributes(1)) {
        //*****************************
        // Create a new line and set its id.
        let newLine = new Line(x1, y1, x2, y2, stylingAttributes);
        newLine.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLine);
        drawer.svgArea = this;
        var drawnLine = drawer.draw(newLine);
        this.svg.appendChild(drawnLine);

        newLine.drawn = drawnLine;

        this.registerEvents(newLine, drawnLine);

        return this.addElement(newLine);
    }

    polyLine(stylingAttributes = new StylingAttributes(1, "black", "none")) {
        //*****************************
        // Create a new line and set its id.
        let coordinates = Array.from(arguments).slice(1);
        let newPolyline = new PolyLine(stylingAttributes, coordinates);
        newPolyline.id = this.generateId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newPolyline);
        drawer.svgArea = this;
        var drawnLine = drawer.draw(newPolyline);
        this.svg.appendChild(drawnLine);

        newPolyline.drawn = drawnLine;

        this.registerEvents(newPolyline, drawnLine);

        return this.addElement(newPolyline);
    }

    boxVerticesDecorator(decorated) {
        //*****************************
        // Create a new box vertices decorator and set its id.
        let newBoxVerticesDecorator = new BoxVerticesDecorator(decorated);
        newBoxVerticesDecorator.id = decorated.id;

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newBoxVerticesDecorator);
        drawer.svgArea = this;
        var drawnBoxVerticesDecorator = drawer.draw(newBoxVerticesDecorator);
        this.svg.appendChild(drawnBoxVerticesDecorator);

        newBoxVerticesDecorator.drawn = drawnBoxVerticesDecorator;

        return this.addElement(newBoxVerticesDecorator);
    }

    registerEvents(model, drawn) {
        drawn.onclick = model.fireOnClick.bind(model);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
    }

}