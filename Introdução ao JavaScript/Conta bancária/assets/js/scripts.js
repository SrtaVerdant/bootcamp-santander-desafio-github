class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this.saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negata'
        }
        this._saldo = this._saldo - valor;

        return this._saldo;

    }

    deposita(valor) {
        this._saldo += valor;

        return this._saldo;

    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;

    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}


class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';

    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';


    }

    sacar(valor){
        if (valor > 500) {
            return 'Operação negada';
        }

        this._saldo -=  valor;
    }

}


function teste() {
    var ag = document.getElementById('agencia').value;
    var con = document.getElementById('conta').value;
    const conta = new ContaBancaria(ag, con, true); 
    console.log(conta.numero);
}

teste();


