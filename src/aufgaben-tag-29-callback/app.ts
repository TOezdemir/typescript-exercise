console.log("%c callback-TS-Level-1_1", "color: green");

// function addNumbers(a: number, b: number, callback: (sum: number) => void) {
//   const result: number = a + b;
//   if (callback) {
//     const sum = callback(result);
//     console.log(sum);
//   }
// }

// addNumbers(15, 10);

function addNumbers(a: number, b: number, callback: (sum: number) => void) {
  const result: number = a + b;
  callback(result);
}

function giveSum(sum: number) {
  console.log("Die Summe ist: ", sum);
}

addNumbers(10, 15, giveSum);

addNumbers(10, 15, (result) => {
  console.log("Die Summe ist: ", result);
});

console.log("\n");
console.log("%c callback-TS-Level-1_2", "color: green");

function addNumbers2(a: number, b: number, callback: (sum: number) => void) {
  const result: number = a + b;
  callback(result);
}

function showAlert(sum: number) {
  alert(`Die Summe ist: ${sum}`);
}

addNumbers2(10, 25, showAlert);

console.log("\n");
console.log("%c callback-TS-Level-1_4", "color: green");

function showMaximum(numbers: number[], callback: (max: number) => number) {
  const max = Math.max(...numbers);
  console.log("Das Maximum ist: ", max);
  const result = callback(max);
  console.log("Ermittle Ergebnis...");
  console.log("Das Ergebnis der Callback Funktion ist: ", result);
  console.log("...Fertig");
}

function powerOfTen(number: number): number {
  return Math.pow(number, 10);
}

const numbersArray = [1, 2, 3, 4, 10, 12, 14, 21, 24, 24.5];
showMaximum(numbersArray, powerOfTen);

console.log("\n");
console.log("%c callback-TS-Level-2_1", "color: orange");

function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => number
): number {
  const sumOfAB = a + b;
  const result1 = callback1(sumOfAB);
  const result2 = callback2(result1);
  return result2;
}

function double(num: number): number {
  return num * 2;
}

function convertToBinary(num: number): string | any {
  return num.toString(2);
}
let endResult = calculateSumAndMore(10, 15, double, convertToBinary);
console.log(endResult);

console.log("\n");
console.log("%c callback-TS-Level-2_1", "color: red");
