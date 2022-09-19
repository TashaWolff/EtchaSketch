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
    divSqr.setAttribute('style', `background: blue;`);
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
// const boxes = document.querySelectorAll("#boxDiv");
}
// console.log(boxes);


//slider bar

output.textContent = `${slider.value}`;

slider.oninput = function () {
    removeGrid();
    let sliderValue = this.value;
    output.textContent = `${sliderValue}`;
    makeGrid(sliderValue);
}

// console.log(sliderValue);

function removeGrid() {
    while (gridBox.firstChild) {
      gridBox.removeChild(gridBox.firstChild);
    }
  }

makeGrid(16);