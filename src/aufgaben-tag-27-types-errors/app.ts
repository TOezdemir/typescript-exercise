import IStudent from "./interfaces/IStudent";

console.log(
  "%c ==== OOP-TypeCast-Level-1_1 ====",
  "background: green; color: white"
);

function processStudents(student: IStudent) {
  console.log("Processing:", student._name);
}

const student1 = {
  _name: "Joe Werben Jederman Jensson",
  _age: 14,
};

let student1ToIStudent = student1 as IStudent;

processStudents(student1ToIStudent);

const student2 = {
  _age: 15,
};

let student2ToIStudent = student2 as IStudent;
processStudents(student2ToIStudent); // Nix. Funktion soll den Namen auswählen. Studi hat aber nur einen Alter angegeben.
console.log("\n");
console.log(
  "%c ==== OOP-UnionType-Level-1_1 ====",
  "background: green; color: white"
);

type Result = "success" | "error" | "pending";

let myResult: Result = "pending";

function handleResult(result: Result) {
  switch (result) {
    case "success":
      console.log("Anwendung erfolgreich abgeschlossen!");
      break;
    case "error":
      console.log("Fehler... Anwendung konnte nicht abgeschlossen werden!");
      break;
    case "pending":
      console.log("Warte auf Eingabe... Anwendung steht aus!");
      break;
  }
}

handleResult("success");
handleResult("pending");
handleResult("error");

console.log("\n");
console.log(
  "%c ==== OOP-IntersectionType-Level-1_1 ====",
  "background: green; color: white"
);

type Alcohol = {
  name: string;
  percentage: number;
  type: string;
};

type Mixer = {
  name: string;
  type: string;
  carbonated: boolean;
};

const cocktail: Alcohol & Mixer = {
  name: "Greedy Gobblin",
  percentage: 11,
  type: "Gin, Pfefferminzschnapps & Orangensaft,",
  carbonated: false,
};

console.log(cocktail);
console.log("\n");

console.log(
  "%c ==== TS-ErrorHandling-Level-1_1 ====",
  "background: green; color: white"
);

function greetUser() {
  const userName = prompt("Bitte gib deinen Nutzernamen ein!");

  try {
    if (!userName || userName.trim() === "") {
      throw new Error("Kein Name angegeben!");
    }
    console.log(`Hallo ${userName}, willkommen!`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fehler, ", error.message);
    }
    console.log("Hi, willkommen!");
  }
}

greetUser();
console.log("\n");

console.log(
  "%c ==== TS-ErrorHandling-Level-2_1 ====",
  "background: green; color: white"
);
