function Exam() {
	// store the subject user inputs
	var subject    = document.getElementById('Input').value
	
	// store the date the user inputs
	var date    = document.getElementById('Input2').value
	
	// create a text node from the user for the subject
	var text    = document.createTextNode(subject)
	
	// create a text node from the user for the subject
	var text2    = document.createTextNode(date)
	
	// create a li tag
	var newText = document.createElement('li')
	
	// add the user input to the li tag
	newText.appendChild(text)
	// append the li to the html todoList id tag
	document.getElementById('List').appendChild(newText)
	document.getElementById('DateList').appendChild(newText)
}
