import text from "./data2.js";

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

function submitResult(e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  const isNumberValid = (value) => value > 0 && value <= text.length;
  /* Number.isNaN(value) || value <= 0 || value > text.length; */

  const randomResult = () =>
    (result.innerHTML = `<p class ="result">${text[random]}</p>`);

  const userInputResult = () => {
    const tempText = text.slice(0, value);
    result.innerHTML = tempText
      .map((item) => `<p class="result">${item}</p>`)
      .join("");
  };

  isNumberValid(value) ? randomResult() : userInputResult();
}

form.addEventListener("submit", submitResult);
