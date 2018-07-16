var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];

document.onkeydown = function (event) {
    var userGuess = event.key;
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 10;
        soFar = [];
    }
    
    if (userGuess !== compGuess) {
        guessesLeft--;
        soFar.push(userGuess.toUpperCase());
    }
    
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        soFar = [];
    }
    
    for (var i = 0; i < soFar.length; i++) {
        
    }

    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Remaining: " + guessesLeft + "</p>" +
        "<p>Guesses: " + soFar + "</p>";

    document.querySelector("#game").innerHTML = html;
}