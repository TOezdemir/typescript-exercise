console.log("Functions Aufgaben");
console.log("\n")
console.log("Functions-TS-Grundlagen-Level-1_4");

function showHero(
  heroName: string,
  heroPower: string,
  heroEnemy: string
): void {
  let nameOutput: string = "Mein Liebelingsheld is: " + heroName;
  let powerOutput: string = "Er hat die Fähigkeit: " + heroPower;
  let enemyOutput: string = "Sein größter Gegner ist: " + heroEnemy;
  console.log(nameOutput + "\n" + powerOutput + "\n" + enemyOutput)
}

showHero("Spiderman", "Spinnenkräfte", "Norman Osborne");

console.log("\n")
console.log("Functions-TS-Grundlagen-Level-1_6")

function returnOne(): number {
    return 1;
}
const x: number = 1;
const y: number = returnOne();

if( x === y){
    console.log("Wird das gedruckt?")
}