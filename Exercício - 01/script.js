let altura = document.querySelector('#altura')
let largura = document.querySelector('#largura')
let send = document.querySelector('#send')
let resp1 = document.querySelector('#resp')

function area(){
    let alt = Number(altura.value);
    let larg = Number(largura.value);
    let resp = ((alt * larg) + ' ' + 'm²');
    resp1.textContent = resp;
}

send.onclick = function(){
    area();
}