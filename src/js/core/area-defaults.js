/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 16/01/2018.
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
        // Array of layers order. It is used to define the drawing order.
        this._order = [];

        // Id count.
        this._elementIdCount = 1;
        this._layerIdCount = 1;

        // Layer-related event listeners.
        // Functions that receive the area and the changed layer as arguments.
        this._onAddLayer = null;
        this._onRemoveLayer = null;
        // Function that receive the area.
        this._onChangeLayerOrder = null;

        // Create a default layer that will be used if the user does not create a new one.
        this.newLayer();
    }

    get layers() {
        return this._layers;
    }

    get firstLayer() {
        if (this._order.length > 0) {
            return this._order[0];
        }
        return null;
    }

    get topLayer() {
        if (this._order.length > 0) {
            return this._order[this._order.length-1];
        }
        return null;
    }

    get onAddLayer() {
        return this._onAddLayer;
    }

    set onAddLayer(value) {
        this._onAddLayer = value;
    }

    get onChangeLayerOrder() {
        return this._onChangeLayerOrder;
    }

    set onChangeLayerOrder(value) {
        this._onChangeLayerOrder = value;
    }

    get onRemoveLayer() {
        return this._onRemoveLayer;
    }

    set onRemoveLayer(value) {
        this._onRemoveLayer = value;
    }

    get elementIdCount() {
        return this._elementIdCount;
    }

    get layerIdCount() {
        return this._layerIdCount;
    }

    get order() {
        return this._order;
    }

    get defaultLayer() {
        return this._order[this._order.length - 1]; // The top layer.
    }

    /**
     * Move the specified layer one position to the top of the layer order array.
     * @param layer The layer that must be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerUp(layer) {
        let layerPosition = this._order.indexOf(layer);
        // If it is not the layer at the top.
        if (layerPosition < this._order.length - 1) {
            // Remove the layer from its position.
            this._order.splice(layerPosition, 1);
            // Add the layer to the next position.
            this._order.splice(layerPosition + 1, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    /**
     * Move the specified layer one position to the bottom of the layer order array.
     * @param layer The layer that must be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerDown(layer) {
        let layerPosition = this._order.indexOf(layer);
        // If it is not the layer at the bottom.
        if (layerPosition > 0) {
            // Remove the layer from its position.
            this._order.splice(layerPosition, 1);
            // Add the layer to the previous position.
            this._order.splice(layerPosition - 1, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    /**
     * Move the specified layer to the specified position of the layer order array.
     * @param layer The layer that must be moved.
     * @returns {boolean} true, if the layer was moved. false, otherwise.
     */
    moveLayerTo(layer, targetPosition) {
        if (targetPosition >= this._order.length) {
            return false;
        }
        let layerPosition = this._order.indexOf(layer);
        // If it is not at the targeted position.
        if (layerPosition != targetPosition) {
            // Remove the layer from its position.
            this._order.splice(layerPosition, 1);
            // Add the layer to the targeted position.
            this._order.splice(targetPosition, 0, layer);
            this.notifyLayerOrderChanging();
            return true;
        }
        return false;
    }

    newLayer() {
        this.addLayer(new Layer(this.generateLayerId()));
    }

    addLayer(layer) {
        // Argument is not a layer.
        if (!(layer instanceof Layer)) {
            throw "Area layers must be instances of Layer";
        }
        // If a layer with the same id does not exist in the layer, add it.
        if (!(layer.id in this._layers)) {
            this._layers[layer.id] = layer;
            this._order.push(layer);
            this.notifyLayerAddition(layer);
            return true;
        } else {
            throw "The layer with id " + layer.id + " is already on the area.";
        }
        return false;
    }

    countLayers() {
        return Object.keys(this._layers).length;
    }

    /**
     * Return the layer that has the specified id.
     * @param id The layer id.
     * @returns {Layer} The layer.
     */
    getLayer(id) {
        return this._layers[id];
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

    notifyLayerOrderChanging() {
        notifyListeners(this.onChangeLayerOrder, this, null);
    }

    generateElementId() {
        return "e_" + (this._elementIdCount++);
    }

    generateLayerId() {
        return "l_" + (this._layerIdCount++);
    }

}