const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function retornaValoresUnicos(array) {
    const numeros = new Set(array);

    return [...numeros];
}

console.log(retornaValoresUnicos(array));