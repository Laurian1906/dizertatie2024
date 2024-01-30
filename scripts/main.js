/* Rotate the block */
var blockInner = document.getElementsByClassName("block_inner");
var imgID = document.getElementsByClassName("block_back")[0].children;

function rotateBlock(element){
    element.style.transform = 'rotateY(180deg)';
    console.log("block is showing the image: ", element);
}

function rotateBlockInitialPosition(element) {

    // Check if innerBlock is found before accessing its style
    if (element) {
        element.style.transform = 'rotateY(0deg)';
        console.log(element);
        // setTimeout(2000);
        // console.log("block is hiding the image");
    } else {
        console.error("Inner block not found inside the element:", element);
    }
}

// for ( let i = 0; i < blockInner.length; i++){
//     blockInner[i].addEventListener("click", function(){
//         rotateBlock(this);

//         for (let j = 0; j < blockInner.length; j++) {
//             if (blockInner[j] !== this) {
//                 rotateBlockInitialPosition(blockInner[j]);
//             }
//             else if (blockInner[j] === this) {
//                 console.log(":)");
//             }
//         }

//     });
// }

