/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.UIArea");jQuery.sap.require("jquery.sap.ui");jQuery.sap.require("sap.ui.base.ManagedObject");jQuery.sap.require("sap.ui.core.Element");sap.ui.base.ManagedObject.extend("sap.ui.core.UIArea",{constructor:function(c,r){if(arguments.length===0){return}sap.ui.base.ManagedObject.apply(this);this.oCore=c;this.bLocked=false;this.bInitial=true;this.aContentToRemove=[];this.bNeedsRerendering=false;if(r!=null){this.setRootNode(r);this.bNeedsRerendering=this.bNeedsRerendering&&!jQuery.sap.domById(r.id+"-Init")}this.mInvalidatedControls={};if(!this.bNeedsRerendering){this.oRenderControl=null}else{this.oCore.addInvalidatedUIArea(this)}},metadata:{publicMethods:["setRootNode","getRootNode","setRootControl","getRootControl","lock","unlock","isLocked"],aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});
sap.ui.core.UIArea.prototype.isInvalidateSuppressed=function(){return this.iSuppressInvalidate>0};
sap.ui.core.UIArea.prototype.getId=function(){return this.oRootNode?this.oRootNode.id:null};
sap.ui.core.UIArea.prototype.getUIArea=function(){return this};
sap.ui.core.UIArea.prototype.setRootNode=function(r){if(this.oRootNode===r){return}if(this.oRootNode){this._ondetach()}this.oRootNode=r;if(this.getContent().length>0){this.invalidate()}if(this.oRootNode){this._onattach()}};
sap.ui.core.UIArea.prototype.getRootNode=function(){return this.oRootNode};
sap.ui.core.UIArea.prototype.setRootControl=function(r){this.removeAllContent();this.addContent(r)};
sap.ui.core.UIArea.prototype.getRootControl=function(i){var c=this.getContent();if(c.length>0){if(i>=0&&i<c.length){return c[i]}return c[0]}return null};
sap.ui.core.UIArea.prototype._addRemovedContent=function(d){if(this.oRootNode&&d){this.aContentToRemove.push(d)}};
sap.ui.core.UIArea.prototype.addContent=function(c,_){this.addAggregation("content",c,_);if(_!==true){this.invalidate()}return this};
sap.ui.core.UIArea.prototype.removeContent=function(c,_){var C=this.removeAggregation("content",c,_);if(!_){var d;if(C&&C.getDomRef){d=C.getDomRef()}this._addRemovedContent(d)}return C};
sap.ui.core.UIArea.prototype.removeAllContent=function(){var c=this.removeAllAggregation("content");for(var i=0;i<c.length;i++){var d;var C=c[i];if(C&&C.getDomRef){d=C.getDomRef()}this._addRemovedContent(d)}return c};
sap.ui.core.UIArea.prototype.destroyContent=function(){var c=this.getContent();for(var i=0;i<c.length;i++){var d;var C=c[i];if(C&&C.getDomRef){d=C.getDomRef()}this._addRemovedContent(d)}this.destroyAggregation("content");return this};
sap.ui.core.UIArea.prototype.lock=function(){this.bLocked=true};
sap.ui.core.UIArea.prototype.unlock=function(){if(this.bLocked&&this.bNeedsRerendering){this.oCore.addInvalidatedUIArea(this)}this.bLocked=false};
sap.ui.core.UIArea.prototype.isLocked=function(){return this.bLocked};
sap.ui.core.UIArea.prototype.getBindingContext=function(){return null};
sap.ui.core.UIArea.prototype.isActive=function(){return jQuery.sap.domById(this.getId())!=null};
sap.ui.core.UIArea.prototype.invalidate=function(){this.addInvalidatedControl(this)};
sap.ui.core.UIArea.prototype.addInvalidatedControl=function(c){if(this.oRenderControl==this){return}if(!this.bNeedsRerendering){this.oCore.addInvalidatedUIArea(this)}var i=c.getId();if(c==this){this.oRenderControl=this;this.bNeedsRerendering=true;return}if(this.mInvalidatedControls[i]){return}if(!this.oRenderControl){this.mInvalidatedControls[i]=c;this.bNeedsRerendering=true}};
sap.ui.core.UIArea.prototype.rerender=function(f){if(f){this.bNeedsRerendering=true}if(this.bLocked||!this.bNeedsRerendering){return false}var t=this;jQuery.sap.measure.pause("rerenderAllUIAreas");jQuery.sap.measure.start(this.getId()+"---rerender","Rerendering of "+this.getMetadata().getName());if(this.oRenderControl==this){if(this.oRootNode){jQuery.sap.log.info("Rerendering of UI area: "+this.getId());sap.ui.core.RenderManager.preserveContent(this.oRootNode,false,this.bInitial);this.bInitial=false;function c(b,d){var l=b.length;var D;for(var i=0;i<l;i++){D=d?b[i].getDomRef():b[i];if(D&&!sap.ui.core.RenderManager.isPreservedContent(D)&&t.oRootNode===D.parentNode){jQuery(D).remove()}}return l};c(this.aContentToRemove);this.aContentToRemove=[];var C=this.getContent();var l=c(C,true);for(var i=0;i<l;i++){this.oCore.oRenderManager.render(C[i],this.oRootNode,true)}}else{jQuery.sap.measure.end(this.getId()+"---rerender");jQuery.sap.measure.resume("rerenderAllUIAreas");return false}}else{function a(A){while(A&&A!==t){if(t.mInvalidatedControls.hasOwnProperty(A.getId())){return true}A=A.getParent()}return false};for(var n in this.mInvalidatedControls){var o=this.oCore.byId(n);if(o&&!a(o.getParent())){o.rerender()}}}this.oRenderControl=null;this.mInvalidatedControls={};this.bNeedsRerendering=false;jQuery.sap.measure.end(this.getId()+"---rerender");jQuery.sap.measure.resume("rerenderAllUIAreas");return true};
sap.ui.core.UIArea.rerenderControl=function(c){var d=c?c.getDomRef():null;var p=d&&d.parentNode;if(p){var u=c.getUIArea();var r=u?u.oCore.oRenderManager:sap.ui.getCore().createRenderManager();jQuery.sap.log.info("Rerendering of control (using Core-RenderManager: "+(!!u)+"): "+c.getId());sap.ui.core.RenderManager.preserveContent(d,true,false);r.render(c,p)}else{jQuery.sap.log.warning("Couldn't rerender '"+c.getId()+"', as its DOM location couldn't be determined")}};
sap.ui.core.UIArea.prototype._handleEvent=function(e){var E=null;E=jQuery(e.target).control(0);if(E===null){return}if((e.originalEvent||e)._sapui_handledByUIArea){(e.originalEvent||e)._sapui_firstUIArea=false;return}(e.originalEvent||e)._sapui_firstUIArea=true;e.srcControl=E;this.oCore._handleControlEvent(e,this.getId());if(this.bLocked||this.oCore.isLocked()){return}var a=[];if(e.getPseudoTypes){a=e.getPseudoTypes()}a.push(e.type);while(E&&E instanceof sap.ui.core.Element&&E.isActive()&&!e.isPropagationStopped()){for(var i=0,b=a.length;i<b;i++){var t=a[i];e.type=t;e.currentTarget=E.getDomRef();E._handleEvent(e);if(e.isImmediatePropagationStopped()){break}}if(e.isPropagationStopped()){break}if(E.bStopEventBubbling){break}var d=E.getDomRef();if(!d){break}d=d.parentNode;E=null;while(d&&d!==this.getRootNode()){if(d.id){E=jQuery(d).control(0);if(E){break}}d=d.parentNode}}e.currentTarget=this.getRootNode();(e.originalEvent||e)._sapui_handledByUIArea=true;if(e.isPropagationStopped()){jQuery.sap.log.debug("'"+e.type+"' propagation has been stopped")}var n=e.type;if(n!="mousemove"&&n!="mouseover"&&n!="scroll"&&n!="mouseout"){var o=jQuery(e.target).control(0);if(o){jQuery.sap.log.debug("Event fired: '"+e.type+"' on "+o,"","sap.ui.core.UIArea")}else{jQuery.sap.log.debug("Event fired: '"+e.type+"'","","sap.ui.core.UIArea")}}};
sap.ui.core.UIArea.prototype._onattach=function(){var d=this.getRootNode();if(d==null){return}jQuery(d).attr("data-sap-ui-area",d.id).bind(jQuery.sap.ControlEvents.join(" "),jQuery.proxy(this._handleEvent,this))};
sap.ui.core.UIArea.prototype._ondetach=function(){var d=this.getRootNode();if(d==null){return}jQuery(d).removeAttr("data-sap-ui-area").unbind()};
sap.ui.core.UIArea.prototype.clone=function(){throw new Error("UIArea can't be cloned")};
