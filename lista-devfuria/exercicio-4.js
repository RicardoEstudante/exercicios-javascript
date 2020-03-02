var assert = require('assert');

var antecessor = function (numero) {
    return numero - 1;
}

var sucessor = function (numero) {
    return numero + 1;
}


//
// Seu teste
//
try {
    assert.equal(9, antecessor(10), "deve retornar o antecessor");
    console.log(antecessor(10));
    assert.equal(11, sucessor(10), "deve retornar o sucessor");
    console.log(sucessor(10));
} catch (e) {
    console.log(e);
}