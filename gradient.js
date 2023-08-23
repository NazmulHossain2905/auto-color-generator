// VARIABLE DECLARATION - FIND PARENT ELEMENT
const gradientColorContainer = document.getElementById(
  "gradientColorContainer"
);

// GENERATE HEX COLOR CODE
const generateHexColor = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexCode = Math.floor(Math.random() * 16).toString(16);
    hexColor += randomHexCode;
  }
  return hexColor;
};

// CREATE ELEMENTS ITEM 300 TIMES
const generateGradientColor = () => {
  for (let i = 0; i < 300; i++) {
    let gradientColor = `linear-gradient(${generateHexColor()}, ${generateHexColor()})`;

    let createDivForGradientColor = document.createElement("div");
    createDivForGradientColor.className = "color-item";

    createDivForGradientColor.style.background = gradientColor;
    createDivForGradientColor.innerText = gradientColor;
    gradientColorContainer.appendChild(createDivForGradientColor);
  }
};

// CALL generateGradientColor() FUNCTION
generateGradientColor();

// Copy to clipboard
const allGradientItems = document.querySelectorAll(".color-item");

allGradientItems.forEach((item, index) => {
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
