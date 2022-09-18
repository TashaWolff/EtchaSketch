const gridBox = document.querySelector('#gridBox');
let squares = 18;
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 2;
let lines = true;
let background = "white";

console.log(size);

function makeGrid(grid) {
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    divSqr.setAttribute('style', `background: blue;`);
    if (lines) {
        divSqr.style.height = `${sizeLines}px`;
        divSqr.style.width = `${sizeLines}px`;
        divSqr.style.border = "1px solid black";
    } else if (!lines){
        divSqr.style.height = `${size}px`;
        divSqr.style.width = `${size}px`;
    }
    gridBox.appendChild(divSqr);
}}

makeGrid(grid);

//slider bar
const slider = document.getElementById("gridRange");
const output = document.getElementById("value");

output.textContent = `${slider.value}`;

slider.oninput = function () {
    let sliderValue = this.value;
    output.textContent = `${sliderValue}`;
}