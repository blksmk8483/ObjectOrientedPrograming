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

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter', 1996);
// const walter = new PersonCl('Walter White', 1996);

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

// PersonCl.hey();

// ========================================================
// ========================================================
// ========================================================
// ----------   OBJECT.CREATE   ----------
// ========================================================
// ========================================================
// ========================================================
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const brandon7 = Object.create(PersonProto);
// console.log(brandon7);

// brandon7.name = 'Brandon';
// brandon7.birthYear = 2002;
// brandon7.calcAge();

// console.log(brandon7.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// ========================================================
// ========================================================
// ========================================================
// ----------   CODING CHALLENGE #2   ----------
// ========================================================
// ========================================================
// ========================================================

// Your tasks:
// 1. Re-create Challenge #1,but this time using an ES6 class(call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// - Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK 😀

// class CarlCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   get speedUS() {
//     const usSpeed = this.speed / 1.6;
//     return `'${this.make}' going at ${usSpeed} mi/h`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     return `'${this.make}' going at ${speed} mi/h`;
//   }
// }

// const car1 = new CarlCl('Ford', 120);
// console.log(car1.speedUS);

// car1.speedUS = 50;
// console.log(car1);

// ========================================================
// ========================================================
// ========================================================
// ----   INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS   ----
// ========================================================
// ========================================================
// ========================================================

const Person9 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person9.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person9.call(this, firstName, birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person9.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ========================================================
// ========================================================
// ========================================================
// ----------   CODING CHALLENGE #3   ----------
// ========================================================
// ========================================================
// ========================================================

// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
// Test data:
// - Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% GOOD LUCK 😀

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.acc = function () {
//   const carSpeed = (this.speed += 20);
//   const carCharge = this.charge--;
//   console.log(
//     `${this.make} is going ${carSpeed} km/h, with a charge of ${carCharge}%.`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.acc();

// ========================================================
// ========================================================
// ========================================================
//  ---   Inheritance Between "Classes": ES6 Classes   ---
// ========================================================
// ========================================================
// ========================================================

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'mm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calcAge();

// ========================================================
// ========================================================
// ========================================================
//  ---  Inheritance Between "Classes": Object.create  ---
// ========================================================
// ========================================================
// ========================================================
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const brandon5 = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

// ========================================================
// ========================================================
// ========================================================
//   --------       Another Class Example       --------
// ========================================================
// ========================================================
// ========================================================

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected interface
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdrawl(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved!');
    }
  }

  static helper() {
    console.log('Helper');
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Brandon', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawl(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());

// console.log(acc1.#movements); //
Account.helper();
