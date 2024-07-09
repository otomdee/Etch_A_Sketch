let gridsize = 16;
const container = document.querySelector("#container");

for (let i = 0; i < gridsize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    container.append(cell);
}
