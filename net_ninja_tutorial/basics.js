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

/* var myArray = [];
myArray[0] = 25;
myArray[1] = 35;
myArray[2] = true;
myArray[3] = "hello";

console.log(myArray);

myArray[2] = false;

console.log(myArray);

var myArray2 = [10, 20, "hi", false];

console.log(myArray2);

var myArray3 = new Array();
var myArray4 = new Array(5);

console.log(myArray2.sort());
console.log(myArray2.reverse()); */

/* var myCar = new Object();
myCar.speed = 50;
myCar.driver = "Shaun";

myCar.drive = function () {
  console.log("driving");
};

console.log(myCar.driver);
myCar.drive();

var myCar2 = {
  speed: 70,
  driver: "Bill",
  drive: function () {
    console.log("driving again");
  },
  thisKeywordTest: function () {
    console.log(this);
  },
  logDriver: function () {
    console.log("The driver is " + this.driver + ".");
  },
};

console.log(myCar2.speed);
console.log(myCar2.driver);
myCar2.drive();

console.log(this);
myCar2.thisKeywordTest();
myCar2.logDriver(); */

/* var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function () {
    console.log("Now driving.");
  };
};

var myCar = new Car(100, "Eve");

myCar.drive();
console.log(myCar.maxSpeed); */

/* class Fruit {
  constructor(name) {
    this.name = name;
    this.grow = function () {
      console.log(": )");
    };
  }
}

var fruit1 = new Fruit("apple");

console.log(fruit1.name);
fruit1.grow(); */

/* class Animal {
  constructor(name, speak) {
    this.name = name;
    this.speak = function () {
      console.log(speak);
    };
  }
}

var animal = new Animal("dog", "vuff");

console.log(animal.name);
animal.speak(); */

/* var myDate = new Date();
var myPastdate = new Date(1545, 0, 31, 10, 0, 59);
var myFutureDate = new Date(2514, 0, 1);

console.log(myDate);
console.log(myPastdate);
console.log(myFutureDate); */

/* var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() === birthday2.getTime()) {
  console.log("Birthdays are equal.");
} else {
  console.log("Birthdays are not equal.");
} */
