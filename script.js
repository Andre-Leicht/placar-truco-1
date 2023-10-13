let numero = 0

function zerar() {
    numero = 0
    MostrarNaTela()
}
function zerou() {
    numero = 0
    MostrarnaTela()
}

function um() {
    numero = numero + 1
    console.log('andré');
    MostrarNaTela()
}
function uma() {
    numero = numero + 1
    MostrarnaTela()
}

function três() {
    numero = numero + 3
    MostrarNaTela()
}
function trás() {
    numero = numero + 3
    MostrarnaTela()
}

function seis() {
    numero = numero + 6
    MostrarNaTela()
}
function seisa() {
    numero = numero + 6
    MostrarnaTela()
}

function nove() {
    numero = numero + 9
    MostrarNaTela()
}
function nova() {
    numero = numero + 9
    MostrarnaTela()
}

function doze() {
    numero = numero + 12
    MostrarNaTela()
}
function doza() {
    numero = numero + 12
    MostrarnaTela()
}

function MostrarNaTela() {
    const p = document.querySelector(".resultado")
    p.innerText = numero
}
function MostrarnaTela() {
    const p = document.querySelector(".result")
    p.innerText = numero
}

MostrarNaTela();
MostrarnaTela();

