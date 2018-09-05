"use strict";

function A() {
	return { toString: function() {
		return 1;
	} }
}

function B() {
	return { toString: function() {
		return 1;
	} }
}

var a  = new A;
var b =  new B;

alert(a == b);