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


// // Basic usage
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// // Saturday, June 9th, 2007, 5:46:21 PM
 
// You can use one of several named masks
var x=dateFormat(now, "isoDateTime");
console.log(x);
// 2007-06-09T17:46:21
 
// ...Or add your own
var x=dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
dateFormat(now, "hammerTime");
console.log(x);
// 17:46! Can't touch this!
 
// You can also provide the date as a string
var x=dateFormat("Jun 9 2007", "fullDate");
console.log(x);
// Saturday, June 9, 2007
 
// Note that if you don't include the mask argument,
// dateFormat.masks.default is used
var x=dateFormat(now);
console.log(x);
// Sat Jun 09 2007 17:46:21
 
// And if you don't include the date argument,
// the current date and time is used
var x=dateFormat();
console.log(x);
// Sat Jun 09 2007 17:46:22
 
// You can also skip the date argument (as long as your mask doesn't
// contain any numbers), in which case the current date/time is used
var x=dateFormat("longTime");
console.log(x);
// 5:46:22 PM EST
 
// And finally, you can convert local time to UTC time. Simply pass in
// true as an additional argument (no argument skipping allowed in this case):
var x=dateFormat(now, "longTime", true);
console.log(x);
// 10:46:21 PM UTC
 
// ...Or add the prefix "UTC:" or "GMT:" to your mask.
var x=dateFormat(now, "UTC:h:MM:ss TT Z");
console.log(x);
// 10:46:21 PM UTC
 
// You can also get the ISO 8601 week of the year:
var x=dateFormat(now, "W");
console.log(x);
// 42
 
// and also get the ISO 8601 numeric representation of the day of the week:
var x=dateFormat(now,"N");
console.log(x);
// 6


