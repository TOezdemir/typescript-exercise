function calculateTipAndSplit() {
  // Eingabefelder aus dem HTML abrufen
  const billInput = document.getElementById("billAmount") as HTMLInputElement;
  const peopleInput = document.getElementById("numPeople") as HTMLInputElement;
  const serviceSelect = document.getElementById(
    "serviceLevel"
  ) as HTMLSelectElement;

  // Werte aus den Eingabefeldern lesen und in Zahlen umwandeln
  const billAmount = parseFloat(billInput.value);
  const numPeople = parseInt(peopleInput.value, 10);
  const serviceLevel = serviceSelect.value;

  // Trinkgeldprozentsatz basierend auf Service-Level bestimmen
  let tipPercentage: number;
  switch (serviceLevel) {
    case "bad":
      tipPercentage = 0.02;
      break;
    case "average":
      tipPercentage = 0.1;
      break;
    case "good":
      tipPercentage = 0.2;
      break;
    default:
      tipPercentage = 0; // Falls kein gültiger Wert gewählt wurde
  }

  // Trinkgeldbetrag berechnen
  const tipAmount = billAmount * tipPercentage;

  // Gesamtbetrag (Rechnung + Trinkgeld) berechnen
  const totalAmount = billAmount + tipAmount;

  // Betrag pro Person berechnen
  const amountPerPerson = tipAmount / numPeople;

  // Ausgabefelder im HTML aktualisieren
  document.getElementById("tipAmount")!.textContent = tipAmount.toLocaleString(
    "de-DE",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: "currency",
      currency: "EUR",
    }
  );
  document.getElementById("totalAmount")!.textContent =
    totalAmount.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: "currency",
      currency: "EUR",
    });
  document.getElementById("amountPerPerson")!.textContent =
    amountPerPerson.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      style: "currency",
      currency: "EUR",
    });
}

const calculateButton = document.querySelector("button");
if (calculateButton) {
  calculateButton.addEventListener("click", calculateTipAndSplit);
}
