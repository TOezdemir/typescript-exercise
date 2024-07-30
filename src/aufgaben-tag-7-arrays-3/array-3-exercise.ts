console.log("Arrays 3 - Aufgaben")
console.log("\n")
console.log("Array-TS-Iteration-Level-1_2 (map)")

const drinks: string = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']
console.log(drinks)

const upperDrinks: string [] = drinks.map((drink: string)=> drink.toUpperCase())
console.log("map() mit .toUpperCase: ", upperDrinks)

const loveDrinks: string [] = drinks.map((drink: string)=> {
    return `I love ${drink}`
})
console.log("Ausgabe mit 'I love' in der map()-Methode: ", loveDrinks)

console.log("\n")
console.log("Array-TS-Iteration-Level-1_4 (map)")

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
let celsius: number [] = fahrenheit.map((tempF: number)=> ((tempF - 32)/1.8).toFixed(2))

console.log("Celsius (toFixed):", celsius); 

console.log("\n")
console.log("Array-TS-Iteration-Level-1_5 (map)")

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
console.log("Vorher: ", checkNumber)
const checkNumberDivideBy3: number [] = checkNumber.map((division: number)=>{
    if(division % 3 === 0){ //Prüfung ob durch 3 teilbar ist. Durch 3 teilbar, wenn kein Rest übrig bleibt!
        return division + 100; //Wenn ja, dann +100 auf "divison"
    } else{
        return division //Sonst einfach nur Zahl aus der Variabel "divison" angeben!
    }
})

console.log("Nachher: ",checkNumberDivideBy3)

console.log("\n")
console.log("Array-TS-Iteration-Level-1_6 (map oder forEach)")


let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

