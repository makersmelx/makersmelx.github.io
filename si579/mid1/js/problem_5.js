const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector(
  '#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
  fetch(`https://api.datamuse.com/words?${(new URLSearchParams(
    { rel_rhy })).toString()}`).
    then((response) => response.json()).
    then((data) => {
      callback(data);
    }, (err) => {
      console.error(err);
    });
}

const clearList = () => {
  while (rhymesOutput.children.length > 0) {
    rhymesOutput.removeChild(
      rhymesOutput.children[0]);
  }
};
showRhymesButton.addEventListener('click', () => {
  clearList();
  getRhymes(wordInput.value, (data) => {
    if (data.length === 0) {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'No Rhymes';
      rhymesOutput.appendChild(errorMessage);
    }
    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = item.word;
      rhymesOutput.appendChild(listItem);
    });
  });
});

clearButton.addEventListener('click', () => {
  clearList();
  wordInput.value = '';
});

// Write your code here
