const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector("#grid-size-button");
const gridWidth = 600;
const gridHeight = 600;

gridSizeButton.addEventListener("click", () => {
  let result = prompt("What size grid would you like? (From 2-100)");
  // TODO: add the limits greater than or equal to 2 - less than or equal to 100
  setGrid(Number(result));
});

setGrid();

function setGrid(itemsPerRow = 8) {
  gridContainer.innerHTML = "";

  // Total number of items
  const numberOfItems = itemsPerRow * itemsPerRow;
  const widthAndHeight = gridWidth / itemsPerRow + "px";

  // Fill the grid
  for (let i = 0; i < numberOfItems; i++) {
    const grid = document.createElement("div");

    grid.style.width = widthAndHeight;
    grid.style.height = widthAndHeight;
    grid.style.border = "2px solid black";
    grid.style.boxSizing = "border-box";

    grid.addEventListener("mouseenter", () => {
      grid.classList.add("hover-effect");
    });

    grid.addEventListener("mouseleave", () => {
      grid.classList.remove("hover-effect");
    });

    gridContainer.appendChild(grid);
  }
}
