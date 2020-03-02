var assert = require('assert');

var mmc = function (num1, num2) {

    var temp;
    var a = num1;
    var b = num2;
    
    do{
        temp = a % b;
        
        a = b;
        b = temp;

    }while(temp != 0);
    
    return (num1 * num2) / a;
}

try {
    assert.equal(60, mmc(12, 20));
} catch (e) {
    console.log(e);
}