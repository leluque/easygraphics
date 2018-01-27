/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 15/01/2017.
 */

'use strict';

import {notifyListeners} from "./util";
import GraphicalElement from "./graphical-element";

/**
 * This class implements a layer where the graphic elements can be drawn.
 */
export default class Layer {

    constructor({id, visible}={}) {
        this._id = id;
        this._visible = visible ? visible : true;

        // Define a new object to store graphical elements.
        // It works like a map, but with complexity on search of O(1).
        // The key is the element name.
        this._elements = {};

        // Event listeners.
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

   /* set id(value) {
        if (value !== this.id) {
            let oldValue = this.id;
            this._id = value;
            this.notifyIdChange(oldValue, value);
        } else {
            this._id = value;
        }
    }*/

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
        } else {
            this._visible = value;
        }
    }

  /*  get onChangeId() {
        return this._onChangeId;
    }

    set onChangeId(value) {
        // Argument is not a function.
        if (typeof(value) !== "function") {
            throw "Listener must be a function";
        }
        this._onChangeId = value;
    }*/

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

    get elements() {
        return this._elements;
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
        notifyListeners(this.onChangeVisibility, this, oldValue, newValue);
    }

 /*   notifyIdChange(oldValue, newValue) {
        notifyListeners(this.onChangeId, this, oldValue, newValue);
    }*/

    notifyElementAddition(addedElement) {
        notifyListeners(this.onAddElement, this, addedElement);
    }

    notifyElementRemoval(removedElement) {
        notifyListeners(this.onRemoveElement, this, removedElement);
    }

}