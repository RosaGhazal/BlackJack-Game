let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
    name: "Rosa",
    chips: 145   
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    let randomNum = Math.floor(Math.random() *13) +1;
    if (randomNum >10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum;
    }
}

function startGame(){
  renderGame();
}


function renderGame() {
    
    cardsEl.textContent = "Cards: ";

    for ( let i=0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do ou want to draw a new card?";
    } else if (sum === 21){
        message = "Wohooo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }

    messageEl.textContent = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false)
    {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}