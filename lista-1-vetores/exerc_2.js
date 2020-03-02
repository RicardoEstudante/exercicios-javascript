var assert = require('assert');

/*
* crie um vetor com N elementos e retorne a quantidade de elementos impares e pares no vetor
 */

let vetor = [1,2,2,3,5,4,5];
let par = 0, impar = 0;


for (let i = 0; i < vetor.length; i++) {
    if (vetor[i]%2 === 0){
        par++;
    }else
        impar++;
}

try{
    assert.deepEqual(3, par);
    assert.deepEqual(4, impar);
}catch (e) {
    console.log(e);
}