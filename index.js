var dateFormat = require('dateformat');
console.log("AAA");
var now = new Date();
console.log(now);
var x = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
console.log(x);