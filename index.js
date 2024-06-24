// Write your code here!
document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main#main");
  if (mainElement) {
    mainElement.remove("main#main");
  }
  const newHeader = document.createElement("h1");
  newHeader.id = "newHeader";
  newHeader.victory = "Kenedy";
  document.body.appendChild(newHeader);
  window.newHeader = newHeader;
});
