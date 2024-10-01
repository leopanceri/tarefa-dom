const title = document.getElementById("titulo");
const helloBtn = document.getElementById("botao-ola");
const changeTitleBtn = document.getElementById("btn-muda-titulo");
const changefrasesBtn = document.getElementById("altera-frase");

const mensagem = document.querySelectorAll('.mensagem');

helloBtn.addEventListener("click", function(){
    alert("OLÁ");
});

changeTitleBtn.addEventListener("click", function(){
    title.textContent = "O título foi alterado pelo JS";
});

changefrasesBtn.addEventListener("click", function(){
    for( let i=0; i < mensagem.length; i++){
        mensagem[i].textContent = "Mensagem " + (i+1) + " alterada pelo DOM"
    }
});