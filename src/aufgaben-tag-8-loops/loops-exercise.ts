console.log("Tag 8: Loops!");
console.log("\n");

console.log("Loops-TS-Level-1_1");
for (let i: number = 1; i <= 10; i++) {
  console.log("Hello World", i);
}

console.log("\n");
console.log("Loops-TS-Level-1_2");
let numbersToTen: number[] = [];
for (let i: number = 0; i <= 10; i++) {
  numbersToTen.push(i);
}
console.log(numbersToTen);

console.log("\n");
console.log("Loops-TS-Level-1_3");

let counterForWhile: number = -1;
while (counterForWhile < 10) {
  counterForWhile++;
  console.log("Hello World", counterForWhile);
}

console.log("\n");
console.log("Loops-TS-Level-1_4");

console.log("Ausgabe mit for of-Schleife");
const friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];
for (const name of friendNames) {
  console.log(name);
}

console.log("\n");
console.log("Ausgabe mit for-Schleife");
for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);
}

console.log("\n");
console.log("Loops-TS_Level-1_7");
console.log("Schau ins HTML!");
const outputElement = document.getElementById("output");
let notSoSpecialCounter: number = 1;
// do {
//   console.log("The number is: ", notSoSpecialCounter);
//   notSoSpecialCounter++;
// } while (notSoSpecialCounter <= 5);
do {
  if (outputElement) {
    outputElement.innerHTML += `<p>The number is: ${notSoSpecialCounter}!</p>`;
  }
  notSoSpecialCounter++;
} while (notSoSpecialCounter <= 5);
console.log("The number is: ", { notSoSpecialCounter });

console.log("\n");
console.log("Loops-TS-Level-1_8");
const outputElement2 = document.getElementById("output2");
let numberss: number = 0;
do {
  if (numberss % 2 === 0) {
    if (outputElement2) {
      outputElement2.innerHTML += `<p> ${numberss}</p>`;
    }
  }
  numberss++;
} while (numberss <= 20);

console.log("\n");
console.log("Loops-TS-Level-2_1");
function createImageNames(): string[] {
  const returnArray: string[] = [];
  for (let i: number = 1; i <= 100; i++) {
    // formatierung der Zahl mit führenden Nullen.
    const formatierteNummer = i.toString().padStart(3, "0"); // Fügt Nullen hinzu bis dreistellig
    // erstelle Dateinamen
    const imageName = `image_${formatierteNummer}.jpg`;
    // füge den Dateinamen zum Array hinzu
    returnArray.push(imageName);
  }
  return returnArray; //gib Array zurück
}
const imageNames = createImageNames();
console.log({ imageNames });

console.log("\n");
console.log("Loops-TS-Level-2_2");
console.log("Schau ins HTML!");

function generateLoopWord() {
  const numOsInput = document.getElementById("numOsInput") as HTMLInputElement;
  const outputDiv = document.getElementById("output3");

  if (numOsInput) {
    const numOs = parseInt(numOsInput.value, 10); //Wert aus dem Inputfeld lesen und in eine Zahl umwandeln!

    if (numOs > 0) {
      let loopWord = "L";
      for (let i: number = 0; i < numOs; i++) {
        loopWord += "o"; //"o" so oft hinzufügen, wie angegeben!!
      }
      loopWord += "p";
      outputDiv.textContent = loopWord;
    } else {
      outputDiv.textContent = "Bitte eine positive Zahl eingeben!";
    }
  }
}

numOsInput.addEventListener("click", generateLoopWord);

console.log("\n");
console.log("Loops-TS-Level-3_1");
let text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

function splitText(text: string, blockSize: number): string[] {
  const textInBlocksOfHundred: string[] = [];
  const totalLines = Math.ceil(text.length / blockSize); //zum Aufrunden

  for (let i = 0; i < totalLines; i++) {
    //index ist am Anfang 0, Schleife läuft so oft wie wir noch Zeilen haben(totalLines), auf index addieren
    // start und end bestimmten den Anfangs- und Endindex des jeweiligen Blocks

    const start = i * blockSize; // start bei index multipliziert mal blockSize(100) //startindex
    const end = start + blockSize; // ende bei start + blockSize(100)
    const lineNumber = i + 1; //Soll bei Zeile 1 starten // und speichert die aktuelle Zeilennummer

    const block = // wird erstellt indem der Textblock extrahiert und die Zeilennummer hinzugefügt wird
      text.substring(start, end) + `- ${lineNumber} of ${totalLines}`;
    textInBlocksOfHundred.push(block); //per push führen wir block in das Array ein
  }
  return textInBlocksOfHundred; // durch return geben wir das array zurück
}
const result = splitText(text, 100); // text wird eine maximale block größe von 1100 Zeichen haben
console.log({ result });
