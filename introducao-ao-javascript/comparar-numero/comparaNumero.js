getNumeros(5, 5);

function getNumeros(n1, n2) {
    if (isNaN(n1) || isNaN(n2) || n1 == '' || n2 == '') {
        console.log('Não foi informado números');
    } else {
        console.log('Os números ' + n1 + ' e ' + n2 + ' ' + verificaIgualdade(n1, n2) +
            ' iguais. Sua soma é ' + (n1 + n2) + ' que é ' + verificaSeMaiorQue10(n1, n2) +
            ' a 10 e ' + verificaSeMenorQue20(n1, n2) + ' a 20.');
    }
}

function verificaIgualdade(n1, n2) {
    if (n1 === n2) {
        return 'são';
    } else {
        return 'não';
    }
}

function verificaSeMaiorQue10(n1, n2) {
    if ((n1 + n2) > 10) {
        return 'maior';
    }
    if ((n1 + n2) == 10) {
        return 'igual';
    } else {
        return 'menor';
    }
}

function verificaSeMenorQue20(n1, n2) {
    if ((n1 + n2) < 20) {
        return 'menor';
    }
    if ((n1 + n2) == 20) {
        return 'igual';
    } else {
        return 'maior';
    }
}