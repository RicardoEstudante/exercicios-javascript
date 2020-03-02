var assert = require('assert');

/*
* Faça um programa que receba uma frase digitada pelo usuário e informe qual é o tamanho dela em
* caracteres.
 */

var frase = "ricardo";
var numeroLetras = frase.length;

try{
    assert.deepEqual(7, numeroLetras);
}catch (e) {
    console(e);
}