export const compose = (...funcs) => value => funcs.reduce((acc, fn) => fn(acc), value);
