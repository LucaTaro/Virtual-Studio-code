var info = document.getElementById("info");

var numero = 34.56789;

var msg = "<p> Il numero iniziale è " + numero + "</p>"

msg += "<p>Arrotondamento " + numero.toFixed(3) + "</p>";

msg += "<p>Cifre significative " + numero.toPrecision(3) + "</p>";

info.innerHTML = msg;

var x1 = "12";
var x2 = false;
var x3 = true;
var x4 = new Date();
var x5 = "123 456";

var n1 = Number(x1);
console.log(n1);
console.log(typeof n1);

var n2 = Number(x2);
console.log(n2);
console.log(typeof n2);

var n3 = Number(x4);
console.log(n3);
console.log(typeof n3);

var n5 = Number(x5);
console.log(n5);

var b = parseInt("10");
var a = parseInt("10.99");
var c = parseInt("               10                 ");

console.log(a);
console.log(b);
console.log(c);

var string = "Ciao";

var num = 44;

console.log(isNaN(string));