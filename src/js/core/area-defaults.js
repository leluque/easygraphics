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

import {getNonNullValue, isNull, notifyListeners} from "./util";
import Layer from "./layer";

export default class AreaDefaults {

    constructor() {
        // Define a new object to store layers.
        // It works like a map, but with complexity on search of O(1).
        // The key is the layer id.
        this._layers = {};
        // Layer stack. It is used to define the drawing layerStack of the layers' elements.
        this._layerStack = [];

        // Id count.
        this._elementIdCount = 1;
        this._layerIdCount = 1;

        // Layer-related event listener.
        // -----------------------------
        // Functions that receive the area and the changed layer as arguments.
        this._onAddLayer = null;
        this._onRemoveLayer = null;
        // Function that receives the area.
        this._onChangeLayerOrder = null;

        // Create a default layer that will be used if the user does not create a new one.
        this.newLayer();
    }

    get bottomLayer() {
        if (this._layerStack.length > 0) {
            return this._layerStack[0];
        }
        throw "The area has no layers.";
    }

    get topLayer() {
        if (this._layerStack.length > 0) {
            return this._layerStack[this._layerStack.length - 1];
        }
        throw "The area has no layers.";
    }

    get onAddLayer() {
        return this._onAddLayer;
    }

    set onAddLayer(value) {
        if (typeof(value) !== 'function') {
            throw "The callback must be a function.";
        }
        this._onAddLayer = value;
    }

    get onChangeLayerOrder() {
        return this._onChangeLayerOrder;
    }

    set onChangeLayerOrder(value) {
        if (typeof(value) !== 'function') {
            throw "The callback must be a function.";
        }
        this._onChangeLayerOrder = value;
    }

    get onRemoveLayer() {
        return this._onRemoveLayer;
    }

    set onRemoveLayer(value) {
        if (typeof(value) !== 'function') {
            throw "The callback must be a function.";
        }
        this._onRemoveLayer = value;
    }

    get elementIdCount() {
        return this._elementIdCount;
    }

    get layerIdCount() {
        return this._layerIdCount;
    }

    get layerStack() {
        return this._layerStack;
    }

    /**
     * Move the specified layer one position to the top of the layer stack.
     * @param layer The layer that must be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerUp(layer) {
        let layerPosition = this._layerStack.map(o => o.id).indexOf(layer.id);
        // If it is not the layer at the top.
        if (layerPosition < this._layerStack.length - 1) {
            // Remove the layer from its position.
            this._layerStack.splice(layerPosition, 1);
            // Add the layer to the next position.
            this._layerStack.splice(layerPosition + 1, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    /**
     * Move the specified layer one position to the bottom of the layer stack.
     * @param layer The layer that must be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerDown(layer) {
        let layerPosition = this._layerStack.map(o => o.id).indexOf(layer.id);
        // If it is not the layer at the bottom.
        if (layerPosition > 0) {
            // Remove the layer from its position.
            this._layerStack.splice(layerPosition, 1);
            // Add the layer to the previous position.
            this._layerStack.splice(layerPosition - 1, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    /**
     * Move the specified layer to the specified position of the layer stack.
     * @param layer The layer that must be moved.
     * @param position The position to which the layer has to be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerTo({layer, l, position, pos} = {}) {
        layer = getNonNullValue(layer, l);
        position = getNonNullValue(position, pos);
        // Argument is not a layer.
        if (!(layer instanceof Layer)) {
            throw "The element to be moved must be a layer";
        }
        if (position < 0 || position >= this._layerStack.length) {
            throw "The position is invalid.";
        }
        let layerPosition = this._layerStack.map(o => o.id).indexOf(layer.id);
        // If it is not at the targeted position.
        if (layerPosition !== position) {
            // Remove the layer from its position.
            this._layerStack.splice(layerPosition, 1);
            // Add the layer to the targeted position.
            this._layerStack.splice(position, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    newLayer() {
        return this.addLayer(new Layer({id: this.generateLayerId()}));
    }

    addLayer(layer) {
        // Argument is not a layer.
        if(isNull(Layer)) {
            throw "The layer cannot be null.";
        }
        if (!(layer instanceof Layer)) {
            throw "Area's layers must be instances of Layer. It is an instance of " + layer.prototype !== null && layer.prototype !== undefined ? layer.prototype.name : "null" + ".";
        }
        // If a layer with the same id does not exist in the area, add it.
        if (!(layer.id in this._layers)) {
            this._layers[layer.id] = layer;
            this._layerStack.push(layer);
            this.notifyLayerAddition(layer);
            return layer;
        } else {
            throw "The area already has a layer with id " + layer.id + ".";
        }
    }

    countLayers() {
        return Object.keys(this._layers).length;
    }

    /**
     * Return the layer that has the specified id.
     * @param {string} id The layer id.
     * @returns {Layer} The layer.
     */
    getLayer(id) {
        return this._layers[id];
    }

    /**
     * Return the layer that has the specified id.
     * @param {string} id The layer id.
     * @returns {Layer} The layer.
     */
    getLayerAt(position) {
        if (position < 0 || position >= this._layerStack.length) {
            throw "The position is invalid.";
        }
        return this._layerStack[position];
    }

    /**
     * Return an array of layer ids.
     * @returns {string[]} An array of layers id.
     */
    getLayersIds() {
        return Object.keys(this._layers);
    }

    /**
     * Remove the layer from the area if it exists.
     * @param layer The layer that must be removed.
     * @returns {boolean} true, if the layer was removed. false, otherwise.
     */
    removeLayer(layer) {
        // Argument is not a layer.
        if (!(layer instanceof Layer)) {
            throw "The element to be removed must be a layer";
        }
        if (layer.id in this._layers) {
            delete this._layers[layer.id];
            this._layerStack.splice(this._layerStack.map(o => o.id).indexOf(layer.id), 1);
            this.notifyLayerRemoval(layer);
            return true;
        }
        return false;
    }

    notifyLayerAddition(addedLayer) {
        notifyListeners({listener: this.onAddLayer, target: this}, addedLayer);
    }

    notifyLayerRemoval(removedLayer) {
        notifyListeners({listener: this.onRemoveLayer, target: this}, removedLayer);
    }

    notifyLayerOrderChanging() {
        notifyListeners({listener: this.onChangeLayerOrder, target: this}, null);
    }

    generateElementId() {
        return "e_" + (this._elementIdCount++);
    }

    generateLayerId() {
        return "l_" + (this._layerIdCount++);
    }

    toString() {
        return "Area with " + this.countLayers() + ": " + this._layerStack.map(o => o.id).join();
    }

}