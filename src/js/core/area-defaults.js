/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 09/01/2017.
 */

'use strict';
import {notifyListeners} from "./util";
import Layer from "./layer";

export default class AreaDefaults {

    constructor() {
        // Define a new object to store layers.
        // It works like a map, but with complexity on search of O(1).
        // The key is the layer id.
        this._layers = {};
        // Array of layers order.
        this._order = [];

        // Id generators.
        this._elementIdCount = 1;
        this._layerIdCount = 1;

        // Event listeners.
        // Functions that receive the area and the changed layer as arguments.
        this._onAddLayer = null;
        this._onRemoveLayer = null;

        // Create a default layer that will be used if the user does not create a new one.
        this.add(new Layer(this.generateLayerId()));
    }

    get layers() {
        return this._layers;
    }

    get onAddLayer() {
        return this._onAddLayer;
    }

    set onAddLayer(value) {
        this._onAddLayer = value;
    }

    get onRemoveLayer() {
        return this._onRemoveLayer;
    }

    set onRemoveLayer(value) {
        this._onRemoveLayer = value;
    }

    get idCount() {
        return this._elementIdCount;
    }

    set idCount(value) {
        this._elementIdCount = value;
    }

    get order() {
        return this._order;
    }

    get defaultLayer() {
        return this._order[this._order.length - 1];
    }

    add(layer) {
        // Argument is not a layer.
        if (!(layer instanceof Layer)) {
            throw "Area elements must be layers";
        }
        // If a layer with the same id does not exist in the layer, add it.
        if (!(layer.id in this._layers)) {
            this._layers[layer.id] = layer;
            this._order.push(layer);
            this.notifyLayerAddition(layer);
            return true;
        }
        return false;
    }

    countLayers() {
        return Object.keys(this._layers).length;
    }

    get(id) {
        return this._layers[id];
    }

    getIds() {
        return Object.keys(this._layers);
    }

    remove(layer) {
        if (layer in this._layers) {
            delete this._layers[layer.id];
            this._order.splice(this._order.indexOf(layer), 1);
            this.notifyLayerRemoval(layer);
            return true;
        }
        return false;
    }

    notifyLayerAddition(addedLayer) {
        notifyListeners(this.onAddLayer, this, addedLayer);
    }

    notifyLayerRemoval(removedLayer) {
        notifyListeners(this.onRemoveLayer, this, removedLayer);
    }

    generateElementId() {
        return "e_" + (this._elementIdCount++);
    }

    generateLayerId() {
        return "l_" + (this._layerIdCount++);
    }
}