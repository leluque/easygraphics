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
import PolyLine from "../core/polyline";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import ChangeListener from "../core/change-listener";
import AreaDefaults from "../core/area-defaults";
import {notifyListeners} from "../core/util";
import StylingAttributes from "../core/styling-attributes";

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

    addLayer(layer) {
        layer.onChangeVisibility = this.handleLayerVisibilityChange.bind(this);
        return super.addLayer(layer);
    }

    handleLayerVisibilityChange(layer, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (newValue === true) {
                // Make visible all elements in the layer.
                Object.keys(layer.elements).forEach(function (id) {
                    layer.getElement(id).stylingAttributes.visible = true;
                });
            } else {
                // Hide all elements in the layer.
                Object.keys(layer.elements).forEach(function (id) {
                    layer.getElement(id).stylingAttributes.visible = false;
                });
            }
        }
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
        element.addTag(SVGArea.LAYER, layer);
        layer.addElement(element);
        return element;
    }

    removeElement(element) {
        element.getTag(SVGArea.LAYER).removeElement(element);
        this.svg.removeChild(element.drawn);
    }

    /**
     * Draw a new circle with the specified parameters.
     * @param parameterObject An object with the following optional attributes: centerX, centerY, radius, and layer.
     */
    circ(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('centerX' in parameterObject)) {
            parameterObject.centerX = 50;
        }
        if (!('centerY' in parameterObject)) {
            parameterObject.centerY = 50;
        }
        if (!('radius' in parameterObject)) {
            parameterObject.radius = 50;
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }
        //*****************************
        // Create a new circle and set its id.
        let newCircle = new Circle(parameterObject.centerX, parameterObject.centerY, parameterObject.radius);
        newCircle.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newCircle);
        drawer.svgArea = this;
        let drawnCircle = drawer.draw(newCircle);
        this.svg.appendChild(drawnCircle);

        newCircle.drawn = drawnCircle;

        this.registerEvents(newCircle, drawnCircle);

        return this.addElement(newCircle, parameterObject.layer);
    }

    /**
     * @see {@link circ}
     */
    circle(parameterObject) {
        return this.circ(parameterObject);
    }

    /**
     * Draw a new ellipse with the specified parameters.
     * @param parameterObject An object with the following optional attributes: centerX, centerY, radiusX, radiusY, preserveAspectRatio, and layer.
     */
    ellipse(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('centerX' in parameterObject)) {
            parameterObject.centerX = 50;
        }
        if (!('centerY' in parameterObject)) {
            parameterObject.centerY = 50;
        }
        if (!('radiusX' in parameterObject)) {
            parameterObject.radiusX = 100;
        }
        if (!('radiusY' in parameterObject)) {
            parameterObject.radiusY = 50;
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new ellipse and set its id.
        let newEllipse = new Ellipse(parameterObject.centerX, parameterObject.centerY, parameterObject.radiusX, parameterObject.radiusY);
        newEllipse.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newEllipse);
        drawer.svgArea = this;
        let drawnEllipse = drawer.draw(newEllipse);
        this.svg.appendChild(drawnEllipse);

        newEllipse.drawn = drawnEllipse;

        this.registerEvents(newEllipse, drawnEllipse);

        return this.addElement(newEllipse, parameterObject.layer);
    }

    /**
     * Draw a new rectangle with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, and layer.
     */
    rect(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x1' in parameterObject)) {
            parameterObject.x1 = 10;
        }
        if (!('y1' in parameterObject)) {
            parameterObject.y1 = 10;
        }
        if (!('x2' in parameterObject)) {
            parameterObject.x2 = 10;
        }
        if (!('y2' in parameterObject)) {
            parameterObject.y2 = 10;
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new rectangle and set its id.
        let newRectangle = new Rectangle(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2);
        newRectangle.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newRectangle);
        drawer.svgArea = this;
        let drawnRectangle = drawer.draw(newRectangle);
        this.svg.appendChild(drawnRectangle);

        newRectangle.drawn = drawnRectangle;

        this.registerEvents(newRectangle, drawnRectangle);

        return this.addElement(newRectangle, parameterObject.layer);
    }

    /**
     * @see {@link rect}
     */
    rectangle(parameterObject) {
        return this.rect(parameterObject);
    }

    /**
     * Draw a new diamond with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x1, y1, width, height, preserveAspectRatio, stylingAttributes, and layer.
     */
    diamond(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x1' in parameterObject)) {
            parameterObject.x1 = 10;
        }
        if (!('y1' in parameterObject)) {
            parameterObject.y1 = 10;
        }
        if (!('width' in parameterObject)) {
            parameterObject.width = 50;
        }
        if (!('height' in parameterObject)) {
            parameterObject.height = 50;
        }
        if (!('preserveAspectRatio' in parameterObject)) {
            parameterObject.preserveAspectRatio = true;
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes();
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new diamond and set its id.
        let newDiamond = new Diamond(parameterObject.x1, parameterObject.y1, parameterObject.width, parameterObject.height, parameterObject.preserveAspectRatio, parameterObject.stylingAttributes);
        newDiamond.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newDiamond);
        drawer.svgArea = this;
        let drawnDiamond = drawer.draw(newDiamond);
        this.svg.appendChild(drawnDiamond);

        newDiamond.drawn = drawnDiamond;

        this.registerEvents(newDiamond, drawnDiamond);

        return this.addElement(newDiamond, parameterObject.layer);
    }

    /**
     * Draw a new text with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x, y, text, stylingAttributes, fontStylingAttributes, and layer.
     */
    txt(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x' in parameterObject)) {
            parameterObject.x = 10;
        }
        if (!('y' in parameterObject)) {
            parameterObject.y = 10;
        }
        if (!('text' in parameterObject)) {
            parameterObject.text = "This is an example text";
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes(1, "black", "black");
        }
        if (!('fontStylingAttributes' in parameterObject)) {
            parameterObject.fontStylingAttributes = new FontStylingAttributes();
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new text and set its id.
        let newText = new Text(parameterObject.x, parameterObject.y, parameterObject.text, parameterObject.stylingAttributes, parameterObject.fontStylingAttributes);
        newText.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newText);
        drawer.svgArea = this;
        let drawnText = drawer.draw(newText);
        this.svg.appendChild(drawnText);

        newText.drawn = drawnText;
        newText.text = parameterObject.text; // Recalculate the text width calling a listener.

        this.registerEvents(newText, drawnText);

        return this.addElement(newText, parameterObject.layer);
    }

    /**
     * @see {@link txt}
     */
    text(parameterObject) {
        return this.txt(parameterObject);
    }

    /**
     * Draw a new image with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x, y, width, height, image, and layer.
     */
    img(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x' in parameterObject)) {
            parameterObject.x = 10;
        }
        if (!('y' in parameterObject)) {
            parameterObject.y = 10;
        }
        if (!('width' in parameterObject)) {
            parameterObject.width = 50;
        }
        if (!('height' in parameterObject)) {
            parameterObject.height = 50;
        }
        if (!('image' in parameterObject)) {
            parameterObject.image = null;
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new image and set its id.
        let newImage = new Image(parameterObject.x, parameterObject.y, parameterObject.width, parameterObject.height, parameterObject.image);
        newImage.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newImage);
        drawer.svgArea = this;
        let drawnImage = drawer.draw(newImage);
        this.svg.appendChild(drawnImage);

        newImage.drawn = drawnImage;

        this.registerEvents(newImage, drawnImage);

        return this.addElement(newImage, parameterObject.layer);
    }

    /**
     * @see {@link img}
     */
    image(parameterObject) {
        return this.img(parameterObject);
    }

    /**
     * Draw a new vertical group with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x, y, stylingAttributes, groupStylingAttributes, and layer.
     */
    vGroup(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x' in parameterObject)) {
            parameterObject.x = 10;
        }
        if (!('y' in parameterObject)) {
            parameterObject.y = 10;
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes();
        }
        if (!('groupStylingAttributes' in parameterObject)) {
            parameterObject.groupStylingAttributes = new GroupStylingAttributes();
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new vertical group and set its id.
        let newVGroup = new VerticalGroup(parameterObject.x, parameterObject.y, parameterObject.stylingAttributes, parameterObject.groupStylingAttributes);
        newVGroup.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newVGroup);
        drawer.svgArea = this;
        let drawnVGroup = drawer.draw(newVGroup);
        this.svg.appendChild(drawnVGroup);

        newVGroup.drawn = drawnVGroup;

        this.registerEvents(newVGroup, drawnVGroup);

        return this.addElement(newVGroup, parameterObject.layer);
    }

    /**
     * @see {@link vGroup}
     */
    verticalGroup(parameterObject) {
        return this.vGroup(parameterObject);
    }

    /**
     * Draw a new linear group with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, stylingAttributes, groupStylingAttributes, and layer.
     */
    lGroup(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x1' in parameterObject)) {
            parameterObject.x1 = 10;
        }
        if (!('y1' in parameterObject)) {
            parameterObject.y1 = 10;
        }
        if (!('x2' in parameterObject)) {
            parameterObject.x2 = 100;
        }
        if (!('y2' in parameterObject)) {
            parameterObject.y2 = 100;
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes();
        }
        if (!('groupStylingAttributes' in parameterObject)) {
            parameterObject.groupStylingAttributes = new GroupStylingAttributes(0, 0);
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new linear group and set its id.
        let newLinearGroup = new LinearGroup(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2, parameterObject.stylingAttributes, parameterObject.groupStylingAttributes);
        newLinearGroup.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLinearGroup);
        drawer.svgArea = this;
        let drawnLinearGroup = drawer.draw(newLinearGroup);
        this.svg.appendChild(drawnLinearGroup);

        newLinearGroup.drawn = drawnLinearGroup;

        this.registerEvents(newLinearGroup, drawnLinearGroup);

        return this.addElement(newLinearGroup, parameterObject.layer);
    }

    /**
     * @see {@link lGroup}
     */
    linearGroup(parameterObject) {
        return this.lGroup(parameterObject);
    }

    /**
     * Draw a new line with the specified parameters.
     * @param parameterObject An object with the following optional attributes: x1, y1, x2, y2, stylingAttributes, and layer.
     */
    line(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('x1' in parameterObject)) {
            parameterObject.x1 = 10;
        }
        if (!('y1' in parameterObject)) {
            parameterObject.y1 = 10;
        }
        if (!('x2' in parameterObject)) {
            parameterObject.x2 = 100;
        }
        if (!('y2' in parameterObject)) {
            parameterObject.y2 = 10;
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes();
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new line and set its id.
        let newLine = new Line(parameterObject.x1, parameterObject.y1, parameterObject.x2, parameterObject.y2, parameterObject.stylingAttributes);
        newLine.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newLine);
        drawer.svgArea = this;
        let drawnLine = drawer.draw(newLine);
        this.svg.appendChild(drawnLine);

        newLine.drawn = drawnLine;

        this.registerEvents(newLine, drawnLine);

        return this.addElement(newLine, parameterObject.layer);
    }

    /**
     * Draw a new poly line with the specified parameters.
     * @param parameterObject An object with the following optional attributes: stylingAttributes and layer.
     * @param pairOfCoordinates An undefined odd number of coordinates (x and y).
     */
    polyLine(parameterObject, pairOfCoordinates) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('stylingAttributes' in parameterObject)) {
            parameterObject.stylingAttributes = new StylingAttributes(1, "black", "none");
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new line and set its id.
        let coordinates = Array.from(arguments).slice(1);
        let newPolyline = new PolyLine(parameterObject.stylingAttributes, coordinates);
        newPolyline.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newPolyline);
        drawer.svgArea = this;
        let drawnLine = drawer.draw(newPolyline);
        this.svg.appendChild(drawnLine);

        newPolyline.drawn = drawnLine;

        this.registerEvents(newPolyline, drawnLine);

        return this.addElement(newPolyline, parameterObject.layer);
    }

    /**
     * Draw a new box vertices decorator with the specified parameters.
     * @param parameterObject An object with the following required attributes: decorated; and the following optional attributes: layer.
     */
    boxVerticesDecorator(parameterObject) {
        if(!parameterObject || parameterObject === null) {
            parameterObject = {};
        }
        if (!('decorated' in parameterObject)) {
            throw "An object to decorated is required to create a new Box Vertices Decorator";
        }
        if (!('layer' in parameterObject)) {
            parameterObject.layer = this.topLayer;
        }

        //*****************************
        // Create a new box vertices decorator and set its id.
        let newBoxVerticesDecorator = new BoxVerticesDecorator(parameterObject.decorated);
        newBoxVerticesDecorator.id = parameterObject.decorated.id;

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newBoxVerticesDecorator);
        drawer.svgArea = this;
        let drawnBoxVerticesDecorator = drawer.draw(newBoxVerticesDecorator);
        this.svg.appendChild(drawnBoxVerticesDecorator);

        newBoxVerticesDecorator.drawn = drawnBoxVerticesDecorator;
        newBoxVerticesDecorator.notifyListeners(ChangeListener.POSITION, ChangeListener.DIMENSION);

        this.registerEvents(newBoxVerticesDecorator, drawnBoxVerticesDecorator);

        return this.addElement(newBoxVerticesDecorator, parameterObject.layer);
    }

    registerEvents(model, drawn) {
        drawn.onclick = model.fireOnClick.bind(model);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
    }

}