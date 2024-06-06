let peso = document.querySelector('#peso');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function prato(){
    let peso1 = Number(peso.value);
    let resp = ((peso1 - 0.45) * 12);
    let resp1 = (('R$:' + (resp.toFixed(2))))
    respo.textContent = resp1;
}

send.onclick = function(){
    prato();
}