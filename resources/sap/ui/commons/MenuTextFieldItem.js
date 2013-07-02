/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.MenuTextFieldItem");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.MenuItemBase");sap.ui.commons.MenuItemBase.extend("sap.ui.commons.MenuTextFieldItem",{metadata:{library:"sap.ui.commons",properties:{"label":{type:"string",group:"Appearance",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"value":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"_label":{type:"sap.ui.commons.Label",multiple:false,visibility:"hidden"},"_textfield":{type:"sap.ui.commons.TextField",multiple:false,visibility:"hidden"}}}});jQuery.sap.require("sap.ui.commons.MenuItem");jQuery.sap.require("sap.ui.commons.Label");jQuery.sap.require("sap.ui.commons.TextField");(function(){sap.ui.commons.MenuTextFieldItem.prototype.init=function(){sap.ui.commons.MenuItemBase.prototype.init.apply(this,arguments);var t=this;var d={onAfterRendering:function(){t._tf.$().attr("tabIndex",-1);var l=t._lbl.$().outerWidth(true)+6;var i=t.$().find(".sapUiMnuItmIco").outerWidth(true);t._tf.$().parent().css(sap.ui.getCore().getConfiguration().getRTL()?"right":"left",(l+i)+"px").css("width","auto")},onclick:function(e){if(!t._tf.getEnabled()&&jQuery.browser.msie){t.getParent().focus()}}};this._tf=new sap.ui.commons.TextField(this.getId()+"-tf");this._tf.addDelegate(d);this.setAggregation("_textfield",this._tf);this._lbl=new sap.ui.commons.Label(this.getId()+"-lbl",{labelFor:this._tf});this._lbl.addDelegate(d);this.setAggregation("_label",this._lbl)};sap.ui.commons.MenuTextFieldItem.prototype.exit=function(){this._lbl=null;this._tf=null};sap.ui.commons.MenuTextFieldItem.prototype.render=function(r,i,m,I){var a=r;a.write("<li ");a.writeAttribute("class","sapUiMnuItm sapUiMnuTfItm"+(m.checkEnabled(i)?"":" sapUiMnuItmDsbl"));if(i.getTooltip_AsString()){a.writeAttributeEscaped("title",i.getTooltip_AsString())}a.writeElementData(i);if(I.bAccessible){a.writeAttribute("role","menuitem");a.writeAttribute("aria-labelledby",m.getId()+" "+this.getId()+"-txt "+this.getId()+"-scuttxt");a.writeAttribute("aria-disabled",!m.checkEnabled(i));a.writeAttribute("aria-posinset",I.iItemNo);a.writeAttribute("aria-setsize",I.iTotalItems)}a.write("><div class=\"sapUiMnuItmL\"></div>");a.write("<div class=\"sapUiMnuItmIco\">");if(i.getIcon()){a.write("<img");a.writeAttributeEscaped("src",i.getIcon());a.write("/>")}a.write("</div>");a.write("<div id=\""+this.getId()+"-txt\" class=\"sapUiMnuItmTxt\">");a.renderControl(this._lbl);a.write("<div id=\""+this.getId()+"-str\" class=\"sapUiMnuTfItmStretch\"></div>");this._tf.setValue(this.getValue());this._tf.setEnabled(this.getEnabled()&&this.getParent().getEnabled());a.write("<div class=\"sapUiMnuTfItemWrppr\">");a.renderControl(this._tf);a.write("</div></div>");a.write("<div class=\"sapUiMnuItmR\"></div>");a.write("</li>")};sap.ui.commons.MenuTextFieldItem.prototype.hover=function(h,m){if(h){jQuery(this.getDomRef()).addClass("sapUiMnuItmHov");jQuery(this._tf.getDomRef()).addClass("sapUiTfFoc");if(this.getEnabled()){var t=this;function f(){t._tf.focus()};if(jQuery("html").attr("data-sap-ui-browser")==="ie8"){setTimeout(f,0)}else{f()}}}else{jQuery(this.getDomRef()).removeClass("sapUiMnuItmHov");jQuery(this._tf.getDomRef()).removeClass("sapUiTfFoc")}};sap.ui.commons.MenuTextFieldItem.prototype.onsapup=function(e){this.getParent().focus();this.getParent().onsapprevious(e)};sap.ui.commons.MenuTextFieldItem.prototype.onsapdown=function(e){this.getParent().focus();this.getParent().onsapnext(e)};sap.ui.commons.MenuTextFieldItem.prototype.onsaphome=function(e){this.getParent().focus();this.getParent().onsaphome(e)};sap.ui.commons.MenuTextFieldItem.prototype.onsapend=function(e){this.getParent().focus();this.getParent().onsapend(e)};sap.ui.commons.MenuTextFieldItem.prototype.onsapescape=function(e){this.getParent().onsapescape(e)};sap.ui.commons.MenuTextFieldItem.prototype.onkeydown=function(e){e.stopPropagation()};sap.ui.commons.MenuTextFieldItem.prototype.onclick=function(e){e.preventDefault();e.stopPropagation()};sap.ui.commons.MenuTextFieldItem.prototype.onsapenter=function(e){var v=e.target.value;this.setValue(v,true);this.getParent().selectItem(this);e.preventDefault();e.stopPropagation()};sap.ui.commons.MenuTextFieldItem.prototype.setSubmenu=function(m){jQuery.sap.log.warning("The aggregation 'submenu' is not supported for this type of menu item.","","sap.ui.commons.MenuTextFieldItem");return this};sap.ui.commons.MenuTextFieldItem.prototype.setLabel=function(l){this._lbl.setText(l);return this};sap.ui.commons.MenuTextFieldItem.prototype.getLabel=function(){return this._lbl.getText()};sap.ui.commons.MenuTextFieldItem.prototype.setValue=function(v,s){this.setProperty("value",v,s);this._tf.setValue(v);return this}}());
