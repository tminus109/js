// alert("Hello, JavaScript!");

/* var myNum = 11;

if (myNum === 10) {
    document.write("myNum is equal to 10.");
} else {
    document.write("myNum is not equal to 10.");
} */

/* var myAge = 21;

if (myAge > 30) {
  document.write("You are over 30.");
} else if (myAge > 20) {
  document.write("You are over 20.");
} else {
  document.write("You are younger than 20.");
} */

/* for (i = 0; i < 10; i++) {
  console.log("Hi!!");
} */

/* var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {
  if (i === 2) {
    continue;
  } else if (i === 4) {
    console.log("Break.");
    break;
  }
  console.log("This is link # " + i);
}

for (i = 0; i < links.length; i++) {
  links[i].className = "link-" + i;
} */

/* function getAverage(a, b) {
  var average = (a + b) / 2;
  return average;
}

myResult = getAverage(7, 12);
console.log("myResult = " + myResult); */

/* var a = "apple";
var b = 5;

if (isNaN(a)) {
  console.log("This is not a number!");
} else {
  console.log(a * b);
} */

/* var myString = 'I\'m a "fun" string';

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja"));

if (myString.indexOf("ninja") === -1) {
  console.log("The word ninja is not in the string.");
} */

/* var string1 = "abc";
var string2 = "bcd";
var string3 = "ABC";

console.log(string1 === string3);
console.log(string1 < string2); */

/* var str = "Hello, World!";
var str2 = str.slice(0, 5);

console.log(str2);
console.log(str.slice(7)); */

/* var tags = "chicken, beef, pork, fish";
var tagsArray = tags.split(",");
var tagsArrayTrimmed = [];

for (i = 0; i < tagsArray.length; i++) {
  tagsArrayTrimmed.push(tagsArray[i].trim());
}

console.log(tagsArrayTrimmed); */
