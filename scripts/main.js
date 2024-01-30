// ----------------- Memory Game Logic -----------------

// Step 1: Declaring the variables

// blockInner is the container of content of the card
var blockInnerElements = document.getElementsByClassName("block_inner");

// flippedCard represents the element of a card faced up
var flippedCard = null;

// counter counts the score
var gameScore = 0;

// A span holding the score
var score = document.getElementById("score")

// Step 2: Rotating the object
function rotateBlock(element) {
    // Rotate the card
    element.style.transform = 'rotateY(180deg)';


    // Step 3: Grabbing the id of the card

    var elementID = element.children[1].children[0].id;
    console.log(elementID);
    console.log(typeof(elementID));

    // Step 4: Memorize the flipped card in an object AND
    
    if (!flippedCard){
        flippedCard = {
            id: elementID, // id of the card
            element: element, // the element of the card, we need this for later
            isCopy: elementID.includes("original") ? false : true, // check if is copy
            isOriginal: elementID.includes("copy") ? false : true // check if is original
        }

        console.log("First Card is faced up: ", flippedCard);
    }
    // Step 5: check if the cards are identical.
    else{
        // If the second card is identical with first card

        var flippedCardAnimal = flippedCard.id.split('-')[0];
        var elementCardAnimal = elementID.split('-')[0];

        if(flippedCardAnimal === elementCardAnimal){
            console.log("Cards are identical!");

            if(flippedCard){
                flippedCard = null;
            }

            gameScore++;
            console.log(gameScore);
            score.innerHTML = gameScore;

        }
        // If they are not then turn them facing off.
        else{
            console.log("Cards are not identical!");

            setTimeout(function(){
                element.style.transform = 'rotateY(0deg)';
                console.log("Element: ");
                console.log(element);
                flippedCard.element.style.transform = 'rotateY(0deg)';
                console.log("Element of flipped card: ");
                console.log(flippedCard);

                flippedCard = null;
            }, 1000);   
        }   
    }
}

function shuffleCards() {
    var container = document.querySelector('.block_container');
    var cards = Array.from(container.getElementsByClassName('block'));

    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap între elementele alese aleatoriu și elementul curent
    }

    // Reatașează elementele amestecate la container
    container.innerHTML = ''; // Golește containerul
    cards.forEach(function(card) {
        container.appendChild(card);
    });
}

// This function resets the game
function reset(){

    for (element of blockInnerElements){
        element.style.transform = 'rotateY(0deg)'
    }

    flippedCard = null;
    gameScore = null;
    score.innerHTML = 0;

    shuffleCards();

}

shuffleCards();