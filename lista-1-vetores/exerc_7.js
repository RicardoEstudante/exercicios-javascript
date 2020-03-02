var assert = require('assert');

/*
* Faça um programa que preencha um vetor com 9 elementos, e inverta esse mesmo vetor, trocando o primeiro
* elemento pelo último, o segundo pelo penúltimo, e assim por diante. Exemplo:
* vetor [ 0, 1, 2, 3, 4, 5, 6, 7, 8] => vetor [ 8, 7, 6, 5, 4, 3, 2, 1, 0]
 */

let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let metade = (vetor.length-1) / 2;
let aux = 0;

for (let i = 0; i < vetor.length; i++) {
    for (let j = vetor.length - 1; j > metade; j--) {
        aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        i++;
    }
}

try{
    assert.deepEqual([9,8,7,6,5,4,3,2,1], vetor)
}catch (e) {
    console.log(e);
}
console.table(vetor);
