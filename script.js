const gridBox = document.querySelector('#gridBox');
let squares = 16;
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 1;

console.log(size);

function makeGrid(grid) {
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    divSqr.setAttribute('style', `background: blue;`);
    divSqr.style.height = `${size}px`;
    divSqr.style.width = `${size}px`;
    gridBox.appendChild(divSqr);
}}

makeGrid(grid);