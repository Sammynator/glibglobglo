const cells = document.querySelectorAll(".cell")
const statusText = document.querySelectorAll("#statusText")
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

function initGame() {
    const cells = document.querySelectorAll(".cell");
    let playerMoves = [];

    cells.forEach(cell => {
        cell.addEventListener("click", (event) => {
            const index = event.target.getAttribute("cellIndex"); 
            playerMoves.push(index); 
            console.log(playerMoves); 
        });
    });
}

initGame();

//field is added to array of length 3 at first position
//opp moves to best option, O is placed
//opp's move is added to opp move array
//repeat three times
//check if any winConditions array matches Xs or Os
//display winner

