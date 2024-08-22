import Circle from "./classes/Circle";
import Manager from "./classes/Manager";
import Rectangle from "./classes/Rectangle";
import Subordinate from "./classes/Subordinate";

const circle1 = new Circle("Circle", "Red", 10, true);
circle1.draw();
const circle2 = new Circle("Circle!", "Blue", 15, true);
const circle3 = new Circle("Circle!", "PURPLE", 20, true);

console.log(circle1, circle2, circle3);

const rectangle1 = new Rectangle(10, 15, "Rectangle", "Violet", false);
rectangle1.draw();
const rectangle2 = new Rectangle(20, 25, "Rectangle", "Teal", false);
const rectangle3 = new Rectangle(30, 45, "Rectangle", "Green", false);

console.log(rectangle1, rectangle2, rectangle3);

const subordinate1 = new Subordinate("Joe", 24, "Intern");
const subordinate2 = new Subordinate("Boe", 23, "Intern");
const subordinate3 = new Subordinate("Moe", 22, "Intern");

const manager1 = new Manager("Rocky", 42, "Manager");

console.log(subordinate1, subordinate2, subordinate3, manager1);

manager1.addSubordinate(subordinate1);
manager1.addSubordinate(subordinate2);
manager1.addSubordinate(subordinate3);

console.log("Hallo, Test!");
