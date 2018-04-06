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
import GroupStyle from "./style/group-style";
import ChangeListenerConstants from "./listener/change-listener-constants";
import {
    checkRedundantArguments,
    error,
    getNonNullValue,
    isNotABoolean,
    isNotANumber,
    isNotNull,
    isNull,
    warning
} from "./util";
import VerticalGroupStyleChangeListener from "./listener/vertical-group-style-change-listener";
import VerticalGroupFrameChangeListener from "./listener/vertical-group-frame-change-listener";
import VerticalGravity from "./vertical-gravity";
import VerticalGroupChild from "./vertical-group-child";
import BoundingBox from "./bounding-box";
import ResizePolicy from "./resize-policy";
import HorizontalGravity from "./horizontal-gravity";

/**
 * A vertical group is a linear layout in which children are vertically organized.
 *
 * Frame:
 * ------
 * It may have a frame, which works as an outer border for the group. A group doesn't have an aspect
 * ratio, but a frame has.
 *
 * Components:
 * -----------
 * A group has 3 components. The drawing bellow illustrates these components.
 * -------------------------------------------------
 * | Group and frame                               |
 * |     -------------------------------------     |
 * |     | Content area                      |     |
 * |     |    ---------------------------    |     |
 * |     |    | Minimum content area    |    |     |
 * |     |    |                         |    |     |
 * |     |    |                         |    |     |
 * |     |    ---------------------------    |     |
 * |     -------------------------------------     |
 * |                                               |
 * ------------------------------------------------
 *
 * The group and frame have the same dimension. When the dimension of one changes, the dimension of the other also
 * changes.
 * The content area is an automatically calculated rectangle inside the group in which content can be inserted. When
 * the group has no frame or it's a rectangle, the content area is the same as the group area. When the frame is a
 * circle, an ellipse, a diamond, or other non-rectangular area, the content area does not correspond to the group nor
 * the frame area.
 * The minimum content area is the minimum area required to display the group content.
 *
 * A child may extended horizontally in order to fill the content area using the resizing policy MATCH_CONTENT_AREA,
 * described below.
 * A child may even be extended to touch the group frame borders (outside the content area) using the resizing policy
 * MATCH_PARENT, also described below.
 * The minimum content area height may be resized to match the content area height with children weight, that determines
 * how the difference between minimum content area height and content area height must be distributed among children.
 * If no child has a weight bigger than zero (0), the minimum content area must be vertically aligned inside the
 * content area using the verticalGravity attribute.
 *
 * Children position:
 * ------------------
 * The children position is relative to the content area position inside the group - The group top-left position
 * is assumed to be (0, 0).
 *
 * Margins and paddings:
 * --------------------
 * A group has horizontal and vertical paddings applied to its content.
 * Also, each child may have an individual top, right, bottom, and left margin.
 * The group has a vertical space between children.
 *
 * Children width:
 * --------------
 * A child width is determined by a combination of its current width and its horizontal
 * resizing policy. There are three (3) resizing policies: WRAP_CONTENT, MATCH_PARENT, and
 * MATCH_CONTENT_AREA.
 * When the policy is WRAP_CONTENT, the current child width is used.
 * When the policy is MATCH_PARENT, the child width is adjusted so that the child limits
 * touch the frame borders (horizontally). The group horizontal padding and the child horizontal
 * margins are discard in this case.
 * When the policy is MATCH_CONTENT_AREA, the child width is adjusted to fill horizontally the
 * content area (a rectangle inside the frame) minus the group horizontal padding and the child
 * horizontal margins.
 */
export default class VerticalGroup extends GraphicalElement {

    constructor({id, x1, x, y1, y, x2, width, w, y2, height, h, style, groupStyle = new GroupStyle(), frame, neverHideContent = true, verticalGravity, vGravity} = {}) {
        super(...arguments);

        this._groupStyle = groupStyle;

        this._children = [];
        this._adjustGroupWhenFrameChanges = 0; // 0 means yes.
        this._adjustGroupWhenChildrenChange = 0; // 0 means yes.
        this._adjustChildrenWhenGroupChanges = 0; // 0 means yes.

        // May the group width and height be changed to a value that hides its content?
        // Even if content hidden is allowed, the group size will never be smaller than minWidth and minHeight.
        this._neverHideContent = neverHideContent;

        // Children weight sum.
        // It may be updated when a child is added, removed, or when a child has its weight changed.
        this._weightSum = 0;

        // Top-left coordinates of the content area relative to the group position.
        // It may change when the frame or the group dimension changes. Also, it may change if a new child is added
        // or its dimension is changed. Finally, it may change when the group style changes.
        this._contentX1 = 0;
        this._contentY1 = 0;

        // The content width and height.
        // It may change when the frame or the group dimension changes. Also, it may change if a new child is added
        // or its dimension is changed. Finally, it may change when the group style changes.
        this._contentWidth = 0;
        this._contentHeight = 0;

        // The minimum content width and height are the minimum value to fit the children content, including paddings
        // and margins.
        // It may change when a child is added, removed or its dimension changes.  Finally,
        // it may change when the group style changes.
        this._minContentWidth = 0;
        this._minContentHeight = 0;

        // The minimum group width and height not to hide the content.
        this._minWidthNotToHideContent = 0;
        this._minHeightNotToHideContent = 0;

        // A vertical gravity is used when no child has a weight bigger than zero and the minimum content area
        // is lower than the content area.
        this._verticalGravity = getNonNullValue(verticalGravity, vGravity, VerticalGravity.MIDDLE);

        // Set the frame.
        if (isNotNull(frame)) {
            this.frame = frame;
        }
    }

