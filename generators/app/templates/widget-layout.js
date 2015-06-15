/*
 * Copyright (c) 2014-2015, Wanadev <http://www.wanadev.fr/>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright notice, this
 *     list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *   * Neither the name of Wanadev nor the names of its contributors may be used
 *     to endorse or promote products derived from this software without specific
 *     prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Authored by: <%= realname %> <<%= githubUrl %>>
 */

/**
 * PhotonUI - Javascript Web User Interface.
 *
 * @module PhotonUI
 * @submodule <%= props.widgetType %>
 * @namespace photonui
 */


var Helpers = require("../helpers.js");
var <%= props.widgetSuperClass %> = require("<%= superClassPath %>");


/**
 * <%= props.widgetDesc %>
 *
 * wEvents:
 *
 *   * <WEVENT NAME>:
 *      - description: <WEVENT DESCRIPTION>
 *      - callback:    <CALLBACK SIGNATURE (function(widget, ...))>
 *
 * @class <%= props.widgetName %>
 * @constructor
 * @extends photonui.<%= props.widgetSuperClass %>
 * @param {Object} params An object that can contain any property of the widget (optional).
 */
var <%= props.widgetName %> = <%= props.widgetSuperClass %>.$extend({

    // Constructor
    __init__: function(params) {
        this._registerWEvents([]);
        this.$super(params);
        this._updateProperties([]);

        // TODO Constructor code here
    },


    //////////////////////////////////////////
    // Properties and Accessors             //
    //////////////////////////////////////////


    // ====== Public properties ======


    /**
     * Html outer element of the widget (if any).
     *
     * @property html
     * @type HTMLElement
     * @default null
     * @readOnly
     */
    getHtml: function() {
        return this.__html.div;
    },

    /**
     * HTML Element that contain the child widget HTML.
     *
     * @property containerNode
     * @type HTMLElement
     * @readOnly
     */
    getContainerNode: function() {
        return this.__html.contentDiv;
    },


    // ====== Private properties ======


    // TODO Private property here


    //////////////////////////////////////////
    // Methods                              //
    //////////////////////////////////////////


    // ====== Public methods ======


    // TODO Public methods here


    // ====== Private methods ======


    /**
     * Build the widget HTML.
     *
     * @method _buildHtml
     * @private
     */
    _buildHtml: function() {
        this.__html.ul = document.createElement("ul");
        this.__html.ul.className = "photonui-widget photonui-<%= props.widgetName.toLowerCase() %>";
    },

    /**
     * Update the layout.
     *
     * @method _updateLayout
     * @private
     */
    _updateLayout: function() {
        Helpers.cleanNode(this.__html.ul);

        var children = this.children;  // Cache for perf
        var fragment = document.createDocumentFragment();

        var li;
        for (var i=0 ; i<children.length ; i++) {
            li = document.createElement("li");
            li.className = "photonui-container";
            li.appendChild(children[i].html);
            fragment.appendChild(li);
        }

        this.__html.ul.appendChild(fragment);
    },


    //////////////////////////////////////////
    // Internal Events Callbacks            //
    //////////////////////////////////////////


    // TODO Internal events callback here
});


module.exports = <%= props.widgetName %>;

