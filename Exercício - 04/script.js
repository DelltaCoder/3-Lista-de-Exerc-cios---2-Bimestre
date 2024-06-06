let nm = document.querySelector('#name');
let years = document.querySelector('#years');
let send = document.querySelector('#send');
let resp1 = document.querySelector('#resp');

function idade(){
    let nome = (nm.value);
    let idade = Number(years.value);
    let resp0 = (idade * 365);
    let resp = (nome + ',' + ' ' + 'Voce ja viveu' + ' ' + resp0 + ' ' + 'Dias.');
    resp1.textContent = resp;
}

send.onclick = function(){
    idade();
}