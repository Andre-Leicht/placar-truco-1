let numero = 0
let set = 0
let number = 0
let sent = 0

function zerar() {
    numero = 0
    number = 0
    MostrarNaTela()
    MostrarnaTela()
}

function zero() {
    set = 0
    sent = 0
    ShowOnScreen()
    ShowonScreen()
}

function placar (ponto) {
    number = number + ponto
    MostrarNaTela()
    if (number => 12) {
        placar = 0
        sent = sent + 1
        ShowOnScreen()
    }
}

function pontuação (ponto){
    numero = numero + ponto
    MostrarnaTela()
    if (numero => 12) {
        pontuação = 0
        set = set + 1
        ShowonScreen()
    }
}

function MostrarNaTela() {
    const p = document.querySelector(".resultado")
    p.innerText = numero
}

function MostrarnaTela() {
    const p = document.querySelector(".result")
    p.innerText = number
}

function ShowOnScreen() {
    const p = document.querySelector(".final")
    p.innerText = sent
}

function ShowonScreen() {
    const p = document.querySelector(".fon")
    p.innerText = set
}

function adiciona() {
    numero = numero + 1
    ShowOnScreen()
}

function diminui() {
    numero = numero - 1
    ShowOnScreen()
}

function add() {
    number = number + 1
    ShowonScreen()
}

function less() {
    number = number - 1
    ShowonScreen()
}

MostrarNaTela();
MostrarnaTela();
ShowonScreen();
ShowOnScreen();