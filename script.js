const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartButton")
const iStart = document.querySelector("#iStart")
const botStarts = document.querySelector("#botStarts")

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
let botMoves = []
let round = 0

function botMove(round) {
    switch (round) {
        case 1:
            // O's first move
            if (!botMoves.includes(4)) {
                return 4;  // Take center if available
            } else if (!botMoves.includes(0)) {
                return 0;  // Take top-left corner if center is occupied
            } else {
                return 8;  // Otherwise take bottom-right corner
            }
        
        case 2:
            // O's second move (Player has made a move)
            if (playerMoves.includes(4)) {
                // If player took the center, try to take a corner
                if (!botMoves.includes(0)) {
                    return 0;  // Take top-left corner
                } else if (!botMoves.includes(2)) {
                    return 2;  // Take top-right corner
                } else if (!botMoves.includes(6)) {
                    return 6;  // Take bottom-left corner
                } else {
                    return 8;  // Otherwise take bottom-right corner
                }
            }
            break;

        case 3:
            // O's third move (Player has made two moves)
            if (playerMoves.includes(4) && playerMoves.includes(0)) {
                // If player is in the center and top-left, bot takes bottom-right
                return 8;
            } else if (playerMoves.includes(4) && playerMoves.includes(2)) {
                // If player is in the center and top-right, bot takes bottom-left
                return 6;
            }
            break;

        case 4:
            // O's 4th move (defensive)
            // Block the player's winning moves or take a corner/edge if possible
            if (playerMoves.includes(0) && playerMoves.includes(8)) {
                return 6;  // Block diagonal from top-left to bottom-right
            } else if (playerMoves.includes(2) && playerMoves.includes(6)) {
                return 8;  // Block diagonal from top-right to bottom-left
            }
            break;

        case 5:
            // O's 5th move (final defense)
            // If the bot still has moves left, block the player from winning
            if (playerMoves.includes(0) && playerMoves.includes(6)) {
                return 2;  // Block player from completing the top-left/bottom-left diagonal
            } else if (playerMoves.includes(8) && playerMoves.includes(2)) {
                return 6;  // Block player from completing the top-right/bottom-right diagonal
            }
            break;

        default:
            // If no specific round logic, bot takes the first available spot
            const availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            const possibleMoves = availableMoves.filter(move => 
                !playerMoves.includes(move) && !botMoves.includes(move)
            );
            return possibleMoves[0];  // Take the first available spot
    }
}

function initGame() {

    cells.forEach(cell => {
        cell.addEventListener("click", (event) => {
            const index = parseInt(event.target.getAttribute("cellIndex")) // get index of clicked cell
            cell.textContent = "X"

            if (playerMoves.includes(index)) return // prevent re-clicking on a filled cell

            playerMoves.push(index) // add move to array

            if (playerMoves.length >= 3) { // Check for win 
                checkWin()
            }
        });
    });
}

function checkWin() {
    // iterate through every win condition
    for (let i = 0; i < winConditions.length; i++) {
        let winCondition = winConditions[i]; // Get one win condition
        let matchCount = 0 // Track how many numbers match

        // iterate through every move in each win condition
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

function resetGame() {
    let playerMoves = [] 
    let botMoves = []
    cells.forEach(cell => {
        cell.textContent = ""})}

iStart.addEventListener("click", () => {
    resetGame()
    round = 1
    initGame()
    console.log(round)
})
botStarts.addEventListener("click", () => {
    resetGame()
    round = 0
    initGame()
    botMove(round)
    console.log(round)
}) 




//opp moves to best option, O is placed
//opp's move is added to opp move array
//check if any winConditions array matches Xs or Os
//display winner

