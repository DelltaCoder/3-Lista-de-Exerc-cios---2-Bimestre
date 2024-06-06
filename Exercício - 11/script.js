let salario = document.querySelector('#salario')
let send = document.querySelector('#send')
let sal1 = document.querySelector('#sal1')
let sal15 = document.querySelector('#sal15')
let salimpst = document.querySelector('#salimpst')

function risetaxes(){
    let sal = Number(salario.value);
    let resp1 = ((sal * 15 / 100) + sal);
    let resp2 = (resp1 - (8 / 100));
    sal1.textContent = ('R$:' + (sal.toFixed(2)));
    sal15.textContent = ('R$' + (resp1.toFixed(2)));
    salimpst.textContent = ('R$' + (resp2.toFixed(2)));
}

send.onclick = function(){
    risetaxes();
}