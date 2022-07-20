// Interface

interface IAnimal {
    nome: string;
    tipo: 'terreste' | 'aquático';
    domestico: boolean;
    executaRugido(alturaEMDecibeis: number): void;
}
interface IFelino extends IAnimal {
    visaoNoturna: boolean;

}
const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terreste',
    domestico:false,
    executaRugido: (alturaEMDecibeis) => (`Uso de Interface ${animal.nome} ${alturaEMDecibeis}dB`)
}
console.log(animal.executaRugido(10));
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terreste',
    visaoNoturna: true,
    domestico:false,
    executaRugido: (alturaEMDecibeis) => (`Uso de Interface ${felino.nome} ${alturaEMDecibeis}dB`)
}
console.log(felino.executaRugido(20));
interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}


//Type 

type IDomestico = IFelino | ICanino; 
//  O uso de | simboliza que posso usar os atributos de ambas as classes 
//O uso de & tenho que usar todos os atributos das classes informadas ou seja Ifelino e ICanino

const outroanimal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terreste',
    executaRugido: (alturaEMDecibeis) => (`Uso de type ${outroanimal.nome} ${alturaEMDecibeis}dB`) // mesmo se tiver | o metodo vai junto
}


// Manipulando Input

const input = document.getElementById('input') as HTMLInputElement; //as é para dizer qual tipo de elemento do HTML

input.addEventListener('input', (event) => {
    
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);

});

//Generic types

function adicionaApendiceALista<T>(array: any[], valor: T) { // quando coloca na funcation <> quer dizer que não sabe qual vai ser o tipo de parametro
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 1)