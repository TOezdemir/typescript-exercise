const buttonElement = document.getElementById("button") as HTMLButtonElement;
const selectElement = document.getElementById(
  "farbeAuswahlen"
) as HTMLSelectElement;

// buttonElement?.addEventListener("click", removeColor);
// function removeColor() {
//   const selectedIndex = selectElement.selectedIndex;
//   selectElement.options[selectedIndex].remove();
// }

buttonElement?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const selectedIndex = selectElement.selectedIndex;
  selectElement.options[selectedIndex].remove();
});
