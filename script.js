const container = document.querySelector('#drawing-board');
const square = document.querySelectorAll('.square');
const colorPicker = document.querySelector('#colorPicker');
const resetBtn = document.querySelector('#resetBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const erase = document.querySelector('#eraseBtn');


let color = '#ffffff';
let mousedown = false;
let squareNum = 0;


function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

function createGrid(squareNum) {
    shadow() 
    container.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squareNum}, 1fr)`;
    for(i = 0; i < (squareNum * squareNum); i++) {
        createSquare();
    }
}

function newGrid() {
    squareNum = prompt('Enter a number between 16 and 100');
    if(squareNum < 16 || squareNum > 100) {
        createGrid(16); 
    } else createGrid(squareNum); 
}

function shadow() {
    const shadow = document.createElement('div');
    shadow.classList.add('drawing-board-shadow');
    const drawingBoard = document.querySelector('#drawing-board');
    drawingBoard.appendChild(shadow);
}


colorPicker.addEventListener('change', function(e){
    color = e.target.value;
});


eraseBtn.addEventListener('click', () => {
    for(let i = 0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = '#ffffff';
    }
})


resetBtn.addEventListener('click', () => {
    colorPicker.value = '#ffffff'
    container.innerHTML = '';
    newGrid();
});


rainbowBtn.addEventListener('click', () => {
    rainbowBtn.classList.toggle('rainbowOn');
    drawingMode();
})


document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  })


function drawingMode() {
    classList = (rainbowBtn.classList.contains('rainbowOn'));
    if(classList == false) {
        container.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = color;
        });
        
        function colorGrid(e) {
            if (mousedown && (e.target.parentElement == container)) e.target.style.backgroundColor = color;
        }
        
        container.addEventListener('mouseover', colorGrid);
        
        document.body.addEventListener('mousedown', function() {
          mousedown = true;
          colorGrid;
        });
        
        document.body.addEventListener('mouseup', function() {
          mousedown = false;
        });
    } else if(classList == true) {
        function randomColor() {
            const rgbColor = {
                r: Math.random() * 255,
                g: Math.random() * 255,
                b: Math.random() * 255
            }
            return `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
        }
        
        function colorGridRgb(e) {
            if (mousedown && (e.target.parentElement == container)) e.target.style.backgroundColor = randomColor();
        }
        
        container.addEventListener('mouseover', colorGridRgb);
        
        document.body.addEventListener('mousedown', function() {
            mousedown = true;
          });
        
        container.addEventListener('mousedown', (e) => {
            e.target.style.backgroundColor = randomColor();
        });
    }
}


const circleLeft = document.querySelector('.circle-left');
rainbowBtn.addEventListener('click', () => {
    circleLeft.style.transform = 'rotate(-0.25turn)';
    circleLeft.style.transition = 'transform 0.7s';
});

colorPicker.addEventListener('click', () => {
    circleLeft.style.transform = 'rotate(0turn)';
    circleLeft.style.transition = 'transform 0.7s';
});

const circleRight = document.querySelector('.circle-right');
resetBtn.addEventListener('click', () => {
    circleRight.style.transform = 'rotate(0.25turn)';
    circleRight.style.transition = 'transform 0.7s';
});

eraseBtn.addEventListener('click', () => {
    circleRight.style.transform = 'rotate(0turn)';
    circleRight.style.transition = 'transform 0.7s';
});


drawingMode();
createGrid(16);