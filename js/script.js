
"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
  // initialize variables and constant
	let answer = ""
	const MIN = 15
  
// get user input
	let guess = parseInt(document.getElementById('guess').value)

  	// if guess is right says correct
	if (guess >= MIN) {
		answer = "Hot!!!"
	} 
	//if not says incorrect	
	else {
		answer = "Cold. Bring a sweater."
	}

  // display the results
  document.getElementById('answer').innerHTML = answer
}