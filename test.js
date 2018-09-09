"use strict";

function Calculator() {
	this.read = function() {
		this.a = +prompt("a", "");
		this.b = +prompt("b", "");
	}

	this.sum = function() {
		return this.a + this.b;
	
	this.mul = function() {

	}

}

var calculalor = new Calculator();

calculalor.read();
alert(calculalor.sum());