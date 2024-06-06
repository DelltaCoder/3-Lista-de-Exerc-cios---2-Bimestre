let x1 = document.querySelector('#x')
let y1 = document.querySelector('#y')
let x2 = document.querySelector('#x1')
let y2 = document.querySelector('#y1')
let send = document.querySelector('#send')
let respo = document.querySelector('#resp')

function pontos(){
    let xx = Number(x1.value);
    let xx2 = Number(x2.value);
    let yy = Number(y1.value);
    let yy2 = Number(y2.value);
    
    let resp = Math.sqrt(((xx - xx2) ** 2) + ((yy - yy2) ** 2))
    respo.textContent = ((resp.toFixed(2)) + ' ' + 'Unidades de distancia entre os dois pontos.');
}

send.onclick = function(){
    pontos()
}