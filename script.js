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
    
    const allSquares = document.querySelectorAll('.squares');

    Array.from(allSquares).forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            const setBg = () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = "#" + randomColor;
            }
            setBg();
        });
    })
})



