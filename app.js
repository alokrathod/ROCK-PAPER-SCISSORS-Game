// keep a track of user's score
let userScore = 0;

// keep a track of computer's score
let computerScore = 0;

// access all the choices to be clicked
const choices = document.querySelectorAll(".choice");

// access the msg box
const msg = document.querySelector("#msg");

// access the user's score
const userScorePara = document.querySelector("#user-score");

// access the computer's score
const computerScorePara = document.querySelector("#computer-score");

// access the reset button
const resetBtn = document.querySelector("#reset-btn");

// function to generate computer choices to select
const generateComputerChoice = () => {
    // rock paper scissor generate randomly from the array
    const options = ["Rock", "Paper", "Scissors"];

    // to generate random numbers we use Math.random() function. 
    // this function generates random numbers from 0 to 1
    // to make it generate from 0 to 2 (indexes in the array we multiply it by 3 and since we want only int value we use Math.floor())
    let randomIdx = Math.floor(Math.random() * 3);
    // return the index of the array (randomly generated)
    return options[randomIdx];
}

// function to play the game
const playGame = (userChoice) => {
    // generate computer choice
    const computerChoice = generateComputerChoice();

    // draw condition
    if(userChoice === computerChoice) {
        // game draw
        drawGame();
    }
    // non-draw conditions
    else {
        // keep a track of user's win
        let userWin = true;
        if(userChoice === "Rock") {
            // now the computer can only choose ether scissors or paper
            userWin = (computerChoice === "Paper") ? false : true;
        }
        else if(userChoice === "Paper") {
            // now computer can only choose either rock or scissors
            userWin = (computerChoice === "Scissors") ? false : true;
        }
        else {
            // now computer can only choose either rock or paper
            userWin = (computerChoice === "Rock") ? false : true;
        }
        // calls show winner function
        showWinner(userWin, userChoice, computerChoice);
    }
}

// function when the game is draw
const drawGame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "#081b31";
}

// function to show the winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// .forEach to detect a click on a particular choice and do some function inside it
choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

// function to reset the game
resetBtn.addEventListener("click", () => {
    userScore = 0;
    userScorePara.innerText = userScore;
    computerScore = 0;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});
