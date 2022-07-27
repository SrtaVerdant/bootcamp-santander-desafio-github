"use strict";
const button = document.getElementById('button');
const label = document.getElementById('ocultalabel');
const input = document.getElementById('input');
const resposta = document.getElementById('resposta');
const numeroRandom = {
    n1: Math.round(Math.random() * 100)
};
if (button) {
    button.addEventListener('click', () => {
        label.innerHTML = '';
        var number = Number(input.value);
        if (isNaN(number)) {
            resposta.innerHTML = 'Digite apenas números!';
        }
        else {
            if (validacao(number)) {
                verificaSeEoNumero(number, numeroRandom.n1);
            }
        }
    });
}
function validacao(nUsuario) {
    if (nUsuario > 100) {
        resposta.innerHTML = 'O número é maior que 100!';
        return false;
    }
    if (nUsuario < 0) {
        resposta.innerHTML = 'O número é menor que 0!';
        return false;
    }
    return true;
}
function verificaSeEoNumero(n1, numero) {
    if (n1 > numero) {
        resposta.innerHTML = n1 + ' é maior!';
    }
    else if (n1 < numero) {
        resposta.innerHTML = n1 + ' é menor!';
    }
    else {
        resposta.innerHTML = 'Acertou!!';
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}
