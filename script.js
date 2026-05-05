let cartaAberta = false;

function proximaTela(num){
    const atual = document.querySelector(".ativa");
    const proxima = document.getElementById("tela"+num);

    if(atual) atual.classList.remove("ativa");
    if(proxima) proxima.classList.add("ativa");
}

function abrirCarta(el){
    if(cartaAberta) return;
    cartaAberta = true;

    el.classList.add("abrir");
    criarCoracoes();
}

function criarCoracoes(){
    for(let i=0;i<35;i++){
        let coracao = document.createElement("div");
        coracao.classList.add("coracao");

        const emojis = ["💖","❤️","💘","💕"];
        coracao.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        coracao.style.left = Math.random()*100 + "vw";
        coracao.style.fontSize = (Math.random()*15 + 15) + "px";
        coracao.style.animationDuration = (Math.random()*2 + 3) + "s";

        document.body.appendChild(coracao);

        setTimeout(()=> coracao.remove(), 5000);
    }
}