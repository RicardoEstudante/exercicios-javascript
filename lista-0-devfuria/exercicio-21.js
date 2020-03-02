var assert = require('assert');

//
// Seu código
//
var somarLista = function(lista){

    var b = 0;

    for(var i in lista){
        b += lista[i];
    }
    return b;
}


//
// Seu teste
//
try {
    
    lista = [10, 20, 30, 0]
    console.log(somarLista(lista));
    assert.equal(60, somarLista(lista));

} catch(e) {
    console.log(e);
}