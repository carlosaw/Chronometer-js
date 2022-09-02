let d = new Date();

d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);

let h;
let m;
let s;
let c;

let hrs = "00";
let mts = "00";
let sec = "00";
let cen = "00";

let timer;
let ativo = false;

let cont = 1;

document.querySelector('.markBox textarea').setAttribute('disabled', true);

function run() {

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    c = d.getMilliseconds() / 10;

    if (h<10){
        hrs = "0"+h;
    }else{
        hrs = h;
    };

    if (m<10){
        mts = "0"+m;
    }else{
        mts = m;
    };

    if (s<10){
        sec = "0"+s;
    }else{
        sec = s;
    };

    if (c<10){
        cen = "0"+c;
    }else{
        cen = c;
    };

    document.getElementById('mostrador').innerHTML = hrs + ":" + mts + ":" + sec + ":" + cen;

    d.setMilliseconds(d.getMilliseconds() + 10);

};

function start() {
    if (ativo == false) {
        timer = setInterval(run, 10);
        ativo = true;
        document.querySelector('.buttonText').innerHTML = "Pause";
        document.querySelector('.buttonImg img').setAttribute('src', 'assets/images/pause.png');
    } else {
        clearInterval(timer);
        ativo = false;
        document.querySelector('.buttonText').innerHTML = "Continuar";
        document.querySelector('.buttonImg img').setAttribute('src', 'assets/images/play.png');
    }

};

function anotar() {
    document.querySelector('.markBox textarea').setAttribute('disabled', false);
    let conteudo = document.querySelector('.markBox textarea').value;
    if(cen !== '00') {
        document.querySelector('.markBox textarea').innerHTML = conteudo + cont + ". " + hrs + ":" + mts + ":" + sec + ":" + cen + '\n';
    } else {
        document.querySelector('.markBox textarea').innerHTML = 'Não há tempo para registrar! - "Clique em Start"';
    }    
    document.querySelector('.markBox textarea').setAttribute('disabled', true);
    let baixo = document.querySelector('.markBox textarea').scrollHeight;
    document.querySelector('.markBox textarea').scrollTo(0, baixo);
    cont++;
};

function limpar() {

    clearInterval(timer);
    ativo = false;
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);
    hrs = "00";
    mts = "00";
    sec = "00";
    cen = "00";

    document.getElementById('mostrador').innerHTML = "00:00:00:00";
    document.querySelector('.buttonText').innerHTML = "Iniciar";
    document.querySelector('.buttonImg img').setAttribute('src', 'assets/images/play.png');

};

function limparTextarea() {
    document.querySelector('.markBox textarea').innerHTML = "";
    cont = 1;
}