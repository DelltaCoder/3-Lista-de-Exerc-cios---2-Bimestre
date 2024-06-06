let dias = document.querySelector('#dias');
let send = document.querySelector('#send');
let respo = document.querySelector('#resp');

function data(){
    let days = Number(dias.value);
    let anos = Math.floor(days / 365);
    let diarest = Math.floor((days % 365) / 30);
    let dia = ((800 % 365) % 30);
    respo.textContent = (days + ' dias equivalem a ' + anos + ' anos, ' + diarest + ' meses e ' + dia + ' dias.');
}

send.onclick = function(){
    data();
}