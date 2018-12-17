"use strict";

function makeBuffer() {
    var buf = "";

    return function(a) {
        return buf += a;
    }

    return function() {
        return buf;
    }
}

var buffer = makeBuffer();

buffer("hehe");
buffer("tada")
alert(buffer());

