// instanceof 只能判断引用类型 不能判断基本数据类型
// 用来判断构造函数的prototype属性是否出现在对象的原型链中的任何位置

function myInstanceof(left: Object, right: Function) {
  let prototype = right.prototype,
    proto = Object.getPrototypeOf(left);

  while (true) {
    if (!proto) return false;

    if (prototype === proto) return true;

    proto = Object.getPrototypeOf(proto);
  }
}
