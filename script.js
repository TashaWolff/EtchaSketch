const gridBox = document.querySelector('#gridBox');
const slider = document.getElementById("gridRange");
const output = document.getElementById("value");
const chosenColor = 'black';

let lines = true;

function makeGrid(squares) {
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 2;
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    divSqr.id = 'sqr';
    divSqr.className = 'sqr';
    if (lines) {
        divSqr.style.height = `${sizeLines}px`;
        divSqr.style.width = `${sizeLines}px`;
        divSqr.style.border = "1px solid black";
    } else if (!lines){
        divSqr.style.height = `${size}px`;
        divSqr.style.width = `${size}px`;
    }
    gridBox.appendChild(divSqr);

    const sqrs = document.querySelectorAll('#sqr');

    sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', () => {
        sqr.style.background = `${chosenColor}`;
        sqr.style.border = `1px solid ${chosenColor}`;
    });
});
}
}

makeGrid(24); //performance issues past 32 - even then takes longgggg time to load

//slider bar
//put grid line toggle button here?
//'in order to toggle lines you must adjust size'
output.textContent = `${slider.value}`;

slider.oninput = function () {
    let sliderValue = this.value;
    removeGrid();
    if (this.value == 1) {
        makeGrid(4);
    } else if (this.value == 2) {
        makeGrid(8);
    } else if (this.value == 3) {
        makeGrid(16);
    } else if (this.value == 4) {
        makeGrid(24);
    }
    output.textContent = `${sliderValue}`;
}

function removeGrid() {
    while (gridBox.firstChild) {
      gridBox.removeChild(gridBox.firstChild);
    }
  }




//buttons

//classic button
const btnClassic = document.querySelector('#classic');

btnClassic.addEventListener('click', () => {
    alert('Hello..');
});

//line button
//must be made so if clicked again, the sqaures go back
const bntLines = document.querySelector('#lineBtn');

bntLines.addEventListener('click', () => {
    // removeGrid();
    sqrs.forEach((sqr) => {
        //instead make it add class that changes border color
        // makeGrid(output.textContent, class name noLines)
        sqr.style.border = `1px solid #e7dbcb`;
        });
});
