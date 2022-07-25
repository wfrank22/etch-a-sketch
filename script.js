const grid = document.getElementById('grid');
const gridSquare = document.createElement('div');

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridSquare';
        styleGridSquare(gridSquare);
        grid.appendChild(gridSquare);
    }
}

createGrid(16);

function styleGridSquare(a){
    a.style.width = '100px';
    a.style.height = '100px';
    a.style.background = 'red';
    a.style.color = 'black';
    a.style.border = 'solid black';
    a.innerHTML = 'Box';
}