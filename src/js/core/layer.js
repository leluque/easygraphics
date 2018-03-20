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

import {notifyListeners} from "./util";
import GraphicalElement from "./graphical-element";

/**
 * This class implements a layer where the graphic elements can be drawn.
 */
export default class Layer {

    constructor({id, name, visible = true} = {}) {
        this._id = id;
        this._name = name;
        this._visible = visible;

        // Define a new object to store graphical elements.
        // It works like a map, but with complexity on search of O(1).
        // The key is the element name.
        this._elements = {};

        // Event listener.
        // Functions that receive the layer, the old, and the new value as arguments.
        //this._onChangeId = null;
        this._onChangeVisibility = null;
        // Functions that receive the layer and the changed element as arguments.
        this._onAddElement = null;
        this._onRemoveElement = null;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        // Argument is not a boolean.
        if (typeof(value) !== typeof(true)) {
            throw "Visibility value must be a boolean";
        }
        if (value !== this.visible) {
            let oldValue = this.visible;
            this._visible = value;
            this.notifyVisibilityChange(oldValue, value);
        }
    }

    get onChangeVisibility() {
        return this._onChangeVisibility;
    }

    set onChangeVisibility(value) {
        // Argument is not a function.
        if (typeof(value) !== "function") {
            throw "Listener must be a function";
        }
        this._onChangeVisibility = value;
    }

    get onAddElement() {
        return this._onAddElement;
    }

    set onAddElement(value) {
        // Argument is not a function.
        if (typeof(value) !== "function") {
            throw "Listener must be a function";
        }
        this._onAddElement = value;
    }

    get onRemoveElement() {
        return this._onRemoveElement;
    }

    set onRemoveElement(value) {
        // Argument is not a function.
        if (typeof(value) !== "function") {
            throw "Listener must be a function";
        }
        this._onRemoveElement = value;
    }

    get elements() {
        return this._elements;
    }

    addElement(element) {
        // Argument is not a graphical element.
        if (!(element instanceof GraphicalElement)) {
            throw "Layer elements must be graphical elements";
        }
        // If a graphical element with the same id does not exist in the layer, add it.
        if (!(element.id in this._elements)) {
            this._elements[element.id] = element;
            this.notifyElementAddition(element);
            return true;
        }
        return false;
    }

    countElements() {
        return Object.keys(this._elements).length;
    }

    getElement(id) {
        return this._elements[id];
    }

    getElementsIds() {
        return Object.keys(this._elements);
    }

    removeElement(element) {
        if (element in this._elements) {
            delete this._elements[element.id];
            this.notifyElementRemoval(element);
            return true;
        }
        return false;
    }

    notifyVisibilityChange(oldValue, newValue) {
        notifyListeners({listener: this.onChangeVisibility, target: this}, oldValue, newValue);
    }

    notifyElementAddition(addedElement) {
        notifyListeners({listener: this.onAddElement, target: this}, addedElement);
    }

    notifyElementRemoval(removedElement) {
        notifyListeners({listener: this.onRemoveElement, target: this}, removedElement);
    }

}