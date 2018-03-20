/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

'use strict';

import Circle from '../core/circle.js';
import Ellipse from '../core/ellipse.js';
import Rectangle from '../core/rectangle.js';
import Diamond from '../core/diamond.js';
import Text from '../core/text.js';
import Image from '../core/image.js';
import VerticalGroup from '../core/vertical-group.js';
import Line from '../core/line.js';
import LookAndFeel from './look-and-feel.js';
import PolyLine from "../core/polyline";
import BoxVerticesDecorator from "../core/box-vertices-decorator";
import ChangeListenerConstants from "../core/listener/change-listener-constants";
import AreaDefaults from "../core/area-defaults";
import {notifyListeners} from "../core/util";
import DefaultLookAndFeelFactory from "./default-look-and-feel-factory";
import SVGAreaConstants from "./svg-area-constants";
import Marker from "../core/marker";

export default class SVGArea extends AreaDefaults {

    constructor(svgSelector = "#svg") {
        super();

        this._svg = document.querySelector(svgSelector);
        this._namespace = "http://www.w3.org/2000/svg";
        this._elements = [];

        this._lookAndFeel = new DefaultLookAndFeelFactory();

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

        this.addMarkers();
    }

    addMarkers(svg) {
        //*****************************
        // Create a new marker and set its id.

        // Filled Triangle.
        let newModel = new Marker({id:Marker.FILLED_TRIANGLE, position: Marker.END, type: Marker.FILLED_TRIANGLE});
        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        // Triangle.
        newModel = new Marker({id:Marker.TRIANGLE, position: Marker.END, type: Marker.TRIANGLE});
        drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);
    }

    get lookAndFeel() {
        return this._lookAndFeel;
    }

    // TODO: Change all drawings when the look and feel is changed.
    set lookAndFeel(value) {
        this._lookAndFeel = value;
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

    handleLayerVisibilityChange({layer, oldValue, newValue} = {}) {
        if (oldValue !== newValue) {
            if (newValue === true) {
                // Make all elements in the layer visible.
                Object.keys(layer.elements).forEach(function (id) {
                    layer.getElement(id).style.visible = true;
                });
            } else {
                // Hide all elements in the layer.
                Object.keys(layer.elements).forEach(function (id) {
                    layer.getElement(id).style.visible = false;
                });
            }
        }
    }

    // Callback methods called by HTML SVG element events.
    fireOnClick(event) {
        notifyListeners({listener: this._onClick, target: this}, event.clientX, event.clientY, event);
    }

    fireOnDblClick(event) {
        notifyListeners({listener: this._onDblClick, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseDown(event) {
        notifyListeners({listener: this._onMouseDown, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseMove(event) {
        notifyListeners({listener: this._onMouseMove, target: this}, event.clientX, event.clientY, event);
    }

    fireOnMouseUp(event) {
        notifyListeners({listener: this._onMouseUp, target: this}, event.clientX, event.clientY, event);
    }

    addElement({element, layer} = {}) {
        if (!layer || layer === null) {
            layer = this.topLayer;
        }
        element.addTag({key: SVGAreaConstants.LAYER, value: layer});
        layer.addElement(element);
        return element;
    }

    removeElement(element) {
        element.getTag(SVGAreaConstants.LAYER).removeElement(element);
        this.svg.removeChild(element.getTag(SVGAreaConstants.DRAWN));
    }

    /**
     * Draw a new circle with the specified parameters.
     */
    circ({centerX, cx, centerY, cy, x1, x, y1, y, diameter, d, radius, r, style, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new circle and set its id.
        let newModel = new Circle(...arguments);
        newModel.id = this.generateElementId();

        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        newModel.addTag({key: SVGAreaConstants.DRAWN, value: drawn});

        this.registerEvents(newModel, drawn);

        return this.addElement({element: newModel, layer: layer});
    }

    /**
     * @see {@link circ}
     */
    circle() {
        return this.circ(...arguments);
    }

    /**
     * Draw a new ellipse with the specified parameters.
     */
    ellipse({centerX, cx, centerY, cy, x, x1, y, y1, x2, y2, width, w, height, h, dx, diameterX, radiusX, rx, dy, diameterY, radiusY, ry, style, preserveAspectRatio, layer = this.topLayer} = {}) {

        //*****************************
        // Create a new ellipse and set its id.
        let newEllipse = new Ellipse(...arguments);
        newEllipse.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newEllipse);
        drawer.svgArea = this;
        let drawnEllipse = drawer.draw(newEllipse);
        this.svg.appendChild(drawnEllipse);

        newEllipse.addTag({key: SVGAreaConstants.DRAWN, value: drawnEllipse});

        this.registerEvents(newEllipse, drawnEllipse);

        return this.addElement({element: newEllipse, layer: layer});
    }

    /**
     * Draw a new rectangle with the specified parameters.
     */
    rect({x1, x, y1, y, x2, y2, width, w, height, h, style, preserveAspectRatio, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new rectangle and set its id.
        let newRectangle = new Rectangle(...arguments);
        newRectangle.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newRectangle);
        drawer.svgArea = this;
        let drawnRectangle = drawer.draw(newRectangle);
        this.svg.appendChild(drawnRectangle);

        newRectangle.addTag({key: SVGAreaConstants.DRAWN, value: drawnRectangle});

        this.registerEvents(newRectangle, drawnRectangle);

        return this.addElement({element: newRectangle, layer: layer});
    }

    /**
     * @see {@link rect}
     */
    rectangle() {
        return this.rect(...arguments);
    }

    /**
     * Draw a new diamond with the specified parameters.
     */
    diamond({x1, x, y1, y, x2, width, w, y2, height, h, style, preserveAspectRatio, layer = this.topLayer} = {}) {
        // Create a new diamond and set its id.
        let newDiamond = new Diamond(...arguments);
        newDiamond.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newDiamond);
        drawer.svgArea = this;
        let drawnDiamond = drawer.draw(newDiamond);
        this.svg.appendChild(drawnDiamond);

        newDiamond.addTag({key: SVGAreaConstants.DRAWN, value: drawnDiamond});

        this.registerEvents(newDiamond, drawnDiamond);

        return this.addElement({element: newDiamond, layer: layer});
    }

    /**
     * Draw a new text with the specified parameters.
     */
    txt({x1, x, y1, y, text = "Default text", style, fontStyle, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new text and set its id.
        let newText = new Text(...arguments);
        newText.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newText);
        drawer.svgArea = this;
        let drawnText = drawer.draw(newText);
        this.svg.appendChild(drawnText);

        newText.addTag({key: SVGAreaConstants.DRAWN, value: drawnText});
        newText.text = text; // Recalculate the text width calling a listener.

        this.registerEvents(newText, drawnText);

        return this.addElement({element: newText, layer: layer});
    }

    /**
     * @see {@link txt}
     */
    text() {
        return this.txt(...arguments);
    }

    /**
     * Draw a new image with the specified parameters.
     */
    img({id, x1, x, y1, y, x2, y2, width, w, height, h, style, preserveAspectRatio, image, img, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new image and set its id.
        let newImage = new Image(...arguments);
        newImage.id = this.generateElementId();

        let lookAndFeel = new LookAndFeel();
        let drawer = lookAndFeel.getDrawerFor(newImage);
        drawer.svgArea = this;
        let drawnImage = drawer.draw(newImage);
        this.svg.appendChild(drawnImage);

        newImage.addTag({key: SVGAreaConstants.DRAWN, value: drawnImage});

        this.registerEvents(newImage, drawnImage);

        return this.addElement({element: newImage, layer: layer});
    }

    /**
     * @see {@link img}
     */
    image() {
        return this.img(...arguments);
    }

    /**
     * Draw a new vertical group with the specified parameters.
     */
    vGroup({x1, x, y1, y, style, groupStyle, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new vertical group and set its id.
        let newModel = new VerticalGroup(...arguments);
        newModel.id = this.generateElementId();

        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        newModel.addTag({key: SVGAreaConstants.DRAWN, value: drawn});

        this.registerEvents(newModel, drawn);

        return this.addElement({element: newModel, layer: layer});
    }

    /**
     * @see {@link vGroup}
     */
    verticalGroup() {
        return this.vGroup(...arguments);
    }

    /**
     * Draw a new line with the specified parameters.
     */
    line({id, x1, x, y1, y, x2, y2, style, layer = this.topLayer} = {}) {
        //*****************************
        // Create a new line and set its id.
        let newModel = new Line(...arguments);
        newModel.id = this.generateElementId();

        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        newModel.addTag({key: SVGAreaConstants.DRAWN, value: drawn});

        this.registerEvents(newModel, drawn);

        return this.addElement({element: newModel, layer: layer});
    }

    /**
     * Draw a new polyline with the specified parameters.
     * @param layer
     * @param style
     * @param pairsOfCoordinates
     */
    polyLine({layer = this.topLayer, style, initialMarker, endMarker, curve} = {}) {
        //*****************************
        // Create a new line and set its id.
        let newModel = new PolyLine(...arguments);
        newModel.id = this.generateElementId();

        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        newModel.addTag({key: SVGAreaConstants.DRAWN, value: drawn});

        this.registerEvents(newModel, drawn);

        return this.addElement({element: newModel, layer: layer});
    }

    boxVerticesDecorator({decorated, topLeft, topRight, bottomLeft, bottomRight, vertexSize, layer} = {}) {
        //*****************************
        // Create a new box vertices decorator and set its id based on the decorated id.
        let newModel = new BoxVerticesDecorator(...arguments);
        newModel.id = this.generateElementId();

        let drawer = this.lookAndFeel.getDrawerFor(newModel);
        drawer.svgArea = this;
        let drawn = drawer.draw(newModel);
        this.svg.appendChild(drawn);

        newModel.addTag({key: SVGAreaConstants.DRAWN, value: drawn});
        newModel.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);

        this.registerEvents(newModel, drawn);

        return this.addElement({element: newModel, layer: layer});
    }

    /**
     * @private
     * Register events for the drawn and the model.
     * @param model The model.
     * @param drawn The drawn.
     */
    registerEvents(model, drawn) {
        drawn.onclick = model.fireOnClick.bind(model);
        drawn.ondblclick = model.fireOnDblClick.bind(model);
        drawn.onmousedown = model.fireOnMouseDown.bind(model);
        drawn.onmousemove = model.fireOnMouseMove.bind(model);
        drawn.onmouseup = model.fireOnMouseUp.bind(model);
    }

}