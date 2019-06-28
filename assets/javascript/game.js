var randomResult;
var loss;
var win;
var counter = 0;




randomResult = Math.floor(Math.random() * 101) + 19;
// console.log(randomResult);

$("#result").html("Random Result: " + randomResult);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);
}


$(".crystal").on("click", function() {
    
    
    var num = parseInt($(this).attr('data-random'));
    counter += num;

    console.log(counter);
    
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



