const slide = [
    {
        img: 'https://lh3.googleusercontent.com/pw/AP1GczNHfSVZmnfVCibZVNG0dhXPNhuYJxWsrUIEg_HuD0Wm_F4fwOX2Bzi6uPPi5kXyTlg8uURZF7M3ii60BhoJh2XgKRCtRav1YfGQCiQMD_UaPG8USeVgNqqfeHi0Hct6NE6jQuT-DY0j0H72KDqcDMz9Rg=w1408-h939-s-no-gm?authuser=0'
    },

    {
        img: 'https://lh3.googleusercontent.com/pw/AP1GczPNwdU3T7R_GL5m71xkCWSCa7RaD-iydPs57-7LE7rB52Mr5D3_uttkjbNjRjrsesXBH_cWlExb1MM0UhRCBEiatkOtkTxgSy_BHzm3ETJKCubsHS0sflAYDtme6h5VCulrstoLr6kQKn79fk33F0QqLw=w1409-h939-s-no-gm?authuser=0'
    },

    {
        img: './imgPeixes/3.Acará.Bandeira.Zebra.jpg'
    }
]

const IMG = document.querySelector('#slide-show');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let ItemAtual = 0;
var repetir;

window.addEventListener('DOMContentLoaded', function(){
    repetir = setInterval("Automatico()",10000)
    showPerson(ItemAtual);
})

function showPerson(pessoa){
    const item = slide[pessoa];
    IMG.src = item.img
}

nextBtn.addEventListener("click", function(){
    ItemAtual++
    if(ItemAtual > slide.length - 1){
        ItemAtual = 0;
    }
    clearInterval(repetir);
    repetir = setInterval("Automatico()",10000)
    showPerson(ItemAtual);
})


prevBtn.addEventListener("click", function(){
    ItemAtual--
    if(ItemAtual < 0){
        ItemAtual = slide.length - 1;
    }
    clearInterval(repetir);
    repetir = setInterval("Automatico()",10000)
    showPerson(ItemAtual);
})


function Automatico(){
    ItemAtual++
    if(ItemAtual > slide.length - 1){
        ItemAtual = 0;
    }
    showPerson(ItemAtual);
}

