var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function toggleDone() {
	if (this.className == "done listItem")
		this.className = "listItem";
	else this.className = "done listItem";
}

function clearStrikes() { 
	var iList = document.getElementById("itemsList").getElementsByTagName("li");
	for (var i=iList.length-1; i>=0; i--) {
	  if (iList[i].firstChild.className === "done listItem") {
			  iList[i].parentNode.removeChild(iList[i]);  	
		}
	}
}

function clearList() {
	var iList = document.getElementById("itemsList").getElementsByTagName("li");
	for (var i=iList.length-1; i >= 0; i--) {
	  iList[i].parentNode.removeChild(iList[i]);  
	}
}

function addToListElement() {
	/*
	// this piece of code appends to end of list
	var newButton = document.createElement("BUTTON");
	newButton.appendChild(document.createTextNode(input.value));
	newButton.addEventListener("click", toggleDone);
	newButton.className = "listItem";
	//ul.appendChild(document.createElement("li")).appendChild(newButton);
	ul.appendChild(document.createElement("li")).appendChild(newButton);
	*/
	/*
	var newItem = document.createElement("Li");
  var textnode = document.createTextNode(input.value);
  newItem.appendChild(textnode);
  */

  // this piece of code inserts element at beginnning
  var newItem = document.createElement("Li");
  var newButton = document.createElement("BUTTON");
  newButton.appendChild(document.createTextNode(input.value));
	newButton.addEventListener("click", toggleDone);
	newButton.className = "listItem";
  newItem.appendChild(newButton);
  
  var list = document.getElementById("itemsList");
  list.insertBefore(newItem, list.childNodes[0]);
	input.value = "";
}

function addListAfterClick() {
	if (input.value.length > 0) {
		addToListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		addToListElement();
	}
}

document.getElementById("clearAll").addEventListener("click", clearList);
document.getElementById("enter").addEventListener("click", addListAfterClick);
document.getElementById("clear").addEventListener("click", clearStrikes);
input.addEventListener("keypress", addListAfterKeypress);