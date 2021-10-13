// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
  if (num === 1) {
    return '';
  } else {
    return 's';
  }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

const start = parseInt(thingInput.value);
// Write your code here
thingCountOutput.textContent = `You added ${start} thing${addS(start)}`;

thingInput.addEventListener('input', (event) => {
  const val = parseInt(event.target.value);
  thingCountOutput.textContent =
    `You added ${val} thing${addS(val)}`;
});
