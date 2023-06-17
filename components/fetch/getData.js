//api url
const url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

export async function getCocktails() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error(error);
  }
}
