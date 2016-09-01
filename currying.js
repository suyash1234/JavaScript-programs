/* @Author: Suyash Nanda
     @Date : 1 sep 2016
     @Purpose : Program of calculating Arithmetic operation using curring method*/

var add = function(a) {
	return function(b) {
		return a+b;
	}
}
var sub = function(a) {
	return function(b) {
		return a-b;
	}
}
var mul = function(a) {
	return function(b) {
		return a*b;
	}
}
var div = function(a) {
	return function(b) {
		return a/b;
	}
}
var addition = add(5);
var sum = addition(93);
var substraction = sub(25)(24);
var multiplication = mul(5)(100);
var division = div(66)(11);
document.write(sum+ "</br>");
document.write(substraction+ "</br>");
document.write(multiplication+ "</br>");
document.write(division);
