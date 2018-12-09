"use strict";

function sum(a) {
    return function (b) {
        alert(a + b);
    }
}

sum(1)(2);
sum(5)(-1);