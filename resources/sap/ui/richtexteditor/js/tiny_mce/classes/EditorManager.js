/**
 * EditorManager.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */
(function(a){var b=a.each,d=a.extend,D=a.DOM,E=a.dom.Event,T=a.ThemeManager,P=a.PluginManager,h=a.explode,j=a.util.Dispatcher,m,q=0;a.documentBaseURL=window.location.href.replace(/[\?#].*$/,'').replace(/[\/\\][^\/]+$/,'');if(!/[\/\\]$/.test(a.documentBaseURL))a.documentBaseURL+='/';a.baseURL=new a.util.URI(a.documentBaseURL).toAbsolute(a.baseURL);a.baseURI=new a.util.URI(a.baseURL);a.onBeforeUnload=new j(a);E.add(window,'beforeunload',function(e){a.onBeforeUnload.dispatch(a,e)});a.onAddEditor=new j(a);a.onRemoveEditor=new j(a);a.EditorManager=d(a,{editors:[],i18n:{},activeEditor:null,init:function(s){var t=this,p,g=a.ScriptLoader,e,i=[],k;function o(c){var f=c.id;if(!f){f=c.name;if(f&&!D.get(f)){f=c.name}else{f=D.uniqueId()}c.setAttribute('id',f)}return f};function r(c,n,s){var f=c[n];if(!f)return;if(a.is(f,'string')){s=f.replace(/\.\w+$/,'');s=s?a.resolve(s):0;f=a.resolve(f)}return f.apply(s||this,Array.prototype.slice.call(arguments,2))};function u(n,c){return c.constructor===RegExp?c.test(n.className):D.hasClass(n,c)};t.settings=s;E.bind(window,'ready',function(){var l,c;r(s,'onpageload');switch(s.mode){case"exact":l=s.elements||'';if(l.length>0){b(h(l),function(v){if(D.get(v)){k=new a.Editor(v,s);i.push(k);k.render(1)}else{b(document.forms,function(f){b(f.elements,function(e){if(e.name===v){v='mce_editor_'+q++;D.setAttrib(e,'id',v);k=new a.Editor(v,s);i.push(k);k.render(1)}})})}})}break;case"textareas":case"specific_textareas":b(D.select('textarea'),function(f){if(s.editor_deselector&&u(f,s.editor_deselector))return;if(!s.editor_selector||u(f,s.editor_selector)){k=new a.Editor(o(f),s);i.push(k);k.render(1)}});break;default:if(s.types){b(s.types,function(f){b(D.select(f.selector),function(n){var v=new a.Editor(o(n),a.extend({},s,f));i.push(v);v.render(1)})})}else if(s.selector){b(D.select(s.selector),function(f){var n=new a.Editor(o(f),s);i.push(n);n.render(1)})}}if(s.oninit){l=c=0;b(i,function(k){c++;if(!k.initialized){k.onInit.add(function(){l++;if(l==c)r(s,'oninit')})}else l++;if(l==c)r(s,'oninit')})}})},get:function(i){if(i===m)return this.editors;if(!this.editors.hasOwnProperty(i))return m;return this.editors[i]},getInstanceById:function(i){return this.get(i)},add:function(e){var s=this,c=s.editors;c[e.id]=e;c.push(e);s._setActive(e);s.onAddEditor.dispatch(s,e);if(a.adapter)a.adapter.patchEditor(e);return e},remove:function(e){var t=this,i,c=t.editors;if(!c[e.id])return null;delete c[e.id];for(i=0;i<c.length;i++){if(c[i]==e){c.splice(i,1);break}}if(t.activeEditor==e)t._setActive(c[0]);e.destroy();t.onRemoveEditor.dispatch(t,e);return e},execCommand:function(c,u,v){var t=this,e=t.get(v),w;function f(){e.destroy();w.detachEvent('onunload',f);w=w.tinyMCE=w.tinymce=null};switch(c){case"mceFocus":e.focus();return true;case"mceAddEditor":case"mceAddControl":if(!t.get(v))new a.Editor(v,t.settings).render();return true;case"mceAddFrameControl":w=v.window;w.tinyMCE=tinyMCE;w.tinymce=a;a.DOM.doc=w.document;a.DOM.win=w;e=new a.Editor(v.element_id,v);e.render();if(a.isIE){w.attachEvent('onunload',f)}v.page_window=null;return true;case"mceRemoveEditor":case"mceRemoveControl":if(e)e.remove();return true;case'mceToggleEditor':if(!e){t.execCommand('mceAddControl',0,v);return true}if(e.isHidden())e.show();else e.hide();return true}if(t.activeEditor)return t.activeEditor.execCommand(c,u,v);return false},execInstanceCommand:function(i,c,u,v){var e=this.get(i);if(e)return e.execCommand(c,u,v);return false},triggerSave:function(){b(this.editors,function(e){e.save()})},addI18n:function(p,o){var l,i=this.i18n;if(!a.is(p,'string')){b(p,function(o,c){b(o,function(o,g){b(o,function(o,k){if(g==='common')i[c+'.'+k]=o;else i[c+'.'+g+'.'+k]=o})})})}else{b(o,function(o,k){i[p+'.'+k]=o})}},_setActive:function(e){this.selectedInstance=this.activeEditor=e}})})(tinymce);
