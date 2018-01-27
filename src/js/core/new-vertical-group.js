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
/* jshint eqnull:true */

'use strict';

import GraphicalElement from "./graphical-element";
import NewGroupStylingAttributes from "./new-group-styling-attributes";

/**
 * A vertical group is a linear layout in which children are vertically organized.
 *
 * Children position:
 * ------------------
 * The children position is relative to the group position, starting at 0, 0 (left, top).
 *
 * Margins and paddings:
 * --------------------
 * A group has a horizontal and a vertical padding that is applied to all its children.
 * Additionally, each child may have an individual horizontal and vertical margin.
 *
 * Children width:
 * --------------
 * A child width is determined by a combination of its current width and its horizontal
 * resizing policy. There are four (4) resizing policies: WRAP_CONTENT, MATCH_FRAME_BORDER,
 * MATCH_CONTENT_AREA, and MATCH_PARENT.
 * When the policy is WRAP_CONTENT, the child current width is maintained.
 * When the policy is MATCH_FRAME_BORDER, the child width is adjusted so that the child limits
 * touch the frame borders (horizontally). The group horizontal padding and the child horizontal
 * margin are discard in this case.
 * When the policy is MATCH_CONTENT_AREA, the child width is adjusted to fill horizontally the
 * content area (a rectangle inside the frame) minus the group horizontal padding and the child
 * horizontal margin.
 * When the policy is MATCH_PARENT, the child width is equal to that of the group. The group horizontal
 * padding and the child horizontal margin are discard in this case.
 *
 * Relations and dependencies:
 * --------------------------
 *  The main relations and dependencies between the group and its children are:
 * - If the group width changes, some children may have its width changed as well;
 * - If the group height changes, some children (with weight) may have its height changed as well;
 * - If a child width changes, the group may have its width changed as well (if the new child width is bigger than
 * the current group width or (if it is smaller than the group width and the child was responsible for the current
 * group width);
 * - If a child height changes, the group may have its height changed as well;
 */
export default class NewVerticalGroup extends GraphicalElement {

    /**
     * This method creates a new vertical group.
     * @param {string} [id] - The vertical group id.
     * @param (number} [x] - The vertical group x-coordinate.
     * @param (number} [y] - The vertical group y-coordinate.
     * @param width
     * @param height
     * @param frame
     * @param stylingAttributes
     * @param groupStylingAttributes
     * @param preserveAspectRatio
     */
    constructor({id, x = 0, y = 0, width = 0, height = 0, frame, stylingAttributes, groupStylingAttributes = new NewGroupStylingAttributes(), preserveAspectRatio} = {}) {
        super(id, x, y, width, height, stylingAttributes, preserveAspectRatio);

        this._frame = null;
        this.frame = frame;
        this._groupStylingAttributes = null;
        this.groupStylingAttributes = groupStylingAttributes;

        // Change the width and height after defining the frame and the group styling attributes.
        // Remember that before super, there is no 'this'.
        let totalGroupHorPadding = this.groupStylingAttributes.horPadding == null ? 0 : 2 * this.groupStylingAttributes.horPadding;
        let totalGroupVerPadding = this.groupStylingAttributes.verPadding == null ? 0 : 2 * this.groupStylingAttributes.verPadding;
        this.width = width + totalGroupHorPadding;
        this.height = height + totalGroupVerPadding;

        // Children-related data.
        this._children = [];
        this._horMargin = []; // Horizontal margin.
        this._verMargin = []; // Vertical margin.
        this._horResizingPolicy = []; // Horizontal resizing policy.
        this._horGravity = []; // Horizontal gravity.
        this._weight = []; // Vertical weight (to fill the remaining space).
    }

    // The child width fills the available space (minus general horizontal margin and child horizontal margin).
    static get MATCH_PARENT() {
        return 2;
    }

    // The child width fills the available context box area - a rectangle inside the frame (minus general horizontal margin and child horizontal margin).
    static get MATCH_CONTENT_AREA() {
        return 1;
    }

    // The child width fills the minimum required space.
    static get WRAP_CONTENT() {
        return 0;
    }

    // Left gravity.
    static get LEFT() {
        return 0;
    }

    // Center gravity.
    static get CENTER() {
        return 1;
    }

    // Right gravity.
    static get RIGHT() {
        return 2;
    }

    get frame() {
        return this._frame;
    }

