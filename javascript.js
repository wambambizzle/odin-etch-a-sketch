const container = document.querySelector("#container");

// update later: 256
for (let i = 0; i < 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  grid.addEventListener("mouseenter", () => {
    grid.classList.add("hover-effect");
  });

  grid.addEventListener("mouseleave", () => {
    grid.classList.remove("hover-effect");
  });

  container.appendChild(grid);
}
