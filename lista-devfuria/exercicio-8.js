var assert = require('assert');

//
// Retorna o custo final da fabricação de um carro
//
var custoFinal = function (custoFabrica) {


    let percImposto = custoFabrica * 0.45;
    let percDistri = custoFabrica * 0.28;
    
    return custoFabrica + percDistri + percImposto;
}

//
// Seu teste
//
try {
    assert.equal(17300, custoFinal(10000));
    console.log(custoFinal(1000));
} catch (e) {
    console.log(e);
}