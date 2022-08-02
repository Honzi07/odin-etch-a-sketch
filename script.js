
function createSquare() {
    const container = document.querySelector('#container')
    const square = document.createElement('div')
    square.className = 'square';
    container.appendChild(square);
}

function createDrawingBoard(squareNum) {
    const total = squareNum * squareNum;
    for(i = 0; i < total; i++) {
        createSquare()
    }
}


