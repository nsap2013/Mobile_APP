/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.RichTooltip");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.TooltipBase");sap.ui.core.TooltipBase.extend("sap.ui.commons.RichTooltip",{metadata:{library:"sap.ui.commons",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"imageSrc":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"valueStateText":{type:"string",group:"Misc",defaultValue:null},"imageAltText":{type:"string",group:"Misc",defaultValue:null}}}});
sap.ui.commons.RichTooltip.prototype.exit=function(){if(this._oText){this._oText.destroy();delete this._oText}if(this._oValueStateText){this._oValueStateText.destroy();delete this._oValueStateText}};
sap.ui.commons.RichTooltip.prototype.onAfterRendering=function(){if(this._oText&&this._oText.getDomRef()){this._oText.$().attr("role","tooltip");if(this.getImageSrc()!==""){this.$().addClass("sapUiRttContentWide")}}};
sap.ui.commons.RichTooltip.prototype.setValueStateText=function(t){if(t){if(this._oValueStateText){this._oValueStateText.setProperty("htmlText",t,true)}else{this._oValueStateText=new sap.ui.commons.FormattedTextView(this.getId()+"-valueStateText",{htmlText:t}).addStyleClass("sapUiRttValueStateText").addStyleClass("individual")}}else{if(this._oValueStateText){this._oValueStateText.destroy();delete this._oValueStateText}}this.invalidate()};
sap.ui.commons.RichTooltip.prototype.getValueStateText=function(){if(this._oValueStateText){return this._oValueStateText.getHtmlText()}return""};
sap.ui.commons.RichTooltip.prototype.setText=function(t){if(this._oText){this._oText.setProperty("htmlText",t,true)}else{this._oText=new sap.ui.commons.FormattedTextView(this.getId()+"-txt",{htmlText:t}).addStyleClass("sapUiRttText")}};
sap.ui.commons.RichTooltip.prototype.getText=function(){if(this._oText){return this._oText.getHtmlText()}return""};
sap.ui.commons.RichTooltip.prototype.onfocusin=function(e){sap.ui.core.TooltipBase.prototype.onfocusin.apply(this,arguments);var s=jQuery(e.target).control(0);if(s!=null){var i=this.getId();var I="";if(this.getTitle()!==""){I+=i+"-title "}var $=jQuery.sap.byId(i+"-valueStateText");if($.length>0){I+=i+"-valueStateText "}if(this.getImageSrc()!==""){I+=i+"-image "}if(this.getText()!==""){I+=i+"-txt"}var d=s.getFocusDomRef();d.setAttribute("aria-describedby",I)}};
