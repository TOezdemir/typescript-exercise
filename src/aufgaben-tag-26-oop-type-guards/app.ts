console.log("OOP-Class-TS-Level-1_7");
console.log("\n");

console.log("Test");
import Unicorn from "./classes/Unicorn";
import InstanceChecker from "./classes/Instance-Checker";

const donkey1 = {};
const result1 = InstanceChecker.isUnicorn(donkey1);
console.log(result1);

const unicorn1 = new Unicorn("Hooli", ["Yellow", "Pink", "Blue"]);
const result2 = InstanceChecker.isUnicorn(unicorn1);
console.log(result2);

console.log("OOP-Class-TS-Level-1_8");
console.log("\n");
import Car from "./classes/Car";
import ElectricCar from "./classes/Electric-Car";

const bike1 = {};
const result3 = InstanceChecker.isCar(bike1);

const car1 = new Car("Testarossa Fastarossa", ["Red", "Black"]);
const car2 = new ElectricCar("Voltorb Megawatt", ["Yellow", "Black"], 1100);
const result4 = InstanceChecker.isCar(car1);
const result5 = InstanceChecker.isElectricCar(car2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(InstanceChecker.isCar(car2));
console.log(InstanceChecker.isElectricCar(car1));

import Yoga from "./classes/Yoga";
import Running from "./classes/Running";
import { YogaType } from "./classes/Yoga";
import Activity from "./classes/Activity";

let genericActivity = new Activity("Generic Activity", 3);
let hathaYoga = new Yoga("Hatha Yoga", 2, YogaType.Hatha);
let morningRun = new Running("Morning Run", 4, 5);

genericActivity.start();
hathaYoga.start();
morningRun.warumUp();
morningRun.start();
morningRun.cooldown();

try {
  genericActivity.difficulty = 7;
  genericActivity.start;
} catch (error) {
  console.error(error);
}
