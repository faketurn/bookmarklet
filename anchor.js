javascript:(function(){var uri=location.href;var doc=document;var body=document.body;var btn=createButton(doc);var inp=createInp(doc);var title=HTMLescape(document.title);var ta=createTA(doc,title,uri);var p=createP(doc);var div=createDiv(doc);div.appendChild(btn);p.appendChild(inp);div.appendChild(ta);div.appendChild(p);body.appendChild(div);ta.select();function syncTitle(){console.log(this.parentNode.previousSibling.value);var uri=location.href;var title=HTMLescape(this.value);this.parentNode.previousSibling.value=`<a href="${uri}">${title}</a>`;}function HTMLescape(s){s=s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\x22/g,'&quot;');return s;}function createInp(doc){var inp=doc.createElement('input');inp.value=doc.title;inp.id='title';inp.type='text';inp.style.width='100%';inp.style.boxSizing='border-box';inp.addEventListener('keyup',syncTitle);return inp}function createP(doc){var p=doc.createElement('p');p.appendChild(document.createTextNode("タイトル"));return p}function createTA(doc,title,uri){var ta=doc.createElement('textarea');ta.appendChild(document.createTextNode(`<a href="${uri}">${title}</a>`));ta.style.display='block';ta.style.padding='2px';ta.style.width='100%';ta.style.boxSizing='border-box';ta.style.height='30vh';ta.style.textAlign='left';ta.style.fontFamily='consolas';ta.style.fontSize='13px';ta.style.backgroundColor='#fff';return ta}function createDiv(doc){var div=doc.createElement('div');div.style.position='fixed';div.style.top='5%';div.style.right='5%';div.style.zIndex='99999';div.style.width='35%';div.style.minWidth="20em";div.style.height='auto';div.style.padding='0 10px 2px';div.style.fontSize='x-small';div.style.backgroundColor='#ddd';div.style.border='outset 1px ButtonFace';div.style.boxShadow='0 0 15px#eee';return div}function createButton(doc){var btn=doc.createElement('button');btn.appendChild(document.createTextNode("×"));btn.type='button';btn.value='close';btn.style.display='block';btn.style.padding='0';btn.style.color='#555';btn.style.fontSize='30px';btn.style.border='none';btn.style.background='none';btn.style.float='right';btn.style.width='30px';btn.style.margin='0-9px 0 0';btn.addEventListener('click',removeDiv,false);return btn}function removeDiv(){var div=this.parentNode;div.parentNode.removeChild(div);}})()