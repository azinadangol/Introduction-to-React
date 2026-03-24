import RecipeItem from "./RecipeItem";
import pastaImg from "../assets/images/pasta.jpg";
import burgerImg from "../assets/images/burger.jpg";
import sushiImg from "../assets/images/sushi.jpg";
import pizzaImg from "../assets/images/pizza.jpg";
import saladImg from "../assets/images/salad.jpg";


function RecipeList() {
  const recipes = [
    {
      name: "Pasta",
      cuisine: "Italian",
      ingredients: ["pasta", "tomato", "cheese"],
      calories: 350,
      image: pastaImg,
    },
    {
      name: "Burger",
      cuisine: "American",
      ingredients: ["bun", "patty", "lettuce"],
      calories: 500,
      image: burgerImg,
    },
    {
      name: "Sushi",
      cuisine: "Japanese",
      ingredients: ["rice", "fish", "seaweed"],
      calories: 300,
      image: sushiImg,
    },
    {
      name: "Pizza",
      cuisine: "Italian",
      ingredients: ["dough", "cheese", "tomato"],
      calories: 450,
      image: pizzaImg,
    },
    {
      name: "Salad",
      cuisine: "International",
      ingredients: ["lettuce", "tomato", "cucumber"],
      calories: 150,
      image: saladImg,
    },
  
  ];

  return (
    <div className="recipe-list">
      {recipes.map((r, idx) => (
        <RecipeItem key={idx} {...r} />
      ))}
    </div>
  );
}

export default RecipeList;