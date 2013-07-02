/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.me.OverlapCalendarRenderer");sap.me.OverlapCalendarRenderer={};
sap.me.OverlapCalendarRenderer.render=function(r,c){if(c.getVisible()==false){return}r.write("<div");r.writeControlData(c);r.addClass("sapMeOverlapCalendar");r.writeClasses();var w=c.getWidth();if(w!=undefined){r.addStyle("width",w);r.writeStyles()}r.write(">");r.write("<div");r.addClass("sapMeOverlapCalendarCalendar");r.writeClasses();r.write(">");r.renderControl(c.getCalendar());r.write("</div>");r.write("<div");r.addClass("sapMeOverlapCalendarOverlapIndicator");r.writeClasses();r.write(">");var W=7;var a=c.getCalendar().getWeeksPerRow();var d=a*W;var b=new Date(c.getStartDate());var D=(100/d);for(var i=0;i<d;i++){r.write("<div");r.writeAttribute("id","overlap-"+i);r.addClass("sapMeOverlapCalendarOverlap");r.writeClasses();r.addStyle("width",D+"%");r.writeStyles();r.write("></div>");b.setDate(b.getDate()+1)}r.write("</div>");this._renderGrid(r,c);r.write("</div>")};
sap.me.OverlapCalendarRenderer._renderGrid=function(r,c){var w=7;var W=c.getCalendar().getWeeksPerRow();var d=W*w;var D=(100/d);var m=D*d;var a=c._aRows;if(a){var n=a.length;r.write('<div');r.addClass("sapMeOverlapCalendarGrid");r.writeClasses();r.addStyle("width","100%");r.writeStyles();r.write(">");for(var i=0;i<n;i++){if(a[i]!=undefined){this._renderRow(r,c,d,i,new Date(c.getStartDate()))}}}r.write('</div>')};
sap.me.OverlapCalendarRenderer._renderRow=function(r,c,d,a,b){var D=(100/d);var e=c.getCalendar().getDayHeight();r.write('<div');r.writeAttribute("id",c.getId()+"-row-"+a);r.addClass("sapMeOverlapCalendarRow");r.writeClasses();r.addStyle("height",e+"px");r.writeStyles();r.write(">");r.write('<div');r.writeAttribute("id",c.getId()+"-row-"+a+"-lbls");r.addClass("sapMeOverlapCalendarRowLabels");r.writeClasses();r.write(">");r.renderControl(c._getLabelForRow(a));r.write('</div>');for(var i=0;i<d;i++){this._renderDay(r,c,D,e,a,i);b.setDate(b.getDate()+1)}r.write('</div>')};
sap.me.OverlapCalendarRenderer._renderDay=function(r,c,d,D,R,i){r.write("<div");r.writeAttribute("id",R+"-"+i);r.addClass("sapMeOverlapCalendarDay");r.writeClasses();r.addStyle("width",d+"%");if(D){r.addStyle("height",D+"px")}r.writeStyles();r.write("></div>")};
