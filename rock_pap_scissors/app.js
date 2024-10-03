let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

const drawGame = () => {
  //console.log("It's a tie!");
  message.innerText = "It's a tie!";
  message.style.backgroundColor = "black";
}

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;  
    //console.log("You win!");
    message.innerText = "You win!";
    message.style.backgroundColor = "green";
  }
  else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose!");
    message.innerText = "You lose!";
    message.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  }

  else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);    
  });
});