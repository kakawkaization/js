"use strict";

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    }
    counter.currentCount = 1;

    return counter;
}

var counter = makeCounter();
alert(counter());
alert(counter());