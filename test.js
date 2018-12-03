"use strict";

function makeCounter() {
    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}

var counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

var counter2 = makeCounter();

alert(counter2());