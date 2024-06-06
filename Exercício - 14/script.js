let val = document.querySelector('#val')
let send = document.querySelector('#send')
let respo1 = document.querySelector('#resp1')
let respo2 = document.querySelector('#resp2')
let respo3 = document.querySelector('#resp3')

function divisao(){
    let val1 = Number(val.value);
    let resp = (val1 / 3);
    let valcar = (Math.trunc(resp));
    let valandr = (Math.trunc(resp));
    let valfe = (val1 - (valcar + valandr));
    respo1.textContent = ('Carlos deve pagar R$:' + (valcar.toFixed(2)));
    respo2.textContent = ('Andre deve pagar R$:' + (valandr.toFixed(2)));
    respo3.textContent = ('Felipe deve pagar R$:' + (valfe.toFixed(2)));
}

send.onclick = function(){
    divisao();
}