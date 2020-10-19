const getWords = function() {
const initial = prompt("Give me worrrrrds!!");
const firstLetter = toUpperCase(initial.substr(0,1));
const secondLetter = toUpperCase(initial.substr(initial.length-1, initial.length));
};

getWords();

const result = concat(firstLetter, secondLetter);
alert(result);