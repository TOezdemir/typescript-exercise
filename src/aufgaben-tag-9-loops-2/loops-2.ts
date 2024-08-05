console.log("%c Loops-TS-Level-1_10", "color: deeppink; background: white");

//funktion funktionsname  parameter datentyp  rückgabe
function getHighestNumber(numbers: number[]): number {
  //                            parameter
  let highestNumber: number = numbers[0]; // Initialisierung der Variable
  //                  parameter!
  for (const num of numbers) {
    if (num > highestNumber) {
      highestNumber = num; // highestNumber aktualiseren, wenn größere Zahl gefunden wird
    }
  }
  return highestNumber; // Gib den das Array mit den höchsten Zahlen zurück!
}

const numbers1: number[] = [5, 10, 12, 18, 27]; //27
const numbers2: number[] = [2, -30, 11, 19, 53]; //53
const numbers3: number[] = [99, 111, 127, 230, 894]; //894

console.log(getHighestNumber(numbers1));
console.log(getHighestNumber(numbers2));
console.log(getHighestNumber(numbers3));

console.log("\n");
console.log("%c Loops-TS-Level-1_11", "color: deeppink; background: white");

function calculateSum(maxNumber: number): number {
  //  Variable initialisieren, um eine Summe zu speichern!
  let sum: number = 0;
  // Hier die for-Schleife, um von 1 bis maxNumber zu zählen:
  for (let i = 1; i <= maxNumber; i++) {
    // Aktuelle Zahl zur Summe hinzurechnen
    sum += i;
  }
  // Gib Informationen zurück
  return sum;
}

console.log(calculateSum(1)); // 1
console.log(calculateSum(10)); // 1+2+3+4+5+6+7+8+9+10

console.log("\n");
console.log("%c Loops-TS-Level-2_3", "color: deeppink; background: white");

function getNumberOfVowels(vowels: string): number {
  //Variable / Zähler initialisieren!
  let sumVowels: number = 0;
  // Funktion einsetzen, das Groß- und Kleinschreibung ignorieren lässt!
  // String also in Kleinbuchstaben umwandeln.
  const lowerCaseString = vowels.toLowerCase();
  // Schleife für jeden Buchstaben im String!
  for (let i = 0; i < vowels.length; i++) {
    // Hier hole ich mir die Buchstaben aus dem lowerCaseString ab!
    const buchstabe = lowerCaseString[i];

    // Hier schreibe ich die Bedingung, wenn buchstabe gleich a, oder buchstabe gleich ... , dann ...!
    if (
      buchstabe === "a" ||
      buchstabe === "e" ||
      buchstabe === "i" ||
      buchstabe === "o" ||
      buchstabe === "u"
    ) {
      // Wenn die Vokale gefunden werden, ... dann soll der Anzahl der Funde addiert werden!
      sumVowels++;
    }
  }
  // Gib sumVowels wieder zurück, um ihn außerhalb der Klammer aufrufen zu können!
  return sumVowels;
}

console.log(getNumberOfVowels("Hallo, hier ist Gatol"));
console.log(getNumberOfVowels("In der Weihnachtsbäckerei!"));
console.log(getNumberOfVowels("Der Osterhase bringt dem Unternehmen ein Ei!"));

console.log("\n");
console.log("%c Loops-TS-Level-2_4", "color: deeppink; background: white");

function addToFitfty(): void {
  let sum: number = 0;
  while (true) {
    const zufallsZahl: number = Math.floor(Math.random() * 10) + 1;
    console.log("Zufallszahl: ", zufallsZahl);
    sum += zufallsZahl;

    if (sum > 50) {
      console.log("Summe: ", sum);
      break;
    }
  }
}

addToFitfty();

console.log("\n");
console.log("%c Loops-TS-Level-3_6", "color: deeppink; background: white");

console.log("\n");
console.log("%c Loops-TS-Level-3_7", "color: deeppink; background: white");
