var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var shoppingList = [];
function updateListElements() {
	;
}

function removeListElement() {
	console.log("testing");
}

function createListElement(item) {
	var li = document.createElement("li");
	var newButton = document.createElement("BUTTON");
	newButton.className = "listItem";
	newButton.appendChild(document.createTextNode(input.value));
	newButton.addEventListener("click", removeListElement);
	li.appendChild(newButton);
	ul.appendChild(li);
	input.value = "";
	shoppingList.push(item);
}

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var shoppingItem = {
	    name: input.value,
	    onStatus: false 
    }
		createListElement(shoppingItem);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);