const assert = require('assert');
/*
Faça um programa que receba uma frase digitada pelo usuário e depois peça para o mesmo digitar uma letra,
que deve ser buscada dentro da frase e exiba em quais posições está presente a letra. Ex.:
Digite a frase: A linguagem Javascript
Digite uma letra: a
Letra ‘a’ na posição 0
Letra ‘a’ na posição 7
Letra ‘a’ na posição 13
Letra ‘a’ na posição 15
 */

let string = "Ricardo Carvalho Santos";
let letra = "r"
let numOcorrencias = 0;

for (let i = 0; i < string.length; i++) {
    if (string.toLowerCase()[i] == letra){
        numOcorrencias++;
    }
}
try{
    assert.equal(3, numOcorrencias);
}catch (e) {
    console.log(e);
}

