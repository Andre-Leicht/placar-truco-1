let numero = 0

//Função zerar tudo
function zerar() {
    numero = 0
    MostrarNaTela()
    MostrarnaTela()
}

function zero() {
    numero = 0
    ShowOnScreen()
    ShowonScreen()
}

//Funções placar Eles
function um() {
    numero = numero + 1
    MostrarNaTela()
}

function três() {
    numero = numero + 3
    MostrarNaTela()
}

function seis() {
    numero = numero + 6
    MostrarNaTela()
}

function nove() {
    numero = numero + 9
    MostrarNaTela()
}

function doze() {
    numero = numero + 12
    MostrarNaTela()
}

//Funções placar Nós
function pontuaçãoum() {
    numero = numero + 1
    MostrarnaTela()
}

function pontuaçãotrês() {
    numero = numero + 3
    MostrarnaTela()
}

function pontuaçãoseis() {
    numero = numero + 6
    MostrarnaTela()
}

function pontuaçãonove() {
    numero = numero + 9
    MostrarnaTela()
}

function pontuaçãodoze() {
    numero = numero + 12
    MostrarnaTela()
}

//Funções pra mostrar o resultado
function MostrarNaTela() {
    const p = document.querySelector(".resultado")
    p.innerText = numero
}

function MostrarnaTela() {
    const p = document.querySelector(".result")
    p.innerText = numero
}

function ShowOnScreen() {
    const p = document.querySelector(".final")
    p.innerText = numero
}

function ShowonScreen() {
    const p = document.querySelector(".fon")
    p.innerText = numero
}

//Função Set Nós
function adiciona() {
    numero = numero + 1
    ShowOnScreen()
}

function diminui () {
    numero = numero - 1
    ShowOnScreen()
}

//Função Set Eles
function mais() {
    numero = numero + 1
    ShowonScreen()
}

function menos() {
    numero = numero - 1
    ShowonScreen()
}

MostrarNaTela();
MostrarnaTela();
ShowonScreen();
ShowOnScreen();