const boardHolder = document.querySelector("#board")


function createBoard(size) {
for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("boardDiv")
        boardHolder.appendChild(newDiv);
    }
}
boardTiles = document.querySelectorAll(".boardDiv");
boardTiles.forEach(boardTile => { boardTile.addEventListener("mouseenter", changeColor)     
});
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

//Initial size
let size = 16;
createBoard(size);

 const clearButton = document.querySelector("#clear");
 clearButton.addEventListener("click", function clearGrid(){
    boardTiles.forEach(boardTile => boardTile.remove())
    let gridSize = 0;
    while (gridSize === 0 || gridSize >100 ) {
        gridSize = prompt("Enter size of grid");
    }
    createBoard(gridSize);
    const board = document.querySelector("#board");    
    board.setAttribute('style',
    'grid-template-columns: repeat(' + gridSize + ', minmax(auto, 1fr))',
    'grid-template-rows: repeat(' + gridSize + ', auto)');
 });