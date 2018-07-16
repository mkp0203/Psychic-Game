// Global Variables
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var soFar = [];

// onkeydown event loop
document.onkeydown = function (event) {
    // local variables
    var userGuess = event.key;
    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (userOptions.indexOf(userGuess) > -1) {

        // user wins
        if (userGuess === compGuess) {
            wins++;
            guessesLeft = 10;
            soFar = [];
        }
        
        // users incorrect guess/losses
        if (userGuess !== compGuess) {
            guessesLeft--;
            soFar.push(userGuess.toUpperCase());
        }
        
        // remaining guesses reaches 0
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 10;
            soFar = [];
        }
    
        // store actions in the "events" variable and present on the DOM 
        var events =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Remaining: " + guessesLeft + "</p>" +
            "<p>Guesses: " + soFar + "</p>";

        // links the "events" variable to the html "#game"
        document.querySelector("#game").innerHTML = events;
    }
}