*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family: Arial, sans-serif;
    height:100vh;
    overflow:hidden;
    background:#121212; /* escuro suave */
    color:white;
}

/* fundo leve romântico */
body::before{
    content:"";
    position:fixed;
    width:100%;
    height:100%;
    background: radial-gradient(circle at top, rgba(255,77,109,0.15), transparent 60%);
    pointer-events:none;
}

/* telas */
.tela{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    opacity:0;
    pointer-events:none;
    transition:0.8s;
}

.ativa{
    opacity:1;
    pointer-events:auto;
}

h1{
    margin-bottom:20px;
    text-align:center;
    text-shadow:0 0 10px rgba(255,77,109,0.3);
}

/* botões */
button{
    padding:12px 20px;
    border:none;
    border-radius:10px;
    background:#ff4d6d;
    color:white;
    cursor:pointer;
    transition:0.3s;
}

button:hover{
    transform:scale(1.05);
}

/* envelope */
.envelope{
    width:300px;
    height:200px;
    background:#1e1e1e;
    border:2px solid #ff4d6d;
    border-radius:12px;
    position:relative;
    cursor:pointer;
}

.tampa{
    position:absolute;
    width:100%;
    height:100%;
    background:#ff4d6d;
    clip-path: polygon(0 0, 50% 60%, 100% 0);
    transition:0.8s;
}

.carta{
    position:absolute;
    background:#222;
    width:85%;
    padding:20px;
    top:50%;
    left:50%;
    transform:translate(-50%,150%);
    border-radius:12px;
    transition:0.8s;
    text-align:center;
    box-shadow:0 0 15px rgba(255,77,109,0.2);
}

.carta h3{
    color:#ff4d6d;
}

.carta p{
    margin-top:10px;
    color:#ddd;
}

/* abrir */
.abrir .tampa{
    transform:rotateX(180deg);
}

.abrir .carta{
    transform:translate(-50%,-80%);
}

/* corações 💖 */
.coracao{
    position:fixed;
    top:-10px;
    animation:cair linear forwards;
    pointer-events:none;
}

@keyframes cair{
    0%{
        transform:translateY(-10px) scale(0.8);
        opacity:1;
    }
    100%{
        transform:translateY(110vh) scale(1.4);
        opacity:0;
    }
}

/* galeria */
.galeria{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
    gap:15px;
    width:80%;
}

.galeria img{
    width:100%;
    height:100px;
    object-fit:cover;
    border-radius:12px;
    cursor:pointer;
    transition:0.3s;
}

.galeria img:hover{
    transform:scale(1.1);
}

/* modal */
.modal{
    display:none;
    position:fixed;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.95);
    justify-content:center;
    align-items:center;
}

.modal img{
    max-width:90%;
    max-height:90%;
    border-radius:12px;
}
