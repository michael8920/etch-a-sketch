const container = document.querySelector('#container');

// ADDING SINGLE DIV TO MY GRID CONTAINER
//const gridItem = document.createElement('div');
//gridItem.style.cssText = 'height: 50px; width: 50px; grid-area: 1/1/2/2; border: 1px solid blue;';
//container.appendChild(gridItem);

//TRYING TO FIGURE OUT FUNCTION TO FILL ALL GRID SLOTS 

function fillGrid () { 
    let gridItems = [];
    for (let i = 0; i < 256; i++) {
        gridItems[i] = document.createElement('div');
        gridItems[i].style.cssText = 'height: 50px; width: 50px; border: 1px solid blue; grid-auto-flow: row;';
        container.appendChild(gridItems[i]);
    }
}

fillGrid();