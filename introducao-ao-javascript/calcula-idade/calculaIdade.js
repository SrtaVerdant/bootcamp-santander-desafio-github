const pessoa = {
    nome: 'José',
    idade: 5,
};

const pessoa1 = {
    nome: 'João',
    idade: 40,
};

const pessoa2 = {
    nome: 'Carlos',
    idade: 26,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 10));