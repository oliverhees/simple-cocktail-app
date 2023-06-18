import { getCocktails } from "./components/fetch/getData.js";

const search = document.querySelector('[data-js="input"]');
const form = document.querySelector('[data-js="form"]');
const root = document.getElementById("app");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  root.innerHTML = "";
  const formData = new FormData(event.target);
  const drink = Object.fromEntries(formData);
  getCocktails(drink.search);
  form.reset();
});
