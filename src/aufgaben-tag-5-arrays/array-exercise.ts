console.log("Aufgaben Tag 5: Arrays");
console.log("\n");
console.log("Array-TS-Level-1_1");
const bucketList: string[] = ["Japan", "Oregon", "Tolga"];
console.log(bucketList);

const luckyNumbers: number[] = [4, 8, 15, 16, 23, 42];
console.log(luckyNumbers);

const favouritePeople: string[] = ["Spiderman", "Luffy", "Goku"];
console.log(favouritePeople);

console.log("\n");
console.log("Array-TS-Level-1_2");

const bucketListVariable0: string = bucketList[0];
const bucketListVariable1: string = bucketList[1];
const bucketListVariable2: string = bucketList[2];
console.log(
  bucketListVariable0,
  "\n",
  bucketListVariable1,
  "\n",
  bucketListVariable2
);
console.log(bucketListVariable0);
console.log(bucketListVariable1);
console.log(bucketListVariable2);

const luckyNumber0: number = luckyNumbers[0];
const luckyNumber1: number = luckyNumbers[1];
const luckyNumber2: number = luckyNumbers[2];
const luckyNumber3: number = luckyNumbers[3];
const luckyNumber4: number = luckyNumbers[4];
const luckyNumber5: number = luckyNumbers[5];
// console.log(luckyNumber0,"\n",luckyNumber1,"\n",luckyNumber2, "\n",luckyNumber3, "\n",luckyNumber4,"\n",luckyNumber5);
console.log(luckyNumber0)
console.log(luckyNumber1)
console.log(luckyNumber2)
console.log(luckyNumber3)
console.log(luckyNumber4)
console.log(luckyNumber5)

const favPeep1: string = favouritePeople[1]
console.log(favPeep1)

console.log("\n");
console.log("Array-TS-Level-1_3 (length)");
console.log("Länge des Arrays: ", bucketList.length)
console.log("Länge des Arrays: ", luckyNumbers.length)
console.log("Länge des Arrays: ", favouritePeople.length)

console.log("\n");
console.log("Array-TS-Level-1_4 (push)");
bucketList.push("Nanjing", "Qingdao", "Xinjiang")
console.log(bucketList)

console.log("\n");
console.log("Array-TS-Level-1_5 (pop)");
const bucketListPop = bucketList.pop()
const luckyNumbersPop = luckyNumbers.pop()
const favouritePeoplePop = favouritePeople.pop()

console.log("Entfernt: ", bucketListPop)
console.log(bucketList)
console.log("Entfernt: ", luckyNumbersPop)
console.log(luckyNumbers)
console.log("Entfernt: " ,favouritePeoplePop)
console.log(favouritePeople)

console.log("\n");
console.log("Array-TS-Level-1_6 (shift)");
const favouritePeopleShift = favouritePeople.shift()
console.log("Entfernt: ", favouritePeopleShift)
console.log("Übrige Fav Peeps: ", favouritePeople)

console.log("\n");
console.log("Array-TS-Level-1_7 (unshift)");
console.log("Länge des Arrays jetzt: ", bucketList.length)
bucketList.unshift("Hanover" , "Hamburg", "Lübeck")
console.log(bucketList)
console.log("Länge des Arrays danach: ", bucketList.length)

console.log("\n");
console.log("Array-TS-Level-1_8 (slice)");
const lieblingsReiseziele: string[] = ["Okinawa","Bedburg-Hau", "Duisburg", "Torronto"] 
console.log("Die Lieblingsreiseziele: ", lieblingsReiseziele)
const lieblingsReisezieleSlice = lieblingsReiseziele.slice(1,3)
console.log("Vor dem Slice: ", lieblingsReiseziele)
console.log("Mit Slice kopierte Ziele: ", lieblingsReisezieleSlice)

console.log("\n");
console.log("Array-TS-Level-1_9 (push/pop shift/unshift)");
const numberArray: number[] = [23, 54, 75]
numberArray.push(1, 2, 3, 4, 5)
numberArray.unshift(11, 12, 13, 14, 15)
console.log(numberArray)
console.log("Entfernt am Ende: ", numberArray.pop(), numberArray.pop())
console.log(numberArray)
console.log("Entfernt am Anfang: ", numberArray.shift(), numberArray.shift())
console.log(numberArray)

console.log("\n");
console.log("Array-TS-Level-1_10 (split)");

const futuramaQuote: string = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
console.log(futuramaQuote)

const futuramaQuoteToArrayLetters = futuramaQuote.split("")
console.log(futuramaQuoteToArrayLetters)

const futuramaQuoteToArrayWords = futuramaQuote.split(" ")
console.log(futuramaQuoteToArrayWords)

const futuramaQuoteToArraySentences = futuramaQuote.split(".")
console.log(futuramaQuoteToArraySentences)

const futuramaQuoteToArrayString = futuramaQuoteToArraySentences.join()
console.log(futuramaQuoteToArrayString)
