// Write your code here!

// document.addEventListener("DOMContentLoaded", () => {
//   const mainElement = document.querySelector("main#main");
//   if (mainElement) {
//     mainElement.remove();
//   }
//   const newHeader = document.createElement("h1");
//   newHeader.id = "newHeader";
//   newHeader.textContent = "Kenedy";
//   document.body.appendChild(newHeader);
//   window.newHeader = newHeader;
// });
document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main#main");
  if (mainElement === true) {
    mainElement.remove();
  }

  // Create a new <h1> element and set its properties
  const newHeader = document.createElement("h1");
  newHeader.id = "victory";
  newHeader.textContent = "Kenedy";

  // Append the new <h1> element to the body
  document.body.appendChild(newHeader);

  // Make the newHeader variable globally accessible
  window.newHeader = newHeader;
});
