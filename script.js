const gridBox = document.querySelector('#gridBox');
const slider = document.getElementById("gridRange");
const output = document.getElementById("value");
const cb = document.querySelector('#lineBtn');

function makeGrid(squares) {
let grid = squares * squares;
let size = 600 / squares;
let sizeLines = (600 / squares) - 2;
//can make function for the for loop - genSquares(); 
for (i=0; i < grid; i++) {
    const divSqr = document.createElement('div');
    const cb = document.querySelector('#lineBtn');
    divSqr.id = 'sqr';
    divSqr.className = 'sqr';
    if (!cb.checked) {
        divSqr.style.height = `${sizeLines}px`;
        divSqr.style.width = `${sizeLines}px`;
        divSqr.style.border = "1px solid black";
    } else if (cb.checked){
        divSqr.style.height = `${size}px`;
        divSqr.style.width = `${size}px`;
    }
    gridBox.appendChild(divSqr);
}
}

makeGrid(16);

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

const chosenColor = 'black';

const sqrs = document.querySelectorAll('#sqr');

sqrs.forEach((sqr) => {
    sqr.addEventListener('mouseover', () => {
        sqr.style.background = `${chosenColor}`;
        //might remove after line checkbox
        // sqr.style.border = `1px solid ${chosenColor}`;
    });
});


//classic button
const btnClassic = document.querySelector('#classic');

btnClassic.addEventListener('click', () => {
    alert('Hello..');
});




//line button
//must be made so if clicked again, the sqaures go back

// const bntLines = document.querySelector('#lineBtn');

// bntLines.addEventListener('click', () => {
//     //resetGrid()
//     sqrs.forEach((sqr) => {
//         sqr.style.border = `1px solid #e7dbcb`;
//         });
// });


// warningDiv = document.getElementById('warning');

// if (document.getElementById('warning')) {
//     alert('warning div on Dom');
// }

// warningDiv.addEventListener('mouseover', () => {
//     warningDiv.style.background = 'black';
// });