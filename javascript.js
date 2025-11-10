const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector("#grid-size-button");

gridSizeButton.addEventListener("click", () => {
  let result = prompt("What size grid would you like? (From 2-100)");
  setGrid(Number(result));
});

function setGrid(itemsPerRow = 4) {
  // Reset the grid when settings custom size
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Square the number
  const numberOfItems = itemsPerRow * itemsPerRow;

  // Set the grid
  for (let i = 0; i < numberOfItems; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    grid.addEventListener("mouseenter", () => {
      grid.classList.add("hover-effect");
    });

    grid.addEventListener("mouseleave", () => {
      grid.classList.remove("hover-effect");
    });

    gridContainer.appendChild(grid);
  }
}

setGrid();
