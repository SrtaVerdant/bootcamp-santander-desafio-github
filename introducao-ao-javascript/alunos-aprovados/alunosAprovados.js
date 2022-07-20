const alunos = [{
        nome: 'José',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'João',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Carla',
        nota: 6,
        turma: '2C',
    }
];

function getAlunosAprovados(array) {
    const media = 6;
    var aprovados = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].nota >= media) {
            aprovados.push('Nome: ' + array[i].nome + ' Turma: ' + array[i].turma);
        }

    }

    return aprovados;

}

console.log(getAlunosAprovados(alunos));