let gridSize = 0;

const container = document.querySelector('#container');

for (i = 0; i < 64; i++) {
    let div = document.createElement('div');
    div.classList.add('squares');
    container.appendChild(div);
}


const squareHover = document.querySelectorAll('.squares');

Array.from(squareHover).forEach(square => { 
    square.addEventListener('mouseenter', function (e) {
    square.classList.add('hoveredOver')});
})

const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    gridSize = prompt('giv numba')
})