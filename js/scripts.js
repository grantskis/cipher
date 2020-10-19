$(document).ready(function() {
    $("button").click(function() {
        const initial = prompt("Give me worrrrrds!!");

        function getWords(firstLetter, secondLetter) {
        return firstLetter + secondLetter;
        }

        const firstLetter = initial.substr(0,1).toUpperCase();
        const secondLetter = initial.substr(initial.length-1, initial.length).toUpperCase();
    
        const result = getWords(firstLetter, secondLetter);
    
        const revResult = result.charAt(1) + result.charAt(0);
    
        const posLetter = initial.charAt((initial.length / 2).toFixed());
    
        function finalWords() {
            return posLetter + initial + revResult;
        }
        $("img[src='img/walrus.png']").click(function() {
            alert(initial);
        });

        $("img[src='img/plant.png']").click(function() {
            alert(finalWords());
        });


    });
});
