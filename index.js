const choices = ["stone","paper","scissor"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");

function playGame(PlayerChoice){
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(ComputerChoice);

    let result = "";

    if (PlayerChoice === ComputerChoice){
        result = "It's a TIE!";
    }else{
        switch (PlayerChoice) {
            case "stone":
                result = (ComputerChoice === "scissor") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
            case "paper":
                result = (ComputerChoice === "stone") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
            case "scissor":
                result = (ComputerChoice === "paper") ? "YOU WIN!" : "COMPUTER WINS!";
                break;
        }
    }
    PlayerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
    ResultDisplay.textContent = result;

    ResultDisplay.classList.remove("greencolor", "redcolor", "bluecolor");

    switch (result) {
        case "YOU WIN!":
            ResultDisplay.classList.add("greencolor");
            break;
        case "COMPUTER WINS!":
            ResultDisplay.classList.add("redcolor");
            break;
        case "It's a TIE!":
            ResultDisplay.classList.add("bluecolor");
            break;
    }

}

