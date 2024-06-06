let pao = document.querySelector('#pao')
let broa = document.querySelector('#broa')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#tot1')
let resp2 = document.querySelector('#tot2')

function total(){
    let pao1 = Number(pao.value);
    let broa1 = Number(broa.value);
    let respo = (pao1 * 0.12) + (broa1 * 1.50);
    let resp = (respo * (10 / 100));
    resp1.textContent = ('R$:' + (respo.toFixed(2)));
    resp2.textContent = ('R$:' + (resp.toFixed(2)));
}

send.onclick = function(){
    total();
}