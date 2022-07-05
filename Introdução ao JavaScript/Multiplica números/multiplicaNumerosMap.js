const numeros = [10,3,45,2,13,4,2];

function multiplicaNumeros(array){
    return array.map(function (item) {
        return item * 2;
    });
}

console.log(multiplicaNumeros(numeros));