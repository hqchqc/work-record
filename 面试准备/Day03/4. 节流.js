function throttle(fn, delay) {
  const preTime = Date.now();

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now();

    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
