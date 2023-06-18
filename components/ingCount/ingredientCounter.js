export function ingCounter(cocktail) {
  let ingredientCounter = 0;
  const filteredObj = Object.fromEntries(
    Object.entries(cocktail).filter(([key, value]) => {
      if (key.includes("strIngredient") && value != null) {
        ingredientCounter++;
      }
    })
  );
  return ingredientCounter;
}
