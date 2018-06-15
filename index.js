var dateFormat = require('dateformat');
console.log("AAA");
var now = new Date();
console.log(now);
var x = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
console.log(x);


var x = dateFormat(now, "dd mmmm yyyy, h:MM:ss TT");
console.log(x);

var x = dateFormat(now, "dd mmmm yyyy, h:MM:ss TT Z");
console.log(x);
