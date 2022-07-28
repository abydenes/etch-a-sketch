const container = document.querySelector('#container');




const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    let gridSize = prompt('number?', 32);
    if (gridSize > 100) {
        alert('Number too big, NO NO NO!');
        return
    }

    document.querySelector("div").innerHTML = ''

    for (i = 0; i < gridSize ** 2; i++) {
        let div = document.createElement('div');
        div.classList.add('squares');
        container.appendChild(div);

        div.style.width = `${640 / gridSize}px`
        div.style.height = `${640 / gridSize}px`
    }
    const squareHover = document.querySelectorAll('.squares');

    Array.from(squareHover).forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            square.classList.add('hoveredOver')
        });
    })
})