    set frame(value) {
        this._frame = value;

        // Change the group width and height to accommodate the frame border.
        this.width += value.borderSize * 2;
        this.height += value.borderSize * 2;

        this._frame.x = this.x;
        this._frame.y = this.y;
        this._frame.width = this.width;
        this._frame.height = this.height;

    }

    get children() {
        return this._children;
    }

    get horResizingPolicy() {
        return this._horResizingPolicy;
    }

    get horGravity() {
        return this._horGravity;
    }

    get weight() {
        return this._weight;
    }

    get groupStylingAttributes() {
        return this._groupStylingAttributes;
    }

    set groupStylingAttributes(value) {
        this._groupStylingAttributes = value;
    }

    /**
     * This method calculates and returns the minimum width required to display the group content.
     * @returns {number} The minimum width required to display the group content.
     */
    get minContentWidth() {
        let totalGroupHorPadding = this.groupStylingAttributes.horPadding == null ? 0 : 2 * this.groupStylingAttributes.horPadding;
        let calcMinWidth = totalGroupHorPadding;
        // Get the biggest child min width and add its horizontal margin.
        for (let i = 0; i < this.countChildren(); i++) {
            let totalChildHorMargin = this.getChildHorMarginAt(i) == null ? 0 : 2 * this.getChildHorMarginAt(i);
            let totalChildMinWidth = this.getChildAt(i).minWidth + totalGroupHorPadding + totalChildHorMargin;
            if (totalChildMinWidth > calcMinWidth) {
                calcMinWidth = totalChildMinWidth;
            }
        }
        return calcMinWidth;
    }

    get width() {
        return super.width;
    }

    /**
     * This method sets the group width.
     * If the new width is smaller than the minimum required width to display the group, return without changing anything.
     * @param {number} value The new width.
     */
    set width(value) {
    }

    get height() {
        return super.height;
    }

    /**
     * Sets the group height.
     * @param {number} value The group height.
     */
    set height(value) {

    }

    /**
     * This method adds a new child to the group with the specified arguments.
     * @param child The child.
     * @param horResizingPolicy The child horizontal resizing policy (one of the constants in this class).
     * @param horGravity The child horizontal gravity (one of the constants in this class).
     * @param weight The child vertical weight, that defines how the child will fill the remaining space.
     * @param leftMargin The child left margin.
     * @param rightMargin The child right margin.
     * @param topMargin The child top margin.
     * @param bottomMargin The child bottom margin.
     */
    addChild({child, horResizingPolicy = NewVerticalGroup.WRAP_CONTENT, horGravity = NewVerticalGroup.LEFT, weight = 0, leftMargin = 0, rightMargin = 0, topMargin = 0, bottomMargin = 0} = {}) {
        //*****************************
        // Increase the group height to fit the new height.
        /*
                let childRequiredHeight = child.height + this.verMargin + overlap;
                if (this.countChildren() == 0) { // Add another vertical margin to the first child.
                    childRequiredHeight += this.verMargin;
                }
                this.increaseHeightBy(childRequiredHeight);

                //!*****************************
                // Calculate the minimum width that the group must have to fit this new child in its content.
                let requiredGroupWidth = child.minWidth + 2 * this.horMargin;  // MARGIN + child + MARGIN.
                if (this.frame !== null) {
                    let boundingBox = new BoundingBox(this.x, this.y, this.x + requiredGroupWidth, this.y2);
                    requiredGroupWidth = this.frame.widthToFit(boundingBox);
                }

                //!*****************************
                // Add to the group the child, its resizing policy, and its gravity.
                this.children.push(child);
                this.resizePolicy.push(resizePolicy);
                this.gravity.push(gravity);
                this.weight.push(weight);
                this.overlap.push(overlap);
                this.drawn.appendChild(child.drawn);

                //!*****************************
                // Update the group width if necessary.
                if (this.width < requiredGroupWidth) {
                    this.width = requiredGroupWidth;
                }

                // Add the group as a child change listener.
                child.addChangeListener(new VerticalGroupChildChangeListener(this));
        */
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

    /**
     * Returns the children horizontal margin at the specified index.
     * @param {number} i The index.
     * @returns {GeometricShape} The child horizontal margin at the specified index.
     */
    getChildHorMarginAt(i) {
        return this._horMargin[i];
    }

}
