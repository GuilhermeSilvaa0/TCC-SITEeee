const imgProduto = document.querySelector('.container-produtos');
const imagens = document.querySelectorAll('.container-produtos  img');

let idx = 0;
var rep;

rep = setInterval(carrosel, 4000);

function carrosel(){
    idx++
    if(idx > imagens.length - 6){
        idx = 0;
    }

    imgProduto.style.transform = `translateX(${-idx * 382}px)`;
}



