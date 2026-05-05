let cartaAberta = false;
let tocando = false;

function proximaTela(num){
    document.querySelector(".ativa").classList.remove("ativa");
    document.getElementById("tela"+num).classList.add("ativa");
}

function abrirCarta(el){
    if(cartaAberta) return;
    cartaAberta = true;

    el.classList.add("abrir");
}

/* modal */
function abrirModal(src){
    document.getElementById("imgModal").src = src;
    document.getElementById("modal").style.display = "flex";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}

/* música */
function iniciarMusica(){
    let musica = document.getElementById("musica");
    musica.play();
    tocando = true;
}

function toggleMusica(){
    let musica = document.getElementById("musica");

    if(tocando){
        musica.pause();
        tocando = false;
    }else{
        musica.play();
        tocando = true;
    }
}