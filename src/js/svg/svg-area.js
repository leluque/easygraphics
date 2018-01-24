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
import ChangeListener from "../core/change-listener";
import AreaDefaults from "../core/area-defaults";
import {notifyListeners} from "../core/util";

export default class SVGArea extends AreaDefaults {

    constructor(svgSelector = "#svg") {
        super();

        this._svg = document.querySelector(svgSelector);
        this._namespace = "http://www.w3.org/2000/svg";
        this._elements = [];

        // Avoid text selection when dragging and dropping on the area.
        Object.assign(this._svg.style, {
            'cursor': 'default',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none'
        });

        // Events' callback functions.
        // The functions receive four attributes: the element in which the event occurred,
        // the mouse x-coordinate, the mouse y-coordinate, and the event object.
        this._onClick = null;
        this._onDblClick = null;
        this._onMouseDown = null;
        this._onMouseMove = null;
        this._onMouseUp = null;

        // Register methods in this class as callbacks for the HTML SVG element.
        this._svg.onclick = this.fireOnClick.bind(this);
        this._svg.ondblclick = this.fireOnDblClick.bind(this);
        this._svg.onmousedown = this.fireOnMouseDown.bind(this);
        this._svg.onmousemove = this.fireOnMouseMove.bind(this);
        this._svg.onmouseup = this.fireOnMouseUp.bind(this);
    }

    static get LAYER() {
        return "layer";
    }

    get svg() {
        return this._svg;
    }

    get namespace() {
        return this._namespace;
    }

    get elements() {
        return this._elements;
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

    // Callback methods called by HTML SVG element events.
    fireOnClick(event) {
        notifyListeners(this._onClick, this, event.clientX, event.clientY, event);
    }

    fireOnDblClick(event) {
        notifyListeners(this._onDblClick, this, event.clientX, event.clientY, event);
    }

    fireOnMouseDown(event) {
        notifyListeners(this._onMouseDown, this, event.clientX, event.clientY, event);
    }

    fireOnMouseMove(event) {
        notifyListeners(this._onMouseMove, this, event.clientX, event.clientY, event);
    }

    fireOnMouseUp(event) {
        notifyListeners(this._onMouseUp, this, event.clientX, event.clientY, event);
    }

    addElement(element, layer) {
        if (!layer || layer === null) {
            layer = this.firstLayer;
        }
        //this._elements.push(element);
        element.addTag(SVGArea.LAYER, layer);
        layer.addElement(element);
        return element;
    }

    removeElement(element) {
        element.getTag(SVGArea.LAYER).removeElement(element);
        /*
                for (let i = 0; i < this._elements.length; i++) {
                    if (this._elements[i] === element) {
                        this._elements.splice(i, 1);
                        break;
                    }
                }
        */
        this.svg.removeChild(element.drawn);
    }

    circle(centerX = 50, centerY = 50, radius = 100, layer = null) {
        //*****************************
        // Create a new circle and set its id.
        let newCircle = new Circle(centerX, centerY, radius);
        newCircle.id = this.generateElementId();
        //console.log(newCircle.id);

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newCircle);
        drawer.svgArea = this;
        var drawnCircle = drawer.draw(newCircle);
        this.svg.appendChild(drawnCircle);

        newCircle.drawn = drawnCircle;

        this.registerEvents(newCircle, drawnCircle);

        return this.addElement(newCircle, layer);
    }

    ellipse(centerX = 50, centerY = 50, radiusX = 100, radiusY = 50, layer = null) {
        //*****************************
        // Create a new ellipse and set its id.
        let newEllipse = new Ellipse(centerX, centerY, radiusX, radiusY);
        newEllipse.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newEllipse);
        drawer.svgArea = this;
        var drawnEllipse = drawer.draw(newEllipse);
        this.svg.appendChild(drawnEllipse);

        newEllipse.drawn = drawnEllipse;

        this.registerEvents(newEllipse, drawnEllipse);

