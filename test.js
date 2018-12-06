"use strict";

var sum = new Function("a, b", "return a + b");

var a =1, b = 2;

alert(sum(a, b));