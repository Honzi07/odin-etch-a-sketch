const container = document.querySelector('#container')

function createSquare() {
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);
}

function createDrawingBoard(squareNum) {
    container.style.gridTemplateColumns = `repeat(${squareNum}, 1fr [col-start])`;
    const total = squareNum * squareNum;
    for(i = 0; i < total; i++) {
        createSquare()
    }
}