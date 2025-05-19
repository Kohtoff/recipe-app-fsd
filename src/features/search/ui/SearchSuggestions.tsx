import { CategoryItem } from "entities/category";

const suggestions = ["sushi", "sandwich", "seafood", "fried rice"];

export function SearchSuggestions() {
  return (
    <div className="pt-6">
      <h2 className="text-[#3E5481]">Search suggestions</h2>
      <ul className="flex flex-wrap gap-4 mt-6">
        {suggestions.map((suggestion) => (
          <CategoryItem key={suggestion} category={suggestion} onClick={() => {}} />
        ))}
      </ul>
    </div>
  );
}