    /**
     * Must the group be changed when one or more of its children change?
     * @return {boolean} true if yes. false otherwise.
     */
    get adjustGroupWhenChildrenChange() {
        return 0 === this._adjustGroupWhenChildrenChange;
    }

    /**
     * Must the children be changed when the group changes?
     * @return {boolean} true if yes. false otherwise.
     */
    get adjustChildrenWhenGroupChanges() {
        return 0 === this._adjustChildrenWhenGroupChanges;
    }

    /**
     * Must the group be changed when its frame changes?
     * @return {boolean} true if yes. false otherwise.
     */
    get adjustGroupWhenFrameChanges() {
        return 0 === this._adjustGroupWhenFrameChanges;
    }

    /**
     * Must the group preserve its aspect ratio?
     * @return {boolean} true if yes. false otherwise.
     */
    get preserveAspectRatio() {
        if (isNull(this.frame)) {
            return false; // A group without frame never preserves its aspect ratio.
        } else {
            return this.frame.preserveAspectRatio;
        }
    }

    /**
     * Set whether the group must preserve its aspect ratio.
     * @param value {boolean} true if yes. false otherwise.
     */
    set preserveAspectRatio(value) {
        if (isNotABoolean(value)) {
            error("The value must be a boolean. Id: " + this.id + ".");
        }
        if (isNull(this.frame)) {
            if (true === value) {
                error("The aspect ratio of a group can be maintained only if it has a frame.");
            }
        } else {
            this.frame.preserveAspectRatio = value;
        }
    }

    /**
     * Return the group minimum content area vertical gravity.
     * @return {number} The group minimum content area vertical gravity. A vertical gravity is used when no child has a weight bigger than
     *                  zero and the minimum content area is lower than the content area.
     */
    get verticalGravity() {
        return this._verticalGravity;
    }

