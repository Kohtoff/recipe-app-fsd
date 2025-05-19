// type Props = {}

import { CategoryItem } from "entities/category";
import { useState } from "react";

const categories = ["meal", "sushi", "beef", "pasta", "american", "kurkruma"];

export const CategoryList = () => {
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );

  const onToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      const filteredList = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
      setSelectedCategories(filteredList);
      return;
    }
    setSelectedCategories((prev) => [...prev, category]);
  };

  return (
    <div className="flex max-w-screen overflow-auto gap-4 px-6 pb-3">
      {categories.map((category, index) => {
        const isSelected = selectedCategories.includes(category);
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
