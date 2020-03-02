var assert = require('assert');

/*
Faça um programa que receba 2 palavras do usuário e verifica se ambas são iguais, seguinte a sequência:
• Primeiro deve ser verificado se ambas possuem o mesmo tamanho, caso não seja mostrar uma
mensagem de erro.
• Se tiverem o mesmo tamanho, verificar se são iguais somente comparando os caracteres (sem
diferenciar maiúsculas e minúsculas), se não forem iguais mostre uma mensagem de erro.
• Por último comparar se são exatamente iguais, ou seja, considerando as maiúsculas e minúsculas.
 */
var tamanho = false;
var letrasIguais = false;
var totalIgual = false;
var string1 = "ricardo";
var string2 = "ricardo";
var aux1 = string1.toLowerCase();
var aux2 = string2.toLowerCase();

    if(string1.length == string2.length){
        tamanho = true;
    }

    if(tamanho){
        if ( aux1 == aux2){
           letrasIguais = true;
        }
    }
    if (letrasIguais){
        if (string2 == string1){
            totalIgual = true;
        }
    }

   try{
        assert.equal(true, tamanho);
        assert.equal(true, letrasIguais);
        assert.equal(true, totalIgual);
   }catch (e) {
       console.log(e);
   }