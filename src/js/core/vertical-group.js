/* JSHint configurations */
/* jshint esversion: 6 */
/* jshint -W097 */

/**
 * Created by Leandro Luque on 08/06/2017.
 */

'use strict';

import GraphicalElement from './graphical-element.js';
import BoundingBox from './bounding-box.js';
import VerticalGroupChildChangeListener from './vertical-group-child-change-listener.js';
import GroupStylingAttributes from "./group-styling-attributes";
import StylingAttributes from "./styling-attributes";

export default class VerticalGroup extends GraphicalElement {

    constructor(x = 0, y = 0, stylingAttributes = new StylingAttributes(), groupStylingAttributes = new GroupStylingAttributes()) {
        super(x, y, 0, 0, stylingAttributes);
        this._groupStylingAttributes = groupStylingAttributes;
        this._children = [];
        this._resizePolicy = [];
        this._gravity = [];
        this._weight = [];
        this._overlap = [];
        this._frame = null;
        this._dimensionReadjustmentEnabled = 0; // Must listeners be notified about changes?
                                                // 0 means yes.
                                                // Any value greater than 0 means a recursive call to
                                                // disable change notifications.
        // Does the group must fit its content?
        // If the user resize it, for example, this attribute may be changed to false.
        this._fitContent = true;
    }

    // It goes further the content area and touches the frame borders.
    static get MATCH_PARENT() {
        return 3;
    }

    // It does not use horizontal margins for elements.
    static get MATCH_CONTENT_AREA() {
        return 2;
    }

    // It uses horizontal margins for elements.
    static get FILL_SPACE() {
        return 1;
    }

    static get WRAP_CONTENT() {
        return 0;
    }

    static get LEFT() {
        return 0;
    }

    static get CENTER() {
        return 1;
    }

    static get RIGHT() {
        return 2;
    }

    /**
     * Returns the group x coordinate.
     * @returns {number} The group x coordinate.
     */
    get x() {
        return super.x;
    }

    /**
     * Sets the group x coordinate.
     * @param {number} value The new x coordinate.
     */
    set x(value) {
        // Calculate the difference between the current x value and the new one.
        let delta = value - this.x;

        super.x = value;
        if (this.frame !== null) {
            this.frame.x = this.x;
        }

        //*****************************
        // Move all children.
        this.disableDimensionReadjustment(); // The dimension does not have to change in this case.
        for (let child of this.children) {
            child.x += delta;
        }
        this.enableDimensionReadjustment();
    }

    /**
     * Returns the group y coordinate.
     * @returns {number} The group y coordinate.
     */
    get y() {
        return super.y;
    }

    /**
     * Changes the group y coordinate.
     * @param {number} value The new y coordinate.
     */
    set y(value) {
        // Calculate the difference between the current y value and the new one.
        let delta = value - this.y;

        super.y = value;
        if (this.frame !== null) {
            this.frame.y = this.y;
        }

        //*****************************
        // Move all children.
        this.disableDimensionReadjustment(); // The dimension does not have to change in this case.
        for (let child of this.children) {
            child.y += delta;
        }
        this.enableDimensionReadjustment();
    }

    /**
     * Returns the group width.
     * @returns {number} The group width.
     */
    get width() {
        return super.width;
    }

    /**
     * Sets the group width.
     * If the new width is smaller than the minimum required width to display the group, return without changing anything.
     * @param {number} value The new width.
     */
    set width(value) {
        //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
        //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;
        this.disableChangeNotifications(); // Prevent stack overflow.
        this.disableDimensionReadjustment(); // Prevent stack overflow.
        let minimumRequiredWidth = this.minContentWidth;
        if (this.frame !== null) {
            let boundingBox = new BoundingBox(this.x, this.y, this.x + minimumRequiredWidth, this.y2);
            minimumRequiredWidth = this.frame.widthToFit(boundingBox);
        }
        if (value < minimumRequiredWidth) { // Do not resize if the content does not fit the new width.
            return;
        }

        super.width = value;

        // Check whether the height must be changed.
        // It must be necessary if the frame is a circle or a square, for example.
        if (this.frame !== null) {
            this.frame.width = this.width;
            super.height = this.frame.height;
        }

        this.adjustChildrenPositionAndDimension();

        this.enableChangeNotifications();
        this.enableDimensionReadjustment();
        //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
        //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
    }

