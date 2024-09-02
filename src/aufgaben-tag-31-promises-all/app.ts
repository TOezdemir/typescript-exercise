console.log(
  "%c callback-TS-Level-1_3",
  "color: green; background-color: white"
);

function sayHello(name: string, callback: (message: string) => void) {
  const message = `Hallo, ${name}!`;
  callback(message);
}

function greetingCallback(message: string) {
  console.log(message);
}

sayHello("Talgo", greetingCallback);
sayHello("Voctorio", greetingCallback);
sayHello("Cliff", greetingCallback);

console.log("\n");
console.log(
  "%c callback-TS-Level-1_4",
  "color: green; background-color: white"
);

// function sayHello2(name: string, callback: (message: string) => void) {
//   const greetingPromise = new Promise<string>((resolve) => {
//     resolve(`Hallo, ${name}!`);
//   });
//   greetingPromise.then(callback);
// }

// function greetingCallback2(message: string) {
//   console.log(message);
// }

// Keine Ahnung ... irgendwas mit results und join?
const greetings = ["Togali", "Bobbo", "Rumpelkumpel"].map((name) => {
  return new Promise<void>((resolve) => {
    sayHello(name, (message) => {
      console.log(message, "Homework done?");
      resolve();
    });
  });
});

// Promise.all(greetings).then(() => {
//   console.log("Fertig?");
// });

console.log("\n");
console.log(
  "%c callback-TS-Level-2_2",
  "color: orange; background-color: white"
);

function processData(
  numbers: number[],
  absteigendSortieren: (numbersArray1: number[]) => number[],
  summenVerdoppeln: (numbersArray2: number[]) => number[]
): Map<number, string> {
  const absteigendArray = absteigendSortieren(numbers);
  const dopplerArray = summenVerdoppeln(absteigendArray);

  const ergebnisMap = new Map<number, string>();
  for (const num of dopplerArray) {
    ergebnisMap.set(num, num.toString(16)); // hexadezimal Zeug
  }
  return ergebnisMap;
}

function absteigendSortieren(numbersArray1: number[]): number[] {
  return [...numbersArray1].sort((a, b) => b - a);
}

function summenVerdoppeln(numbersArray2: number[]): number[] {
  return numbersArray2.map((num) => num * 2);
}

const array1 = [5, 7, 3, 12, 7, 42, 30];
const result1 = processData(array1, absteigendSortieren, summenVerdoppeln);
console.log("Ergebnis 1 ist: ", result1);

const array2 = [10, 3, 7, 12, 4];
const result2 = processData(array2, absteigendSortieren, summenVerdoppeln);
console.log("Ergebnis 2:", result2);
