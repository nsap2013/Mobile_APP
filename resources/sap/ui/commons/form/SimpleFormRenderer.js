/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.commons.form.SimpleFormRenderer");sap.ui.commons.form.SimpleFormRenderer={};
sap.ui.commons.form.SimpleFormRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiSimpleForm");r.writeClasses();r.write(">");var f=c.getAggregation("form");if(c.getEditable()){f.addStyleClass("sapUiFormEdit sapUiFormEdit-CTX")}r.renderControl(f);r.write("</div>")};
