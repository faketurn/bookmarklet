javascript:(function(){p=prompt('search','');s=new RegExp(p,'g');d=prompt('replace','');if(s && d){document.body.innerHTML=document.body.innerHTML.replace(s,d);}})()

// ダイアログで置換候補と置換内容を指定できる。/