Function.prototype.myNew = (fn, ...args) => {
  const obj = new Object();
  obj._proto_ = fn.prototype;

  const res = fn.apply(obj, args);
  return typeof ret === "object" ? ret || obj : obj;
};
