"use strict";

function Calculator(stringOp) {
	var arr = [];

	arr = stringOp.split(" ");

	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == "+") {
			return +(arr[0]) + +(arr[2]);
		}
		else if(arr[i] == "-") {
			return +(arr[0]) - +(arr[2]);
		}
	}
}

alert(Calculator("1 - 2"));