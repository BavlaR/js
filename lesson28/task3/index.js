const mult = num => num2 => num * num2;

const multRes = mult(5)(5);

const twice = res => res * 2;

const triple = res => res * 3;

export { mult, twice, triple };
