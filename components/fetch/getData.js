import { createCard } from "../card/card.js";

//api url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export async function getCocktails(search) {
  try {
    const searchUrl = url + search;
    const response = await fetch(searchUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let alc = "NO";
      //check data have drinks
      if (data.drinks === null) {
        console.log("keine einträge");
      } else {
        data.drinks.forEach((cocktail) => {
          //check drink have alcohol
          if (cocktail.strAlcoholic === "Alcohol") {
            let alc = "YES";
          } else {
            let alc = "NO";
          }
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
      console.error("Bad Response");
    }
  } catch (error) {
    console.error(error);
  }
}
