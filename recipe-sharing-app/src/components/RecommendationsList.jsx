import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations || recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div style={{ padding: '20px', marginTop: '20px' }}>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#f0f8ff',
          }}
        >
          <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
          <p style={{ margin: '0' }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
