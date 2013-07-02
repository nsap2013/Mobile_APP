/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.SimpleForm.
jQuery.sap.declare("sap.ui.commons.form.SimpleForm");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new form/SimpleForm.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMaxContainerCols maxContainerCols} : int (default: 2)</li>
 * <li>{@link #getMinWidth minWidth} : int (default: -1)</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getLabelMinWidth labelMinWidth} : int (default: 192)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Use the SimpleForm to create a form based on title, label and fields that are stacked in the content aggregation. Add Title to start a new FormContainer(Group). Add Label to start a new row in the container. Add Input/Display controls as needed. Use LayoutData to influence the layout for special cases in the Input/Display controls.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.12.1
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.ui.commons.form.SimpleForm
 */
sap.ui.core.Control.extend("sap.ui.commons.form.SimpleForm", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"maxContainerCols" : {type : "int", group : "Appearance", defaultValue : 2},
		"minWidth" : {type : "int", group : "Appearance", defaultValue : -1},
		"editable" : {type : "boolean", group : "Misc", defaultValue : null},
		"labelMinWidth" : {type : "int", group : "Misc", defaultValue : 192}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Element", multiple : true, singularName : "content"}, 
    	"form" : {type : "sap.ui.commons.form.Form", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.SimpleForm with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.form.SimpleForm.extend
 * @function
 */


/**
 * Getter for property <code>maxContainerCols</code>.
 * The maximum amount of inner FormContainers per row that is used before before a new row is started.
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>maxContainerCols</code>
 * @public
 * @name sap.ui.commons.form.SimpleForm#getMaxContainerCols
 * @function
 */

/**
 * Setter for property <code>maxContainerCols</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iMaxContainerCols  new value for property <code>maxContainerCols</code>
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#setMaxContainerCols
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * The overall minimal width that is used for the SimpleForm. If the available width is below the given minWidth the SimpleForm will create a new row for the next FormContainer.
 * -1 value is default meaning that inner FormContainers will be stacked until maxCols is reached, irrespective if a maxWidth is reached or the available parents width is reached.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.commons.form.SimpleForm#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#setMinWidth
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Applies a device and theme specific line-height to the form elements if the form has editable content.
 * In this case all (not only the editable) rows of the form will get the line height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.form.SimpleForm#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#setEditable
 * @function
 */


/**
 * Getter for property <code>labelMinWidth</code>.
 * Specifies the min width of the label in all form containers.
 *
 * Default value is <code>192</code>
 *
 * @return {int} the value of property <code>labelMinWidth</code>
 * @public
 * @name sap.ui.commons.form.SimpleForm#getLabelMinWidth
 * @function
 */

/**
 * Setter for property <code>labelMinWidth</code>.
 *
 * Default value is <code>192</code> 
 *
 * @param {int} iLabelMinWidth  new value for property <code>labelMinWidth</code>
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#setLabelMinWidth
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The form content. Add Title to start a new group. Add Label to start a new row. Add Input controls as needed. Use LayoutData to influence the layout for special cases in the Input controls.
 * The form content is weighted to a responsive layout using weight 3 for the labels and weight 5 for the fields part. Per default the label column become 192 pixels wide.
 * If your Input controls like to influence their width you can add sap.ui.commons.layout.ResponsiveFlowLayoutData to them via setLayoutData method.
 * Ensure that the sum of the weights in the ResponsiveFlowLayoutData does not use more than 5 as this is the total width of Input control part of each form row.
 * Example for on row where the Input takes 4 and the Text takes 1 weight:
 * new sap.ui.commons.Label({text:"Label"});
 * new sap.ui.commons.TextField({value:"Weight 4",
 * layoutData:new sap.ui.commons.layout.ResponsiveFlowLayoutData({weight:4})}),
 * new sap.ui.commons.TextView({text:"Weight 1",
 * layoutData: new sap.ui.commons.layout.ResponsiveFlowLayoutData({weight:1})}),
 * 
 * 
 * @return {sap.ui.core.Element[]}
 * @public
 * @name sap.ui.commons.form.SimpleForm#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Element} vContent the content to remove or its index or id
 * @return {sap.ui.core.Element} the removed content or null
 * @public
 * @name sap.ui.commons.form.SimpleForm#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.form.SimpleForm#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.form.SimpleForm#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.form.SimpleForm#destroyContent
 * @function
 */


// Start of sap/ui/commons/form/SimpleForm.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.commons.form.Form");
jQuery.sap.require("sap.ui.commons.form.FormContainer");
jQuery.sap.require("sap.ui.commons.form.FormElement");
jQuery.sap.require("sap.ui.commons.form.ResponsiveLayout");
jQuery.sap.require("sap.ui.commons.layout.ResponsiveFlowLayoutData");

/**
 * Initializes the control
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype.init = function() {
	
	this._iCurrentWidth = 0;
	this._bUpdateNeeded = true;
	var oForm = new sap.ui.commons.form.Form();
	oForm.setLayout(new sap.ui.commons.form.ResponsiveLayout());
	this.setAggregation("form",oForm);
	this._aElements = null;
	this._aLayouts = [];
	var that = this;
	this.fHandleContentChange = function(oEvt) {
		if (oEvt.getParameter("name") == "visible") {
			that.invalidate();
		}
	};
};

/**
 * Handles the onBeforeRendering event. 
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype.onBeforeRendering = function() {
	
	//unregister resize
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	this._updateFormContainers();
};


/**
 * Handles the onAfterRendering event and initializes the resize handling.
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype.onAfterRendering = function() {
	
	this.getDomRef().style.visibility = "hidden"; //avoid that a wrong layouting is visible
	//TODO:Strange timeout ... needs to wait for content sizes to be set.
	setTimeout( jQuery.proxy( this._applyLinebreaks, this ), 10 ); 
	
	//attach the resize handler
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._resize, this));
};

/**
 * Called if the control is invalidated by setting a property or adding/removing an aggregation.
 * @override
 * @see sap.ui.core.Control.prototype.invalidate
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype.invalidate = function() {
	sap.ui.core.Control.prototype.invalidate.apply(this,arguments);
	this._bUpdateNeeded = true;
};

/**
 * Handles the destruction of the control and unregisters the resize handling.
 * @see sap.ui.core.Element.destroy
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype.exit = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	for (var i=0;i<this._aLayouts.length;i++) {
		this._aLayouts[i].destroy();
	}
};

/**
 * Checks for the provided managed object <code>oObject</code> in the aggregation
 * named <code>sAggregationName</code> and returns its index if found, or -1
 * otherwise. Returns -2 if the given named aggregation is not a multiple one
 * (and does not contain the given child).
 *
 * @param {string}
 *            sAggregationName the name of the aggregation
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject whose index is looked for.
 * @return {int} the index of the provided managed object in the aggregation.
 * @override
 * @protected
 */
sap.ui.commons.form.SimpleForm.prototype.indexOfAggregation = function(sAggregationName, oObject) {
	if (sAggregationName == "content") {
		var aChildren = this._aElements;
		if (aChildren) {
			for (var i = 0; i < aChildren.length; i++) {
				if (aChildren[i] == oObject) {
					return i;
				}
			}
		}
		return -1;
	} else {
		return sap.ui.core.Control.prototype.indexOfAggregation.apply(this,arguments);
	}
};

/**
 * Adds some entity <code>oObject</code> to the content.
 *
 * @param {sap.ui.base.ManagedObject}
 *            oObject the object to add; if empty, nothing is added
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.commons.form.SimpleForm} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.form.SimpleForm.prototype.addContent = function(oElement, bSuppressInvalidate) {
	if (this._aElements) {
		sap.ui.core.Control.prototype.setAggregation.apply(this,["content",this._aElements,true]);
	}
	sap.ui.core.Control.prototype.addAggregation.apply(this,["content",oElement,true]);
	if (!bSuppressInvalidate) {
		this.invalidate();
	}
	return this;
};

/**
 * Inserts managed object <code>oElement</code> to the content at
 * position <code>iIndex</code>.
 *
 * @param {sap.ui.base.ManagedObject}
 *            oObject the ManagedObject to add; if empty, nothing is inserted.
 * @param {int}
 *            iIndex the <code>0</code>-based index the managed object should be inserted at; for a negative
 *            value <code>iIndex</code>, <code>oObject</code> is inserted at position 0; for a value
 *            greater than the current size of the aggregation, <code>oObject</code> is inserted at
 *            the last position
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject as well as the added child are not marked as changed
 * @return {sap.ui.commons.form.SimpleForm} Returns <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.form.SimpleForm.prototype.insertContent = function(oElement,iIndex, bSuppressInvalidate) {
	if (this._aElements) {
		sap.ui.core.Control.prototype.setAggregation.apply(this,["content",this._aElements,true]);
	}

	sap.ui.core.Control.prototype.insertAggregation.apply(this,["content", oElement, iIndex, true]);
	this._aElements = sap.ui.core.Control.prototype.getAggregation.apply(this,["content"]);
	if (!bSuppressInvalidate) {
		this.invalidate();
	}
	return this;
};

/**
 * Removes the given content element.
 *
 * @param {int | string | sap.ui.base.ManagedObject}
 *            vObject the position or ID of the ManagedObject to remove or the ManagedObject itself; if <code>vObject</code> is invalid,
 *            a negative value or a value greater or equal than the current size of the aggregation, nothing is removed
 * @param {boolean}
 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
 * @type sap.ui.commons.form.SimpleForm
 * @return the removed object or null
 * @protected
 */
sap.ui.commons.form.SimpleForm.prototype.removeContent = function(oElement, bSuppressInvalidate) {
	if (this._aElements) {
		for (var i=0;i<this._aElements.length;i++) {
			if (oElement == this._aElements[i]) {
				this._aElements.splice(i,1);
				if (!bSuppressInvalidate) {
					this.invalidate();
				}
				if (oElement && oElement.getVisible) {
					oElement.detachEventOnce("_change", this.fHandleContentChange, this);
				}
				return oElement;
			}
		}
	}
	return null;
};

/**
 * Returns the content of the simple form
 * @override 
 */
sap.ui.commons.form.SimpleForm.prototype.getContent = function() {
	if (!this._aElements) {
		this._aElements = sap.ui.core.Control.prototype.getAggregation.apply(this,["content"]);
	}
	return this._aElements;
};

sap.ui.commons.form.SimpleForm.prototype._hasVisibleFields = function(oElement) {
	if (!oElement) return false;
	var aFields = oElement.getFields(),
		bVisible = false;
	for (var i=0;i<aFields.length;i++) {
		var oField = aFields[0];
		if (oField && oField.getVisible && oField.getVisible()) {
			return true;
		}
	}
	return false;
};

/**
 * Updates the FormContainers of the simple form.
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._updateFormContainers = function() {
	
	if (!this._bUpdateNeeded) return;
	
	//create content
	var aContent = this.getContent(),
		oCurrentContainer = null,
		oCurrentElement = null,
		bAvoidApply = false,
		oForm = this.getAggregation("form");
	
	//remove the inner controls from their parents before destroying the form containers otherwise the controls are not
	//not usable anymore
	if (this._aElements) {
		for (var i=0;i<this._aElements.length;i++) {
			var oElement = this._aElements[i];
			if (oElement && oElement.getVisible) {
				oElement.attachEventOnce("_change", this.fHandleContentChange, this);
			} 
			
			//TODO: shouldn't this be part of the ManagedObject, something like removeFromParent
			//Could we user setParent here or _removeChild
			if (oElement && oElement.getParent() && oElement.getParent() != this) {
				var oParent = oElement.getParent(),
					oAggMeta = oParent.getMetadata().getManagedAggregation(oElement.sParentAggregationName);
				if (oAggMeta.multiple) {
					oParent.removeAggregation(oElement.sParentAggregationName,oElement);
				} else {
					oParent.setAggregation(oElement.sParentAggregationName,null);
				}
			}
		}
	}
	
	oForm.destroyFormContainers();
	for (var i=0;i<aContent.length;i++) {
		var oControl = aContent[i];
		if (oControl instanceof sap.ui.commons.Title) { 
			//start a new container with a title
			oCurrentContainer = this._addFormContainer(oForm,oControl);
		} else if (oControl.getMetadata().isInstanceOf("sap.ui.core.Label")) { // if the control implements the label interface
			if (!oCurrentContainer) {
				oCurrentContainer = this._addFormContainer(oForm);
			}
			//set the weights of the current element
			if (oCurrentElement) {
				if (this._hasVisibleFields(oCurrentElement)) {
					oCurrentElement.setVisible(true);
				} else {
					oCurrentElement.setVisible(false);
				}
				if (!bAvoidApply) {
					this._applyFieldWeight(oCurrentElement);
				}
			}
			bAvoidApply = false;
			//start a new row
			oCurrentElement = this._addFormElement(oCurrentContainer, oControl);
		} else {
			if (!oCurrentElement) {
				oCurrentElement = this._addFormElement(oCurrentContainer);
			}
			if (oControl.getLayoutData() instanceof sap.ui.commons.layout.ResponsiveFlowLayoutData && !this._isMyLayoutData(oControl.getLayoutData())) {
				if (oControl.getLayoutData().getLinebreak()) {
					//end the previous row if flow layout data is given
					if (oCurrentElement) {
						this._applyFieldWeight(oCurrentElement);
					}
					
					oCurrentElement = this._addFormElement(oCurrentContainer);
					bAvoidApply = true;
				}
			} else {
				oControl.setLayoutData(this._createLayoutData(5,false,true));
			}
			oCurrentElement.addField(oControl);
		}
		if (oCurrentElement) {
			if (this._hasVisibleFields(oCurrentElement)) {
				oCurrentElement.setVisible(true);
			} else {
				oCurrentElement.setVisible(false);
			}
			if (!bAvoidApply) {
				this._applyFieldWeight(oCurrentElement);
			}
		}
	}
	this._bUpdateNeeded = false;
};

/**
 * Checks whether the given LayoutData is created and added by this Simple Form
 * @param { sap.ui.commons.layout.ResponsiveFlowLayoutData} optional (interface) The layout data
 * @returns {boolean} Whether the given layout was created by this Simple Form
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._isMyLayoutData = function(oLayoutData) {
	var sId = oLayoutData.getId(),
		sLayouts = " " + this._aLayouts.join(" ") + " ";
	return sLayouts.indexOf(" " + sId + " ") >-1;
};

/**
 * Creates new sap.ui.commons.layout.ResponsiveFlowLayoutData with the given parameters
 * @param {int} iWeight the weight for the layout data
 * @param {boolean} bLinebreak Whether the layout data has a linebreak
 * @param {boolean} bLinebreakable Whether the layout data is linebreakable
 * @returns {sap.ui.commons.layout.ResponsiveFlowLayoutData} The newly created ResponsiveFlowLayoutData
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._createLayoutData = function(iWeight, bLinebreak, bLinebreakable) {
	var oLayout = new sap.ui.commons.layout.ResponsiveFlowLayoutData({weight:iWeight,linebreak:bLinebreak===true,linebreakable: bLinebreakable===true});
	this._aLayouts.push(oLayout.getId());
	return oLayout;
};

/**
 * Adds a new form element to the given FormContainer and adds the given label to it.
 * @param {sap.ui.commons.form.FormContainer} The form container
 * @param {sap.ui.core.Label} optional (interface) The label of the element
 * @returns {sap.ui.commons.form.FormElement} The newly created FormElement
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._addFormElement = function(oFormContainer, oLabel) {
	var oElement = new sap.ui.commons.form.FormElement();
	oElement.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData({linebreak:true,margin:false}));
	if (oLabel) {
		oLabel.addStyleClass("sapUiFormLabel-CTX");
		oElement.setLabel(oLabel);
		oLabel.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData({weight:3,minWidth:this.getLabelMinWidth()}));
	}
	oElement.setVisible(false);
	oFormContainer.addFormElement(oElement);
	return oElement;
};

/**
 * Adds a new form container to the given Form and adds the given title to it.
 * @param {sap.ui.commons.form.Form} The form
 * @param {sap.ui.commons.Title} optional The titel of the container
 * @returns {sap.ui.commons.form.FormContainer} The newly created FormContainer
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._addFormContainer = function(oForm, oTitle) {
	var oContainer = new sap.ui.commons.form.FormContainer();
	oContainer.setLayoutData(new sap.ui.commons.layout.ResponsiveFlowLayoutData({minWidth:280}));
	oForm.addFormContainer(oContainer);
	if (oTitle) {
		oContainer.setTitle(oTitle);
	}
	return oContainer;
};

/**
 * Applies the weight property for the fields in the responsive layout.
 * @param {sap.ui.commons.form.FormElement} oElement The FormElement where the weight is applied.
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._applyFieldWeight = function(oElement){
	
	var aFields = oElement.getFields(),
		iWeight = Math.floor(5/aFields.length),
		iRest = 5 % aFields.length;
	for (var i=0;i<aFields.length;i++) {
		var oField = aFields[i],
			iCurrentWeight = iWeight,
			oLayoutData = oField.getLayoutData();
		if (i == aFields.length-1) {
			iCurrentWeight += iRest;
		}
		if (!oLayoutData) {
			oField.setLayoutData(this._createLayoutData(iCurrentWeight,false,i==0));
		} else if (this._isMyLayoutData(oLayoutData)) {
			oLayoutData.setWeight(iCurrentWeight);
		} 
	}
};

/**
 * Applies the linebreaks of form containers according the minWidth and maxContainerCol settings of the SimpleForm
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._applyLinebreaks = function(){
	var oForm = this.getAggregation("form"),
		aContainers = oForm.getFormContainers();
	// set line break on every container if Form is smaller than getMinWidth pixel
	// and reset it if it's larger
	for (var i=1; i<aContainers.length; i++){
		var oContainer = aContainers[i],
			oLayoutData = oContainer.getLayoutData();
		if (this.$().outerWidth(true) > this.getMinWidth()){
			if (oLayoutData.getLinebreak()) {
				oLayoutData.setLinebreak(false);
			}
			if (i % this.getMaxContainerCols() == 0) {
				oLayoutData.setLinebreak(true);
			}
		} else {
			oLayoutData.setLinebreak(true);
		}
	}
	var that = this;
	setTimeout(function() {
		if (that.getDomRef()) {
			that.getDomRef().style.visibility = "visible";
		}
	},10);
};

/**	
 * Handles the resize event 
 * @private
 */
sap.ui.commons.form.SimpleForm.prototype._resize = function(){
	if (this._iCurrentWidth == this.$().outerWidth()) return;
	this._iCurrentWidth = this.$().outerWidth();
	this._applyLinebreaks(); 
};