        return this.addElement(newEllipse, layer);
    }

    rect(x1 = 10, y1 = 10, x2 = 100, y2 = 20, layer = null) {
        //*****************************
        // Create a new rectangle and set its id.
        let newRectangle = new Rectangle(x1, y1, x2, y2);
        newRectangle.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newRectangle);
        drawer.svgArea = this;
        var drawnRectangle = drawer.draw(newRectangle);
        this.svg.appendChild(drawnRectangle);

        newRectangle.drawn = drawnRectangle;

        this.registerEvents(newRectangle, drawnRectangle);

        return this.addElement(newRectangle, layer);
    }

    diamond(x1 = 10, y1 = 10, width = 50, height = 50, preserveAspectRatio = false, stylingAttributes = new StylingAttributes(3), layer = null) {
        //*****************************
        // Create a new diamond and set its id.
        let newDiamond = new Diamond(x1, y1, width, height, preserveAspectRatio, stylingAttributes);
        newDiamond.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newDiamond);
        drawer.svgArea = this;
        var drawnDiamond = drawer.draw(newDiamond);
        this.svg.appendChild(drawnDiamond);

        newDiamond.drawn = drawnDiamond;

        this.registerEvents(newDiamond, drawnDiamond);

        return this.addElement(newDiamond, layer);
    }

    text(x = 10, y = 10, text = "This is an example text", fontStylingAttributes = new FontStylingAttributes(), layer = null) {
        //*****************************
        // Create a new text and set its id.
        let newText = new Text(x, y, "", undefined, fontStylingAttributes);
        newText.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newText);
        drawer.svgArea = this;
        var drawnText = drawer.draw(newText);
        this.svg.appendChild(drawnText);

        newText.drawn = drawnText;
        newText.text = text; // Recalculate the text width calling a listener.
        //newText.calculateDimensions();

        this.registerEvents(newText, drawnText);

        return this.addElement(newText, layer);
    }

    image(x = 10, y = 10, width = 20, height = 20, image = undefined, layer = null) {
        //*****************************
        // Create a new image and set its id.
        let newImage = new Image(x, y, width, height, image);
        newImage.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newImage);
        drawer.svgArea = this;
        var drawnImage = drawer.draw(newImage);
        this.svg.appendChild(drawnImage);

        newImage.drawn = drawnImage;

        this.registerEvents(newImage, drawnImage);

        return this.addElement(newImage, layer);
    }

    vgroup(x = 10, y = 10, groupStyling = new GroupStylingAttributes(), layer = null) {
        //*****************************
        // Create a new vertical group and set its id.
        let newVGroup = new VerticalGroup(x, y, undefined, groupStyling);
        newVGroup.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newVGroup);
        drawer.svgArea = this;
        var drawnVGroup = drawer.draw(newVGroup);
        this.svg.appendChild(drawnVGroup);

        newVGroup.drawn = drawnVGroup;

        this.registerEvents(newVGroup, drawnVGroup);

        return this.addElement(newVGroup);
    }

    linearGroup(x1 = 10, y1 = 10, x2 = 100, y2 = 100, layer = null) {
        //*****************************
        // Create a new linear group and set its id.
        let newLinearGroup = new LinearGroup(x1, y1, x2, y2, undefined, new GroupStylingAttributes(0, 0));
        newLinearGroup.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLinearGroup);
        drawer.svgArea = this;
        var drawnLinearGroup = drawer.draw(newLinearGroup);
        this.svg.appendChild(drawnLinearGroup);

        newLinearGroup.drawn = drawnLinearGroup;

        this.registerEvents(newLinearGroup, drawnLinearGroup);

        return this.addElement(newLinearGroup, layer);
    }

    line(x1 = 10, y1 = 10, x2 = 100, y2 = 10, stylingAttributes = new StylingAttributes(1), layer = null) {
        //*****************************
        // Create a new line and set its id.
        let newLine = new Line(x1, y1, x2, y2, stylingAttributes);
        newLine.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLine);
        drawer.svgArea = this;
        var drawnLine = drawer.draw(newLine);
        this.svg.appendChild(drawnLine);

        newLine.drawn = drawnLine;

        this.registerEvents(newLine, drawnLine);

        return this.addElement(newLine, layer);
    }

    polyLine(stylingAttributes = new StylingAttributes(1, "black", "none"), layer = null) {
        //*****************************
        // Create a new line and set its id.
        let coordinates = Array.from(arguments).slice(1);
        let newPolyline = new PolyLine(stylingAttributes, coordinates);
        newPolyline.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newPolyline);
        drawer.svgArea = this;
        var drawnLine = drawer.draw(newPolyline);
        this.svg.appendChild(drawnLine);

        newPolyline.drawn = drawnLine;

        this.registerEvents(newPolyline, drawnLine);

        return this.addElement(newPolyline, layer);
    }

    boxVerticesDecorator(decorated, layer = null) {
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
        newBoxVerticesDecorator.notifyListeners(ChangeListener.POSITION, ChangeListener.DIMENSION);

        this.registerEvents(newBoxVerticesDecorator, drawnBoxVerticesDecorator);

        return this.addElement(newBoxVerticesDecorator, layer);
    }

    registerEvents(model, drawn) {
        drawn.onclick = model.fireOnClick.bind(model);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
    }

}