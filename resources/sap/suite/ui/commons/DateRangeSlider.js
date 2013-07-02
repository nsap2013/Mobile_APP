/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.DateRangeSlider");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.DateRangeSlider",{metadata:{library:"sap.suite.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"enabled":{type:"boolean",group:"Appearance",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Misc",defaultValue:true},"showBubbles":{type:"boolean",group:"Misc",defaultValue:true},"smallStepWidth":{type:"float",group:"Appearance",defaultValue:null},"totalUnits":{type:"int",group:"Appearance",defaultValue:null},"stepLabels":{type:"boolean",group:"Misc",defaultValue:false},"labels":{type:"string[]",group:"Misc",defaultValue:null},"min":{type:"object",group:"Behavior",defaultValue:null},"max":{type:"object",group:"Behavior",defaultValue:null},"value":{type:"object",group:"Behavior",defaultValue:null},"value2":{type:"object",group:"Behavior",defaultValue:null},"pinGrip":{type:"boolean",group:"Misc",defaultValue:false},"pinGrip2":{type:"boolean",group:"Misc",defaultValue:false}},events:{"change":{},"liveChange":{}}}});sap.suite.ui.commons.DateRangeSlider.M_EVENTS={'change':'change','liveChange':'liveChange'};jQuery.sap.require("jquery.sap.resources");jQuery.sap.require("sap.suite.ui.commons.util.DateUtils");(function(){var D="d";var M="m";sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity=function(f,s,g){var S=false;switch(g){case(D):S=sap.suite.ui.commons.util.DateUtils.dateDaysEqual(f,s);break;case(M):S=sap.suite.ui.commons.util.DateUtils.dateMonthsEqual(f,s);break}return S};sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax=function(m,d,g){var b=false;if(m.getFullYear()<d.getFullYear()){b=true}else if(m.getFullYear()===d.getFullYear()){if(m.getMonth()<d.getMonth()){b=true}else if(m.getMonth()===d.getMonth()&&g===D){if(m.getDate()<d.getDate()){b=true}}}if(!b){jQuery.sap.log.error("DateRangeSlider: Min Date = "+m+" should be before Max Date = "+d)}return b};sap.suite.ui.commons.DateRangeSlider.isValueEqualOrAfterMin=function(m,v,g){var V=false;if(m.getFullYear()<v.getFullYear()){V=true}else if(m.getFullYear()===v.getFullYear()){if(m.getMonth()<v.getMonth()){V=true}else if(m.getMonth()===v.getMonth()&&g===M){V=true}else if(m.getMonth()===v.getMonth()&&g===D){if(m.getDate()<=v.getDate()){V=true}}}if(!V){jQuery.sap.log.error("DateRangeSlider: Value Date = "+v+" should be after or equal to Min Date = "+m)}return V};sap.suite.ui.commons.DateRangeSlider.isValue2EqualOrBeforeMax=function(v,m,g){var V=false;if(v.getFullYear()<m.getFullYear()){V=true}else if(v.getFullYear()===m.getFullYear()){if(v.getMonth()<m.getMonth()){V=true}else if(v.getMonth()===m.getMonth()&&g===M){V=true}else if(v.getMonth()===m.getMonth()&&g===D){if(v.getDate()<=m.getDate()){V=true}}}if(!V){jQuery.sap.log.error("DateRangeSlider: Value2 Date = "+v+" should be before or equal to Max Date = "+m)}return V};sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2=function(v,V,g){var b=false;if(v.getFullYear()<V.getFullYear()){b=true}else if(v.getFullYear()===V.getFullYear()){if(v.getMonth()<V.getMonth()){b=true}else if(v.getMonth()===V.getMonth()&&g===M){b=true}else if(v.getMonth()===V.getMonth()&&g===D){if(v.getDate()<=V.getDate()){b=true}}}if(!b){jQuery.sap.log.error("DateRangeSlider: Value Date = "+v+" should be before or equal to Value2 Date = "+V)}return b};sap.suite.ui.commons.DateRangeSlider.prototype.setMin=function(m){if(sap.suite.ui.commons.util.DateUtils.isValidDate(m)&&sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax(m,new Date(this.getMax()),this._sGranularity)&&!sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getMin()),m,this._sGranularity)){sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(m);this._oDateRangeSliderInternal.setMinDate(m);sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this)}};sap.suite.ui.commons.DateRangeSlider.prototype.setMax=function(m){if(sap.suite.ui.commons.util.DateUtils.isValidDate(m)&&sap.suite.ui.commons.DateRangeSlider.isMinBeforeMax(new Date(this.getMin()),m,this._sGranularity)&&!sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getMax()),m,this._sGranularity)){sap.suite.ui.commons.util.DateUtils.resetDateToEndOfDay(m);this._oDateRangeSliderInternal.setMaxDate(m);sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this)}};sap.suite.ui.commons.DateRangeSlider.prototype.setValue=function(v){if(sap.suite.ui.commons.util.DateUtils.isValidDate(v)&&sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2(v,new Date(this.getValue2()),this._sGranularity)&&sap.suite.ui.commons.DateRangeSlider.isValueEqualOrAfterMin(new Date(this.getMin()),v,this._sGranularity)&&!sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getValue()),v,this._sGranularity)){sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(v);this._oDateRangeSliderInternal.setValueDate(v);sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this)}};sap.suite.ui.commons.DateRangeSlider.prototype.getValue=function(){var v=this._oDateRangeSliderInternal.getValueDate();return v};sap.suite.ui.commons.DateRangeSlider.prototype.setValue2=function(v){if(sap.suite.ui.commons.util.DateUtils.isValidDate(v)&&sap.suite.ui.commons.DateRangeSlider.isValueBeforeOrEqualValue2(new Date(this.getValue()),v,this._sGranularity)&&!sap.suite.ui.commons.DateRangeSlider.areDaysSameBasedOnGranularity(new Date(this.getValue2()),v,this._sGranularity)&&sap.suite.ui.commons.DateRangeSlider.isValue2EqualOrBeforeMax(v,new Date(this.getMax()),this._sGranularity)){sap.suite.ui.commons.util.DateUtils.resetDateToStartOfDay(v);this._oDateRangeSliderInternal.setValue2Date(v);sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this)}};sap.suite.ui.commons.DateRangeSlider.prototype.getValue2=function(){var v=this._oDateRangeSliderInternal.getValue2Date();return v};sap.suite.ui.commons.DateRangeSlider.prototype.setVisible=function(v){this._oDateRangeSliderInternal.setVisible(v);this.setProperty("visible",v)};sap.suite.ui.commons.DateRangeSlider.prototype.setEnabled=function(e){this._oDateRangeSliderInternal.setEnabled(e);this.setProperty("enabled",e)};sap.suite.ui.commons.DateRangeSlider.prototype.setLabels=function(l){this._oDateRangeSliderInternal.setLabels(l);this.setProperty("labels",l)};sap.suite.ui.commons.DateRangeSlider.prototype.setStepLabels=function(s){this._oDateRangeSliderInternal.setStepLabels(s);this.setProperty("stepLabels",s)};sap.suite.ui.commons.DateRangeSlider.prototype.setEditable=function(e){this._oDateRangeSliderInternal.setEditable(e);this.setProperty("editable",e)};sap.suite.ui.commons.DateRangeSlider.prototype.setWidth=function(t){this._oDateRangeSliderInternal.setWidth(t);this.setProperty("width",t)};sap.suite.ui.commons.DateRangeSlider.prototype.setShowBubbles=function(s){this._oDateRangeSliderInternal.setShowBubbles(s);this.setProperty("showBubbles",s)};sap.suite.ui.commons.DateRangeSlider.prototype.setSmallStepWidth=function(s){this._oDateRangeSliderInternal.setSmallStepWidth(s);this.setProperty("smallStepWidth",s)};sap.suite.ui.commons.DateRangeSlider.prototype.setTotalUnits=function(t){this._oDateRangeSliderInternal.setTotalUnits(t);this.setProperty("totalUnits",t)};sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal=function(d){d.setProperty("min",d._oDateRangeSliderInternal.getMinDate());d.setProperty("max",d._oDateRangeSliderInternal.getMaxDate());d.setProperty("value",d._oDateRangeSliderInternal.getValueDate());d.setProperty("value2",d._oDateRangeSliderInternal.getValue2Date());d._sGranularity=d._oDateRangeSliderInternal._sGranularity};sap.suite.ui.commons.DateRangeSlider.prototype.setDayGranularity=function(){this._oDateRangeSliderInternal.setDayGranularity();if(this._oDateRangeSliderInternal.isActive()){this._oDateRangeSliderInternal.rerender()}sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);return this};sap.suite.ui.commons.DateRangeSlider.prototype.setMonthGranularity=function(){var m=sap.suite.ui.commons.util.DateUtils.numberOfMonthsApart(this.getMin(),this.getMax());if(m>=1){this._oDateRangeSliderInternal.setMonthGranularity();if(this._oDateRangeSliderInternal.isActive()){this._oDateRangeSliderInternal.rerender()}sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this)}else{jQuery.sap.log.error("DateRangeSlider.setMonthGranularity(): Max Date should be 1 month after Min Date.")}return this};sap.suite.ui.commons.DateRangeSlider.prototype.setDateFormat=function(d){this._oDateRangeSliderInternal.setDateFormat(d);if(this._oDateRangeSliderInternal.isActive()){this._oDateRangeSliderInternal.rerender()}};sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip=function(p){this._oDateRangeSliderInternal.setPinGrip(p);this.setProperty("pinGrip",p)};sap.suite.ui.commons.DateRangeSlider.prototype.setPinGrip2=function(p){this._oDateRangeSliderInternal.setPinGrip2(p);this.setProperty("pinGrip2",p)};sap.suite.ui.commons.DateRangeSlider.prototype.exit=function(){this._oDateRangeSliderInternal.destroy();this._oDateRangeSliderInternal=null};sap.suite.ui.commons.DateRangeSlider.prototype.init=function(){this._oDateRangeSliderInternal=new sap.suite.ui.commons.DateRangeSliderInternal({id:this.getId()+"-dateRangeSliderInternal"});sap.suite.ui.commons.DateRangeSlider.setPropertiesBasedOnSliderInternal(this);var s=this;this._oDateRangeSliderInternal.attachChange(function(e){s.handleChange(e)});this._oDateRangeSliderInternal.attachLiveChange(function(e){s.handleLiveChange(e)})};sap.suite.ui.commons.DateRangeSlider.prototype.handleChange=function(e){var v=e.getParameter("value");var V=e.getParameter("value2");this.fireChange({value:v,value2:V})};sap.suite.ui.commons.DateRangeSlider.prototype.handleLiveChange=function(e){var v=e.getParameter("value");var V=e.getParameter("value2");this.fireLiveChange({value:v,value2:V})}}());
