// For testing....


var arr1 = ['Leslie', 'Carrie', 'Donna']
var str = ""
arr1.forEach( function (e) { str += (e+' ') });

var h = document.createElement("H1");
var t = document.createTextNode(str);
h.appendChild(t);
document.body.appendChild(h);