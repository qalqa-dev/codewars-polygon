const keyPhrasesDictionary = {
  self_position: "I'm in",
  front_is: 'The man in front of me is',
  behind_is: 'The man behind me is',
  count_front: 'people in front of me',
  count_behind: 'people behind me',
};

const normalizedNumbers = {
  '1st': 1,
  '2nd': 2,
};

function findOutMrWrong(conversation) {
  function getType(phrase) {
    for (const [key, value] of Object.entries(keyPhrasesDictionary)) {
      if (phrase.includes(value)) {
        return key;
      }
    }
  }

  function getValue(phrase) {
    for (const [key, value] of Object.entries(normalizedNumbers)) {
      if (getType(phrase) === 'self_position' || phrase.includes(value)) {
        return value;
      } else if (getType(phrase) === 'front_is') {
        return phrase
          .split(keyPhrasesDictionary['front_is'])[1]
          .replace(/\.+$/, '')
          .trim();
      } else if (getType(phrase) === 'behind_is') {
        return phrase
          .split(keyPhrasesDictionary['behind_is'])[1]
          .replace(/\.+$/, '')
          .trim();
      }
    }
  }

  return conversation
    .map((phrase) => phrase.split(':'))
    .map((pair) => ({
      speaker: pair[0],
      type: getType(pair[1]),
      value: getValue(pair[1]),
      content: pair[1],
    }));
}

conversation = [
  "John:I'm in 1st position.",
  "Peter:I'm in 2nd position.",
  "Tom:I'm in 1st position.",
  'Peter:The man behind me is Tom.',
];

console.log(findOutMrWrong(conversation));
