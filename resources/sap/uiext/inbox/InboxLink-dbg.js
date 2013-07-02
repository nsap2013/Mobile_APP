/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
 
 jQuery.sap.declare("sap.uiext.inbox.InboxLink");
 
 sap.ui.commons.Link.extend("sap.uiext.inbox.InboxLink", {
	init: function(){
		if (sap.ui.commons.Link.prototype.init) { 
		      sap.ui.commons.Link.prototype.init.apply(this, arguments); 
		    }
		this._oBundle = sap.ui.getCore().getLibraryResourceBundle("sap.uiext.inbox");
	}, 
	
	metadata : {                             
		properties : {
        "overdue" : {type : "boolean", defaultValue : false}                
		}
	},
	
	setOverdue: function(value){
		this.setProperty('overdue',value);
		if(value){
			this.addStyleClass("sapUiExtInboxRedColor");
			this.setText("! "+this.getText());
		}
		return this;
	},
	
    onclick : function(oEvent) {
			 if (this.getEnabled()) {
				 if (!this.firePress({windowEvent:oEvent})) {
					oEvent.preventDefault();
				}
			} else {
				oEvent.preventDefault();
			}
		},
	setText: function(value) {
			
			var sValue = value ? value.replace(/^\s+|\s+$/g,'') : value;
			if(!sValue) {
				value = this._oBundle.getText("INBOX_TASK_TITLE_NOTAVAILABLE_MSG");
			} 
	    sap.ui.commons.Link.prototype.setText.call(this,[value]);
	},

	setTooltip : function(value) {
		    
		    var sValue = value ? value.replace(/^\s+|\s+$/g,'') : value;
			if(!sValue) {
				value = this._oBundle.getText("INBOX_TASK_TITLE_NOTAVAILABLE_MSG");
			}
			else {
			value = this._oBundle.getText("INBOX_CURRENT_TASKTITLE_TOOLTIP");
			}
			 sap.ui.commons.Link.prototype.setTooltip.call(this,value);
	},
	
	renderer: "sap.ui.commons.LinkRenderer"
});