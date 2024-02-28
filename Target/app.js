// Get the button element by its id
const myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', function(event) {
    // Log the event.target to the console
    console.log("Clicked Element:", event.target);

    // Change the text content of the clicked button
    event.target.innerHTML = '<h1>I am CLicked ..... Target is worked</h1>'
});
