let horse  = document.querySelector('#horse')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#resp')

function ferradura(){
    let cavalo = Number(horse.value);
    let resp = ((cavalo * 4) + ' ' + 'ferraduras.');
    resp1.textContent = resp;
}

send.onclick = function(){
    ferradura();
}