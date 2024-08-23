// main.ts

const choices: string[] = ["Rock", "Paper", "Scissors"];

let numRounds: number = 0;
let currentRound: number = 0;
let userWins: number = 0;
let computerWins: number = 0;

const roundCheckboxes = document.querySelectorAll(
  ".Rounds input[type='checkbox']"
);
const outputDiv = document.querySelector(".Output") as HTMLDivElement;
const choiceButtons = document.querySelectorAll(".Choices button");
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const userScoreDisplay = document.getElementById(
  "userScore"
) as HTMLParagraphElement;
const computerScoreDisplay = document.getElementById(
  "computerScore"
) as HTMLParagraphElement;

let gameStarted: boolean = false;

// Event Listener für die Auswahl der Rundenanzahl hinzufügen
roundCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if ((checkbox as HTMLInputElement).checked) {
      numRounds = parseInt((checkbox as HTMLInputElement).value);
      roundCheckboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          (otherCheckbox as HTMLInputElement).checked = false;
        }
      });
      startGame();
    }
  });
});

// Funktion zum Starten des Spiels
function startGame() {
  if (!gameStarted) {
    currentRound = 0;
    userWins = 0;
    computerWins = 0;
    updateScore();
    choiceButtons.forEach(
      (button) => ((button as HTMLButtonElement).disabled = false)
    );
    gameStarted = true;
    playRound();
  }
}

// Funktion für eine Spielrunde
function playRound() {
  if (currentRound < numRounds) {
    currentRound++;
    outputDiv.textContent = `Round ${currentRound}: Make your move!`;
  } else {
    endGame();
  }
}

// Event Listener für die Auswahl von Stein, Papier oder Schere hinzufügen
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameStarted) {
      const userChoice = button.textContent!.trim();
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      determineWinner(userChoice, computerChoice);
      playRound();
    }
  });
});

// Funktion zum Ermitteln des Gewinners einer Runde
function determineWinner(userChoice: string, computerChoice: string) {
  outputDiv.textContent = `You chose: ${userChoice}\nThe computer chose: ${computerChoice}\n`;

  if (userChoice === computerChoice) {
    outputDiv.textContent += "It's a tie!";
  } else if (
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    outputDiv.textContent += "You win!";
    userWins++;
  } else {
    outputDiv.textContent += "The computer wins!";
    computerWins++;
  }

  updateScore();
}

// Funktion zum Aktualisieren der Punkteanzeige
function updateScore() {
  userScoreDisplay.textContent = userWins.toString();
  computerScoreDisplay.textContent = computerWins.toString();
}

// Funktion zum Beenden des Spiels
function endGame() {
  choiceButtons.forEach(
    (button) => ((button as HTMLButtonElement).disabled = true)
  );
  outputDiv.textContent += `\nGame over!\n`;
  if (userWins > computerWins) {
    outputDiv.textContent += "You won! 🎉";
  } else if (computerWins > userWins) {
    outputDiv.textContent += "The computer won! 😞";
  } else {
    outputDiv.textContent += "It's a tie! 🤝";
  }
  gameStarted = false;
}

// Event Listener für den Neustart-Button hinzufügen
resetButton.addEventListener("click", () => {
  roundCheckboxes.forEach(
    (checkbox) => ((checkbox as HTMLInputElement).checked = false)
  );
  outputDiv.textContent = "";
  choiceButtons.forEach(
    (button) => ((button as HTMLButtonElement).disabled = true)
  );
  gameStarted = false;
  updateScore(); // Punkteanzeige zurücksetzen
});
