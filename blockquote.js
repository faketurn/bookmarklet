javascript:(function(){var depth=0;var t=HTMLescape(document.title);var url=location.href.replace(/&/g,'&amp;');traceFrames(window);function traceFrames(w){var flen=w.frames.length;var bodyTag=w.document.body.tagName.toLowerCase();if(flen&&bodyTag=='frameset'){depth=1;for(var i=0;i<flen;i++){traceFrames(w[i]);}}else{showQuoteMarkup(w);}}function showQuoteMarkup(w){var d=w.document;var src=getSrc(w);if(!src&&depth)return;var quote='<blockquote\u0020cite=\x22'+url+'\x22>\n'+src+'\n\n'+'<p\u0020class="cite"><a href=\x22'+url+'\x22><cite>'+t+'</cite></a></p>\n</blockquote>';var ta=createTA(d,quote);var div=createDiv(d);var btn=createButton(d);var body=d.body;div.appendChild(ta);div.appendChild(btn);body.appendChild(div);ta.select();}function getSrc(w){if(w.getSelection()=='')return'';var sel=w.getSelection().getRangeAt(0).cloneContents();var div=document.createElement('div');div.appendChild(sel);changeAttURItoAbs(div.getElementsByTagName('*'));var src,smpl=div.getElementsByTagName('*')[0];if(smpl&&smpl.namespaceURI){src=(new XMLSerializer).serializeToString(div);src=src.replace(/^[^>]*>/,'').replace(/<[^<]*$/,'');}else{src=div.innerHTML;}return src;}function changeAttURItoAbs(els){var attrs=['action','cite','data','href','longdesc','src'];for(var i=0;i<els.length;i++){var el=els[i];for(var j=0;j<attrs.length;j++){var attr=attrs[j];if(!el[attr])continue;el.setAttribute(attr,el[attr]);}}}function HTMLescape(s){s=s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\x22/g,'&quot;');return s;}function createTA(d,quote){var ta=d.createElement('textarea');ta.appendChild(document.createTextNode(quote));ta.style.display='block';ta.style.width='100%';ta.style.height='50vh';ta.style.textAlign='left';ta.style.fontFamily='monospace';ta.style.fontSize='15px';ta.style.backgroundColor='#fff';return ta;}function createDiv(d){var div=d.createElement('div');div.style.position='fixed';div.style.top='5%';div.style.right='5%';div.style.zIndex='100';div.style.width='35%';div.style.height='auto';div.style.padding='10px 10px 2px';div.style.fontSize='x-small';div.style.backgroundColor='ButtonFace';div.style.border='outset 2px ButtonFace';return div;}function createButton(d){var btn=d.createElement('button');btn.appendChild(document.createTextNode("close"));btn.type='button';btn.value='close';btn.style.display='block';btn.style.margin='0 auto';btn.style.backgroundColor='ButtonFace';btn.style.border='outset 2px ButtonFace';btn.addEventListener('click',removeDiv,false);return btn;}function removeDiv(){var div=this.parentNode;div.parentNode.removeChild(div);}})();