    /**
     * Set the group minimum content area vertical gravity.
     * @param value {number} The new group minimum content area vertical gravity. A vertical gravity is used when no child has a weight bigger than
     *                  zero and the minimum content area is lower than the content area.
     */
    set verticalGravity(value) {
        if (value === this.verticalGravity) {
            warning("The new vertical gravity is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        if (value !== VerticalGravity.TOP && value !== VerticalGravity.MIDDLE && value !== VerticalGravity.BOTTOM) {
            error("The value must be a constant inside VerticalGravity. Id: " + this.id + ".");
        }
        this._verticalGravity = value;
        this.disableGroupAdjustmentWhenChildrenChange();
        this.adjustChildrenVertically();
        this.enableGroupAdjustmentWhenChildrenChange();
    }

    /**
     * Return the group min width required not to hide the content.
     * @return {number} The group min width required not to hide the content.
     */
    get minWidthNotToHideContent() {
        return this._minWidthNotToHideContent;
    }

    /**
     * Return the group min height required not to hide the content.
     * @return {number} The group min height required not to hide the content.
     */
    get minHeightNotToHideContent() {
        return this._minHeightNotToHideContent;
    }

    /**
     * Must the group content always be visible?
     * @return {boolean} true if yes. false otherwise.
     */
    get neverHideContent() {
        return this._neverHideContent;
    }

    /**
     * Must the group content always be visible?
     * @param value {boolean} true if yes. false otherwise.
     */
    set neverHideContent(value) {
        if (value === this.neverHideContent) {
            warning("The new 'never hide content' is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        if (isNotABoolean(value)) {
            error("The value must be a boolean. Id: " + this.id + ".");
        }
        // If the value changed from false to true, check whether the content is already visible.
        if (value === true && this.neverHideContent === false) {
            if (this.width < this.minWidthNotToHideContent ||
                this.height < this.minHeightNotToHideContent) {
                this.disableChangeNotifications();
                this.resizeTo({width: this.minWidthNotToHideContent, height: this.minHeightNotToHideContent});
                this.enableChangeNotifications();
                if (isNotNull(this.frame)) {
                    this.frame.disableChangeNotifications();
                    this.notifyListeners(ChangeListenerConstants.DIMENSION);
                    this.frame.enableChangeNotifications();
                }
            }
        }
        this._neverHideContent = value;
    }

    /**
     * May the group content be hidden?
     * @return {boolean} true if yes. false otherwise.
     */
    get allowContentHiding() {
        return !this._neverHideContent;
    }

    /**
     * Return the children weight sum.
     * @return {number} The children weight sum.
     */
    get weightSum() {
        return this._weightSum;
    }

    /**
     * Return the minimum content area width.
     * @return {number} The minimum content area width.
     */
    get minContentWidth() {
        return this._minContentWidth;
    }

    /**
     * Return the minimum content area height.
     * @return {number} The minimum content area height.
     */
    get minContentHeight() {
        return this._minContentHeight;
    }

    /**
     * Return the content area width.
     * @return {number} The content area width.
     */
    get contentWidth() {
        return this._contentWidth;
    }

    /**
     * Return the content area height.
     * @return {number} The content area height.
     */
    get contentHeight() {
        return this._contentHeight;
    }

    /**
     * Return the group frame.
     * @return {GraphicalElement} The group frame.
     */
    get frame() {
        return this._frame;
    }

    /**
     * Set the group frame.
     * @param value {GraphicalElement} The group frame.
     */
    set frame(value) {
        if (value === this.frame) {
            warning("The new frame is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        // When a new frame is set, first, it's necessary to remove the last frame from the graphical representation.
        // Then, it is necessary to change the frame position to 0,0 and also to change the frame width and height
        // it order to accommodate the group. Consequently, the group width and height may change as well.

        if (isNotNull(this.frame)) {
            this.frame.removeChangeListenerByName(VerticalGroupFrameChangeListener);
            this.frame.relativePosition = false;
            this.frame.relativeX1 = null;
            this.frame.relativeY1 = null;
            this.frame.remove();
        }

        this._frame = value;

        if (isNotNull(this.frame)) {
            this.disableGroupAdjustmentWhenFrameChanges();
            this.frame.disableChangeNotifications();
            this.frame.relativePosition = true;
            this.frame.relativeX1 = this.x1;
            this.frame.relativeY1 = this.y1;
            this.frame.moveTo({x: 0, y: 0});
            this.frame.resizeTo({width: this.width, height: this.height});

            // Calculate the frame content area position and dimension.
            this.adjustContentAreaPositionAndDimension();

            this.frame.enableChangeNotifications();
            this.frame.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
            this.enableGroupAdjustmentWhenFrameChanges();
            this.notifyListeners(ChangeListenerConstants.OTHER);
        } else {
            this.adjustContentAreaPositionAndDimension();
        }
    }

    /**
     * Return the children.
     * @return {Array} The children array.
     */
    get children() {
        return this._children;
    }

    /**
     * Return the group style.
     * @return {GroupStyle} The group style.
     */
    get groupStyle() {
        return this._groupStyle;
    }

    /**
     * Set the group style.
     * @param value {GroupStyle} The group style.
     */
    set groupStyle(value) {
        if (value === this.groupStyle) {
            warning("The new group style is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }

        // Remove the listener from the current group style.
        if (isNotNull(this.groupStyle)) {
            this.groupStyle.removeChangeListenerByType(VerticalGroupStyleChangeListener);
        }
        if (isNull(value)) {
            // If any vertical padding, the space between children or the vertical alignment has changed.
            if (0 !== this.topPadding ||
                0 !== this.bottomPadding ||
                GroupStyle.defaultVerGravity !== this.verGravity ||
                0 !== this.spaceBetweenChildren) {
                this._groupStyle = null;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenVertically();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
            // If any horizontal padding has changed.
            if (0 !== this.groupStyle.leftPadding ||
                0 !== this.groupStyle.rightPadding) { // If any horizontal padding has changed.
                this._groupStyle = null;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenHorizontally();
                this.enableGroupAdjustmentWhenChildrenChange();
            }

            this._groupStyle = null;
        } else {
            // If any vertical padding, the space between children or the vertical alignment has changed.
            if (value.topPadding !== this.topPadding ||
                value.bottomPadding !== this.bottomPadding ||
                value.verGravity !== this.verGravity ||
                value.spaceBetweenChildren !== this.spaceBetweenChildren) {
                this._groupStyle = value;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenVertically();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
            if (value.leftPadding !== this.leftPadding ||
                value.rightPadding !== this.rightPadding) { // If any horizontal padding has changed.
                this._groupStyle = value;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenHorizontally();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
            this._groupStyle = value;

            // The group must be informed when one of its styling attributes change.
            value.addChangeListener(new VerticalGroupStyleChangeListener(this));
        }
    }

    /**
     * Return the group left padding.
     * @return {number} The group left padding.
     */
    get leftPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.leftPadding;
    }

    /**
     * Return the group right padding.
     * @return {number} The group right padding.
     */
    get rightPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.rightPadding;
    }

    /**
     * Return the group horizontal padding (left + right).
     * @return {number} The group right horizontal padding (left+ right).
     */
    get horPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.leftPadding + this.groupStyle.rightPadding;
    }

    /**
     * Return the group vertical padding (top + bottom).
     * @return {number} The group right vertical padding (top + bottom).
     */
    get verPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.topPadding + this.groupStyle.bottomPadding;
    }

    /**
     * Return the group top padding.
     * @return {number} The group top padding.
     */
    get topPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.topPadding;
    }

    /**
     * Return the group bottom padding.
     * @return {number} The group bottom padding.
     */
    get bottomPadding() {
        return isNull(this.groupStyle) ? 0 : this.groupStyle.bottomPadding;
    }

    /**
     * Return the group width.
     * @return {number} The group width.
     */
    get width() {
        return super.width;
    }

    /**
     * Set the group width.
     * When the group width changes, the content area position inside the frame (if one is defined) and its
     * dimension may change. When it happens, all children position and dimension may change.
     * The group width is exactly the same as the frame width (if one is defined). If there is a frame and it
     * preserves its aspect ratio, the group height may change as well.
     * @param {number} value The new group width.
     */
    set width(value) {
        if (value === this.width) {
            warning("The new width is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        if (isNotANumber(value)) {
            error("The new width must be an integer number. Nothing to change. Id: " + this.id + ".");
        }
        if (value < this.minWidth) {
            warning("The new width must be greater than minWidth. Nothing to change. Id: " + this.id + ".");
            value = this.minWidth;
        }
        // Check whether the new width has a valid value.
        // If the content can be hidden, any value greater than zero (0) is valid. Otherwise, some verification
        // is required.
        if (this.neverHideContent) {
            if (isNull(this.frame)) {
                // If the group has no frame, the minimum width is the minimum content width.
                if (value < this.minContentWidth) {
                    warning("The content cannot be hidden. The new width is smaller than the minimum content width. Id: " + this.id + ".");
                    return;
                }
            } else {
                // If the group has a frame, check whether the new width allows the frame to fit the content
                // inside its content area.

                // Calculate the frame content area for the new width.
                let ratio = 1.0;
                if (true === this.frame.preserveAspectRatio) {
                    ratio = value / this.frame.width;
                    let newFrameHeight = ratio * this.frame.height;
                    // What is the content area region for the specified width/height?
                    let contentAreaBoundingBox = this.frame.contentBox({width: value, height: newFrameHeight});
                    if (contentAreaBoundingBox.width < this.minContentWidth ||
                        contentAreaBoundingBox.height < this.minContentHeight) {
                        warning("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                        return;
                    }
                } else {
                    let contentAreaBoundingBox = this.frame.contentBox({width: value, height: this.frame.height});
                    if (contentAreaBoundingBox.width < this.minContentWidth) {
                        warning("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                        return;
                    }
                }
            }
        }

        // Notify listeners only after changing everything.
        this.disableChangeNotifications();

        if (isNull(this.frame)) {
            super.width = value;
            this._contentWidth = value;
        } else {
            super.width = value;
            this.disableGroupAdjustmentWhenFrameChanges();
            this.frame.width = value;
            this.enableGroupAdjustmentWhenFrameChanges();
        }

        this.adjustContentAreaPositionAndDimension();
        this.adjustChildrenHorizontally();

        this.enableChangeNotifications();
        if (isNull(this.frame)) {
            this.notifyListeners(ChangeListenerConstants.DIMENSION);
        }
        else {
            this.frame.disableChangeNotifications();
            this.notifyListeners(ChangeListenerConstants.DIMENSION);
            this.frame.enableChangeNotifications();
        }
    }

    /**
     * Return the group height.
     * @return {number} The group height.
     */
    get height() {
        return super.height;
    }

    /**
     * Set the group height.
     * When the group height changes, the content area position inside the frame (if one is defined) and its
     * dimension may change. When it happens, all children position and dimension may change.
     * The group height is exactly the same as the frame height (if one is defined). If there is a frame and it
     * preserves its aspect ratio, the group width may change as well.
     * @param {number} value The new group height.
     */
    set height(value) {
        if (value === this.height) {
            warning("The new height is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        if (isNotANumber(value)) {
            error("The new height must be an integer number. Nothing to change. Id: " + this.id + ".");
        }
        if (value < this.minHeight) {
            warning("The new height must be greater than minHeight. Nothing to change. Id: " + this.id + ".");
            value = this.minHeight;
        }
        // Check whether the new height has a valid value.
        // If the content can be hidden, any value greater than zero (0) is valid. Otherwise, some verification
        // is required.
        if (this.neverHideContent) {
            if (isNull(this.frame)) {
                // If the group has no frame, the minimum width is the minimum content width.
                if (value < this.minContentHeight) {
                    warning("The content cannot be hidden. The new height is smaller than the minimum content height. Id: " + this.id + ".");
                    return;
                }
            } else {
                // If the group has a frame, check whether the new width allows the frame to fit the content
                // inside its content area.

                // Calculate the frame content area for the new height.
                let ratio = 1.0;
                if (true === this.frame.preserveAspectRatio) {
                    ratio = value / this.frame.height;

                    let newWidth = ratio * this.frame.width;

                    // What is the content area region for the specified width/height?
                    let contentAreaBoundingBox = this.frame.contentBox({width: newWidth, height: value});
                    if (contentAreaBoundingBox.width < this.minContentWidth ||
                        contentAreaBoundingBox.height < this.minContentHeight) {
                        warning("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                        return;
                    }
                } else {
                    // What is the content area region for the specified width/height?
                    let contentAreaBoundingBox = this.frame.contentBox({width: this.frame.width, height: value});
                    if (contentAreaBoundingBox.height < this.minContentHeight) {
                        warning("The content cannot be hidden. The current frame content area is smaller than the required one. Id: " + this.id + ".");
                        return;
                    }
                }
            }
        }

        this.disableChangeNotifications();

        if (isNull(this.frame)) {
            super.height = value;
            this._contentHeight = value;
        } else {
            super.height = value;
            this.disableGroupAdjustmentWhenFrameChanges();
            this.frame.height = value;
            this.enableGroupAdjustmentWhenFrameChanges();
        }

        this.adjustContentAreaPositionAndDimension();
        this.adjustChildrenVertically();

        this.enableChangeNotifications();
        if (isNotNull(this.frame)) {
            this.frame.disableChangeNotifications();
            this.notifyListeners(ChangeListenerConstants.DIMENSION);
            this.frame.enableChangeNotifications();
        }
    }

    /**
     * Return the vertical space between children.
     * It is defined in the vertical group style.
     */
    get spaceBetweenChildren() {
        if (isNull(this.groupStyle)) {
            return 0;
        }
        return this.groupStyle.spaceBetweenChildren;
    }

    /**
     * Return the x1 coordinate of the content box inside the frame.
     * As only this class can change contentX1, there is not set method for this property.
     * @return {number} The x1 coordinate of the content box inside the frame. If the frame is null, it is 0.
     */
    get contentX1() {
        return this._contentX1;
    }

    /**
     * Return the y1 coordinate of the content box inside the frame.
     * As only this class can change contentY1, there is not set method for this property.
     * @return {number} The y1 coordinate of the content box inside the frame. If the frame is null, it is 0.
     */
    get contentY1() {
        return this._contentY1;
    }

    /**
     * Adjust the content area position and dimension.
     */
    adjustContentAreaPositionAndDimension() {
        if (isNull(this.frame)) {
            if (0 !== this._contentX1 || this.width !== this._contentWidth) {
                this._contentX1 = 0;
                this._contentWidth = this.width;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenHorizontally();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
            if (0 !== this._contentY1 || this.height !== this._contentHeight) {
                this._contentY1 = 0;
                this._contentHeight = this.height;
                this.disableGroupAdjustmentWhenChildrenChange();
                this.adjustChildrenVertically();
                this.enableGroupAdjustmentWhenChildrenChange();
            }
        } else {
            let contentArea = this.frame.contentBox();
            if (contentArea.width === this.contentWidth && contentArea.height === this.contentHeight) {
                if (contentArea.x1 !== this.contentX1 || contentArea.y1 !== this.contentY1) {
                    // If only the content area position has changed, adjust only the children position.
                    let deltaX = contentArea.x1 - this.contentX1;
                    let deltaY = contentArea.y1 - this.contentY1;
                    this.disableGroupAdjustmentWhenChildrenChange();
                    this.adjustChildrenPositionBy({x: deltaX, y: deltaY});
                    this.enableGroupAdjustmentWhenChildrenChange();

                    this._contentX1 = contentArea.x1;
                    this._contentY1 = contentArea.y1;
                }
            } else {
                this.disableGroupAdjustmentWhenChildrenChange();
                if (contentArea.x1 !== this.contentX1 || contentArea.width !== this.contentWidth) {
                    this._contentX1 = contentArea.x1;
                    this._contentWidth = contentArea.width;
                    this.adjustChildrenHorizontally();
                }
                if (contentArea.y1 !== this.contentY1 || contentArea.height !== this.contentHeight) {
                    this._contentY1 = contentArea.y1;
                    this._contentHeight = contentArea.height;
                    this.adjustChildrenVertically();
                }
                this.enableGroupAdjustmentWhenChildrenChange();
            }
        }
    }

    /**
     * Set the weight of the child at the specified position.
     * @param i The child position.
     * @param weight The weight.
     * @param w The weight.
     */
    setChildWeightAt({i, weight, w} = {}) {
        this.checkChildArrayIndexValidity(i);
        if (checkRedundantArguments(weight, w)) {
            error("Both weight and w were informed. Id: " + this.id + ".");
        }
        weight = getNonNullValue(weight, w);
        if (weight === this.childWeightAt(i)) {
            warning("The new weight is exactly the same as the current one. Nothing to change. Id: " + this.id + ".");
            return;
        }
        if (isNotANumber(weight) || weight < 0) {
            error("The weight must be a positive real number greater than or equal zero (0). Id: " + this.id + ".");
        }
        this.children[i].weight = weight;
        this.adjustChildrenVertically();
    }

    /**
     * Adjust all children position summing to their position the specified x and y value.
     * @param x {number} The value to add to current x position.
     * @param y {number} The value to add to current y position.
     */
    adjustChildrenPositionBy({x, y} = {}) {
        if (isNotANumber(x) || isNotANumber(y)) {
            error("The x or y value must be an integer number. Nothing to change. Id: " + this.id + ".");
        }
        for (let i = 0; i < this.countChildren(); i++) {
            this.childAt(i).moveBy({x: x, y: y});
        }
    }

    allowContentHidden() {
        return !this.neverHideContent;
    }

    /**
     * This method adds a new child to the group with the specified arguments.
     * @param child {GraphicalElement} The child.
     * @param horResizingPolicy The child horizontal resizing policy (one of the constants in this class).
     * @param hResizingPolicy The child horizontal resizing policy (one of the constants in this class).
     * @param horGravity The child horizontal gravity (one of the constants in this class).
     * @param hGravity The child horizontal gravity (one of the constants in this class).
     * @param weight {number} The child vertical weight, that defines how the child will fill the remaining space.
     * @param leftMargin {number} The child left margin.
     * @param lMargin {number} The child left margin.
     * @param rightMargin {number} The child right margin.
     * @param rMargin {number} The child right margin.
     * @param topMargin {number} The child top margin.
     * @param tMargin {number} The child top margin.
     * @param bottomMargin {number} The child bottom margin.
     * @param bMargin {number} The child bottom margin.
     * @param vOverlap {number} A final adjustment in the vertical position of a child after its position has been
     *                          calculated.
     */
    addChild({element, horResizingPolicy = ResizePolicy.WRAP_CONTENT, hResizingPolicy, horGravity = HorizontalGravity.CENTER, hGravity, weight = 0, leftMargin, lMargin, rightMargin, rMargin, topMargin, tMargin, bottomMargin, bMargin, vOverlap = 0} = {}) {
        // **************************************
        // * VALIDATE ARGUMENTS.
        // **************************************
        if (isNull(element)) {
            error("The group child cannot be null. Id: " + this.id + ".");
        }
        if (isNotANumber(weight) || weight < 0) {
            error("The weight must be a positive integer. Id: " + this.id + ".");
        }
        // Check whether there are redundant arguments.
        if (checkRedundantArguments(horResizingPolicy, hResizingPolicy)) {
            error("Warning: Both horResizingPolicy and hResizingPolicy were informed. Id: " + this.id + ".");
        }
        if (checkRedundantArguments(horGravity, hGravity)) {
            error("Warning: Both horGravity and hGravity were informed. Id: " + this.id + ".");
        }
        if (checkRedundantArguments(leftMargin, lMargin)) {
            error("Warning: Both leftMargin and lMargin were informed. Id: " + this.id + ".");
        }
        if (checkRedundantArguments(rightMargin, rMargin)) {
            error("Warning: Both rightMargin and rMargin were informed. Id: " + this.id + ".");
        }
        if (checkRedundantArguments(topMargin, tMargin)) {
            error("Warning: Both topMargin and tMargin were informed. Id: " + this.id + ".");
        }
        if (checkRedundantArguments(bottomMargin, bMargin)) {
            error("Warning: Both bottomMargin and bMargin were informed. Id: " + this.id + ".");
        }
        // **************************************

        let child = new VerticalGroupChild(...arguments);

        // Update some group variables.
        let oldWeightSum = this.weightSum;
        this._weightSum += weight;

        this._minContentHeight += child.totalHeight;
        if (this.countChildren() > 0) { // Add the space between children if there is at least one child in the group.
            this._minContentHeight += this.spaceBetweenChildren;
        }
        this._minContentWidth = Math.max(child.totalWidth + this.horPadding, this._minContentWidth);

        let hasContentBoxChanged = false;
        if (this._minContentHeight > this._contentHeight || this._minContentWidth > this._contentWidth) {
            hasContentBoxChanged = true;
        }

        let lastChild = this._children[this._children.length - 1];
        this.children.push(child);

        // If the content box has not changed, define the new child position relative to the other children.
        element.disableChangeNotifications();
        this.notifyListeners(ChangeListenerConstants.OTHER);
        element.relativePosition = true;
        element.relativeX1 = this.x1;
        element.relativeY1 = this.y1;
        //element.moveTo({x: 0, y: 0});
        if (hasContentBoxChanged) {
            this.readjustGroup();
        } else {
            // Adjust all children vertical position and height.
            this.adjustChildrenVertically();
            this.adjustChildHorizontally(this.countChildren() - 1);
        }
        element.enableChangeNotifications();
        element.notifyListeners(ChangeListenerConstants.POSITION, ChangeListenerConstants.DIMENSION);
    }

    /**
     * Adjust the children width based on their resizing policy, gravity, and the content area x1 and width.
     */
    adjustChildrenHorizontally() {
        this.adjustChildHorizontally();
    }

    /**
     * Adjust the ith-child x1 and width based on its resizing policy, gravity, and the content area x1 and width.
     * @param [i] {number} The index i.
     */
    adjustChildHorizontally(i) {
        // If i is not specified, all children will be adjusted.
        if (isNull(i)) {
            for (let j = 0; j < this.countChildren(); j++) {
                this.adjustChildHorizontally(j);
            }
            return;
        }
        this.checkChildArrayIndexValidity(i);

        let childHorResizePolicy = this.childHorResizePolicyAt(i);
        let childHorGravity = this.childHorGravityAt(i);
        let child = this.childAt(i);

        if (childHorResizePolicy === ResizePolicy.WRAP_CONTENT) {
            if (childHorGravity === HorizontalGravity.LEFT) {
                child.moveTo({x: this.contentX1 + this.leftPadding + this.childLeftMarginAt(i)});
            } else if (childHorGravity === HorizontalGravity.RIGHT) {
                child.moveTo({x: this.contentX1 + this.contentWidth - this.rightPadding - this.childRightMarginAt(i) - child.width});
            } else if (childHorGravity === HorizontalGravity.CENTER) {
                child.moveTo({x: (this.contentX1 + this.contentWidth - child.width) / 2});
            } else {
                error("Unknown horizontal gravity: " + childHorGravity + ". Id: " + this.id + ".");
            }
        } else if (childHorResizePolicy === ResizePolicy.MATCH_CONTENT_AREA) {
            child.resizeTo({width: this.contentWidth - this.horPadding - child.horMargin});
            child.moveTo({x: this.contentX1 + this.leftPadding + this.childLeftMarginAt(i)});
        } else if (childHorResizePolicy === ResizePolicy.MATCH_PARENT) {
            let boundaryX1 = Math.max(this.boundaryX1For(child.y1), this.boundaryX1For(child.y2));
            let boundaryX2 = Math.min(this.boundaryX2For(child.y1), this.boundaryX2For(child.y2));
            if (isNotNull(this.frame)) {
                boundaryX1 = Math.max(this.frame.boundaryX1For(child.y1), this.frame.boundaryX1For(child.y2));
                boundaryX2 = Math.min(this.frame.boundaryX2For(child.y1), this.frame.boundaryX2For(child.y2));
            }

            child.resizeTo({width: boundaryX2 - boundaryX1});
            child.moveTo({x: boundaryX1});
        } else {
            error("Unknown horizontal resize policy: " + childHorResizePolicy + ". Id: " + this.id + ".");
        }
    }

    /**
     * Readjust the group dimension (and children if necessary) based on its minimum content width and/or height that has changed.
     */
    readjustGroup() {
        // Calculate the new required group size, content box x1 and y1 based on
        // the minContentWidth and the minContentHeight.
        if (isNull(this.frame)) {
            this.width = this.minContentWidth;
            this.height = this.minContentHeight;
        } else {
            this._contentWidth = Math.max(this.minContentWidth, this.contentWidth);
            this._contentHeight = Math.max(this.minContentHeight, this.contentHeight);
            this.disableGroupAdjustmentWhenFrameChanges();
            this.frame.disableChangeNotifications();
            let contentBoundingBox = new BoundingBox({
                x: this.contentX1,
                y: this.contentY1,
                width: this.contentWidth,
                height: this.contentHeight
            });
            let requiredWidth = this.frame.widthToFit(contentBoundingBox);
            let requiredHeight = this.frame.heightToFit(contentBoundingBox);
            if (true === this.frame.preserveAspectRatio) {
                this.frame.width = requiredWidth;
                if (this.frame.height < requiredHeight) {
                    this.frame.height = requiredHeight;
                }
                super.width = this.frame.width;
                super.height = this.frame.height;

                // Calculate the frame content area position and dimension.
                this.adjustContentAreaPositionAndDimension();
            } else {
                if (requiredWidth !== this.width) {
                    this.width = requiredWidth;
                } else {
                    this.adjustChildrenHorizontally();
                }
                if (requiredHeight !== this.height) {
                    this.height = requiredHeight;
                } else {
                    this.adjustChildrenVertically();
                }
            }

            this.notifyListeners(ChangeListenerConstants.DIMENSION);

            this.frame.enableChangeNotifications();
            this.frame.notifyListeners(ChangeListenerConstants.DIMENSION);
            this.enableGroupAdjustmentWhenFrameChanges();
        }
    }

    /**
     * Adjust children y1 coordinate and height.
     */
    adjustChildrenVertically() {
        // Calculate the height left to distribute among children.
        let verticalSpaceLeft = this.contentHeight - this.minContentHeight;
        let tempY1 = this.contentY1 + this.topPadding;
        if (0 === this.weightSum && verticalSpaceLeft > 0) {
            if (VerticalGravity.MIDDLE === this.verticalGravity) {
                tempY1 = this.contentY1 + verticalSpaceLeft / 2;
            } else if (VerticalGravity.BOTTOM === this.verticalGravity) {
                tempY1 = this.contentY1 + this.contentHeight - this.minContentHeight;
            }
        }

        for (let i = 0; i < this.countChildren(); i++) {
            let element = this.childAt(i);
            tempY1 += this.childTopMarginAt(i);
            element.moveTo({y: tempY1});
            if (this.childWeightAt(i) > 0) {
                let deltaHeight = this.childWeightAt(i) / this.weightSum * verticalSpaceLeft;
                element.resizeBy({height: deltaHeight});
            }
            tempY1 += element.height + this.childBottomMarginAt(i) + this.spaceBetweenChildren;
        }
    }

    /**
     * Return the number of children.
     * @returns {number} The number of children.
     */
    countChildren() {
        return this._children.length;
    }

    /**
     * Disable group adjustment when the frame changes.
     */
    disableGroupAdjustmentWhenFrameChanges() {
        this._adjustGroupWhenFrameChanges++;
    }

    /**
     * Disable frame adjustment when the group changes.
     */
    disableFrameAdjustmentWhenGroupChanges() {
        this._adjustGroupWhenFrameChanges++;
    }

    /**
     * Enable frame adjustment when the group changes.
     */
    enableFrameAdjustmentWhenGroupChanges() {
        this._adjustGroupWhenFrameChanges--;
    }

    /**
     * Disable group adjustment when the frame changes.
     */
    enableGroupAdjustmentWhenFrameChanges() {
        this._adjustGroupWhenFrameChanges--;
    }

    /**
     * Disable group adjustment when any children change.
     */
    disableGroupAdjustmentWhenChildrenChange() {
        this._adjustGroupWhenChildrenChange++;
    }

    /**
     * Enable group adjustment when any children change.
     */
    enableGroupAdjustmentWhenChildrenChange() {
        this._adjustGroupWhenChildrenChange--;
    }

    /**
     * Disable children adjustment when the group changes.
     */
    disableChildrenAdjustmentWhenGroupChanges() {
        this._adjustChildrenWhenGroupChanges++;
    }

    /**
     * Enable children adjustment when the group changes.
     */
    enableChildrenAdjustmentWhenGroupChanges() {
        this._adjustChildrenWhenGroupChanges--;
    }

    /**
     * Check whether the specified position corresponds to a valid position in the children array.
     * @param i {number} The position that must be checked.
     */
    checkChildArrayIndexValidity(i) {
        if (i >= this.countChildren()) {
            error("Invalid index. Index: " + i + ".");
        }
    }

    /**
     * Return the ith-child element.
     * @param i {number} The position i.
     * @return {number} The index i.
     */
    childAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].element;
    }

    /**
     * Return the ith-child weight.
     * @param i {number} The position i.
     * @return {number} The ith-child weight.
     */
    childWeightAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].weight;
    }

    /**
     * Return the ith-child horizontal margin (left + right margin). It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child horizontal margin (left + right margin). It is defined in the group style.
     */
    childHorMarginAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].horMargin;
    }

    /**
     * Return the ith-child horizontal resizing policy. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child horizontal resizing policy. It is defined in the group style.
     */
    childHorResizePolicyAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].horResizingPolicy;
    }

    /**
     * Return the ith-child horizontal gravity. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child horizontal gravity. It is defined in the group style.
     */
    childHorGravityAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].horGravity;
    }

