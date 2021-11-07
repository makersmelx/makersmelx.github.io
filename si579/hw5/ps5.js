/**
 * Returns a list of objects grouped by some property. For example:
 * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
 *
 * returns:
 * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
 *    'red': [{name: 'Jack', team: 'red'}]
 * }
 *
 * @param {any[]} objects: An array of objects
 * @param {string|Function} property: A property to group objects by
 * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
 */
function groupBy(objects, property) {
  // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
  // value for property (obj[property])
  if (typeof property !== 'function') {
    const propName = property;
    property = (obj) => obj[propName];
  }

  const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
  for (const object of objects) {
    const groupName = property(object);
    //Make sure that the group exists
    if (!groupedObjects.has(groupName)) {
      groupedObjects.set(groupName, []);
    }
    groupedObjects.get(groupName).push(object);
  }

  // Create an object with the results. Sort the keys so that they are in a sensible "order"
  const result = {};
  for (const key of Array.from(groupedObjects.keys()).sort()) {
    result[key] = groupedObjects.get(key);
  }
  return result;
}

const rhymeButton = document.getElementById('show_rhymes');
const synonymButton = document.getElementById('show_synonyms');
const outputDescription = document.getElementById('output_description');
const savedWordsDisplay = document.getElementById('saved_words');
const input = document.getElementById('word_input');
const output = document.getElementById('word_output');

const savedWords = [];
savedWordsDisplay.textContent = `Saved words: (none)`;

const saveWordsWrapper = (word) => {
  return () => {
    savedWords.push(word);
    savedWordsDisplay.textContent = savedWords.join(',');
  };
};

const fetchRhymeWord = async () => {
  const inputWord = input.value;
  outputDescription.textContent = `Words that rhyme with ${inputWord}:`;
  output.textContent = '...loading';
  const data = await fetch(
    `https://api.datamuse.com/words?rel_rhy=${inputWord}`).
    then(resp => resp.json());
  output.textContent = '';
  if (data.length === 0) {
    output.textContent = '(no results)';
    return;
  }
  const ret = groupBy(data, 'numSyllables');
  Object.keys(ret).forEach((key) => {
    const title = document.createElement('h2');
    title.textContent = `${key} Syllable${key === '1' ? '' : 's'}`;
    const listWrapper = document.createElement('ul');
    ret[key].forEach((word) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      const nameTag = document.createElement('span');
      button.textContent = '(save)';
      button.className = 'btn btn-outline-success';
      button.addEventListener('click', saveWordsWrapper(word.word));
      nameTag.textContent = word.word;
      item.appendChild(nameTag);
      item.appendChild(button);
      listWrapper.appendChild(item);
    });
    output.appendChild(title);
    output.appendChild(listWrapper);
  });
};

const fetchSynonym = async () => {
  const inputWord = input.value;
  outputDescription.textContent = `Words with a similar meaning to ${inputWord}:`;
  output.textContent = '...loading';
  const data = await fetch(
    `https://api.datamuse.com	/words?ml=${inputWord}`).
    then(resp => resp.json());
  output.textContent = '';
  if (data.length === 0) {
    output.textContent = '(no results)';
    return;
  }
  const listWrapper = document.createElement('ul');
  data.forEach((word) => {
    const item = document.createElement('li');
    const nameTag = document.createElement('span');
    nameTag.textContent = word.word;
    const button = document.createElement('button');
    button.textContent = '(save)';
    button.className = 'btn btn-outline-success';
    button.addEventListener('click', saveWordsWrapper(word.word));
    item.appendChild(nameTag);
    item.appendChild(button);
    listWrapper.appendChild(item);
  });
  output.appendChild(listWrapper);
};

rhymeButton.addEventListener('click', fetchRhymeWord);
synonymButton.addEventListener('click', fetchSynonym);
document.addEventListener('keypress', async (e) => {
  if (e.code === 'Enter') {
    await fetchRhymeWord();
  }
});

