let roundsNum = document.querySelector(".rounds__num");

// result variable
let gamerResult = document.querySelector(".gamer__result");
let tiesResult = document.querySelector(".ties__result");
let computerResult = document.querySelector(".computer__result");

// img variable
let gamerImg = document.querySelector(".gamer__img");
let computerImg = document.querySelector(".computer__img");

// btns variable
let rockBtn = document.querySelector(".rock__btn");
let paperBtn = document.querySelector(".paper__btn");
let scissorsBtn = document.querySelector(".scissors__btn");

let countingBtn = document.querySelectorAll(".count__btn");
let CountButtonClicks = 0;

let gamerNameResult = document.querySelector(".gamer__name");

let gamerName = prompt("Ismingizni kiriting");

function nameGamer(name){
    gamerNameResult.innerHTML = `Ishtirokchi ismi: ${name}`
}

nameGamer(gamerName)


function counting(){
    CountButtonClicks += 1;
    roundsNum.innerHTML = CountButtonClicks
}