    /**
     * Return the ith-child top margin. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child top margin. It is defined in the group style.
     */
    childTopMarginAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].topMargin;
    }

    /**
     * Return the ith-child bottom margin. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child bottom margin. It is defined in the group style.
     */
    childBottomMarginAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].bottomMargin;
    }

    /**
     * Return the ith-child left margin. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child left margin. It is defined in the group style.
     */
    childLeftMarginAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].leftMargin;
    }

    /**
     * Return the ith-child right margin. It is defined in the group style.
     * @param i {number} The index i.
     * @return {number} The ith-child right margin. It is defined in the group style.
     */
    childRightMarginAt(i) {
        this.checkChildArrayIndexValidity(i);
        return this._children[i].rightMargin;
    }

    /**
     * Update the group when the frame changes.
     */
    frameChanged() {
        if (true === this.adjustGroupWhenFrameChanges) {
            this.disableGroupAdjustmentWhenFrameChanges();
            this.frame.disableChangeNotifications();
            // If someone has changed the relative value of the frame, change it again to
            // the correct value.
            if (this.x1 !== this.frame.relativeX1) {
                this.frame.relativeX1 = this.x1;
            }
            if (this.y1 !== this.frame.relativeY1) {
                this.frame.relativeY1 = this.y1;
            }
            // If the frame position is different of zero (0), change it to zero (0).
            if (0 !== this.frame.x1) {
                this.frame.moveTo({x: 0});
            }
            if (0 !== this.frame.y1) {
                this.frame.moveTo({y: 0});
            }
            // If the frame dimension has changed, adjust the group dimension.
            if (this.frame.width !== this.width) {
                this.width = this.frame.width;
            }
            if (this.frame.height !== this.height) {
                this.height = this.frame.height;
            }
            this.frame.enableChangeNotifications();
            this.adjustContentAreaPositionAndDimension();
            this.enableGroupAdjustmentWhenFrameChanges();
        }
    }

    /**
     * Update the group when the group style changes.
     */
    groupStyleChanged() {
        this.disableGroupAdjustmentWhenChildrenChange();
        this.adjustChildrenVertically();
        this.adjustChildrenHorizontally();
        this.enableGroupAdjustmentWhenChildrenChange();
    }

    /**
     * Update the group when any child changes.
     *
     * When a child position changes, the group does not change, since the child may only be moving to another place.
     * When a child width and/or height changes, the group must be properly adjusted.
     */
    childrenChanged() {
        if (true === this.adjustGroupWhenChildrenChange) {
            this.adjustChildrenVertically();
            this.adjustChildrenHorizontally();
        }
    }

    /**
     * Return the max child width.
     */
    maxChildWidth() {
        let maxWidth = 0;
        for (let i = 0; i < this.countChildren(); i++) {
            if (this.childAt(i).totalWidth > maxWidth) {
                maxWidth = this.childAt(i).totalWidth;
            }
        }
        return maxWidth;
    }

    /**
     * Remove the specified child.
     * @param child {VerticalGroupChild} The child that must be removed.
     */
    removeChild(child) {
        let index = this.children.indexOf(child);
        if (index >= 0) {
            child.element.relativePosition = false;
            child.element.relativeX1 = null;
            child.element.relativeY1 = null;
            this.children.splice(index, 1);
            this._contentHeight -= child.totalHeight;
            this._contentWidth = this.maxChildWidth + this.horPadding;
            this.disableGroupAdjustmentWhenChildrenChange();
            this.adjustChildrenHorizontally();
            this.adjustChildrenVertically();
            this.enableGroupAdjustmentWhenChildrenChange();
        }
    }

}
