export const invokeAll = (...funcs) => (...args) =>
  funcs.forEach((func) => func(...args));
