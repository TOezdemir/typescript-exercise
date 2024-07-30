console.log("Aufgaben Tag 6");
console.log("\n");
console.log("Array-TS-Level-1_14 (copy)");

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];
// Spucke Ergenbnisse aus:
let actorsReference: string[] = oldHollywoodActors;
actorsReference.push("Marilyn Monroe");
console.log("Original: ", oldHollywoodActors);
console.log("Referenz: ", actorsReference);

// Erstelle Kopien:
const oldHollywoodActorsConcat: string[] = oldHollywoodActors.concat();
const oldHollywoodActorsSlice: string[] = oldHollywoodActors.slice();
const oldHollywoodActorsSpreadOp: string[] = [...oldHollywoodActors];

// Verändere die Kopien:
oldHollywoodActorsConcat[0] = "James Dean";
oldHollywoodActorsSlice[1] = "Grace Kelly";
oldHollywoodActorsSpreadOp[2] = "Humphrey Bogart";

// Ausgabe der Arrays:
console.log("\nNach Änderungen:");
console.log("Original:", oldHollywoodActors);
console.log("Referenz:", actorsReference);
console.log("Kopie (concat):", oldHollywoodActorsConcat);
console.log("Kopie (slice):", oldHollywoodActorsSlice);
console.log("Kopie (spread):", oldHollywoodActorsSpreadOp);

console.log("\n");
console.log("Array-TS-Sort-Level-1_3 (sort)");

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
console.log("Unsortiert: ", numArray1);
const sortierenNumArray1 = numArray1.sort((a: number, b: number) => a - b);
console.log("Aufsteigend sortiert: ", sortierenNumArray1);

console.log("\n");
console.log("Array-TS-Sort-Level-2_3 (slice)");
const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
];
const newPainters: string[] = [
  "Pablo Picasso",
  "Salvador Dalí",
  "Frida Kahlo",
  "Georgia O'Keeffe",
];
console.log("Old Painters: ", oldPainters);
console.log("New Painters: ", newPainters);
console.log("\n");
// Mit Concat:
const allPainters: string[] = oldPainters.concat(newPainters);
console.log("Ausgabe all Painters mit Concat", allPainters);

const femalePaintersConcat: string[] = allPainters.filter(
  (painter) =>
    painter === "Mary Cassatt" ||
    painter === "Rosa Bonheur" ||
    painter === "Frida Kahlo" ||
    painter === "Georgia O'Keeffe"
);
console.log("Female Painters: ", femalePaintersConcat);

const malePaintersConcat: string[] = allPainters.filter(
  (painter) =>
    painter === "Caspar David Friedrich" ||
    painter === "Francisco de Goya" ||
    painter === "Édouard Manet" ||
    painter === "Pablo Picasso" ||
    painter === "Salvador Dalí"
);
console.log("Male Painters: ", malePaintersConcat);

console.log("\n");
// Mit Spread
const allPaintersSpread: string[] = [...oldPainters, ...newPainters];
console.log("Ausgabe all Painters mit Spread: ", allPaintersSpread);
const femalePaintersSpread: string[] = allPaintersSpread.filter(
  (painter) =>
    painter === "Mary Cassatt" ||
    painter === "Rosa Bonheur" ||
    painter === "Frida Kahlo" ||
    painter === "Georgia O'Keeffe"
);
const malePaintersSpread: string[] = allPaintersSpread.filter(
  (painter) =>
    painter === "Caspar David Friedrich" ||
    painter === "Francisco de Goya" ||
    painter === "Édouard Manet" ||
    painter === "Pablo Picasso" ||
    painter === "Salvador Dalí"
);
console.log("Female Painters: ", femalePaintersSpread);
console.log("Male Painters: ", malePaintersSpread);

console.log("\n");
console.log("Array-TS-Level-3_1");

const artworks: string | undefined = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];
console.log(artworks)

const artworksDate: string | undefined = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];
console.log(artworksDate)
// function 