var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaDireita = window.document.getElementById("seta_direita");
var setaEsquerda = window.document.getElementById("seta_esquerda");

function rolarParaDireita(){
    Leonardo.style="display:none";
    Bruna.style="display:flex";
    setaDireita.style="display:none";
    setaEsquerda.style="display:flex; margin-right:25px;";
}

function rolarParaEsquerda(){
    Leonardo.style="display:flex";
    Bruna.style="display:none";
    setaDireita.style="display:flex";
    setaEsquerda.style="display:none";
}