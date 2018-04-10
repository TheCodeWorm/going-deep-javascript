var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var shoppingList = [];

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement("BUTTON");
	newButton.className = "listItem";
	newButton.appendChild(document.createTextNode(input.value));
	li.appendChild(newButton);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);