function getWords(firstLetter, secondLetter) {
    return firstLetter + secondLetter;
}

const initial = prompt("Give me worrrrrds!!");
const firstLetter = initial.substr(0,1).toUpperCase();
const secondLetter = initial.substr(initial.length-1, initial.length).toUpperCase();

const result = getWords(firstLetter, secondLetter);
console.log(result);

// const revResult1 = result.charAt(1);
// const revResult2 = result.charAt(0);
// alert(revResult1 + revResult2);
const revResult = result.charAt(1) + result.charAt(0);
console.log(revResult);