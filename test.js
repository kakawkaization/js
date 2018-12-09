"use strict";

function makeBuffer() {
    var buf = '';

    return function buffer() {
        return buf;
    }

    function buffer(a) {
        buf += a;
    }

}

var buffer = makeBuffer();
alert(buffer());