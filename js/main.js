console.log("js ingeladen");
const rockchoice = document.querySelector(".rock");
const paperchoice = document.querySelector(".paper");
const scizzorchoice = document.querySelector(".scizzor");
const playerName = document.querySelector(".playerName");
const button = document.querySelector("button")
const choices = ["rock", "paper", "scizzor"];
let playerImg = document.querySelector(".rlPlayer")
let botImg = document.querySelector(".bot")
let result = document.querySelector(".result")
let playerPoints = document.querySelector(".playerPoints")
let botPoints = document.querySelector(".botPoints")



let botChoice = "";


class player {
    constructor(name, points) {
        this.name = name;
        this.points = points;
    }
}

let me = new player("player", 0);
let bot = new player("bot", 0);
playerName.innerHTML = me.name;
botPoints.innerHTML = bot.points;
playerPoints.innerHTML = me.points;







rockchoice.addEventListener("click", () => {playerDecision(playerImg, "rock")})
paperchoice.addEventListener("click", () => { playerDecision(playerImg, "paper")})
scizzorchoice.addEventListener("click", () => {playerDecision(playerImg, "scizzor")})
button.addEventListener("click", () => {startRound()})


function changeImg(img, pl) {
    switch(img) {
        case "rock":
            pl.innerHTML = '<img src="/img/rock.png">';
            break;
        case "paper":
            pl.innerHTML = '<img src="/img/paper.png">';
            break;
        case "scizzor":
            pl.innerHTML = '<img src="/img/scizor.jpg">';
            break;
    }
}

function playerDecision(thrower, hand) {
    playerChoice = hand;
    changeImg(playerChoice, thrower);
    console.log("keuze is " + playerChoice)
}



function botDecision() {
    botChoice = choices[parseInt((Math.random() * 3))]
    changeImg(botChoice, botImg)
}

function startRound() {
    botDecision();

    if(playerChoice == botChoice) {
        result.innerHTML = '<h3 class="text-warning">you tied</h3>';
    }
    else if(
    (playerChoice == "rock" && botChoice == "scizzor") ||
    (playerChoice == "scizzor" && botChoice == "paper") ||
    (playerChoice == "paper" && botChoice == "rock") 
    ) 
    {
    result.innerHTML = '<h3 class="text-success">you WON!!!!!11!!11!! YIPPIE</h3>';
    me.points++;
    }
    else {
        result.innerHTML = '<h3 class="text-danger">you lost! WAAAAAAAAAAAAAAAAAAAAAAH, cry about it, bitch</h3>'
        bot.points++
    }
}



