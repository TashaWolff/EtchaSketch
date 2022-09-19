const gridBox = document.querySelector('#gridBox');
const slider = document.getElementById("gridRange");
const output = document.getElementById("value");

// let sliderValue = slider.value;
// let squares = sliderValue;

let lines = true;

function makeGrid(squares) {
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 2;
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    divSqr.setAttribute('style', `background: ;`);
    divSqr.setAttribute('id', `boxDiv`);
    if (lines) {
        divSqr.style.height = `${sizeLines}px`;
        divSqr.style.width = `${sizeLines}px`;
        divSqr.style.border = "1px solid black";
    } else if (!lines){
        divSqr.style.height = `${size}px`;
        divSqr.style.width = `${size}px`;
    }
    gridBox.appendChild(divSqr);
}
}

//slider bar

output.textContent = `${slider.value}`;

slider.oninput = function () {
    let sliderValue = this.value;
    removeGrid();
    if (this.value == 3) {//*** make switch statement */
        makeGrid(16);
    }
    output.textContent = `${sliderValue}`;
}

function removeGrid() {
    while (gridBox.firstChild) {
      gridBox.removeChild(gridBox.firstChild);
    }
  }

makeGrid(16);