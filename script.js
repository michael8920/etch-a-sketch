const container = document.querySelector('#container');
const button = document.querySelector('#gridreset');
let gridItems = [];
let cleanGrid = [];


for (let i = 0; i < 256; i++) {
        gridItems[i] = document.createElement('div');
        gridItems[i].style.cssText = 'border: 1px solid blue; grid-auto-flow: row;';
        container.appendChild(gridItems[i]);
}

let itemsArray = Array.from(gridItems);

itemsArray.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.cssText = 'background-color: black;'
    })
})

function newGrid () {
    let userGrid = prompt('How many squares per side do you want your new grid to be?');
    container.innerHTML = "";

    for (let i = 0; i < (userGrid * userGrid); i++) {
        cleanGrid[i] = document.createElement('div');
        cleanGrid[i].style.cssText = 'border: 1px solid blue; grid-auto-flow: row;';
        container.appendChild(cleanGrid[i]);    
    }
    container.setAttribute('style', `grid-template-columns: repeat(${userGrid}, auto); grid-template-rows: repeat(${userGrid}, auto);`);

    cleanGrid.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.cssText = 'background-color: black;'
    })
    })
}

button.addEventListener('click', newGrid);
