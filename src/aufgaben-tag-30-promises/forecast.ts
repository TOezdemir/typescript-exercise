import weatherType from "./enum/weather";

// const currentForecast = (Promise<weatherType> = new Promise(
//   (resolve, reject) => {
//     const randomForecast = Math.floor(Math.random() * 10);
//     if (randomForecast <= 6) {
//       resolve(randomForecast as weatherType);
//     } else {
//       reject("Keine Vorhersage möglich!");
//     }
//   }
// ));

const currentForecast: Promise<weatherType> = new Promise((resolve, reject) => {
  const randomForecast = Math.floor(Math.random() * 10);
  if (randomForecast <= 6) {
    resolve(randomForecast as weatherType);
  } else {
    reject("Keine Vorhersage möglich!");
  }
});

currentForecast
  .then((resp) => {
    console.log("Wettervorhersage: ", weatherType[resp]);
  })
  .catch((error) => {
    console.log("Fehler: ", error);
  });
