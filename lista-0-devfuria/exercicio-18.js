var assert = require('assert');

var mdc = function (num1, num2) {

    var temp;

    do{
        temp = num1 % num2;

        num1 = num2;
        num2 = temp;
    }while(temp != 0);

    return num1;

}

try {

    assert.equal(3, mdc(24, 9));
    assert.equal(10, mdc(30, 20));
} catch (e) {

}