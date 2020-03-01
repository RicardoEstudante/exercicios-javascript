const assert = require('assert');

/*
* Faça um programa que preencha 2 vetores de 5 posições e some cada elemento de posição correspondente
* desses vetores, armazenando o resultado em outro vetor. Exemplo:
* vetor1 [ 1, 2, 3, 4, 5] + vetor2 [ 6, 7, 8, 9, 10] = vetor3 [ 7, 9, 11, 13, 15]
 */

let vetor1 = [1,2,3,4,5];
let vetor2 = [1,2,3,4,5];
let vetor3 = [];

for (let i = 0; i < vetor1.length; i++) {
    vetor3[i] = vetor1[i] + vetor2[i];
}

try{
    assert.deepEqual([2,4,6,8,10], vetor3);
}catch (e) {
    console.log(e);
}
