import { addFive } from "./models/calculator";

addFive(5);
addFive(10);
addFive(15);

import { add, subtract, multiply, divide } from "./models/operations";
add(5, 6);
subtract(10, 5);
multiply(2, 6);
divide(10, 2);

import {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./models/operations2";
addNumbers(100, 12);
subtractNumbers(75, 15);
multiplyNumbers(20, 4);
divideNumbers(100, 4);

import getRandomColor from "./models/random-color-generator";

console.log(getRandomColor());
