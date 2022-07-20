const array = [1, 2, 3, 4, 5];

function validaArray(array, numero) {
    try {
        if (!array || !numero) {
            throw new ReferenceError('Parametro invalido!');;
        }
        if (typeof (array) !== 'object') {
            throw new TypeError('O Array não é do tipo objeto!');;
        }
        if (typeof (numero) !== 'number') {
            throw new TypeError('Número inválido!');;
        }
        if (array.length !== numero) {
            throw new RangeError('O tamanha do array é diferente do parametro');;
        }
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            console.log(error.message);
        } else {
            console.log('Erro não esperado: ' + error);
        }
    }
}

validaArray();