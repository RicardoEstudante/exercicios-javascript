var assert = require('assert');

/*
Escreva um programa que dado um valor numérico digitado pelo usuário (armazenando em uma String) e
imprima cada um dos seus dígitos por extenso. Exemplo:
Entre o número: 1683
Por extenso: um, seis, oito, três
*/

var numero = 5646544894;
var strign = numero.toString()

for (let i = 0; i < strign.length; i++) {
    if(strign[i] == 0){
        console.log("Zero");
    }if(strign[i] == 1){
        console.log("Um");
    }if(strign[i] == 2){
        console.log("Dois");
    }if(strign[i] == 3){
        console.log("Três");
    }if(strign[i] == 4){
        console.log("Quatro");
    }if(strign[i] == 5){
        console.log("Cinco");
    }if(strign[i] == 6){
        console.log("Seis");
    }if(strign[i] == 7){
        console.log("Sete");
    }if(strign[i] == 8){
        console.log("Oito");
    }if(strign[i] == 9){
        console.log("Nove");
    }
}