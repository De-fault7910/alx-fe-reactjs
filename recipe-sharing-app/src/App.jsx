import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav style={{ padding: '15px', backgroundColor: '#222' }}>
        <Link to="/" style={{ color: 'white', marginRight: '10px' }}>
          Home
        </Link>
        <Link to="/recipes" style={{ color: 'white' }}>
          Recipes
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div style={{ padding: '20px' }}>
              <h1>Recipe Sharing App</h1>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </div>
          }
        />

        {/* Recipe Details Page */}
        <Route path="/recipes/:id" element={<RecipeDetailWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper to extract recipeId from URL
const RecipeDetailWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
