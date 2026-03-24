function RecipeItem({ name, cuisine, ingredients, calories, image }) {
  return (
    <div className="recipe-item">
      <img src={image} alt={name} className="recipe-image"/>
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Ingredients: {ingredients.join(", ")}</p>
      <p>Calories: {calories}</p>
    </div>
  );
}
export default RecipeItem;