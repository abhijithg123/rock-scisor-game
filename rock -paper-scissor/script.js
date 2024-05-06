userScore = 0;
compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreBoard1 = document.querySelector(".score1");
const scoreBoard2 = document.querySelector(".score2");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

const draw = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    // Remove the following line to prevent changing the background color on draw
    msg.style.backgroundColor = "";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        scoreBoard1.innerHTML = userScore;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        scoreBoard2.innerHTML = compScore;
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Rock" ? false : true;
        } else {
            userWin = compChoice === "Rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        console.log("Button clicked");
        playGame(userChoice);
    });
});
