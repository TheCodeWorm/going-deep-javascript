// For testing....


var nameArray = ['Leslie', 'Carrie', 'Donna']
//arr1.forEach( function (e) { str += (e+' ') });
function myFunction(arr) {
	var str = "";
	for (var i=0; i<arr.length; i++) {
		str += ( arr[i] + ' ' );
	}
	return str;
};
var str = myFunction(nameArray);
console.log(str);
var h = document.createElement("H1");
var t = document.createTextNode(str);
h.appendChild(t);
document.body.appendChild(h);