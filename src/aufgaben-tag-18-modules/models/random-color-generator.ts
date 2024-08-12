import SpecialColor from "./special-color";

function randomColorGenerator(): SpecialColor {
  const randomIndex = Math.floor(
    (Math.random() * Object.keys(SpecialColor).length) / 2
  );
  const randomColor = SpecialColor[randomIndex];
  return randomColor;
}

export default randomColorGenerator;
