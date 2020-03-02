var assert = require('assert');

/*
*  Faça um programa que preencha um vetor de 5 valores inteiros (pelo usuário) e copie esses valores para um
* segundo vetor, mas com a ordem das posições invertidas. Um exemplo do resultado esperado:
* vetor_original [ 1, 2, 3, 4, 5]
* vetor_cópia [ 5, 4, 3, 2, 1]
 */

let vetor1 = [1,2,3,4,5];
let vetor2 = [];

for (let i = 0; i < vetor1.length; i++) {
    vetor2[vetor1.length -i-1] = vetor1[i];
}

try{
    assert.deepEqual([5,4,3,2,1], vetor2);
}catch (e) {
    console.log(e);
}