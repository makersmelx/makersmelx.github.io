/*
* Excercise 1
*
*/

/*
* Then write a function that changes the text and the color inside the div
*
*/

const colorBlock = document.getElementById('color-block');
const currentColor = colorBlock.style.backgroundColor;
const currentColorDisplay = document.getElementById('color-name').textContent;
colorBlock.addEventListener('click', () => {

  if (colorBlock.style.backgroundColor === currentColor) {
    colorBlock.style.backgroundColor = '#39C5BB';
    document.getElementById('color-name').textContent =
      '#39C5BB';
  } else {
    colorBlock.style.backgroundColor = currentColor;
    document.getElementById('color-name').textContent =
      currentColorDisplay;
  }
});

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

const button = document.getElementById('convertbtn');
button.addEventListener('click', () => {
  console.log(document.getElementById('f-input').value);
  const input = parseFloat(document.getElementById('f-input').value);
  document.getElementById('c-output').textContent =
    ((input - 32) * 5 / 9).toString();
});

function convertTemp() {
  //Calculate the temperature here

  //Send the calculated temperature to HTML

}


