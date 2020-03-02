const assert = require('assert');

/*
Escreva um programa que recebe o nome da disciplina e mostra se é da categoria de Programação ou não.
Todas as disciplinas de Programação começam ou terminam com a palavra “Programação”. Exemplo:
Digite a disciplina: Linguagem de Programação
É da categoria de Programação
Digite a disciplina: Banco de Dados
Não é da categoria Programação
Digite a disciplina: Programação para Internet
É da categoria de Programação
 */

let nome = "lógica de programação";
let array = nome.toLowerCase().split(" ");
let programacao = false;



for (let i = 0; i < array.length; i++) {
    if(array[i] == "programação"){
        programacao = true;
    }
}
try{
    assert.equal(true, programacao);
}catch (e) {
    console.log(e);
}