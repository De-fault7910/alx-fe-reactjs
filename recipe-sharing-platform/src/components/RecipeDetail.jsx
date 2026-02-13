import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {recipe.summary}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Ingredients
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Navigation */}
          <Link
            to="/"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            ← Back to recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
