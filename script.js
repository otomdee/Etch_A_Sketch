let gridsize = 16;
const container = document.querySelector("#container");

//generate grid
for (let i = 0; i < gridsize; i++) {
    const cellrow = document.createElement("div");
    cellrow.classList.add("cellrow");
    for (let j = 0; j <gridsize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cells");
        //add cell interactivity
        cell.addEventListener("mouseover", () => {
            cell.classList.add("active");
        })
        cellrow.append(cell);
    }
    container.append(cellrow);
}