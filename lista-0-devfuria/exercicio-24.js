var assert = require('assert');

var haDuplicados = function(arr) {
    var i;
    for(i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) != i) {
            return true;
        };
    }
    return false;
}

try {

    assert.equal(true, haDuplicados([100, 200, 300, 300, 500]));
    assert.equal(false, haDuplicados([100, 200, 300, 400, 500]));

} catch(e) {
    console.log(e);
}