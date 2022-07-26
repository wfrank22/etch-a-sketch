const grid = document.getElementById('grid');
// const gridSquareRow = document.createElement('div');
// const gridSquareColumn = document.createElement('div');

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){ //create rows
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridSquareRow';
        for(let j = 0; j < gridSize-1; j++){ //create columns
            let column = document.createElement('div');
            grid.appendChild(column).className = 'gridSquareColumn';
        }
    }
}

createGrid(16);

document.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('gridSquareRow' || 'gridSquareColumn')){
        mouseOver();
    }
})

function mouseOver(){
    document.grid.style.backgroundColor = 'black';
    document.gridSquareColumn.style.backgroundColor = 'black';
}