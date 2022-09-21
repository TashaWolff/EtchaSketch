const gridBox = document.querySelector('#gridBox');
const slider = document.getElementById("gridRange");
const output = document.getElementById("value");

let lines = true;

function makeGrid(squares) {
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 2;
//can make function for for loop - genSquares(); 
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    divSqr.id = 'warning';
    divSqr.className = 'warning';
    if (lines) {
        divSqr.style.height = `${sizeLines}px`;
        divSqr.style.width = `${sizeLines}px`;
        divSqr.style.border = "1px solid black";
    } else if (!lines){
        divSqr.style.height = `${size}px`;
        divSqr.style.width = `${size}px`;
    }
    gridBox.appendChild(divSqr);
    // divSqr.addEventListener('click', () => {
    //     alert('Hello!');
    // });
}
}

const btnClassic = document.querySelector('#classic');

btnClassic.addEventListener('click', () => {
    alert('Hello..');
});


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

warningDiv = document.getElementById('warning');

if (document.getElementById('warning')) {
    alert('warning div on Dom');
}

document.addEventListener('click', () => {
    alert('hello');
});