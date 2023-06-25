
//declaring variables 
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const ludo = document.querySelector(".dice");

//main variables 
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
score1.innerText = 0
score2.innerText = 0
current1.innerText = 0
current2.innerText = 0;


//switchPlayerr function
function switchP() {
    currentScore = 0;
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0
    }
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}


//button roll after click action
document.querySelector(".btn--roll").addEventListener("click", function () {
    //playing is true
    playing = true
    //generating random number
    const dice = Math.floor(Math.random() * 6) + 1
    ludo.src = "dice-" + dice + (".png")
    //checking if is not an conditions
    if (dice != 1) {
        //to display the images score into score as number
        currentScore += dice
        document.querySelector("#current--" + activePlayer).innerText = currentScore;

    }
    else {
        switchP()
    }

})

//button hold after click action
document.querySelector(".btn--hold").addEventListener("click", function () {
    //playing is still true
    playing = true
    //storing currentScore into scores to display their addition
    scores[activePlayer] += currentScore
    document.querySelector("#score--" + activePlayer).innerText = scores[activePlayer];
    //condition of if it is  100
    if (scores[activePlayer] >= 100) {
        ludo.classList.add("hidden");
        document.querySelector(".player--" + activePlayer).classList.add("player--winner");
        playing = false
    }
    else {
        switchP()
    }

})



//button newGame after click action
document.querySelector(".btn--new").addEventListener("click", function () {
    let scores = [0, 0];
    let currentScore = 0;
    let activePlayer = 0;
    score1.innerText = 0
    score2.innerText = 0
    current1.innerText = 0
    current2.innerText = 0;
})



 