    /**
     * Calculates and returns the minimum width required to display the group content.
     * @returns {number} The minimum width required to display the group content.
     */
    get minContentWidth() {
        let calcMinWidth = 0;
        // Get the biggest child min width and add the horizontal margin when necessary.
        for (let i = 0; i < this.countChildren(); i++) {
            let child = this.getChildAt(i);
            if (child.minWidth > calcMinWidth) {
                calcMinWidth = child.minWidth;
                // MATCH_CONTENT_AREA does not use horizontal margins for elements.
                // It is used for lines, for example.
                if (this.resizePolicy[i] !== VerticalGroup.MATCH_CONTENT_AREA &&
                    this.resizePolicy[i] !== VerticalGroup.MATCH_PARENT) {
                    calcMinWidth += 2 * this.horMargin;
                }
            }
        }
        return calcMinWidth;
    }

    /**
     * Calculates and returns the minimum width required to display the group frame and its content.
     * @returns {number} The minimum width required to display the group frame and its content.
     */
    get minWidth() {
        let calcMinWidth = this.minContentWidth;

        if (this.frame !== null) {
            let boundingBox = new BoundingBox(this.x, this.y, this.x + calcMinWidth, this.y2);
            let frameWidth = this.frame.widthToFit(boundingBox);
            return frameWidth;
        }

        return calcMinWidth;
    }

    /**
     * Returns the group height.
     * @returns {number} The group height.
     */
    get height() {
        return super.height;
    }

    /**
     * Sets the group height.
     * @param {number} value The group height.
     */
    set height(value) {
        //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
        //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;

        this.disableChangeNotifications();
        this.disableDimensionReadjustment(); // Prevent stack overflow.
        let minimumRequiredHeight = this.minHeight;
        if (value < minimumRequiredHeight) {
            return;
        }

        super.height = value;

        // Check whether the width must be changed.
        // It must be necessary if the frame is a circle or a square, for example.
        if (this.frame !== null) {
            this.frame.height = this.height;
            super.width = this.frame.width;
        }

        this.adjustChildrenPositionAndDimension();

        //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
        this.enableChangeNotifications();
        this.enableDimensionReadjustment();
        //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
    }

    /**
     * Calculates and returns the minimum height required to display the group content.
     * @returns {number} The minimum height required to display the group content.
     */
    get minContentHeight() {
        let contentMinHeight = 0;
        let i = 0;
        for (let child of this.children) {
            contentMinHeight += this.verMargin;
            contentMinHeight += child.minHeight + this.overlap[i];
            i++;
        }
        if (this.countChildren() > 0) {
            contentMinHeight += this.verMargin;
        }

        return contentMinHeight;
    }

    /**
     * Calculates and returns the minimum height required to display the group frame and its content.
     * @returns {number} The minimum height required to display the group frame and its content.
     */
    get minHeight() {
        let calcMinHeight = this.minContentHeight;

        if (this.frame !== null) {
            let boundingBox = new BoundingBox(this.x, this.y, this.x2, this.y + calcMinHeight);
            let frameHeight = this.frame.heightToFit(boundingBox);
            return frameHeight;
        }

        return calcMinHeight;
    }

    /**
     * Returns the children.
     * @returns {Array} The children.
     */
    get children() {
        return this._children;
    }

    /**
     * Sets the children.
     * @param {Array} value The children array.
     */
    set children(value) {
        this._children = [];
        for (let child of value) {
            this.add(child);
        }
    }

    /**
     * Returns the frame.
     * @returns {GeometricShape|null} The frame.
     */
    get frame() {
        return this._frame;
    }

    // TODO: What to do when a frame is removed?
    /**
     * Sets the frame.
     * @param {GeometricShape|null} value value The new frame.
     */
    set frame(value) {
        this.disableChangeNotifications();

        // Change the group width and height to accommodate the frame border.
        this.width += value.borderSize * 2;
        this.height += value.borderSize * 2;

        this._frame = value;
        this.drawn.appendChild(this.frame.drawn);
        this.frame.x = this.x;
        this.frame.y = this.y;
        this.frame.width = this.width;
        this.frame.height = this.height;

        this.adjustChildrenPositionAndDimension();
        this.enableChangeNotifications();

        this.frame.notifyListeners();
        this.notifyListeners();
    }

    get dimensionReadjustmentEnabled() {
        return this._dimensionReadjustmentEnabled === 0;
    }

/*
    set dimensionReadjustmentEnabled(value) {
        this._dimensionReadjustmentEnabled = value;
    }
*/

