function objectFactor() {
  let newObject = {},
    constructror = Array.prototype.shift.call(arguments),
    result = null;

  if (typeof constructror !== "function") {
    console.error("type error");
    return;
  }

  newObject = Object.create(constructror.prototype);

  result = constructror.apply(newObject, arguments);

  let flag =
    result && (typeof result === "object" || typeof result === "function");

  return flag ? result : newObject;
}
