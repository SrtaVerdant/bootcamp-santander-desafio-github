"use strict";
// Interface
const animal = {
    nome: 'Elefante',
    tipo: 'terreste',
    domestico: false,
    executaRugido: (alturaEMDecibeis) => (`Uso de Interface ${animal.nome} ${alturaEMDecibeis}dB`)
};
console.log(animal.executaRugido(10));
const felino = {
    nome: 'Leão',
    tipo: 'terreste',
    visaoNoturna: true,
    domestico: false,
    executaRugido: (alturaEMDecibeis) => (`Uso de Interface ${felino.nome} ${alturaEMDecibeis}dB`)
};
console.log(felino.executaRugido(20));
//  O uso de | simboliza que posso usar os atributos de ambas as classes 
//O uso de & tenho que usar todos os atributos das classes informadas ou seja Ifelino e ICanino
const outroanimal = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terreste',
    executaRugido: (alturaEMDecibeis) => (`Uso de type ${outroanimal.nome} ${alturaEMDecibeis}dB`) // mesmo se tiver | o metodo vai junto
};
// Manipulando Input
const input = document.getElementById('input'); //as é para dizer qual tipo de elemento do HTML
input.addEventListener('input', (event) => {
    const i = event.currentTarget;
    console.log(i.value);
});
//Generic types
function adicionaApendiceALista(array, valor) {
    return array.map(item => item + valor);
}
adicionaApendiceALista([1, 2, 3], 1);
function redirecione(usuario) {
    if ('cargo' in usuario) {
        // redirecionar para usuário ADM
    }
    else {
        // redirecionar para usuário normal
    }
}
function redirecionaFuncionario(usuario) {
    if (usuario.cargo) {
        //redirecionar para rota de funcionario
    }
    //redirecionar para rota de não funcionario
}
class Meugato {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
// utilizando o Jquery
// import $ from 'jquery';
// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou função');
//     }
// });
// $('body').novaFuncao();
