const MeuErro = new Error('Mensagem invalida'); //instancia o objeto do tipo erro e adiciona uma mensagem
MeuErro.name = 'InvalidMessage'; //acessa a propriedade name do erro

throw MeuErro; //chama o erro (é tipo uma return para 'erros')