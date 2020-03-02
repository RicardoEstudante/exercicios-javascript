var assert = require('assert');

//
// Função que retorna o dobro de um número qualquer
//
var dobro = function(num) {

    return num * 2;
    
}





try {
    assert.equal(20, dobro(10));
} catch(e) {
    console.log(e);
}