console.log("Hello");

// String-Methods-TS-Level-1_1

const grueßDieWelt: string = "Hello World!";
const length = grueßDieWelt.length;
console.log(length);

const firstName: string = "Humpeldumpel";
const lastName: string = " von Kantenglümmel";

const firstNameLength = firstName.length;
const lastNameLength = lastName.length;

console.log(firstNameLength);
console.log(lastNameLength);

const fullName = firstName + lastName;
console.log(fullName);

const fullNameLength = fullName.length;
console.log(fullNameLength);

// String-Methods-TS-Level-1_2

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";
const showMe_h: number = earthQuote.indexOf("h");
console.log(showMe_h);

const showMeEarth: number = earthQuote.indexOf("Earth");
console.log(showMeEarth);

const showMeTheMoon: number = earthQuote.indexOf("Moon");
console.log(showMeTheMoon);

// String-Methods-TS-Level-1_3

const oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

const semikolon: number = oceanQuote.search(";");
console.log(semikolon);

const green: number = oceanQuote.search("green");
console.log(green);

const blue: number = oceanQuote.search("blue");
console.log(blue);

// String-Methods-TS-Level-1_4

const susisStatus: string = "Susi is going to codingschool";

console.log(susisStatus.slice(0, 4));
console.log(susisStatus.slice(5, 7));
console.log(susisStatus.slice(5, 17) + susisStatus.slice(23));
console.log(susisStatus.slice(23));
console.log(
  susisStatus.slice(0, 4) + susisStatus.slice(4, 8) + susisStatus.slice(23)
);

const susi: string = susisStatus.slice(0, 4);
const is: string = susisStatus.slice(5, 7);
const isGoingToSchool: string =
  susisStatus.slice(5, 17) + susisStatus.slice(23);
const school: string = susisStatus.slice(23);
const susiIsSchool: string =
  susisStatus.slice(0, 4) + susisStatus.slice(4, 8) + susisStatus.slice(23);

const outputDiv = document.getElementById("output")!;
outputDiv.innerHTML = `  
<p>${susi}</p>
<p>${is}</p>
<p>${isGoingToSchool}</p>
<p>${school}</p>
<p>${susiIsSchool}</p>
`;

// String-Methods-TS-Level-1_5

const whereIsSusi: string = "Susi is back from codingschool";

const nameSusi: string = whereIsSusi.substring(0, 4);
const whatSusi: string = whereIsSusi.substring(5, 7);
const locationSusi: string = whereIsSusi.substring(24);
const susiIsMuchSchool: string = nameSusi + " " + whatSusi + " " + locationSusi;

console.log(nameSusi);
console.log(whatSusi);
console.log(locationSusi);
console.log(susiIsMuchSchool);

document.open();
document.write(`<p> ${nameSusi} </p>`);
document.write(`<p> ${whatSusi} </p>`);
document.write(`<p> ${locationSusi} </p>`);
document.write(`<p> ${susiIsMuchSchool} </p>`);
document.close();

// String-Methods-TS-Level-1_6
