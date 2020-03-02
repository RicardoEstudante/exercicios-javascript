var assert = require('assert');

var arr = [6, 10, 4, 21, 9],
    iMaior = 0,
    iMenor = 0,
    


for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[iMaior]) {
        iMaior = i;
    }

    if (arr[i] < arr[iMenor]) {
        iMenor = i;
    }
}

try {

    assert.equal(3, iMaior);
    assert.equal(2, iMenor);

} catch (e) {
    console.log(e);
}