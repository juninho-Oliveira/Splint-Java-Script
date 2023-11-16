//Função para troca fonte do paragrafo 

function mudaTamanhoFonte() {

    document.getElementById("manipula").style.fontSize = "38px";

}

//Função muda cor de texto do paragrafo 
function mudaCorParagrafo() {

    document.getElementById("manipula").style.backgroundColor = "black";
}

//Funçõa mudar a fonte para italico 
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
    document.getElementById("manipula").style.display = ''
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

/*botão 14 - muda a cor de todos os botões pelo nome da tag e uma lógica de array
function mudarCorTodosInput() {
    let botoes = document.getElementsByTagName("input");
    
for (let i = 0; i < botoes.length; i++) {
  botoes[i].style.backgroundColor = "#4CAF50"; // Verde
  botoes[i].style.color = "white"; // Branco
}
}*/

/* botão 15 - conta quantos botões existem na página

function contaQuantosInputs() {
    let botoes = document.getElementsByTagName("input");
    
for (let i = 0; i < botoes.length; i++) {
  quantidade = 
}


*/


