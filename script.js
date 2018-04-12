// For testing....

var arr = ['Leslie', 'Carrie', 'Donna']

var str = "";
arr.forEach( function (e) { str += (e+' ') });

console.log(str);
var h = document.createElement("H1");
var t = document.createTextNode(str);
h.appendChild(t);
document.body.appendChild(h);