const grid = document.getElementById('grid');
const gridSquare = document.createElement('div');

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){ //create rows
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridSquareRow';
        row.innerHTML = 'Row';
        for(let j = 0; j < gridSize-1; j++){ //create columns
            let column = document.createElement('div');
            grid.appendChild(column).className = 'gridSquareColumn';
            column.innerHTML = 'Column';
        }
    }
}


createGrid(16);