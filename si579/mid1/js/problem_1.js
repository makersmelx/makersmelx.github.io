//FIX THE CODE BELOW WITH A MINIMAL EDIT
const btn = document.querySelector('#problem-1 #clickable-button');

function onClickButton() {
    document.getElementById("clicked-feedback").textContent = "You clicked the button!";
}

btn.addEventListener('click', onClickButton);
