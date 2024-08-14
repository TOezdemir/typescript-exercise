//# Felder abholen:
const buttonCounterUpperCases = document.getElementById(
  "counterUpperCases"
) as HTMLButtonElement;
const buttonCounterSpaces = document.getElementById(
  "counterSpaces"
) as HTMLButtonElement;
const buttonCounterVocals = document.getElementById(
  "counterVocals"
) as HTMLButtonElement;
const textInput = document.getElementById("textInput") as HTMLInputElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

//# Zählerfunktionen bauen:
function countUpperCaseLetters(text: string): number {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (/[A-ZÄÖÜß]/.test(text[i]) && text[i] === text[i].toUpperCase()) {
      count++;
    }
  }
  return count;
}

function countSpaces(text: string): number {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      count++;
    }
  }
  return count;
}

function countVocals(text: string): number {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}

//# Eventlistener für Knöpfe bauen:
buttonCounterUpperCases?.addEventListener("click", () => {
  const text = textInput?.value;
  const result = countUpperCaseLetters(text);
  displayResult(result);
});

buttonCounterSpaces?.addEventListener("click", () => {
  const text = textInput?.value;
  const result = countSpaces(text);
  displayResult(result);
});

buttonCounterVocals?.addEventListener("click", () => {
  const text = textInput?.value;
  const result = countVocals(text);
  displayResult(result);
});

//# Ergebnis ausspucken:
function displayResult(result: number) {
  outputDiv.textContent = `Ergebnis: ${result}`;
}

console.log("\n");
console.log("Clean-Code-TS-Level-2_1");

// const getNumberText = (num: number | undefined): string =>
//   ["One", "Two", "Three", "Four", "Five"][num ? num - 1 : 0 - 1] ?? "Unknown";

// const userInput: number = Math.ceil(Math.random() * 7);
// console.log(userInput);
// const numberText = getNumberText(userInput);
// console.log(numberText);

const getRandomValue = (num: number): string =>
  ["One", "Two", "Three", "Four", "Five"][num ? num - 1 : 0 - 1];

const randomizedString: number = Math.ceil(Math.random() * 7);
console.log(randomizedString);
const randomizedNumber = getRandomValue(randomizedString);
console.log(randomizedNumber);
