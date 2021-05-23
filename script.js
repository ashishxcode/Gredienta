let body = document.querySelector("#body");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let rotateGradient = document.querySelector("#rotateGradient");
let displayValue1 = document.querySelectorAll(".color1Value");
let displayValue2 = document.querySelectorAll(".color2Value");

function createSnippet(colorCode1, colorCode2) {
  displayValue1.forEach((element) => {
    element.textContent = colorCode1;
  });

  displayValue2.forEach((element) => {
    element.textContent = colorCode2;
    console.log(element.textContent);
  });
}

function updateGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  createSnippet(color1.value, color2.value);
}

function generateRandomGradient() {
  color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  updateGradient();
}

updateGradient();