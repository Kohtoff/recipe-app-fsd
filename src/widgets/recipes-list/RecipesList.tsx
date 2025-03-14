
// type Props = {}

import { RecipeCard } from "entities/recipe/RecipeCard";

const categories = ["meal", "sushi", "beef", "pasta", "american", "kurkruma"];

export const CategoryList = () => {
  return (
    <div className="flex max-w-screen overflow-auto gap-4 px-6 pb-3">
      {categories.map((category, index) => (
        <RecipeCard key={index} category={category} />
      ))}
    </div>
  );
};
