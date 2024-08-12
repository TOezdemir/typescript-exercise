function add(a: number, b: number): number {
  const ergebnis1 = a + b;
  return console.log(ergebnis1);
}

function subtract(a: number, b: number): number {
  const ergebnis2 = a - b;
  return console.log(ergebnis2);
}

function multiply(a: number, b: number): number {
  const ergebnis3 = a * b;
  return console.log(ergebnis3);
}

function divide(a: number, b: number): number {
  const ergebnis4 = a / b;
  return console.log(ergebnis4);
}

export {
  add as addNumbers,
  subtract as subtractNumbers,
  multiply as multiplyNumbers,
  divide as divideNumbers,
};
