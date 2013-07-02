/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.xml.XMLTreeBinding");jQuery.sap.require("sap.ui.model.TreeBinding");sap.ui.model.TreeBinding.extend("sap.ui.model.xml.XMLTreeBinding",{constructor:function(m,p,c){sap.ui.model.TreeBinding.apply(this,arguments);if(!this.oContext){this.oContext=""}this.filterInfo={};this.filterInfo.aFilteredContexts=[];this.filterInfo.oParentContext={}}});
sap.ui.model.xml.XMLTreeBinding.prototype.getRootContexts=function(){var r=this.oModel.getContext(this.sPath);return this.getNodeContexts(r)};
sap.ui.model.xml.XMLTreeBinding.prototype.getNodeContexts=function(c){var C=c.getPath();if(!jQuery.sap.endsWith(C,"/")){C=C+"/"}if(!jQuery.sap.startsWith(C,"/")){C="/"+C}var a=[],n={},t=this,N=this.oModel._getObject(c.getPath()),o,s,b;jQuery.each(N[0].childNodes,function(d,o){if(o.nodeType==1){if(n[o.nodeName]==undefined){n[o.nodeName]=0}else{n[o.nodeName]++}s=C+o.nodeName+"/"+n[o.nodeName];b=t.oModel.getContext(s);if(t.aFilters&&!t.bIsFiltering){if(jQuery.inArray(b,t.filterInfo.aFilteredContexts)!=-1){a.push(b)}}else{a.push(b)}}});return a};
sap.ui.model.xml.XMLTreeBinding.prototype.filter=function(f){var r=this.oModel.getContext(this.sPath);this.filterInfo.aFilteredContexts=[];this.filterInfo.oParentContext={};if(!f||!jQuery.isArray(f)||f.length==0){this.aFilters=null}else{this.aFilters=f;this.filterRecursive(r)}this._fireChange({reason:"filter"});this._fireFilter({filters:f})};
sap.ui.model.xml.XMLTreeBinding.prototype.filterRecursive=function(p){this.bIsFiltering=true;var c=this.getNodeContexts(p);this.bIsFiltering=false;if(c.length>0){var t=this;jQuery.each(c,function(i,C){t.filterRecursive(C)});this.applyFilter(p)}};
sap.ui.model.xml.XMLTreeBinding.prototype.applyFilter=function(p){if(!this.aFilters){return}var t=this,f={},F,a=[],g=false,b=true;this.bIsFiltering=true;var u=this.getNodeContexts(p);this.bIsFiltering=false;jQuery.each(u,function(i,U){b=true;jQuery.each(t.aFilters,function(j,o){F=f[o.sPath];if(!F){F=f[o.sPath]=[]}F.push(o)});jQuery.each(f,function(P,F){var v=t.oModel._getObject(P,U);if(typeof v=="string"){v=v.toUpperCase()}g=false;jQuery.each(F,function(j,o){var T=t.getFilterFunction(o);if(v&&T(v)){g=true;return false}});if(!g){b=false;return false}});if(b){a.push(U)}});if(a.length>0){jQuery.merge(this.filterInfo.aFilteredContexts,a);this.filterInfo.aFilteredContexts.push(p);this.filterInfo.oParentContext=p}if(jQuery.inArray(this.filterInfo.oParentContext,u)!=-1){this.filterInfo.aFilteredContexts.push(p);this.filterInfo.oParentContext=p}};
sap.ui.model.xml.XMLTreeBinding.prototype.getFilterFunction=function(f){if(f.fnTest){return f.fnTest}var v=f.oValue1,V=f.oValue2;if(typeof v=="string"){v=v.toUpperCase()}if(typeof V=="string"){V=V.toUpperCase()}switch(f.sOperator){case"EQ":f.fnTest=function(a){return a==v};break;case"NE":f.fnTest=function(a){return a!=v};break;case"LT":f.fnTest=function(a){return a<v};break;case"LE":f.fnTest=function(a){return a<=v};break;case"GT":f.fnTest=function(a){return a>v};break;case"GE":f.fnTest=function(a){return a>=v};break;case"BT":f.fnTest=function(a){return(a>v)&&(a<V)};break;case"Contains":f.fnTest=function(a){return a.indexOf(v)!=-1};break;case"StartsWith":f.fnTest=function(a){return a.indexOf(v)==0};break;case"EndsWith":f.fnTest=function(a){return a.indexOf(v)==a.length-new String(f.oValue1).length};break;default:f.fnTest=function(a){return true}}return f.fnTest};
sap.ui.model.xml.XMLTreeBinding.prototype.checkUpdate=function(f){this._fireChange()};
