console.log(
  "%c Tag 17: Wiederholungsaufgaben",
  "color: teal; background: white"
);
console.log("\n");

console.log(
  "%c Functions-TS-Grundlagen-Level-1_1",
  "color: teal; background: white"
);
function intro1() {
  console.log("Hello Function!");
}

intro1();

const helloWorld = () => {
  console.log("Hello Arrowfunction!");
};

helloWorld();

const add = (a: number, b: number, c: number, d: number) => a + b + c + d;

console.log(add(1, 3, 5, 6));

console.log("\n");

console.log(
  "%c Functions-TS-Grundlagen-Level-1_2",
  "color: teal; background: white"
);

function helloHml() {
  const helloElement = document.createElement("p") as HTMLParagraphElement;
  helloElement.textContent = "Hello";
  const body = document.body;
  body.appendChild(helloElement);
}

helloHml();

const add2 = (a: number, b: number) => a + b;
console.log(add2(5, 17));

const multiply = (a: number, b: number) => a * b;
console.log(window.alert(multiply(10, 3)));

function objctsKeys(obj: object): void {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key);
  }
}

const person = {
  firstName: "Bobo",
  lastName: "Slomo",
  age: 25,
};

objctsKeys(person);

const objectKeys2 = (obj2: object) => {
  const keys = Object.keys(obj2);
  for (const key of keys) {
    console.log(key);
  }
};

objectKeys2(person);
