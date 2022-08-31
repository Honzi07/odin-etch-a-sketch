const container = document.querySelector('#container');
const square = document.querySelectorAll('.square');
const colorPicker = document.querySelector('#colorPicker');
const resetBtn = document.querySelector('#resetBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const erase = document.querySelector('#eraseBtn')


let color = undefined;
let mousedown = false;


function createSquare() {
    const square = document.createElement('div')
    square.classList.add('square')
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


colorPicker.addEventListener('change', function(e){
    color = e.target.value;
});


eraseBtn.addEventListener('click', () => {
    for(let i = 0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = "white";
    }
})


resetBtn.addEventListener('click', () => {
    container.innerHTML = '';
    newGrid();
});


rainbowBtn.addEventListener('click', () => {
    rainbowBtn.classList.toggle('rainbowOn')
    drawingMode()
})


function drawingMode() {
    classList = (rainbowBtn.classList.contains('rainbowOn'))
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
            return `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
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


drawingMode()
createGrid(16);


// document.addEventListener('click', (e) => {
//     console.log(e.target);
// });