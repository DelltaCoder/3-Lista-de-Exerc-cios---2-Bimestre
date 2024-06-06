let p = document.querySelector('#p');
let m = document.querySelector('#m');
let g = document.querySelector('#g');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function camisas(){
    let p1 = Number(p.value);
    let m1 = Number(m.value);
    let g1 = Number(g.value);
    let resp = ((p1 * 10) + (m1 * 12) + (g1 * 15));
    let resp1 = ('R$:' + (resp.toFixed(2)));
    respo.textContent = resp1;
}

send.onclick = function(){
    camisas();
}