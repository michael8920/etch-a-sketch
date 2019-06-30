const container = document.querySelector('#container');
let gridItems = [];

for (let i = 0; i < 256; i++) {
        gridItems[i] = document.createElement('div');
        gridItems[i].style.cssText = 'height: 50px; width: 50px; border: 1px solid blue; grid-auto-flow: row;';
        container.appendChild(gridItems[i]);
}

let itemsArray = Array.from(gridItems);

itemsArray.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        element.style.cssText = 'background-color: black;'
    })
})