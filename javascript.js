const container = document.querySelector("#container");
const gridContainer = document.querySelector(".grid-container");
const gridSizeButton = document.querySelector("#grid-size-button");

for (let i = 0; i < 64; i++) {
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

gridSizeButton.addEventListener("click", () => {
  let result = prompt("What size grid would you like? (From 2-100)");
});
