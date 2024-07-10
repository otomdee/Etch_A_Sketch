let gridsize = 16;
const container = document.querySelector("#container");

for (let i = 0; i < gridsize; i++) {
    const cellrow = document.createElement("div");
    cellrow.classList.add("cellrow");
    for (let j = 0; j <gridsize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cells");
        cellrow.append(cell);
    }
    container.append(cellrow);
}