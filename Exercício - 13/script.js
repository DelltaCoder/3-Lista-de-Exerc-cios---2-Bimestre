let raio = document.querySelector('#R')
let send = document.querySelector('#send')
let respo = document.querySelector('#resp')

function area(){
    let r = Number(raio.value);
    let resp = (3.14 * (r ** 2));
    respo.textContent = ('Sua pizza tem ' + (resp.toFixed(2)) + ' Unidades de area.' );
}

send.onclick = function(){
    area();
}