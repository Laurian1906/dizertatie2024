// ----------------- Memory Game Logic -----------------

// Step 1: Declaring the variables

// blockInner is the container of content of the card
var blockInnerElements = document.getElementsByClassName("block_inner");

// flippedCard represents the element of a card faced up
var flippedCard = null;

// gameScore counts the score
var gameScore = 0;

// A span holding the score
var score = document.getElementById("score")

// A boolean marking cardFacedUp or not.
var cardFacedUp = false;

// Count pairs
var countPairs = 0;

// This variable counts all the blocks ( cards )
var countBlocks = 0;

// This loop will itereate through blockInnerElements and will update countBlocks
for ( let c = 1; c < blockInnerElements.length + 1; c++ ){
    countBlocks = c;
}

// Step 2: Rotating the object
function rotateBlock(element) {
    // Rotate the card
    element.style.transform = 'rotateY(180deg)';


    // Step 3: Grabbing the id of the card

    var elementID = element.children[1].children[0].id;
    console.log(elementID);
    console.log(typeof(elementID));

    // Step 4: Memorize the flipped card in an object
    
    if (!flippedCard){
        flippedCard = {
            id: elementID, // id of the card
            element: element, // the element of the card
            isCopy: elementID.includes("original") ? false : true, // check if is copy
            isOriginal: elementID.includes("copy") ? false : true, // check if is original
        }

        console.log("First Card is faced up: ", flippedCard);
    }
    // Step 5: check if the cards are identical.
    else{
        // If the second card is identical with first card

        // Splitting the name of the card and its type:
        // for example: cat-original will be splitted in an array [cat, original]
        // selecting the first element of this array which is the animal
        var flippedCardAnimal = flippedCard.id.split('-')[0];
        var elementCardAnimal = elementID.split('-')[0];

        // Then it is comparing the two obtained strings
        if(flippedCardAnimal === elementCardAnimal){
            console.log("Cards are identical!");
            cardFacedUp = true;
            
            // Set flipped card to null
            if(flippedCard){
                flippedCard = null;
            }

            // Update de pairs counted.
            countPairs++;

            // Update the score
            gameScore++;
            
            // Show the score in the page
            score.innerHTML = gameScore;

        }
        // If they are not then turn them facing off.
        else{
            console.log("Cards are not identical!");

            // This function will turn the cards facing off after 1 second.
            setTimeout(function(){
                canClick = true;
                cardFacedUp = false;
                element.style.transform = 'rotateY(0deg)';
                flippedCard.element.style.transform = 'rotateY(0deg)';
                flippedCard = null;
            }, 1000);   
        }   
    }
    endGame();
}

// Step 6:
// This function will shuffle the cards
function shuffleCards() {

    // Declaring the container of the blocks ( cards )
    var container = document.querySelector('.block_container');
    
    // The cards are converted from NodeList to an Array
    var cards = Array.from(container.getElementsByClassName('block'));

    // This loop will iterate backwards from the last to the first element of the array
    // it is called the Knuth Shuffle
    for (var i = cards.length - 1; i > 0; i--) {
        
        // Initializing the j variable with a random number between 0 and variable i
        var j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // swap the current element with another random element from the array
    }

    
    container.innerHTML = ''; // get the container empty

    // Append the elements to the container
    cards.forEach(function(card) {
        container.appendChild(card);
    });
}

// Step 7:
// This function resets the game
function reset(){

    // Iterating through blockInnerElements
    // then rotating them to their initial position ( facing off )
    for (element of blockInnerElements){
        element.style.transform = 'rotateY(0deg)';
        element.style.pointerEvents = "auto";
    }

    // Reseting this variables
    flippedCard = null;
    gameScore = null;
    score.innerHTML = 0;
    congrats.innerHTML = "";

    // Calling the shuffleCards() method
    shuffleCards();

}

// Shuffle the cards again when the page loads.
shuffleCards();

// Step 8: Congratulate the player if he guesses all the pairs

function endGame(){
    if(cardFacedUp == true && gameScore === countPairs && gameScore == countBlocks/2){
        congrats.innerHTML = "Congratulations! Press reset to play again!"
    }
    else{
        console.log("Game is running. Play more!")
    }
}



