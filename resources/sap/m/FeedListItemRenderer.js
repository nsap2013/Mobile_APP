/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.FeedListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.FeedListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.FeedListItemRenderer.renderLIAttributes=function(r,f){r.addClass("sapMFeedListItemTitleDiv");if(f._showSeparators==sap.m.ListSeparators.None)r.addClass("sapMFeedListShowSeparatorsNone");else{r.addClass("sapMFeedListShowSeparatorsAll")}};
sap.m.FeedListItemRenderer.renderLIContent=function(r,f){var m=f.getId();var i=jQuery.device.is.desktop;r.write('<ARTICLE');r.writeControlData(f);r.addClass('sapMFeedListItem');r.writeClasses();r.write('>');if(!!f.getIcon()){r.write('<figure id="'+m+'-figure" class ="sapMFeedListItemFigure">');if(i&&!!f.getIconActive()){r.write('<a id="'+m+'-iconRef" ');r.writeAttribute('href','javascript:void(0);');r.write('>')}r.writeIcon(f.getIcon(),['sapMFeedListItemImage'],{id:m+'-icon',alt:f.getSender(),});if(i&&!!f.getIconActive()){r.write('</a>')}r.write('</figure>')}r.write('<DIV class= "sapMFeedListItemText ');if(!!f.getIcon()){r.write('sapMFeedListItemHasFigure ')}r.write('" >');r.write('<p id="'+m+'-text" class="sapMFeedListItemTextText">');if(!!f.getSender()){r.renderControl(f._getLinkControl());r.write(': ')}r.writeEscaped(f.getText(),true);r.write('</p class="sapMFeedListItemFooter">');r.write('<p class="sapMFeedListItemFooter">');if(!!f.getInfo()){r.write('<span class="sapMFeedListItemInfo">');r.writeEscaped(f.getInfo());r.write('</span>');if(!!f.getTimestamp()){r.write('<span class="sapMFeedListItemInterpunct">');r.write("&#x00B7");r.write('</span>')}}if(!!f.getTimestamp()){r.write('<span class="sapMFeedListItemTimestamp">');r.writeEscaped(f.getTimestamp());r.write('</span>')}r.write('</p>');r.write('</DIV>');r.write('</ARTICLE>')};
