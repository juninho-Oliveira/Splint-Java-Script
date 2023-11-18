//01 Função para troca fonte do paragrafo 

function mudaTamanhoFonte() {

    document.getElementById("manipula").style.fontSize = "38px";

}

//03 Função muda cor de texto do paragrafo 
function alterarCorFont() {
    document.getElementById("manipula").style.color = "white"
}


//Botão 04 - alterar a cor do backgroud da div
function mudaCorParagrafo() {

    document.getElementById("manipula").style.backgroundColor = "black";
}

//05 Funçõa mudar a fonte para italico 
function mudarFonteItalico() {
    document.getElementById("manipula").style.fontStyle = 'italic'
}

//botão 06 - mudar a font dos parágrafor para negrito
function mudaFontNegrito() {
    document.getElementById("manipula").style.fontWeight = 'bold'
}

//botão 07 - incluir uma border preta em volta da  div
function bordaPretaDiv() {
    document.getElementById("manipula").style.border = '1px solid black'
}

//botão 08 - remover a border preta em volta da div 
function removeBord() {
    document.getElementById("manipula").style.border = 'none'
}

//botão 09 - Esconder a div e parecer invisível 
function esconderDiv() {
    document.getElementById("manipula").style.display = 'none'
}


//botão 10 - faz a div aparecer novamente 
function fazDivAparecer() {
    document.getElementById("manipula").style.display = 'block'
}


//botão 11 - alterar o texto do h2 para "não mexer nesse botão
function alterarTextoH2() {
    document.getElementById("chamada").innerHTML = 'não mexer nesse botão'
}

//botão 12 - mudar a cor do backgroud apenas do paragrado da classe "paragrafo"
function corParagrafo12() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = 'black'
}

//botão 13 - muda a cor apenas de um botão pelo nome da tag input
function mudarCorInput() {
    document.getElementsByTagName("input")[12].style.backgroundColor = "#3e8e41";
    document.getElementsByTagName("input")[12].style.color = "white";
}

//botão 14 - muda a cor de todos os botões pelo nome da tag e uma lógica de array
function mudarCorTodosInput() {
    let botoes = document.getElementsByTagName("input");
    
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = "black"; 
        botoes[i].style.color = "white";
        botoes[i].style.border = '1px solid blue'
        botoes[i].style.borderRadius = "5px" 
    }
}


//botão 15 - conta quantos botões existem na página

function contaQuantosInputs() {
    let  botoes = document.getElementsByTagName("input");
    let total = botoes.length

    return document.getElementById("chamada").innerHTML = `total de botões: ${total}`
}


//botão 16 - substitui o segundo parágrafo por *** -->
function substituiParagrafo() {
    document.querySelector(".paragrafo").innerHTML = '***';
}

//botão 17 - troca a cor do backgroud da página -->

function trocarCorPagina() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
}

//botão 18 - trocar a imagem

function trocarImagem() {
    document.getElementById("imagem").src = "/img-2.jpg"
}

