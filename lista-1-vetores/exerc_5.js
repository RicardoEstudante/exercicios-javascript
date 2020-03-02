const assert = require('assert');

/*
Faça um programa receba valores reais para 2 vetores de 3 elementos cada. Após o preenchimento, copie
esses valores para um 3º vetor, de 6 elementos. Os 3 primeiros valores devem ser do vetor que tiver o maior
valor de somatória, entre os 2 vetores de entrada. Exemplo:
vetor1 [2.3, 4.7, 1.4], soma resulta em 8.4
vetor2 [1.6, 6.2, 3.5], soma resulta em 11.3
vetor3 [1.6, 6.2, 3.5, 2.3, 4.7, 1.4]
 */

let vetor1 = [2.3, 4.7, 1.4];
let vetor2 = [1.6, 6.2, 3.5];
let vetor3 = [];

let somaVetor1 = 0, somaVetor2 = 0;
let length = vetor1.length + vetor2.length;

for (let i = 0; i <vetor1.length; i++) {
    somaVetor1 += vetor1[i];
    somaVetor2 += vetor2[i];
}


for (let i = 0; i < length; i++) {
    if (somaVetor2 > somaVetor1) {
        if(i < (length / 2)){
        vetor3[i] = vetor2[i];
        }else{
            vetor3[i] = vetor1[i - length /2];

        }
    }else{
        if(i < (length / 2)){
            vetor3[i] = vetor1[i];
        }else{
            vetor3[i] = vetor2[i - (length / 2)]
        }
    }
}

try{
    assert.deepEqual([1.6, 6.2, 3.5, 2.3, 4.7, 1.4], vetor3)
}catch (e) {
    console.log(e);
}