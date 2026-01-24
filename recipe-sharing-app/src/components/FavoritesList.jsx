import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((r) => r.id === id))
      .filter(Boolean)
  );
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p style={{ padding: '20px' }}>No favorites yet.</p>;

  return (
    <div style={{ padding: '20px', marginTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
          <p style={{ margin: '0 0 10px 0' }}>{recipe.description}</p>
          <button
            onClick={() => removeFavorite(recipe.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#ff4d4f',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
