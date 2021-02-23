var fullname = "Cukas Chapman";
var lastInitial = fullname[6];

console.log('Last initial ', lastInitial);
console.log("Charatcter at index", fullname[7])

var substring1 = fullname.substring(2,5)
console.log('Substring method', substring1);

var uCase = fullname.toUpperCase();
var lCase = fullname.toLowerCase();

console.log("to upper case", uCase);
console.log("to lower case", lCase);

var splitString = fullname.split(" ");
console.log("split string", splitString);

var sliceString = fullname.slice(6);
console.log("slice string", sliceString);

console.log("index of", fullname.indexOf('C'));
console.log("index of", fullname.lastIndexOf('C'));