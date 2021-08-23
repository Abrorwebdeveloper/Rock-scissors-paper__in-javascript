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

// gamer name function
let gamerNameResult = document.querySelector(".gamer__name");
let gamerName = prompt("Ismingizni kiriting");
function nameGamer(name) {
 if(gamerName == ""){
     
     alert('Ismingizni kiritishingiz kerak')
     name = prompt("Ismingizni kiriting")
     gamerNameResult.innerHTML = `Ishtirokchi ismi: ${name}`;
 }else{
    gamerNameResult.innerHTML = `Ishtirokchi ismi: ${name}`;
 }
}
nameGamer(gamerName);

// rounds counting function
let CountButtonClicks = 0;
function counting() {
  CountButtonClicks += 1;
  roundsNum.innerHTML = CountButtonClicks;
}

for (let i = 0; i < countingBtn.length; i++) {
  countingBtn[i].addEventListener("click", () => {
    let imgArr = [
      "./images/rock.fae7b245.png",
      "./images/paper.24d69089.png",
      "./images/scissors.0dc12241.png",
    ];
    let randomImgSrc = Math.floor(Math.random() * imgArr.length);
    let userChoice = imgArr[i];
    let computerChoice = imgArr[randomImgSrc];
    let rock = imgArr[0];
    let paper = imgArr[1];
    let scissors = imgArr[2];

    if (userChoice == computerChoice) {
      gamerAndcomputerChoice();
      return draw();
    } else if (userChoice == rock) {
      if (computerChoice == paper) {
        gamerAndcomputerChoice();
        return lose();
      } else if (computerChoice == scissors) {
        gamerAndcomputerChoice();
        return win();
      }
    } else if (userChoice == paper) {
      if (computerChoice == rock) {
        gamerAndcomputerChoice();
        return win();
      } else if (computerChoice == scissors) {
        gamerAndcomputerChoice();
        return lose();
      }
    } else if (userChoice == scissors) {
      if (computerChoice == paper) {
        gamerAndcomputerChoice();
        return win();
      } else if (computerChoice == rock) {
        gamerAndcomputerChoice();
        return lose();
      }
    }

    function gamerAndcomputerChoice() {
      gamerImg.src = userChoice;
      computerImg.src = computerChoice;
    }
  });
}

let userPoints = 0;
function win() {
  userPoints++;
  gamerResult.innerHTML = userPoints;
}

let drawPoins = 0;
function draw() {
  drawPoins++;
  tiesResult.innerHTML = drawPoins;
}

let losePoints = 0;
function lose() {
  losePoints++;
  computerResult.innerHTML = losePoints;
}
