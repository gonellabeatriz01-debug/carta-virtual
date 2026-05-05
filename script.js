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
    criarCoracoes();
}

/* CORAÇÕES 💖 */
function criarCoracoes(){
    for(let i=0;i<40;i++){
        let coracao = document.createElement("div");
        coracao.classList.add("coracao");

        const emojis = ["💖","❤️","💕","💘"];
        coracao.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        coracao.style.left = Math.random()*100 + "vw";
        coracao.style.fontSize = (Math.random()*15 + 15) + "px";
        coracao.style.animationDuration = (Math.random()*2 + 3) + "s";

        document.body.appendChild(coracao);

        setTimeout(()=> coracao.remove(),5000);
    }
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