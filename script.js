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
	var newButton = document.createElement("BUTTON");
	newButton.appendChild(document.createTextNode(input.value));
	newButton.addEventListener("click", toggleDone);
	newButton.className = "listItem";
	ul.appendChild(document.createElement("li")).appendChild(newButton);
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