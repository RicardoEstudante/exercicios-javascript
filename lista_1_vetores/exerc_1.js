var assert = require('assert');

/*
* Suponha um vetor com 5 valores inteiros. Mostre a soma de todos esses valores e a média desses valores.
 */

let vetor = [2,2,2,2,2];
let soma = 0, media = 0;

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
}
media = soma / vetor.length;

try{
    assert.deepEqual(10, soma);
    assert.deepEqual(2,  media);
}catch (e) {
    console.log(e);
}
