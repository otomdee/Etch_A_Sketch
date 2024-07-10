let gridsize = 16;
const container = document.querySelector("#container");

//generate grid
function generateGrid() {
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
}

generateGrid();
console.log(gridsize);

//prompt user for new grid when button is clicked
document.querySelector("#newgrid").addEventListener("click", () => {
    const tempSize = prompt("Enter gridsize( maximum 100): ");
    if (tempSize < 100) {
        gridsize = tempSize;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        generateGrid();
    }
    else {
        alert("grid size must be less than 100");
    }
})