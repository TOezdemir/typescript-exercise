import CreditCard from "./Classes/CreditCard";

//HTML Elemente
const cardOutput = document.getElementById("card-output") as HTMLOutputElement;
const cardNumberInput = document.getElementById(
  "card-number-input"
) as HTMLInputElement;
const cardHolderInput = document.getElementById(
  "card-holder-input"
) as HTMLInputElement;
const dateInput = document.getElementById("date-input") as HTMLInputElement;
const cvvInput = document.getElementById("cvv-input") as HTMLInputElement;
const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;

const allCreditCards: CreditCard[] = [];

const createNewCard = (event: MouseEvent) => {
  event.preventDefault();

  // aktuelle Werte (Values) ziehen / speichern!
  const cardNumber = cardNumberInput.value;
  const cardHolder = cardHolderInput.value;
  const expDate = new Date(dateInput.value);
  const cvv = cvvInput.value;

  //-Bedingung 1 -> Kartennummer
  const isCardNumberValid = cardNumberValidation(cardNumber);

  //- Bedingung 2 -> Ablaufdatum in der Zukunft?
  const isExpDateValid = expDateValidation(expDate);

  //- Bedingung 3 -> CVV
  const isCvvValid = cvvValidation(cvv);

  if (isCardNumberValid && isExpDateValid && isCvvValid) {
    const newCard = new CreditCard(
      Number(cardNumber),
      cardHolder,
      expDate,
      Number(cvv)
    );
    allCreditCards.push(newCard);

    updateHTML();
  }
};

submitBtn.addEventListener("click", createNewCard);

const cardNumberValidation = (value: string): boolean => {
  if (value.length! == 16) {
    window.alert("Die Länge der Kartennummer besteht nicht aus 16 Zeichen!");
    return false;
  }

  //regex => regular expression
  if (!/^\d+$/.test(value)) {
    window.alert("Die Kartennummer besteht aus ungültigen Zeichen!");
    return false;
  }
  return true;
};

const expDateValidation = (cardExpDate: Date): boolean => {
  const currentDate = new Date();
  if (cardExpDate < currentDate) {
    window.alert(
      "Lol, bro. Try again. Das Ablaufdatum darf nicht in der Vergangenheit liegen!"
    );
    return false;
  } else {
    return true;
  }
};

const cvvValidation = (cvvNum: string): boolean => {
  if (cvvNum.length !== 3) {
    window.alert("Die länge der Eingabe besteht nicht aus 3 Zeichen!");
    return false;
  }
  if (!/^\d+$/.test(cvvNum)) {
    window.alert("Die CVV besteht aus ungültigen Zeichen!");
    return false;
  }
  return true;
};

const updateHTML = (): void => {
  cardOutput.innerHTML = "";

  allCreditCards.forEach((card, index) => {
    const outputCard = document.createElement("div");

    // Card Header
    const cardHeader = document.createElement("div");

    const chipImg = document.createElement("img");
    chipImg.src = "./img/chip.png";
    chipImg.style.width = "50px";
    cardHeader.appendChild(chipImg);

    const visaImg = document.createElement("img");
    visaImg.src = "./img/visa_logo.png";
    visaImg.style.width = "50px";
    cardHeader.appendChild(visaImg);

    // Card Number

    const cardNumber = document.createElement("p");
    cardNumber.innerText = card._creditCardNumber.toString();

    // Card Holder Details
    const cardHolderDetails = document.createElement("div");
    cardHolderDetails.style.display = "inline-block";

    const cardHolderLabel = document.createElement("p");
    cardHolderLabel.innerText = "Card Holder";
    cardHolderDetails.appendChild(cardHolderLabel);

    //card exp date details
    const cardExpDetails = document.createElement("div");
    cardExpDetails.style.display = "inline-block";

    const cardExpLabel = document.createElement("p");
    cardExpLabel.innerText = "Expiration Date";
    cardExpDetails.appendChild(cardExpLabel);

    const cardExpValue = document.createElement("p");
    cardExpValue.innerText = (card._expirationDate.getMonth() + 1).toString();
    cardExpValue.innerText += ` / ${card._expirationDate.getFullYear()}`;
    cardExpDetails.appendChild(cardExpValue);

    // Delete EventListener
    outputCard.addEventListener("dblclick", () => deleteCard(index));

    outputCard.appendChild(cardHeader);
    outputCard.appendChild(cardNumber);
    outputCard.appendChild(cardHolderDetails);
    outputCard.appendChild(cardExpDetails);

    cardOutput.appendChild(outputCard);
  });
};

const deleteCard = (i: number): void => {
  allCreditCards.splice(i, 1);
  updateHTML();
};
