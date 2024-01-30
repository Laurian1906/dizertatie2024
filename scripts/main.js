// ----------------- Memory Game Logic -----------------

// Step 1: Declaring the variables

// blockInner is the container of content of the card
var blockInnerElements = document.getElementsByClassName("block_inner");

// flippedCard represents the element of a card faced up
var flippedCard = null;

function rotateBlock(element) {
    // Rotate the card
    element.style.transform = 'rotateY(180deg)';

    // Grab de id of the card
    elementID = element.children[1].children[0].id;
    console.log(elementID);
    console.log(typeof(elementID));


    // Memorize the flipped card in an object
    if (!flippedCard){
        flippedCard = {
            id: elementID, // id of the card
            element: element, // the element of the card, we need this for later
            isCopy: elementID.includes("original") ? false : true, // check if is copy
            isOriginal: elementID.includes("copy") ? false : true // check if is original
        }

        console.log("First Card is faced up: ", flippedCard);
    }
    else{
        // If the second card is identical with first card

        elementCardAnimal = elementID.split('-')[0];
        flippedCardAnimal = flippedCard.id.split('-')[0];

        if(elementCardAnimal === flippedCardAnimal){
            console.log("Cards are identical!");
        }
        // If they are not then turn them facing off.
        else{
            console.log("Cards are not identical!");

            setTimeout(function(){
                element.style.transform = 'rotateY(0deg)';
                flippedCard.element.style.transform = 'rotateY(0deg)';
                flippedCard = null; // reset flipped card to null again
            }, 1000);
        }
    }

}

