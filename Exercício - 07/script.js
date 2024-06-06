let dia = document.querySelector('#dia');
let mes = document.querySelector('#mes');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function data(){
    let dia1 = Number(dia.value);
    let mes1 = Number(mes.value);
    if (mes1 != 12){
        let resp = (((mes1 - 1) * 30) + dia1);
        respo.textContent = resp;
    }else{
        let resp = ((11 * 30) + dia1 + 4);
        respo.textContent = resp;
    }
}

send.onclick = function(){
    data()
}