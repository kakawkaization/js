"use strict";

var user = {
	name: "Vasya",
	hi: function() { alert(this.name); },
	bye: function() { alert("Bye"); }
};

user.hi();

(user.name == "Vasya" ? user.hi : user.bye)();
