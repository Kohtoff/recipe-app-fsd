// type Props = {}

import { CategoryItem } from "entities/category";
import { useProductFilters } from "widgets/recipes-filters";

const categoriesOptions = ["meal", "sushi", "beef", "pasta", "american", "kurkruma"];

export const CategoryList = () => {
  const { categories, setFilters } = useProductFilters();
  

  const onToggle = (category: string) => {
    if (categories.includes(category)) {
      const filteredList = categories.filter(
        (selectedCategory) => selectedCategory !== category
      );
      setFilters({ categories: filteredList });
      return;
    }
    setFilters({ categories: [...categories, category]});
    
  };

  return (
    <div className="flex max-w-screen overflow-auto gap-4 px-6 pb-3">
      {categoriesOptions.map((category, index) => {
        const isSelected = categories.includes(category);
        return (
          <CategoryItem
            onClick={onToggle}
            isSelected={isSelected}
            key={index}
            category={category}
          />
        );
      })}
    </div>
  );
};
