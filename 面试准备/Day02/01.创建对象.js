// 1. 对象字面量
const obj = {
  a: 1,
};

// 2. 构造函数
const obj2 = new Object();

// 3. 工厂模式
function createPerson(name, age) {
  const obj3 = {
    name,
    age,
    setName: function (name) {
      this.name = name;
    },
  };
  return obj3;
}

// 4. 自定义构造函数模式
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.setName = function (name) {
    this.name = name;
  };
}

// 5. 构造函数+原型
function SuperPerson(name, age) {
  this.name = name;
  this.age = age;
}
SuperPerson.prototype.setName = function (name) {
  this.name = name;
};
