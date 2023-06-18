import { createCard } from "../card/card.js";

const msg = document.querySelector(".msg");

//api url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export async function getCocktails(search) {
  try {
    //set search url construct
    const searchUrl = url + search;
    const response = await fetch(searchUrl);

    //chek if response ok 200
    if (response.ok) {
      //response
      const data = await response.json();

      //log for debug
      console.log(data);

      //set alc default NO
      let alc = "NO";

      //check data have drinks
      if (data.drinks === null) {
        //display message
        msg.classList.add("show");
      } else {
        //hide message
        msg.classList.remove("show");

        //get drinks
        data.drinks.forEach((cocktail) => {
          //check drink have alcohol
          if (cocktail.strAlcoholic === "Alcohol") {
            let alc = "YES";
          } else {
            let alc = "NO";
          }
          //create cocktail card
          createCard(
            cocktail.strCategory,
            cocktail.strDrink,
            null,
            null,
            alc,
            null,
            cocktail.strDrinkThumb
          );
        });
      }
    } else {
      //log error in console
      console.error("Bad Response");
    }
  } catch (error) {
    //log erro in console
    console.error(error);
  }
}
