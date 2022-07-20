function validaArray(array) {
    var cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            cont++;
        }
    }

    if (array.length === 0) {
        console.log(-1);
    }if (cont > 0) {
        console.log('Só é permitido apenas números');
    } else {
        substituiNumeroPar(array);
    }

}

function substituiNumeroPar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            numeros[i] = 0;
        }

    }
    console.log(numeros);
}

validaArray([1, 3, 4, 6, 80, 33, 23, 90]);