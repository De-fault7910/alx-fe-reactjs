import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";

<Route
  path="/"
  element={
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />       {/* <-- Added */}
      <AddRecipeForm />
      <RecipeList />
    </div>
  }
/>


const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes found.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
