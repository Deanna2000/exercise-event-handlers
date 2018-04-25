/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/

let flightEl = document.querySelector("#flight")
let buttonFlight = document.querySelector("#activate-flight")


flightEl.addEventListener("click", handleClick)

//function to show the history of events that are happening
function handleClick (event){
    console.log(event)
}

//function to perform actions based on the event
function handleClassChange (){
    flightEl.classList.toggle("enabled")
    flightEl.classList.toggle("disabled")
}

//target the location (button)that you are acting upon
buttonFlight.addEventListener("click", handleClassChange)
/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/