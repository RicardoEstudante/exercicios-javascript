var assert = require('assert');

/*
* Adapte o exercício anterior para mostrar também a quantidade de vogais e espaços (caracter ‘ ‘). Dica: use
* toUpperCase() ou toLowerCase().
 */

var nome = "Ricardo Santos Santos";
var nomeMai = nome.toUpperCase();
var nomeMin = nome.toLowerCase();
var espaços = 0;
var vogais  = 0;
var consoantes = 0;

for (let i = 0; i < nome.length; i++) {
   if(nome[i] == ' '){
       espaços++;
   }else if(nomeMin[i] == 'a' || nomeMin[i] == 'e' || nomeMin[i] == 'i' || nomeMin[i] == 'o' || nomeMin[i] == 'u'){
        vogais++;
   }else{
       consoantes++;
   }
}

try{
    assert.deepEqual(2, espaços);
    assert.deepEqual(7, vogais);
    assert.deepEqual(12, consoantes);
    assert.deepEqual("ricardo santos santos", nomeMin);
    assert.deepEqual("RICARDO SANTOS SANTOS", nomeMai);
}catch (e) {
    console.log(e);
}
