console.log("%c Tag 11: Objects", "color: deeppink; background: white");
console.log("\n");

console.log("%c Objekte-TS-Level-1_3", "color: deeppink; background: white");

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

let redApple: Apple = {
  color: "red",
  size: "big",
  isSweet: true,
};

let greenApple: Apple = {
  color: "green",
  size: "small",
  isSweet: false,
};

let yellowApple: Apple = {
  color: "yellow",
  size: "big",
  isSweet: true,
};

let apples: Apple[] = [redApple, greenApple, yellowApple];

// for-Schleife: index = 0, index kleiner als Summe der Zeichen von Äpfel, Zähle Äpfel
for (let i = 0; i < apples.length; i++) {
  // Gib Information in der Konsole wieder:
  console.log("Size: ", apples[i].size);
}

console.log("\n");

const appleCollection: Apple[] = [redApple, greenApple, yellowApple];

appleCollection.forEach((appls) => {
  console.log("Color: ", appls.color);
});

console.log("\n");
console.log("Qt of Apples: ", Object.keys(apples).length);

console.log("\n");

let pinkApple: Apple = {
  color: "pink",
  size: "medium",
  isSweet: true,
};

apples.push(pinkApple);
// for-Schleife: index = 0, index kleiner als Summe der Zeichen von Äpfel, Zähle Äpfel
for (let i = 0; i < apples.length; i++) {
  // Gib Information in der Konsole wieder:
  console.log("Size: ", apples[i].size);
}
console.log("Qt of Apples: ", Object.keys(apples).length);

console.log("\n");
console.log("%c Objekte-TS-Level-1_4", "color: deeppink; background: white");

type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
  // {
  //   tiertyp: "Hamster",
  //   namen: ["Hamtaro", "Griselda", "Funkopop"],
  // },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

console.log("\n");
console.log(unsereHaustiere[1].namen);

unsereHaustiere[0].namen[2] = "Pinky";
unsereHaustiere[1].namen[2] = "Snoopy";

console.log(unsereHaustiere[0].namen[2]);
console.log(unsereHaustiere[1].namen[2]);

const hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Hamtaro", "Griselda", "Funkopop"],
};

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);

console.log("\n");
console.log("%c Objekte-TS-Level-1_5", "color: deeppink; background: white");

type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

let unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);

console.log("\n");
console.log("%c Objekte-TS-Level-1_6", "color: deeppink; background: white");

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];
console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[2].release_jahr, "und", meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.split(" ")[4]);

const newBand: Musik = {
  kunstler: "Hamster",
  title: "Hamtaro, Griselda, Funkopop",
  release_jahr: 2024,
  formate: ["Download"],
  gold: true,
};

meineTopVier.push(newBand);
console.log(meineTopVier);

console.log("\n");
console.log("%c Objekte-TS-Level-2_2", "color: deeppink; background: white");
