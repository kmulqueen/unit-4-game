$(document).ready(function () {

    // Declaring variables
    var wins = 0,
        losses = 0,
        userScore = 0,
        randomNumber = getRandomInt(),
        crytalRandomValue1 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue2 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue3 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue4 = Math.floor(Math.random() * 12) + 1;

    // New Game function
    function newGame() {
        userScore = 0,
        randomNumber = getRandomInt(),
        crytalRandomValue1 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue2 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue3 = Math.floor(Math.random() * 12) + 1,
        crytalRandomValue4 = Math.floor(Math.random() * 12) + 1;
    };

    // Generate random number between 19 and 120.
    function getRandomInt(min, max) {
        var number = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("#random-number").html(number);
        return number;
    };

    // Make crystal images clickable and add calculations.
    $("#crystal-1").on("click", function () {
        userScore += crytalRandomValue1;
        $("#user-score").html(userScore);
        winLose();
    });
    $("#crystal-2").on("click", function () {
        userScore += crytalRandomValue2
        $("#user-score").html(userScore);
        winLose();
    });
    $("#crystal-3").on("click", function () {
        userScore += crytalRandomValue3;
        $("#user-score").html(userScore);
        winLose();
    });
    $("#crystal-4").on("click", function () {
        userScore += crytalRandomValue4;
        $("#user-score").html(userScore);
        winLose();
    });

    // If user-score is greater than random-number, they lose.
    function winLose() {
        if (userScore === randomNumber) {
            wins++;
            $("#wins").html(wins);
            newGame();
            $("#user-score").html(0);
            alert("You Win!");
        } else if (userScore > randomNumber) {
            losses++;
            $("#losses").html(losses);
            newGame();
            $("#user-score").html(0);
            alert("You Lost. Try again!");
        };
    };

});