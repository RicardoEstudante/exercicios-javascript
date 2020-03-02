const assert = require('assert');

/*
* Faça um programa que peça ao usuário preencher 10 valores reais em um vetor e depois peça para que ele
* escolha um índice (de 0 - 9). A partir desse índice, copie 3 valores para um segundo vetor. Exemplo:
* vetor_original [2.3, 4.2, 5.6, 7.1, 2.8, 9.0, 1.0, 4.8, 5.5, 6.3]
* posição escolhida: 2
* vetor_cópia [ 5.6, 7.1, 2.8]
 */

var vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var vetor2 = [];
var num = 8;
var teste = false;

if (num < 7){
    for (let i = num; i < num + 3; i++) {
        for (let j = 0; j < 3; j++) {
            vetor2[j] = vetor[i];
            i++;
        }
    }
}
else {
    for (let i = num; i < vetor.length; i++) {
        if(teste == false) {
            for (let j = 0; j < 3; j++) {
                while (vetor[i] != undefined && i > 6) {
                    vetor2[j] = vetor[i];
                    j++;
                    i++;
                }
                    vetor2[j] = vetor[i - vetor.length];
                    vetor.length--;

                if(vetor2.length == 3){
                    teste = true;
                }


            }
        }
    }
}

try{
    assert.deepEqual([8,0,1], vetor2);
}catch (e) {
    console.log(e);
}
