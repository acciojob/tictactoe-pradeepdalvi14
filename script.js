//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const playerForm = document.getElementById("player-form");
const game = document.getElementById("game");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "X";
let gameActive = true;

const winningCombos = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"]
];

// Start game
submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (player1 === "" || player2 === "") {
    alert("Please enter both player names");
    return;
  }

  playerForm.classList.add("hide");
  game.classList.remove("hide");

  currentPlayer = player1;
  message.textContent = `${currentPlayer}, you're up`;
});

// Cell click
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "" || !gameActive) return;

    cell.textContent = currentSymbol;

    if (checkWinner()) {
      message.textContent = `${currentPlayer} congratulations you won!`;
      gameActive = false;
      return;
    }

    // Switch turn
    if (currentSymbol === "X") {
      currentSymbol = "O";
      currentPlayer = player2;
    } else {
      currentSymbol = "X";
      currentPlayer = player1;
    }

    message.textContent = `${currentPlayer}, you're up`;
  });
});

// Check winner
function checkWinner() {
  return winningCombos.some(combo => {
    return combo.every(id => {
      return document.getElementById(id).textContent === currentSymbol;
    });
  });
}
