let bola = document.getElementById('bola')
bola.style.width = '50px'
bola.style.height = '50px'
bola.style.borderRadius = '50%'
bola.style.backgroundColor = 'green'
bola.style.position = 'absolute'
document.body.appendChild(bola)



let pos = {
    x: 0,
    y: 0
}



function getCoords(event) {
    pos = {
        x: event.clientX,
        y: event.clientY
    }
    return pos
}




window.addEventListener('mousemove', (event) => {
    getCoords(event)
});

let objetivo = {
    getCoords()
}

function moverBola(objeto, distanciaX, distanciaY) {
    let tamanhoBola = {
        width: bola.offsetWidth,
        height: bola.offsetHeight
    }

    let centroBola = {
        width: distanciaX - (tamanhoBola.width / 2),
        height: distanciaY - (tamanhoBola.height / 2)
    }

    objeto.style.transform = `translate(${centroBola.width}px, ${centroBola.height}px)`;
}


setInterval(() => {
    moverBola(bola, pos.x, pos.y)
}, 10);




