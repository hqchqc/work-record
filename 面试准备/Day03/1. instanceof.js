Function.prototype.myInstanceof = (A, B) => {
  let p = A;
  while (p) {
    p = p.__proto__;
    if (p === B.prototype) {
      return true;
    }
  }
  return false;
};
