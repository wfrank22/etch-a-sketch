const grid = document.getElementById('grid');
// const gridSquareRow = document.createElement('div');
// const gridSquareColumn = document.createElement('div');

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){ //create rows
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridSquareRow' + i;
        for(let j = 0; j < gridSize-1; j++){ //create columns
            let column = document.createElement('div');
            grid.appendChild(column).className = 'gridSquareColumn' + j;
        }
    }
}

createGrid(16);

grid.addEventListener('mouseout', function(e){
    console.log(e);
    if(e.target.classList.contains('div[class*="gridSquareRow"]') || e.target.classList.contains('div[class*="gridSquareColumn"]')){
        console.log('test');
        hoverBox();
    }
})

function hoverBox(){
    document.grid.style.backgroundColor = 'black';

}