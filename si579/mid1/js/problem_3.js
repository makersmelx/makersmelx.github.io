const clickCountButton = document.querySelector('#problem-3 #click-count');

let count = 0;

clickCountButton.addEventListener('click', () => {
  count += 1;
  clickCountButton.textContent =
    `You clicked the button ${count} time${addS(count)}`;
});

// write your code here
