const button = document.getElementById('button');
const label = document.getElementById('ocultalabel') as HTMLInputElement;
const input = document.getElementById('input') as HTMLInputElement;
const resposta = document.getElementById('resposta') as HTMLInputElement;

const numeroRandom: INumero = {
    n1: Math.round(Math.random()* 100)
};

if (button) {
    button.addEventListener('click', () => {
        label.innerHTML = '';
        var number = Number(input.value);
        if (isNaN(number)) {
            resposta.innerHTML = 'Digite apenas números!';
        }else{
            if (validacao(number)) {
                verificaSeEoNumero(number, numeroRandom.n1);
            }
           
        }
       
    });
}

function validacao(nUsuario:number) {
    if (nUsuario > 100) {
        resposta.innerHTML = 'O número é maior que 100!';
        return false;
    }if (nUsuario < 0) {
        resposta.innerHTML = 'O número é menor que 0!';
        return false;
    }
    return true;

}

function verificaSeEoNumero(n1:number, numero:number) {
    if (n1 > numero) {
        resposta.innerHTML =  n1 + ' é maior!';
    }else if(n1 < numero){
        resposta.innerHTML =  n1 + ' é menor!';
    }else{
        resposta.innerHTML =  'Acertou!!';
        setTimeout(function() {
            location.reload();
        }, 2000);
        
    }
}

interface INumero{
    n1:number;
}



