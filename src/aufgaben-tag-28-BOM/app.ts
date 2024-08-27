console.log("%c ==== Bom-TS-Level-1_1 ====", "color: orange");

// let countdown = 10;
// function countdownTimer() {
//   console.log(countdown);
//   countdown--;

//   if (countdown < 1) {
//     clearInterval(intervalId);
//     console.log("Ahh.... endlich Feierabend!");
//   }
// }
// const intervalId = setInterval(countdownTimer, 1000);
// console.log("Start: Warten für 3 Sekunden...");

// setTimeout(() => {
//   console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
// }, 3000);

// countdownTimer();

console.log("%c ==== Bom-TS-Level-1_1 ====", "color: orange");

function startCountdown() {
  let countdownValue = 100; // Startwert des Countdowns

  // Holen Sie sich das Anzeigeelement und den Button
  const displayElement = document.querySelector(".zeit") as HTMLElement;
  const startButton = document.getElementById("btn") as HTMLButtonElement;

  // Deaktivieren Sie den Button, um Mehrfachklicks zu verhindern
  startButton.disabled = true;

  // Intervall starten, das jede Sekunde ausgeführt wird
  const intervalId = setInterval(() => {
    countdownValue--; // Countdown-Wert verringern
    displayElement.textContent = `${countdownValue}%`; // Anzeige aktualisieren

    if (countdownValue === 0) {
      clearInterval(intervalId); // Intervall stoppen, wenn der Countdown 0 erreicht
      startButton.disabled = false; // Button wieder aktivieren
    }
  }, 1000); // 1000 Millisekunden = 1 Sekunde
}

// Event-Listener zum Button hinzufügen
const startButton = document.getElementById("btn");
if (startButton) {
  startButton.addEventListener("click", startCountdown);
}

console.log("%c ==== Bom-TS-Level-1_3 ====", "color: orange");
function getBrowserAndDisplayInfo() {
  // 1. Variablen Vergeben & Informationen aus dem Navigator Objekt:
  const browserName = window.navigator.appName;
  const osArchitecture = window.navigator.platform;
  const browserVersion = window.navigator.appVersion;

  // 2. Variablen Vergeben & Informationen aus dem Fenster und das Dokument abrufen
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;
  // 3. Farb- und Pixeltiefe abrufen
  const colorDepth = screen.colorDepth;
  const pixelDepth = screen.pixelDepth;

  // 4. HTML-Element zum Anzeigen der Informationen abrufen:
  const browserInfoDiv = document.getElementById(
    "browser-info"
  ) as HTMLDivElement;

  // 5. Informationen im HTML-Element anzeigen
  browserInfoDiv.innerHTML = `
        <p>Browsername: <br> ${browserName}</p>
        <p>Betriebssystem-Architektur: <br> ${osArchitecture}</p>
        <p>Browser-Version: <br> ${browserVersion}</p>
        <p>Fensterauflösung: <br> ${windowWidth} x ${windowHeight}</p>
        <p>Innenhöhe und -breite des Dokuments: <br> ${documentWidth} x ${documentHeight}</p>
        <p>Farbtiefe: <br> ${colorDepth}</p>
        <p>Pixeltiefe: <br> ${pixelDepth}</p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
  getBrowserAndDisplayInfo();
});
