let gas = document.querySelector('#gas');
let val = document.querySelector('#val');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function gaso(){
    let gas1 = Number(gas.value);
    let val1 = Number(val.value);
    let resp = (gas1 * val1);
    respo.textContent = resp;
}

send.onclick = function(){
    gaso()
}