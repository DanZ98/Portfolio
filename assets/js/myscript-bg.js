// prevents users drag images on desktop

document.oncontextmenu = function(e){
     var target = (typeof e !="undefined")? e.target: event.srcElement
     if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
         return false
 }