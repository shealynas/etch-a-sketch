//creating divs
const container = document.createElement("div");
const board = document.createElement("div");
//selecting body tag
const body = document.querySelector("body");

//adding class container to container
container.classList.add("container");
//adding class board to board
board.classList.add("board");

//adding container to body and adding board to container
body.appendChild(container);
container.appendChild(board);

function makeGrid(amountOfRows = 16) {
  for (let i = 0; i < amountOfRows; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    board.appendChild(row);

    for (let j = 0; j < amountOfRows; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", function colorChange(e) {
        cell.classList.add("black");
      });
      row.appendChild(cell);
    }
  }
}
makeGrid();

const amountOfRows = document.createElement("input");
amountOfRows.classList.add("amountOfRows");
amountOfRows.setAttribute("type", "number");
amountOfRows.setAttribute("min", "0");
amountOfRows.setAttribute("max", "100");
container.appendChild(amountOfRows);

const gridNumBtn = document.createElement("button");
gridNumBtn.classList.add("gridNumBtn");
gridNumBtn.textContent = "Submit";
container.appendChild(gridNumBtn);
gridNumBtn.addEventListener("click", (e) => {
  clearGrid();
  makeGrid(amountOfRows.value);
});

function clearGrid() {
  board.innerHTML = "";
}
