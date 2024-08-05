console.log("%c Tag 12: Objects 2", "color: deeppink; background: white");
console.log("\n");

console.log("%c Tuple-TS-Level-1_1", "color: deeppink; background: white");

const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hammil"];
console.log(starWarsActor[0]);
console.log(starWarsActor[1]);

console.log(starWarsActor[1], "spielt", starWarsActor[0]);

const starWarsActors: [string, string][] = [
  ["Luke Skywalker", "Mark Hammil"],
  ["Darth Vader", "James Earl Jones"],
  ["Meister Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
];
console.log(starWarsActors);

console.log(starWarsActors[0][1], "spielt", starWarsActors[0][0]);
console.log(starWarsActors[1][1], "spielt", starWarsActors[1][0]);
console.log(starWarsActors[2][1], "spielt", starWarsActors[2][0]);
console.log(starWarsActors[3][1], "spielt", starWarsActors[3][0]);
console.log(starWarsActors[4][1], "spielt", starWarsActors[4][0]);

console.log("\n");
console.log("%c Tuple-TS-Level-2_1", "color: deeppink; background: white");

const employee: [number, string, string, number][] = [
  [1, "Batchman", "Logistik", 60000],
  [2, "Slicksteen", "Accounting", 80000],
  [3, "Hankontan", "Development", 90000],
  [4, "Bangkok", "HR", 80000],
  [5, "Bush", "CEO", 150000],
];

console.log(employee);

console.log("\n");
console.log("%c Enum-TS-Level-1_1", "color: deeppink; background: white");

enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Weekdays);

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  Semptember,
  October,
  November,
  December,
}
console.log(Months);

console.log("\n");
console.log("%c Enum-TS-Level-1_2", "color: deeppink; background: white");

enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Familie = "Familie",
}

enum PizzaIngredients {
  Cheese = "Cheese",
  Onion = "Onion",
  Salami = "Salami",
  Tuna = "Tuna",
  Sardines = "Sardines",
  Jalapenos = "Jalapenos",
  Garlic = "Garlic",
  Spinach = "Spinach",
}

type Pizza = {
  size: PizzaSize;
  ingredients: PizzaIngredients;
};

const pizza1: Pizza = {
  size: PizzaSize.Small,
  ingredients: PizzaIngredients.Sardines,
};

const pizza2: Pizza = {
  size: PizzaSize.Familie,
  ingredients: PizzaIngredients.Garlic,
};

const pizza3: Pizza = {
  size: PizzaSize.Large,
  ingredients: PizzaIngredients.Jalapenos,
};
const pizza4: Pizza = {
  size: PizzaSize.Medium,
  ingredients: PizzaIngredients.Tuna,
};

const pizzaAll = [pizza1, pizza2, pizza3, pizza4];
console.log("Pizzas: ", pizzaAll);

console.log("Meine Pizza: ");
const meinePizza: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [
    PizzaIngredients.Jalapenos,
    PizzaIngredients.Garlic,
    PizzaIngredients.Sardines,
  ],
};

console.log("\n");
console.log("%c Enum-TS-Level-2-1", "color: deeppink; background: white");
