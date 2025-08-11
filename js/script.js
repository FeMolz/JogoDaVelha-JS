let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelectorAll("#message");
let messageText = document.querySelectorAll("#message p");
let secondPlayer;

// verfica o player
function checkEl(player1, player2) {
    if(player1 == player2) {
            el = x;
        } else {
            el = o;
        }
        return el;
}


// contador de jogadas

let player1 = 0 
let player2 = 0 

// clickEvent box

for(let i = 0; i < boxes.length; i++) {

    // click
    boxes[i].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        // verifica se o box já tem X ou O
        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
    
            this.appendChild(cloneEl)
    
            // armazenar jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }

    });
}