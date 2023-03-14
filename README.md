# colors-flipper
## A Vanilla JS Project
Firstly, an array of colors is defined, which contains several color codes in hexadecimal format.

Then, two variables are declared, btn and color, which store references to HTML elements on the page. The btn variable stores the reference to a button element with an ID of "btn", and the color variable stores the reference to an HTML element with a class of "color".

Next, a function getRandomNumber() is defined which returns a random integer between 0 and the length of the colors array. This function is later used to select a random color from the colors array.

An event listener is added to the btn element, which listens for a "click" event. When the button is clicked, the event listener executes a callback function. The callback function does the following:

Calls the getRandomNumber() function to get a random integer between 0 and the length of the colors array.

Sets the background color of the body element to the color at the index of the random number generated above.

Sets the text content of the color element to the same color.

Therefore, when the button is clicked, the background color of the page changes to a random color from the array, and the name of the color is displayed in the text content of the color element.
