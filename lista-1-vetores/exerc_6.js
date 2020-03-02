const assert = require('assert');

/*
* Faça um programa que preencha um vetor com 8 elementos, e inverta esse mesmo vetor, trocando o primeiro
* elemento pelo último, o segundo pelo penúltimo, e assim por diante. Exemplo:
* vetor [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ] => vetor [ 7, 6, 5, 4, 3, 2, 1, 0]
 */

var vetor = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var aux = 0;
var metade = vetor.length / 2;

for (let i = 0; i < metade; i++) {
    for (let j = vetor.length -1 ; j > metade - 1; j--) {
            aux = vetor[i]; // 8
            vetor[i] = vetor[j];
            vetor[j] = aux;
            i++;
    }
}

try{
    assert.deepEqual([ 7, 6, 5, 4, 3, 2, 1, 0], vetor)
}catch (e) {
    console.log(e);
}
console.table(vetor);