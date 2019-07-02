var randomResult;
var loss = 0;
var win = 0;
var counter = 0;


//starts the game - set up within a "function"
var beginGame = function () {

    //empties the crystal
    $(".crystals").empty();
    var images = [
        "https://fastly.4sqi.net/img/general/200x200/25195413_DukCFlLVwUByduGFX6wYh4qfiskSREUGrCw9Gc-c_nI.jpg",
        "https://fastly.4sqi.net/img/general/200x200/1439202_O2kllp5AR-GAi57-Opbve2P56hQ-VWcr7L6WKLzqxgM.jpg",
        "https://krystal.com/wp-content/uploads/2019/06/AYCE_496x638.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMauG0XgOelwN5vOpFmJD1Yi-YttBHS-9l9f7JQeEpgq7XYG9Qtg",
    ]

         

    //generates a new random number
    randomResult = Math.floor(Math.random() * 101) + 19;
    // console.log(randomResult);

    //adds the random number to the DOM
    $("#result").html("Krystal Burgers: " + randomResult);

    //loops 4 times, each time creating a random number
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        // created "div" for the random number along with 2 attributes
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "choice-random": random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover",
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

    //console.log(counter);
    if (counter > randomResult) {
        loss++;

        $("#loss").html("Losses: " + loss);

        counter = 0;
        
        beginGame(); //if the "if" statement is "true" the user loses and the game resets
    }
    else if (counter === randomResult) {
        win++;

        $("#win").html("Wins: " + win);

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



