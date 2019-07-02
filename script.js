const container = document.querySelector('#container');
const button = document.querySelector('#gridreset');
const pencilBtn = document.querySelector('#pencil');

let gridItems = [];

button.addEventListener('click', newGrid);
pencilBtn.addEventListener('click', pencilChoice);
pencilBtn.addEventListener('click', changeText);

// Initial function written to give users an overview on how the sketch book looks and how it works 

function initialGrid (userGrid) {
    for (let i = 0; i < (userGrid * userGrid); i++) {
        gridItems[i] = document.createElement('div');
        gridItems[i].style.cssText = 'box-sizing: border-box; border: 0.5px solid rgba(255,255,255,0.15); grid-auto-flow: row';
        container.appendChild(gridItems[i]);    
    }
    container.setAttribute('style', `grid-template-columns: repeat(${userGrid}, auto); grid-template-rows: repeat(${userGrid}, auto);`);
    
    gridItems.forEach(function(element) {
        element.addEventListener('mouseover', function() {
            element.style.cssText = 'background-color: black;'
        })
    })
}

initialGrid(16);
// End of initial function 


// Function written to allow users create their own grids 

function newGrid () {
    container.innerHTML = ""; // Clear our container from the initial gridItems 
    gridItems.length = 0; // Clear our array from initial elements
    let userGrid = prompt('How many squares per side do you want your new grid to be');

    for(let i = 0; i < userGrid * userGrid; i++) {
        gridItems[i] = document.createElement('div');
        gridItems[i].style.cssText = 'box-sizing: border-box; border: 0.5px solid rgba(255,255,255,0.15); grid-auto-flow: row;'
        container.appendChild(gridItems[i]);
    }
    container.setAttribute('style', `grid-template-columns: repeat(${userGrid}, auto); grid-template-rows: repeat(${userGrid}, auto);`);

    if (pencilBtn.textContent === 'BLACK') {
        gridItems.forEach(function(element) {
          element.addEventListener('mouseover', function() {
            randomColor();
            element.style.cssText = `background-color: ${bgColor};`;
          })
        })
    } else {
        gridItems.forEach(function(element) {
            element.addEventListener('mouseover', function() {
                element.style.cssText = 'background-color: black;'
            })
        })
    }
}

// Function written to change text on the pencil button when clicked

function changeText () {
    if (pencilBtn.textContent === 'RANDOM COLOR') {
        pencilBtn.textContent = 'BLACK'
    } else {
        pencilBtn.textContent = 'RANDOM COLOR'
    }
}
// Function written to allow users change pencils between black and random color

function pencilChoice () {
  if (pencilBtn.textContent === 'RANDOM COLOR') {
      gridItems.forEach(function(element) {
        element.addEventListener('mouseover', function() {
          randomColor();
          element.style.cssText = `background-color: ${bgColor};`
        })
      })
  } else if (pencilBtn.textContent === 'BLACK') {
      gridItems.forEach(function(element) {
        element.addEventListener('mouseover', function() {
          element.style.cssText = 'background-color: black;'    
        })
      })
  }
} 

// Function written to get random rgb color 
let bgColor = '';

function randomColor () {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
}

