const choices = ["stone","paper","scissor"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("result");

function playGame(PlayerChoice){
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(ComputerChoice);

    let result = "";

    if (PlayerChoice === ComputerChoice){
        result = "It's a Tie!";
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
            default:
                break;
        }
    }
    PlayerDisplay.textContent = `PLAYER: ${PlayerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${ComputerChoice}`;
    ResultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN":
            
            break;
        case "COMPUTER WINS":
        
        break;
    
        default:
            break;
    }

}

