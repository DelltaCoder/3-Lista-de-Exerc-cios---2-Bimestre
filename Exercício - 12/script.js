let num = document.querySelector('#num');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function unidades(){
    let n1 = Number(num.value);
    
    if ((n1 < 0) || (n1 > 999)){
        respo.textContent = ('Número Inválido, digite um número de 0 a 999.');
    }else{
        let resp1 = (n1 / 100);
        let resp2 = ((n1 % 100) / 10);
        let resp3 = (n1 % 10);
        respo.textContent = ('Seu numero possui ' + (Math.trunc(resp1)) + ' Centenas ' + (Math.trunc(resp2)) + ' Dezenas e ' + (resp3) + ' Unidades.');
    }
}

send.onclick = function(){
    unidades();
}