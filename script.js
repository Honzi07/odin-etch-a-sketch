const container = document.querySelector('#container');
const square = document.querySelectorAll('.square');
const colorPicker = document.querySelector('#colorPicker');
const resetBtn = document.querySelector('#resetBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');


let color = undefined;
let mousedown = false;

function createSquare() {
    const square = document.createElement('div')
    container.appendChild(square);
}


function createGrid(squareNum) {
    container.style.gridTemplateColumns = `repeat(${squareNum}, 1fr [col-start])`;
    container.style.gridTemplateRows = `repeat(${squareNum}, 1fr [col-start])`;
    for(i = 0; i < (squareNum * squareNum); i++) {
        createSquare();
    }
}


function newGrid() {
    do{
        squareNum = prompt('Enter a number between 16 and 100')
    }
    while(squareNum < 16 || squareNum > 100);    
    createGrid(squareNum);   
}


function colorGrid(event) {
    if (mousedown && (event.target.parentElement == container)) event.target.style.backgroundColor = color;
}


colorPicker.addEventListener('change', function(event){
    color = event.target.value;
});

container.addEventListener('mouseover', colorGrid);

document.body.addEventListener('mousedown', function() {
  mousedown = true;
  colorGrid;
});

document.body.addEventListener('mouseup', function() {
  mousedown = false;
});


// function remove() {
//     let child = container.lastElementChild; 
//         while (child) {
//             container.removeChild(child);
//             child = container.lastElementChild;
//         }
// }

resetBtn.addEventListener('click', () =>{
    // remove()
    colorPicker.value = '#ffffff';
    color = '#ffffff';
    container.innerHTML = '';
    newGrid();
});

createGrid(16)
