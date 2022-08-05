const container = document.querySelector('#container')
const square = document.querySelectorAll('.square')
const colorPicker = document.querySelector('#colorPicker')
const resetBtn = document.querySelector('#resetBtn')

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
        createSquare()
    }
}

colorPicker.addEventListener('change', function(event){
    color = event.target.value;
})


createDrawingBoard(16)



