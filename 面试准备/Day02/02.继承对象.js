// 1. 原型链继承
function Supper() {
  this.supProp = "Super property";
}
Supper.prototype.showSupperProp = function () {
  console.log(this.supProp);
};

function Sub() {
  this.subProp = "Sub property";
}
Sub.prototype.showSubProp = function () {
  console.log("this.subProp", this.subProp);
};

Sub.prototype = new Supper();
Sub.prototype.constructor = Sub;

// 2. 借用构造函数的继承
function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, price) {
  Person.call(this, name, age);
  this.price = price;
}

// 3. 组合继承
function Person2(name, age) {
  this.name = name;
  this.age = age;
}
Person2.prototype.setName = function (name) {
  this.name = name;
};

function Student2(name, age, price) {
  Person2.call(this, name, age);
  this.price = price;
}
Student2.prototype.setAge = function (age) {
  this.age = age;
};

Student2.prototype = new Person2();
Student2.prototype.constructor = Student2;

// 4. 原型式继承
const Person = {
  name: "father",
  colors: ["red"],
};

const anotherP = Object.create(Person, {
  name: {
    value: "children",
  },
});

// 5. 寄生式继承
function content(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

function createAnother(obj) {
  const clone = content(obj);
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}

var person = {
  name: "hqc",
};

var now = createAnother(person);
now.sayHi();

// 寄生组合式继承
function Person3(name) {
  this.name = name;
}
Person3.prototype.sayName = function () {
  console.log("my name is " + this.name);
};

function Student3(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

function content(obj) {
  function Fn() {}
  Fn.prototype = obj;
  return new Fn();
}

Student3.prototype = content(Person3.prototype);
Student3.prototype.constructor = Student3;

Student3.prototype.sayMyGrade = function () {
  console.log("this.grade", this.grade);
};
