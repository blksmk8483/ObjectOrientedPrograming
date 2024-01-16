'use strict';

// ========================================================
// ========================================================
// ========================================================
// ----------   CONSTRUCTOR FUNCTIONS   ----------
// ========================================================
// ========================================================
// ========================================================

// // Constructor functions in practice use a capitol letter, doesn't actually do anything.

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

// // I can create a new object prototype to connect (inherit) from my constructor
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// brandon.calcAge();
// matilda.calcAge();

// console.log(brandon.__proto__);
// console.log(brandon.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(brandon));

// Person.prototype.yourMom = function () {
//   console.log(`Your moms name is ${this.firstName}.`);
//   console.log(`Your moms age is ${this.birthYear - 20}`);
// };
// brandon.yourMom();

// Person.prototype.species = 'Homo Sapiens';
// console.log(brandon.species, matilda);

// console.log(brandon.hasOwnProperty('firstName'));
// console.log(brandon.hasOwnProperty('species'));

// ========================================================
// ========================================================
// ========================================================
// ----------   PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS   ----------
// ========================================================
// ========================================================
// ========================================================
// console.log(brandon.__proto__);
// console.log(brandon.__proto__.__proto__);
// console.log(brandon.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.length);
// console.log(arr.unique().length);

// const h1 = document.querySelector('h1');

// ========================================================
// ========================================================
// ========================================================
// ----------   CHALLENGE #1   ----------
// ========================================================
// ========================================================
// ========================================================

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
// Test data:
// - Data car 1: 'BMW' going at 120 km/h
// - Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// console.log(Car);

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log(car1, car2);

// Car.prototype.acc = function () {
//   console.log(`${this.make} is going at ${this.speed + 10}km/h`);
// };

// Car.prototype.brake = function () {
//   console.log(`${this.make} is going at${this.speed - 5}km/h`);
// };

// car1.acc();
// car1.brake();
// car2.acc();
// car2.brake();

// ========================================================
// ========================================================
// ========================================================
// ----------   ES6 CLASSES   ----------
// ========================================================
// ========================================================
// ========================================================

// class expression
// const PersonCL = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1996);
const walter = new PersonCl('Walter White', 1996);

// ========================================================
// ========================================================
// ========================================================
// ----------   SETTERS AND GETTERS   ----------
// ========================================================
// ========================================================
// ========================================================

const account = {
  owner: 'Brandon',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

// ========================================================
// ========================================================
// ========================================================
// ----------   STATIC METHODS   ----------
// ========================================================
// ========================================================
// ========================================================

Person.hey = function () {
  console.log('Hey there 👋');
};

Person.hey();

PersonCl.hey();
