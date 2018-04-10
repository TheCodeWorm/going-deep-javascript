var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var shoppingList = [];

function removeFromListElement() {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function addToListElement() {
	var newButton = document.createElement("BUTTON");
	newButton.appendChild(document.createTextNode(input.value));
	newButton.addEventListener("click", removeFromListElement);
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
		var shoppingItem = {
			id: shoppingList.length,
	    name: input.value,
	    onStatus: false 
    }
    shoppingList.push(shoppingItem);
		addToListElement(shoppingItem);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);