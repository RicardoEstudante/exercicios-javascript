var assert = require('assert');

/*
* Faça um programa que receba e grave um vetor de 10 elementos inteiros e mostre qual é o maior e qual é
* menor valor desse vetor.
 */

var vetor = [ 8, 7, 6, 5, 4, 3, 2, 1, 0];
var aux = 0;
var controle;

    for (let i = 0; i < vetor.length; i++) {
        controle = true;
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[j] > vetor[j + 1]){
                aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
                controle = false;
            }
        }
        if(controle){
            break;
        }
    }

try{
    assert.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8], vetor);
}catch (e) {
    console.log(e);
}
console.table(vetor);