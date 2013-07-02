/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
sap.ui.base.Object.extend("sap.uiext.inbox.TCMMetadata",{constructor:function(){sap.ui.base.Object.apply(this);this.oServiceMetadata=null;this.serviceSupportsFilterOption=false}});
sap.uiext.inbox.TCMMetadata.prototype.setServiceMetadata=function(s){if(s)this.oServiceMetadata=s;this._isCustomStatusSupported()};
sap.uiext.inbox.TCMMetadata.prototype.getServiceMetadata=function(){return this.oServiceMetadata};
sap.uiext.inbox.TCMMetadata.prototype._isCustomStatusSupported=function(){this.serviceSupportsFilterOption=false;var t=this;var e=this.getServiceMetadata().dataServices.schema[0].entityType;var T=null;var a=null;jQuery.each(e,function(i,b){if(b.name===sap.uiext.inbox.InboxConstants.ENTITY_NAME_TASK_COLLECTION){a=b.property;jQuery.each(a,function(i,p){if(p.name===sap.uiext.inbox.InboxConstants.PROPERTY_NAME_CUSTOM_STATUS){t.serviceSupportsFilterOption=true;return false}});return false}})};
