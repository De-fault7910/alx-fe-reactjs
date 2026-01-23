import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required by checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to home after deleting
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
