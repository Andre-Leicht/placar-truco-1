let numero = 0
let number = 0

let set = 0
let sete = 0

function zerar() {
    numero = 0
    number = 0
    MostrarNaTela()
    MostrarnaTela()
}

function zero() {
    set = 0
    sete = 0
    ShowOnScreen()
    ShowonScreen()
}

function placar (ponto) {
    number = number + ponto
    MostrarNaTela()
        if (number >= 12) {
            number = 0
            set = set + 1
            ShowonScreen()
            MostrarNaTela()
        }

}

function pontuação (ponto){
    numero = numero + ponto
    MostrarnaTela()
        if (numero >= 12) {
            numero = 0
            sete = sete + 1
            ShowOnScreen()
            MostrarnaTela()
        }
}

function MostrarNaTela() {
    const p = document.querySelector(".resultado")
    p.innerText = number
}

function MostrarnaTela() {
    const p = document.querySelector(".result")
    p.innerText = numero
}

function ShowOnScreen() {
    const p = document.querySelector(".final")
    p.innerText = sete
}

function ShowonScreen() {
    const p = document.querySelector(".fon")
    p.innerText = set
}

MostrarNaTela();
MostrarnaTela();
ShowonScreen();
ShowOnScreen();