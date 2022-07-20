function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, prox, index) {
        console.log('rodada', index + 1);
        console.log({
            prev
        });
        console.log({
            prox
        });
        return prev - prox.preco;
    }, saldoDisponivel);
}

const lista = [{
        nome: 'sabao em pó',
        preco: 30
    },
    {
        nome: 'refrigerante',
        preco: 5
    },
    {
        nome: 'tinta',
        preco: 15
    },
    {
        nome: 'creme dental',
        preco: 2
    }
]

const saldoDisponivel = 100;

console.log(calculaSaldo(saldoDisponivel, lista));