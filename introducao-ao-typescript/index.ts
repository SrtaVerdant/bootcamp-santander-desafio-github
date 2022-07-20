// function soma(a:number, b:number) {
//     return a + b;
// }

// soma(2,2);

interface IAnimal {
    nome: string;
    tipo: 'terreste' | 'aquático';
    executaRugido(alturaEMDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;

}

const animal : IAnimal = {
    nome: 'Elefante',
    tipo: 'terreste',
    executaRugido: (alturaEMDecibeis) => (`${alturaEMDecibeis}dB`)
}

animal.executaRugido(10);

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terreste',
    visaoNoturna: true,
    executaRugido: (alturaEMDecibeis) => (`${alturaEMDecibeis}dB`)
}

felino.executaRugido(20);