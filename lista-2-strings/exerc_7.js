const assert = require("assert");
/*
Escreva um programa que receba o nome completo do usuário, e que separe o sobrenome (o último!) e
armazene em outra String. Exiba essa nova String. Exemplo:
Nome: Alan Mathison Turing
Sobrenome: Turing
 */

let nomeCompleto = "Ricardo Carvalho Santos";
let arrayNomes = nomeCompleto.split(" ");
let sobrenome = arrayNomes[arrayNomes.length -1];

try{
    assert.deepEqual("Santos", sobrenome);
}catch (e) {
    console.log(e);
}