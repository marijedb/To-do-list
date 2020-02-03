var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// This function returns the length of the input field
function inputLength() {
	return input.value.length;
}

// This function creates a list element. 
// First it creates an "li" and a button. It gives the li a classname of "listItem" and the button a classname of "deleteButton". Then it will append the input text to the list deleteItem and the text "X" to the delete button. After this it will add the created list item to the "ul" and the button to the "li". To end the function the value of the input field will be set to a blank field. 
function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.classList.add("listItem");
	button.classList.add("deleteButton");
	li.appendChild(document.createTextNode(input.value + " "));
	button.appendChild(document.createTextNode("X"));
	ul.appendChild(li);
	li.appendChild(button);
	input.value = "";
}

// This function will create the list element when the user clicks on a button and the length of the input is greater than zero. 
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// This function will create the list element when the user presses the Enter key on his keyboard and the length of the input is greater than zero. 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// This function will toggle the clicked "li" to the state of "done", which will create a line trough. 
function toggleItemAfterClick(event) {
	var targetElement = event.target;
	if (targetElement.tagName.toUpperCase() === "LI") {
		targetElement.classList.toggle("done");
	}
}	

// This function will delete the list item when clicked on a button that belongs to that list item. 
function deleteItem(event){
	var targetElement = event.target;
	if(targetElement.tagName.toUpperCase() === "BUTTON") {
		targetElement.parentNode.remove(targetElement); 
	}
}

// Below the Event Listeners setup to respond to clicks or keypresses. 
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// This Event Listener will check if the event of the list item is on the delete button or on the list item itself and give a respons accordingly. 
ul.addEventListener("click", function(event){
    if(event.target.className === 'deleteButton'){
        deleteItem(event)
    }
    else if(event.target.className === 'listItem'){
        toggleItemAfterClick(event)
    }
});

// This function will create the date shown in the header of the webpage. 
function displayDate() {
	var now, day, months, month, year;
	
	now = new Date();

	day = now.getDay();

	months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
	month = now.getMonth();
	
	year = now.getFullYear();
	document.querySelector(".date").textContent = "To do lijst van: " + day + " " + months[month] + ' ' + year;
}

displayDate();