    get fitContent() {
        return this._fitContent;
    }

    set fitContent(value) {
        this._fitContent = value;
    }

    get groupStylingAttributes() {
        return this._groupStylingAttributes;
    }

    set groupStylingAttributes(value) {
        this._groupStylingAttributes = value;
        this.notifyListeners();
    }

    /**
     * Returns the horizontal margin.
     * @returns {number} The horizontal margin.
     */
    get horMargin() {
        if (this.groupStylingAttributes !== null) {
            return this.groupStylingAttributes.horMargin;
        }
        return 0;
    }

    /**
     * Returns the vertical margin.
     * @returns {number} The vertical margin.
     */
    get verMargin() {
        if (this.groupStylingAttributes !== null) {
            return this.groupStylingAttributes.verMargin;
        }
        return 0;
    }

    get borderSize() {
        if (this.frame !== null) {
            return this.frame.borderSize;
        }
    }

    get resizePolicy() {
        return this._resizePolicy;
    }

    set resizePolicy(value) {
        this._resizePolicy = value;
    }

    get gravity() {
        return this._gravity;
    }

    set gravity(value) {
        this._gravity = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get overlap() {
        return this._overlap;
    }

    set overlap(value) {
        this._overlap = value;
    }

    /**
     * Recalculate children position and dimension.
     */
    adjustChildrenPositionAndDimension() {
        let availableWidthForChildren = this.width;
        let newX = this.x;
        let newY = this.y;
        let rightXLimit = this.x + this.width;
        let bottomYLimit = this.y + this.height;
        if (this.frame !== null) {
            let contentBox = this.frame.contentBox(this.width, this.height);
            availableWidthForChildren = contentBox.width;
            newX = contentBox.x1;
            newY = contentBox.y1;
            rightXLimit = contentBox.x2;
            bottomYLimit = contentBox.y2;
        }

        // Calculate the content height.
        let contentHeight = 0;
        if (this.countChildren() > 0) {
            contentHeight += this.verMargin;
        }
        let i = 0;
        for (let child of this.children) {
            contentHeight += child.height + this.overlap[i];
            contentHeight += this.verMargin;
            i++;
        }

        // Calculate the space left after drawing all children.
        let heightLeft = (bottomYLimit - newY) - contentHeight;
        // If the is space left, distribute it among the children with weight greater than zero (0).
        if (heightLeft > 0) {
            // Sum all children weight.
            let weightSum = 0;
            for (i = 0; i < this.countChildren(); i++) {
                weightSum += this.weight[i];
            }
            for (i = 0; i < this.countChildren(); i++) {
                let child = this.children[i];
                if (this.weight[i] > 0) {
                    let deltaHeight = this.weight[i] / weightSum * heightLeft;
                    child.height += deltaHeight;
                }
            }
        }

        // Center content vertically inside the group.
        // It is important for squared frames as circles, for example.
        // Recalculate the content weight.
        contentHeight = 0;
        if (this.countChildren() > 0) {
            contentHeight += this.verMargin;
        }
        i = 0;
        for (let child of this.children) {
            contentHeight += child.height + this.overlap[i];
            contentHeight += this.verMargin;
            i++;
        }
        let deltaY = ((bottomYLimit - newY) - contentHeight) / 2;
        newY += deltaY + this.verMargin; // The vertical margin is necessary to start at the right position for the first child.

        // Adjust children's position and dimension.
        for (i = 0; i < this.countChildren(); i++) {
            //let oldChangeNotificationsStatus = this.children[i].changeNotificationsEnabled;
            this.children[i].disableChangeNotifications(); // Prevent cascade readjustments: parent changes child and child changes parent.

            if (this.resizePolicy[i] === VerticalGroup.WRAP_CONTENT) {
                if (this.gravity[i] === VerticalGroup.LEFT) {
                    this.children[i].x = newX + this.horMargin;
                } else if (this.gravity[i] == VerticalGroup.RIGHT) {
                    this.children[i].x = rightXLimit - this.horMargin - this.children[i].width;
                } else {
                    this.children[i].x = ((newX + rightXLimit) - this.children[i].width) / 2;
                }
            } else if (this.resizePolicy[i] === VerticalGroup.FILL_SPACE) {
                this.children[i].width = availableWidthForChildren - 2 * this.horMargin;
                this.children[i].x = newX + this.horMargin;
            } else if (this.resizePolicy[i] === VerticalGroup.MATCH_CONTENT_AREA) {
                this.children[i].width = availableWidthForChildren;
                this.children[i].x = newX;
            } else if (this.resizePolicy[i] === VerticalGroup.MATCH_PARENT) {
                let boundaryX1 = this.boundaryX1For(newY);
                let boundaryX2 = this.boundaryX2For(newY);
                if (this.frame !== null) {
                    boundaryX1 = this.frame.boundaryX1For(newY);
                    boundaryX2 = this.frame.boundaryX2For(newY);
                }

                this.children[i].width = boundaryX2 - boundaryX1;
                this.children[i].x = boundaryX1;
            }

            newY += this.overlap[i];
            this.children[i].y = newY;
            newY += this.children[i].height + this.verMargin;

            //this.children[i].changeNotificationsEnabled = oldChangeNotificationsStatus;
            this.children[i].enableChangeNotifications();
            this.children[i].notifyListeners();
        }
    }

    /**
     * Readjusts the group dimension.
     */
    readjustDimensions() {
        if (!this.dimensionReadjustmentEnabled) {
            return;
        }

        if (this.fitContent || this.minWidth > this.width) {
            this.width = this.minWidth;
        }
        if (this.fitContent || this.minHeight > this.height) {
            this.height = this.minHeight;
        }
    }

    /**
     * Increases the width value by the specified parameter value.
     * @param {number} value The width delta.
     */
    increaseWidthBy(value) {
        this.width += value;
    }

    /**
     * Increases the height value by the specified parameter value.
     * @param {number} value The height delta.
     */
    increaseHeightBy(value) {
        this.height += value;
    }

    /**
     * Appends a new child to the group.
     * @param child The child.
     * @param resizePolicy the child resize policy.
     * @param gravity The child horizontal gravity.
     */
    addChild(child, resizePolicy = VerticalGroup.WRAP_CONTENT, gravity = VerticalGroup.LEFT, weight = 0, overlap = 0) {
        //let oldChangeNotificationsStatus = this.changeNotificationsEnabled;
        //let oldDimensionReadjustmentStatus = this.dimensionReadjustmentEnabled;
        this.disableChangeNotifications(); // Avoid unnecessary change notifications.
        this.disableDimensionReadjustment(); // Avoid unnecessary readjustments.

        //*****************************
        // Increase the group height to fit the new child.
        let childRequiredHeight = child.height + this.verMargin + overlap;
        if (this.countChildren() == 0) { // Add another vertical margin to the first child.
            childRequiredHeight += this.verMargin;
        }
        this.increaseHeightBy(childRequiredHeight);

        //*****************************
        // Calculate the minimum width that the group must have to fit this new child in its content.
        let requiredGroupWidth = child.minWidth + 2 * this.horMargin;  // MARGIN + child + MARGIN.
        if (this.frame !== null) {
            let boundingBox = new BoundingBox(this.x, this.y, this.x + requiredGroupWidth, this.y2);
            requiredGroupWidth = this.frame.widthToFit(boundingBox);
        }

        //*****************************
        // Add to the group the child, its resizing policy, and its gravity.
        this.children.push(child);
        this.resizePolicy.push(resizePolicy);
        this.gravity.push(gravity);
        this.weight.push(weight);
        this.overlap.push(overlap);
        this.drawn.appendChild(child.drawn);

        //*****************************
        // Update the group width if necessary.
        if (this.width < requiredGroupWidth) {
            this.width = requiredGroupWidth;
        }

        // Add the group as a child change listener.
        child.addChangeListener(new VerticalGroupChildChangeListener(this));

        //this.changeNotificationsEnabled = oldChangeNotificationsStatus;
        this.enableChangeNotifications();
        this.adjustChildrenPositionAndDimension();
        this.enableDimensionReadjustment();
        //this.dimensionReadjustmentEnabled = oldDimensionReadjustmentStatus;
    }

    /**
     * Returns the number of children.
     * @returns {Number} The number of children.
     */
    countChildren() {
        return this._children.length;
    }

    /**
     * Returns the children at the specified index.
     * @param {number} i The index.
     * @returns {GeometricShape} The child at the specified index.
     */
    getChildAt(i) {
        return this._children[i];
    }

    disableDimensionReadjustment() {
        this._dimensionReadjustmentEnabled++;
    }

    enableDimensionReadjustment() {
        this._dimensionReadjustmentEnabled--;
    }

    forceFitContent() {
        this.fitContent = true;
        this.readjustDimensions();
    }
}