var randomResult;
var loss = 0;
var win = 0;
var counter = 0;


//starts the game - set up within a "function"
var beginGame = function () {

    //empties the crystal
    $(".crystals").empty();

    var images = [
        "https://krystal.com/wp-content/uploads/2016/01/Logo_New.png",
        "https://media.bizj.us/view/img/11128488/unknown-2*750xx7680-4320-0-0.jpg", 
        "https://krystal.com/wp-content/uploads/2019/03/KRYS-69414-Scrambler_Bowls_SM.jpg", 
        "https://cdn.cltampa.com/files/base/scomm/cltampa/image/2019/06/640w/Screen_Shot_2019_06_19_at_1.21.11_PM.5d0a6f182a3af.jpg"
    ];

    //generates a new random number
    randomResult = Math.floor(Math.random() * 101) + 19;
    // console.log(randomResult);

    //adds the random number to the DOM
    $("#result").html("Random Result: " + randomResult);

    // loops 4 times, each time creating a random number
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        // created "div" for the random number along with 2 attributes
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "choice-random": random
        });

        
        //crystal.html(random);

        
        $(".crystals").append(crystal);

    }
        $("#counter").html("Current Score: " + counter);
}

    

//reload page
beginGame();


$(document).on("click", ".crystal", function () {


    var num = parseInt($(this).attr('choice-random'));
    counter += num;

    $("#counter").html("Current Score: " + counter);

    console.log(counter);
    if (counter > randomResult) {
        loss++;

        $("#loss").html("You are NOT the winner: " + loss);

        counter = 0;
        
        beginGame(); //if the "if" statement is "true" the user loses and the game resets
    }
    else if (counter === randomResult) {
        win++;

        $("#win").html("Way to go, you are a WINNER: " + win);

        counter = 0;

        beginGame(); //if the "if" statement is "false" then "else if" is "true," the user wins and the game resets
    }

});



// Pseudo Code

// A game with 4 crystals and a Random Result.
// Each crystal has a random number that changes every game.
// Each crystal will have a random number generated between 1 - 12.
// Create a function that generates a random number between 19 - 120.  
// This randomly generated number will change each time the game is reset or page reloaded.
// The number sequence of the buttons will randomly change each game.
// There will be a number bank with the total number from the user's button clicks.
// If the number total from the user's button clicks is greater than the randomly generated number, user loses.
// If the number total from the user's button clicks is equal to the randonly generated number, user wins.



