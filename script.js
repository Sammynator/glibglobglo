const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelectorAll("#restartButton")
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let playerMoves = [] // empty array for player's moves

function initGame() {

    cells.forEach(cell => {
        cell.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("cellIndex")) // get index of clicked cell

            if (playerMoves.includes(index)) return // prevent re-clicking on a filled cell

            playerMoves.push(index) // add move to array

            if (playerMoves.length >= 3) { // Check for win 
                checkWin()
            }
        });
    });
}

function checkWin() {
    // iterate through every condition
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i]; // Get one win condition
        let matchCount = 0 // Track how many numbers match

        // iterate through every move in each condition
        for (let j = 0; j < winCondition.length; j++) {
            if (playerMoves.includes(winCondition[j])) {
                matchCount++ // Increase if the move exists in playerMoves
            }
        }

        if (matchCount === 3) {
            statusText.textContent = "You Win!" // Winning condition met
            return; // Stop checking further conditions
        }
    }

    // If no win condition is met
    statusText.textContent = "You Don't Win!"
}

initGame();

//opp moves to best option, O is placed
//opp's move is added to opp move array
//check if any winConditions array matches Xs or Os
//display winner

