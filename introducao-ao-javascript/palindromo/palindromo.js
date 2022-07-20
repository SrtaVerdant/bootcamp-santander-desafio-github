function getTexto(texto) {

    if (!texto) {
        console.log('Texto inválido');
    } else {
        str = texto.replace(/ /g, ''); //remove espaços
        str = str.replace(/[^a-z0-9]/gi, ''); //remove caracteres especiais

        verificaPalindromo(str.toLowerCase());
    }

}

function verificaPalindromo(string) {

    var array = [...string]; //pega o parametro e transforma em array
    str = array.reverse() // inverte o array
    str = str.toString() // transforma o array em string 
    str = str.replace(/,/g, ''); // tira a , da string

    if (str == string) {
        console.log('É Palíndromo');
    } else {
        console.log('Não é Palíndromo')
    }

}

getTexto('aia');