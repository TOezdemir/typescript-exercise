type PersonMitType = {
  userName: string;
  age: number;
};

// type PersonMitType = {
//     email: string
// }

const person1: PersonMitType = {
  userName: "Joe",
  age: 22,
};

console.log(person1);

//! Interfaces => keyword => interface und dann der Name der Typisierung

interface PersonMitInterface {
  userName: string;
  age: number;
}

interface PersonMitInterface {
  email: string;
  printInfo: () => void;
}

const person2: PersonMitInterface = {
  userName: "John",
  age: 30,
  email: "slimjim@blimblam.com",
  printInfo: () => {
    console.log("Test!");
  },
};
console.log(person2);

console.clear();

//! Import:
import OrderStatus from "./interfaces/OrderStatus";
import Pizza from "./classes/Pizza";
import Order from "./classes/Order";

//! DOM ELEMENTE selektieren:

const customerNameInput = document.getElementById(
  "customer-name"
) as HTMLInputElement;
const pizzaSelect = document.getElementById(
  "pizza-select"
) as HTMLSelectElement;
const orderButton = document.getElementById(
  "order-button"
) as HTMLButtonElement;
const cancelButton = document.getElementById(
  "cancel-button"
) as HTMLButtonElement;

//! v. 1
let newPizzaOrder: Order | null = null;

orderButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (customerNameInput && pizzaSelect) {
    const customerName = customerNameInput.value.trim();
    const pizzaName = pizzaSelect.value;
    console.log(customerName);
    console.log(pizzaName);
    const uniqueOrderNumber = Date.now();
    console.log(uniqueOrderNumber);

    if (!newPizzaOrder) {
      newPizzaOrder = new Order(
        uniqueOrderNumber,
        customerName,
        OrderStatus.Created
      );
    }

    const createdPizza = new Pizza(pizzaName, 1);
    newPizzaOrder?._pizzen.push(createdPizza);

    console.log(newPizzaOrder);
  }
});

cancelButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (newPizzaOrder) {
    const isCancelled = newPizzaOrder.cancel();
    if (isCancelled) {
      console.log("Die Bestellung wurde erfolgreich storniert!");
      newPizzaOrder = null;
    } else {
      console.log("Die Bestellung konnte nicht storniert werden!");
    }
  } else {
    console.log("Es gibt keine Bestellung!");
  }
});

//! v. 2

// const orders: {} = {};

// orderButton?.addEventListener("click", (event: Event) => {
//   event.preventDefault();
//   if (customerNameInput && pizzaSelect) {
//     const customerName = customerNameInput.value.trim();
//     const pizzaName = pizzaSelect.value;
//     console.log(customerName);
//     console.log(pizzaName);
//     const uniqueOrderNumber = Date.now();
//     console.log(uniqueOrderNumber);

//     if(!currentOrder){
//         const uniqueOrderNumber = Date.now()
//         currentOrder = new Order(uniqueOrderNumber, customerName, OrderStatus.Created)
//     }

//   }
// });
