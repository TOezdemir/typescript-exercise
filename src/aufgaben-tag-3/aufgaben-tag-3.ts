// Math-TS-Level-1_1
console.log("Math-TS-Level-1_1")

const zahlPi: number = Math.PI
console.log(zahlPi)

console.log(Math.round(zahlPi))

const roundedPi = zahlPi.toFixed(2);
console.log(roundedPi)

// Math-TS-Level-1_2
console.log("Math-TS-Level-1_2")

const meineLieblingsZahl: number = 157.559235741
console.log(Math.round(meineLieblingsZahl))

const snippetZahl_1: number = 3
const snippetZahl_2: number = 193.44444
const snippetZahl_3: number = 1.444444
const snippetZahl_4: number = -3.44444

console.log(Math.round(snippetZahl_1))
console.log(Math.round(snippetZahl_2))
console.log(Math.round(snippetZahl_3))
console.log(Math.round(snippetZahl_4))

// Math-TS-Level-1_3
console.log("Math-TS-Level-1_3")

const randomNum: number = Math.random()
const randomNum1: number = Math.floor(randomNum)
const randomNum10: number = Math.floor(randomNum *10) +1;
const randomNum100: number = Math.floor(randomNum *100) +1;

console.log({randomNum})
console.log({randomNum1})
console.log({randomNum10})
console.log({randomNum100})