'use strict';

// ========================================================
// ========================================================
// ========================================================
// ----------   CONSTRUCTOR FUNCTIONS   ----------
// ========================================================
// ========================================================
// ========================================================

// Constructor functions in practice use a capitol letter, doesn't actually do anything.

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const brandon = new Person('Brandon', 1984);
console.log(brandon);

const Person1 = function (firstName, birthYear) {
  this.first = firstName;
  this.BobsYourUncle = birthYear;
};

const brandon1 = new Person1('Brandon', 1984);
console.log(brandon1);

// 1. New empty object is created {}
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatcially returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1908);

console.log(matilda, jack);

// ========================================================
// ========================================================
// ========================================================
// ----------   PROTOTYPES   ----------
// ========================================================
// ========================================================
// ========================================================

// I can create a new object prototype to connect (inherit) from my constructor
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

brandon.calcAge();
matilda.calcAge();

console.log(brandon.__proto__);
console.log(brandon.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(brandon));

Person.prototype.yourMom = function () {
  console.log(`Your moms name is ${this.firstName}.`);
  console.log(`Your moms age is ${this.birthYear - 20}`);
};
brandon.yourMom();

Person.prototype.species = 'Homo Sapiens';
console.log(brandon, matilda);
