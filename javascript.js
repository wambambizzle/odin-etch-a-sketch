const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector("#grid-size-button");
const clearButton = document.querySelector(".clear-button");
const gridWidth = 600;
const gridHeight = 600;

gridSizeButton.addEventListener("click", promptForGridSize);
clearButton.addEventListener("click", clearGridColors);

setGrid();

function setGrid(itemsPerRow = 4) {
  gridContainer.innerHTML = "";

  // Total number of items
  const numberOfItems = itemsPerRow * itemsPerRow;
  const widthAndHeight = gridWidth / itemsPerRow + "px";

  // Fill the grid
  for (let i = 0; i < numberOfItems; i++) {
    const grid = document.createElement("div");
    grid.className = grid.style.width = widthAndHeight;
    grid.style.height = widthAndHeight;
    grid.style.border = "2px solid black";
    grid.style.boxSizing = "border-box";

    grid.addEventListener("mouseenter", () => {
      grid.style.background = generateRandomColor();
    });

    gridContainer.appendChild(grid);
  }
}

function promptForGridSize() {
  let result = prompt("What size grid would you like? (From 2-100)");

  while (!(result >= 2 && result <= 100)) {
    result = prompt("What size grid would you like? (From 2-100)");
  }

  setGrid(result);
}

function clearGridColors() {
  gridContainer.childNodes.forEach((node) => {
    node.style.background = "white";
  });
}

function generateRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
