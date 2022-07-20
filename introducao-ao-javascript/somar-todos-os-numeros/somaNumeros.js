const numeros = [1, 2, 3];

function somaNumeros(array) {
    return array.reduce(function (acumulador, prox) {
        return acumulador + prox;
    });
}

console.log(somaNumeros(numeros));