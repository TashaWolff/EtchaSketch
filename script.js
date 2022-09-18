const gridBox = document.querySelector('#gridBox');
let choice = 16 * 16;

for (i=0; i < choice; i++) {
    const divTest = document.createElement('div');
    divTest.setAttribute('style', 'border: 1px solid black; width: 20px; height: 20px;')
    gridBox.appendChild(divTest);
}