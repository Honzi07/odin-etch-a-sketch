const container = document.querySelector('#container');
const square = document.querySelectorAll('.square');
const colorPicker = document.querySelector('#colorPicker');
const resetBtn = document.querySelector('#resetBtn');


let color = undefined;


function createSquare() {
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);
    square.addEventListener('mouseover', 
    event => event.target.style.backgroundColor = color)
}

function createDrawingBoard(squareNum) {
    container.style.gridTemplateColumns = `repeat(${squareNum}, 1fr [col-start])`;
    container.style.gridTemplateRows = `repeat(${squareNum}, 1fr [col-start])`;
    for(i = 0; i < (squareNum * squareNum); i++) {
        createSquare();
    }
}

colorPicker.addEventListener('change', function(event){
    color = event.target.value;
})


function newGrid() {
    do{
        squareNum = prompt('Enter a number between 16 and 100')
    }
    while(squareNum < 16 || squareNum > 100);    
    createDrawingBoard(squareNum);   
}

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

createDrawingBoard(16)



