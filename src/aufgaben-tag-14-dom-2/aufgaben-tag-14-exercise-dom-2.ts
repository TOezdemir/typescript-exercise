console.log("%c Tag 14: DOM 2", "color: teal; background: white");
console.log("\n");

console.log("%c DOM-TS-Level-1_1", "color: teal; background: white");

function einkaufsliste(event: Event) {
  event.preventDefault();
  const inputElement = document.getElementById("inputText") as HTMLInputElement;
  const listElement = document.getElementById("myList") as HTMLUListElement;
  if (inputElement.value.trim() === "") {
    alert("Bitte Artikel eintragen!");
    return;
  }
  if (inputElement && listElement) {
    const artikel = document.createElement("li");
    artikel.textContent = inputElement.value;
    listElement.appendChild(artikel);
    inputElement.value = "";
  }
}
// button holen
const form = document.querySelector("form");
//event listener bauen
if (form) {
  form.addEventListener("submit", einkaufsliste);
}

console.log("\n");
console.log("%c DOM-TS-Level-1_2", "color: teal; background: white");

// const meineInfo = document.getElementById("info") as HTMLDivElement; // Info holen!
// // console.log(meineInfo);

// if (meineInfo) {
//   // prüfen ob es geholt wurde!
//   const h1 = document.createElement("h1"); // Erstelle Überschrift
//   h1.textContent = "Hello World!"; // Gebe der Überschrift einen Text
//   meineInfo.appendChild(h1); // Bändige das Kindselement!

//   const h2 = document.createElement("h2");
//   h2.textContent = "How are you?";
//   meineInfo.appendChild(h2);
// } else {
//   console.error("Element nicht da!"); // Wenn Element nicht da, dann spuck nen Fehler aus!
// }

console.log("\n");
console.log("%c DOM-TS-Level-1_3", "color: teal; background: white");

// const imageGallery = document.getElementById("gallery") as HTMLDivElement;
// imageGallery.setAttribute("src", "https://picsum.photos/id/237/200/300");
// imageGallery.setAttribute("src", "https://picsum.photos/id/237/200/300");
// imageGallery.setAttribute("src", "https://picsum.photos/id/237/200/300");

// imageGallery.appendChild(gallery);

const image = document.createElement("figure") as HTMLImageElement;
image.setAttribute("src", "https://picsum.photos/id/237/400/400");
image.setAttribute("alt", "hier könnte Ihre Werbung stehen!!");

const gallery = document.getElementById("gallery") as HTMLElement;
gallery.appendChild(image);
