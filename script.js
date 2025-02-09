const items = document.querySelectorAll(".item")
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
let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X"
let running = "false"

function initGame() {
    items.forEach(item => addEventListener("click", itemClicked()))
    restartBtn.addEventListener("click", restartGame())
    statusText.textContent = `${currentPlayer}'s turn`
}

function itemClicked() {
    const itemIndex = this.getAttribute("itemIndex")

    if(options[itemIndex] != "" || !running) {
        return

    }
    updateItem(this, itemIndex)
    checkWinner()
}

function updateItem(item, index) {

}

function changePlayer() {

}

function checkWinner() {

}

function restartGame() {

}


