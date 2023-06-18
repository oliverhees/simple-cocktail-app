let ingredientCounter = 0;

export function ingCounter(cocktail) {
  const filteredObj = Object.fromEntries(
    Object.entries(cocktail).filter(([key, value]) => {
      if (key.includes("strIngredient") && value != null) {
        ingredientCounter++;
      }
    })
  );
  return ingredientCounter;
}
