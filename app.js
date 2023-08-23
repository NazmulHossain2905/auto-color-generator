// VARIABLE DECLARATION - FIND PARENT ELEMENT
const solidColorContainer = document.getElementById("solidColorContainer");

// GENERATE HEX COLOR CODE
const generateHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexCode = Math.floor(Math.random() * 16).toString(16);
    hexColor += randomHexCode;
  }
  return hexColor.toUpperCase();
};

// CREATE ELEMENTS ITEM 300 TIMES
const generateSolidColor = () => {
  for (let i = 0; i < 300; i++) {
    let solidColor = generateHexColor();

    let createDivForSolidColor = document.createElement("div");
    createDivForSolidColor.className = "color-item";

    createDivForSolidColor.style.background = solidColor;
    createDivForSolidColor.innerText = solidColor;
    solidColorContainer.appendChild(createDivForSolidColor);
  }
};

// CALL generateGradientColor() FUNCTION
generateSolidColor();

// Copy to clipboard
const allSolidItems = document.querySelectorAll(".color-item");

allSolidItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    let innerText = item.innerText;
    navigator.clipboard
      .writeText(innerText)
      .then(() => {
        item.innerHTML = `<span class="copied">Copied</span>`;
        setTimeout(() => (item.innerHTML = innerText), 1000);
      })
      .catch(() => alert("Failed to copy."));
  });
});
