const imgAquario = document.querySelector('.container-aquario');
const imagemAquario = document.querySelectorAll('.container-aquario  img');

let abc = 0;
var rep;
rep = setInterval(carroselAquario, 8000)

function carroselAquario(){
    abc++
    if(idx > imagemAquario.length - 1){
        abc = 0;
    }

    imgAquario.style.transform = `translateX(${-idx * 100}px)`;
    
}



