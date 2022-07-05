const numeros = [1, 2, 3, 4, 5];

function getNumerosPares(numeros) {
    return numeros.filter((numeros) => numeros % 2 == 0);
}

console.log(getNumerosPares(numeros));