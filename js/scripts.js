function getWords(firstLetter, secondLetter) {
    return firstLetter + secondLetter;
}

const initial = prompt("Give me worrrrrds!!");
const firstLetter = initial.substr(0,1).toUpperCase();
const secondLetter = initial.substr(initial.length-1, initial.length).toUpperCase();

const result = getWords(firstLetter, secondLetter);

const revResult = result.charAt(1) + result.charAt(0);

const posLetter = initial.charAt((initial.length / 2).toFixed());

function finalWords() {
    return posLetter + initial + revResult;
}


alert(finalWords());