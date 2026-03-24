import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header title="Recipe Explorer App" />
      <div className="main-content">
        <RecipeList />
      </div>
      <Footer text="© 2026 Recipe Explorer" />
    </div>
  );
}

export default App;